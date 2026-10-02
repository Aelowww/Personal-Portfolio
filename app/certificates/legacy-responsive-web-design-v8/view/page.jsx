export const metadata = {
  title: "LEGACY RESPONSIVE WEB DESIGN V8 CERTIFICATE"
};

const PDF_SRC = "/Certificates/LEGACY%20RESPONSIVE%20WEB%20DESIGN%20V8.pdf";

export default function LegacyResponsiveWebDesignV8CertificateViewPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: "0",
        background: "#0a1020"
      }}
    >
      <iframe
        title="LEGACY RESPONSIVE WEB DESIGN V8 CERTIFICATE PDF"
        src={PDF_SRC}
        style={{
          border: "0",
          width: "100%",
          height: "100vh",
          display: "block"
        }}
      />
    </main>
  );
}
