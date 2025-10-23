# Action Icons

This directory should contain icons for each Stream Deck action.

## Required Icons

Each action needs icons in two sizes:
- **@1x**: 72x72 pixels
- **@2x**: 144x144 pixels

### Icon List

Create the following icon files:

1. **move-left.png** / **move-left@2x.png** - Left arrow
2. **move-right.png** / **move-right@2x.png** - Right arrow
3. **move-up.png** / **move-up@2x.png** - Up arrow
4. **move-down.png** / **move-down@2x.png** - Down arrow
5. **zoom-in.png** / **zoom-in@2x.png** - Plus or magnifying glass with +
6. **zoom-out.png** / **zoom-out@2x.png** - Minus or magnifying glass with -
7. **set-preset.png** / **set-preset@2x.png** - Camera with save/download icon
8. **recall-preset.png** / **recall-preset@2x.png** - Camera with recall/upload icon

### Design Guidelines

- Use clear, simple icons that are recognizable at small sizes
- White or light gray icons on dark background (#2d2d2d recommended)
- Leave adequate padding (10-15px) around the icon
- Use consistent stroke width across all icons
- Test visibility on both light and dark Stream Deck themes

### Creating Icons

You can use:
- **Vector tools**: Adobe Illustrator, Figma, Sketch, Inkscape
- **Icon resources**: Noun Project, Font Awesome, Material Icons
- **Template**: Use `icon-template.svg` as a starting point

### Quick Setup

For quick testing, you can use simple text-based icons or Unicode characters temporarily until proper icons are designed.

Example using ImageMagick to create simple text icons:

```bash
convert -size 72x72 xc:#2d2d2d -gravity center -pointsize 40 -fill white -annotate +0+0 "←" move-left.png
convert -size 144x144 xc:#2d2d2d -gravity center -pointsize 80 -fill white -annotate +0+0 "←" move-left@2x.png
```
