# Khela Hobe Game Studios Landing Page

A modern React + TypeScript landing page for Khela Hobe Game Studios, built with Vite and deployed on GitHub Pages.

## Features

- **Hero Section**: Eye-catching banner with studio branding and call-to-action
- **Games Section**: Showcase of studio games with game cards
- **Teams Section**: Meet the talented team behind the games
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Bangladesh Flag Theme**: Colors inspired by the Bangladesh flag

## Game Showcase

Currently featuring:
- **Chor Police Daktar Babu**: An exciting adventure game

## Tech Stack

- React 19 with TypeScript
- Vite for fast development and building
- CSS3 with modern features
- Responsive design principles
- GitHub Pages for deployment

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on every push to main

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section component
│   ├── Games.tsx       # Games showcase component
│   └── Teams.tsx       # Team members component
├── types/              # TypeScript type definitions
├── assets/             # Static assets (images, etc.)
└── styles/             # CSS files for styling
.github/
└── workflows/          # GitHub Actions workflows
    └── deploy.yml      # Deployment workflow
```

## Customization

- Replace the game card image in `src/assets/cpdb.png`
- Update team member information in `src/components/Teams.tsx`
- Modify styling in the respective CSS files
- Add more games to the games array in `src/components/Games.tsx`

## Live Site

The site is automatically deployed to: `https://[your-username].github.io/KhelaHobeGameStudios/`