"use client";

import { Check, Copy } from "lucide-react";
import { useClipboard } from "@/hooks/use-clipboard";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    text: string;
    className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
    const { hasCopied, copyToClipboard } = useClipboard();

    return (
        <button
            onClick={() => copyToClipboard(text)}
            className={cn(
                "p-2 rounded-lg transition-all border shrink-0",
                hasCopied
                    ? "bg-secondary/10 border-secondary/20 text-secondary"
                    : "bg-white/5 border-white/10 text-foreground/40 hover:text-primary hover:border-primary/30",
                className
            )}
            title={hasCopied ? "¡Copiado!" : "Copiar al portapapeles"}
        >
            {hasCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
    );
}
