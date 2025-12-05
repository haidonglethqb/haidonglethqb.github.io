import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, EmailIcon, HeartIcon, ArrowUpIcon } from './Icons';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="footer-logo">
              <span className="logo-text">HAI</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </motion.div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              <motion.a 
                href="https://github.com/haidonglethqb" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon size={22} />
              </motion.a>
              <motion.a 
                href="mailto:haidonglethqb@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <EmailIcon size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Chu Duc Hai. Made with{' '}
            <motion.span 
              className="heart"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <HeartIcon size={16} color="#e50914" />
            </motion.span>{' '}
            in Ho Chi Minh City
          </p>
        </div>

        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowUpIcon size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
