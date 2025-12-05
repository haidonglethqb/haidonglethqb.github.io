import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, EmailIcon } from './Icons';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.a 
          href="#home" 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">HAI</span>
          <span className="logo-dot">.</span>
        </motion.a>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#e50914' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="navbar-social">
          <motion.a 
            href="https://github.com/haidonglethqb" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#e50914' }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <GithubIcon size={22} />
          </motion.a>
          <motion.a 
            href="mailto:haidonglethqb@gmail.com"
            whileHover={{ scale: 1.2, color: '#e50914' }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <EmailIcon size={22} />
          </motion.a>
        </div>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
