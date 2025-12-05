import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { PlayIcon, GithubIcon } from './Icons';
import './Hero.css';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'IoT Enthusiast',
    'DevOps Engineer',
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div 
          className="hero-glow"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-100, -400],
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '0',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-live">🔴 LIVE</span>
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="title-small">Hello, I'm</span>
          <span className="title-name">CHU DUC HAI</span>
        </motion.h1>

        <motion.div className="hero-role" variants={itemVariants}>
          <span className="role-label">Currently working as</span>
          <motion.span 
            className="role-text"
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Junior Software Engineer at <span className="highlight">HR Cloud</span> with experience
          in building full-stack applications, IoT systems, and DevOps pipelines. 
          Passionate about creating impactful technology solutions.
        </motion.p>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <span className="stat-number">4.0</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">965</span>
            <span className="stat-label">TOEIC Score</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projects</span>
          </div>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a 
            href="#projects" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayIcon size={16} /> View Projects
          </motion.a>
          <motion.a 
            href="https://github.com/haidonglethqb" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon size={18} /> GitHub Profile
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-wheel" />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
