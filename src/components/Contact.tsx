import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'natarajan.jai.1607@gmail.com',
      link: 'mailto:natarajan.jai.1607@gmail.com',
      color: '#F3EFE0',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#F3EFE0',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      color: '#F3EFE0',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      username: '@natarajan',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com',
      username: '@natarajan',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com',
      username: '@natarajan',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F3EFE0 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Send className="text-cream mr-3" size={28} />
            <h2 className="text-white">Get In Touch</h2>
          </div>
          <div className="w-20 h-1 bg-cream mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onHoverStart={() => setHoveredIcon(method.label)}
                  onHoverEnd={() => setHoveredIcon(null)}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cream transition-all duration-300 group text-center block"
                >
                  <motion.div
                    animate={{
                      rotate: hoveredIcon === method.label ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center bg-cream/10 p-4 rounded-full mb-4 group-hover:bg-cream/20 transition-colors duration-300"
                  >
                    <Icon className="text-cream" size={28} />
                  </motion.div>
                  <h3 className="text-white mb-2">{method.label}</h3>
                  <p className="text-gray-400">{method.value}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-12"
          >
            <h3 className="text-white text-center mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 p-4 rounded-full hover:bg-cream group transition-all duration-300"
                    title={social.username}
                  >
                    <Icon className="text-cream group-hover:text-black transition-colors duration-300" size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8"
          >
            <h3 className="text-white text-center mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-cream focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-cream focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-cream focus:outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-cream focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-cream text-black py-3 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16 text-gray-500"
      >
        <p>© 2025 Natarajan. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
