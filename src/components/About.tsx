export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <p className="section-title">About</p>
        <div className="about-body fade-in">

          {/* Floating metadata card */}
          <aside className="about-card">
            <div className="about-card-row">
              <span className="about-card-label">Who</span>
              <span className="about-card-val">Maab Osman</span>
            </div>
            <div className="about-card-row">
              <span className="about-card-label">Field</span>
              <span className="about-card-val">Information Technology</span>
            </div>
            <div className="about-card-row">
              <span className="about-card-label">Year</span>
              <span className="about-card-val">2026</span>
            </div>
          </aside>

          {/* Prose */}
          <p>I'm a final-year Information Technology student at Haaga-Helia, drawn to understanding what actually happens under the surface not just how systems work, but why.</p>
          <p>That curiosity pulled me toward cloud infrastructure, where the difference between a working system and a broken one can come down to a single configuration.</p>
          <p>Most of my learning happens through deliberate experiments: building backend services, breaking infrastructure, and reading logs until the behavior finally makes sense.</p>
          <p className="about-closing">Every project I build is another note in that process.</p>

        </div>
      </div>
    </section>
  );
}
