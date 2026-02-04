"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Scale, ShieldCheck, FileText } from "lucide-react";

export default function LicensePage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card/30 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10" />

                        <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-8">
                            <div className="p-4 bg-primary/10 rounded-2xl">
                                <Scale className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-black tracking-tighter uppercase italic">Licencia <span className="text-primary not-italic">MIT</span></h1>
                                <p className="text-foreground/40 text-sm font-bold tracking-widest uppercase">Modified for Boilr & Raishark</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8 text-foreground/70 leading-relaxed font-medium italic">
                            <div className="bg-zinc-950/50 p-6 rounded-2xl border border-white/5 font-mono text-sm not-italic relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                                <pre className="text-foreground/80">
                                    {`MIT License (Modified)

Copyright (c) 2026 Raishark (https://github.com/Raishark)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

2. CREDIT REQUIREMENT: Any derivative work, fork, or public distribution of this 
   software (or its core generation logic) MUST include a visible and clear 
   attribution to the original author, "Raishark", with a link back to 
   https://github.com/Raishark.

3. COMMUNICATION RECOMMENDATION: While not strictly mandatory for private use, 
   it is highly encouraged to communicate any major changes or public variations 
   of this software to the original author before publishing.`}
                                </pre>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 group hover:border-secondary/30 transition-all">
                                    <ShieldCheck className="w-6 h-6 text-secondary mb-4" />
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-tight">Uso Libre</h3>
                                    <p className="text-xs">Puedes usar Boilr para proyectos comerciales y personales sin costes adicionales.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 group hover:border-primary/30 transition-all">
                                    <FileText className="w-6 h-6 text-primary mb-4" />
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-tight">Atribución Requerida</h3>
                                    <p className="text-xs">Debes mantener el crédito a Raishark en cualquier derivado público del código.</p>
                                </div>
                            </div>

                            <p className="text-xs opacity-40 text-center pt-12 border-t border-white/5">
                                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY...
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
