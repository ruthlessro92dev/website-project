'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-white dark:bg-black z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          RW
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-400">
            Blog
          </Link>
          <Link href="/portfolio" className="hover:text-gray-600 dark:hover:text-gray-400">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400">
            Contact
          </Link>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
