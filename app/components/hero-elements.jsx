export function StackIcon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8
  };

  if (name === "code") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 4l-4 16" />
      </svg>
    );
  }
  if (name === "screen") {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M9 21h6M12 17v4" />
      </svg>
    );
  }
  if (name === "atom") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="1.6" />
        <path d="M6 12c0-4 2.7-7 6-7s6 3 6 7-2.7 7-6 7-6-3-6-7Z" />
      </svg>
    );
  }
  if (name === "server") {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
        <path d="M8 7h.01M8 17h.01M12 7h6M12 17h6" />
      </svg>
    );
  }
  if (name === "db") {
    return (
      <svg {...common} aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7" ry="3.5" />
        <path d="M5 6.5v5c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-5" />
      </svg>
    );
  }
  if (name === "design") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <circle cx="9" cy="13" r="3" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="m9 3 6 6-6 6-6-6 6-6ZM12 9l9 9M3 12l9 9" />
    </svg>
  );
}

function ButtonIcon({ name }) {
  if (name === "resume") {
    return (
      <svg className="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3h7l5 5v13H7z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 3v5h5M9 13h8M9 17h6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg className="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg className="button-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 4.5 6 7c-.8.8-.9 2-.3 3 1.7 3 4.2 5.5 7.2 7.2 1 .6 2.2.5 3-.3l2.5-2.5a2 2 0 0 1 2 .5l1.1 1.4a2 2 0 0 1-.2 2.7l-1.2 1.2c-.9.9-2.2 1.3-3.4 1-8-1.8-14.3-8.1-16.1-16.1-.3-1.2.1-2.5 1-3.4L2.9.6a2 2 0 0 1 2.7-.2L7 1.5a2 2 0 0 1 .5 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ActionButtons({ className }) {
  return (
    <div className={className}>
      <a className="profile-button profile-button-solid" href="/resume/view" target="_blank" rel="noreferrer">
        <ButtonIcon name="resume" />
        View Resume
      </a>
      <a
        className="profile-button profile-button-ghost"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=taberna.carlq11a@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonIcon name="email" />
        Send an Email
      </a>
      <a className="profile-button profile-button-call" href="tel:+639079240488">
        <ButtonIcon name="call" />
        Make a Call
      </a>
    </div>
  );
}

export function HeroIdentity({ className }) {
  return (
    <div className={className}>
      <h3>Carl Gemuel Taberna</h3>
      <p className="aspiring-line">2ND YEAR BSIT STUDENT / ASPIRING FULL-STACK DEVELOPER</p>
      <a
        className="location-link"
        href="https://www.google.com/maps/search/?api=1&query=Iloilo+City+Philippines"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Iloilo City location in Google Maps"
      >
        <svg className="location-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        Iloilo City, Philippines
      </a>
    </div>
  );
}
