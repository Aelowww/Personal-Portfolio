export default function GallerySlider({ slides }) {
  if (!slides.length) return null;

  return (
    <div className="gallery-slider" aria-label="Portfolio gallery">
      <div className="gallery-track">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="gallery-group" aria-hidden={copyIndex === 1}>
            {slides.map((slide, index) => (
              <figure key={`${copyIndex}-${slide.src}-${index}`} className="gallery-slide">
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
