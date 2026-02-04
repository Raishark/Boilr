"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Terminal } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-border">
            <Logo iconSize="sm" />

            <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 text-center">
                <Link href="/features" className="hover:text-primary transition-colors">Características</Link>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">Cómo funciona</Link>
                <Link href="/docs" className="hover:text-primary transition-colors">Documentación</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link
                    href="/generate"
                    className="px-6 py-2.5 text-xs font-black text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 uppercase tracking-widest"
                >
                    <Terminal className="w-4 h-4" />
                    <span className="hidden sm:inline">Empezar Gratis</span>
                    <span className="sm:hidden">Start</span>
                </Link>
            </div>
        </nav>
    );
}
