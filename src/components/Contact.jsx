import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:Aryakompalwar@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { label: 'Email', href: 'mailto:Aryakompalwar@gmail.com', icon: <Mail className="w-5 h-5" />, value: 'Aryakompalwar@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arya-kompalwar/', icon: <Linkedin className="w-5 h-5" />, value: 'arya-kompalwar' },
    { label: 'GitHub', href: 'https://github.com/ARYAKOMPALWAR', icon: <Github className="w-5 h-5" />, value: 'ARYAKOMPALWAR' },
  ];

  return (
    <section id="contact" className="py-32 relative text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Get In Touch</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Whether it's a collaboration, job opportunity, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Let's build something great together.</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              I am currently open to internship and full-time opportunities. Whether you have a question or want to collaborate, feel free to reach out!
            </p>
            <div className="space-y-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300 border border-white/10 flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{s.label}</p>
                    <p className="text-white group-hover:text-blue-300 transition-colors font-medium">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-6">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium" htmlFor={field}>
                    {field}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === 'name' ? 'Your Name' : 'your@email.com'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg shadow-blue-500/20"
              >
                {sent ? (
                  <><CheckCircle className="w-5 h-5" /> Opened your mail app!</>
                ) : (
                  <><Send className="w-5 h-5" /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
