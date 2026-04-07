import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Ruthless World',
  description: 'Get in touch with me. I\'d love to hear from you.',
}

export default function Contact() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Have a project or question? Feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a 
              href="mailto:hello@ruthlessworld.com"
              className="text-black dark:text-white hover:underline text-lg"
            >
              hello@ruthlessworld.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black dark:text-white hover:underline"
              >
                Twitter →
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black dark:text-white hover:underline"
              >
                GitHub →
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black dark:text-white hover:underline"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I typically respond to messages within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
