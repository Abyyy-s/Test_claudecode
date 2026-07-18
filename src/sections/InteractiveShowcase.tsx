import { useEffect, useRef, useState } from 'react';
import gsap from '@/utils/gsapInit';

interface Project {
  id: number;
  title: string;
  role: string;
  tools: string[];
  challenge: string;
  solution: string;
  result: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cinematic Landing Page',
    role: 'Lead Designer & Developer',
    tools: ['React', 'GSAP', 'Three.js', 'Tailwind CSS'],
    challenge: 'Create an immersive landing page that captures the essence of cinematic storytelling while maintaining optimal performance.',
    solution: 'Implemented advanced GSAP animations, Three.js 3D elements, and optimized rendering techniques to achieve 60fps on mid-tier devices.',
    result: 'Achieved 98+ Google Lighthouse performance score with award-winning design recognized by Awwwards and FWA.',
    image: '/assets/project-1.jpg',
    alt: 'Cinematic landing page showcase'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    role: 'Full-Stack Developer',
    tools: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    challenge: 'Build a scalable e-commerce platform handling 10K+ daily transactions with exceptional user experience.',
    solution: 'Architected microservices with serverless functions, implemented real-time inventory management, and optimized checkout flow.',
    result: 'Increased conversion rate by 35% and reduced cart abandonment by 22% within first quarter of launch.',
    image: '/assets/project-2.jpg',
    alt: 'E-commerce platform dashboard'
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    role: 'Product Designer',
    tools: ['Figma', 'React Native', 'Firebase', 'Motion Design'],
    challenge: 'Design a fitness app that motivates users through personalized workout plans and community engagement.',
    solution: 'Created adaptive workout algorithms, integrated social features for accountability, and designed micro-interactions for habit formation.',
    result: 'Achieved 4.8+ app store rating with 500K+ active users and featured in Apple App Store "Best of 2023".',
    image: '/assets/project-3.jpg',
    alt: 'Mobile fitness app interface'
  }
];

