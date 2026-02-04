import { Terminal } from "lucide-react";
import Link from "next/link";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <header className="border-b border-border py-4 px-6 sticky top-0 bg-background/80 backdrop-blur-md z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                            <Terminal className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-black tracking-tighter">BOILR <span className="text-primary tracking-normal text-sm font-bold ml-1">DOCS</span></span>
                    </Link>
                    <nav className="flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Volver al Inicio</Link>
                        <Link href="/generate" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                            <Terminal className="w-4 h-4" />
                            Generar Proyecto
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="flex-1 container mx-auto flex gap-12 py-12 px-6">
                <aside className="w-64 hidden lg:block sticky top-24 h-fit">
                    <nav className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-4 px-3">Repositorio Central</p>
                        <Link href="/docs" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary font-bold transition-all">
                            README.md
                        </Link>
                        <Link href="/docs/contributing" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card text-foreground/60 hover:text-foreground transition-all">
                            Contributing
                        </Link>
                        <Link href="/docs/changelog" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card text-foreground/60 hover:text-foreground transition-all">
                            Changelog
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 max-w-3xl">
                    {children}
                </main>
            </div>
        </div>
    );
}
