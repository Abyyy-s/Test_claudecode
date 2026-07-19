import { useEffect, useRef, useState } from 'react';
import gsap from '@/utils/gsapInit';
import { motion } from 'framer-motion';

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
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up scroll trigger for this section
      if (!showcaseRef.current) return;
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

    }, showcaseRef);

    return () => {
      ctx.revert();
    };
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
      className="relative min-h-[100vh] w-full overflow-hidden bg-[#020617]"
      aria-label="Cinematic showcase section"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/50 pointer-events-none"></div>

      {/* Slides container */}
      <div className="relative h-full">
        {showcaseItems.map((slide, index) => (
          <div
            key={slide.title}
            ref={(el) => {
              slidesRef.current[index] = el;
            }}
            className={`absolute inset-0 flex items-center justify-center px-6 pointer-events-none ${
              index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            } transition-opacity duration-800`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative pointer-auto bg-[#020617]/80 backdrop-blur-md rounded-3xl shadow-2xl w-[90%] max-w-[800px] max-h-[90vh] overflow-hidden transform transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[60%] w-full overflow-hidden">
                <img
                  ref={index === currentIndex ? imageRef : null}
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                {/* Gradient overlay for image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="relative mt-6 max-w-xl px-4">
                <h2 ref={index === currentIndex ? titleRef : null} className="text-3xl md:text-4xl lg:text-5xl font-playfair-display font-700 mb-4 leading-snug text-white">
                  {slide.title}
                </h2>
                <p ref={index === currentIndex ? descriptionRef : null} className="text-lg md:text-xl font-inter font-400 leading-relaxed text-muted-foreground/90">
                  {slide.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="decorative-element absolute -top-10 left-1/5 w-16 h-16 bg-white opacity-5 rounded-full backdrop-blur-sm animate-float-slow"></div>
                <div className="decorative-element absolute bottom-1/3 right-1/4 w-20 h-20 bg-white opacity-3 rounded-full backdrop-blur-sm animate-float-medium"></div>
                <div className="decorative-element absolute top-1/3 left-3/4 w-12 h-12 bg-white opacity-4 rounded-full backdrop-blur-sm animate-float-fast"></div>
                <div className="decorative-element absolute bottom-1/4 left-1/4 w-18 h-18 bg-white opacity-2 rounded-full backdrop-blur-sm animate-float-medium"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {showcaseItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              index === currentIndex ? 'bg-white/15' : 'hover:bg-white/10'
            }`}
            aria-label={`Slide ${index + 1}`}
          >
            <span className={`h-3 w-3 rounded-full bg-white transition-transform ${index === currentIndex ? 'scale-110 opacity-100' : 'opacity-50'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default CinematicShowcase;