export const InteractiveShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const modalImageRef = useRef<HTMLImageElement | null>(null);
  const modalTitleRef = useRef<HTMLHeadingElement | null>(null);
  const modalRoleRef = useRef<HTMLParagraphElement | null>(null);
  const modalToolsRef = useRef<HTMLDivElement | null>(null);
  const modalChallengeRef = useRef<HTMLParagraphElement | null>(null);
  const modalSolutionRef = useRef<HTMLParagraphElement | null>(null);
  const modalResultRef = useRef<HTMLParagraphElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Animate title on entry
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    // Animate filter buttons on entry
    if (filterRef.current) {
      const filters = filterRef.current.querySelectorAll('.filter-btn');
      filters.forEach((filter, index) => {
        gsap.from(filter as HTMLElement, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }

    // Animate project cards on entry with stagger
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        gsap.from(card as HTMLElement, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out'
        });
      });
    }

    // Add magnetic effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    const cardHandlers: { element: HTMLElement; mouseMove: (e: MouseEvent) => void; mouseLeave: () => void }[] = [];

    projectCards.forEach((card: Element) => {
      if (!(card instanceof HTMLElement)) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        const magnetStrength = 0.05; // Adjust this for magnetic strength

        if (distance < 150) {
          const moveX = x * magnetStrength;
          const moveY = y * magnetStrength;
          const scale = 1 + (150 - distance) / 150 * 0.1; // Scale up to 1.1 max

          gsap.to(card, {
            x: moveX,
            y: moveY,
            scale: scale,
            duration: 0.6,
            ease: 'power3.out'
          });
        } else {
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cardHandlers.push({ element: card, mouseMove: handleMouseMove, mouseLeave: handleMouseLeave });
    });

    // Add magnetic effect to modal close button
    let closeButtonHandler: { element: HTMLElement; mouseMove: (e: MouseEvent) => void; mouseLeave: () => void } | null = null;

    if (closeButtonRef.current) {
      const closeButton = closeButtonRef.current;
      if (!(closeButton instanceof HTMLElement)) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = closeButton.getBoundingClientRect();
        const x = e.clientX - rect.left - closeButton.offsetWidth / 2;
        const y = e.clientY - rect.top - closeButton.offsetHeight / 2;
        const distance = Math.sqrt(x * x + y * y);
        const magnetStrength = 0.15; // Adjust this for magnetic strength

        if (distance < 100) {
          const moveX = x * magnetStrength;
          const moveY = y * magnetStrength;
          const rotation = Math.atan2(y, x) * 5; // Subtle rotation

          gsap.to(closeButton, {
            x: moveX,
            y: moveY,
            rotation,
            scale: 1.1,
            duration: 0.4,
            ease: 'power3.out'
          });
        } else {
          gsap.to(closeButton, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(closeButton, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      closeButton.addEventListener('mousemove', handleMouseMove);
      closeButton.addEventListener('mouseleave', handleMouseLeave);

      closeButtonHandler = { element: closeButton, mouseMove: handleMouseMove, mouseLeave: handleMouseLeave };
    }

    // Cleanup function
    return () => {
      // Clean up project cards
      cardHandlers.forEach(handler => {
        handler.element.removeEventListener('mousemove', handler.mouseMove);
        handler.element.removeEventListener('mouseleave', handler.mouseLeave);
      });

      // Clean up close button
      if (closeButtonHandler) {
        closeButtonHandler.element.removeEventListener('mousemove', closeButtonHandler.mouseMove);
        closeButtonHandler.element.removeEventListener('mouseleave', closeButtonHandler.mouseLeave);
      }
    };
  }, []);

  const handleProjectClick = (project: Project) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject(project);
    setIsModalOpen(true);

    // Animate modal entrance
    const tl = gsap.timeline();

    tl.fromTo(
      modalRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
      .from(
        modalContentRef.current,
        { opacity: 0, y: 30, scale: 0.95, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .from(
        modalImageRef.current,
        { opacity: 0, scale: 0.8, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .from(
        [modalTitleRef.current, modalRoleRef.current],
        { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .from(
        [modalToolsRef.current, modalChallengeRef.current, modalSolutionRef.current, modalResultRef.current],
        { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
      .from(
        closeButtonRef.current,
        { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' },
        '-=0.2'
      )
      .eventCallback('onComplete', () => {
        setIsAnimating(false);
      });
  };

  const handleCloseModal = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Animate modal exit
    const tl = gsap.timeline();

    tl.to(
      [modalTitleRef.current, modalRoleRef.current, modalToolsRef.current, modalChallengeRef.current, modalSolutionRef.current, modalResultRef.current],
      { y: 30, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power3.in' },
      0
    )
      .to(
        modalImageRef.current,
        { scale: 0.8, opacity: 0, duration: 0.4, ease: 'power3.in' },
        '-=0.2'
      )
      .to(
        modalContentRef.current,
        { opacity: 0, y: 30, scale: 0.95, duration: 0.4, ease: 'power3.in' },
        '-=0.2'
      )
      .to(
        modalRef.current,
        { opacity: 0, y: 20, duration: 0.4, ease: 'power3.in' },
        '-=0.2'
      )
      .eventCallback('onComplete', () => {
        setIsModalOpen(false);
        setActiveProject(null);
        setIsAnimating(false);
      });
  };

  return (
    <section
      ref={showcaseRef}
      className="relative min-h-[100vh] w-full overflow-hidden bg-background"
      aria-label="Interactive showcase section"
    >
      {/* Header */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-[20vh] px-6 pt-16 text-center text-white">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-700 mb-6 leading-snug"
        >
          Interactive Portfolio
        </h1>
        <p className="text-lg md:text-xl font-inter font-400 max-w-xl leading-relaxed text-muted-foreground/90 mb-8">
          Explore my work through interactive case studies that showcase my design and development process
        </p>

        {/* Filter buttons */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="flex items-center justify-center px-4 py-2 bg-transparent border-2 border-white/20 text-white hover:text-white/90 transition-all duration-300 rounded-full backdrop-blur-sm filter-btn"
            aria-label="Show all projects"
          >
            All
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 bg-transparent border-2 border-white/20 text-white hover:text-white/90 transition-all duration-300 rounded-full backdrop-blur-sm filter-btn"
            aria-label="Show design projects"
          >
            Design
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 bg-transparent border-2 border-white/20 text-white hover:text-white/90 transition-all duration-300 rounded-full backdrop-blur-sm filter-btn"
            aria-label="Show development projects"
          >
            Development
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div ref={projectsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl project-card">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background/70 pointer-events-none"></div>
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair-display font-600 text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-inter font-300 text-muted-foreground/90">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeProject && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none"
        >
          <div
            ref={modalContentRef}
            className="relative pointer-auto bg-background/80 backdrop-blur-md rounded-3xl shadow-2xl w-[90%] max-w-[800px] max-h-[90vh] overflow-hidden transform transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-[400px]">
              <img
                ref={modalImageRef}
                src={activeProject.image}
                alt={activeProject.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                <h2
                  ref={modalTitleRef}
                  className="text-3xl font-playfair-display font-700 text-white"
                >
                  {activeProject.title}
                </h2>
                <p className="text-lg font-inter font-400 text-muted-foreground/90">
                  <span className="font-500">Role:</span> {activeProject.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm font-inter font-300 text-white/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Challenge</h3>
                    <p
                      ref={modalChallengeRef}
                      className="text-sm font-inter font-300 text-muted-foreground/90 leading-relaxed"
                    >
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Solution</h3>
                    <p
                      ref={modalSolutionRef}
                      className="text-sm font-inter font-300 text-muted-foreground/90 leading-relaxed"
                    >
                      {activeProject.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Result</h3>
                    <p
                      ref={modalResultRef}
                      className="text-sm font-inter font-300 text-muted-foreground/90 leading-relaxed"
                    >
                      {activeProject.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20
                       rounded-full transition-all duration-300 backdrop-blur-sm"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteractiveShowcase;