import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GithubIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon } from './Icons';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SmartAuth: Face & Gesture Recognition for IoT',
    description: 'AI-powered authentication system using facial recognition and hand gestures to control IoT-based smart home systems with real-time processing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'MQTT', 'Raspberry Pi', 'face_recognition', 'TensorFlow'],
    github: 'https://github.com/haihhdev/IoTweb-devops',
    category: 'AI & IoT',
    featured: true,
  },
  {
    id: 2,
    title: 'DevSecOps - OpenAI Chatbot UI',
    description: 'Secure CI/CD deployment of an OpenAI Chatbot UI on AWS EKS using Terraform, GitHub Actions, and Prometheus.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    technologies: ['AWS EKS', 'Terraform', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'React'],
    github: 'https://github.com/haidonglethqb/my-chatbot-repo',
    category: 'DevOps',
  },
  {
    id: 3,
    title: 'AgroPulse: MQTT-Driven AI Platform',
    description: 'End-to-end IoT analytics platform for smart agriculture with real-time AI analysis and interactive dashboard.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
    technologies: ['MQTT', 'Raspberry Pi', 'Python', 'TensorFlow', 'Docker', 'Flask', 'React'],
    github: 'https://github.com/CollinsD61/web_project',
    category: 'IoT & AI',
  },
  {
    id: 4,
    title: 'Smart Navigation Assistant',
    description: 'Real-time obstacle detection and road surface analysis with cloud data processing and instant alerts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    technologies: ['Java', 'Mapbox SDK', 'MQTT', 'Android'],
    github: 'https://github.com/haidonglethqb/Smart-Navigation-Assistant-for-Real-Time-Obstacle-Detection-and-Road-Surface-Analysis',
    category: 'Mobile',
  },
  {
    id: 5,
    title: 'Uno Multiplayer Game',
    description: 'Real-time multiplayer Uno game with socket-based networking for seamless player communication.',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800',
    technologies: ['C#', '.NET', 'Windows Forms', 'Socket Programming'],
    github: 'https://github.com/haidonglethqb/Uno-Game',
    category: 'Game Dev',
  },
  {
    id: 6,
    title: 'Playfair & RSA Encryption App',
    description: 'Encryption application supporting Playfair cipher for basic security and RSA for advanced encryption.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800',
    technologies: ['C#', '.NET', 'Windows Forms', 'Cryptography'],
    github: 'https://github.com/haidonglethqb/Playfair-and-RSA-Based-Encryption-Application',
    category: 'Security',
  },
];

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const featuredProject = projects.find(p => p.featured);

  return (
    <section id="projects" className="projects section" ref={ref}>
      {/* Featured Project - Netflix Billboard Style */}
      {featuredProject && (
        <motion.div 
          className="featured-project"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-bg">
            <img src={featuredProject.image} alt={featuredProject.title} />
            <div className="featured-overlay" />
          </div>
          <div className="featured-content">
            <span className="featured-badge"><StarIcon size={14} /> Featured Project</span>
            <h2 className="featured-title">{featuredProject.title}</h2>
            <p className="featured-description">{featuredProject.description}</p>
            <div className="featured-tech">
              {featuredProject.technologies.slice(0, 5).map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="featured-buttons">
              <motion.a 
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon size={16} /> View Project
              </motion.a>
              <motion.a 
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon size={18} /> Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Projects Row - Netflix Style */}
      <div className="projects-row">
        <div className="row-header">
          <h3 className="section-title">My Projects</h3>
          <div className="row-controls">
            <button className="scroll-btn" onClick={() => scroll('left')}>
              <ChevronLeftIcon size={20} />
            </button>
            <button className="scroll-btn" onClick={() => scroll('right')}>
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>

        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <motion.div 
                    className="overlay-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredId === project.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="card-category">{project.category}</span>
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-description">{project.description}</p>
                    <div className="card-tech">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="card-actions">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <GithubIcon size={18} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn primary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <PlayIcon size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
