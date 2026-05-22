import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Turminha do Bem - Podcast Infantil & Diálogo Inclusivo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Cheerful OG Image for WhatsApp and Social Media
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            fontSize: "40px",
          }}
        >
          ☁️
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "50px",
            fontSize: "50px",
          }}
        >
          ☁️
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "100px",
            fontSize: "30px",
          }}
        >
          ⭐
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "35px",
          }}
        >
          🎨
        </div>

        {/* Header decoration */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              background: "#00AEEF",
              color: "white",
              fontSize: "14px",
              fontWeight: "900",
              padding: "6px 14px",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            UEG UnU Iporá • Projeto de Extensão
          </span>
        </div>

        {/* Core Branding Panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Main Title resembling the logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span style={{ fontSize: "70px" }}>🎙️</span>
            <h1
              style={{
                fontSize: "76px",
                fontWeight: "900",
                color: "#1E3A8A",
                margin: 0,
                letterSpacing: "-2px",
                textShadow: "2px 2px 0px rgba(0, 174, 239, 0.2)",
              }}
            >
              TURMINHA DO BEM
            </h1>
          </div>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#00AEEF",
              marginTop: "10px",
              marginBottom: "0px",
            }}
          >
            Podcast Infantil & Diálogo Inclusivo
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#64748B",
              fontWeight: "500",
              marginTop: "14px",
              maxWidth: "800px",
              lineHeight: "1.5",
            }}
          >
            Educar sobre direitos da criança e do adolescente (ECA / ECA Digital) é semear um futuro mais justo e cheio de possibilidades! Chat com IA, jogos e foley de acessibilidade.
          </p>
        </div>

        {/* Footer info containing characters emojis */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #E2E8F0",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "24px",
            }}
          >
            <span>👧🏻 Ava</span>
            <span style={{ margin: "0 4px", color: "#CBD5E1" }}>|</span>
            <span>👦🏽 Biel</span>
            <span style={{ margin: "0 4px", color: "#CBD5E1" }}>|</span>
            <span>👧🏽 Léia</span>
            <span style={{ margin: "0 4px", color: "#CBD5E1" }}>|</span>
            <span>👦🏼 Otto</span>
            <span style={{ margin: "0 4px", color: "#CBD5E1" }}>|</span>
            <span>👦🏾 Cauê</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#1DB954",
              padding: "10px 20px",
              borderRadius: "14px",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <span>🟢 Disponível no Spotify Oficial</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
