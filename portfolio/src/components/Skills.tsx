import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon, ReactIcon, CloudIcon, DatabaseIcon } from './Icons';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages ',
    icon: <CodeIcon size={28} color="#e50914" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <ReactIcon size={28} color="#e50914" />,
    skills: [
      { name: 'React', level: 88 },
      { name: 'Django', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'TensorFlow', level: 72 },
      { name: 'Selenium/Pytest', level: 80 },
      { name: 'Playwright', level: 75 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <CloudIcon size={28} color="#e50914" />,
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 78 },
      { name: 'CI/CD', level: 82 },
      { name: 'GitHub Actions', level: 85 },
    ],
  },
  {
    title: 'Database & Backend',
    icon: <DatabaseIcon size={28} color="#e50914" />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'MQTT', level: 75 },
      { name: 'Socket Programming', level: 78 },
    ],
  },
];

const languageSkills = [
  { name: 'English', level: 'Professional Working Proficiency', score: 'TOEIC 965/990' },
];

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                    />
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Language Skills */}
      <motion.div
        className="language-skills"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="language-title">🌐 Language Proficiency</h3>
        <div className="language-cards">
          {languageSkills.map((lang) => (
            <motion.div 
              key={lang.name} 
              className="language-card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h4>{lang.name}</h4>
              <p className="lang-level">{lang.level}</p>
              <span className="lang-score">{lang.score}</span>
            </motion.div>
          ))}
          <motion.div 
            className="language-card toeic-sw"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h4>TOEIC S&W</h4>
            <p className="lang-level">Speaking & Writing</p>
            <span className="lang-score">310/400</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
