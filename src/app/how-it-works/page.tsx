"use client";

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { Search, Cog, Rocket, Ship, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        title: "1. Configura",
        desc: "Elige tu stack: Next.js, bases de datos, autenticación y más. Todo visual, sin código manual.",
        icon: Cog,
    },
    {
        title: "2. Visualiza",
        desc: "Recibe recomendaciones dinámicas de Boilr Insights para asegurar un stack coherente.",
        icon: Search,
    },
    {
        title: "3. Genera",
        desc: "Boilr construye una estructura de archivos profesional con componentes UI incluidos.",
        icon: Rocket,
    },
    {
        title: "4. Despliega",
        desc: "Descarga tu ZIP, instala dependencias y lanza a producción en tiempo récord.",
        icon: Ship,
    }
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic"
                        >
                            Cómo <span className="text-primary not-italic">Funciona</span>
                        </motion.h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            Diseñado para ser simple, potente y ridículamente rápido. Del concepto al código en 60 segundos.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line for desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

                        <div className="space-y-24">
                            {steps.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 text-center md:text-left">
                                        <div className={`w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-8 mx-auto ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0 md:ml-auto'}`}>
                                            <s.icon className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{s.title}</h3>
                                        <p className="text-lg text-foreground/60 leading-relaxed italic">{s.desc}</p>
                                    </div>

                                    <div className="w-4 h-4 rounded-full bg-primary relative z-10 shadow-[0_0_20px_rgba(var(--primary),0.5)] hidden md:block" />

                                    <div className="flex-1 hidden md:block">
                                        {/* Placeholder for visual aid/image */}
                                        <div className="aspect-video bg-card/50 border border-border rounded-[2.5rem] flex items-center justify-center grayscale opacity-30 group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-20 group-hover:opacity-50 transition-opacity">Visual Preview {i + 1}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-32 text-center"
                    >
                        <Link
                            href="/generate"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-foreground text-background rounded-3xl font-black text-xl hover:bg-primary hover:text-primary-foreground transition-all duration-500 overflow-hidden"
                        >
                            <span className="relative z-10 uppercase tracking-tighter">Pruébalo Tú Mismo</span>
                            <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
