"use client";

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `Portfolio inquiry from ${name || "a visitor"}`;
    const body = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message || "Hello Carl, I'd like to connect with you."
    ]
      .filter(Boolean)
      .join("\n");

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=taberna.carlq11a@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <label className="contact-field">
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
      </label>

      <label className="contact-field">
        <span>Email</span>
        <input type="email" name="email" placeholder="Your email" autoComplete="email" required />
      </label>

      <label className="contact-field contact-field-message">
        <span>Message</span>
        <textarea
          name="message"
          placeholder="What can we create together?"
          rows={6}
          required
        />
      </label>

      <button className="contact-submit" type="submit">
        Send Message
      </button>
    </form>
  );
}
