import { useEffect, useRef } from 'react';
import gsap from '@/utils/gsapInit';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create GSAP timeline for hero reveal
      const tl = gsap.timeline();

      // Film grain overlay animation
      tl.to(
      '.film-grain',
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
      },
      0
    );

      // Background elements parallax
      tl.from(
      '.bg-layer-1',
      {
        yPercent: 20,
        opacity: 0,
        duration: 3,
        ease: 'power2.out'
      },
      0.5
    )
      .from(
        '.bg-layer-2',
        {
          yPercent: -15,
          opacity: 0,
          duration: 3.5,
          ease: 'power2.out'
        },
        0.7
      )
      .from(
        '.bg-layer-3',
        {
          yPercent: 10,
          opacity: 0,
          duration: 4,
          ease: 'power2.out'
        },
        0.9
      );

      // Premium typography reveal with stagger
      tl.from(
      '.hero-title span',
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      },
      1.5
    )
      .from(
        '.hero-subtitle span',
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out'
        },
        2.2
      )
      .from(
        '.hero-cta',
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        },
        2.8
      );

      // Add subtle floating animation to decorative elements
      gsap.to('.floating-element', {
      y: '-20px',
      rotation: 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Cinematic hero section"
    >
      {/* Film grain overlay */}
      <div className="film-grain"></div>

      {/* Parallax background layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-layer-1 absolute inset-0 bg-[url('/assets/bg-layer-1.png')] bg-cover bg-center"></div>
        <div className="bg-layer-2 absolute inset-0 bg-[url('/assets/bg-layer-2.png')] bg-cover bg-center"></div>
        <div className="bg-layer-3 absolute inset-0 bg-[url('/assets/bg-layer-3.png')] bg-cover bg-center"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
        {/* Title with individual letter animation */}
        <h1 className="hero-title whitespace-pre-wrap text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair-display font-900 leading-tight tracking-tighter mb-6">
          <span className="inline-block">C</span>
          <span className="inline-block">i</span>
          <span className="inline-block">n</span>
          <span className="inline-block">e</span>
          <span className="inline-block">m</span>
          <span className="inline-block">a</span>
          <span className="inline-block">t</span>
          <span className="inline-block">i</span>
          <span className="inline-block">c</span>
          <span className="inline-block"> </span>
          <span className="inline-block">E</span>
          <span className="inline-block">x</span>
          <span className="inline-block">p</span>
          <span className="inline-block">e</span>
          <span className="inline-block">r</span>
          <span className="inline-block">i</span>
          <span className="inline-block">e</span>
          <span className="inline-block">n</span>
          <span className="inline-block">c</span>
          <span className="inline-block">e</span>
        </h1>

        {/* Subtitle with individual letter animation */}
        <p className="hero-subtitle whitespace-pre-wrap text-xl md:text-2xl lg:text-3xl font-inter font-400 max-w-xl">
          <span className="inline-block">W</span>
          <span className="inline-block">h</span>
          <span className="inline-block">e</span>
          <span className="inline-block">r</span>
          <span className="inline-block">e</span>
          <span className="inline-block"> </span>
          <span className="inline-block">e</span>
          <span className="inline-block">v</span>
          <span className="inline-block">e</span>
          <span className="inline-block">r</span>
          <span className="inline-block">y</span>
          <span className="inline-block"> </span>
          <span className="inline-block">p</span>
          <span className="inline-block">i</span>
          <span className="inline-block">x</span>
          <span className="inline-block">e</span>
          <span className="inline-block">l</span>
          <span className="inline-block"> </span>
          <span className="inline-block">t</span>
          <span className="inline-block">e</span>
          <span className="inline-block">l</span>
          <span className="inline-block">l</span>
          <span className="inline-block">s</span>
          <span className="inline-block"> </span>
          <span className="inline-block">a</span>
          <span className="inline-block">s</span>
          <span className="inline-block">t</span>
          <span className="inline-block">o</span>
          <span className="inline-block">r</span>
          <span className="inline-block">y</span>
        </p>

        {/* CTA Button */}
        <div className="hero-cta mt-10 flex items-center gap-6">
          <a href="#story" className="relative inline-flex items-center px-8 py-4 border-2 border-white/60 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-sm rounded-lg">
            Explore the Journey
            <span className="ml-2">→</span>
          </a>
          <button type="button" className="relative inline-flex items-center px-8 py-4 border-2 border-white/60 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-sm rounded-lg">
            Learn More
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute -top-10 left-1/5 w-16 h-16 bg-white opacity-5 rounded-full backdrop-blur-sm animate-float-slow"></div>
          <div className="floating-element absolute bottom-1/3 right-1/4 w-20 h-20 bg-white opacity-3 rounded-full backdrop-blur-sm animate-float-medium"></div>
          <div className="floating-element absolute top-1/3 left-3/4 w-12 h-12 bg-white opacity-4 rounded-full backdrop-blur-sm animate-float-fast"></div>
          <div className="floating-element absolute bottom-1/4 left-1/4 w-18 h-18 bg-white opacity-2 rounded-full backdrop-blur-sm animate-float-medium"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
