"use client";

import { motion } from "framer-motion";
import { DOCS_CONFIG } from "@/lib/docs-config";
import Link from "next/link";
import { ChevronRight, Bell, Sparkles } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export default function DocsPortal() {
    return (
        <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
                >
                    <Bell className="w-3 h-3 fill-primary" />
                    Actualizaciones del Sistema
                </motion.div>
                <h1 className="text-5xl font-black tracking-tight mb-4 uppercase">
                    Portal de <span className="text-primary">Saber</span>
                </h1>
                <p className="text-xl text-foreground/80 max-w-xl leading-relaxed font-medium">
                    Accede a toda la inteligencia de Boilr. Documentos sincronizados, guías de élite y estándares de la comunidad.
                </p>
            </div>

            {/* Notification-style Feed */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {DOCS_CONFIG.map((doc, idx) => (
                    <motion.div key={doc.slug} variants={item}>
                        <Link
                            href={`/docs/${doc.slug}`}
                            className="group flex items-center gap-6 p-6 rounded-[2rem] bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card/50 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />

                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                                <doc.icon className="w-7 h-7 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-black text-lg tracking-tight uppercase">{doc.title}</h3>
                                    {idx === 0 && (
                                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[8px] font-black uppercase tracking-tighter border border-secondary/20">
                                            <Sparkles className="w-2 h-2 fill-secondary" /> Nuevo
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-foreground/60 font-medium pr-8">{doc.description}</p>
                            </div>

                            <div className="p-2 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all">
                                <ChevronRight className="w-5 h-5 text-primary" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Tip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 p-8 rounded-3xl border border-dashed border-border text-center"
            >
                <p className="text-sm text-foreground/20 font-bold uppercase tracking-widest italic">
                    Toda la documentación está disponible sin conexión una vez cargada.
                </p>
            </motion.div>
        </div>
    );
}
