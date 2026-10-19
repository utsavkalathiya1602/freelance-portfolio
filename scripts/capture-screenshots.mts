/**
 * Captures real desktop and mobile screenshots of live project websites
 * using a local Chromium-based browser (Microsoft Edge or Chrome) in headless mode.
 *
 * Run:  node scripts/capture-screenshots.mts [slug]
 * Output: public/images/projects/<slug>/<name>.jpg  (local fallback; upload with `npm run images:upload`)
 *
 * Set BROWSER_PATH to use a different Chromium browser executable.
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

type Shot = {
  name: string;
  device: "desktop" | "mobile";
  /** CSS selector to scroll to, or "top". */
  target: string;
};

type Site = { slug: string; url: string; shots: Shot[] };

const sites: Site[] = [
  {
    slug: "devam-event-studio",
    url: "https://devamevent.onrender.com/",
    shots: [
      { name: "desktop-home", device: "desktop", target: "top" },
      { name: "desktop-about", device: "desktop", target: "text:AboutDevam" },
      { name: "desktop-timeline", device: "desktop", target: "text:The Devam Timeline" },
      { name: "desktop-services", device: "desktop", target: "text:OurServices" },
      { name: "mobile-home", device: "mobile", target: "top" },
      { name: "mobile-services", device: "mobile", target: "text:OurServices" },
    ],
  },
  {
    slug: "aarshdeep-dental-clinic",
    url: "https://patient-clinic-harmony.lovable.app/",
    shots: [
      { name: "desktop-home", device: "desktop", target: "top" },
      { name: "desktop-booking", device: "desktop", target: "text:Book your visit in 30 seconds" },
      { name: "desktop-treatments", device: "desktop", target: "text:Complete dental care under one roof" },
      { name: "desktop-dentists", device: "desktop", target: "text:Specialists who explain before they treat" },
      { name: "mobile-home", device: "mobile", target: "top" },
      { name: "mobile-booking", device: "mobile", target: "text:Book your visit in 30 seconds" },
    ],
  },
  {
    slug: "hotel-bhabha",
    url: "https://hotelbhabha.lovable.app/",
    shots: [
      { name: "desktop-home", device: "desktop", target: "top" },
      { name: "desktop-rooms", device: "desktop", target: "text:Rooms designed for restful nights" },
      { name: "desktop-offers", device: "desktop", target: "text:Better when you book direct" },
      { name: "desktop-dining", device: "desktop", target: "text:The traditional taste, plated with care" },
      { name: "mobile-home", device: "mobile", target: "top" },
      { name: "mobile-offers", device: "mobile", target: "text:Better when you book direct" },
    ],
  },
  {
    slug: "clinicqueue",
    url: "https://clinicqueues.com/",
    shots: [
      { name: "desktop-home", device: "desktop", target: "top" },
      { name: "desktop-features", device: "desktop", target: "text:Everything you need to run a calm queue" },
      { name: "desktop-steps", device: "desktop", target: "text:From booking to consult, in five steps" },
      { name: "desktop-pricing", device: "desktop", target: "text:Start free. Upgrade as you grow." },
      { name: "mobile-home", device: "mobile", target: "top" },
      { name: "mobile-features", device: "mobile", target: "text:Everything you need to run a calm queue" },
    ],
  },
];

const devices = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, mobile: true },
};

const browserCandidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter((path): path is string => Boolean(path));

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class CDP {
  private id = 0;
  private pending = new Map<number, { resolve: (v: unknown) => void; reject: (e: Error) => void }>();
  private listeners = new Map<string, ((params: unknown) => void)[]>();

  private socket: WebSocket;

  constructor(socket: WebSocket) {
    this.socket = socket;
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data));
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id)!;
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
      } else if (message.method) {
        for (const listener of this.listeners.get(message.method) ?? []) listener(message.params);
      }
    });
  }

  static async connect(url: string): Promise<CDP> {
    const socket = new WebSocket(url);
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });
    return new CDP(socket);
  }

  send<T = Record<string, unknown>>(method: string, params: Record<string, unknown> = {}): Promise<T> {
    const id = ++this.id;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject }));
  }

  once(method: string, timeoutMs: number): Promise<void> {
    return new Promise((resolve) => {
      const timer = setTimeout(resolve, timeoutMs);
      this.listeners.set(method, [
        () => {
          clearTimeout(timer);
          resolve();
        },
      ]);
    });
  }

  close() {
    this.socket.close();
  }
}

