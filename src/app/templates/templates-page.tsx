"use client";

import { m } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Zap, Database, Shield, CreditCard, Rocket, Code, Globe, Server, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

const templates = [
    {
        id: "saas-starter",
        name: "SaaS Starter",
        description: "Plantilla completa para aplicaciones SaaS con autenticación, pagos y dashboard.",
        icon: Rocket,
        color: "primary",
        features: [
            "Next.js 15 + TypeScript",
            "Prisma + PostgreSQL",
            "Clerk Authentication",
            "Stripe Subscriptions",
            "Admin Dashboard",
            "Email Templates"
        ],
        stack: ["Next.js", "Prisma", "Clerk", "Stripe", "Tailwind"],
        popular: true
    },
    {
        id: "ecommerce",
        name: "E-commerce Pro",
        description: "Tienda online completa con carrito, pagos y gestión de inventario.",
        icon: CreditCard,
        color: "secondary",
        features: [
            "Product Management",
            "Shopping Cart",
            "Stripe Checkout",
            "Order Tracking",
            "Admin Panel",
            "SEO Optimized"
        ],
        stack: ["Next.js", "Supabase", "Stripe", "Tailwind"],
        popular: true
    },
    {
        id: "api-backend",
        name: "API Backend",
        description: "Backend robusto con autenticación, base de datos y documentación automática.",
        icon: Server,
        color: "accent",
        features: [
            "RESTful API",
            "JWT Authentication",
            "Prisma ORM",
            "API Documentation",
            "Rate Limiting",
            "Docker Ready"
        ],
        stack: ["Next.js API", "Prisma", "PostgreSQL", "Docker"],
        popular: false
    },
    {
        id: "landing-page",
        name: "Landing Page",
        description: "Página de aterrizaje moderna con animaciones y formularios de contacto.",
        icon: Globe,
        color: "primary",
        features: [
            "Responsive Design",
            "Framer Animations",
            "Contact Forms",
            "SEO Ready",
            "Analytics",
            "Fast Loading"
        ],
        stack: ["Next.js", "Tailwind", "Framer Motion"],
        popular: false
    },
    {
        id: "blog-cms",
        name: "Blog + CMS",
        description: "Sistema de blog con CMS headless y markdown support.",
        icon: Code,
        color: "secondary",
        features: [
            "MDX Support",
            "Content Management",
            "SEO Optimized",
            "RSS Feed",
            "Comments System",
            "Analytics"
        ],
        stack: ["Next.js", "MDX", "Prisma", "Tailwind"],
        popular: false
    },
    {
        id: "fullstack-app",
        name: "Full-Stack App",
        description: "Aplicación completa con frontend, backend, auth y base de datos.",
        icon: Database,
        color: "accent",
        features: [
            "Complete Auth Flow",
            "Database Integration",
            "API Routes",
            "File Uploads",
            "Real-time Updates",
            "Production Ready"
        ],
        stack: ["Next.js", "Prisma", "Supabase", "Clerk"],
        popular: true
    }
];

const colorMap: Record<string, string> = {
    primary: "text-primary border-primary/20 bg-primary/5",
    secondary: "text-secondary border-secondary/20 bg-secondary/5",
    accent: "text-accent border-accent/20 bg-accent/5"
};

export default function TemplatesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />

                <div className="container mx-auto max-w-6xl text-center">
                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-12 flex justify-center"
                    >
                        <Logo iconSize="lg" />
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                            <Zap className="w-3 h-3" />
                            6 PLANTILLAS DISPONIBLES
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Plantillas <span className="text-primary">Profesionales</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8">
                            Cada plantilla incluye configuración completa, documentación detallada y mejores prácticas de la industria.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Templates Grid */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templates.map((template, index) => {
                            const Icon = template.icon;
                            return (
                                <m.div
                                    key={template.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    {template.popular && (
                                        <div className="absolute -top-3 -right-3 z-10 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-lg">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all relative overflow-hidden">
                                        {/* Background Glow */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${colorMap[template.color]} blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500`} />

                                        {/* Icon */}
                                        <div className={`inline-flex p-3 rounded-2xl ${colorMap[template.color]} mb-4`}>
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {template.name}
                                        </h3>
                                        <p className="text-foreground/60 mb-6 leading-relaxed">
                                            {template.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {template.features.slice(0, 4).map((feature) => (
                                                <div key={feature} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                                    <span className="text-foreground/80">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {template.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs font-medium bg-white/5 border border-border rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                            href={`/generate?template=${template.id}`}
                                            className="block w-full py-3 text-center font-bold bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                        >
                                            Usar Plantilla
                                        </Link>
                                    </div>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿No encuentras lo que buscas?
                        </h2>
                        <p className="text-lg text-foreground/60 mb-8">
                            Crea una configuración personalizada con nuestro generador interactivo.
                        </p>
                        <Link
                            href="/generate"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                        >
                            <Zap className="w-5 h-5" />
                            Crear Configuración Personalizada
                        </Link>
                    </m.div>
                </div>
            </section>
        </main>
    );
}
