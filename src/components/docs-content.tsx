"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Settings,
    FolderTree,
    Sparkles,
    CheckCircle2,
    Terminal,
    Info,
    Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DocSection {
    title: string;
    id: string;
    content: string;
    type: "hero" | "stack" | "setup" | "structure" | "generic";
}

export function DocsContent({ rawContent }: { rawContent: string }) {
    // Parser for splitting by H2 (##)
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
        <div className="space-y-16 pb-24">
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
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Icon Column (Desktop) */}
                            <div className={cn(
                                "hidden md:flex w-14 h-14 rounded-2xl items-center justify-center shrink-0 transition-all duration-500 sticky top-40",
                                "bg-card border border-border group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]",
                                "relative z-10"
                            )}>
                                <Icon className="w-7 h-7 text-primary" />
                            </div>

                            <div className="flex-1 space-y-6 pt-1">
                                <div className="flex items-center gap-4">
                                    {/* Icon (Mobile only) */}
                                    <div className="md:hidden w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">{section.title}</h2>
                                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                                </div>

                                <div className="space-y-6">
                                    {section.content.split("\n\n").map((para, pIdx) => {
                                        // Code Blocks
                                        if (para.trim().startsWith("```")) {
                                            return (
                                                <div key={pIdx} className="my-8 bg-zinc-950/80 rounded-[2rem] p-8 border border-white/5 font-mono text-sm overflow-x-auto relative group/code shadow-2xl">
                                                    <div className="absolute top-4 right-4 opacity-20 group-hover/code:opacity-100 transition-opacity">
                                                        <Terminal className="w-5 h-5" />
                                                    </div>
                                                    <pre className="text-primary/90 leading-relaxed whitespace-pre font-mono">
                                                        {para.replace(/```[a-z]*\n|```/g, "").trim()}
                                                    </pre>
                                                </div>
                                            );
                                        }

                                        // Headings (H3)
                                        if (para.trim().startsWith("###")) {
                                            return (
                                                <h3 key={pIdx} className="text-xl font-bold text-foreground mt-8 mb-4 uppercase tracking-tight flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                                    {para.trim().replace(/^###\s+/, "")}
                                                </h3>
                                            );
                                        }

                                        // Blockquotes
                                        if (para.trim().startsWith(">")) {
                                            return (
                                                <div key={pIdx} className="relative py-6 pl-10 pr-6 rounded-[2rem] bg-primary/5 border-l-4 border-primary italic my-6 group/quote">
                                                    <Quote className="absolute top-6 left-3 w-5 h-5 text-primary/40" />
                                                    <p className="text-lg text-foreground/80 leading-relaxed">
                                                        {renderFormattedText(para.replace(/^>\s?/, ""))}
                                                    </p>
                                                </div>
                                            );
                                        }

                                        // Lists
                                        if (para.trim().match(/^[-*]\s+/)) {
                                            return (
                                                <ul key={pIdx} className="space-y-4 my-6">
                                                    {para.trim().split("\n").map((li, liIdx) => (
                                                        <li key={liIdx} className="flex items-start gap-4 text-foreground/70 group/li">
                                                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover/li:bg-primary/20">
                                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                            </div>
                                                            <span className="text-lg leading-relaxed">{renderFormattedText(li.replace(/^[-*]\s+/, ""))}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        // Paragraphs
                                        return (
                                            <p key={pIdx} className="text-xl leading-[1.8] text-foreground/60 mb-6 font-medium italic whitespace-pre-wrap">
                                                {renderFormattedText(para)}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}
