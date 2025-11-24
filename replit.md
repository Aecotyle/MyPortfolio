# Taha Moazzam Mern - Portfolio Website

## Overview

This is a personal portfolio website showcasing the professional experience, skills, and projects of Taha Moazzam Mern, a Software Developer, AI Enthusiast, and Startup Founder. The site features an immersive 3D experience with interactive elements, smooth animations, and modern design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- TailwindCSS for utility-first styling with custom design tokens

**3D Graphics & Animation**
- React Three Fiber (@react-three/fiber) for declarative 3D rendering using Three.js
- React Three Drei (@react-three/drei) for useful 3D helpers and abstractions
- React Three Postprocessing for advanced visual effects
- GLSL shader support via vite-plugin-glsl for custom shader development
- GSAP with ScrollTrigger for scroll-based animations and transitions
- Framer Motion for component-level animations and transitions

**UI Component Library**
- Radix UI primitives for accessible, unstyled component foundations (accordion, dialog, dropdown, tooltip, etc.)
- shadcn/ui component patterns for consistent, customizable UI elements
- Custom components for Hero, About, Skills, Projects, Experience, and Contact sections

**State Management**
- Zustand for lightweight state management
- TanStack Query (@tanstack/react-query) for server state management and data fetching
- Zustand middleware (subscribeWithSelector) for reactive state subscriptions

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Separate development and production entry points (index-dev.ts, index-prod.ts)
- Custom middleware for request logging and JSON response capture

**Development vs Production**
- Development: Vite middleware integration for HMR and SSR
- Production: Static file serving from pre-built dist directory
- Environment-based configuration through NODE_ENV

**API Structure**
- RESTful API design with /api prefix for all endpoints
- Route registration through centralized routes.ts file
- Storage abstraction layer for data persistence flexibility

### Data Storage Solutions

**Database**
- PostgreSQL as the primary database (via Neon serverless)
- Drizzle ORM for type-safe database queries and migrations
- Schema defined in shared/schema.ts for code sharing between client and server

**Storage Abstraction**
- IStorage interface defines CRUD contract
- MemStorage implementation for in-memory development/testing
- Easy swapping to database-backed implementation through interface

**Schema Design**
- Users table with id, username, and password fields
- Drizzle-Zod integration for runtime validation
- Type inference for TypeScript type safety

### Authentication and Authorization

**Current State**
- Basic user schema defined (username/password)
- Session management infrastructure prepared (connect-pg-simple for PostgreSQL sessions)
- No active authentication flow implemented yet

**Prepared Infrastructure**
- Session middleware setup ready for implementation
- User creation and retrieval methods in storage layer
- Password storage field prepared (should be hashed before production use)

### External Dependencies

**Database Services**
- Neon Database (@neondatabase/serverless) - Serverless PostgreSQL hosting
- Connection via DATABASE_URL environment variable

**3D & Graphics**
- Three.js - WebGL 3D graphics library
- Luma AI integration mentioned in project descriptions for advanced 3D models

**Font Management**
- Fontsource (Inter font family) for self-hosted web fonts

**Development Tools**
- tsx for TypeScript execution in development
- esbuild for production bundling
- Replit-specific vite plugin for runtime error overlay

**UI & Styling**
- PostCSS with Autoprefixer for CSS processing
- class-variance-authority and clsx for dynamic className management
- cmdk for command palette patterns

**Animation Libraries**
- GSAP for timeline-based animations
- Framer Motion for React component animations
- date-fns for date formatting and manipulation

**Type Safety**
- Zod for runtime schema validation
- Drizzle-Zod for ORM schema validation bridge
- TypeScript strict mode enabled across entire codebase

### Path Aliases

- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`
- Enables clean imports across client and shared code

### Build Process

**Development**
- Run `npm run dev` to start Vite dev server with Express backend
- Hot module replacement for client code
- Automatic server restart on backend changes

**Production**
- Build client with Vite (`vite build`)
- Bundle server with esbuild
- Output: `dist/public` (client) and `dist/index.js` (server)
- Run `npm start` to serve production build

**Database**
- Run `npm run db:push` to sync schema changes to database via Drizzle