# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-02-04

### Added
- **Dynamic Documentation**: New `/docs` page that stays synchronized with the GitHub repository.
- **Enhanced UX**: "RECOMENDADO" badges in the generator to guide users.
- **Intelligent Logic**: Automatic Docker enablement when using Prisma, with clear UI notifications.
- **Client-First Flow**: Improved button states and clearer "Ninguno" (None) options.
- **Navigation**: Updated footer with direct links to the creator's GitHub and social profiles.

## [1.4.0] - 2026-02-04

### Añadido
- **Generador Ultra-Refinado**: Nueva interfaz de selección más intuitiva y agrupada.
- **Soporte Docker**: Opción para incluir `Dockerfile` y `docker-compose.yml` en el proyecto generado.
- **Configuración Completa**:
  - Generación de clientes para **Stripe**, **Resend** y **PostHog**.
  - Configuración automática de **NextAuth** (route handlers) y **Clerk** (middleware).
  - Soporte para **MongoDB** (Mongoose).
- **UX Mejorada**: Botones explícitos de "Ninguno" por categoría y resumen de configuración detallado antes de generar.

### Corregido
- Estructura interna del componente de generación para mejor rendimiento y mantenibilidad.
- Tipado estricto en el generador de configuración.
- Manejo de recomendaciones de plantillas con opción de reset total.

## [1.3.1] - 2026-02-04
### Añadido
- Opción de "Toggle" para deseleccionar servicios opcionales.
- Aviso de template aplicado con opción de limpieza.
- Opción "Ninguno" para Autenticación.

## [1.3.0] - 2026-02-04

### Changed
- Synchronized versioning across `package.json`, `Footer`, and `CHANGELOG`.
- Improved generator UI with better loading states.

## [1.2.0] - 2026-02-03

### Added
- Login page (`/login`) with social authentication (Google, GitHub) and email/password forms
- Templates showcase page (`/templates`) featuring 6 professional boilerplate templates
- "How It Works" section on home page with 4-step process visualization
- Testimonials section with user reviews and 5-star ratings
- FAQ section with accordion functionality for common questions
- Final CTA section with compelling copy and trust indicators
- Mobile hamburger menu with smooth animations using AnimatePresence
- Scroll-triggered animations throughout the site using Framer Motion
- Responsive design optimizations for mobile, tablet, and desktop
- ARIA labels and accessibility improvements across all components

### Changed
- Enhanced home page with comprehensive sections and footer integration
- Improved navbar with mobile-first responsive design
- Updated footer component integration across all pages
- Better visual hierarchy and spacing throughout the application

### Fixed
- Mobile navigation experience with proper menu toggle
- Responsive layout issues on smaller screens


## [1.1.0] - 2026-02-03

### Added
- Back button on `/generate` page for improved navigation
- Professional footer component with links and copyright information
- CHANGELOG.md for version tracking
- CONTRIBUTING.md with contribution guidelines
- LICENSE file (MIT)
- CODE_OF_CONDUCT.md for community standards
- Repository field in package.json
- Enhanced README with badges and better structure

### Changed
- Improved header layout on generate page
- Better visual hierarchy and responsive design
- Updated documentation structure

### Fixed
- Navigation flow improvements

## [1.0.0] - 2026-02-03

### Added
- Initial release of Boilr
- Next.js 15 boilerplate generator
- Multi-step configuration wizard
- Support for Next.js and Remix frameworks
- Database options: Supabase, MongoDB, Prisma
- Authentication options: Supabase Auth, Clerk, NextAuth
- Stripe payment integration
- Vercel deployment configuration
- Docker support
- Automatic ZIP generation with configured project
- Professional dark theme UI with animations
- Comprehensive README documentation

[Unreleased]: https://github.com/Raishark/Boilr/compare/v1.2.0...HEAD
[1.3.0]: https://github.com/Raishark/Boilr/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Raishark/Boilr/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Raishark/Boilr/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Raishark/Boilr/releases/tag/v1.0.0
