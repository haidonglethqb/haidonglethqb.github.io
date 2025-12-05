import React, { useEffect, useState, useRef } from 'react';
import './SpotlightEffect.css';

const SpotlightEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`spotlight-effect ${isActive ? 'active' : ''}`}
      style={{
        '--spotlight-x': `${position.x}px`,
        '--spotlight-y': `${position.y}px`,
      } as React.CSSProperties}
    />
  );
};

export default SpotlightEffect;

