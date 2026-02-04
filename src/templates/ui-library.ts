import { ProjectConfig } from "@/types/config";

export const UI_COMPONENTS = {
    "components/navbar.tsx": (config: ProjectConfig) => `
'use client'
import Link from "next/link";
import { Terminal } from "lucide-react";
${config.auth === 'clerk' ? 'import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";' : ''}
${config.auth === 'nextauth' ? 'import { useSession, signIn, signOut } from "next-auth/react";' : ''}

export function Navbar() {
  ${config.auth === 'nextauth' ? 'const { data: session } = useSession();' : ''}
  
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Terminal className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">MyProject</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          
          <div className="h-4 w-px bg-border" />

          ${config.auth === 'clerk' ? `
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          ` : ''}

          ${config.auth === 'nextauth' ? `
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/60">{session.user?.email}</span>
              <button 
                onClick={() => signOut()}
                className="text-sm font-bold hover:text-primary transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button 
              onClick={() => signIn()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          )}
          ` : ''}

          ${config.auth === 'none' ? `
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          ` : ''}
        </div>
      </div>
    </nav>
  );
}
    `,

    "components/footer.tsx": () => `
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-black tracking-tighter uppercase">MyProject</span>
          </div>
          
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} MyProject. Built with Boilr.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/40 hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-foreground/40 hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
    `,

    "components/hero.tsx": () => `
import { Rocket, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_15%)] opacity-20 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
          <Rocket className="w-3 h-3" />
          Ready to Ship
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent italic uppercase">
          Build Smarter <br />
          <span className="text-primary not-italic">Better Fast</span>
        </h1>
        
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          The ultimate foundation for your next SaaS. Beautifully designed, perfectly engineered, and ready to scale.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
            Get Started Now <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-card border border-border rounded-2xl text-lg font-bold hover:bg-border/50 transition-colors">
            View Components
          </button>
        </div>
      </div>
    </section>
  );
}
    `,

    "components/theme-provider.tsx": () => `
'use client'
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
    `
};
