# TechRich Personal Website

A modern, responsive personal website built with **Astro + Starlight + Decap CMS** for a professional online presence with a local WYSIWYG editing workflow.

## ✨ Features

- **🚀 Fast & Modern** - Built with Astro for optimal performance
- **🎨 Beautiful Design** - Starlight theme with custom styling
- **✏️ WYSIWYG Editor** - Local Decap CMS editor (dev-only)
- **📱 Responsive** - Works perfectly on all devices
- **🎯 SEO Optimized** - Built-in SEO and performance features
- **🔍 Search** - Local search functionality
- **🌙 Theme Support** - Light/dark mode with Starlight
- **📝 Markdown Support** - Easy content creation and management

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Theme**: [Starlight](https://starlight.astro.build) - Beautiful documentation theme
- **Editor**: [Decap CMS](https://decapcms.org) - Local editor UI (no auth needed)
- **Styling**: CSS with CSS custom properties for theming
- **Deployment**: GitHub Pages ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TechRich/TechRich.github.io.git
   cd TechRich.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/          # Astro components
├── content/             # Content files (MDX)
│   └── docs/            # Documentation pages (Guides, Reference)
├── assets/              # Static assets
└── pages/admin/         # Dev-only Decap CMS entrypoint

public/                  # Public assets (served as-is)
└── admin/config.yml     # Decap CMS configuration
astro.config.mjs         # Astro configuration
```

## ✏️ Using the WYSIWYG Editor

Use the local Decap CMS editor during development (no auth required):

- Start the local backend proxy: `npx decap-cms-proxy-server` (or `npx netlify-cms-proxy-server`)
- Run the site: `npm run dev`
- Open: `http://localhost:4321/admin/`
- Click “Use Local Backend” on the login screen

This editor creates Markdown files under `src/content/docs/**` and uploads media to `public/uploads/`. Commit and push to publish via GitHub Pages.

Editor capabilities:

- **Rich Text Editing** - Bold, italic, lists, and more
- **Professional Toolbar** - Easy formatting controls
- **Real-time Preview** - See your content as you type
- **Create/Edit Markdown** - Writes `.mdx` into `src/content/docs/**`
- **Keyboard Shortcuts** - Power user features

### Editor Features

- Visual markdown editing with previews
- Media uploads to `public/uploads/`
- Files saved as `.mdx` with frontmatter
- Draft/Review/Publish workflow (editorial workflow)

### Docker-based local setup (optional)

Run the dev server and CMS proxy via Docker:

1. Install Docker Desktop
2. From the repo root:

   ```bash
   docker compose -f docker-compose.local.yml up --build
   ```

3. Open the site at `http://localhost:4321/admin/` and click “Use Local Backend”

The file `docker-compose.local.yml` is ignored by Git to keep local tooling out of commits.

## 🎨 Customization

### Colors & Themes

The site uses CSS custom properties that automatically adapt to Starlight's theme system:

```css
:root {
  --sl-color-accent: #6366f1;
  --sl-color-accent-high: #4f46e5;
  --sl-color-accent-low: #e0e7ff;
}
```

### Adding New Pages

1. Create new `.mdx` files in `src/content/docs/`
2. Add navigation in `astro.config.mjs`
3. Use frontmatter for metadata:

```mdx
---
title: 'Page Title'
description: 'Page description'
---

# Your content here
```

## 🚀 Deployment

### GitHub Pages

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Enable GitHub Pages (GitHub Actions)**
   - Go to repository Settings > Pages
   - Build and deployment: GitHub Actions (workflow: Deploy to GitHub Pages)

3. **Build and preview locally**
   ```bash
   npm run build
   npm run preview
   ```

### Custom Domain

The site is configured for `about.techrich.net`. Update `astro.config.mjs` and `CNAME` file for your domain.

## 📝 Content Management

### Creating Content

1. **Use the WYSIWYG Editor**
   - Use the Decap CMS at `/admin/` during local development
   - Create your content visually
   - Commit and push when ready to publish

2. **Edit MDX Files Directly**
   - Modify files in `src/content/docs/`
   - Use markdown syntax
   - Add frontmatter for metadata

### Blog Posts

Add new blog posts by creating MDX files in the guides directory:

```
src/content/docs/guides/
├── my-new-post.mdx
└── another-post.mdx
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro ...` - Run Astro CLI commands

### Adding Dependencies

```bash
npm install package-name
```

### Styling

- **Global Styles**: CSS custom properties in components
- **Component Styles**: Scoped styles in each component
- **Responsive**: Mobile-first CSS with media queries

## 🌟 Features in Detail

### Performance
- **Zero JavaScript by default** - Pages load instantly
- **Optimized builds** - Minimal bundle sizes
- **Image optimization** - Automatic image processing
- **Lazy loading** - Defer non-critical resources

### SEO
- **Meta tags** - Automatic meta tag generation
- **Sitemap** - Built-in sitemap generation
- **Structured data** - JSON-LD support
- **Open Graph** - Social media optimization

### Accessibility
- **WCAG compliance** - Built-in accessibility features
- **Keyboard navigation** - Full keyboard support
- **Screen reader support** - Semantic HTML structure
- **High contrast** - Theme-aware contrast ratios

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Starlight](https://starlight.astro.build) - Beautiful documentation theme
- [Decap CMS](https://decapcms.org) - Simple, Git-based editing UI
- [GitHub Pages](https://pages.github.com) - Free hosting platform

## 📞 Contact

- **Website**: [about.techrich.net](https://about.techrich.net)
- **GitHub**: [@TechRich](https://github.com/TechRich)
- **Email**: hello@about.techrich.net

---

Built with ❤️ using modern web technologies for a fast, beautiful, and maintainable personal website.
