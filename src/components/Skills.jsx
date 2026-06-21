import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiMongodb, SiSpringboot, SiExpress, SiMysql,
  SiJavascript, SiTailwindcss,
  SiPostman, SiJsonwebtokens,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 92 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#68A063', level: 88 },
      { name: 'Express.js', icon: SiExpress, color: '#94A3B8', level: 85 },
      { name: 'Java', icon: FaJava, color: '#F89820', level: 90 },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', level: 87 },
    ],
  },
  {
    title: 'Databases',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#4CAF50', level: 88 },
      { name: 'MySQL', icon: SiMysql, color: '#00758F', level: 85 },
    ],
  },
  {
    title: 'Auth & Tools',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    skills: [
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#F59E0B', level: 90 },
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 88 },
      { name: 'GitHub', icon: FaGithub, color: '#94A3B8', level: 88 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC', level: 95 },
    ],
  },
];

function SkillBar({ skill, color, inView }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <skill.icon style={{ color: skill.color, fontSize: '16px' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#E2E8F0' }}>{skill.name}</span>
        </div>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" style={{ padding: '7rem 0', background: '#0F172A', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="tech-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Technical Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Proficient in modern technologies across the full stack — from elegant UIs to enterprise-grade backends
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }} className="skills-grid">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
              className="glass card-hover"
              style={{ borderRadius: '20px', padding: '2rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: category.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>
                    {ci === 0 ? '🎨' : ci === 1 ? '⚙️' : ci === 2 ? '🗄️' : '🔧'}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC' }}>{category.title}</h3>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{category.skills.length} technologies</span>
                </div>
              </div>

              {/* Skill bars */}
              {category.skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} color={category.color} inView={inView} />
              ))}

              {/* Decorative corner gradient */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 80, height: 80,
                background: category.gradient, borderBottomLeftRadius: '80px', opacity: 0.08,
              }} />
            </motion.div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <p style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '1.25rem', fontWeight: 500 }}>Also familiar with</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['REST APIs', 'Role-Based Access Control', 'JWT', 'Agile', 'MVC Pattern', 'OOP', 'Microservices', 'Cloud Deploy'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
