#!/bin/bash

# CodeToArchitecture Build Script
# This script builds the complete site with all generated content

echo "🚀 Building CodeToArchitecture site..."

# Generate progress tracker
echo "📊 Generating progress tracker..."
node scripts/generate-progress.js

# Build mdBook
echo "📚 Building mdBook..."
cd book
mdbook build

# Copy generated files to book output
echo "📁 Copying generated files..."
cp ../PROGRESS.md book/
cp -r ../certifications book/

echo "✅ Build complete! Site ready at book/book/"
echo "🌐 To serve locally: cd book && mdbook serve"
