export const metadata = {
  title: "LEGACY JAVASCRIPT ALGORITHMS AND DATA STRUCTURES V7 CERTIFICATE"
};

const PDF_SRC = "/Certificates/LEGACY%20JAVASCRIPT%20ALGORITHMS%20AND%20DATA%20STRUCTURES%20V7.pdf";

export default function LegacyJavascriptAlgorithmsV7CertificateViewPage() {
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
        title="LEGACY JAVASCRIPT ALGORITHMS AND DATA STRUCTURES V7 CERTIFICATE PDF"
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
