import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  status: string;
  description: string;
  stack: string;
  image?: string;
  demoLink?: string;
  githubLink?: string;
  tags: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const tags = Array.from(new Set(myProjects.flatMap(p => p.tags)));

  const filteredProjects = myProjects.filter(project => 
    filter === 'all' || project.tags.includes(filter)
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Ongoing' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : project.status === 'Paused'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const myProjects: Project[] = [
  {
    title: "CRM System - Radius Mobile",
    status: "Ongoing",
    description: "We are developing CRM for the company's internal system. It is designed to be convenient and easy for customers and contains complex processes inside. It becomes easier for employees to communicate with clients, and the scoring system for risk managers is fully automated. The system is constantly evolving and improving based on user metrics.",
    stack: "Next.js • Typescript • Tailwind • SSR • Websocket",
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'CRM'],
    demoLink: "https://radius.uz/crm",
    githubLink: "https://github.com/yourusername/crm-system"
  },
  {
    title: "Admin Dashboard for radius.uz",
    status: "Paused",
    description: "I created the frontend part of the admin site for the radius.uz site, with which you can manage complete information, content, and products on the e-commerce website.",
    stack: "Next.js • Typescript • Bootstrap",
    tags: ['Next.js', 'TypeScript', 'Bootstrap', 'Dashboard'],
    demoLink: "https://admin.radius.uz",
    githubLink: "https://github.com/yourusername/admin-dashboard"
  },
  {
    title: "E-commerce Website - radius.uz",
    status: "completed",
    description: "Through this site, customers can order and buy the desired product without going to the store. I have been improving its SEO for a long time and it is currently rated as good SEO by clients.",
    stack: "Next.js • Javascript • SCSS • SSR",
    tags: ['Next.js', 'JavaScript', 'SCSS', 'E-commerce'],
    demoLink: "https://radius.uz",
    githubLink: "https://github.com/yourusername/radius-ecommerce"
  }
];

export default Projects;
