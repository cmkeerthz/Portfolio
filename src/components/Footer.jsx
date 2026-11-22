import React from 'react';
import { resumeData } from '../data/resume';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const { personal } = resumeData;

  return (
    <footer className="border-t border-white/5 bg-background relative z-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="#home" className="text-3xl font-bold tracking-tighter block mb-3">
              <span className="text-white">K</span>
              <span className="text-accent">.</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {personal.role} passionate about building intelligent, impactful digital products.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-5">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-5">Connect</h4>
            <div className="flex gap-3">
              <a href={`https://${personal.github}`} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400 hover:bg-accent/5">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={`https://${personal.linkedin}`} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400 hover:bg-accent/5">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400 hover:bg-accent/5">
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-4">{personal.email}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            Back to top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
