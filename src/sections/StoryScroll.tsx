import { useEffect, useRef } from 'react';
import gsap from '@/utils/gsapInit';

export const StoryScroll: React.FC = () => {
  const storyRef = useRef<HTMLElement | null>(null);
  const textElements = useRef<(HTMLElement | null)[]>([]);
  const imageElements = useRef<(HTMLElement | null)[]>([]);
  const floatingElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
    // Get all elements for animation
    if (storyRef.current) {
      const current = storyRef.current;
      textElements.current = Array.from(
        current.querySelectorAll('.text-reveal span')
      );
      imageElements.current = Array.from(
        current.querySelectorAll('.image-mask')
      );
      floatingElements.current = Array.from(
        current.querySelectorAll('.floating-object')
      );
    }

    // Create timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false
      }
    });

    // Animate text reveal
    textElements.current.forEach((el, index) => {
      if (el) {
        tl.from(
          el,
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
          },
          index * 0.05
        );
      }
    });

    // Animate image masks
    imageElements.current.forEach((el, index) => {
      if (el) {
        tl.from(
          el,
          {
            width: '0%',
            duration: 1,
            ease: 'power3.out'
          },
          index * 0.1 + 0.5
        );
      }
    });

    // Animate floating elements
    floatingElements.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          x: () => (Math.random() - 0.5) * 100,
          y: () => (Math.random() - 0.5) * 100,
          rotation: () => Math.random() * 20 - 10,
          duration: Math.random() * 5 + 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      }
    });

    // Add glassmorphism panels that fade in/out with scroll
    if (storyRef.current) {
      const current = storyRef.current;
      const glassPanels = current.querySelectorAll('.glass-panel');
      glassPanels.forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            opacity: 0,
            backdropFilter: 'blur(0px)'
          },
          {
            opacity: 0.7,
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom+=100',
              end: 'bottom top-=100',
              scrub: true
            }
          }
        );
      });
    }

    }, storyRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={storyRef}
      id="story"
      className="relative min-h-[100vh] w-full overflow-hidden bg-[#020617]"
      aria-label="Story scroll section"
    >
      {/* Parallax layers */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="parallax-layer-1 absolute inset-0 bg-[url('/assets/story-bg-1.png')] bg-cover bg-center"></div>
        <div className="parallax-layer-2 absolute inset-0 bg-[url('/assets/story-bg-2.png')] bg-cover bg-center"></div>
        <div className="parallax-layer-3 absolute inset-0 bg-[url('/assets/story-bg-3.png')] bg-cover bg-center"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 px-6 py-20 md:py-28 max-w-4xl mx-auto">
        {/* Story content */}
        <div className="space-y-16 max-w-2xl mx-auto">
          {/* Text blocks with reveal animation */}
          <div className="text-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-700 mb-6 leading-snug text-white">
              <span>The</span>
              <span> Journey</span>
              <span> Begins</span>
              <span> With</span>
              <span> A</span>
              <span> Single</span>
              <span> Step</span>
            </h2>
            <p className="text-lg md:text-xl font-inter font-400 leading-relaxed text-muted-foreground/90 mb-8">
              <span>In</span>
              <span> the</span>
              <span> realm</span>
              <span> of</span>
              <span> digital</span>
              <span> expression,</span>
              <span> every</span>
              <span> pixel</span>
              <span> tells</span>
              <span> a</span>
              <span> story.</span>
              <span> This</span>
              <span> is</span>
              <span> where</span>
              <span> ours</span>
              <span> begins—</span>
              <span> with</span>
              <span> courage,</span>
              <span> creativity,</span>
              <span> and</span>
              <span> an</span>
              <span> unwavering</span>
              <span> commitment</span>
              <span> to</span>
              <span> beauty.</span>
            </p>
          </div>

          {/* Image with masking effect */}
          <div className="relative h-96 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/story-image-1.jpg')] bg-cover bg-center image-mask"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 to-transparent pointer-events-none"></div>
          </div>

          {/* Additional text block */}
          <div className="text-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-700 mb-6 leading-snug text-white">
              <span>Where</span>
              <span> Creativity</span>
              <span> Meets</span>
              <span> Technology</span>
            </h2>
            <p className="text-lg md:text-xl font-inter font-400 leading-relaxed text-muted-foreground/90 mb-8">
              <span>Here,</span>
              <span> boundaries</span>
              <span> dissolve</span>
              <span> between</span>
              <span> imagination</span>
              <span> and</span>
              <span> reality.</span>
              <span> Each</span>
              <span> frame</span>
              <span> is</span>
              <span> crafted</span>
              <span> with</span>
              <span> precision,</span>
              <span> each</span>
              <span> interaction</span>
              <span> designed</span>
              <span> to</span>
              <span> evoke</span>
              <span> emotion,</span>
              <span> and</span>
              <span> every</span>
              <span> detail</span>
              <span> considered</span>
              <span> for</span>
              <span> impact.</span>
            </p>
          </div>

          {/* Another image */}
          <div className="relative h-96 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mt-16">
            <div className="absolute inset-0 bg-[url('/assets/story-image-2.jpg')] bg-cover bg-center image-mask"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent pointer-events-none"></div>
          </div>

          {/* Final text block */}
          <div className="text-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-700 mb-6 leading-snug text-white">
              <span>The</span>
              <span> Journey</span>
              <span> Continues</span>
            </h2>
            <p className="text-lg md:text-xl font-inter font-400 leading-relaxed text-muted-foreground/90">
              <span>As</span>
              <span> you</span>
              <span> scroll</span>
              <span> downward,</span>
              <span> remember:</span>
              <span> this</span>
              <span> is</span>
              <span> not</span>
              <span> just</span>
              <span> a</span>
              <span> website—</span>
              <span> it's</span>
              <span> an</span>
              <span> experience.</span>
              <span> Let</span>
              <span> your</span>
              <span> curiosity</span>
              <span> guide</span>
              <span> you</span>
              <span> forward.</span>
            </p>
          </div>
        </div>

        {/* Glassmorphism panels */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glass-panel absolute -top-10 left-1/6 w-64 h-20 bg-white opacity-10 backdrop-blur-sm border-white opacity-20 rounded-lg"></div>
          <div className="glass-panel absolute bottom-1/3 right-1/4 w-72 h-24 bg-white opacity-10 backdrop-blur-sm border-white opacity-20 rounded-lg"></div>
          <div className="glass-panel absolute top-1/2 left-3/5 w-80 h-28 bg-white opacity-10 backdrop-blur-sm border-white opacity-20 rounded-lg"></div>
        </div>

        {/* Floating objects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-object absolute -top-20 left-1/5 w-16 h-16 bg-white opacity-5 rounded-full backdrop-blur-sm animate-float-slow"></div>
          <div className="floating-object absolute bottom-1/2 right-1/3 w-20 h-20 bg-white opacity-3 rounded-full backdrop-blur-sm animate-float-medium"></div>
          <div className="floating-object absolute top-1/3 left-3/4 w-12 h-12 bg-white opacity-4 rounded-full backdrop-blur-sm animate-float-fast"></div>
          <div className="floating-object absolute bottom-1/4 left-1/4 w-18 h-18 bg-white opacity-2 rounded-full backdrop-blur-sm animate-float-medium"></div>
        </div>
      </div>
    </section>
  );
};

export default StoryScroll;
