import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Ruthless World</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A modern blogging and portfolio platform.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Blog
              </Link>
              <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Portfolio
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Twitter
              </a>
              <a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Ruthless World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
