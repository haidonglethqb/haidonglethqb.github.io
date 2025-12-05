import React from 'react';
import './TechMarquee.css';

const techs = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="tech-marquee-container">
      <div className="marquee-gradient left" />
      <div className="marquee-gradient right" />
      
      <div className="tech-marquee">
        <div className="marquee-track">
          {/* First set */}
          {techs.map((tech, index) => (
            <div key={`first-${index}`} className="tech-item">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {techs.map((tech, index) => (
            <div key={`second-${index}`} className="tech-item">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse direction marquee */}
      <div className="tech-marquee reverse">
        <div className="marquee-track">
          {[...techs].reverse().map((tech, index) => (
            <div key={`first-rev-${index}`} className="tech-item">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {[...techs].reverse().map((tech, index) => (
            <div key={`second-rev-${index}`} className="tech-item">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
