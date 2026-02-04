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
                            <a href="https://github.com/Raishark/Boilr" target="_blank" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors tooltip" title="Github Repo">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/raishark" target="_blank" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/raishark" target="_blank" className="p-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Producto</h4>
                        <ul className="space-y-4 text-foreground/60">
                            <li><Link href="/generate" className="hover:text-primary transition-colors">Generador</Link></li>
                            <li><Link href="/features" className="hover:text-primary transition-colors">Características</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-primary transition-colors">Cómo Funciona</Link></li>
                            <li><a href="https://github.com/Raishark/Boilr" target="_blank" className="hover:text-primary transition-colors">Open Source</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Recursos</h4>
                        <ul className="space-y-4 text-foreground/60">
                            <li><a href="https://github.com/Raishark/Boilr#readme" target="_blank" className="hover:text-primary transition-colors">Guías</a></li>
                            <li><a href="https://github.com/Raishark/Boilr/blob/main/CONTRIBUTING.md" target="_blank" className="hover:text-primary transition-colors">Contribuir</a></li>
                            <li><a href="https://github.com/Raishark/Boilr/blob/main/CHANGELOG.md" target="_blank" className="hover:text-primary transition-colors">Changelog</a></li>
                            <li><a href="https://github.com/Raishark/Boilr/issues" target="_blank" className="hover:text-primary transition-colors">Soporte</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-foreground/40">
                        © {new Date().getFullYear()} Boilr. Todos los derechos reservados. v2.0.0
                    </p>
                    <div className="flex gap-8 text-sm text-foreground/40">
                        <Link href="/LICENSE" className="hover:text-foreground transition-colors">Licencia MIT</Link>
                        <a href="https://github.com/Raishark/Boilr/blob/main/CODE_OF_CONDUCT.md" target="_blank" className="hover:text-foreground transition-colors">Código de Conducta</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
