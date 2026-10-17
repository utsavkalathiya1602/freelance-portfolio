import { ImageResponse } from "next/og";

/**
 * apple-touch-icon — served at /apple-touch-icon.png
 * Generated at build time by Next.js ImageResponse (180×180 PNG).
 * Uses the same UK. brand mark as the main favicon (src/app/icon.svg).
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 72,
            fontWeight: 800,
            color: "#C8F169",
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          UK.
        </span>
      </div>
    ),
    size,
  );
}
