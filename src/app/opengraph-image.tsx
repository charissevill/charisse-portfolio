import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photoData = await readFile(
  join(process.cwd(), "public", profile.photo ?? "/profile/charisse.jpg"),
  "base64",
);
const photoSrc = `data:image/jpeg;base64,${photoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "linear-gradient(135deg, #0b0b14 0%, #1a1033 100%)",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={320}
          height={320}
          alt=""
          style={{
            borderRadius: 9999,
            border: "8px solid #8b5cf6",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 28, color: "#a78bfa" }}>Hi, my name is</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>
            {profile.name}
          </div>
          {profile.role && (
            <div style={{ fontSize: 36, color: "#22d3ee", marginTop: 8 }}>
              {profile.role}
            </div>
          )}
          <div
            style={{
              fontSize: 28,
              color: "#c4c4d4",
              marginTop: 24,
              lineHeight: 1.4,
            }}
          >
            {profile.tagline}
          </div>
          <div style={{ fontSize: 24, color: "#8b8ba0", marginTop: 32 }}>
            charisse-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
