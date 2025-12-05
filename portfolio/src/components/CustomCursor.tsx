import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

// Cursor position type for internal use

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsVisible(true);
  }, [cursorX, cursorY]);

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', () => setIsClicking(true));
    window.addEventListener('mouseup', () => setIsClicking(false));
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));

    // Handle hover states for interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Check for custom cursor text
      const text = target.getAttribute('data-cursor-text');
      if (text) setCursorText(text);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .award-card, .language-card, .btn, .action-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [moveCursor]);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .award-card, .language-card, .btn, .action-btn');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </motion.div>

      {/* Cursor glow trail */}
      <motion.div
        className={`cursor-glow ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
};

export default CustomCursor;

