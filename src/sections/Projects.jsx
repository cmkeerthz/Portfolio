import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectDomains = [
  'Food Delivery · AI',
  'HealthTech · AI',
  'Data Analytics',
  'Database Architecture',
];

const projectGradients = [
  'from-accent/20 via-emerald-500/10 to-transparent',
  'from-blue-500/20 via-blue-400/10 to-transparent',
  'from-purple-500/20 via-purple-400/10 to-transparent',
  'from-orange-500/20 via-orange-400/10 to-transparent',
];

const MockUI = ({ name, gradient, domain }) => (
  <div className={`h-52 bg-gradient-to-br ${gradient} border-b border-white/5 relative overflow-hidden flex items-center justify-center`}>
    {/* Simulated browser chrome */}
    <div className="absolute inset-4 rounded-xl bg-background/60 border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
      {/* Browser bar */}
      <div className="h-7 border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0 bg-white/5">
        <div className="w-2 h-2 rounded-full bg-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 h-3 rounded bg-white/5" />
      </div>
      {/* Content placeholder */}
      <div className="flex-1 flex flex-col justify-center items-center gap-2 p-4">
        <FaCode className="text-accent/30 w-8 h-8" />
        <p className="text-white/20 text-xs font-mono uppercase tracking-widest">{name}</p>
      </div>
    </div>
    {/* Domain label badge */}
    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/70 border border-white/10 backdrop-blur-sm">
      <span className="text-[10px] text-gray-400 font-medium tracking-wide">{domain}</span>
    </div>
  </div>
);

export const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-28 relative bg-secondary/30 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-3"
          >
            <div className="h-px bg-accent w-8" />
            <span className="text-accent tracking-widest uppercase font-medium text-sm">Portfolio</span>
            <div className="h-px bg-accent w-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto text-sm"
          >
            A selection of full-stack and AI-powered projects built from the ground up.
          </motion.p>
        </div>

        {/* Projects grid — first two are wider */}
        <div className="space-y-8">
          {/* Row 1 — 2 featured cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col"
              >
                <MockUI name={project.name} gradient={projectGradients[index]} domain={projectDomains[index]} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-3 ml-4">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5">
                        <FaGithub className="w-4 h-4" />
                      </a>
                      {project.demo && project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer"
                          className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 2 more cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col"
              >
                <MockUI name={project.name} gradient={projectGradients[index + 2]} domain={projectDomains[index + 2]} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-3 ml-4">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5">
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href={`https://${resumeData.personal.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-white/10 rounded-full hover:border-accent hover:text-accent transition-all text-sm font-medium group"
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
            <FaExternalLinkAlt className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
