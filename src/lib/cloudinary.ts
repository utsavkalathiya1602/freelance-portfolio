import manifest from "@/data/cloudinary-manifest.json";

/**
 * Project image helpers.
 *
 * Images are served from Cloudinary when they have been uploaded (listed in the manifest
 * written by `npm run images:upload`) and the cloud name is configured. Otherwise the same
 * screenshot is served from /public/images/projects as a fallback, so the site never shows
 * empty project cards.
 *
 * Only the public cloud name is used here; API credentials stay in scripts/upload-images.mts.
 * Cloudinary resizing, format and quality are applied per request by src/lib/cloudinary-loader.ts.
 */
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type ManifestEntry = { width: number; height: number; version: number };
const entries = manifest as Record<string, ManifestEntry>;

const CLOUDINARY_PREFIX = "portfolio/projects/";

/** Size of screenshots produced by scripts/capture-screenshots.mts. */
const capturedSize = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 780, height: 1688 },
};

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export function projectImage(publicId: string, device: "desktop" | "mobile"): ProjectImage {
  const entry = entries[publicId];
  if (cloudName && entry) {
    return {
      src: `https://res.cloudinary.com/${cloudName}/image/upload/v${entry.version}/${publicId}`,
      width: entry.width,
      height: entry.height,
    };
  }

  // Local fallback: portfolio/projects/<slug>/<name> → /images/projects/<slug>/<name>.jpg
  const path = publicId.startsWith(CLOUDINARY_PREFIX) ? publicId.slice(CLOUDINARY_PREFIX.length) : publicId;
  return { src: `/images/projects/${path}.jpg`, ...capturedSize[device] };
}
