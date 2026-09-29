import Link from "next/link";
import { StackIcon } from "../components/hero-elements";
import { skillGroups, skills } from "../data/skills";

export default function SkillsPage() {
  return (
    <div className="site skills-page">
      <section className="panel tech skills-section">
        <p className="eyebrow section-chip">ALL SKILLS</p>
        <h2>A complete overview of the tools and technologies I build with.</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section key={group.key} className="skills-group">
              <p className="skills-group-title">{group.label}</p>
              <div className="skills-grid">
                {skills
                  .filter((item) => item.category === group.key)
                  .map((item) => (
                    <article key={item.name} className="skill-card" style={{ "--skill-tone": item.tone }}>
                      <h3 className="skill-title">
                        <StackIcon name={item.icon} />
                        {item.name}
                      </h3>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
        <div className="skills-view-all-wrap">
          <Link className="skills-view-all" href="/#skills">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
