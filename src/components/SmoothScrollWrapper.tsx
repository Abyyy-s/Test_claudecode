import { useEffect } from 'react';
import lenis from '@/utils/lenisInit';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import our gsapInit to ensure plugins are registered (side effect)
import '@/utils/gsapInit';

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Set GSAP ticker to remove lag smoothing for immediate response
    gsap.ticker.lagSmoothing(0);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Cleanup on unmount
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      // Reset lagSmoothing to default (optional)
      // gsap.ticker.lagSmoothing();
    };
  }, []);

  return <div className="overflow-hidden">{children}</div>;
};

export default SmoothScrollWrapper;