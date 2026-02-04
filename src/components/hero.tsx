"use client";

import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    V2.1.0 YA DISPONIBLE
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
                >
                    Tus proyectos listos en <span className="text-primary italic">minutos</span>, <br />
                    no en <span className="text-white/40 line-through">horas</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Boilr genera boilerplates ultra-específicos para freelancers. Next.js, Prisma,
                    Auth, Stripe y Deploy configurados al instante. Enfócate en la lógica, no en el setup.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/generate"
                        className="group flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                        Generar Mi Boilerplate
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/how-it-works"
                        className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all"
                    >
                        Ver Cómo Funciona
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {["Next.js 15 Ready", "Full Stack Setup", "CI/CD Configured", "Stripe Ready"].map((text) => (
                        <div key={text} className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium opacity-80">{text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
