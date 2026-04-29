import { useEffect } from 'react';

/**
 * Adds a `revealed` class to every element with `data-reveal` once it enters
 * the viewport. CSS handles the actual fade/slide.
 */
export default function useReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!targets.length) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('revealed'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: if for any reason the observer hasn't revealed an in-view
    // element within ~1.2s of mount, reveal it anyway. Better than ghost
    // sections.
    const safety = window.setTimeout(() => {
      targets.forEach((el) => {
        if (el.classList.contains('revealed')) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    }, 1200);

    return () => {
      window.clearTimeout(safety);
      observer.disconnect();
    };
  }, []);
}
