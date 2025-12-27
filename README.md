# 💜 Mi Blog - Next.js Markdown Blog Template

A modern, beautiful blog template built with Next.js 16 and Markdown. Features a stunning purple and black design with smooth animations and a clean, professional interface.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Beautiful purple and black gradient theme
- 📝 **Markdown Support** - Write posts in Markdown with frontmatter
- ⚡ **Static Generation** - Lightning-fast performance with Next.js SSG
- 🎭 **Smooth Animations** - Hover effects and transitions
- 📱 **Responsive** - Works perfectly on all devices
- 🧩 **Component-Based** - Reusable SVG icon components
- 🎯 **SEO Ready** - Optimized for search engines
- 🔧 **Easy to Customize** - Clean, well-organized code

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone or download this repository:

```bash
git clone <your-repo-url>
cd my-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Creating Posts

Posts are stored as Markdown files in the `posts/` directory.

### Post Structure

Create a new `.md` file in the `posts/` folder:

```markdown
---
title: "Your Post Title"
date: "2025-12-27"
---

# Your Content Here

Write your post content using **Markdown** syntax.

- Lists
- Code blocks
- Images
- And more!
```

### Frontmatter Fields

- `title` (required) - The post title
- `date` (required) - Publication date in YYYY-MM-DD format

The filename (without `.md`) becomes the post URL slug.

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css`:

```css
:root {
  --background: #1a1a2e;
  --foreground: #e0e0e0;
  --purple-primary: #9333ea;
  --purple-light: #a78bfa;
  --purple-dark: #7c3aed;
}
```

### Icons

SVG icons are located in `app/components/icons/`. Each icon is a reusable component:

- `HeartIcon.js`
- `HomeIcon.js`
- `FileIcon.js`
- `CalendarIcon.js`
- `ArrowLeftIcon.js`

### Layout

- `app/layout.js` - Main layout with header and footer
- `app/page.js` - Homepage with post list
- `app/posts/[id]/page.js` - Individual post page

## 📦 Project Structure

```
my-blog/
├── app/
│   ├── components/
│   │   └── icons/          # SVG icon components
│   ├── posts/
│   │   └── [id]/
│   │       └── page.js     # Post detail page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── lib/
│   └── posts.js            # Post data utilities
├── posts/
│   └── *.md                # Your blog posts
└── public/                 # Static assets
```

## 🛠️ Built With

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parser
- [remark](https://github.com/remarkjs/remark) - Markdown processor
- [remark-html](https://github.com/remarkjs/remark-html) - Markdown to HTML

## 📄 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💜 Support

If you like this project, please give it a ⭐️!

---

Made with 💜 and Next.js
