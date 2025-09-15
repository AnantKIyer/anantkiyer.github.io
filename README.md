# Anant Kiyer - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean Material Design-inspired interface with dark/light mode support, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, minimal interface following Material Design principles
- **Responsive Layout**: Seamlessly works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Performance Optimized**: Image optimization, lazy loading, and dynamic imports
- **TypeScript**: Full type safety throughout the application
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured and categorized project displays

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── footer.tsx        # Footer component
│   ├── navigation.tsx    # Navigation component
│   ├── theme-provider.tsx # Theme context
│   ├── theme-toggle.tsx  # Theme toggle button
│   ├── lazy-image.tsx    # Optimized image component
│   └── structured-data.tsx # SEO structured data
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anantkiyer/anantkiyer.github.io.git
cd anantkiyer.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Contact Information**: Update `src/app/contact/page.tsx`
2. **About Content**: Modify `src/app/about/page.tsx`
3. **Projects**: Edit `src/app/projects/page.tsx`
4. **SEO Meta**: Update `src/app/layout.tsx`
5. **Structured Data**: Modify `src/components/structured-data.tsx`

### Styling

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Typography**: Modify font imports in `src/app/layout.tsx`
- **Components**: Customize UI components in `src/components/ui/`

### Content

- **Projects**: Add your projects to the `projects` array in `src/app/projects/page.tsx`
- **Skills**: Update the `skills` array in `src/app/about/page.tsx`
- **Social Links**: Modify social links in footer and contact pages

## 📱 Pages

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal background, skills, and achievements
- **Projects**: Showcase of featured and other projects
- **Contact**: Contact form and social media links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/anantkiyer/anantkiyer.github.io/issues).

## 📞 Contact

- **Email**: anant.k.iiyer@outlook.com
- **LinkedIn**: [anantkiyer](https://linkedin.com/in/anant-iyer)
- **GitHub**: [anantkiyer](https://github.com/anantkiyer)
- **Twitter**: [@anantkiyer](https://twitter.com/anantkiyer)

---

Made with ❤️ by [Anant K Iyer](https://anantkiyer.github.io)