"use client";

import Link from "next/link";

const containerStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background: "#0f172a",
  color: "#e2e8f0",
  fontFamily: "\"Space Grotesk\", sans-serif"
};

const cardStyle = {
  width: "min(560px, 100%)",
  padding: "28px",
  borderRadius: "20px",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  background: "rgba(15, 23, 42, 0.88)",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)"
};

const actionsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "18px"
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

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  padding: "10px 16px",
  border: "1px solid rgba(148, 163, 184, 0.28)",
  color: "#e2e8f0",
  textDecoration: "none",
  fontWeight: 700
};

export default function ErrorPage({ error, reset }) {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <p style={{ margin: 0, color: "#7aa2ff", fontWeight: 700, letterSpacing: "0.08em" }}>ERROR</p>
        <h2 style={{ margin: "12px 0 10px", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>Something went wrong.</h2>
        <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>
          The page hit an unexpected issue while rendering. Try again, or head back to the homepage.
        </p>
        {error.digest ? (
          <p style={{ margin: "14px 0 0", color: "#94a3b8", fontSize: "0.92rem" }}>Reference: {error.digest}</p>
        ) : null}
        <div style={actionsStyle}>
          <button type="button" onClick={() => reset()} style={primaryButtonStyle}>
            Try Again
          </button>
          <Link href="/" style={linkStyle}>
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
