export const metadata = {
  title: "CarlTaberna Resume"
};

const PDF_SRC = "/Resume/Carl%20Gemuel%20Taberna%20Resume.pdf";

export default function ResumeViewPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", margin: 0 }}>
      <iframe
        src={PDF_SRC}
        title="CarlTaberna Resume PDF"
        style={{ width: "100%", height: "100vh", border: 0 }}
      />
    </main>
  );
}
