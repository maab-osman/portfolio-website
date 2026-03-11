import { useEffect } from 'react';

export default function HeroEffects() {
  useEffect(() => {
    const section = document.getElementById('hero');
    if (!section) return;

    // initialise spotlight to center
    section.style.setProperty('--mx', '50%');
    section.style.setProperty('--my', '50%');

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mx', `${x}%`);
      section.style.setProperty('--my', `${y}%`);
    };

    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      {/* SVG noise filter — hidden, just needs to live in the DOM */}
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="hero-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Animated grain layer */}
      <div className="hero-grain" aria-hidden="true" />

      {/* Cursor spotlight layer */}
      <div className="hero-spotlight" aria-hidden="true" />
    </>
  );
}
