# Guía de Uso de Boilr 📖

¡Bienvenido a la guía definitiva para sacar el máximo provecho de **Boilr**! Esta herramienta ha sido diseñada para que pases de la idea al código funcional en cuestión de minutos.

## 🛠️ El Flujo de Trabajo

### 1. Configuración Estratégica
En el generador, no solo eliges herramientas, eliges una arquitectura.
- **Stack Core**: Recomendamos **Next.js 15** con **Supabase** para proyectos rápidos, o **Prisma** si necesitas un control total de la base de datos.
- **Autenticación**: **Clerk** ofrece la mejor UX, mientras que **Supabase Auth** es ideal si buscas una integración nativa con tu base de datos.

### 2. Uso de Presets
Si no quieres configurar paso a paso, usa nuestros **Presets** en la página de inicio o en plantillas. Están diseñados por expertos para casos de uso comunes (SaaS, E-commerce, Landing).

### 3. URLs Compartibles 🔗
¿Trabajas en equipo? Configura el stack y haz clic en **"Compartir"**. El enlace resultante contiene toda la configuración codificada. Pásalo a tu compañero y él verá exactamente lo mismo que tú. Sin bases de datos ni cuentas.

## 🚀 Despliegue en 3 Minutos

Boilr está optimizado para **Vercel**.
1. Genera tu proyecto y descarga el ZIP.
2. Sube el código a un repositorio de GitHub.
3. Importa el proyecto en Vercel.

> [!TIP]
> No olvides configurar las Variables de Entorno en el panel de Vercel. Boilr genera un archivo `.env.example` con todo lo que necesitas.

## 📂 Estructura del Código

Tu proyecto generado tendrá una estructura limpia y escalable:
- `src/app`: Rutas y Server Components.
- `src/components`: UI atomizada con Tailwind.
- `src/lib`: Clientes de API y utilidades compartidas.
- `src/services`: Lógica de negocio (ej. lógica de Stripe).

## 🆘 ¿Necesitas más ayuda?

Si te quedas atascado o encuentras un comportamiento extraño, revisa nuestro archivo de [Soporte](SUPPORT.md).

---
*Boilr: Construye el futuro, un componente a la vez.*
