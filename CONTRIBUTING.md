# Contribuyendo a Boilr 🤝

¡Gracias por considerar contribuir a **Boilr**! Es gracias a personas como tú que esta herramienta sigue elevando el estándar de la comunidad. Queremos que el proceso sea lo más fluido y gratificante posible.

> [!IMPORTANT]
> Boilr sigue una filosofía de **Calidad sobre Cantidad**. Buscamos código limpio, bien tipado y que respete la estética premium del proyecto.

## 📜 Código de Conducta

Este proyecto se rige por nuestro [Código de Conducta](/docs/codigo-de-conducta). Al participar, se espera que mantengas un ambiente respetuoso y profesional en todo momento.

## 🚀 ¿Cómo puedo contribuir?

### Reporte de Problemas
- **Bugs**: Antes de crear un Issue, verifica que no exista uno similar. Incluye pasos claros para reproducir y detalles de tu entorno.
- **Mejoras**: ¡Amamos las ideas innovadoras! Explica el valor añadido y propón una implementación.

### Pull Requests (Git Flow)
Seguimos estrictamente el flujo de **Git Flow**:
1. **Branching**: Crea tu rama desde `develop`.
2. **Nomenclatura**: `feat/` para funciones, `fix/` para errores, `docs/` para documentación.
3. **Calidad**: Asegúrate de que `npm run lint` y `npm run build` pasen sin errores.
4. **Resumen**: Describe claramente qué cambia y por qué.

## 💻 Configuración de Desarrollo

### 1. Clonación y Entorno
```bash
git clone https://github.com/Raishark/Boilr.git
cd boilr
npm install
```

### 2. Preparación de Rama
```bash
git checkout develop
git checkout -b feature/mi-mejora
```

### 3. Modo Desarrollo
```bash
# Inicia Next.js en modo dev (con Turbopack si es posible)
npm run dev
```

## 💎 Estándares de Código de Élite

### TypeScript & React
- **Tipado Estricto**: Evita el uso de `any`. Define interfaces claras y extensibles.
- **Server Components**: Aprovecha el poder de Next.js 15 priorizando componentes de servidor.
- **Clean Code**: Nombres semánticos y funciones de responsabilidad única.

### Estética & UI
- **Tailwind CSS 4**: Usa clases de utilidad coherentes con el sistema de diseño.
- **Animaciones**: Implementa micro-interacciones sutiles con Framer Motion para mantener el sentimiento "Premium".

> [!TIP]
> Revisa la carpeta `src/components` para entender los patrones visuales antes de proponer nuevos elementos.

## 📝 Convención de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- **`feat`**: Nueva funcionalidad.
- **`fix`**: Corrección de error.
- **`docs`**: Mejoras en documentación.
- **`refactor`**: Refactorización técnica.

---
*Al contribuir, aceptas que tu código sea licenciado bajo la **Licencia MIT**.*
