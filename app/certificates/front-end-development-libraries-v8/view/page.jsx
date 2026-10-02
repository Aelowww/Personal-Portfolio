export const metadata = {
  title: "FRONT-END DEVELOPMENT LIBRARIES V8 CERTIFICATE"
};

const IMAGE_SRC = "/Certificates/FRONT-END%20DEVELOPMENT%20LIBRARIES%20V8.png";

export default function FrontEndDevelopmentLibrariesV8CertificateViewPage() {
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
        alt="FRONT-END DEVELOPMENT LIBRARIES V8 CERTIFICATE"
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