async function evaluate<T>(cdp: CDP, expression: string): Promise<T> {
  const result = await cdp.send<{ result: { value: T } }>("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.result.value;
}

/** Scrolls through the page so lazy images and scroll-reveal content render, then returns to the top. */
const warmUpScript = `(async () => {
  const step = Math.round(innerHeight * 0.8);
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 250));
  }
  scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 800));
  return document.documentElement.scrollHeight;
})()`;

/** Hides hosting-platform overlays (e.g. the "Edit with Lovable" badge) that are not part of the site design. */
const hideOverlaysScript = `(() => {
  for (const el of document.querySelectorAll('a[href*="lovable"], #lovable-badge, [id*="lovable"]')) {
    let node = el;
    while (node && node !== document.body && getComputedStyle(node).position !== 'fixed') node = node.parentElement;
    (node && node !== document.body ? node : el).style.setProperty('display', 'none', 'important');
  }
  return true;
})()`;

function scrollScript(target: string): string {
  if (target === "top") return "(scrollTo(0, 0), true)";
  const finder = target.startsWith("text:")
    ? `[...document.querySelectorAll('h1,h2,h3')].find((el) => el.textContent.trim().includes(${JSON.stringify(target.slice(5))}))`
    : `document.querySelector(${JSON.stringify(target)})`;
  return `(() => {
    const el = ${finder};
    if (!el) return false;
    // Scroll to the heading itself (wrapping sections can span the whole page), leaving room for a sticky header.
    const top = el.getBoundingClientRect().top + scrollY;
    scrollTo(0, Math.max(0, top - (innerWidth < 768 ? 120 : 160)));
    return true;
  })()`;
}

async function capture(port: number, site: Site, outDir: string) {
  for (const device of ["desktop", "mobile"] as const) {
    const shots = site.shots.filter((shot) => shot.device === device);
    if (shots.length === 0) continue;

    const target = (await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json()) as {
      id: string;
      webSocketDebuggerUrl: string;
    };
    const cdp = await CDP.connect(target.webSocketDebuggerUrl);
    try {
      await cdp.send("Page.enable");
      await cdp.send("Runtime.enable");
      await cdp.send("Emulation.setDeviceMetricsOverride", devices[device]);
      if (device === "mobile") {
        await cdp.send("Emulation.setUserAgentOverride", {
          userAgent:
            "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36",
        });
        await cdp.send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
      }

      const loaded = cdp.once("Page.loadEventFired", 120_000);
      await cdp.send("Page.navigate", { url: site.url });
      await loaded;
      await sleep(4000);
      await evaluate(cdp, warmUpScript);
      await evaluate(cdp, hideOverlaysScript);

      for (const shot of shots) {
        const found = await evaluate<boolean>(cdp, scrollScript(shot.target));
        if (!found) {
          console.warn(`  ! ${site.slug}/${shot.name}: target "${shot.target}" not found, skipped`);
          continue;
        }
        await sleep(1500);
        const { data } = await cdp.send<{ data: string }>("Page.captureScreenshot", { format: "jpeg", quality: 88 });
        const file = join(outDir, `${shot.name}.jpg`);
        await writeFile(file, Buffer.from(data, "base64"));
        console.log(`  ✓ ${file}`);
      }
    } finally {
      cdp.close();
      await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`).catch(() => undefined);
    }
  }
}

async function main() {
  const only = process.argv[2];
  const selected = only ? sites.filter((site) => site.slug === only) : sites;
  if (selected.length === 0) throw new Error(`Unknown slug "${only}". Options: ${sites.map((s) => s.slug).join(", ")}`);

  const browser = browserCandidates.find((path) => existsSync(path));
  if (!browser) throw new Error("No Chromium browser found. Set BROWSER_PATH to Edge or Chrome.");

  const port = 9300 + Math.floor(Math.random() * 600);
  const profile = join(tmpdir(), `portfolio-capture-${Date.now()}`);
  const child = spawn(
    browser,
    ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--mute-audio", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"],
    { stdio: "ignore" },
  );

  try {
    for (let attempt = 0; attempt < 50; attempt++) {
      try {
        await fetch(`http://127.0.0.1:${port}/json/version`);
        break;
      } catch {
        await sleep(200);
      }
    }

    for (const site of selected) {
      console.log(`${site.slug} — ${site.url}`);
      const outDir = join("public", "images", "projects", site.slug);
      await mkdir(outDir, { recursive: true });
      await capture(port, site, outDir);
    }
  } finally {
    // Close the whole browser process tree (Chromium spawns helper processes).
    if (process.platform === "win32" && child.pid) spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
    else child.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
