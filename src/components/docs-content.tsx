"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Settings,
    FolderTree,
    Sparkles,
    CheckCircle2,
    Terminal,
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DocSection {
    title: string;
    id: string;
    content: string;
    type: "hero" | "stack" | "setup" | "structure" | "generic";
}

export function DocsContent({ rawContent }: { rawContent: string }) {
    // Simple parser to split by H2s (##)
    const sections: DocSection[] = rawContent
        .split(/^##\s+/m)
        .filter(Boolean)
        .map((section, index) => {
            const lines = section.split("\n");
            const title = lines[0].trim();
            const content = lines.slice(1).join("\n").trim();
            const id = title.toLowerCase().replace(/\s+/g, "-");

            let type: DocSection["type"] = "generic";
            if (index === 0) type = "hero";
            else if (title.toLowerCase().includes("tech stack") || title.toLowerCase().includes("herramientas")) type = "stack";
            else if (title.toLowerCase().includes("setup") || title.toLowerCase().includes("start")) type = "setup";
            else if (title.toLowerCase().includes("structure") || title.toLowerCase().includes("estructura")) type = "structure";
            else if (title.toLowerCase().includes("deploy") || title.toLowerCase().includes("despliegue")) type = "hero";

            return { title, id, content, type };
        });

    const getIcon = (type: DocSection["type"]) => {
        switch (type) {
            case "hero": return Sparkles;
            case "stack": return Zap;
            case "setup": return Settings;
            case "structure": return FolderTree;
            default: return Info;
        }
    };

    const renderFormattedText = (text: string) => {
        // Basic regex-based parser for inline elements
        // Supports: **bold**, [link](url), `code`
        const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|`.*?`)/g);

        return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="text-primary font-black">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith("[") && part.includes("](")) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    return (
                        <a key={i} href={match[2]} target="_blank" className="text-primary hover:underline underline-offset-4 decoration-primary/30 font-bold">
                            {match[1]}
                        </a>
                    );
                }
            }
            if (part.startsWith("`") && part.endsWith("`")) {
                return (
                    <code key={part + i} className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-sm font-mono border border-primary/20 mx-1">
                        {part.slice(1, -1)}
                    </code>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="space-y-12 pb-24">
            {sections.map((section, idx) => {
                const Icon = getIcon(section.type);
                return (
                    <motion.section
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative"
                    >
                        <div className="flex gap-6 items-start">
                            <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500",
                                "bg-card border border-border group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]",
                                "relative z-10"
                            )}>
                                <Icon className="w-6 h-6 text-primary" />
                            </div>

                            <div className="flex-1 space-y-4 pt-1">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-black tracking-tight">{section.title}</h2>
                                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                                </div>

                                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:border-border transition-colors group-hover:bg-card/80">
                                    <div className="prose prose-invert prose-p:text-foreground/70 prose-headings:text-foreground prose-strong:text-primary max-w-none">
                                        {section.content.split("\n\n").map((para, pIdx) => {
                                            if (para.startsWith("```")) {
                                                return (
                                                    <div key={pIdx} className="my-6 bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-sm overflow-x-auto relative group/code">
                                                        <div className="absolute top-3 right-3 opacity-20 group-hover/code:opacity-100 transition-opacity">
                                                            <Terminal className="w-4 h-4" />
                                                        </div>
                                                        <pre className="text-primary-foreground/90 leading-relaxed whitespace-pre">
                                                            {para.replace(/```[a-z]*\n|```/g, "")}
                                                        </pre>
                                                    </div>
                                                );
                                            }

                                            if (para.startsWith("- ") || para.startsWith("* ")) {
                                                return (
                                                    <ul key={pIdx} className="space-y-3 my-4">
                                                        {para.split("\n").map((li, liIdx) => (
                                                            <li key={liIdx} className="flex items-start gap-3 text-foreground/70">
                                                                <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
                                                                <span className="text-lg leading-relaxed">{renderFormattedText(li.replace(/^[-*]\s+/, ""))}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            }

                                            return (
                                                <p key={pIdx} className="text-lg leading-relaxed text-foreground/60 mb-4 whitespace-pre-wrap">
                                                    {renderFormattedText(para)}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}
