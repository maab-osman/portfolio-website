import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const STAGGER_MS = 60;

    document.querySelectorAll<HTMLElement>('.project-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * STAGGER_MS}ms`;
    });

    document.querySelectorAll<HTMLElement>('.stack-group').forEach((group, i) => {
      group.style.transitionDelay = `${i * STAGGER_MS}ms`;
    });

    const fadeElements = document.querySelectorAll<HTMLElement>('.fade-in');
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach((el) => fadeObserver.observe(el));

    return () => fadeObserver.disconnect();
  }, []);
}
