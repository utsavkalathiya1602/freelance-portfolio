import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F5EF",
          padding: 72,
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -3 }}>{siteConfig.brandMark}</div>
          <div style={{ fontSize: 24, color: "#66645E" }}>{siteConfig.shortLocation}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>
            Digital experiences that move your business forward.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
            <div style={{ background: "#C8F169", borderRadius: 999, padding: "14px 28px", fontSize: 28, fontWeight: 700 }}>
              Website Development
            </div>
            <div style={{ background: "#D8CCFF", borderRadius: 999, padding: "14px 28px", fontSize: 28, fontWeight: 700 }}>
              Digital Marketing
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
