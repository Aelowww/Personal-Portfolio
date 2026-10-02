export const metadata = {
  title: "LEGACY RESPONSIVE WEB DESIGN V8 CERTIFICATE"
};

const IMAGE_SRC = "/Certificates/LEGACY%20RESPONSIVE%20WEB%20DESIGN%20V8.png";

export default function LegacyResponsiveWebDesignV8CertificateViewPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: "0",
        background: "#0a1020",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        src={IMAGE_SRC}
        alt="LEGACY RESPONSIVE WEB DESIGN V8 CERTIFICATE"
        style={{
          display: "block",
          maxWidth: "100%",
          maxHeight: "100vh",
          objectFit: "contain"
        }}
      />
    </main>
  );
}
