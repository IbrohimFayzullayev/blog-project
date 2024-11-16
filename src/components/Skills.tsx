import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = skills.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'frontend', 'backend', 'tools', 'other'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full capitalize transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8"
                />
              )}
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {skill.level}% proficiency
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: '/icons/react.svg'
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    icon: '/icons/typescript.svg'
  },
  {
    name: 'Next.js',
    level: 88,
    category: 'frontend',
    icon: '/icons/nextjs.svg'
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'backend',
    icon: '/icons/nodejs.svg'
  },
  {
    name: 'Express.js',
    level: 75,
    category: 'backend',
    icon: '/icons/express.svg'
  },
  {
    name: 'MongoDB',
    level: 70,
    category: 'backend',
    icon: '/icons/mongodb.svg'
  },
  {
    name: 'Git',
    level: 85,
    category: 'tools',
    icon: '/icons/git.svg'
  },
  {
    name: 'Docker',
    level: 65,
    category: 'tools',
    icon: '/icons/docker.svg'
  },
  {
    name: 'AWS',
    level: 60,
    category: 'tools',
    icon: '/icons/aws.svg'
  }
];

export default Skills;
