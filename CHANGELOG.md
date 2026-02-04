# Historial de Cambios (Changelog) 📜

Todos los cambios notables en este proyecto serán documentados en este archivo.

> [!NOTE]
> El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.0] - 2026-02-04 🚀
### Añadido
- **Live Snippet Preview**: Previsualización de código en tiempo real para el stack seleccionado en el generador.
- **Vercel Analytics**: Integración oficial de Vercel Web Analytics para monitoreo de rendimiento.
- **Identidad v2.4**: Actualización de badges y metadatos en Hero y Footer.

### Corregido
- Mejora del layout del generador para escalado horizontal en pantallas grandes.
- Limpieza de ramas de Git ya fusionadas.

---

## [2.3.1] - 2026-02-04 💎
### Cambiado
- **Premium Documentation**: Refactorización completa del `README.md` con estética profesional y alertas de GitHub.
### Corregido
- Sincronización de versiones en todos los componentes principales.

---

## [2.3.0] - 2026-02-04 🔗
### Añadido
- **URLs Compartibles**: Los usuarios pueden compartir su configuración exacta mediante un parámetro de consulta (`?c=...`).
- **Config Serialization**: Implementación de lógica de compartición basada en Base64.
- **Copy-to-Clipboard**: Botón "Compartir" con feedback visual.

---

## [2.2.1] - 2026-02-04 🧹
### Eliminado
- Workflows de GitHub Actions (`ci-cd.yml` y `release.yml`) para simplificar el flujo de desarrollo hacia Vercel.

---

## [2.2.0] - 2026-02-04 💾
### Añadido
- **Persistencia Local**: El generador ahora guarda el progreso y la configuración en `localStorage`.
- **Función de Reset**: Botón "Reiniciar Todo" para limpiar el estado guardado.

---

## [2.1.0] - 2026-02-04 🛠️
### Añadido
- **Manejo de Errores Premium**: Páginas `not-found.tsx` (404) y `error.tsx` globales con diseños de alta gama.
- **Optimización de Flujo**: Corrección de enlaces rotos en el componente Hero.

---

## [2.0.0] - 2026-02-04 ✨
### Añadido
- **Nuevas Páginas de Marketing**: Implementación de `/features` y `/how-it-works` con diseños glassmorphic.
- **Paso de Revisión Mejorado**: Rediseño del paso final de generación con iconos profesionales.

---

## [Historial Anterior]
*(Versiones v1.0.0 a v1.9.0)*
- Implementación del motor de documentación dinámica.
- Soporte para Docker, Prisma, Supabase y MongoDB.
- Integración de Stripe, Resend y PostHog.
- Sistema multi-paso de configuración de Boilerplates.

---
*Para ver el historial completo y detallado, consulta los [Releases en GitHub](https://github.com/Raishark/Boilr/releases).*
