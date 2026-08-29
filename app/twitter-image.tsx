import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "radial-gradient(circle at 10% 10%, rgba(14, 165, 233, 0.35), transparent 35%), linear-gradient(135deg, #061126 0%, #0b1d3d 55%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 2, color: "#67e8f9" }}>MI DIGITAL</div>
        <div style={{ marginTop: 16, fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>
          Daha az maliyetle daha fazla donusum
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
