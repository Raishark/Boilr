"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-border">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
                <Zap className="w-6 h-6 text-primary fill-primary" />
                <span>Boilr</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
                <Link href="/features" className="hover:text-primary transition-colors">Características</Link>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">Cómo funciona</Link>
                <Link href="/docs" className="hover:text-primary transition-colors">Documentación</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link
                    href="/generate"
                    className="px-6 py-2.5 text-sm font-black text-primary-foreground bg-primary rounded-2xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                    Empezar Gratis
                </Link>
            </div>
        </nav>
    );
}
