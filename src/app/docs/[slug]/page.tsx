import { getDocContent } from "@/lib/docs-server";
import { DocsContent } from "@/components/docs-content";
import { DOCS_CONFIG } from "@/lib/docs-config";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return DOCS_CONFIG.map((doc) => ({
        slug: doc.slug,
    }));
}

export default async function DocDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doc = DOCS_CONFIG.find(d => d.slug === slug);

    if (!doc) {
        notFound();
    }

    const content = await getDocContent(slug);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                    Documento de Boilr
                </div>
                <h1 className="text-5xl font-black tracking-tighter mb-4 italic uppercase">
                    {doc.title.split(" ").map((word, i, arr) => (
                        <span key={i} className={i === arr.length - 1 ? "text-primary not-italic" : ""}>
                            {word}{" "}
                        </span>
                    ))}
                </h1>
                <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed italic">
                    {doc.description}
                </p>
            </div>

            <DocsContent rawContent={content} />
        </div>
    );
}
