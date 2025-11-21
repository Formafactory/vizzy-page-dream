import { useEffect, useRef } from "react";

export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrolled = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementVisible = scrolled + window.innerHeight > elementTop;

      if (elementVisible) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        ref.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
};
