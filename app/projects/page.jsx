import Link from "next/link";
import ProjectCard from "../components/project-card";
import { projects } from "../data/projects";

export const metadata = {
  title: "Projects",
  description: "Every project by Carl Gemuel Taberna, with desktop and mobile previews and a case study for each."
};

export default function ProjectsPage() {
  return (
    <div className="site projects-page">
      <section className="panel projects">
        <p className="eyebrow section-chip">ALL PROJECTS</p>
        <h2>Everything I've built, with the thinking behind it.</h2>
        <p className="projects-intro">
          Switch between desktop and mobile previews, open the screenshots, or read the case study to see the
          problem, my approach, and what I learned.
        </p>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="certificates-view-all-wrap">
          <Link className="certificates-view-all" href="/#projects">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
