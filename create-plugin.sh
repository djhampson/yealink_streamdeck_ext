#!/bin/bash

# Build and package the Stream Deck plugin

set -e

echo "Building Yealink UC86 Camera Control Stream Deck Plugin..."

# Clean previous build
echo "1. Cleaning previous build..."
npm run clean 2>/dev/null || rm -rf dist

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "2. Installing dependencies..."
    npm install
else
    echo "2. Dependencies already installed"
fi

# Build TypeScript
echo "3. Building TypeScript..."
npm run build

# Copy static files to dist
echo "4. Copying static files..."
cp manifest.json dist/
cp -r imgs dist/ 2>/dev/null || echo "   Warning: imgs directory not found"

# Copy Property Inspector HTML
echo "5. Copying Property Inspector..."
mkdir -p dist/pi
cp src/pi/index.html dist/pi/

# Copy node_modules dependencies needed at runtime
echo "6. Copying runtime dependencies..."
mkdir -p dist/plugin/node_modules
cp -r node_modules/axios dist/plugin/node_modules/
cp -r node_modules/ws dist/plugin/node_modules/
cp -r node_modules/follow-redirects dist/plugin/node_modules/ 2>/dev/null || true
cp -r node_modules/form-data dist/plugin/node_modules/ 2>/dev/null || true
cp -r node_modules/proxy-from-env dist/plugin/node_modules/ 2>/dev/null || true

# Create plugin package
PLUGIN_NAME="com.yealink.uc86-camera-control.streamDeckPlugin"
echo "7. Creating plugin package..."

# Remove old package if exists
rm -f "$PLUGIN_NAME"

# Stream Deck plugins are just renamed zip files
cd dist
zip -r ../"$PLUGIN_NAME" . -x "*.DS_Store" -x "__MACOSX/*"
cd ..

echo ""
echo "✓ Plugin built successfully!"
echo ""
echo "Package: $PLUGIN_NAME"
echo ""
echo "To install:"
echo "  1. Double-click $PLUGIN_NAME"
echo "  2. Stream Deck software will install it automatically"
echo ""
echo "For development:"
echo "  You can also copy the 'dist' folder directly to:"
echo "  - macOS: ~/Library/Application Support/com.elgato.StreamDeck/Plugins/"
echo "  - Windows: %appdata%\\Elgato\\StreamDeck\\Plugins\\"
echo ""
