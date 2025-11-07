# Ambivers Landing Page

## Overview

Ambivers is an educational platform helping Indonesian students prepare for university entrance exams and develop professional skills. The platform connects 50,000+ students across Indonesia with educational programs, mentorship, and opportunities. This is a full-stack web application featuring a marketing landing page with information about programs, testimonials, and partner organizations.

The application is built as a modern React SPA with Express backend, using TypeScript throughout for type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for UI components
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight React Router alternative)
- Single-page application (SPA) architecture

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Component-driven architecture with reusable UI elements
- Custom theme system supporting light/dark modes via CSS variables

**Design System**
- Brand colors: Primary Yellow (#FFC107), Primary Blue (#5B9BD5), Accent Red (#C00000)
- Typography: Plus Jakarta Sans for headings/body, EB Garamond for subheadings
- Modular component structure with example files for documentation
- Responsive design with mobile-first approach

**State Management**
- TanStack Query (React Query) for server state and data fetching
- React hooks for local component state
- Custom query client with credential-based requests

**Key Pages**
- Home page: Multi-section landing page (hero, about, statistics, programs, partners, testimonials)
- Blog page: Educational content listing
- 404 error page

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- HTTP server created via Node's built-in `http` module
- Middleware-based request handling architecture

**Development Setup**
- Vite middleware integration for HMR in development
- Custom logging middleware for API request tracking
- Raw body capture for webhook/payment integrations
- Static file serving for production builds

**Storage Layer**
- In-memory storage implementation (MemStorage class)
- Interface-based storage pattern (IStorage) for easy database swapping
- User CRUD operations as reference implementation
- Designed to be replaced with persistent database solution

**API Design**
- RESTful API structure (currently minimal routes)
- `/api` prefix for all backend endpoints
- JSON request/response format
- Session-based authentication preparation (cookie support enabled)

### Database Architecture

**ORM & Schema**
- Drizzle ORM for type-safe database operations
- PostgreSQL as target database (via Neon serverless driver)
- Schema-first approach with Zod validation
- Migration system via drizzle-kit

**Current Schema**
- Users table with username/password authentication
- UUID primary keys with database-generated defaults
- Type inference from schema to TypeScript types

**Database Configuration**
- Connection via DATABASE_URL environment variable
- Schema defined in `shared/schema.ts` for client/server sharing
- Migration files output to `./migrations` directory

### Project Structure

**Monorepo Organization**
- `/client` - Frontend React application
- `/server` - Express backend
- `/shared` - Shared TypeScript types and schemas
- `/attached_assets` - Design assets and content references

**Path Aliases**
- `@/*` - Client source directory
- `@shared/*` - Shared code directory
- `@assets/*` - Attached assets directory

**Build & Deployment**
- Client builds to `dist/public`
- Server bundles to `dist/index.js` via esbuild
- Production runs compiled JavaScript with Node
- Development uses tsx for TypeScript execution

## External Dependencies

### UI Component Libraries
- Radix UI: Accessible, unstyled component primitives (@radix-ui/react-*)
- shadcn/ui: Pre-styled components built on Radix UI
- Embla Carousel: Touch-friendly carousel component
- cmdk: Command menu interface component
- Lucide React: Icon library
- React Icons: Additional icon sets (social media icons)

### Database & ORM
- Drizzle ORM: Type-safe database toolkit
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon
- Drizzle-Zod: Schema validation integration
- connect-pg-simple: PostgreSQL session store (for future session management)

### Styling & Design
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant styling
- clsx & tailwind-merge: Conditional class utilities
- PostCSS with Autoprefixer

### State Management & Data Fetching
- @tanstack/react-query: Server state management
- React Hook Form: Form state and validation
- @hookform/resolvers: Validation resolver for React Hook Form
- Zod: Schema validation

### Development Tools
- Vite: Build tool and dev server
- TypeScript: Type system
- tsx: TypeScript execution for development
- esbuild: Production bundler for server
- @replit/vite-plugin-*: Replit-specific development enhancements

### Utilities
- date-fns: Date manipulation library
- wouter: Lightweight routing
- nanoid: Unique ID generation

### Fonts
- Plus Jakarta Sans: Primary brand font (headings and body)
- EB Garamond: Secondary font (subheadings)
- Inter: Fallback system font
- Loaded via Google Fonts CDN