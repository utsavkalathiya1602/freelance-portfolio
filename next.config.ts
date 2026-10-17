import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // The Google Ads page became the broader Digital Marketing page.
      { source: "/services/google-ads", destination: "/services/digital-marketing", permanent: true },
    ];
  },
  images: {
    // Project screenshots are served from Cloudinary, which handles resizing and formats.
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
