import Link from "next/link";
import { ActionButtons, HeroIdentity, StackIcon } from "./components/hero-elements";
import GallerySlider from "./components/gallery-slider";
import ProfilePhoto from "./components/profile-photo";
import ProjectCard from "./components/project-card";
import ThemeToggle from "./components/theme-toggle";
import ContactForm from "./components/contact-form";
import { projects } from "./data/projects";
import { skillGroups, skills } from "./data/skills";

const certificates = [
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
  }
];

const galleryVersion = "20260318-0257";
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carl Gemuel Taberna",
  url: "https://carldev.vercel.app",
  image: "https://carldev.vercel.app/Portfolio-Photo/Portfolio%20Photo.jpg",
  jobTitle: "Aspiring Full-Stack Developer",
  description:
    "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring full-stack developer based in Iloilo City, Philippines.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Iloilo City",
    addressCountry: "PH"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Western Institute of Technology"
  },
  sameAs: [
    "https://github.com/Aelowww",
    "https://www.linkedin.com/in/carlgemueltaberna",
    "https://www.facebook.com/cgtaberna.10",
    "https://www.instagram.com/crlxgml/",
    "https://x.com/aelowww"
  ]
};

const galleryPhotos = [
  {
    src: `/Gallery/9ec30d49-45f3-4d42-897a-1881897309df.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 1"
  },
  {
    src: `/Gallery/c9cb84e0-381d-483d-b734-c4891251255f.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 2"
  },
  {
    src: `/Gallery/a4c16df2-f70c-48b1-8249-bec083a48e53.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 3"
  },
  {
    src: `/Gallery/9dabe1c1-c2a9-48e0-9bd6-344eb0c3abde.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 4"
  },
  {
    src: `/Gallery/e5ed610b-b3b9-4c5f-9c74-736ae82365c9.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 5"
  },
  {
    src: `/Gallery/d6a84459-47ff-4597-a90d-7551e9c06345.jpg?v=${galleryVersion}`,
    alt: "Portfolio gallery photo 6"
  }
];

const educationTimeline = [
  {
    title: "BS Information Technology - 2nd Year (Current)",
    detail: "Western Institute of Technology - Started IT track in 2024",
    year: "2026"
  },
  {
    title: "BS Civil Engineering",
    detail: "Western Institute of Technology - Started Civil Engineering in 2022 and shifted to IT in 2024",
    year: "2022"
  },
  {
    title: "Senior High School Graduate",
    detail: "Western Institute of Technology",
    year: "2022"
  },
  {
    title: "High School Graduate",
    detail: "Iloilo National High School",
    year: "2020"
  },
  {
    title: "Elementary Graduate",
    detail: "Bito-on Elementary School",
    year: "2016"
  }
];

const experienceTimeline = [
  {
    title: "Head Full-Stack Developer - Teech (School Project)",
    detail: "Leading full-stack development of a student–faculty consultation booking system built with Next.js, TypeScript and Supabase.",
    year: "Sep 2026"
  },
  {
    title: "Technical Support - iQor",
    detail: "Troubleshot router and satellite TV issues for customers.",
    year: "Jul 2026"
  },
  {
    title: "Technical Support - Transcom",
    detail: "Troubleshot telecommunication systems for customers.",
    year: "Apr 2026"
  },
  {
    title: "Project Manager - School Web Application Project",
    detail: "Led planning and execution for a school web application project.",
    year: "Mar 2026"
  },
  {
    title: "Operations Associate - Sagility, Iloilo City",
    detail:
      "Delivered technology-enabled healthcare support by managing appointment systems, updating patient scheduling records, and coordinating accurate service workflows.",
    year: "Jun 2025"
  },
  {
    title: "Started Programming Journey",
    detail: "Began learning programming fundamentals and building early practice projects.",
    year: "Jan 2024"
  },
  {
    title: "Operations Associate - WNS, Iloilo City",
    detail:
      "Provided technology-focused travel support by handling reservation systems, itinerary updates, refund processing, and real-time booking issue resolution.",
    year: "Mar 2023"
  }
];

export default function Home() {
  const year = new Date().getFullYear();
  const previewCertificates = certificates.slice(0, 3);

  return (
    <div className="site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
      <header className="nav-wrap">
        <nav className="nav">
          <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
            <a href="#gallery">Gallery</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section className="hero panel" id="home">
          <p className="eyebrow hero-home">HOME</p>
          <div className="hero-copy">
            <div className="hero-top">
              <div className="hero-quick-intro" aria-label="Quick introduction">
                <span>Based in Iloilo City</span>
                <span aria-hidden="true">|</span>
                <span>2nd Year BSIT</span>
                <span aria-hidden="true">|</span>
                <span>Open to Internship</span>
              </div>
              <div className="hero-status-chips" aria-label="Current status">
                <span>Internship Ready</span>
                <span>Full-Stack Track</span>
                <span>Open to Collaborations</span>
              </div>
            </div>

            <HeroIdentity className="hero-id hero-id-right" />

            <div className="hero-head">
              <h1>I build clean, modern web experiences with strong full-stack fundamentals.</h1>
            </div>

            <p className="intro">
              Aspiring full-stack developer focused on building modern interfaces, practical backend systems, and
              polished software experiences.
            </p>

            <div className="hero-lower">
              <div className="hero-stats">
                <article tabIndex={0}>
                  <strong>2+</strong>
                  <span>Years Learning</span>
                </article>
                <article tabIndex={0}>
                  <strong>4+</strong>
                  <span>Projects Built</span>
                </article>
                <article tabIndex={0}>
                  <strong>5+</strong>
                  <span>Core Tech Skills</span>
                </article>
              </div>
            </div>

            <ActionButtons className="about-actions about-actions-right" />
          </div>

          <div className="hero-photo-wrap">
            <HeroIdentity className="hero-id hero-id-left" />
            <div className="hero-photo">
              <ProfilePhoto />
            </div>
            <ActionButtons className="about-actions about-actions-left" />
          </div>
        </section>

        <section id="about" className="panel about-section">
          <p className="eyebrow section-chip">ABOUT</p>
          <h2>Focused on building practical, user-centered solutions.</h2>
          <div className="about-card">
            <p className="about-text">
              I am a Bachelor of Science in Information Technology student with a growing focus on building modern,
              user-centered digital solutions. My interests span web development, mobile applications, and software
              engineering, and I continue to strengthen my skills through hands-on projects and continuous learning.
            </p>
            <p className="about-text">
              I enjoy using technology to solve real-world problems, whether that means improving everyday processes or
              turning ideas into working applications. I am currently seeking internship opportunities where I can
              contribute, learn from experienced teams, and continue growing as a professional developer.
            </p>

            <div className="about-columns">
              <article className="about-block">
                <h3 className="about-block-title">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 4 3 9l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 11.5V15c0 1.9 2.2 3.5 5 3.5s5-1.6 5-3.5v-3.5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  Education
                </h3>
                <ul className="about-timeline">
                  {educationTimeline.map((item) => (
                    <li key={`${item.title}-${item.year}`}>
                      <p className="about-item-head">
                        <span>{item.title}</span>
                        <span>{item.year}</span>
                      </p>
                      <p className="about-item-detail">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="about-block">
                <h3 className="about-block-title">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 12h16" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  Experience
                </h3>
                <ul className="about-timeline">
                  {experienceTimeline.map((item) => (
                    <li key={`${item.title}-${item.year}`}>
                      <p className="about-item-head">
                        <span>{item.title}</span>
                        <span>{item.year}</span>
                      </p>
                      <p className="about-item-detail">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="panel tech skills-section">
          <p className="eyebrow section-chip">SKILLS</p>
          <h2>The tools and technologies I build with.</h2>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <section key={group.key} className="skills-group">
                <p className="skills-group-title">{group.label}</p>
                <div className="skills-grid">
                  {skills
                    .filter((item) => item.category === group.key)
                    .slice(0, 5)
                    .map((item) => (
                      <article key={item.name} className="skill-card" style={{ "--skill-tone": item.tone }}>
                        <h3 className="skill-title">
                          <StackIcon name={item.icon} />
                          {item.name}
                        </h3>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
          <div className="skills-view-all-wrap">
            <Link className="skills-view-all" href="/skills">
              Show All Skills
            </Link>
          </div>
        </section>

        <section id="projects" className="panel projects">
          <p className="eyebrow section-chip">PROJECTS</p>
          <h2>Selected work, with the thinking behind it.</h2>
          <p className="projects-intro">
            Switch between desktop and mobile previews, open the screenshots, or read the case study to see the
            problem, my approach, and what I learned.
          </p>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="certificates" className="panel certificates">
          <p className="eyebrow section-chip">CERTIFICATES</p>
          <h2>Certifications and credentials I have earned.</h2>
          <div className="certificate-cards">
            {previewCertificates.map((certificate) => (
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
                    View Certificate
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="certificates-view-all-wrap">
            <Link className="certificates-view-all" href="/certificates">
              View All Certificates
            </Link>
          </div>
        </section>

        <section id="contact" className="panel contact contact-section">
          <div className="contact-header">
            <p className="eyebrow section-chip">CONTACT</p>
            <h2>Get in touch for internships and collaborations.</h2>
          </div>

          <div className="contact-grid">
            <ContactForm />

            <aside className="contact-connect-card" aria-label="Connect with Carl">
              <h3>Connect with me</h3>

              <div className="contact-social-list" aria-label="Social links">
                <a className="contact-social contact-social-wide" href="https://www.facebook.com/cgtaberna.10" target="_blank" rel="noreferrer">
                  <svg className="contact-social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M13.2 19v-5.5h2.1l.4-2.5h-2.5V9.3c0-.8.3-1.5 1.5-1.5H16V5.6c-.2 0-.9-.1-1.8-.1-2.3 0-3.7 1.4-3.7 4v1.5H8.6v2.5h1.9V19"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a className="contact-social contact-social-wide" href="https://www.instagram.com/crlxgml/" target="_blank" rel="noreferrer">
                  <svg className="contact-social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="16.7" cy="7.4" r="0.9" fill="currentColor" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a className="contact-social contact-social-wide" href="https://www.linkedin.com/in/carlgemueltaberna" target="_blank" rel="noreferrer">
                  <svg className="contact-social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M8 11v5M8 8.5v.01M12 16v-3c0-1.2.8-2 2-2s2 .8 2 2v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a className="contact-social contact-social-wide" href="https://github.com/Aelowww" target="_blank" rel="noreferrer">
                  <svg className="contact-social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M9 18c-4 1.2-4-2-6-2m12 4v-3a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.6-1.3 5.6-5.9A4.6 4.6 0 0 0 18.5 6a4.3 4.3 0 0 0-.1-3.1s-1-.3-3.4 1.2a11.7 11.7 0 0 0-6 0C6.6 2.6 5.6 3 5.6 3A4.3 4.3 0 0 0 5.5 6a4.6 4.6 0 0 0-1.3 3.2c0 4.5 2.9 5.5 5.6 5.9A2.7 2.7 0 0 0 9 17v3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="gallery" className="panel gallery-section">
          <p className="eyebrow section-chip">GALLERY</p>
          <h2>A few personal moments beyond the work.</h2>
          <GallerySlider slides={galleryPhotos} />
        </section>
      </main>

      <footer className="footer">© {year} Carl Gemuel Taberna. All rights reserved.</footer>
    </div>
  );
}
