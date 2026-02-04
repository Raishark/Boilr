# Guía de Uso de Boilr 📖

¡Bienvenido a la guía definitiva para sacar el máximo provecho de **Boilr**! Esta herramienta ha sido diseñada para que pases de la idea al código funcional en cuestión de minutos.

## 🛠️ El Flujo de Trabajo Maestro

> [!TIP]
> Boilr está diseñado para ser iterativo. Puedes cargar configuraciones anteriores pegando la URL compartida.

### 1. Configuración Estratégica
En el generador interactivo, no solo eliges herramientas; estás definiendo el ADN de tu aplicación.
- **Stack Core**: Recomendamos **Next.js 15** con **Supabase** para proyectos rápidos, o **Prisma** con **PostgreSQL** si necesitas control total de esquemas.
- **Autenticación**: **Clerk** ofrece la mejor experiencia de usuario (UX) fuera de la caja.

### 2. Uso de Presets Inteligentes
Si no quieres configurar paso a paso, utiliza nuestros **Presets** optimizados. Están diseñados por expertos para casos comunes:
- **SaaS Starter**: Auth + DB + Stripe.
- **Landing Page**: UI + Resend para captación.
- **E-commerce**: Estructura de tienda con persistencia.

### 3. URLs Compartibles 🔗
¿Trabajas en equipo? Configura el stack y presiona **"Compartir"**. El enlace resultante contiene toda la configuración en Base64.
- Tu compañero verá exactamente lo mismo.
- Ideal para revisiones técnicas rápidas sin commits pesados.

## 🚀 Despliegue en Tiempo Récord

Boilr es el mejor amigo de **Vercel**.

### Proceso de Lanzamiento
1. Genera y descarga tu ZIP.
2. Sube el código a tu repositorio.
3. Importa en Vercel y configura las variables de entorno.

> [!WARNING]
> La seguridad es clave. Revisa siempre el archivo `.env.example` para asegurarte de que todas las API Keys requeridas estén configuradas en producción.

## 📂 Estructura del Código Generado

Tu proyecto tendrá una arquitectura limpia y modular:
- **`src/app`**: El corazón de Next.js. Rutas y lógica de servidor.
- **`src/components`**: Tus piezas de UI atomizadas y listas para Tailwind.
- **`src/lib`**: Utilidades puras y clientes de integración (Prisma, Supabase).
- **`src/services`**: Capa de negocio para integraciones complejas (Stripe API, Emails).

## 🆘 ¿Necesitas más ayuda?

Si te encuentras con algún obstáculo, revisa nuestro portal de [Soporte](/docs/soporte).

---
*Boilr: Construye el futuro, un componente a la vez.*
