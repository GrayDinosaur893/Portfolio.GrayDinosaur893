# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects and skills.

🌐 **[View Live Portfolio](https://portfolio-gray-dinosaur893.vercel.app/)** - No installation required!

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Dynamic star background and smooth scrolling
- **Project Showcase**: Dedicated section to display projects
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with animations and transitions
- **ESLint** - Code linting for consistent code quality

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/GrayDinosaur893/Portfolio.GrayDinosaur893.git
   cd Portfolio.GrayDinosaur893
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

💡 **Note**: You can also view the portfolio online at https://portfolio-gray-dinosaur893.vercel.app/ without needing to clone or install anything!

## 🏗️ Project Structure

```
Portfolio.GrayDinosaur893/
├── public/                 # Static assets
│   ├── favicon.svg        # Website favicon
│   └── icons.svg          # Icon library
├── src/                   # Source code
│   ├── assets/            # Images and media
│   │   ├── hero.png       # Hero section image
│   │   ├── react.svg      # React logo
│   │   └── vite.svg       # Vite logo
│   ├── components/        # React components
│   │   ├── BodyComp.jsx   # Main body component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── Stars.jsx      # Animated star background
│   ├── data/              # Data files
│   │   └── projects.json  # Project information
│   ├── images/            # Additional images
│   │   └── hero.jpg       # Hero background image
│   ├── App.css           # Main application styles
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Components

### Hero
The main landing section featuring a hero image and introduction.

### Navbar
Responsive navigation bar with smooth scrolling to different sections.

### Projects
Showcases projects with information loaded from `projects.json`.

### Stars
Animated star background component for visual appeal.

### BodyComp
Main body wrapper component.

## 🚀 Building for Production

To build the project for production:

```bash
npm run build
```

This will create an optimized build in the `dist/` directory.

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Configure GitHub Pages to use the `dist/` folder

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions, suggestions, or just to say hello:

- **GitHub**: [@GrayDinosaur893](https://github.com/GrayDinosaur893)
- **Email**: [crdino893@gmail.com](mailto:crdino893@gmail.com)

## 🙏 Acknowledgments

- Thanks to the React and Vite teams for their excellent tools
- Inspiration from various portfolio designs across the web

---

**Made with ❤️ using React and Vite**