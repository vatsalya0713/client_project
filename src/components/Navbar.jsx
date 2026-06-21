import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(15,23,42,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(59,130,246,0.12)' : 'none',
        }}
      >
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              whileHover={{ scale: 1.04 }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(59,130,246,0.35)',
              }}>
                <FaCode style={{ color: 'white', fontSize: '16px' }} />
              </div>
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '1.15rem',
                background: 'linear-gradient(135deg, #F8FAFC, #94A3B8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Vatsalya<span style={{ color: '#3B82F6', WebkitTextFillColor: '#3B82F6' }}>.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
              {navLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: activeSection === link.href.replace('#', '') ? '#3B82F6' : '#94A3B8',
                    background: activeSection === link.href.replace('#', '') ? 'rgba(59,130,246,0.1)' : 'transparent',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="btn-primary"
                style={{ marginLeft: '12px', padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="show-mobile"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: '10px',
                padding: '8px',
                color: '#F8FAFC',
                cursor: 'pointer',
                display: 'none',
              }}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 49,
              background: 'rgba(15,23,42,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(59,130,246,0.15)',
              padding: '1rem 1.5rem 1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: '#F8FAFC',
                    background: activeSection === link.href.replace('#', '') ? 'rgba(59,130,246,0.15)' : 'transparent',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="btn-primary"
                style={{ marginTop: '8px', justifyContent: 'center' }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; align-items: center; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
