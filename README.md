# Sik App Website

A modern landing page for Sik App built with React, Vite, and Tailwind CSS.

## Features

- Multi-language support (English, Arabic, Kurdish)
- Smooth animations with Framer Motion
- Responsive design
- Deployed on GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Manual Setup (if needed)

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

### Repository Configuration

Make sure your repository name is `sikapp` and your GitHub username is `achmet-h` for the URL to work correctly. If your repository name is different, update the `base` path in `vite.config.js`.

## Project Structure

```
sikappWebsite/
├── src/
│   ├── components/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .github/
    └── workflows/
        └── deploy.yml
```

## Technologies

- React 18
- Vite
- Tailwind CSS
- Framer Motion

