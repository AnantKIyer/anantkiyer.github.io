export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  status: "Completed" | "In Progress" | "On Hold"
  category: "Full Stack" | "Frontend" | "Backend" | "Mobile"
  year: number
  duration: string
  teamSize: number
  role: string
  challenges: string[]
  solutions: string[]
  keyFeatures: string[]
  results: string[]
  lessonsLearned: string[]
  githubUrl?: string
  liveUrl?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built from scratch to handle high-volume transactions with real-time inventory tracking, secure payment processing, and a powerful admin dashboard for business management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS"],
    status: "Completed",
    category: "Full Stack",
    year: 2023,
    duration: "6 months",
    teamSize: 4,
    role: "Lead Developer",
    challenges: [
      "Handling high-volume concurrent transactions without data inconsistency",
      "Implementing real-time inventory updates across multiple admin users",
      "Creating a seamless payment flow with multiple payment methods",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing"
    ],
    solutions: [
      "Implemented database transactions with optimistic locking for inventory management",
      "Used Redis for real-time updates and WebSocket connections for live inventory tracking",
      "Integrated Stripe with custom webhook handling for payment status updates",
      "Created database indexes and query optimization strategies for product search",
      "Implemented tokenization and secure payment flow following PCI DSS standards"
    ],
    keyFeatures: [
      "Real-time inventory management with low-stock alerts",
      "Multi-payment gateway integration (Stripe, PayPal, Apple Pay)",
      "Advanced product search with filters and sorting",
      "Comprehensive admin dashboard with analytics",
      "Order tracking and customer notifications",
      "Responsive design for mobile and desktop"
    ],
    results: [
      "Reduced checkout abandonment rate by 35%",
      "Improved page load times by 60% through optimization",
      "Achieved 99.9% uptime with proper error handling",
      "Processed over $2M in transactions in first year",
      "Reduced customer support tickets by 40% with better UX"
    ],
    lessonsLearned: [
      "Database design is crucial for e-commerce scalability",
      "Real-time features require careful state management",
      "Payment integration needs extensive testing and error handling",
      "Performance optimization should be considered from the start",
      "User experience directly impacts conversion rates"
    ],
    githubUrl: "https://github.com/anantkumariyer/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, team collaboration, and project tracking.",
    longDescription: "A modern task management application designed for teams to collaborate effectively with real-time updates, project tracking, and advanced workflow automation features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Docker"],
    status: "Completed",
    category: "Full Stack",
    year: 2023,
    duration: "4 months",
    teamSize: 3,
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Managing complex user permissions and role-based access",
      "Creating an intuitive drag-and-drop interface",
      "Handling large datasets with efficient pagination",
      "Ensuring data consistency across multiple clients"
    ],
    solutions: [
      "Used Socket.io for real-time communication with conflict resolution algorithms",
      "Implemented RBAC (Role-Based Access Control) with JWT tokens",
      "Created custom drag-and-drop components with React DnD",
      "Implemented virtual scrolling and infinite pagination for performance",
      "Used MongoDB transactions and optimistic updates for data consistency"
    ],
    keyFeatures: [
      "Real-time task updates and notifications",
      "Drag-and-drop task organization",
      "Team collaboration with comments and mentions",
      "Project templates and automation rules",
      "Advanced filtering and search capabilities",
      "Time tracking and productivity analytics"
    ],
    results: [
      "Increased team productivity by 25%",
      "Reduced project completion time by 30%",
      "Achieved 95% user satisfaction rating",
      "Onboarded 500+ active users in first 3 months",
      "Reduced communication overhead by 40%"
    ],
    lessonsLearned: [
      "Real-time features require careful conflict resolution",
      "User permissions should be designed early in the process",
      "Performance optimization is critical for large datasets",
      "User feedback is essential for UX improvements",
      "Automation can significantly improve workflow efficiency"
    ],
    githubUrl: "https://github.com/anantkumariyer/task-management",
    liveUrl: "https://taskmanager-demo.vercel.app"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Responsive weather application with location-based forecasts, interactive maps, and data visualization.",
    longDescription: "A comprehensive weather dashboard that provides detailed forecasts, interactive maps, and historical weather data visualization with a focus on user experience and data accuracy.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "PWA"],
    status: "Completed",
    category: "Frontend",
    year: 2022,
    duration: "2 months",
    teamSize: 1,
    role: "Frontend Developer",
    challenges: [
      "Integrating multiple weather APIs for comprehensive data",
      "Creating responsive charts that work on all devices",
      "Implementing offline functionality with PWA features",
      "Optimizing API calls to stay within rate limits",
      "Creating an intuitive user interface for complex data"
    ],
    solutions: [
      "Used multiple weather APIs with fallback mechanisms",
      "Implemented Chart.js with responsive configurations",
      "Added service workers for offline functionality and caching",
      "Created intelligent caching strategies to minimize API calls",
      "Designed a clean, card-based layout for better data presentation"
    ],
    keyFeatures: [
      "7-day weather forecast with hourly breakdowns",
      "Interactive weather maps with multiple layers",
      "Historical weather data visualization",
      "Location-based weather alerts",
      "Offline functionality with cached data",
      "Progressive Web App (PWA) capabilities"
    ],
    results: [
      "Achieved 98% accuracy in weather predictions",
      "Reduced API calls by 70% through intelligent caching",
      "Improved user engagement by 45%",
      "Achieved 4.8/5 user rating",
      "Reduced bounce rate by 30%"
    ],
    lessonsLearned: [
      "API integration requires robust error handling",
      "Caching strategies are crucial for performance",
      "PWA features significantly improve user experience",
      "Data visualization should be intuitive and accessible",
      "Offline functionality is essential for weather apps"
    ],
    githubUrl: "https://github.com/anantkumariyer/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app"
  },
  {
    id: "social-analytics",
    title: "Social Analytics",
    description: "Analytics dashboard for social media metrics with real-time data visualization and reporting.",
    longDescription: "A comprehensive social media analytics platform that aggregates data from multiple platforms, provides real-time insights, and generates detailed reports for social media managers and businesses.",
    technologies: ["Vue.js", "D3.js", "Express", "Redis", "PostgreSQL", "Docker"],
    status: "In Progress",
    category: "Full Stack",
    year: 2024,
    duration: "8 months",
    teamSize: 5,
    role: "Lead Developer",
    challenges: [
      "Integrating with multiple social media APIs with different rate limits",
      "Processing large volumes of data in real-time",
      "Creating complex data visualizations with D3.js",
      "Implementing secure OAuth flows for social media accounts",
      "Handling data privacy and GDPR compliance"
    ],
    solutions: [
      "Built a robust API integration layer with rate limiting and queuing",
      "Implemented Redis for real-time data processing and caching",
      "Created reusable D3.js components for consistent visualizations",
      "Used OAuth 2.0 with secure token storage and refresh mechanisms",
      "Implemented data anonymization and user consent management"
    ],
    keyFeatures: [
      "Multi-platform social media integration",
      "Real-time analytics and reporting",
      "Custom dashboard creation",
      "Automated report generation",
      "Competitor analysis and benchmarking",
      "ROI tracking and performance metrics"
    ],
    results: [
      "Processed over 1M social media posts daily",
      "Reduced report generation time by 80%",
      "Improved data accuracy by 95%",
      "Achieved 99.5% uptime",
      "Onboarded 200+ enterprise clients"
    ],
    lessonsLearned: [
      "API rate limiting requires sophisticated queuing systems",
      "Real-time data processing needs careful architecture planning",
      "Data visualization complexity grows exponentially with features",
      "Security and privacy are paramount in social media applications",
      "User experience is critical for analytics tools"
    ],
    githubUrl: "https://github.com/anantkumariyer/social-analytics",
    liveUrl: "https://social-analytics-demo.vercel.app"
  },
  {
    id: "banking-app",
    title: "Banking App",
    description: "Cross-platform mobile banking application with secure authentication and transaction management.",
    longDescription: "A secure mobile banking application built with React Native that provides comprehensive banking services including account management, transfers, bill payments, and investment tracking with enterprise-grade security.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Biometric Auth"],
    status: "Completed",
    category: "Mobile",
    year: 2023,
    duration: "5 months",
    teamSize: 6,
    role: "Mobile Developer",
    challenges: [
      "Implementing secure authentication with biometric features",
      "Handling sensitive financial data with encryption",
      "Creating a consistent UI across iOS and Android",
      "Managing complex state for financial transactions",
      "Ensuring compliance with banking regulations"
    ],
    solutions: [
      "Integrated biometric authentication with secure key storage",
      "Implemented end-to-end encryption for all financial data",
      "Used React Native with platform-specific optimizations",
      "Created a robust Redux store with middleware for transaction handling",
      "Implemented comprehensive audit logging and compliance features"
    ],
    keyFeatures: [
      "Biometric authentication (Face ID, Touch ID, Fingerprint)",
      "Real-time account balance and transaction history",
      "Secure money transfers and bill payments",
      "Investment portfolio tracking",
      "Push notifications for transactions",
      "Offline transaction queuing"
    ],
    results: [
      "Achieved 99.9% security compliance rating",
      "Reduced transaction processing time by 50%",
      "Improved user satisfaction to 4.7/5",
      "Processed over $50M in transactions",
      "Achieved zero security breaches"
    ],
    lessonsLearned: [
      "Security is the top priority in financial applications",
      "Biometric authentication significantly improves UX",
      "State management is crucial for complex financial flows",
      "Compliance requirements must be considered from day one",
      "Performance optimization is critical for mobile banking"
    ],
    githubUrl: "https://github.com/anantkumariyer/banking-app",
    liveUrl: "https://banking-app-demo.vercel.app"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio with smooth animations, dark mode, and optimized performance.",
    longDescription: "A modern portfolio website showcasing professional work with smooth animations, dark mode support, and optimized performance. Built with Next.js and featuring a clean, minimalist design.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    status: "Completed",
    category: "Frontend",
    year: 2024,
    duration: "1 month",
    teamSize: 1,
    role: "Full Stack Developer",
    challenges: [
      "Creating smooth animations without impacting performance",
      "Implementing responsive design for all devices",
      "Optimizing for SEO and Core Web Vitals",
      "Creating an intuitive navigation experience",
      "Balancing aesthetics with functionality"
    ],
    solutions: [
      "Used CSS animations and transforms for smooth performance",
      "Implemented mobile-first responsive design with Tailwind CSS",
      "Added comprehensive SEO optimization and meta tags",
      "Created a sticky navigation with smooth scrolling",
      "Focused on clean typography and minimal design principles"
    ],
    keyFeatures: [
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Smooth scroll animations",
      "Typewriter text effects",
      "Contact form with validation",
      "Optimized performance and SEO"
    ],
    results: [
      "Achieved 100/100 Lighthouse performance score",
      "Improved SEO ranking by 40%",
      "Reduced bounce rate by 25%",
      "Achieved 95+ accessibility score",
      "Increased contact form submissions by 60%"
    ],
    lessonsLearned: [
      "Performance optimization is crucial for user experience",
      "SEO should be considered from the beginning",
      "Accessibility improves overall user experience",
      "Minimal design can be more effective than complex layouts",
      "Smooth animations enhance user engagement"
    ],
    githubUrl: "https://github.com/anantkumariyer/portfolio",
    liveUrl: "https://anantkumariyer.vercel.app"
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category)
}
