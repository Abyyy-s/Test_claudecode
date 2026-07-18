import Lenis from 'lenis';
import type { LenisOptions } from 'lenis';

const lenisOptions: LenisOptions = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  // Removed 'smooth' property as it doesn't exist in LenisOptions
  // Using smoothWheel instead which is the correct property
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 2
};

const lenis = new Lenis(lenisOptions);

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;