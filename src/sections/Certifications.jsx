import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaAward, FaTrophy, FaUsers, FaShieldAlt, FaBolt } from 'react-icons/fa';

const leadershipIcons = [FaUsers, FaShieldAlt, FaBolt, FaTrophy, FaTrophy];

export const Certifications = () => {
  const { certifications, leadership } = resumeData;

  return (
    <section id="certifications" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-3">
            <div className="h-px bg-accent w-8" />
            <span className="text-accent tracking-widest uppercase font-medium text-sm">Credentials & Achievements</span>
            <div className="h-px bg-accent w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Certifications & Leadership</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Certifications ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <FaAward className="text-accent text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const isOngoing = cert.toLowerCase().includes('ongoing');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-5 rounded-2xl hover:border-accent/20 transition-all group flex gap-4 items-start"
                  >
                    <div className="mt-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,230,118,0.8)]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium leading-relaxed text-sm group-hover:text-white transition-colors">
                        {cert.replace(' (Ongoing)', '')}
                      </p>
                      {isOngoing && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20 font-medium">
                          Ongoing
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Leadership & Achievements ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <FaTrophy className="text-accent text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Leadership & Achievements</h3>
            </motion.div>

            <div className="space-y-4">
              {leadership.map((item, index) => {
                const Icon = leadershipIcons[index % leadershipIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-5 rounded-2xl hover:border-accent/20 transition-all group flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors mt-0.5">
                      <Icon className="text-gray-500 group-hover:text-accent transition-colors w-3.5 h-3.5" />
                    </div>
                    <p className="text-gray-300 font-medium leading-relaxed text-sm group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
