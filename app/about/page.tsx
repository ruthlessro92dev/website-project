import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Ruthless World',
  description: 'Learn more about me and my journey.',
}

export default function About() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Welcome to my corner of the internet. I'm passionate about building things, sharing knowledge, and creating meaningful experiences.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">My Journey</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Over the years, I've worked on various projects ranging from web development to creative pursuits. 
          This website is a culmination of my interests and a platform to share my thoughts and work with the world.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">What I Do</h2>
        <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>✨ Build modern web applications</li>
          <li>🎨 Create beautiful user experiences</li>
          <li>📝 Write about technology and creative topics</li>
          <li>🤝 Collaborate with amazing teams</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Interested in working together or just want to chat? Feel free to reach out through the contact page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">💻 Technology</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Building scalable web applications with modern frameworks and tools.
          </p>
        </div>

        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎯 Strategy</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Planning and executing projects with precision and attention to detail.
          </p>
        </div>

        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🚀 Innovation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Exploring new ideas and pushing boundaries in creative and technical domains.
          </p>
        </div>
      </div>
    </div>
  )
}
