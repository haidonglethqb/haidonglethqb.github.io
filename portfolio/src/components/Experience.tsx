import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarIcon } from './Icons';
import './Experience.css';

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'HR Cloud',
    logo: '/hrcloud.svg',
    role: 'Junior Software Engineer',
    period: 'November 2025 - Present',
    type: 'Full-time',
    description: [
      'Developed full-stack modules for the HR management platform using React, Node.js, and MySQL/MongoDB',
      'Built reusable UI components, improved UX flows, and optimized front-end performance',
      'Implemented secure and scalable backend APIs, authentication/authorization workflows',
      'Collaborated with cross-functional teams to deliver new features and maintain system stability',
      'Contributed to CI/CD automation, deployment pipelines, and cloud infrastructure (AWS/Docker)',
    ],
    skills: ['React', 'Node.js', 'MySQL', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'ShopBack',
    logo: '/shopback.svg',
    role: 'Software Engineer',
    period: 'June 2025 - October 2025',
    type: 'Full-time',
    description: [
      'Built and maintained full-stack features for internal and customer-facing web applications',
      'Designed backend services, optimized database queries, and refactored legacy code',
      'Collaborated with product managers and developers to analyze requirements and design solutions',
      'Integrated third-party services and developed unit/integration tests',
      'Participated in code reviews and contributed to CI/CD pipelines',
    ],
    skills: ['Node.js', 'TypeScript', 'React', 'REST APIs', 'CI/CD'],
  },
];

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-marker">
              <motion.div 
                className="marker-logo"
                whileHover={{ scale: 1.1 }}
              >
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </motion.div>
              <div className="marker-line" />
            </div>

            <motion.div 
              className="timeline-content"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="content-header">
                <div className="company-info">
                  <div className="company-logo-small">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <span className="role-title">{exp.role}</span>
                  </div>
                </div>
                <div className="meta-info">
                  <span className="period">
                    <CalendarIcon size={14} /> {exp.period}
                  </span>
                  <span className={`badge ${exp.type === 'Full-time' ? 'badge-primary' : 'badge-secondary'}`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="description-list">
                {exp.description.map((desc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {desc}
                  </motion.li>
                ))}
              </ul>

              <div className="skills-used">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
