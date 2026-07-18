import { useEffect, useRef, useState } from 'react';
import gsap from '@/utils/gsapInit';

// Import lenis instance (we'll get it from window or create singleton)
// We are using the imported lenis from '@/utils/lenisInit'

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Cinematic Excellence',
    description: 'Where every frame tells a story and every interaction evokes emotion.',
    image: '/assets/showcase-1.jpg',
    alt: 'Cinematic visual experience'
  },
  {
    id: 2,
    title: 'Innovative Interaction',
    description: 'Pushing boundaries of what\'s possible in the browser with cutting-edge web technologies.',
    image: '/assets/showcase-2.jpg',
    alt: 'Innovative interaction design'
  },
  {
    id: 3,
    title: 'Emotional Resonance',
    description: 'Creating experiences that linger in memory long after the screen fades to black.',
    image: '/assets/showcase-3.jpg',
    alt: 'Emotional resonance design'
  }
];

export const CinematicShowcase: React.FC = () => {
  const showcaseRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for elements
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const dotsRef = useRef(null);
  const bgLayersRef = useRef({
    layer1: null as HTMLDivElement | null,
    layer2: null as HTMLDivElement | null,
    layer3: null as HTMLDivElement | null
  });

  useEffect(() => {
    // Set up scroll trigger for this section
    if (showcaseRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
          onUpdate: (self) => {
            // Calculate progress for parallax effects
            const progress = self.progress;

            // Apply parallax to background layers
            if (bgLayersRef.current.layer1) {
              bgLayersRef.current.layer1.style.transform = `translate3d(0px, ${progress * 50}px, 0)`;
            }
            if (bgLayersRef.current.layer2) {
              bgLayersRef.current.layer2.style.transform = `translate3d(0px, ${progress * 30}px, 0)`;
            }
            if (bgLayersRef.current.layer3) {
              bgLayersRef.current.layer3.style.transform = `translate3d(0px, ${progress * 10}px, 0)`;
            }
          }
        }
      });

      // Animate content in when section enters viewport
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
        .from(descriptionRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.4')
        .from(imageRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.6');

      // Cleanup
      return () => {
        tl.kill();
      };
    }
  }, []);

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);

    // Animate transition
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in'
    })
      .to(descriptionRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in'
      }, '-=0.3')
      .to(imageRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in'
      }, '-=0.5')
      .set(titleRef.current, {
        text: showcaseItems[index].title
      })
      .set(descriptionRef.current, {
        text: showcaseItems[index].description
      })
      .set(imageRef.current, {
        src: showcaseItems[index].image,
        alt: showcaseItems[index].alt
      })
      .to([titleRef.current, descriptionRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.2')
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .eventCallback('onComplete', () => {
        setIsAnimating(false);
      });
  };

  return (
    <section
      ref={showcaseRef}
      className="relative min-h-[100vh] w-full overflow-hidden bg-background"
      aria-label="Cinematic showcase section"
    >
      {/* Parallax background layers for 3D effect */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          ref={el => {
            bgLayersRef.current.layer1 = el;
          }}
          className="parallax-layer-1 absolute inset-0 bg-[url('/assets/showcase-bg-1.png')] bg-cover bg-center"
        ></div>
        <div
          ref={el => {
            bgLayersRef.current.layer2 = el;
          }}
          className="parallax-layer-2 absolute inset-0 bg-[url('/assets/showcase-bg-2.png')] bg-cover bg-center"
        ></div>
        <div
          ref={el => {
            bgLayersRef.current.layer3 = el;
          }}
          className="parallax-layer-3 absolute inset-0 bg-[url('/assets/showcase-bg-3.png')] bg-cover bg-center"
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center text-white">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-700 mb-6 leading-snug"
        >
          {showcaseItems[currentIndex].title}
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl font-inter font-400 max-w-xl leading-relaxed text-muted-foreground/90 mb-10"
        >
          {showcaseItems[currentIndex].description}
        </p>

        {/* Image container */}
        <div className="relative w-full max-w-4xl h-[500px] lg:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            ref={imageRef}
            src={showcaseItems[currentIndex].image}
            alt={showcaseItems[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
        </div>

        {/* Magnetic navigation dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-4 z-20" ref={dotsRef}>
          {showcaseItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleDotClick(index)}
              className={`relative w-3 h-3 bg-white/20 rounded-full
                         transition-all duration-300 ease-out
                         hover:bg-white/30
                         ${index === currentIndex ? 'bg-white/50 scale-110' : ''}`}
              aria-label={`Navigate to slide ${index + 1}`}
            >
              {/* Magnetic pulse effect */}
              <div className="absolute inset-0 bg-white/10 rounded-full
                           opacity-0 transition-opacity duration-300
                           pointer-events-none"
                   style={{ opacity: index === currentIndex ? 0.3 : 0 }}
              ></div>
            </button>
          ))}
        </div>

        {/* Directional hints */}
        {showcaseItems.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-6 text-sm text-white/50">
            <button
              onClick={() => {
                if (!isAnimating) {
                  const prev = (currentIndex - 1 + showcaseItems.length) % showcaseItems.length;
                  setIsAnimating(true);
                  setCurrentIndex(prev);
                }
              }}
              className="discrete hover:text-white/80 transition-colors"
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <span>/{showcaseItems.length}</span>
            <button
              onClick={() => {
                if (!isAnimating) {
                  const next = (currentIndex + 1) % showcaseItems.length;
                  setIsAnimating(true);
                  setCurrentIndex(next);
                }
              }}
              className="discrete hover:text-white/80 transition-colors"
              disabled={isAnimating}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CinematicShowcase;