import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FiMail, href: 'mailto:vatsalya.dev@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#080E1A', borderTop: '1px solid rgba(59,130,246,0.1)', position: 'relative' }}>
      <div className="container-custom" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{
                width: 38, height: 38, borderRadius: '10px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FaCode style={{ color: 'white', fontSize: '16px' }} />
              </div>
              <span style={{
                fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #F8FAFC, #94A3B8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Vatsalya Bhardwaj
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '340px', marginBottom: '1.5rem' }}>
              Full Stack Developer specializing in React.js, Spring Boot, and the MERN Stack. Available for freelance and remote opportunities worldwide.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '50px', padding: '6px 16px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E', animation: 'pulse-glow 2s ease-in-out infinite', display: 'inline-block' }} />
              <span style={{ fontSize: '0.8rem', color: '#06B6D4', fontWeight: 600 }}>Available for Remote Work Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Outfit', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Quick Links</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  style={{
                    color: '#475569', fontSize: '0.875rem', textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3B82F6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                >
                  → {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: 'Outfit', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socials.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    color: '#475569', textDecoration: 'none',
                    fontSize: '0.875rem', transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = social.color || '#3B82F6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                >
                  <social.icon size={16} />
                  {social.label}
                </motion.a>
              ))}
            </div>

            {/* Tech stack pills */}
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#334155', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>BUILT WITH</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['React', 'Tailwind', 'Framer Motion'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    color: '#475569',
                    fontSize: '0.7rem',
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#334155', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} <span style={{ color: '#475569' }}>Vatsalya Bhardwaj</span>. All rights reserved. — Available for Freelance and Remote Opportunities Worldwide.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 40, height: 40, borderRadius: '10px',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(59,130,246,0.3)',
            }}
            title="Back to top"
          >
            <FiArrowUp style={{ color: 'white', fontSize: '16px' }} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
