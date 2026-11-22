import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const InfoCard = ({ icon: Icon, label, value, sub }) => (
  <div className="flex items-start gap-4 p-5 glass rounded-xl hover:border-accent/20 transition-colors group">
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
      <Icon className="text-accent w-4 h-4" />
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-white font-medium text-sm leading-snug">{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
    </div>
  </div>
);

export const About = () => {
  const { personal, education } = resumeData;

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px bg-accent w-12" />
            <span className="text-accent tracking-widest uppercase font-medium text-sm">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Innovating at the intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Web & AI
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-14 items-start">

          {/* Left — Bio + Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 space-y-7"
          >
            {/* Quote block */}
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="text-2xl font-light text-gray-200 leading-snug italic">
                "Building seamless digital experiences through code and artificial intelligence."
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I'm a Full Stack Developer with hands-on internship experience building responsive, database-driven web applications using React.js, Node.js, Express.js, and both SQL and NoSQL databases.
              </p>
              <p>
                Skilled in designing REST APIs, implementing authentication, and delivering end-to-end features across multiple full-stack projects.
              </p>
              <p>
                I complement this with practical experience integrating AI capabilities such as OCR, NLP, and generative AI into modern web applications. Currently pursuing my <span className="text-white font-medium">B.Tech in Artificial Intelligence and Data Science</span> at{' '}
                <span className="text-accent">{education[0].institution}</span>, constantly exploring new ways to build scalable, intelligent solutions.
              </p>
            </div>

            {/* Education highlight box */}
            <div className="glass rounded-2xl p-6 border border-white/5 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-accent text-2xl" />
                <h3 className="text-white font-bold text-lg">Education</h3>
              </div>
              <p className="text-accent font-semibold">{education[0].degree}</p>
              <p className="text-gray-400 text-sm mt-1">{education[0].institution}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="bg-white/5 rounded-lg px-4 py-2">
                  <p className="text-xs text-gray-500 mb-0.5">Period</p>
                  <p className="text-white text-sm font-medium">{education[0].period}</p>
                </div>
                <div className="bg-white/5 rounded-lg px-4 py-2">
                  <p className="text-xs text-gray-500 mb-0.5">CGPA</p>
                  <p className="text-accent text-sm font-bold">{education[0].cgpa}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education[0].coursework.split(',').map((c, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                      {c.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-5">Quick Info</h3>

            <InfoCard icon={FaMapMarkerAlt} label="Location" value={personal.location} />
            <InfoCard icon={FaEnvelope} label="Email" value={personal.email} />
            <InfoCard icon={FaPhone} label="Phone" value={personal.phone} />
            <InfoCard
              icon={FaGraduationCap}
              label="Degree"
              value="B.Tech — AI & Data Science"
              sub={`${education[0].period} · CGPA ${education[0].cgpa}`}
            />

            {/* CTA */}
            <div className="pt-4">
              <a
                href={`mailto:${personal.email}`}
                className="block text-center px-6 py-3.5 bg-accent text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
