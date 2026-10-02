export const metadata = {
  title: "FRONT-END DEVELOPMENT LIBRARIES V8 CERTIFICATE"
};

const PDF_SRC = "/Certificates/FRONT-END%20DEVELOPMENT%20LIBRARIES%20V8.pdf";

export default function FrontEndDevelopmentLibrariesV8CertificateViewPage() {
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
        title="FRONT-END DEVELOPMENT LIBRARIES V8 CERTIFICATE PDF"
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
