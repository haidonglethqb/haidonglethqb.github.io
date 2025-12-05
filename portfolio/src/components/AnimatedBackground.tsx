import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      {/* Gradient orbs */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${15 + Math.random() * 20}s`,
              '--x-start': `${Math.random() * 100}%`,
              '--y-start': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;

