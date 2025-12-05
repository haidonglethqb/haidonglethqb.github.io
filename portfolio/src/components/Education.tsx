import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Atropos from 'atropos/react';
import { GraduationCapIcon, TrophyIcon, StarIcon, AwardIcon } from './Icons';
import 'atropos/css';
import './Education.css';

interface Award {
  id: number;
  title: string;
  date: string;
  type: 'trophy' | 'star';
}

const awards: Award[] = [
  {
    id: 1,
    title: 'First place for developing a multiplayer Uno game using C# and socket programming',
    date: 'Sep 2024',
    type: 'trophy',
  },
  {
    id: 2,
    title: 'First place for Android application project in the Android Development course',
    date: 'Jan 2025',
    type: 'trophy',
  },
  {
    id: 3,
    title: 'Academic excellence recognition for four consecutive semesters',
    date: 'Jan 2025',
    type: 'star',
  },
  {
    id: 4,
    title: 'First place in Modern IoT Programming course',
    date: 'Jun 2025',
    type: 'trophy',
  },
];

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="education section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>
      </motion.div>

      <div className="education-container">
        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Atropos
            className="education-atropos"
            activeOffset={50}
            shadowScale={1.05}
            rotateXMax={12}
            rotateYMax={12}
            shadow={true}
            highlight={true}
          >
            <div className="education-card main">
              {/* Background decorations */}
              <div className="edu-bg-pattern" data-atropos-offset="-5" />
              <div className="edu-glow" data-atropos-offset="-3" />
              
              <div className="edu-icon" data-atropos-offset="15">
                <GraduationCapIcon size={40} color="#fff" />
              </div>
              
              <div className="edu-content">
                <div className="edu-badge" data-atropos-offset="8">Undergraduate</div>
                <h3 className="edu-university" data-atropos-offset="6">
                  University of Information Technology
                </h3>
                <p className="edu-subtitle" data-atropos-offset="4">VietNam National University (UIT-VNUHCM)</p>
                
                <div className="edu-details" data-atropos-offset="3">
                  <div className="edu-detail-item">
                    <span className="label">Major</span>
                    <span className="value">Information Technology</span>
                  </div>
                  <div className="edu-detail-item">
                    <span className="label">Period</span>
                    <span className="value">Oct 2022 - May 2026</span>
                  </div>
                  <div className="edu-detail-item">
                    <span className="label">GPA</span>
                    <span className="value highlight" data-atropos-offset="10">4.0 / 4.0</span>
                  </div>
                </div>

                <div className="edu-progress" data-atropos-offset="5">
                  <div className="progress-label">
                    <span>Academic Progress</span>
                    <span>Final Year</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '85%' } : {}}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="floating-elements">
                  <span className="float-el" data-atropos-offset="20">🎓</span>
                  <span className="float-el" data-atropos-offset="18">⭐</span>
                  <span className="float-el" data-atropos-offset="22">💻</span>
                </div>
              </div>
            </div>
          </Atropos>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          className="awards-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="awards-title">
            <AwardIcon size={24} color="#ffd700" /> Honors & Awards
          </h3>
          
          <div className="awards-grid">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Atropos
                  className="award-atropos"
                  activeOffset={30}
                  shadowScale={1.02}
                  rotateXMax={10}
                  rotateYMax={10}
                >
                  <div className="award-card">
                    <div className="award-glow" data-atropos-offset="-3" />
                    <div className="award-icon" data-atropos-offset="10">
                      {award.type === 'trophy' ? (
                        <TrophyIcon size={24} color="#141414" />
                      ) : (
                        <StarIcon size={24} color="#141414" />
                      )}
                    </div>
                    <div className="award-content" data-atropos-offset="5">
                      <p className="award-title">{award.title}</p>
                      <span className="award-date">{award.date}</span>
                    </div>
                  </div>
                </Atropos>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
