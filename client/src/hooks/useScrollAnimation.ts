import { useRef, useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return {
    ref,
    className: `transition-all duration-700 ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
    }`
  };
};
