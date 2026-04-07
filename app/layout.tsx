import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Ruthless-World - Blogging, Branding & Portfolio',
  description: 'Welcome to Ruthless-World. Explore my blog, portfolio projects, and personal branding.',
  keywords: 'blog, portfolio, branding, ruthless-world',
  openGraph: {
    title: 'Ruthless-World',
    description: 'Blogging, Branding & Portfolio Website',
    url: 'https://ruthlessworld.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
