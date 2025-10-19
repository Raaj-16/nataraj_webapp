import { motion } from 'motion/react';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Application',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.',
      technologies: ['Next.js', 'PostgreSQL', 'WebSocket', 'Tailwind'],
      category: 'Productivity',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization, scheduled posting, and engagement tracking.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      category: 'Analytics',
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search filters, virtual tours, and mortgage calculator.',
      technologies: ['Next.js', 'Firebase', 'Google Maps API', 'Stripe'],
      category: 'Web Application',
    },
    {
      title: 'Fitness Tracker App',
      description: 'Mobile-responsive fitness tracking application with workout plans, progress tracking, and nutrition logging.',
      technologies: ['React', 'Progressive Web App', 'IndexedDB', 'Charts'],
      category: 'Health & Fitness',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals with drag-and-drop builder and SEO optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      category: 'CMS',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="text-cream mr-3" size={28} />
            <h2 className="text-white">Featured Projects</h2>
          </div>
          <div className="w-20 h-1 bg-cream mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing diverse skills and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cream transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-cream/10 p-3 rounded-lg group-hover:bg-cream/20 transition-colors duration-300">
                    <FolderOpen className="text-cream" size={24} />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-700 rounded transition-colors duration-300">
                      <Github className="text-gray-400 hover:text-cream transition-colors duration-300" size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded transition-colors duration-300">
                      <ExternalLink className="text-gray-400 hover:text-cream transition-colors duration-300" size={20} />
                    </button>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 bg-black/50 text-cream border border-gray-700 rounded mb-3">
                  {project.category}
                </span>

                <h3 className="text-white mb-3 group-hover:text-cream transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border border-cream text-cream hover:bg-cream hover:text-black transition-all duration-300 rounded">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
