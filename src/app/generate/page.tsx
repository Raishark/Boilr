"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CreditCard, Cloud, ArrowRight, ArrowLeft, CheckCircle2, Rocket, LucideIcon, Server, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { generateBoilerplate } from "@/services/generator";
import { ProjectConfig } from "@/types/config";

const STEPS = [
    { id: "stack", name: "Stack", icon: Server },
    { id: "infra", name: "Infra", icon: Database },
    { id: "features", name: "Features", icon: Zap },
    { id: "review", name: "Review", icon: CheckCircle2 },
];

export default function GeneratePage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [config, setConfig] = useState<ProjectConfig>({
        frontend: "nextjs",
        db: "supabase",
        auth: "supabase",
        payments: "stripe",
        deploy: "vercel",
        docker: true,
    });

    const [isGenerating, setIsGenerating] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            await generateBoilerplate(config);
            setIsSuccess(true);
        } catch (error) {
            console.error("Generation failed:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    const nextStep = () => {
        if (currentStep === STEPS.length - 1) {
            handleGenerate();
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
        }
    };
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    interface OptionButtonProps {
        id: string;
        name: string;
        desc: string;
        icon?: LucideIcon;
        type: keyof ProjectConfig;
    }

    const OptionButton = ({ id, name, desc, icon: Icon, type }: OptionButtonProps) => {
        const isSelected = config[type] === id;
        return (
            <button
                onClick={() => setConfig({ ...config, [type]: id })}
                className={cn(
                    "p-6 rounded-2xl border-2 text-left transition-all group relative overflow-hidden",
                    isSelected ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-border hover:border-border/80"
                )}
            >
                <div className="flex items-start gap-4">
                    {Icon && <Icon className={cn("w-6 h-6 mt-1", isSelected ? "text-primary" : "text-foreground/40")} />}
                    <div>
                        <h4 className="font-bold mb-1">{name}</h4>
                        <p className="text-sm opacity-60 text-foreground/60">{desc}</p>
                    </div>
                </div>
                {isSelected && (
                    <div className="absolute top-2 right-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                )}
            </button>
        );
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Progress Bar */}
                <div className="flex justify-between mb-16 relative px-4">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -z-10 -translate-y-1/2 mx-10" />
                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        const isActive = i <= currentStep;
                        const isCompleted = i < currentStep;
                        return (
                            <div key={step.id} className="flex flex-col items-center gap-3">
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative",
                                    isActive ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-background border-border text-foreground/40",
                                    isCompleted && "bg-secondary border-secondary shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                )}>
                                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                                </div>
                                <span className={cn("text-xs font-bold tracking-tight", isActive ? "text-primary" : "text-foreground/40")}>
                                    {step.name.toUpperCase()}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Form Content */}
                <div className="bg-card border border-border rounded-[3rem] p-8 md:p-12 min-h-[550px] flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-black/50">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] -z-10" />

                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                    <CheckCircle2 className="w-12 h-12 text-secondary" />
                                </div>
                                <h2 className="text-4xl font-extrabold mb-4 tracking-tight">¡Proyecto Generado!</h2>
                                <p className="text-foreground/60 text-lg mb-10 max-w-md mx-auto">
                                    Tu boilerplate ha sido descargado. Revisa el archivo <code className="text-primary">README.md</code> dentro del ZIP para los pasos de configuración detallados.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/"
                                        className="px-8 py-3 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all"
                                    >
                                        Volver al Inicio
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIsSuccess(false);
                                            setCurrentStep(0);
                                        }}
                                        className="px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                    >
                                        Crear Otro
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1"
                            >
                                {currentStep === 0 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-4xl font-extrabold mb-3 tracking-tight">Stack Principal</h2>
                                        <p className="text-foreground/60 text-lg mb-10">Elige los cimientos de tu aplicación.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <OptionButton
                                                type="frontend" id="nextjs" name="Next.js 15"
                                                desc="App Router, Server Components y máximo rendimiento."
                                                icon={Rocket}
                                            />
                                            <OptionButton
                                                type="frontend" id="remix" name="Remix"
                                                desc="Enfoque en estándares web y mutaciones fluidas."
                                                icon={Zap}
                                            />
                                        </div>
                                    </div>
                                )}

                                {currentStep === 1 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-4xl font-extrabold mb-3 tracking-tight">Infraestructura</h2>
                                        <p className="text-foreground/60 text-lg mb-10">Gestiona tus datos y usuarios.</p>

                                        <div className="space-y-10">
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Base de Datos</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <OptionButton type="db" id="supabase" name="Supabase" desc="PostgreSQL + Realtime." />
                                                    <OptionButton type="db" id="mongodb" name="MongoDB" desc="NoSQL flexible." />
                                                    <OptionButton type="db" id="prisma" name="Prisma + Docker" desc="PostgreSQL local." />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Autenticación</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <OptionButton type="auth" id="supabase" name="Supabase Auth" desc="Integración nativa." />
                                                    <OptionButton type="auth" id="clerk" name="Clerk" desc="UX premium instantánea." />
                                                    <OptionButton type="auth" id="nextauth" name="NextAuth" desc="Control total open-source." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-4xl font-extrabold mb-3 tracking-tight">Funcionalidades Hero</h2>
                                        <p className="text-foreground/60 text-lg mb-10">Lo que hace que un proyecto pase de hobby a negocio.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <OptionButton
                                                type="payments" id="stripe" name="Stripe"
                                                desc="Suscripciones, webhooks y checkout listos."
                                                icon={CreditCard}
                                            />
                                            <OptionButton
                                                type="deploy" id="vercel" name="Vercel"
                                                desc="Deploy optimizado con un clic."
                                                icon={Cloud}
                                            />
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-6">
                                        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-secondary" />
                                        </div>
                                        <h2 className="text-4xl font-extrabold mb-3 tracking-tight">¡Todo Listo!</h2>
                                        <p className="text-foreground/60 text-lg mb-10 max-w-md mx-auto">
                                            Tu boilerplate ultra-específico está preparado para ser generado.
                                        </p>

                                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-left max-w-md mx-auto mb-8">
                                            <h4 className="text-sm font-bold text-foreground/40 uppercase mb-4 px-2">Configuración Elegida</h4>
                                            <div className="space-y-3">
                                                {[
                                                    { label: "Frontend", value: config.frontend },
                                                    { label: "Database", value: config.db },
                                                    { label: "Auth", value: config.auth },
                                                    { label: "Payments", value: config.payments },
                                                ].map(item => (
                                                    <div key={item.label} className="flex justify-between items-center px-2">
                                                        <span className="text-foreground/60">{item.label}</span>
                                                        <span className="font-bold capitalize">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-foreground/40 italic">
                                            Costo estimado de infra: <span className="text-secondary">$0 - $15/mes</span>
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isSuccess && (
                        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 0}
                                className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity disabled:opacity-0"
                            >
                                <ArrowLeft className="w-4 h-4" /> ATRÁS
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={isGenerating}
                                className="group px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-wait"
                            >
                                {isGenerating ? "GENERANDO..." : (currentStep === STEPS.length - 1 ? "GENERAR CÓDIGO" : "CONTINUAR")}
                                {isGenerating ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    >
                                        <Zap className="w-4 h-4 fill-white" />
                                    </motion.div>
                                ) : (currentStep === STEPS.length - 1 ? <Zap className="w-4 h-4 group-hover:fill-white" /> : <ArrowRight className="w-4 h-4" />)}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
