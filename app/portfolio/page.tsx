import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Ruthless World',
  description: 'Check out my latest projects and creative work.',
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Ruthless World Website',
    description: 'A modern blogging and portfolio platform built with Next.js and Tailwind CSS. Features dark mode, markdown blog support, and responsive design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    link: 'https://ruthlessworld.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Description of your second project. Highlight the key features and technologies used.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Description of your third project. Share what you built and what made it special.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com',
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        A selection of projects and work I'm proud of.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div 
            key={project.id}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {project.description}
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white font-semibold hover:underline"
                >
                  Visit Project →
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white font-semibold hover:underline"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 pt-12 border-t border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Want to work together?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          I'm always open to interesting projects and collaborations. Let's create something amazing.
        </p>
        <Link 
          href="/contact"
          className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-105"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
