import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiOutlineCode, HiOutlineDesktopComputer, HiOutlineServer,
  HiOutlineDatabase, HiOutlinePuzzle, HiOutlineLightningBolt,
} from 'react-icons/hi';

const services = [
  {
    icon: HiOutlineDesktopComputer,
    title: 'Custom Web Application Development',
    description: 'Build scalable, performant business applications tailored precisely to your company\'s requirements — from MVPs to enterprise platforms.',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    tags: ['React', 'Spring Boot', 'MERN'],
  },
  {
    icon: HiOutlineCode,
    title: 'React Frontend Development',
    description: 'Pixel-perfect, modern responsive user interfaces with smooth animations, state management, and exceptional user experience.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: HiOutlineServer,
    title: 'Spring Boot Backend Development',
    description: 'Secure, enterprise-grade REST APIs and backend systems built with Java Spring Boot, JWT authentication and role-based access control.',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    tags: ['Java', 'Spring Boot', 'JWT'],
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'MERN Stack Development',
    description: 'Complete end-to-end application development using MongoDB, Express, React, and Node.js — fast, scalable, and fully integrated.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    tags: ['MongoDB', 'Express', 'Node.js'],
  },
  {
    icon: HiOutlineDatabase,
    title: 'Database Design & Architecture',
    description: 'Efficient, normalized, and scalable database architecture for both relational (MySQL) and document-based (MongoDB) systems.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    tags: ['MySQL', 'MongoDB', 'Schema Design'],
  },
  {
    icon: HiOutlinePuzzle,
    title: 'API Integration & Development',
    description: 'Seamless third-party API integrations including payment gateways, external services, and custom REST API development.',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
    tags: ['REST APIs', 'Payment Gateway', 'OAuth'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #0F172A 0%, #0B1121 100%)', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(59,130,246,0.06) 0%, transparent 70%)',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>What I Offer</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Business Growth</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            End-to-end development services designed to turn your vision into a production-ready product
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass card-hover"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: service.gradient,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }} className="service-top-line" />

              {/* Icon */}
              <div style={{
                width: 54, height: 54,
                borderRadius: '14px',
                background: `${service.color}18`,
                border: `1px solid ${service.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <service.icon style={{ color: service.color, fontSize: '24px' }} />
              </div>

              <h3 style={{
                fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.05rem',
                color: '#F8FAFC', marginBottom: '0.75rem', lineHeight: 1.4,
              }}>
                {service.title}
              </h3>

              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {service.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}25`,
                      color: service.color,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '50px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner decoration */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 70, height: 70,
                background: service.gradient,
                borderTopLeftRadius: '70px',
                opacity: 0.06,
              }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        .glass.card-hover:hover .service-top-line {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
