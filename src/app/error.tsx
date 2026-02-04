"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-red-500/10 blur-[120px] rounded-full" />

                <div className="container mx-auto max-w-2xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 bg-red-500/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-red-500/20"
                    >
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase"
                    >
                        Misión <br />
                        <span className="text-red-500 not-italic group">Fallida</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/60 mb-12 max-w-md mx-auto leading-relaxed italic"
                    >
                        Algo salió mal en los servidores de Boilr. Estamos trabajando para &quot;boilear&quot; este bug de inmediato.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => reset()}
                            className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                        >
                            <RefreshCcw className="w-5 h-5" /> Reintentar
                        </button>
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all"
                        >
                            <Home className="w-5 h-5" /> Regresar al Inicio
                        </Link>
                    </motion.div>

                    {error.digest && (
                        <p className="mt-12 text-xs text-foreground/20 font-mono">
                            Error ID: {error.digest}
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
