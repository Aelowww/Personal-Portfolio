"use client";

const bodyStyle = {
  margin: 0,
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background: "#020617",
  color: "#e2e8f0",
  fontFamily: "\"Space Grotesk\", sans-serif"
};

const wrapperStyle = {
  width: "min(620px, 100%)",
  padding: "32px",
  borderRadius: "24px",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  background: "rgba(15, 23, 42, 0.94)",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)"
};

const buttonRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "20px"
};

const primaryButtonStyle = {
  border: "none",
  borderRadius: "999px",
  padding: "10px 16px",
  background: "#4f8dff",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer"
};

const secondaryButtonStyle = {
  borderRadius: "999px",
  padding: "10px 16px",
  border: "1px solid rgba(148, 163, 184, 0.28)",
  background: "transparent",
  color: "#e2e8f0",
  fontWeight: 700,
  cursor: "pointer"
};

export default function GlobalErrorPage({ error, reset }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={wrapperStyle}>
          <p style={{ margin: 0, color: "#7aa2ff", fontWeight: 700, letterSpacing: "0.08em" }}>GLOBAL ERROR</p>
          <h1 style={{ margin: "12px 0 10px", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>The app needs a fresh retry.</h1>
          <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>
            A top-level rendering error interrupted the app. Retry the render, or reload the page to recover.
          </p>
          {error.digest ? (
            <p style={{ margin: "14px 0 0", color: "#94a3b8", fontSize: "0.92rem" }}>Reference: {error.digest}</p>
          ) : null}
          <div style={buttonRowStyle}>
            <button type="button" onClick={() => reset()} style={primaryButtonStyle}>
              Retry Render
            </button>
            <button type="button" onClick={() => window.location.assign("/")} style={secondaryButtonStyle}>
              Reload Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
