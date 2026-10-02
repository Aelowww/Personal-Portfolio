import Link from "next/link";

const certificates = [
  {
    title: "Front-End Development Libraries V8 Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/front-end-development-libraries-v8/view",
    previewImage: "/Certificates/FRONT-END%20DEVELOPMENT%20LIBRARIES%20V8.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures V7 Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/legacy-javascript-algorithms-v7/view",
    previewImage: "/Certificates/LEGACY%20JAVASCRIPT%20ALGORITHMS%20AND%20DATA%20STRUCTURES%20V7.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Legacy Responsive Web Design V8 Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/legacy-responsive-web-design-v8/view",
    previewImage: "/Certificates/LEGACY%20RESPONSIVE%20WEB%20DESIGN%20V8.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Front-End Development Libraries Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/front-end-development-libraries/view",
    previewImage: "/Certificates/FRONT-END%20DEVELOPMENT%20LIBRARIES.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Responsive Web Design Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/responsive-web-design/view",
    previewImage: "/Certificates/RESPONSIVE%20WEB%20DESIGN%20CERTIFICATE.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Relational Database V8 Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/relational-database-v8/view",
    previewImage: "/Certificates/RELATIONAL%20DATABASE%20V8%20CERTIFICATE.png",
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
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/javascript/view",
    previewImage: "/Certificates/JAVASCRIPT%20CERTIFICATE.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
  },
  {
    title: "Relational Database Certificate",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/relational-database/view",
    previewImage: "/Certificates/RELATIONAL%20DATABASE%20CERTIFICATE.png",
    previewScale: 1.2,
    previewShiftY: "-2px"
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
