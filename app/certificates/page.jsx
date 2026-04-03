import Link from "next/link";

const certificates = [
  {
    title: "Responsive Web Design Certificate",
    issuer: "FreeCodeCamp",
    year: "2026",
    link: "/certificates/responsive-web-design/view",
    previewImage: "/Certificates/RESPONSIVE%20WEB%20DESIGN%20CERTIFICATE.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "HTML Fundamentals Certificate",
    issuer: "Codecred",
    year: "2026",
    link: "/certificates/html-fundamentals/view",
    previewImage: "/Certificates/HTML%20FUNDAMENTALS%20CERTIFICATE.png",
    previewScale: 1.1,
    previewShiftY: "-2px"
  },
  {
    title: "JavaScript Certificate",
    issuer: "FreeCodeCamp",
    year: "2026",
    link: "/certificates/javascript/view",
    previewImage: "/Certificates/JAVASCRIPT%20CERTIFICATE.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "API and Backend Development Certificate",
    issuer: "To be added",
    year: "Upcoming",
    link: "#"
  }
];

export default function CertificatesPage() {
  return (
    <div className="site certificates-page">
      <section className="panel certificates">
        <p className="eyebrow section-chip">ALL CERTIFICATES</p>
        <h2>A complete overview of my certificates and credentials.</h2>
        <div className="certificate-cards">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="certificate-card">
              <div className={`certificate-frame${certificate.link === "#" ? " certificate-frame-placeholder" : ""}`}>
                {certificate.previewImage ? (
                  <img
                    src={certificate.previewImage}
                    alt={`${certificate.title} preview`}
                    loading="lazy"
                    style={{
                      "--certificate-scale": certificate.previewScale ?? 1,
                      "--certificate-shift-y": certificate.previewShiftY ?? "0px"
                    }}
                  />
                ) : (
                  <span>Credential preview coming soon</span>
                )}
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <p className="certificate-year">{certificate.year}</p>
              {certificate.link === "#" ? (
                <span className="certificate-link-disabled">Credential Coming Soon</span>
              ) : (
                <a href={certificate.link} target="_blank" rel="noreferrer">
                  View Credential
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="certificates-view-all-wrap">
          <Link className="certificates-view-all" href="/#certificates">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
