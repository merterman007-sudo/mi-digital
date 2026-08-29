import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at 12% 12%, rgba(6, 182, 212, 0.35), transparent 32%), radial-gradient(circle at 88% 0%, rgba(99, 102, 241, 0.35), transparent 34%), linear-gradient(135deg, #041024 0%, #0b1d3c 55%, #11183a 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#67e8f9",
            marginBottom: 18,
          }}
        >
          MI DIGITAL
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: "88%" }}>
          Dijital büyüme için ölçülebilir strateji ve performans
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#cbd5e1" }}>
          SEO • Google Ads • Dönüşüm Optimizasyonu
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
