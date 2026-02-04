# Contribuyendo a Boilr 🤝

¡Gracias por considerar contribuir a **Boilr**! Es gracias a personas con visión técnica que esta herramienta sigue elevando los estándares de la industria. Queremos que tu proceso de colaboración sea fluido, constructivo y profesional.

> [!IMPORTANT]
> Boilr se rige por la filosofía de **Calidad sobre Cantidad**. Valoramos el código limpio, estrictamente tipado y que respete la estética visual premium del proyecto.

## 📜 Código de Conducta

Este proyecto sigue un estricto [Código de Conducta](/docs/codigo-de-conducta). Al participar, te comprometes a mantener un ambiente de respeto radical y profesionalismo en todo momento.

## 🚀 ¿Cómo puedo contribuir?

### Reporte de Problemas
- **Bugs**: Antes de abrir un Issue, verifica que no exista uno similar. Incluye pasos precisos para reproducir el error y detalles técnicos de tu entorno.
- **Mejoras**: ¡Nos encantan las ideas disruptivas! Explica claramente el valor añadido para el usuario final y propón una ruta de implementación.

### Pull Requests (Git Flow)
Seguimos una metodología de **Git Flow** de alto nivel:
1. **Ramas**: Crea siempre tu rama de trabajo desde `develop`.
2. **Nomenclatura**: Utiliza prefijos claros como `feat/`, `fix/` o `docs/`.
3. **Calidad**: Es mandatorio que los scripts `npm run lint` y `npm run build` se ejecuten sin errores.
4. **Claridad**: Proporciona un resumen detallado de los cambios y su impacto técnico.

## 💻 Entorno de Desarrollo

### 1. Inicialización
```bash
git clone https://github.com/Raishark/Boilr.git
cd boilr
npm install
```

### 2. Flujo de Rama
```bash
git checkout develop
git checkout -b feature/mi-mejora-increible
```

### 3. Ejecución
```bash
# Lanza el entorno de desarrollo con Next.js Turbopack
npm run dev
```

## 💎 Estándares Técnicos de Élite

### TypeScript & React
- **Tipado Robusto**: El uso de `any` está prohibido. Define interfaces precisas y reutilizables.
- **Server Components**: Prioriza los componentes de servidor para maximizar el rendimiento.
- **Arquitectura Limpia**: Nombres semánticos y funciones puras con responsabilidad única.

### Estética & Experiencia de Usuario
- **Tailwind CSS 4**: Utiliza el sistema de diseño establecido sin romper la coherencia visual.
- **Micro-interacciones**: Usa Framer Motion para añadir ese toque de calidad que define a Boilr.

> [!TIP]
> Estudia los componentes en `src/components` para asimilar los patrones de diseño antes de proponer nuevos elementos visuales.

## 📝 Convención de Commits

Mantenemos un historial legible mediante [Conventional Commits](https://www.conventionalcommits.org/):
- **`feat`**: Una mejora tangible para el usuario.
- **`fix`**: Resolución de un error técnico.
- **`docs`**: Perfeccionamiento de la documentación.
- **`refactor`**: Reestructuración técnica sin cambio de funcionalidad.

---
*Al contribuir, aceptas que tu aportación sea licenciada bajo la **Licencia MIT**.*
