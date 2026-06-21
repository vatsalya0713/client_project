import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJava, FaDatabase, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import {
  SiMongodb, SiSpringboot, SiExpress, SiMysql, SiTypescript,
} from 'react-icons/si';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const techIcons = [
  { icon: FaReact, color: '#61DAFB', label: 'React', delay: 0 },
  { icon: FaNodeJs, color: '#68A063', label: 'Node.js', delay: 0.1 },
  { icon: SiExpress, color: '#94A3B8', label: 'Express', delay: 0.2 },
  { icon: SiMongodb, color: '#4CAF50', label: 'MongoDB', delay: 0.3 },
  { icon: FaJava, color: '#F89820', label: 'Java', delay: 0.4 },
  { icon: SiSpringboot, color: '#6DB33F', label: 'Spring', delay: 0.5 },
  { icon: SiMysql, color: '#00758F', label: 'MySQL', delay: 0.6 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="mesh-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '5%', width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite 2s',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '25%', width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite 1s',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          {/* LEFT: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '50px',
                padding: '6px 16px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#06B6D4',
                letterSpacing: '0.05em',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#06B6D4',
                  boxShadow: '0 0 8px #06B6D4',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }} />
                AVAILABLE FOR REMOTE WORK
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="section-title"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1.25rem' }}
            >
              Full Stack Developer{' '}
              <span className="gradient-text">Building Scalable</span>{' '}
              Web Applications
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '520px' }}
            >
              I help businesses build modern, secure and scalable web applications using React, MERN Stack and Spring Boot. Trusted by clients across the UAE, USA, UK, and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: '1rem', padding: '1rem 2rem' }}
              >
                Hire Me <HiArrowRight />
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: '1rem', padding: '1rem 2rem' }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Outfit', background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 500, marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            className="hero-visual"
          >
            {/* Central avatar */}
            <div className="animate-float" style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: 260, height: 260,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                border: '2px solid rgba(59,130,246,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 0 80px rgba(59,130,246,0.2)',
              }}>
                {/* Inner circle */}
                <div style={{
                  width: 200, height: 200, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '5rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <span style={{ fontSize: '80px', lineHeight: 1 }}>👨‍💻</span>
                </div>

                {/* Orbit ring */}
                <div style={{
                  position: 'absolute', inset: '-20px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(59,130,246,0.2)',
                  animation: 'rotate-slow 20s linear infinite',
                }} />
              </div>
            </div>

            {/* Tech icon pills orbiting */}
            {techIcons.map((tech, i) => {
              const angle = (i / techIcons.length) * 2 * Math.PI - Math.PI / 2;
              const r = 180;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + tech.delay, duration: 0.5, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    zIndex: 3,
                  }}
                >
                  <div
                    className="animate-float"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      background: 'rgba(15,23,42,0.9)',
                      border: `1px solid ${tech.color}33`,
                      borderRadius: '14px',
                      padding: '10px 14px',
                      display: 'flex', alignItems: 'center', gap: '7px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: `0 4px 20px ${tech.color}22`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <tech.icon style={{ color: tech.color, fontSize: '18px' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#E2E8F0' }}>{tech.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <span style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 500 }}>Connect:</span>
          {[
            { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
          ].map(social => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#94A3B8', textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px', padding: '6px 12px',
                fontSize: '0.85rem', fontWeight: 500,
                transition: 'all 0.25s ease',
              }}
            >
              <social.icon size={16} />
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
