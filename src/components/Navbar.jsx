import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [hireOpen, setHireOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { personal } = resumeData;
  const cleanPhone = personal.phone.replace(/[^+\d]/g, '');
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent('SDE / Engineering Opportunity - Keerthana Chandirasekar')}`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(link.name);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHireOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-lg shadow-black/40 border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1">
          <span>K</span>
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === link.name
                  ? 'text-accent bg-accent/10 border border-accent/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setHireOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-background rounded-full hover:shadow-[0_0_20px_rgba(0,230,118,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            <span>Hire Me</span>
            <FaChevronDown className={`w-3 h-3 transition-transform ${hireOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {hireOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 mt-3 w-72 glass rounded-2xl border border-white/10 shadow-2xl p-2 z-50 bg-[#0d1117]/95 backdrop-blur-xl"
              >
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setHireOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-accent w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      Compose in Gmail
                    </p>
                    <p className="text-xs text-gray-400 truncate max-w-[190px]">{personal.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  onClick={() => setHireOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors group mt-1"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <FaPhone className="text-accent w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      Call Directly
                    </p>
                    <p className="text-xs text-gray-400">{personal.phone}</p>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
