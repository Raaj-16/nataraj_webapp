import { motion } from 'motion/react';
import { Code2, Palette, Database, Zap, Globe, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping', 'User Research'],
    },
    {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['Progressive Web Apps', 'SEO', 'Web Performance', 'Accessibility', 'GraphQL'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Responsive Design', 'Mobile-First', 'Cross-Platform', 'App Optimization'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Code2 className="text-cream mr-3" size={28} />
            <h2 className="text-white">Skills & Expertise</h2>
          </div>
          <div className="w-20 h-1 bg-cream mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cream transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cream/10 p-3 rounded-lg group-hover:bg-cream/20 transition-colors duration-300">
                    <Icon className="text-cream" size={24} />
                  </div>
                  <h3 className="text-white ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-black/50 text-gray-300 rounded border border-gray-700 hover:border-cream hover:text-cream transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <h3 className="text-white text-center mb-8">Proficiency Levels</h3>
          {[
            { name: 'React & Frontend Development', level: 95 },
            { name: 'JavaScript/TypeScript', level: 90 },
            { name: 'UI/UX Design', level: 85 },
            { name: 'Backend Development', level: 80 },
            { name: 'Database Management', level: 75 },
          ].map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-cream">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cream to-white rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
