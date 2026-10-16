/**
 * Uploads project screenshots to Cloudinary and records their dimensions.
 *
 * Run:   npm run images:upload            (reads .env.local)
 * Input: public/images/projects/<slug>/<name>.(jpg|png|webp)
 * Uses:  CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 * Output:
 *   - Cloudinary public IDs:  portfolio/projects/<slug>/<name>
 *   - src/data/cloudinary-manifest.json  (public ID → width, height, version)
 *
 * The API secret is only used here, on your machine. It is never sent to the browser.
 */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join } from "node:path";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error(
    "Missing Cloudinary settings. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env.local.",
  );
  process.exit(1);
}

const ROOT = "public/images/projects";
const FOLDER = "portfolio/projects";
const MANIFEST = "src/data/cloudinary-manifest.json";

type ManifestEntry = { width: number; height: number; version: number };

function sign(params: Record<string, string>): string {
  const toSign = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return createHash("sha1").update(toSign + apiSecret).digest("hex");
}

async function upload(file: string, publicId: string): Promise<ManifestEntry> {
  const params = { overwrite: "true", public_id: publicId, timestamp: String(Math.floor(Date.now() / 1000)) };
  const form = new FormData();
  form.append("file", new Blob([await readFile(file)]), file);
  form.append("api_key", apiKey!);
  for (const [key, value] of Object.entries(params)) form.append(key, value);
  form.append("signature", sign(params));

  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: form,
      });
      const body = (await response.json()) as { width?: number; height?: number; version?: number; error?: { message: string } };
      if (!response.ok || body.error) throw new Error(body.error?.message ?? `HTTP ${response.status}`);
      return { width: body.width!, height: body.height!, version: body.version! };
    } catch (error) {
      if (attempt === 4) throw error;
      console.warn(`  retrying ${publicId} (${(error as Error).message})`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
    }
  }
  throw new Error("unreachable");
}

async function main() {
  if (!existsSync(ROOT)) throw new Error(`No ${ROOT}/ folder. Run \`node scripts/capture-screenshots.mts\` first.`);

  const manifest: Record<string, ManifestEntry> = existsSync(MANIFEST)
    ? JSON.parse(await readFile(MANIFEST, "utf8"))
    : {};

  const only = process.argv[2];
  const slugs = (await readdir(ROOT, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && (!only || entry.name === only))
    .map((entry) => entry.name);

  for (const slug of slugs) {
    const files = (await readdir(join(ROOT, slug))).filter((name) => [".jpg", ".jpeg", ".png", ".webp"].includes(extname(name)));
    for (const name of files) {
      const publicId = `${FOLDER}/${slug}/${name.replace(extname(name), "")}`;
      const entry = await upload(join(ROOT, slug, name), publicId);
      manifest[publicId] = entry;
      console.log(`✓ ${publicId}  ${entry.width}×${entry.height}`);
    }
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`Updated ${MANIFEST}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
