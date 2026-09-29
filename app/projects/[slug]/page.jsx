import Link from "next/link";
import { notFound } from "next/navigation";
import DevicePreview from "../../components/device-preview";
import ProjectGallery from "../../components/project-gallery";
import { ArrowRightIcon, ProjectLinks } from "../../components/project-card";
import ThemeToggle from "../../components/theme-toggle";
import { getProject, projects } from "../../data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = project.summary;
  const ogImage = project.cover.desktop ?? project.cover.mobile;
  return {
    title: `${project.title} Case Study`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} Case Study`,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height }]
    }
  };
}

function CaseSection({ id, title, children }) {
  return (
    <section id={id} className="case-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const position = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "problem", title: "The problem" },
    { id: "goals", title: "Goals" },
    { id: "approach", title: "Approach" },
    { id: "features", title: "Key features" },
    { id: "challenges", title: "Challenges & solutions" },
    { id: "outcomes", title: "Outcomes" },
    { id: "learnings", title: "What I learned" },
    ...(caseStudy.nextSteps.length ? [{ id: "next-steps", title: "What I'd improve next" }] : []),
    { id: "screens", title: "Screens" }
  ];

  return (
    <div className="site case-study-page">
      <header className="nav-wrap">
        <nav className="nav case-nav" aria-label="Case study">
          <Link className="case-back" href="/#projects">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All projects
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section className="panel case-hero" aria-labelledby="case-title">
          <div className="case-hero-copy">
            <p className="eyebrow section-chip">Case study · {project.category}</p>
            <h1 id="case-title">{project.title}</h1>
            <p className="intro">{project.summary}</p>

            <dl className="case-facts">
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
            </dl>

            <ProjectLinks project={project} showCaseStudy={false} />
            {project.linkNote ? <p className="case-link-note">{project.linkNote}</p> : null}
          </div>

          <DevicePreview project={project} size="hero" />
        </section>

        <div className="case-layout">
          <aside className="case-aside">
            <div className="panel case-aside-card">
              <h2>Tech stack</h2>
              <dl className="case-stack">
                {project.techStack.map((technology) => (
                  <div key={technology.name}>
                    <dt>{technology.name}</dt>
                    <dd>{technology.purpose}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <nav className="panel case-aside-card case-toc" aria-label="On this page">
              <h2>On this page</h2>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="panel case-body">
            <CaseSection id="overview" title="Overview">
              <p>{caseStudy.overview}</p>
            </CaseSection>

            <CaseSection id="problem" title="The problem">
              <p>{caseStudy.problem}</p>
            </CaseSection>

            <CaseSection id="goals" title="Goals">
              <ul className="case-checklist">
                {caseStudy.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="approach" title="Approach">
              <p>{caseStudy.approach}</p>
            </CaseSection>

            <CaseSection id="features" title="Key features">
              <ul className="case-feature-grid">
                {caseStudy.features.map((feature) => (
                  <li key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.detail}</p>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="challenges" title="Challenges & solutions">
              <ol className="case-challenges">
                {caseStudy.challenges.map((challenge) => (
                  <li key={challenge.title}>
                    <h3>{challenge.title}</h3>
                    <div className="case-challenge-columns">
                      <div>
                        <p className="case-label">Problem</p>
                        <p>{challenge.problem}</p>
                      </div>
                      <div>
                        <p className="case-label case-label-solution">Solution</p>
                        <p>{challenge.solution}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </CaseSection>

            <CaseSection id="outcomes" title="Outcomes">
              <ul className="case-list">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="learnings" title="What I learned">
              <ul className="case-list">
                {caseStudy.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </CaseSection>

            {caseStudy.nextSteps.length ? (
              <CaseSection id="next-steps" title="What I'd improve next">
                <ul className="case-list">
                  {caseStudy.nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </CaseSection>
            ) : null}
          </article>
        </div>

        <section id="screens" className="panel case-screens" aria-labelledby="screens-title">
          <p className="eyebrow section-chip">Screens</p>
          <h2 id="screens-title">A closer look at {project.title}.</h2>
          <ProjectGallery title={project.title} images={project.gallery} />
        </section>

        <nav className="case-pager" aria-label="More projects">
          <Link className="panel case-pager-link" href={`/projects/${previous.slug}`}>
            <span className="case-pager-label">Previous project</span>
            <span className="case-pager-title">{previous.title}</span>
          </Link>
          <Link className="panel case-pager-link case-pager-next" href={`/projects/${next.slug}`}>
            <span className="case-pager-label">Next project</span>
            <span className="case-pager-title">
              {next.title}
              <ArrowRightIcon />
            </span>
          </Link>
        </nav>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Carl Gemuel Taberna. All rights reserved.</footer>
    </div>
  );
}
