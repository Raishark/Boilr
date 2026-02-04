# Boilr 🚀

**Boilr** is a premium, open-source boilerplate generator for modern web developers. Built by [Raishark](https://github.com/Raishark), it allows you to skip the tedious setup and jump straight into building your next big idea.

## 🌟 Características Principales

- **Generación Instantánea**: Crea un proyecto full-stack en segundos con una configuración personalizada.
- **Stack Tecnológico Moderno**: Next.js, TypeScript, Tailwind CSS, Prisma, Supabase, y más.
- **Integración de Servicios**: Configura autenticación (Clerk, NextAuth), bases de datos (PostgreSQL, MongoDB), emails (Resend), y analíticas (PostHog) con un solo clic.
- **Soporte Docker**: Generación automática de `Dockerfile` y `docker-compose.yml` para un despliegue sin fricciones.
- **Documentación Dinámica**: Sistema de docs integrado que se sincroniza directamente con este repositorio.

## 🛠️ Tech Stack & Herramientas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Base de Datos**: [Prisma](https://www.prisma.io/) / [Supabase](https://supabase.com/) / [MongoDB](https://www.mongodb.com/)
- **Autenticación**: [Clerk](https://clerk.com/) / [NextAuth.js](https://next-auth.js.org/)
- **Analíticas**: [PostHog](https://posthog.com/) / [Google Analytics](https://analytics.google.com/)

## 🚀 Inicio Rápido

1. **Visita Boilr**: Ve a [boilr.raishark.com](https://boilr.raishark.com) (o tu instancia local).
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
│   ├── app/            # App Router de Next.js
│   ├── components/     # Componentes compartidos
│   ├── lib/            # Utilidades y clientes (DB, Auth)
│   ├── services/       # Lógica de negocio
│   └── templates/      # Plantillas de generación
├── public/             # Archivos estáticos
└── docker/             # Configuración opcional de contenedores
```

## 🤝 Contribuciones y Créditos

Este proyecto es **Open Source** bajo una licencia modificada. Valoramos enormemente las contribuciones de la comunidad.

- **Crédito al Autor**: Cualquier derivado de este proyecto debe mantener una mención clara a **Raishark** como creador original.
- **Comunicación**: Para cambios significativos o forks públicos, se recomienda encarecidamente contactar primero con el autor a través de [GitHub](https://github.com/Raishark).
- **Mejoras**: Si encuentras un bug o tienes una idea, ¡abre un Issue o un PR!

---
*Hecho con ❤️ por [Raishark](https://github.com/Raishark)*
