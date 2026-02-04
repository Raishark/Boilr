# Boilr 🚀 (v2.3.1)

**Boilr** is a premium, open-source boilerplate generator for modern web developers. Built by [Raishark](https://github.com/Raishark), it is designed to skip the tedious setup and jump straight into building high-end applications with a world-class developer experience.

![Boilr Preview](https://github.com/Raishark/Boilr/raw/main/public/og-image.png)

## 🌟 Características Premium

- **Generación Instantánea**: Crea un proyecto full-stack en segundos con una configuración personalizada.
- **Persistencia Inteligente (v2.2.0)**: Sincronización automática con `localStorage`. Tu configuración y progreso se mantienen incluso si cierras el navegador.
- **URLs Compartibles (v2.3.0)**: Comparte tu stack exacto mediante serialización Base64 en la URL (`?c=...`). Sin base de datos, 100% colaborativo.
- **Identidad Visual Premium**: Logo centralizado con animaciones de terminal y estética dark-mode refinada.
- **Robustez de Flujo**: Páginas de error 404 y globales personalizadas con sistemas de recuperación automática.
- **Filosofía Pro-Vercel**: Optimizado para el plan Hobby de Vercel. Zero Backend, Zero Database, Zero Cost.

## 🛠️ Tech Stack & Herramientas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Turbopack ready)
- **UI/UX**: [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos**: [Prisma](https://www.prisma.io/) / [Supabase](https://supabase.com/) / [MongoDB](https://www.mongodb.com/)
- **Autenticación**: [Clerk](https://clerk.com/) / [NextAuth.js](https://next-auth.js.org/)
- **Analíticas**: [PostHog](https://posthog.com/) / [Google Analytics](https://analytics.google.com/)

## 🚀 Inicio Rápido

1. **Visita Boilr**: Ve a [boilr.raishark.com](https://boilr.raishark.com).
2. **Configura tu Proyecto**: Elige tu stack favorito en el generador interactivo.
3. **Descarga el ZIP**: Obtén tu código fuente listo para usar.
4. **Instala Dependencias**:
   ```bash
   npm install
   ```
5. **Configura Entorno**: Copia `.env.example` a `.env` y rellena tus credenciales.
6. **Inicia el Desarrollo**:
   ```bash
   npm run dev
   ```

## 📂 Estructura del Proyecto Generado

```bash
├── src/
│   ├── app/            # App Router (Next.js 15)
│   ├── components/     # UI Components (Premium Design)
│   ├── lib/            # Shared Utilities (DB, Auth clients)
│   ├── services/       # Core Business Logic
│   └── types/          # Strict TypeScript Definitions
├── public/             # Optimized Static Assets
└── docker/             # Optional Containerization docs
```

## 🤝 Filosofía y Contribuciones

Este proyecto es **Open Source** bajo la filosofía de Raishark. Valoramos la calidad sobre la cantidad.

- **Crédito al Autor**: Cualquier derivado debe reconocer a **Raishark** como creador original.
- **Eficiencia**: Diseñado para ejecutarse en infraestructuras Serverless sin costes operativos.
- **Mejoras**: Si tienes una idea para elevar el estándar de Boilr, abre un Issue o un PR.

---
*Hecho con ❤️ por [Raishark](https://github.com/Raishark)*
