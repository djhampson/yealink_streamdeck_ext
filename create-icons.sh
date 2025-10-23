#!/bin/bash

# Create simple placeholder icons for Stream Deck actions
# These are temporary placeholders - replace with proper icons later

cd imgs/actions

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Creating placeholder icons with ImageMagick..."

    # Move Left
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "←" move-left.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "←" move-left@2x.png

    # Move Right
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "→" move-right.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "→" move-right@2x.png

    # Move Up
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "↑" move-up.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "↑" move-up@2x.png

    # Move Down
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "↓" move-down.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "↓" move-down@2x.png

    # Zoom In
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "+" zoom-in.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "+" zoom-in@2x.png

    # Zoom Out
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "−" zoom-out.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 80 -fill white -annotate +0+0 "−" zoom-out@2x.png

    # Set Preset
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 30 -fill white -annotate +0+0 "SET" set-preset.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 60 -fill white -annotate +0+0 "SET" set-preset@2x.png

    # Recall Preset
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 25 -fill white -annotate +0+0 "RECALL" recall-preset.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 50 -fill white -annotate +0+0 "RECALL" recall-preset@2x.png

    echo "✓ Placeholder icons created successfully!"
else
    echo "⚠ ImageMagick not found. Creating simple colored placeholders instead..."

    # Create simple solid color placeholders as fallback
    for icon in move-left move-right move-up move-down zoom-in zoom-out set-preset recall-preset; do
        # Create 72x72 placeholder
        echo -n "" > ${icon}.png
        # Create 144x144 placeholder
        echo -n "" > ${icon}@2x.png
    done

    echo "✓ Simple placeholder files created."
    echo "  Please install ImageMagick or create proper icons manually."
fi

# Create plugin icon
cd ../
if command -v convert &> /dev/null; then
    convert -size 72x72 xc:'#2d2d2d' -gravity center -pointsize 20 -fill white -annotate +0+0 "YL\nCAM" plugin-icon.png
    convert -size 144x144 xc:'#2d2d2d' -gravity center -pointsize 40 -fill white -annotate +0+0 "YL\nCAM" plugin-icon@2x.png
    echo "✓ Plugin icon created!"
fi

cd ../..
echo "Done!"
