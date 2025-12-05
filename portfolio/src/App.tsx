import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightEffect from './components/SpotlightEffect';
import NoiseOverlay from './components/NoiseOverlay';
import AnimatedBackground from './components/AnimatedBackground';
import TechMarquee from './components/TechMarquee';
import './App.css';

function App() {
  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <AnimatedBackground />
      <SpotlightEffect />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      
      {/* Overlay Effects */}
      <NoiseOverlay />
    </motion.div>
  );
}

export default App;
