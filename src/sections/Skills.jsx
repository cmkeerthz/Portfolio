import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const categoryMeta = {
  frontend: { label: 'Frontend Development', color: 'from-blue-500/20 to-blue-500/5', dot: 'bg-blue-400' },
  backend: { label: 'Backend & Languages', color: 'from-purple-500/20 to-purple-500/5', dot: 'bg-purple-400' },
  databases: { label: 'Databases', color: 'from-orange-500/20 to-orange-500/5', dot: 'bg-orange-400' },
  ai: { label: 'AI & Machine Learning', color: 'from-accent/20 to-accent/5', dot: 'bg-accent' },
  tools: { label: 'Cloud & Tools', color: 'from-pink-500/20 to-pink-500/5', dot: 'bg-pink-400' },
};

const SkillCard = ({ category, skills, delay }) => {
  const meta = categoryMeta[category] || { label: category, color: 'from-white/10 to-transparent', dot: 'bg-white' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-7 hover:border-white/10 transition-all group relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className={`w-2.5 h-2.5 rounded-full ${meta.dot} shadow-[0_0_8px_currentColor]`} />
        <h3 className="text-white font-bold text-base">{meta.label}</h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors group/item"
            >
              <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 group-hover/item:bg-accent/20 transition-colors">
                <Icon className="w-3.5 h-3.5 text-gray-400 group-hover/item:text-accent transition-colors" />
              </span>
              <span className="text-sm text-gray-400 group-hover/item:text-gray-200 font-medium transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const { skills } = resumeData;
  const allCount = Object.values(skills).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <section id="skills" className="py-28 relative bg-secondary/30 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-3"
            >
              <div className="h-px bg-accent w-8" />
              <span className="text-accent tracking-widest uppercase font-medium text-sm">Expertise</span>
              <div className="h-px bg-accent w-8" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Technical Arsenal
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl px-6 py-4 text-center border border-white/5"
          >
            <p className="text-3xl font-bold text-accent">{allCount}+</p>
            <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">Technologies</p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard category="frontend" skills={skills.frontend} delay={0.1} />
          <SkillCard category="backend" skills={skills.backend} delay={0.2} />
          <SkillCard category="databases" skills={skills.databases} delay={0.3} />
          <SkillCard category="ai" skills={skills.ai} delay={0.4} />
          <SkillCard category="tools" skills={skills.tools} delay={0.5} />

          {/* Tagline card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between border-accent/20 border"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
            <p className="text-2xl font-light text-gray-300 leading-snug relative z-10">
              "Always learning, always building."
            </p>
            <div className="mt-6 relative z-10">
              <p className="text-accent font-semibold">{resumeData.personal.name}</p>
              <p className="text-xs text-gray-500">{resumeData.personal.role}</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
