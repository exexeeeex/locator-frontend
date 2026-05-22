<h1 align="center">📍 Locator</h1>

<p align="center">
A modern Telegram Mini App for discovering connections and location-based networking
</p>

<p align="center">
React • TypeScript • Vite • Redux Toolkit • FSD • Telegram Web App
</p>

---

## 🚀 Overview

**Locator** is a Telegram Mini App that seamlessly integrates with Telegram Bot API.  
Built with a focus on user experience and performance, it enables real-time location-based discovery and interactions directly within Telegram.

The application provides:

- Seamless Telegram integration via Telegram Web App API
- Responsive and performant UI with React 19
- Type-safe development with TypeScript
- Scalable architecture using Feature-Sliced Design (FSD)
- Modern form handling with React Hook Form
- Beautiful UI components powered by Radix UI and Tailwind CSS

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,vite" />
</p>

**Frontend:**

- React 19
- TypeScript
- Vite (ultra-fast build tool)
- Redux Toolkit (state management)
- React Router (routing)
- React Hook Form (form handling)
- Tailwind CSS (styling)
- Radix UI (accessible components)
- Feature-Sliced Design (FSD)

**Integration:**

- Telegram Web App API
- RESTful API communication
- Vercel deployment

---

## ✨ Features

- ✅ Native Telegram Mini App integration
- ✅ Real-time responsive interface
- ✅ Form validation with Yup
- ✅ Toast notifications (react-hot-toast, react-toastify)
- ✅ Smooth animations (Motion)
- ✅ Accessible UI components (Radix UI)
- ✅ Storybook for component documentation
- ✅ Type-safe end-to-end architecture
- ✅ ESLint with boundaries plugin for architecture enforcement

---

## 🧠 Architecture

The project follows **Feature-Sliced Design (FSD)** principles:

```
src/
├── app/          # Application entry point and providers
├── entities/     # Business entities
├── features/     # Feature modules
├── pages/        # Page-level components
├── shared/       # Shared utilities and components
└── widgets/      # Complex UI components
```

**Key Benefits:**

- Clear layer separation and scalability
- Enforced boundaries via ESLint
- Easier testing and maintenance
- Team collaboration improvements

---

## 📦 Getting Started

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Available Scripts

```bash
# Development
yarn dev              # Start dev server on port 3000

# Building & Deployment
yarn build            # Build for production

# Code Quality
yarn lint             # Run ESLint
yarn format           # Format code with Prettier

# Documentation
yarn storybook        # Start Storybook on port 6006
yarn build-storybook  # Build Storybook for deployment
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```
VITE_API_BASE_URL=https://meetiodating.ru/api
```

### Telegram Integration

The app integrates with Telegram via the Web App API:

```typescript
import { WebApp } from "@twa-dev/types";

const tg = window.Telegram.WebApp;
tg.ready();
```

---

## 🎨 UI Components

The project uses **Radix UI** primitives wrapped with Tailwind CSS styling.  
Component documentation available in Storybook.

### Running Storybook

```bash
yarn storybook
```

---

## 🚀 Deployment

The project is optimized for **Vercel** deployment with proper CSP headers for Telegram:

```json
{
	"Content-Security-Policy": "frame-ancestors https://web.telegram.org https://*.telegram.org"
}
```

---

## 📋 Browser Support

- Modern browsers with ES2020+ support
- Telegram Web App compatible clients

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please ensure:

- Code follows ESLint rules
- TypeScript types are properly defined
- Components are documented in Storybook
- FSD architecture principles are maintained

---

## 📞 Support

For issues and feature requests, please open an issue in the repository.
