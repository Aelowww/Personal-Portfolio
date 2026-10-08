// Certificate programs in progress, shown under the earned certificates.
const courses = [
  { title: "Legacy Full Stack", issuer: "freeCodeCamp" },
  { title: "Google IT Support", issuer: "Google · Coursera" }
];

export default function CurrentlyTaking() {
  return (
    <div className="currently-taking">
      <p className="currently-taking-title">Currently taking</p>
      <ul>
        {courses.map((course) => (
          <li key={course.title}>
            <span className="currently-taking-dot" aria-hidden="true" />
            <span className="currently-taking-name">
              <strong>{course.title}</strong>
              <span>{course.issuer}</span>
            </span>
            <span className="currently-taking-badge">In progress</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
