import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download } from 'lucide-react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Natarajan';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MDc2NjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional workspace background - replace with your image"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cream mb-4 tracking-widest">WELCOME TO MY PORTFOLIO</p>
        </motion.div>

        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white mb-2"
          >
            <span className="inline-block">Hi, I'm </span>
            <span className="inline-block text-cream">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Full Stack Developer | Creative Problem Solver | Technology Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-cream text-black hover:bg-white transition-all duration-300 rounded"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-cream text-cream hover:bg-cream hover:text-black transition-all duration-300 rounded"
          >
            Get in Touch
          </button>
          <a
            href="/resume.pdf"
            download="Natarajan_Resume.pdf"
            className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-cream hover:text-cream transition-all duration-300 rounded inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
