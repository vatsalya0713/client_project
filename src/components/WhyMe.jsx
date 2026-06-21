import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineClock,
  HiOutlineDeviceMobile, HiOutlineChartBar, HiOutlineSupport,
} from 'react-icons/hi';

const reasons = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Clean, Maintainable Code',
    description: 'Every line of code I write follows best practices, design patterns and industry standards. No spaghetti code — just clean, well-documented solutions.',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Scalable Architecture',
    description: 'Applications designed to grow with your business. From database schema to API design, scalability is built in from day one.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  },
  {
    icon: HiOutlineClock,
    title: 'Fast & Reliable Delivery',
    description: 'I respect your time and business needs. Projects are delivered on schedule without compromising on quality or performance.',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'Fully Responsive Design',
    description: 'Every application I build works flawlessly across all devices — desktop, tablet and mobile. Your users get a premium experience everywhere.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Business-Oriented Solutions',
    description: 'I don\'t just write code — I solve business problems. Every feature and decision is aligned with your company\'s goals and ROI.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
  },
  {
    icon: HiOutlineSupport,
    title: 'Long-Term Support',
    description: 'My commitment doesn\'t end at delivery. I provide ongoing support, bug fixes, and feature enhancements to keep your application running smoothly.',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="whyme" style={{ padding: '7rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Why Choose Me</span>
          <h2 className="section-title">
            The Developer You Can <span className="gradient-text">Trust & Rely On</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Beyond technical skills — I bring professionalism, communication, and a genuine commitment to your success
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="whyme-grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass card-hover"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {/* Icon with gradient background */}
              <div style={{
                width: 64, height: 64,
                borderRadius: '18px',
                background: reason.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem',
                boxShadow: `0 8px 24px ${reason.color}40`,
              }}>
                <reason.icon style={{ color: 'white', fontSize: '28px' }} />
              </div>

              <h3 style={{
                fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem',
                color: '#F8FAFC', marginBottom: '0.75rem',
              }}>
                {reason.title}
              </h3>

              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.75 }}>
                {reason.description}
              </p>

              {/* Corner decoration */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 60, height: 60,
                background: reason.gradient,
                borderTopLeftRadius: '60px',
                opacity: 0.06,
              }} />
            </motion.div>
          ))}
        </div>

        {/* Trust indicators bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            marginTop: '4rem',
            background: 'rgba(30,41,59,0.5)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {[
            { value: 'Dubai & UAE', label: 'Primary Market', emoji: '🇦🇪' },
            { value: 'USA & UK', label: 'Active Clients', emoji: '🇺🇸' },
            { value: 'Remote Ready', label: 'Work Setup', emoji: '🌍' },
            { value: '$2K–$10K', label: 'Project Range', emoji: '💰' },
            { value: '24h Response', label: 'Communication', emoji: '⚡' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{item.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#F8FAFC', fontFamily: 'Outfit' }}>{item.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .whyme-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .whyme-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
