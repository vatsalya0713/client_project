import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiGlobe } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'vatsalya.dev@gmail.com',
    href: 'mailto:vatsalya.dev@gmail.com',
    color: '#3B82F6',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vatsalya',
    href: 'https://linkedin.com/in/vatsalya',
    color: '#0A66C2',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/vatsalya',
    href: 'https://github.com/vatsalya',
    color: '#94A3B8',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India',
    href: null,
    color: '#EC4899',
  },
  {
    icon: FiGlobe,
    label: 'Availability',
    value: 'Open for Remote Work Worldwide',
    href: null,
    color: '#06B6D4',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', company: '', details: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', company: '', details: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #111827 0%, #0F172A 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Let's Work Together</span>
          <h2 className="section-title">
            Ready to Build Your <span className="gradient-text">Next Project?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Tell me about your project and let's discuss how I can help you build something remarkable
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* LEFT: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Availability badge */}
            <div style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: '0 0 10px #22C55E',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }} />
                <span style={{ fontWeight: 700, color: '#06B6D4', fontSize: '0.9rem' }}>Currently Available</span>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Open for freelance and remote opportunities worldwide. Dubai, USA, UK, Canada & Australia clients welcome.
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '0.875rem 1rem',
                        background: 'rgba(30,41,59,0.5)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${item.color}40`;
                        e.currentTarget.style.background = `${item.color}08`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.background = 'rgba(30,41,59,0.5)';
                      }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: '9px',
                        background: `${item.color}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <item.icon style={{ color: item.color, fontSize: '16px' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</div>
                        <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 500, marginTop: '1px' }}>{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '0.875rem 1rem',
                      background: 'rgba(30,41,59,0.5)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '12px',
                    }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '9px',
                        background: `${item.color}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <item.icon style={{ color: item.color, fontSize: '16px' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</div>
                        <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 500, marginTop: '1px' }}>{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass" style={{ borderRadius: '24px', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.25rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>
                Send Me a Message
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '2rem' }}>
                I typically respond within 24 hours. Let's discuss your project!
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-cols">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', letterSpacing: '0.04em' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="input-field"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project — what you want to build, your timeline, and budget range..."
                    className="input-field"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: sending || sent ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    padding: '1rem',
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sent ? (
                    <>✅ Message Sent! I'll respond shortly</>
                  ) : sending ? (
                    <>Sending...</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </motion.button>

                <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.78rem', marginTop: '1rem' }}>
                  🔒 Your information is kept private and confidential
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
