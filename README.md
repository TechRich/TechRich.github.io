# TechRich Personal Website

A modern, responsive personal website built with **Astro + Starlight + ProseMirror** for a professional online presence with built-in WYSIWYG editing capabilities.

## ✨ Features

- **🚀 Fast & Modern** - Built with Astro for optimal performance
- **🎨 Beautiful Design** - Starlight theme with custom styling
- **✏️ WYSIWYG Editor** - ProseMirror-powered content editor
- **📱 Responsive** - Works perfectly on all devices
- **🎯 SEO Optimized** - Built-in SEO and performance features
- **🔍 Search** - Local search functionality
- **🌙 Theme Support** - Light/dark mode with Starlight
- **📝 Markdown Support** - Easy content creation and management

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Theme**: [Starlight](https://starlight.astro.build) - Beautiful documentation theme
- **Editor**: [ProseMirror](https://prosemirror.net) - Professional WYSIWYG editor
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
│   └── ProseMirrorEditor.astro  # WYSIWYG editor
├── content/            # Content files (MDX)
│   └── docs/          # Documentation pages
├── assets/            # Static assets
└── layouts/           # Layout components

public/                # Public assets
astro.config.mjs       # Astro configuration
```

## ✏️ Using the WYSIWYG Editor

The ProseMirror editor is available at `/docs/editor/` and provides:

- **Rich Text Editing** - Bold, italic, lists, and more
- **Professional Toolbar** - Easy formatting controls
- **Real-time Preview** - See your content as you type
- **Markdown Export** - Save your work in standard format
- **Keyboard Shortcuts** - Power user features

### Editor Features

- **Toolbar**: Format text, create lists, undo/redo
- **Preview**: See how your content will look
- **Export**: Save as markdown file
- **Word Count**: Track your content length
- **Responsive**: Works on all device sizes

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

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)

3. **Build and deploy**
   ```bash
   npm run build
   npm run preview
   ```

### Custom Domain

The site is configured for `about.techrich.net`. Update `astro.config.mjs` and `CNAME` file for your domain.

## 📝 Content Management

### Creating Content

1. **Use the WYSIWYG Editor**
   - Navigate to `/docs/editor/`
   - Create your content visually
   - Export as markdown

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
- [ProseMirror](https://prosemirror.net) - Professional editor framework
- [GitHub Pages](https://pages.github.com) - Free hosting platform

## 📞 Contact

- **Website**: [about.techrich.net](https://about.techrich.net)
- **GitHub**: [@TechRich](https://github.com/TechRich)
- **Email**: hello@about.techrich.net

---

Built with ❤️ using modern web technologies for a fast, beautiful, and maintainable personal website.
