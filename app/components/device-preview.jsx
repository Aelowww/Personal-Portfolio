"use client";

import { useState } from "react";
import ScreenshotLightbox from "./screenshot-lightbox";

function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 20h6M12 16.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 17.8h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Internal links ("/") are this site; projects without a live link show no address.
function displayHost(link) {
  if (!link) return null;
  if (!/^https?:\/\//.test(link)) return "carldev.vercel.app";
  return new URL(link).host;
}

// Shows a project's cover inside a browser or phone frame, with a
// Desktop/Mobile switch when both captures exist (mobile-only projects start
// on the phone frame). Clicking opens the lightbox.
export default function DevicePreview({ project, size = "card" }) {
  const { cover, gallery = [], title, link } = project;
  const hasBoth = Boolean(cover.desktop && cover.mobile);
  const [view, setView] = useState(cover.desktop ? "desktop" : "mobile");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const image = cover[view];
  const viewImages = gallery.filter((item) => item.viewport === view);
  const lightboxImages = viewImages.length ? viewImages : gallery;

  const openLightbox = () => {
    const start = lightboxImages.findIndex((item) => item.src === image.src);
    setLightboxIndex(start === -1 ? 0 : start);
  };

  return (
    <div className={`device-preview device-preview-${size}`}>
      <button
        type="button"
        className={`device-stage device-stage-${view}`}
        onClick={openLightbox}
        aria-label={`Open ${title} ${view} screenshots`}
      >
        {view === "desktop" ? (
          <span className="browser-frame">
            <span className="browser-bar" aria-hidden="true">
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              {displayHost(link) ? <span className="browser-url">{displayHost(link)}</span> : null}
            </span>
            <span className="browser-screen">
              <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
            </span>
          </span>
        ) : (
          <span className="phone-frame">
            <span className="phone-notch" aria-hidden="true" />
            <span className="phone-screen">
              <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
            </span>
          </span>
        )}
        <span className="device-expand" aria-hidden="true">
          <ExpandIcon />
          {lightboxImages.length > 1 ? `${lightboxImages.length} screens` : "Enlarge"}
        </span>
      </button>

      {hasBoth ? (
        <div className="viewport-switch" role="group" aria-label={`${title} preview size`}>
          <button type="button" aria-pressed={view === "desktop"} onClick={() => setView("desktop")}>
            <DesktopIcon />
            Desktop
          </button>
          <button type="button" aria-pressed={view === "mobile"} onClick={() => setView("mobile")}>
            <MobileIcon />
            Mobile
          </button>
        </div>
      ) : null}

      <ScreenshotLightbox
        title={title}
        images={lightboxImages}
        index={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
