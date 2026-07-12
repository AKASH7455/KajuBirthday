Set-Content -Path "README.md" -Value @'
# 💖 Birthday Surprise Website

A beautiful, interactive birthday celebration website built with React and Vite. Features stunning animations, a memory gallery, and a heartfelt journey through special moments.

## ✨ Features

- **Interactive Story Journey** - Navigate through chapters of memories, love letters, and dreams
- **Memory Gallery** - Beautiful image gallery with hover effects and responsive design
- **Premium Animations** - Floating hearts, sparkles, and rose petals for a magical experience
- **Glass-morphism Design** - Modern UI with blur effects and elegant gradients
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Transitions** - Premium animations and hover effects throughout

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaju-birthday
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
kaju-birthday/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Gallery/         # Image gallery component
│   │   ├── Hero/            # Welcome section
│   │   ├── Timeline/        # Relationship timeline
│   │   ├── LoveLetter/      # Love letter section
│   │   ├── Reasons/         # Reasons I love you
│   │   ├── Wishes/          # Birthday wishes
│   │   ├── Dreams/          # Future dreams
│   │   ├── Promises/        # Personal promises
│   │   ├── Surprise/        # Final surprise
│   │   ├── Footer/          # Footer component
│   │   └── common/          # Shared components
│   │       ├── ContinueButton/
│   │       ├── FloatingHearts/
│   │       ├── Sparkles/
│   │       └── RosePetals/
│   ├── pages/               # Page components
│   │   ├── Home/            # Main story page
│   │   └── CountdownPage/   # Countdown page (if needed)
│   ├── assets/              # Images and static assets
│   ├── styles/              # Global styles
│   │   ├── variables.css    # CSS variables
│   │   ├── global.css       # Global styles
│   │   ├── animations.css   # Animation definitions
│   │   └── responsive.css   # Responsive breakpoints
│   ├── utils/               # Utility functions
│   └── App.jsx              # Main app component
├── public/                  # Public assets
├── index.html               # HTML entry point
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## 🎨 Customization

### Adding Images

Place your images in the `src/assets/` folder and update the imports in `src/components/Gallery/index.jsx`:

```jsx
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
// Add more images as needed
```

### Modifying Content

Each section (Hero, LoveLetter, etc.) has its own component in the `src/components/` folder. Edit the respective component to customize the content.

### Styling

- **Colors**: Modify CSS variables in `src/styles/variables.css`
- **Animations**: Update animations in `src/styles/animations.css`
- **Responsive**: Adjust breakpoints in `src/styles/responsive.css`

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **React Icons** - Icon library
- **React Router DOM** - Routing (if needed)
- **CSS3** - Styling with modern features

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (< 480px)
- Tablets (481px - 768px)
- Desktop (> 768px)

## 🎯 Key Components

### Gallery
- Displays 6 images in a responsive grid
- Hover effects with smooth transitions
- Images maintain original aspect ratio

### ContinueButton
- Reusable button component
- Gradient background with animations
- Icon integration with React Icons

### Animation Components
- **FloatingHearts** - Floating heart animations
- **Sparkles** - Sparkle effects
- **RosePetals** - Falling rose petals

## 🐛 Troubleshooting

### Images not loading
- Ensure image paths in imports are correct
- Check that images exist in `src/assets/` folder
- Verify file extensions match

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## 📝 License

This project is private and personal.

## 💝 Created With Love

Made with ❤️ for a special birthday celebration.
'@