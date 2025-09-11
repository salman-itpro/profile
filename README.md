# Salman Ahmed - Portfolio Website

A modern, responsive portfolio website for Salman Ahmed, IT Support Specialist. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Fast loading with Vite build tool
- 🎭 Smooth scroll animations with Framer Motion
- 🎯 SEO optimized with proper meta tags
- 📧 Contact form with validation
- 🌙 Professional color scheme

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Experience.jsx  # Work experience
│   ├── Education.jsx   # Education section
│   ├── Skills.jsx      # Technical skills
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark color palette
  }
}
```

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.jsx`
- About section in `About.jsx`
- Work experience in `Experience.jsx`
- Education in `Education.jsx`
- Skills in `Skills.jsx`
- Contact information in `Contact.jsx` and `Footer.jsx`

### Styling
The website uses Tailwind CSS for styling. You can:
- Modify the design system in `tailwind.config.js`
- Update global styles in `src/index.css`
- Customize component styles in individual component files

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Salman Ahmed
- Email: salman.itspecialist@gmail.com
- LinkedIn: [linkedin.com/in/salman-itspecialist](https://www.linkedin.com/in/salman-itspecialist)
- GitHub: [github.com/salman-itpro](https://github.com/salman-itpro)
