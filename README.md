# 🚀 Boilr - The Ultimate Boilerplate Generator

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)

Boilr es un generador de boilerplates profesionales para freelancers DevOps/Full-Stack. Permite crear proyectos Next.js configurados con tu stack preferido en segundos.

[CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [LICENSE](LICENSE)

## ✨ Características

- 🎨 **UI Premium**: Interfaz moderna con animaciones fluidas y tema oscuro
- ⚡ **Generación Instantánea**: Descarga tu proyecto configurado en ZIP
- 📦 **Stack Completo**: Next.js 15, Supabase, Prisma, Clerk, Stripe, Docker, CI/CD
- 📖 **Documentación Automática**: Cada proyecto incluye README detallado con pasos de configuración
- 🔒 **Type-Safe**: TypeScript con tipado fuerte en toda la aplicación

---

## 🏃 Quick Start

### Prerrequisitos

- **Node.js** 20 o superior
- **npm** o **pnpm**

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <tu-repo-url>
   cd Boilr
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

---

## 📁 Estructura del Proyecto

```
Boilr/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   └── generate/          # Configurador multi-paso
│   ├── components/            # Componentes reutilizables
│   │   ├── navbar.tsx
│   │   └── hero.tsx
│   ├── lib/                   # Utilidades
│   │   └── utils.ts
│   ├── services/              # Lógica de negocio
│   │   └── generator.ts       # Servicio de generación de ZIP
│   ├── templates/             # Templates de boilerplates
│   │   └── base.ts            # Templates base (package.json, README, Docker, etc.)
│   └── types/                 # Definiciones TypeScript
│       └── config.ts          # Interface ProjectConfig
├── public/                    # Assets estáticos
├── tailwind.config.ts         # Configuración Tailwind
└── package.json
```

---

## 🛠️ Configuración para Desarrollo

### Variables de Entorno (Opcional)

Si planeas agregar funcionalidades de backend (autenticación, base de datos), crea un archivo `.env.local`:

```bash
# Ejemplo para futuras integraciones
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase (si decides agregar backend)
# NEXT_PUBLIC_SUPABASE_URL=tu-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-key

# Stripe (para monetización)
# STRIPE_SECRET_KEY=sk_test_...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Verificar código con ESLint
```

---

## 🚀 Despliegue a Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Subir el código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Conectar con Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Click en **"Deploy"**

3. **Configurar variables de entorno** (si las necesitas):
   - En el dashboard de Vercel, ve a **Settings > Environment Variables**
   - Agrega las variables de `.env.local`

### Opción 2: Deploy con Vercel CLI

1. **Instalar Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy a producción**:
   ```bash
   vercel --prod
   ```

---

## 🎯 Cómo Usar Boilr

1. **Accede a la aplicación** en `http://localhost:3000` (o tu URL de producción)
2. **Click en "Generar Mi Boilerplate"**
3. **Configura tu stack** en 4 pasos:
   - **Paso 1**: Elige tu frontend (Next.js o Remix)
   - **Paso 2**: Selecciona base de datos y autenticación
   - **Paso 3**: Añade pagos y deployment target
   - **Paso 4**: Revisa y genera
4. **Descarga el ZIP** con tu proyecto configurado
5. **Extrae y sigue el README** dentro del proyecto generado

---

## 🔧 Personalización

### Agregar Nuevos Templates

1. Edita `src/templates/base.ts`
2. Agrega nuevas funciones de template:
   ```typescript
   "nuevo-archivo.ts": (config: ProjectConfig) => `
     // Tu contenido aquí
   `
   ```

### Agregar Nuevas Opciones de Stack

1. Actualiza la interfaz en `src/types/config.ts`:
   ```typescript
   export interface ProjectConfig {
     frontend: "nextjs" | "remix" | "tu-nueva-opcion";
     // ...
   }
   ```

2. Agrega la opción en `src/app/generate/page.tsx`

### Modificar el Diseño

- **Colores**: Edita `src/app/globals.css` (variables CSS personalizadas)
- **Componentes**: Modifica `src/components/`
- **Animaciones**: Ajusta las configuraciones de Framer Motion en los componentes

---

## 📊 Verificación de Calidad

El proyecto ha sido verificado con:

- ✅ **TypeScript**: Tipado fuerte con interface `ProjectConfig`
- ✅ **ESLint**: 0 errores, 1 advertencia menor
- ✅ **Build**: Compilación exitosa
- ✅ **Dev Server**: Funcionando en puerto 3000

Para verificar:
```bash
npm run lint        # Verificar código
npm run build       # Probar build de producción
```

---

## 🐛 Troubleshooting

### Puerto 3000 en uso

Si ves el error "Port 3000 is in use":
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Error de lock en .next

Si ves "Unable to acquire lock":
```bash
rm -rf .next
npm run dev
```

### Errores de TypeScript

```bash
npm run lint
# Revisa los errores y corrige según las sugerencias
```

---

## 📝 Roadmap

- [ ] Integrar autenticación con Clerk/Supabase
- [ ] Añadir dashboard de usuario
- [ ] Implementar sistema de pagos con Stripe
- [ ] Agregar más templates (SaaS, E-commerce, Blog)
- [ ] Soporte para Vue/Nuxt
- [ ] Generación directa a GitHub

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 🙏 Agradecimientos

Construido con:
- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [JSZip](https://stuk.github.io/jszip/)

---

**¿Preguntas o problemas?** Abre un issue en GitHub o contacta al equipo.
