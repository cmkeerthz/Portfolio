import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import heroImage from '../assets/hero-image.png';

export const Hero = () => {
  const stats = [
    { label: 'Projects Built', value: resumeData.projects.length + '+' },
    { label: 'Internships', value: resumeData.experience.filter(e => e.role.toLowerCase().includes('intern')).length + '' },
    { label: 'Certifications', value: resumeData.certifications.length + '' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── Left Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Available for Opportunities</span>
          </motion.div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-3">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-300 to-accent/60">
                {resumeData.personal.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light">
              {resumeData.personal.role}
            </h2>
          </div>

          {/* Bio excerpt */}
          <p className="text-gray-400 leading-relaxed max-w-lg text-base">
            {resumeData.personal.bio}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaMapMarkerAlt className="text-accent" />
            <span>{resumeData.personal.location}</span>
          </div>

          {/* CTA Buttons */}
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

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-1">
            <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${resumeData.personal.email}`}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400">
              <FaEnvelope className="w-4 h-4" />
            </a>
            <span className="h-px flex-1 bg-white/5 max-w-[80px]" />
            <span className="text-xs text-gray-600 tracking-wider">CONNECT</span>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-white/5">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right Content — Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="relative flex justify-center items-center h-[520px]"
        >
          {/* Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-accent/25 rounded-full blur-[90px] -z-10" />

          {/* Image frame */}
          <div className="w-full h-full relative z-0 flex justify-center items-end border-b-2 border-accent/40 rounded-b-full overflow-hidden glass shadow-2xl shadow-accent/10">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-b-full" />
            <img
              src={heroImage}
              alt={resumeData.personal.name}
              className="w-full h-full object-cover object-bottom relative z-0 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating card — Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-10 -right-4 md:-right-10 glass rounded-2xl px-5 py-4 max-w-[180px] border border-white/10 shadow-xl hidden md:block"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Education</p>
            <p className="text-xs text-white font-semibold leading-tight">B.Tech — AI & Data Science</p>
            <p className="text-xs text-accent mt-1">CGPA: {resumeData.education[0].cgpa}</p>
          </motion.div>

          {/* Floating card — Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-20 -left-4 md:-left-10 glass rounded-2xl px-5 py-4 max-w-[200px] border border-white/10 shadow-xl hidden md:block"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Research Intern</p>
            <p className="text-xs text-white font-semibold leading-tight">{resumeData.experience[0].company}</p>
            <span className="inline-block mt-1.5 px-2 py-0.5 text-[10px] bg-accent/10 text-accent rounded-full border border-accent/20">Active</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
