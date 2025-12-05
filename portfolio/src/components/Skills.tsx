import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Atropos from 'atropos/react';
import { CodeIcon, ReactIcon, CloudIcon, DatabaseIcon } from './Icons';
import 'atropos/css';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <CodeIcon size={28} color="#fff" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'SQL', level: 85 },
    ],
    gradient: 'linear-gradient(135deg, #e50914 0%, #ff6b6b 100%)',
  },
  {
    title: 'Frameworks & Libraries',
    icon: <ReactIcon size={28} color="#fff" />,
    skills: [
      { name: 'React', level: 88 },
      { name: 'Django', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'TensorFlow', level: 72 },
      { name: 'Selenium/Pytest', level: 80 },
      { name: 'Playwright', level: 75 },
    ],
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
  },
  {
    title: 'DevOps & Cloud',
    icon: <CloudIcon size={28} color="#fff" />,
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 78 },
      { name: 'CI/CD', level: 82 },
      { name: 'GitHub Actions', level: 85 },
    ],
    gradient: 'linear-gradient(135deg, #ffd700 0%, #ff9500 100%)',
  },
  {
    title: 'Database & Backend',
    icon: <DatabaseIcon size={28} color="#fff" />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'MQTT', level: 75 },
      { name: 'Socket Programming', level: 78 },
    ],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
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
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <Atropos
              className="skill-atropos"
              activeOffset={40}
              shadowScale={1.05}
              rotateXMax={15}
              rotateYMax={15}
              shadow={true}
              highlight={true}
            >
              <div className="skill-category">
                {/* Floating particles background */}
                <div className="skill-particles" data-atropos-offset="-5">
                  <span className="particle"></span>
                  <span className="particle"></span>
                  <span className="particle"></span>
                </div>

                {/* Glow effect */}
                <div 
                  className="skill-glow" 
                  data-atropos-offset="-3"
                  style={{ background: category.gradient }}
                />

                <div className="category-header" data-atropos-offset="5">
                  <span 
                    className="category-icon" 
                    data-atropos-offset="10"
                    style={{ background: category.gradient }}
                  >
                    {category.icon}
                  </span>
                  <h3 className="category-title" data-atropos-offset="5">{category.title}</h3>
                </div>

                <div className="skills-list" data-atropos-offset="3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + skillIndex * 0.05 }}
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
                          style={{ 
                            background: category.gradient 
                          }}
                        />
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Corner accent */}
                <div 
                  className="corner-accent" 
                  data-atropos-offset="8"
                  style={{ borderColor: category.gradient.includes('#e50914') ? '#e50914' : 
                           category.gradient.includes('#00d4ff') ? '#00d4ff' :
                           category.gradient.includes('#ffd700') ? '#ffd700' : '#a855f7' }}
                />
              </div>
            </Atropos>
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
          <Atropos
            className="language-atropos"
            activeOffset={50}
            shadowScale={1.05}
            rotateXMax={20}
            rotateYMax={20}
          >
            {languageSkills.map((lang) => (
              <div key={lang.name} className="language-card">
                <div className="lang-glow" data-atropos-offset="-5" />
                <h4 data-atropos-offset="10">{lang.name}</h4>
                <p className="lang-level" data-atropos-offset="5">{lang.level}</p>
                <span className="lang-score" data-atropos-offset="15">{lang.score}</span>
              </div>
            ))}
          </Atropos>
          
          <Atropos
            className="language-atropos toeic-sw-atropos"
            activeOffset={50}
            shadowScale={1.05}
            rotateXMax={20}
            rotateYMax={20}
          >
            <div className="language-card toeic-sw">
              <div className="lang-glow cyan" data-atropos-offset="-5" />
              <h4 data-atropos-offset="10">TOEIC S&W</h4>
              <p className="lang-level" data-atropos-offset="5">Speaking & Writing</p>
              <span className="lang-score" data-atropos-offset="15">310/400</span>
            </div>
          </Atropos>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
