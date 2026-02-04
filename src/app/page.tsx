import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />

      {/* Features Preview Section */}
      <section id="features" className="py-20 relative px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase italic">Todo lo que necesitas <br /><span className="text-primary not-italic">para escalar</span></h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto font-medium">Configuración profesional en segundos, libre de fricción.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Next.js 15 + Prisma",
                desc: "Arquitectura moderna con App Router y acceso a base de datos con tipado estricto."
              },
              {
                title: "Auth & Analytics",
                desc: "Clerk, Supabase o NextAuth integrados con Google Analytics y PostHog de serie."
              },
              {
                title: "Dashboard & Stripe",
                desc: "Panel de administración premium con suscripciones y webhooks listos para producir."
              }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight italic">{f.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-all text-sm font-black uppercase tracking-[0.2em] group"
            >
              Ver todas las plantillas profesionales
              <span className="w-8 h-px bg-foreground/10 group-hover:bg-primary/30 group-hover:w-12 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
