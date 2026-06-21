import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'CEO',
    company: 'TechVenture Dubai',
    country: '🇦🇪 Dubai, UAE',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Vatsalya delivered our pharmacy management system ahead of schedule. The code quality was exceptional — clean, well-documented and scalable. Our system has been running flawlessly since launch. Highly recommended for any serious business application.',
    project: 'Pharmacy Management System',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    company: 'HealthBridge Inc.',
    country: '🇺🇸 San Francisco, USA',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Working with Vatsalya on our clinic management platform was a fantastic experience. He understood our requirements perfectly and built a system that our staff loves using. His communication throughout the project was outstanding.',
    project: 'Clinic Management System',
  },
  {
    name: 'James Robertson',
    role: 'Founder',
    company: 'ShopNow UK',
    country: '🇬🇧 London, UK',
    avatar: '👨‍🦱',
    rating: 5,
    text: 'The e-commerce platform Vatsalya built for us exceeded our expectations. He proposed smart architectural decisions that saved us time and money in the long run. I will definitely be working with him on our next project.',
    project: 'E-Commerce Platform',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    company: 'RetailPro Canada',
    country: '🇨🇦 Toronto, Canada',
    avatar: '👩‍🦰',
    rating: 5,
    text: 'Vatsalya built our inventory management system and transformed how we run operations. The reporting dashboard alone has saved us hours each week. Professional, reliable, and technically brilliant.',
    project: 'Inventory Management System',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Client Testimonials</span>
          <h2 className="section-title">
            What Clients Say <span className="gradient-text">About My Work</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Real feedback from international clients who trusted me with their business applications
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass"
              style={{ borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Quote decoration */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '2rem',
                fontSize: '8rem', lineHeight: 1, color: 'rgba(59,130,246,0.08)',
                fontFamily: 'Georgia, serif', fontWeight: 900,
                pointerEvents: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FiStar key={i} style={{ color: '#F59E0B', fill: '#F59E0B', fontSize: '18px' }} />
                ))}
              </div>

              {/* Text */}
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic' }}>
                "{testimonials[current].text}"
              </p>

              {/* Client info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
                    border: '2px solid rgba(59,130,246,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#F8FAFC', fontFamily: 'Outfit', fontSize: '1rem' }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                    <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '2px' }}>
                      {testimonials[current].country}
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '0.75rem',
                  color: '#93C5FD',
                  fontWeight: 600,
                }}>
                  📌 {testimonials[current].project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(30,41,59,0.8)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: '#94A3B8', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <FiChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: '4px',
                    background: i === current ? '#3B82F6' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(30,41,59,0.8)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: '#94A3B8', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
