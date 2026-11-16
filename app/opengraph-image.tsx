import { ImageResponse } from "next/og";
import { profile } from "./data/profile";
import theme from "./data/theme.json";

export const alt = "Bazian Prudens — Applied AI, automation, and business solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: theme["--bg"],
          color: theme["--text"],
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: theme["--surface"],
              color: theme["--text"],
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            BP
          </div>
          <span style={{ color: theme["--muted"], fontSize: 24 }}>Portfolio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              color: theme["--soft"],
              fontSize: 34,
              lineHeight: 1.4,
            }}
          >
            {profile.focus}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 24,
            borderTop: `1px solid ${theme["--hair"]}`,
            color: theme["--tint"],
            fontSize: 24,
          }}
        >
          Business thinking. Practical technology.
        </div>
      </div>
    ),
    size,
  );
}
