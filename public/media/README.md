# Media Assets Directory

This directory contains all media assets for the WEBPIX project.

## Directory Structure

```
media/
├── images/     - General images, photos, and backgrounds
├── videos/     - Video files and animations
├── icons/      - Icons, logos, and small graphics
└── graphics/   - Graphics, illustrations, and design elements
```

## Usage

### In React Components

Since files in the `public` folder are served at the root, you can reference them directly:

```jsx
// For images
<img src="/media/images/your-image.jpg" alt="Description" />

// For videos
<video src="/media/videos/your-video.mp4" controls />

// For icons
<img src="/media/icons/logo.svg" alt="Logo" />
```

### In CSS

```css
.background {
  background-image: url('/media/images/background.jpg');
}
```

## File Naming Conventions

- Use lowercase letters
- Use hyphens for spaces (e.g., `hero-background.jpg`)
- Be descriptive (e.g., `home-header-3d-scene.png`)
- Include dimensions for multiple sizes (e.g., `logo-small-32x32.png`)

## Recommended File Types

- **Images**: `.jpg`, `.png`, `.svg`, `.webp`
- **Videos**: `.mp4`, `.webm`
- **Icons**: `.svg` (preferred), `.png`
- **Graphics**: `.svg` (preferred), `.png`
