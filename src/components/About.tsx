import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'Passionate developer with a keen eye for detail and a love for creating elegant solutions.',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '3+ years of experience in building scalable web applications and digital experiences.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Computer Science background with continuous learning in modern technologies.',
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Creating impactful digital solutions that solve real-world problems.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <User className="text-cream mr-3" size={28} />
            <h2 className="text-white">About Me</h2>
          </div>
          <div className="w-20 h-1 bg-cream mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-center mb-12 leading-relaxed"
          >
            I'm a dedicated developer who thrives on turning complex problems into simple, beautiful, 
            and intuitive designs. With expertise in modern web technologies, I specialize in creating 
            responsive and performant applications that provide exceptional user experiences. My approach 
            combines technical excellence with creative thinking to deliver solutions that exceed expectations.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg hover:border-cream transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-cream/10 p-3 rounded-lg">
                      <Icon className="text-cream" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
