import { Metadata } from 'next'
import Link from 'next/link'
import { readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

export const metadata: Metadata = {
  title: 'Blog | Ruthless World',
  description: 'Read my latest blog posts about technology, design, and creative topics.',
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = join(process.cwd(), 'content/blog')
    const files = await readdir(postsDirectory)

    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '')
        return { slug }
      })

    return posts.map(post => ({
      ...post,
      title: `Blog Post: ${post.slug}`,
      description: 'Read more about this topic.',
      date: new Date().toISOString().split('T')[0],
      author: 'You',
    }))
  } catch (error) {
    return []
  }
}

export default async function Blog() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Thoughts, stories, and ideas about technology and creativity.
      </p>

      {blogPosts.length > 0 ? (
        <div className="space-y-6">
          {blogPosts.map(post => (
            <article 
              key={post.slug}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-black dark:text-white font-semibold hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            No blog posts yet. Check back soon!
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Start by creating markdown files in the content/blog directory.
          </p>
        </div>
      )}
    </div>
  )
}
