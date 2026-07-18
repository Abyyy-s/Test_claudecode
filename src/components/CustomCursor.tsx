import { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div
        className="pointer-none fixed inset-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          pointerEvents: 'none'
        }}
        ref={cursorRef}
      >
        {/* Outer glow effect */}
        <div
          ref={outlineRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-full
                   pointer-events-none mix-blend-difference backdrop-blur-sm
                   transition-all duration-300 ease-out"
          style={{
            opacity: 0,
            transform: 'scale(1)'
          }}
        ></div>
        {/* Inner dot */}
        <div
          ref={dotRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white/20 rounded-full
                   pointer-events-none mix-blend-difference backdrop-blur-sm
                   transition-all duration-200 ease-out"
        ></div>
      </div>
    </>
  );
};

export default CustomCursor;