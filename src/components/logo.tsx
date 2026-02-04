"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    subtitle?: string;
    iconSize?: "sm" | "md" | "lg";
}

export function Logo({ className, subtitle, iconSize = "md" }: LogoProps) {
    const iconSizes = {
        sm: "w-8 h-8 rounded-lg p-1.5",
        md: "w-10 h-10 rounded-xl p-2",
        lg: "w-12 h-12 rounded-2xl p-2.5"
    };

    const logoSizes = {
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-7 h-7"
    };

    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <div className={cn(
                "bg-primary flex items-center justify-center group-hover:rotate-6 transition-all shadow-lg shadow-primary/20",
                iconSizes[iconSize]
            )}>
                <Terminal className={cn("text-primary-foreground animate-pulse", logoSizes[iconSize])} />
            </div>
            <div className="flex flex-col -gap-1">
                <span className={cn(
                    "font-black tracking-tighter leading-none",
                    iconSize === "sm" ? "text-xl" : "text-2xl"
                )}>BOILR</span>
                {subtitle && (
                    <span className="text-primary text-[10px] font-black tracking-widest uppercase">{subtitle}</span>
                )}
            </div>
        </Link>
    );
}
