import { useEffect, useRef, useState } from 'react';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const distance = Math.sqrt(x * x + y * y);
      const magnetStrength = 0.1; // Adjust this for magnetic strength

      if (distance < 100) {
        const moveX = x * magnetStrength;
        const moveY = y * magnetStrength;
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      } else {
        button.style.transform = 'translate(0px, 0px) scale(1)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)';
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.style.transition = '';
      button.style.transform = '';
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden flex items-center justify-center
                 px-6 py-3 border border-white/60 bg-white/10
                 text-white hover:bg-white/20 transition-all duration-300
                 cursor-pointer focus:outline-none focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 backdrop-blur-sm
                 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Magnetic ripple effect */}
      <div className="absolute inset-0 bg-white opacity-5
                     transition-opacity duration-300
                     pointer-events-none"
        style={{ opacity: isHovered ? 0.1 : 0 }}
      ></div>
    </button>
  );
};

export default MagneticButton;
