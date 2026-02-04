"use client";

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket, Smartphone, Cpu, Database, CreditCard } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Stack Moderno",
        desc: "Next.js 15, React 19 y TypeScript. La base más sólida para escalar sin límites.",
        icon: Rocket,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "UI Premium Ready",
        desc: "Componentes base (Navbar, Hero, Footer) con diseño de alto impacto y soporte para Dark Mode.",
        icon: Smartphone,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Auth Multi-opción",
        desc: "Elige entre Clerk, Supabase Auth o NextAuth. Configurado y listo para usar.",
        icon: Shield,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        title: "Bases de Datos",
        desc: "Soporte nativo para Prisma, Supabase (PostgreSQL) y MongoDB. Con Docker opcional.",
        icon: Database,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Pagos y Email",
        desc: "Integración con Stripe para suscripciones y Resend para notificaciones automáticas.",
        icon: CreditCard,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        title: "Boilr Insights",
        desc: "Un asistente inteligente que valida tu configuración y te da consejos antes de generar.",
        icon: Cpu,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    }
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_20%)] opacity-20 blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
                        >
                            <Zap className="w-3 h-3 fill-primary" />
                            Potencial Ilimitado
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase"
                        >
                            Características <br />
                            <span className="text-primary not-italic">de Élite</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
                        >
                            Todo lo que Boilr inyecta en tu proyecto para que pases de la idea al despliegue en minutos, no semanas.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-card/30 border border-border hover:border-primary/50 transition-all relative overflow-hidden backdrop-blur-sm"
                            >
                                <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <f.icon className={`w-7 h-7 ${f.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                <p className="text-foreground/60 leading-relaxed italic">{f.desc}</p>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fiber.png')] opacity-5 pointer-events-none" />
                        <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">¿Listo para empezar?</h2>
                        <p className="text-foreground/60 mb-10 max-w-xl mx-auto">Únete a cientos de desarrolladores que ya están construyendo el futuro con Boilr.</p>
                        <Link
                            href="/generate"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30"
                        >
                            Generar mi Proyecto <Rocket className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
