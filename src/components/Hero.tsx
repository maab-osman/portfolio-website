import HeroEffects from './HeroEffects';

export default function Hero() {
  return (
    <section id="hero">
      <HeroEffects />
      <div className="wrapper hero-content">
        <h1 className="hero-name">Maab Osman</h1>
        <p className="hero--accent hero-tagline">
          Information Technology student exploring Cloud &amp; Backend Systems
        </p>
        <div className="hero-intro">
          <p>
            I'm curious about how systems actually work from cloud infrastructure to the code that runs on it.
          </p>
        
        </div>
        <div className="btn-group">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="https://github.com/maab-osman" target="_blank" rel="noopener" className="btn btn--ghost">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/maab-osman/" target="_blank" rel="noopener" className="btn btn--ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
