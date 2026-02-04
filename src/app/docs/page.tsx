import { DocsContent } from "@/components/docs-content";
import { Github } from "lucide-react";

async function getReadme() {
    try {
        const res = await fetch("https://raw.githubusercontent.com/Raishark/Boilr/main/README.md", {
            next: { revalidate: 3600 }
        });
        if (!res.ok) return "# Error\nNo se pudo cargar el README desde GitHub.";
        return res.text();
    } catch {
        return "# Offline Mode\nNo se pudo conectar con el repositorio. Por favor, verifica tu conexión.";
    }
}

export default async function DocsPage() {
    const readme = await getReadme();

    return (
        <div className="animate-in fade-in duration-1000">
            <div className="mb-16 p-8 bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                    <Github className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Live Doc Sync
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter mb-4 bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
                        Documentación <br />
                        <span className="text-primary">Oficial de Boilr</span>
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-xl leading-relaxed">
                        Explora guías, convenciones y el stack tecnológico completo sincronizado en tiempo real.
                    </p>
                </div>
            </div>

            <DocsContent rawContent={readme} />
        </div>
    );
}
