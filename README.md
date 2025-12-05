# 🚀 Hyperhire - Global Talent Recruitment Platform

A modern, responsive web application for recruiting international developers and remote talent. Built with React, TypeScript, and cutting-edge animation libraries.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Smooth Animations**: GSAP-powered carousel and Framer Motion transitions
- **Skeleton Loaders**: Professional loading states that mimic the actual page structure
- **Interactive Components**: Hover effects, dropdown menus, and dynamic content

### 🎪 **Interactive Carousel**

- **GSAP Coverflow Effect**: 3D carousel with smooth transitions
- **Responsive Configuration**: Adapts slide width, offset, and scale based on screen size
- **Touch-Friendly**: Optimized for both mouse and touch interactions

### 📱 **Component Architecture**

- **Atomic Design Pattern**: Organized into atoms, molecules, organisms, templates, and pages
- **Reusable Components**: Modular and maintainable component structure
- **TypeScript**: Full type safety across the application

### 🎭 **Loading Experience**

- **Header Skeleton**: Animated placeholder for navigation
- **Footer Skeleton**: Comprehensive footer loading state
- **Content Skeletons**: Hero, slider, and benefits section placeholders
- **Shimmer Effect**: Smooth gradient animation for visual feedback

### 🌐 **API Integration**

- **Serverless Functions**: Vercel serverless API routes
- **Data Fetching**: Async data loading with error handling
- **Type-Safe APIs**: TypeScript interfaces for API responses

## 🛠️ Tech Stack

### **Frontend**

- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vite.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### **Animation & Effects**

- **[GSAP](https://gsap.com/)** - Professional-grade animation library
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

### **Deployment**

- **[Vercel](https://vercel.com/)** - Serverless deployment platform
- **[@vercel/node](https://vercel.com/docs/functions)** - Serverless function runtime

## 📁 Project Structure

```
coin-siren/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks (Box, Button, Image, etc.)
│   │   ├── molecules/      # Simple component combinations
│   │   ├── organisms/      # Complex components (Header, Footer, Hero, etc.)
│   │   ├── templates/      # Page layouts
│   │   ├── pages/          # Full page components
│   │   └── skeletons/      # Loading state components
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── api/                    # Serverless API functions
│   ├── member.ts           # Member data endpoint
│   └── benefits.ts         # Benefits data endpoint
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/basofiibnu/coin-siren-technical-test.git
   cd coin-siren
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `yarn dev` - Start development server with Vite
- `yarn build` - Build for production (TypeScript compilation + Vite build)
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint to check code quality
- `yarn lint:fix` - Fix ESLint errors automatically
- `yarn format` - Format code with Prettier

## 🏗️ Building for Production

```bash
yarn build
```

The build output will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration and deploy

## 🎯 Key Components

### **GsapSlider**

Advanced carousel component with:

- Responsive configuration for different screen sizes
- Smooth GSAP animations
- Dynamic scaling and positioning
- Touch and mouse support

### **Skeleton Loaders**

Professional loading states including:

- `HeaderSkeleton` - Navigation placeholder
- `FooterSkeleton` - Footer content placeholder
- `HomepageSkeleton` - Full page loading state
- `MainTemplateSkeleton` - Template wrapper with header/footer

### **Atomic Components**

Reusable building blocks:

- `Box` - Flexible container component
- `Button` - Interactive button component
- `Image` - Optimized image component
- `Paragraph` - Typography component

## 🎨 Design Patterns

- **Atomic Design**: Components organized by complexity
- **Composition over Inheritance**: Flexible component composition
- **Single Responsibility**: Each component has one clear purpose
- **Type Safety**: Full TypeScript coverage

## 📝 Code Quality

- **ESLint**: Enforces code quality and consistency
- **Prettier**: Maintains consistent code formatting
- **TypeScript**: Provides type safety and better developer experience
- **React Best Practices**: Follows official React guidelines

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Basofii Ibnu**

- GitHub: [@basofiibnu](https://github.com/basofiibnu)

## 🙏 Acknowledgments

- Design inspiration from modern recruitment platforms
- GSAP for powerful animation capabilities
- Framer Motion for smooth React animations
- Tailwind CSS for rapid UI development

---

Built with ❤️ using React, TypeScript, and modern web technologies
