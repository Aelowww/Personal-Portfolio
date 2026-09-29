"use client";

import { useState } from "react";
import ScreenshotLightbox from "./screenshot-lightbox";

// Filters use an image's `group` (e.g. student/faculty) when set, otherwise its viewport.
const filterLabels = {
  all: "All",
  desktop: "Desktop",
  mobile: "Mobile",
  app: "In-app",
  student: "Student",
  faculty: "Faculty",
  public: "Sign-in"
};

const filterKey = (image) => image.group ?? image.viewport;

export default function ProjectGallery({ title, images }) {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const available = ["all", ...Object.keys(filterLabels).filter((key) => key !== "all" && images.some((image) => filterKey(image) === key))];
  const visible = filter === "all" ? images : images.filter((image) => filterKey(image) === filter);

  return (
    <div className="project-gallery">
      {available.length > 2 ? (
        <div className="gallery-filters" role="group" aria-label="Filter screenshots">
          {available.map((key) => (
            <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>
              {filterLabels[key]}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="gallery-grid">
        {visible.map((image, index) => (
          <li key={image.src}>
            <button type="button" className={`gallery-thumb gallery-thumb-${image.viewport}`} onClick={() => setLightboxIndex(index)}>
              <span className="gallery-thumb-frame">
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
              </span>
              <span className="gallery-thumb-caption">{image.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <ScreenshotLightbox
        title={title}
        images={visible}
        index={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
