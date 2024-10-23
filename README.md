# Personal Portfolio Website

A modern, interactive portfolio website built with React and Tailwind CSS, showcasing my work experience and projects. The website features smooth animations, responsive design, and an intuitive user interface.

## 🚀 Features

- **Modern UI**: Clean and modern interface with smooth transitions and animations
- **Interactive Elements**: Engaging hover effects and dynamic content loading
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: WCAG compliant with semantic HTML and proper aria labels
- **Dark Theme**: Elegant dark theme with consistent color scheme (upcoming)
- **Responsive Design**: Fully responsive layout that works on all device sizes (upcoming)

## 🛠️ Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Modern icon library
- **React Router**: For handling navigation
- **Framer Motion**: For advanced animations (optional)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/jasonlu2907/ngoc-portfolio.git
```

2. Navigate to the project directory:

```bash
cd ngoc-portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── styles/           # Global styles
├── assets/           # Images, fonts, etc.
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── App.jsx           # Root component
```

## 📱 Pages

- **Home**: Introduction and overview
- **Work**: Portfolio projects showcase
- **About**: Personal information and skills
- **Contact**: Contact form and information

## 🎨 Component Features

### Work Page

- Project cards with hover effects
- Smooth transitions
- Dynamic background colors
- Rotating arrow indicators
- Project filtering (upcoming)

### Navigation

- Animated menu button
- Smooth page transitions
- Mobile-responsive menu (upcoming)

## 🔧 Configuration

You can customize various aspects of the website by modifying:

- `tailwind.config.js`: Theme colors, fonts, and breakpoints
- `src/components/`: Project and component implementations
- `src/App.module.css`: Global styles and animations

## 🌐 Deployment

The site is deployed to:

- GitHub Pages

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/portfolio/issues).

## 👤 Author

- Ngoc Lu
- Website: [jasonlu2907.github.io/ngoc-portfolio](https://jasonlu2907.github.io/ngoc-portfolio)
- LinkedIn: [@jasonlu99](https://www.linkedin.com/in/jasonlu99/)

## 🙏 Acknowledgments

- Design inspiration: [Olaolu Olawuyi](https://olaolu.dev)
- Icons: [Lucide Icons](https://lucide.dev)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
