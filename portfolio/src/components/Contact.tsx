import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EmailIcon, PhoneIcon, LocationIcon, GithubIcon, LinkedInIcon } from './Icons';
import './Contact.css';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <EmailIcon size={24} color="#fff" />,
      label: 'Email',
      value: 'haidonglethqb@gmail.com',
      href: 'mailto:haidonglethqb@gmail.com',
    },
    {
      icon: <PhoneIcon size={24} color="#fff" />,
      label: 'Phone',
      value: '0869 932 636',
      href: 'tel:0869932636',
    },
    {
      icon: <LocationIcon size={24} color="#fff" />,
      label: 'Location',
      value: 'Thu Duc Ward, Ho Chi Minh City',
      href: '#',
    },
    {
      icon: <GithubIcon size={24} color="#fff" />,
      label: 'GitHub',
      value: 'github.com/haidonglethqb',
      href: 'https://github.com/haidonglethqb',
    },
  ];

  return (
    <section id="contact" className="contact section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together</p>
      </motion.div>

      <div className="contact-container-centered">
        {/* Contact Info Card */}
        <motion.div
          className="contact-info full-width"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="info-header">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div className="info-items-grid">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="info-item-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="info-icon-large">{item.icon}</div>
                <div className="info-content">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="contact-cta">
            <motion.a
              href="mailto:haidonglethqb@gmail.com"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <EmailIcon size={20} /> Send me an email
            </motion.a>
          </div>

          <div className="contact-decoration">
            <div className="deco-circle deco-1" />
            <div className="deco-circle deco-2" />
            <div className="deco-circle deco-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
