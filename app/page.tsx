import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto py-20">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-gradient">
          Welcome to Ruthless-World
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A space for blogging, branding, and showcasing my best work. Explore my thoughts, projects, and creative journey.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/blog"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-105"
          >
            Read Blog
          </Link>
          <Link 
            href="/portfolio"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Blog Post */}
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">BLOG</div>
            <h3 className="text-2xl font-bold mb-3">Getting Started with Next.js</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn how to build fast, modern web applications with Next.js and React.
            </p>
            <Link href="/blog" className="text-black dark:text-white font-semibold hover:underline">
              Read More →
            </Link>
          </div>

          {/* Featured Project */}
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">PORTFOLIO</div>
            <h3 className="text-2xl font-bold mb-3">This Website</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A modern blogging and portfolio platform built with Next.js and Tailwind CSS.
            </p>
            <Link href="/portfolio" className="text-black dark:text-white font-semibold hover:underline">
              View Project →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-20 border-t border-gray-300 dark:border-gray-700">
        <h2 className="text-4xl font-bold mb-6">About Ruthless World</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          This is a personal platform dedicated to sharing knowledge, showcasing projects, and building a creative community. 
          Whether you're here for the blog, portfolio, or just curious about what's next, you're in the right place.
        </p>
        <Link 
          href="/about"
          className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-105"
        >
          Learn More About Me
        </Link>
      </section>
    </div>
  )
}
