import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiPackage, FiCode } from 'react-icons/fi';

const stats = [
  { icon: FiBriefcase, value: '3+', label: 'Years Experience', color: '#3B82F6' },
  { icon: FiPackage, value: '20+', label: 'Projects Completed', color: '#8B5CF6' },
  { icon: FiCode, value: '10+', label: 'Technologies', color: '#06B6D4' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #0F172A 0%, #111827 50%, #0F172A 100%)' }}>
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>About Me</span>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">Crafting Digital</span> Solutions
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Building business-grade applications with clean code and scalable architecture
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
          {/* LEFT: Image card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Main image placeholder */}
            <div style={{
              width: '100%', aspectRatio: '4/5', maxWidth: '420px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 100%)',
              border: '1px solid rgba(59,130,246,0.2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontSize: '7rem', marginBottom: '1rem' }}>👨‍💻</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))',
              }} />
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                borderBottomLeftRadius: '80px',
                opacity: 0.15,
              }} />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit', color: '#3B82F6' }}>3+</div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>Years of<br/>Experience</div>
            </motion.div>

            {/* Floating stack badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', top: '20px', right: '-30px',
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8B5CF6' }}>MERN + Spring Boot</div>
              <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Full Stack Expert</div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit', marginBottom: '1.25rem', color: '#F8FAFC' }}>
              Hi, I'm <span className="gradient-text">Vatsalya Bhardwaj</span>
            </h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
              I am a Full Stack Developer with experience building business applications, management systems, REST APIs and modern web platforms. My work spans from pixel-perfect React frontends to robust Java Spring Boot backends.
            </p>
            <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
              My expertise includes React.js, MERN Stack, Java Spring Boot, Authentication Systems, Database Design, API Development and scalable software architecture. I bridge the gap between elegant UI and powerful backend logic.
            </p>
            <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '2rem', fontSize: '1rem' }}>
              I focus on creating clean, maintainable and business-oriented solutions that help companies grow. Whether it's a startup MVP or an enterprise platform, I deliver production-ready code that scales.
            </p>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="glass"
                  style={{ borderRadius: '14px', padding: '1.25rem 1rem', textAlign: 'center' }}
                >
                  <stat.icon style={{ color: stat.color, fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Outfit', color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500, marginTop: '2px' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
