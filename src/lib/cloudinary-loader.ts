"use client";

/**
 * next/image loader: lets Cloudinary resize and pick the best format/quality,
 * so images are not processed twice. Non-Cloudinary sources are returned unchanged.
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!src.includes("res.cloudinary.com/") || !src.includes("/image/upload/")) return src;
  const transforms = ["f_auto", `q_${quality ?? "auto"}`, "c_limit", `w_${width}`].join(",");
  return src.replace("/image/upload/", `/image/upload/${transforms}/`);
}
