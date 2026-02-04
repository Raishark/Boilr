import { Github, Info } from "lucide-react";

async function getReadme() {
    const res = await fetch("https://raw.githubusercontent.com/Raishark/Boilr/main/README.md", { next: { revalidate: 3600 } });
    if (!res.ok) return "No se pudo cargar el README desde GitHub.";
    return res.text();
}

export default async function DocsPage() {
    const readme = await getReadme();

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-1">Documentación Sincronizada</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                        Esta información se lee directamente desde el repositorio oficial de <span className="font-bold text-foreground">Raishark/Boilr</span> para garantizar que siempre esté al día.
                    </p>
                </div>
            </div>

            <div className="prose prose-invert max-w-none">
                {/* Simple rendering of markdown as preformatted text for now, 
            avoiding extra heavy libraries unless requested, 
            but formatted to look like a clean technical document */}
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4">
                        <span className="text-[10px] font-black bg-foreground/5 text-foreground/40 px-2 py-1 rounded-md uppercase tracking-widest">Git: main</span>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-foreground/80 leading-relaxed text-lg">
                        {readme}
                    </pre>
                </div>
            </div>

            <div className="flex items-center gap-3 p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <Info className="w-5 h-5 text-secondary" />
                <p className="text-sm text-foreground/50 italic">
                    Si prefieres leerlo directamente en GitHub, puedes hacerlo en{" "}
                    <a href="https://github.com/Raishark/Boilr" className="text-primary hover:underline" target="_blank">este enlace</a>.
                </p>
            </div>
        </div>
    );
}
