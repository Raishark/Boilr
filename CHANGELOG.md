# Historial de Cambios (Changelog) 📜

Todos los cambios notables en este proyecto serán documentados en este archivo.

> [!NOTE]
> El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.4.0] - 2026-02-05 🚀
### Añadido
- **SEO Premium**: Implementación de `robots.ts` y `sitemap.ts` dinámico para indexación total.
- **Metadata Enriquecida**: Refactor a Server Components para habilitar Open Graph y Twitter Cards en todas las páginas.
- **Micro-UX**: Nueva utilidad de "Copiar al portapapeles" y hook especializado para snippets.
- **Speed Insights**: Integración oficial de `@vercel/speed-insights`.

### Cambiado
- **Refactor de Rendimiento**: Migración de `TemplatesPage` y `GeneratePage` a arquitecturas cliente/servidor optimizadas.

## [3.3.0] - 2026-02-05 ⚡
### Añadido
- **Framer Motion Optimization**: Implementación de `MotionProvider` y `LazyMotion` para carga diferida de animaciones.
- **Componentes Reducidos**: Uso sistemático del componente `m` para minimizar el bundle inicial de JavaScript.

### Eliminado
- Dependencia de `mermaid` no utilizada para reducir el peso del proyecto.

## [3.2.0] - 2026-02-04 💎
### Añadido
- **Legibilidad Masterclass**: Eliminación de cursivas excesivas en toda la documentación para mejorar la experiencia de lectura de larga duración.
- **Optimización de Tipografía**: Ajuste de letter-spacing (tracking) y aumento de contraste en bloques de texto secundarios.
- **Estandarización de Layout**: Ancho de contenedor optimizado (65ch approx) en todas las subpáginas de `/docs` para una lectura cómoda.

### Corregido
- Consolidación de versiones en todo el ecosistema del proyecto.
- Refinamiento de guías de uso y contribución para alinearlas con el nuevo estándar visual.

## [3.1.1] - 2026-02-04 🛠️
### Corregido
- Refinamiento estético del motor de renderizado de Markdown.
- Mejoras de espaciado y márgenes en la vista móvil de documentación.

## [3.1.0] - 2026-02-04 📚
### Añadido
- **Docs Rendering Engine v3**: Migración a `react-markdown` con soporte completo para GFM (tablas, listas de tareas).
- **Alertas Premium**: Implementación de bloques de información estilo GitHub (`[!NOTE]`, `[!TIP]`, etc.) con iconos dinámicos.
- **Git Flow Integration**: Inclusión formal de la guía de maestría de Git Flow en el portal de inteligencia.

## [3.0.0] - 2026-02-04 🚀
### Añadido
- **Git Flow Masterclass**: Re-alineación completa del historial del repositorio bajo estándares industriales.
- **Versión Definitoria**: Salto a v3.0.0 marcando la madurez arquitectónica del proyecto.

---

## [2.7.0] - 2026-02-04 🎨
### Añadido
- **Portal de Inteligencia**: Nueva sección de `/docs` con navegación interna asíncrona.
- **Navegación Pulida**: Botón "Inicio" en Navbar y mejoras en la persistencia de sesión.

---
*Para ver el historial completo y detallado, consulta los [Releases en GitHub](https://github.com/Raishark/Boilr/releases).*
