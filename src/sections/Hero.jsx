import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import heroImage from '../assets/portrait.jpeg';

export const Hero = () => {
  const stats = [
    { label: 'Projects Built', value: resumeData.projects.length + '+' },
    { label: 'Internships', value: resumeData.experience.filter(e => e.role.toLowerCase().includes('intern')).length + '' },
    { label: 'CGPA', value: resumeData.education[0].cgpa.split(' ')[0] },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-3">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-300 to-accent/60">
                {resumeData.personal.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light">
              {resumeData.personal.role}
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-lg text-base">
            {resumeData.personal.bio}
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaMapMarkerAlt className="text-accent" />
            <span>{resumeData.personal.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-accent text-background font-bold rounded-full hover:shadow-[0_0_28px_rgba(0,230,118,0.5)] transition-all transform hover:-translate-y-1 text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-all transform hover:-translate-y-1 text-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <a
              href={`https://${resumeData.personal.github}`}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={`https://${resumeData.personal.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
            <span className="h-px flex-1 bg-white/5 max-w-[80px]" />
            <span className="text-xs text-gray-600 tracking-wider">CONNECT</span>
          </div>

          <div className="flex gap-8 pt-4 border-t border-white/5">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content — Classy B&W Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative flex justify-center items-center h-[520px] group"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] bg-accent/20 rounded-full blur-[95px] -z-10"
          />

          <div className="w-full h-full max-w-[430px] relative z-0 flex justify-center items-end rounded-t-[180px] rounded-b-3xl overflow-hidden border border-white/15 group-hover:border-accent/40 transition-colors duration-500 bg-black/60 shadow-2xl shadow-black/70">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/5 z-10 pointer-events-none" />
            <img
              src={heroImage}
              alt={resumeData.personal.name}
              className="w-full h-full object-cover object-top grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
