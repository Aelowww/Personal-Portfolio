export const metadata = {
  title: "RELATIONAL DATABASE V8 CERTIFICATE"
};

const PDF_SRC = "/Certificates/RELATIONAL%20DATABASE%20V8%20CERTIFICATE.pdf";

export default function RelationalDatabaseV8CertificateViewPage() {
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
        title="RELATIONAL DATABASE V8 CERTIFICATE PDF"
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
