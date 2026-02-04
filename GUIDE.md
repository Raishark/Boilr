# Guía de Uso de Boilr 📖

¡Bienvenido a la guía definitiva para sacar el máximo provecho de **Boilr**! Esta herramienta ha sido diseñada para que pases de la idea al código funcional en cuestión de minutos.

## 🛠️ El Flujo de Trabajo Maestro

> [!TIP]
> Boilr está diseñado para ser iterativo. Puedes cargar configuraciones anteriores pegando la URL compartida de un proyecto previo.

### 1. Configuración Estratégica
En el generador interactivo, no solo eliges herramientas; estás definiendo el ADN de tu aplicación.
- **Stack Core**: Recomendamos **Next.js 15** con **Supabase** para una puesta en marcha inmediata, o **Prisma** con **PostgreSQL** para proyectos que requieren un control total de la base de datos.
- **Autenticación**: **Clerk** ofrece la experiencia de integración más fluida y profesional del mercado actual.

### 2. Uso de Presets Inteligentes
Si prefieres ahorrar tiempo, utiliza nuestros **Presets** optimizados. Están diseñados por expertos para los casos de uso más comunes:
- **SaaS Starter**: El combo ganador de Autenticación, Base de Datos y Stripe.
- **Landing Page**: Enfoque en UI de alta conversión y Resend para captación de leads.
- **E-commerce**: Estructura de tienda robusta con persistencia de carrito y pagos.

### 3. URLs Compartibles 🔗
¿Trabajas en equipo? Configura tu stack exacto y presiona **"Compartir"**. El enlace resultante contiene toda la arquitectura codificada en Base64.
- Tu equipo visualizará exactamente la misma configuración al instante.
- Es la forma más rápida de colaborar sin necesidad de intercambiar archivos o commits pesados.

## 🚀 Despliegue en Tiempo Récord

Boilr es el aliado perfecto para ecosistemas basados en **Vercel**.

### Proceso de Lanzamiento
1. Genera y descarga tu paquete de código optimizado.
2. Sincroniza el código en tu repositorio Git.
3. Importa el proyecto en Vercel y define las variables de entorno necesarias.

> [!WARNING]
> La seguridad de tus datos es primordial. Revisa minuciosamente el archivo `.env.example` para asegurar que todas las llaves de API críticas estén configuradas antes de pasar a producción.

## 📂 Arquitectura del Código Generado

Tu nuevo proyecto vendrá con una arquitectura de clase mundial, modular y escalable:
- **`src/app`**: El motor de Next.js. Manejo de rutas, layouts y lógica de servidor.
- **`src/components`**: Componentes de interfaz atomizados y optimizados para Tailwind CSS.
- **`src/lib`**: Funciones de utilidad pura y clientes de base de datos (Prisma, Supabase).
- **`src/services`**: Capa de negocio para integraciones complejas como Stripe o servicios de Email.

## 🆘 ¿Necesitas más ayuda?

Si te encuentras con algún obstáculo técnico, no dudes en visitar nuestro portal de [Soporte](/docs/soporte).

---
*Boilr: Construye el futuro, un componente a la vez.*
