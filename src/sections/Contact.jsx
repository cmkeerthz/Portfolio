import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactLink = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent/20 transition-all group"
  >
    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
      <Icon className="text-accent w-4 h-4" />
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-sm text-white font-medium group-hover:text-accent transition-colors break-all">{value}</p>
    </div>
  </a>
);

export const Contact = () => {
  const { personal } = resumeData;
  const cleanPhone = personal.phone.replace(/[^+\d]/g, '');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '85596d9e-3aed-4122-ad4f-9d39e4c06cc3';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio inquiry from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || `Could not send message. Please email ${personal.email}`);
      }
    } catch {
      setStatus('error');
      setErrorMsg(`Network error. Please email directly at ${personal.email}`);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-secondary/30">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-3"
          >
            <div className="h-px bg-accent w-8" />
            <span className="text-accent tracking-widest uppercase font-medium text-sm">Get In Touch</span>
            <div className="h-px bg-accent w-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              reliable
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto text-sm"
          >
            Open to Software Engineering (SDE) roles, internships, and technical collaborations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>

            <ContactLink icon={FaEnvelope} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <ContactLink icon={FaPhone} label="Phone" value={personal.phone} href={`tel:${cleanPhone}`} />
            <ContactLink icon={FaLinkedin} label="LinkedIn" value={personal.name} href={`https://${personal.linkedin}`} />
            <ContactLink icon={FaGithub} label="GitHub" value={personal.github} href={`https://${personal.github}`} />
            <ContactLink icon={FaMapMarkerAlt} label="Location" value={personal.location} href="#contact" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass p-8 rounded-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl pointer-events-none" />

            <h3 className="text-white font-bold text-lg mb-6 relative z-10">Send a Message</h3>

            {status === 'sent' ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <FaPaperPlane className="text-accent text-2xl" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm mb-5">
                  Delivered to {personal.email}. I will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs text-accent underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="relative z-10 space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-gray-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-gray-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-gray-600"
                    placeholder="SDE Role / Internship / Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none placeholder:text-gray-600"
                    placeholder="Tell me about the role, team, or project..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-background font-bold py-4 rounded-xl hover:shadow-[0_0_24px_rgba(0,230,118,0.4)] transition-all transform hover:-translate-y-0.5 text-sm disabled:opacity-60"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
