import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaBriefcase } from 'react-icons/fa';

const roleColors = [
  'border-accent shadow-[0_0_12px_rgba(0,230,118,0.3)]',
  'border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.3)]',
  'border-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.3)]',
];

export const Experience = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-3"
          >
            <div className="h-px bg-accent w-12" />
            <span className="text-accent tracking-widest uppercase font-medium text-sm">Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute w-5 h-5 rounded-full bg-background border-2 ${roleColors[index % roleColors.length]} left-[13px] md:left-[14px] top-7 z-10`} />

                {/* Card */}
                <div className="glass rounded-2xl p-7 md:p-8 hover:border-accent/20 transition-all group">

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="inline-block text-xs text-accent font-mono bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 mt-1 font-medium">{exp.company}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors shrink-0">
                      <FaBriefcase className="text-gray-500 group-hover:text-accent transition-colors w-4 h-4" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 mb-5" />

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
