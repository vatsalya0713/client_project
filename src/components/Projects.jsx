import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMongodb, SiSpringboot, SiMysql } from 'react-icons/si';

const projects = [
  {
    title: 'Pharmacy Management System',
    description: 'A complete inventory and pharmacy management platform with medicine tracking, expiry management, stock monitoring and detailed reporting for pharmacy businesses.',
    emoji: '💊',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
    techStack: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
    ],
    features: ['Inventory Management', 'Expiry Tracking', 'Vendor Management', 'Dashboard Analytics'],
    color: '#3B82F6',
    category: 'Healthcare',
  },
  {
    title: 'Clinic Management System',
    description: 'Healthcare management software for clinics with comprehensive patient records, appointment scheduling, and an admin dashboard with role-based access.',
    emoji: '🏥',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    techStack: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
    ],
    features: ['Patient Management', 'Appointment Booking', 'Admin Dashboard', 'Authentication'],
    color: '#8B5CF6',
    category: 'Healthcare',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern full-featured e-commerce solution with product catalog management, shopping cart, order processing and secure user authentication.',
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
    techStack: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
      { name: 'MongoDB', icon: SiMongodb, color: '#4CAF50' },
    ],
    features: ['Product Catalog', 'Cart System', 'User Auth', 'Order Management'],
    color: '#10B981',
    category: 'E-Commerce',
  },
  {
    title: 'Inventory Management System',
    description: 'Business inventory tracking and reporting application with real-time stock monitoring, vendor management, and advanced analytics dashboard.',
    emoji: '📦',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    techStack: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
      { name: 'MongoDB', icon: SiMongodb, color: '#4CAF50' },
    ],
    features: ['Stock Tracking', 'Reporting', 'Vendor Management', 'Analytics'],
    color: '#F59E0B',
    category: 'Business',
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ position: 'relative' }}
    >
      <div
        className="card-hover"
        style={{
          background: 'rgba(30,41,59,0.5)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Project visual header */}
        <div style={{
          height: '200px',
          background: project.gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Grid pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />
          {/* Glow center */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }} />

          <div style={{
            fontSize: '5rem',
            position: 'relative',
            zIndex: 1,
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))',
          }}>
            {project.emoji}
          </div>

          {/* Category badge */}
          <div style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50px',
            padding: '4px 12px',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'white',
            letterSpacing: '0.05em',
          }}>
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.15rem',
            color: '#F8FAFC', marginBottom: '0.75rem',
          }}>
            {project.title}
          </h3>

          <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
            {project.description}
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {project.features.map(f => (
              <span key={f} style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
                color: project.color,
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '6px',
              }}>
                ✓ {f}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {project.techStack.map(tech => (
              <div key={tech.name} style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '5px 10px',
              }}>
                <tech.icon style={{ color: tech.color, fontSize: '14px' }} />
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '0.625rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
            >
              <FaGithub size={14} /> GitHub
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '0.625rem',
                background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                borderRadius: '10px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #0B1121 0%, #0F172A 100%)', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(59,130,246,0.06) 0%, transparent 70%)',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Featured Work</span>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Make an Impact</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Real-world business applications built with modern tech stacks and production-grade architecture
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <p style={{ color: '#64748B', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub size={18} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
