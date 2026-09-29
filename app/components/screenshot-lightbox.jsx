"use client";

import { useEffect, useRef } from "react";

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Full-screen screenshot viewer. `index` is null when closed.
export default function ScreenshotLightbox({ title, images, index, onChange, onClose }) {
  const dialogRef = useRef(null);
  const isOpen = index !== null && images.length > 0;
  const image = isOpen ? images[index] : null;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (event) => {
      if (!hasMultiple) return;
      if (event.key === "ArrowRight") onChange((index + 1) % images.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKey);
    document.documentElement.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("lightbox-open");
    };
  }, [isOpen, index, images.length, hasMultiple, onChange]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget || event.target.classList.contains("lightbox-stage")) {
      dialogRef.current?.close();
    }
  };

  return (
    <dialog ref={dialogRef} className="lightbox" aria-label={`${title} screenshots`} onClose={onClose} onClick={closeOnBackdrop}>
      {image ? (
        <div className="lightbox-stage">
          <figure className={`lightbox-figure lightbox-figure-${image.viewport ?? "desktop"}`}>
            <img key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" />
            <figcaption>
              <span>{image.caption ?? image.alt}</span>
              {hasMultiple ? (
                <span className="lightbox-count" aria-live="polite">
                  {index + 1} / {images.length}
                </span>
              ) : null}
            </figcaption>
          </figure>

          {hasMultiple ? (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-prev"
                aria-label="Previous screenshot"
                onClick={() => onChange((index - 1 + images.length) % images.length)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-next"
                aria-label="Next screenshot"
                onClick={() => onChange((index + 1) % images.length)}
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          ) : null}

          <button type="button" className="lightbox-close" aria-label="Close screenshots" onClick={() => dialogRef.current?.close()}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      ) : null}
    </dialog>
  );
}
