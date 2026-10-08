import Link from "next/link";
import DevicePreview from "./device-preview";
import { isExternalLink } from "../data/projects";

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 18c-4 1.2-4-2-6-2m12 4v-3a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.6-1.3 5.6-5.9A4.6 4.6 0 0 0 18.5 6a4.3 4.3 0 0 0-.1-3.1s-1-.3-3.4 1.2a11.7 11.7 0 0 0-6 0C6.6 2.6 5.6 3 5.6 3A4.3 4.3 0 0 0 5.5 6a4.6 4.6 0 0 0-1.3 3.2c0 4.5 2.9 5.5 5.6 5.9A2.7 2.7 0 0 0 9 17v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectLinks({ project, showCaseStudy = true }) {
  const external = isExternalLink(project.link);

  return (
    <div className="project-actions">
      {showCaseStudy ? (
        <Link className="project-button project-button-primary" href={`/projects/${project.slug}`}>
          Read case study
          <ArrowRightIcon />
        </Link>
      ) : null}
      {external ? (
        <a className="project-button" href={project.link} target="_blank" rel="noreferrer">
          Live site
          <ExternalIcon />
        </a>
      ) : null}
      {project.repo ? (
        <a className="project-button" href={project.repo} target="_blank" rel="noreferrer">
          <GitHubIcon />
          Source code
        </a>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-row">
      <DevicePreview project={project} />

      <div className="project-info">
        <p className="project-meta">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          {project.status === "Ongoing" ? <span className="project-status">Ongoing</span> : null}
        </p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-description">{project.summary}</p>

        {project.highlights?.length ? (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        <ul className="project-stack" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((technology) => (
            <li key={technology.name} className="project-stack-chip">
              {technology.name}
            </li>
          ))}
        </ul>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
