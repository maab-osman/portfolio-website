import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.style.color =
                link.getAttribute('href') === `#${id}` ? 'var(--black)' : '';
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">MO / Portfolio</a>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#learning">Learning</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
