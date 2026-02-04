"use client";

import { motion } from "framer-motion";
import { Ghost, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full" />

                <div className="container mx-auto max-w-2xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 bg-primary/10 rounded-[3rem] flex items-center justify-center mx-auto mb-10 border border-primary/20"
                    >
                        <Ghost className="w-16 h-16 text-primary animate-bounce-slow" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic uppercase"
                    >
                        404 <br />
                        <span className="text-white/20 not-italic">Extraviado</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/60 mb-12 max-w-md mx-auto leading-relaxed italic"
                    >
                        Parece que la página que buscas ha sido &quot;boileada&quot; fuera de existencia. O tal vez simplemente no existe aún.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                        >
                            <Home className="w-5 h-5" /> Regresar al Inicio
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" /> Volver Atrás
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
