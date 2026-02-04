import { Terminal, Github, Rocket } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { DOCS_CONFIG } from "@/lib/docs-config";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <header className="border-b border-border/50 py-6 px-6 sticky top-0 bg-background/60 backdrop-blur-xl z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <Logo subtitle="Documentation" />
                    <nav className="flex items-center gap-8">
                        <Link href="/" className="text-sm font-bold text-foreground/40 hover:text-primary transition-colors">Volver al Inicio</Link>
                        <Link href="/generate" className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl text-sm font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                            <Terminal className="w-4 h-4" />
                            Empieza a Crear
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="flex-1 container mx-auto flex flex-col lg:flex-row gap-16 py-16 px-6">
                <aside className="w-72 hidden lg:block sticky top-32 h-fit">
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                                <span className="w-4 h-px bg-primary/30" />
                                Contenido
                            </p>
                            <nav className="space-y-2">
                                <Link
                                    href="/docs"
                                    className="group flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20 text-foreground/60 hover:text-primary font-bold transition-all"
                                >
                                    <span>Portal de Docs</span>
                                </Link>
                                {DOCS_CONFIG.map((doc) => (
                                    <Link
                                        key={doc.slug}
                                        href={`/docs/${doc.slug}`}
                                        className="group flex items-center justify-between px-4 py-3 rounded-2xl border border-transparent text-foreground/40 hover:text-primary hover:bg-primary/5 transition-all group/link"
                                    >
                                        <span>{doc.title}</span>
                                        <doc.icon className="w-4 h-4 opacity-0 group-hover/link:opacity-40 transition-all" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-card to-background border border-border rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Github className="w-12 h-12" />
                            </div>
                            <h4 className="font-bold text-sm mb-2">¿Prefieres leerlo en GitHub?</h4>
                            <p className="text-xs text-foreground/40 mb-4 leading-relaxed">Accede al repositorio original para ver el código fuente.</p>
                            <a href="https://github.com/Raishark/Boilr" target="_blank" className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                Ver Repositorio <Rocket className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 max-w-3xl min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
