# Contribuyendo a Boilr 🤝

¡Gracias por considerar contribuir a **Boilr**! Es gracias a personas como tú que esta herramienta sigue elevando el estándar de la comunidad. Queremos que el proceso sea lo más fluido y gratificante posible.

> [!IMPORTANT]
> Boilr sigue una filosofía de **Calidad sobre Cantidad**. Buscamos código limpio, bien tipado y que respete la estética premium del proyecto.

## 📜 Código de Conducta

Este proyecto se rige por nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas un ambiente respetuoso y profesional en todo momento.

## 🚀 ¿Cómo puedo contribuir?

### 🐛 Reportar Bugs
Antes de crear un "Issue", por favor verifica que no exista uno similar. Al reportar, incluye:
- **Título descriptivo**: Qué sucede y dónde.
- **Pasos para reproducir**: 1, 2, 3...
- **Entorno**: OS, versión de Node y navegador.
- **Capturas**: Si es un error visual, una imagen vale más que mil palabras.

### ✨ Sugerir Mejoras
¡Amamos las ideas innovadoras! Si crees que Boilr puede ser más rápido, más bonito o más potente:
- Explica el **valor añadido** de la mejora.
- Propón una posible implementación técnica.

### 🛠️ Pull Requests
Seguimos estrictamente el flujo de **[Git Flow](GITFLOW.md)**:

1. **Fork & Branch**: Crea tu rama desde `develop`.
2. **Nomenclatura**:
   - `feat/nueva-funcionalidad`
   - `fix/descripcion-del-error`
   - `docs/mejoras-en-documentacion`
3. **Calidad**: Asegúrate de que `npm run lint` y `npm run build` pasen sin errores.
4. **Resumen**: Describe claramente qué cambia y por qué.

## 💻 Configuración de Desarrollo

```bash
# 1. Clona tu fork
git clone https://github.com/tu-usuario/boilr.git
cd boilr

# 2. Instala dependencias
npm install

# 3. Crea tu rama desde develop
git checkout develop
git checkout -b feature/mi-mejora

# 4. Inicia el modo desarrollo
npm run dev
```

## 💎 Estándares de Código

### TypeScript & React
- **Tipado Estricto**: Evita el uso de `any`. Define interfaces claras.
- **Componentes**: Usa componentes funcionales y Server Components (Next.js 15) donde sea posible.
- **Clean Code**: Nombres de variables semánticos y funciones pequeñas y enfocadas.

### Estética & UI
- **Tailwind CSS**: Usa las clases de utilidad de Tailwind de forma coherente.
- **Aesthetics First**: Si añades UI, asegúrate de que use micro-animaciones (Framer Motion) y respete el modo oscuro.

> [!TIP]
> Revisa `src/components/ui` para ver los patrones de diseño existentes antes de crear nuevos componentes.

## 📝 Convención de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat`: Nueva característica.
- `fix`: Corrección de error.
- `docs`: Solo documentación.
- `style`: Cambios de formato (espacios, comas).
- `refactor`: Cambio de código que ni corrige error ni añade feature.

**Ejemplo:** `feat(generator): add support for Shadcn UI components`

## ❓ ¿Preguntas?

Si tienes dudas, abre un Issue con la etiqueta `question` o contacta con los mantenedores de [Raishark](https://github.com/Raishark).

---
*Al contribuir, aceptas que tu código sea licenciado bajo la **Licencia MIT**.*
