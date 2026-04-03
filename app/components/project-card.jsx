"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const previewImages = project.previewImages ?? [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const hasMultipleImages = previewImages.length > 1;
  const activeImage = previewImages[activeImageIndex];

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (!previewImages.length) return currentIndex;
      return currentIndex === 0 ? previewImages.length - 1 : currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (!previewImages.length) return currentIndex;
      return currentIndex === previewImages.length - 1 ? 0 : currentIndex + 1;
    });
  };

  return (
    <article className="card">
      <p className="tag">{project.category}</p>
      {activeImage ? (
        <>
          <div className="project-preview">
            <div className="project-preview-surface">
              <img
                className="project-preview-image"
                src={activeImage.src}
                alt={activeImage.alt}
                loading="lazy"
                style={{
                  "--project-preview-scale": activeImage.previewScale ?? 1
                }}
              />
            </div>
          </div>
          {hasMultipleImages ? (
            <div className="project-preview-controls">
              <button
                type="button"
                className="project-preview-arrow project-preview-arrow-left"
                aria-label={`Show previous ${project.title} screenshot`}
                onClick={showPreviousImage}
              >
                <svg className="project-preview-arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="project-preview-counter" aria-live="polite">
                {activeImageIndex + 1} / {previewImages.length}
              </span>
              <button
                type="button"
                className="project-preview-arrow project-preview-arrow-right"
                aria-label={`Show next ${project.title} screenshot`}
                onClick={showNextImage}
              >
                <svg className="project-preview-arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ) : null}
        </>
      ) : null}
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {project.techStack?.length ? (
        <div className="project-stack" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((technology) => (
            <span key={technology} className="project-stack-chip">
              {technology}
            </span>
          ))}
        </div>
      ) : null}
      <a
        href={project.link}
        target={project.link.startsWith("http") ? "_blank" : undefined}
        rel={project.link.startsWith("http") ? "noreferrer" : undefined}
      >
        View Website
      </a>
    </article>
  );
}
