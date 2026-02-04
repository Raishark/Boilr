"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Terminal } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                                <Terminal className="w-6 h-6 text-white text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">BOILR</span>
                        </Link>
                        <p className="text-foreground/60 text-lg max-w-sm mb-8">
                            El generador de boilerplates definitivo para desarrolladores modernos. Construye más rápido, escala mejor.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Producto</h4>
                        <ul className="space-y-4 text-foreground/60">
                            <li><Link href="/generate" className="hover:text-primary transition-colors">Generador</Link></li>
                            <li><Link href="/#features" className="hover:text-primary transition-colors">Características</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Recursos</h4>
                        <ul className="space-y-4 text-foreground/60">
                            <li><a href="#" className="hover:text-primary transition-colors">Documentación</a></li>
                            <li><Link href="/CONTRIBUTING.md" className="hover:text-primary transition-colors">Contribuir</Link></li>
                            <li><Link href="/CHANGELOG.md" className="hover:text-primary transition-colors">Changelog</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Soporte</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-foreground/40">
                        © {new Date().getFullYear()} Boilr. Todos los derechos reservados. v1.4.0
                    </p>
                    <div className="flex gap-8 text-sm text-foreground/40">
                        <Link href="/LICENSE" className="hover:text-foreground transition-colors">Licencia MIT</Link>
                        <Link href="/CODE_OF_CONDUCT.md" className="hover:text-foreground transition-colors">Código de Conducta</Link>
                        <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
