"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { CheckCircle2, Terminal, Quote, Info, AlertTriangle, Lightbulb, Construction, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Components } from "react-markdown";

/**
 * Custom components for ReactMarkdown to ensure professional styling and high legibility.
 * Removed excessive italics and adjusted tracking for a cleaner reading experience.
 */
const MarkdownComponents: Components = {
    // Headings
    h2: ({ children }) => (
        <div className="group/h2 mt-16 mb-8 text-left">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-1.5 h-8 bg-primary rounded-full transition-all group-hover/h2:h-10" />
                <h2 className="text-3xl font-black tracking-tight uppercase text-foreground">
                    {children}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
        </div>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl font-bold text-foreground mt-10 mb-4 uppercase tracking-normal flex items-center gap-2">
            <span className="w-2 h-2 bg-primary/40 rounded-full" />
            {children}
        </h3>
    ),
    // Paragraphs & Text
    p: ({ children }) => {
        // Detect GitHub-style alerts: > [!NOTE]
        const content = React.Children.toArray(children);
        if (content.length > 0 && typeof content[0] === 'string' && content[0].startsWith('[!')) {
            const match = content[0].match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/);
            if (match) {
                const type = match[1] as 'NOTE' | 'TIP' | 'IMPORTANT' | 'WARNING' | 'CAUTION';
                const cleanContent = [...content];
                cleanContent[0] = (cleanContent[0] as string).replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/, '');

                const stylesMap = {
                    NOTE: { icon: Info, color: "text-blue-500", bg: "bg-blue-500/5", border: "border-blue-500/20" },
                    TIP: { icon: Lightbulb, color: "text-emerald-500", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
                    IMPORTANT: { icon: Star, color: "text-primary", bg: "bg-primary/5", border: "border-primary/20" },
                    WARNING: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/5", border: "border-amber-500/20" },
                    CAUTION: { icon: Construction, color: "text-red-500", bg: "bg-red-500/5", border: "border-red-500/20" },
                };

                const styles = stylesMap[type] || stylesMap.NOTE;
                const Icon = styles.icon;

                return (
                    <div className={cn("my-6 p-6 rounded-3xl border flex gap-4 items-start", styles.bg, styles.border)}>
                        <Icon className={cn("w-6 h-6 shrink-0 mt-1", styles.color)} />
                        <div className="flex-1 text-lg leading-relaxed text-foreground/90 font-medium">
                            {cleanContent}
                        </div>
                    </div>
                );
            }
        }

        return (
            <p className="text-lg md:text-xl leading-[1.8] text-foreground/80 mb-6 font-medium max-w-prose">
                {children}
            </p>
        );
    },
    // Lists
    ul: ({ children }) => (
        <ul className="space-y-4 my-8">{children}</ul>
    ),
    li: ({ children }) => (
        <li className="flex items-start gap-4 text-foreground/80 group/li">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover/li:bg-primary/20">
                <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg md:text-xl leading-relaxed max-w-prose">{children}</span>
        </li>
    ),
    // Code blocks
    code: ({ inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '');
        if (!inline && match) {
            return (
                <div className="my-8 bg-zinc-950/80 rounded-[2rem] p-8 border border-white/5 font-mono text-sm overflow-x-auto relative group/code shadow-2xl">
                    <div className="absolute top-4 right-4 opacity-20 group-hover/code:opacity-100 transition-opacity">
                        <Terminal className="w-5 h-5" />
                    </div>
                    <pre className="text-primary/90 leading-relaxed whitespace-pre font-mono">
                        {String(children).replace(/\n$/, '')}
                    </pre>
                </div>
            );
        }
        return (
            <code className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-sm font-mono border border-primary/20 mx-1" {...props}>
                {children}
            </code>
        );
    },
    // Blockquotes
    blockquote: ({ children }) => (
        <div className="relative py-6 pl-10 pr-6 rounded-[2rem] bg-card/50 border-l-4 border-primary my-8 group/quote">
            <Quote className="absolute top-6 left-3 w-5 h-5 text-primary/40" />
            <div className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
                {children}
            </div>
        </div>
    ),
    // Table styling
    table: ({ children }) => (
        <div className="my-8 overflow-hidden rounded-3xl border border-border bg-card/10 backdrop-blur-sm">
            <table className="w-full border-collapse text-left text-sm md:text-base">{children}</table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-primary/10 border-b border-border text-primary font-black uppercase tracking-wider">{children}</thead>
    ),
    th: ({ children }) => (
        <th className="p-4 md:p-6">{children}</th>
    ),
    td: ({ children }) => (
        <td className="p-4 md:p-6 border-b border-border/50 text-foreground/80">{children}</td>
    ),
    // Links
    a: ({ children, href }) => (
        <a
            href={href}
            target={href?.startsWith('http') ? "_blank" : undefined}
            className="text-primary hover:underline underline-offset-4 decoration-primary/30 font-bold transition-all"
        >
            {children}
        </a>
    ),
    // Strong/Bold
    strong: ({ children }: any) => (
        <strong className="text-primary font-black">{children}</strong>
    ),
};

export function DocsContent({ rawContent }: { rawContent: string }) {
    // Filter out the main H1 title since it's rendered by the parent
    const cleanContent = rawContent.replace(/^#\s+.*$/m, "").trim();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-24 max-w-none"
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MarkdownComponents}
            >
                {cleanContent}
            </ReactMarkdown>
        </motion.div>
    );
}
