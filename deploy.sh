#!/bin/bash

# Deploy script for TechRich.github.io
# This script builds the site and prepares it for deployment

echo "🚀 Building TechRich Personal Website..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the site
echo "🔨 Building site with Astro..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! Site generated in dist/ directory"
    echo "📁 Build contents:"
    ls -la dist/
    
    echo ""
    echo "🌐 To test locally, run: npm run preview"
    echo "📤 To deploy, commit and push to main branch"
    echo "🔗 GitHub Actions will automatically deploy to GitHub Pages"
else
    echo "❌ Build failed!"
    exit 1
fi
