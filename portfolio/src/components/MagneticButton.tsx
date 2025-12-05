import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './MagneticButton.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      className={`magnetic-button ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="magnetic-content"
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="magnetic-wrapper" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <div className="magnetic-wrapper" onClick={onClick}>
      {content}
    </div>
  );
};

export default MagneticButton;

