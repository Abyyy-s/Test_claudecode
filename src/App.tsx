import { useEffect } from 'react';
import lenis from '@/utils/lenisInit';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import CustomCursor from '@/components/CustomCursor';

// Import sections (we'll create these next)
import HeroSection from '@/sections/HeroSection';
import StoryScroll from '@/sections/StoryScroll';
import CinematicShowcase from '@/sections/CinematicShowcase';
import InteractiveShowcase from '@/sections/InteractiveShowcase';
import EmotionalFooter from '@/sections/EmotionalFooter';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Global GSAP context */}
      <div className="min-h-screen overflow-hidden">
        {/* Smooth scroll wrapper */}
        <SmoothScrollWrapper>
          {/* Custom cursor */}
          <CustomCursor />

          {/* Page content */}
          <div className="relative z-0">
            {/* Sections will go here */}
            <HeroSection />
            <StoryScroll />
            <CinematicShowcase />
            <InteractiveShowcase />
            <EmotionalFooter />
          </div>
        </SmoothScrollWrapper>
      </div>
    </>
  );
}

export default App;