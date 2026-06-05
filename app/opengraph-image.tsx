import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nelson Kouame — Développeur FullStack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Left: Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            flex: 1,
            position: "relative",
          }}
        >
          {/* Available badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <span
              style={{
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              DISPONIBLE POUR OPPORTUNITÉS
            </span>
          </div>

          {/* Small label */}
          <span style={{ color: "#64748b", fontSize: 18, fontWeight: 500 }}>
            Bonjour, je suis
          </span>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span
              style={{
                fontSize: 88,
                fontWeight: 900,
                color: "#f1f5f9",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              Nelson
            </span>
            <span
              style={{
                fontSize: 88,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background: "linear-gradient(90deg, #a855f7, #8b5cf6, #3b82f6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Kouame.
            </span>
          </div>

          {/* Role */}
          <span
            style={{ color: "#94a3b8", fontSize: 26, fontWeight: 600, marginTop: 8 }}
          >
            Développeur FullStack
          </span>

          {/* Tech stack */}
          <div style={{ display: "flex", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
            {["React", "Next.js", "TypeScript", "Node.js", "NestJS"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(139,92,246,0.3)",
                  background: "rgba(139,92,246,0.1)",
                  color: "#c4b5fd",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, marginTop: 12 }}>
            {[
              { value: "10+", label: "Projets" },
              { value: "3+",  label: "Ans Exp." },
              { value: "12+", label: "Technos" },
            ].map(({ value, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ color: "#f1f5f9", fontSize: 28, fontWeight: 900 }}>{value}</span>
                <span style={{ color: "#64748b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: URL & branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 12,
            position: "relative",
          }}
        >
          <div
            style={{
              padding: "10px 22px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            nelsonkouame.dev
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#475569",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <span>📍</span>
            <span>Abidjan, Côte d&apos;Ivoire</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
