# Ruthless World - Personal Blogging & Portfolio Website

A modern, fast, and beautiful website built with Next.js, React, TypeScript, and Tailwind CSS. Perfect for showcasing your portfolio, writing blog posts, and personal branding.

## Features

✨ **Modern Design** - Clean, minimalist interface with dark/light mode support
📝 **Blog System** - Markdown-based blog posts with automatic parsing
🎨 **Portfolio** - Showcase your projects and work
🌙 **Dark Mode** - Built-in dark/light theme toggle
📱 **Responsive** - Fully responsive design for all devices
⚡ **Performance** - Fast page loads with Next.js optimization
🔍 **SEO Ready** - Optimized metadata and search engine friendly
📧 **Contact Form** - Easy contact form for visitors

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes (dark mode support)
- **Content**: Markdown support with gray-matter
- **Hosting Ready**: Deploy to Vercel, Netlify, or any Node.js server

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Run the development server**
```bash
npm run dev
```

3. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see your website!

## Project Structure

```
website-project/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with Navbar and Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── blog/
│   │   └── page.tsx             # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog post
│   ├── portfolio/
│   │   └── page.tsx             # Portfolio page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer component
│   └── ThemeProvider.tsx        # Dark mode theme provider
├── content/
│   └── blog/                    # Markdown blog posts directory
│       ├── getting-started-with-nextjs.md
│       └── future-of-web-development.md
├── public/                      # Static assets (images, icons, etc.)
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## Adding Blog Posts

### Creating a New Blog Post

1. Create a new markdown file in `content/blog/`:
```bash
content/blog/my-new-post.md
```

2. Add frontmatter at the top:
```markdown
---
title: Your Blog Title
description: Brief description of your post
date: 2024-04-07
author: Your Name
---

# Your Blog Title

Your blog content here...
```

3. The blog post will automatically appear on the blog page!

### Blog Post Frontmatter

- `title` - The title of your blog post
- `description` - A brief description for previews
- `date` - Publication date (YYYY-MM-DD format)
- `author` - Author name

## Customizing the Portfolio

Edit the projects array in `app/portfolio/page.tsx` to add your own projects:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['React', 'Next.js'],
    link: 'https://example.com',
    github: 'https://github.com/your-username/project',
  },
  // Add more projects...
]
```

## Customizing Branding

### Update Site Metadata

Edit `app/layout.tsx` to update your site's metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description here',
}
```

### Update Domain

Replace `ruthlessworld.com` with your domain throughout the project:
- Update next.config.js image domains
- Update metadata in app/layout.tsx
- Update social links in components/Footer.tsx

### Change Theme Colors

Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

## Building for Production

### Build the project
```bash
npm run build
```

### Start production server
```bash
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure domain settings
4. Deploy!

[Vercel Deployment Docs](https://vercel.com/docs)

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Other Hosting
- Ensure Node.js 18+ is available
- Run `npm install && npm run build && npm start`

## Environment Variables

Create a `.env.local` file for environment variables:
```
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

## SEO Optimization

The website includes SEO best practices:
- Meta tags and OpenGraph support
- Sitemap-friendly structure
- Semantic HTML
- Mobile-responsive design
- Fast performance metrics

## Performance Tips

- Images are optimized automatically
- Static generation for better performance
- Code splitting for faster page loads
- Lazy loading for images and components

## Future Enhancements

- [ ] Contact form backend integration
- [ ] Blog search functionality
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Comment system for blog posts
- [ ] Image gallery for portfolio
- [ ] CMS integration (optional)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, feel free to reach out through the contact page at [https://ruthlessworld.com/contact](https://ruthlessworld.com/contact).

---

Built with ❤️ for ruthlessworld.com