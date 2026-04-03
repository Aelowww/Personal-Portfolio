export const metadata = {
  title: "HTML FUNDAMENTALS CERTIFICATE"
};

const PDF_SRC = "/Certificates/HTML%20FUNDAMENTALS%20CERTIFICATE.pdf";

export default function HtmlFundamentalsCertificateViewPage() {
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
        title="HTML FUNDAMENTALS CERTIFICATE PDF"
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
