"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Lock, Github, Chrome } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement authentication logic
        setTimeout(() => setIsLoading(false), 2000);
    };

    const handleSocialLogin = (provider: string) => {
        // TODO: Implement social login
        console.log(`Login with ${provider}`);
    };

    return (
        <main className="min-h-screen bg-background text-foreground antialiased flex items-center justify-center px-6 py-12 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center gap-2 mb-8">
                    <Zap className="w-8 h-8 text-primary fill-primary" />
                    <span className="text-2xl font-bold tracking-tighter">Boilr</span>
                </Link>

                {/* Login Card */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Bienvenido de vuelta</h1>
                        <p className="text-foreground/60">Inicia sesión para continuar generando proyectos</p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={() => handleSocialLogin("google")}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-all group"
                        >
                            <Chrome className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                            <span className="font-medium">Continuar con Google</span>
                        </button>
                        <button
                            onClick={() => handleSocialLogin("github")}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-all group"
                        >
                            <Github className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                            <span className="font-medium">Continuar con GitHub</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-card text-foreground/60">O continúa con email</span>
                        </div>
                    </div>

                    {/* Email/Password Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-border bg-white/5 text-primary focus:ring-primary/50" />
                                <span className="text-foreground/60">Recordarme</span>
                            </label>
                            <Link href="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center mt-6 text-sm text-foreground/60">
                        ¿No tienes una cuenta?{" "}
                        <Link href="/signup" className="text-primary font-medium hover:text-primary/80 transition-colors">
                            Regístrate gratis
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <Link
                    href="/"
                    className="block text-center mt-6 text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                    ← Volver al inicio
                </Link>
            </motion.div>
        </main>
    );
}
