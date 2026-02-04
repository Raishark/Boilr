import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />

      {/* Features Preview Section */}
      <section id="features" className="py-20 relative px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Todo lo que necesitas para escalar</h2>
            <p className="text-foreground/60 text-lg">Configuración profesional en segundos, sin fricción.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Next.js 15 + Prisma",
                desc: "Arquitectura moderna con App Router y Type-safe database access."
              },
              {
                title: "Auth & Analytics",
                desc: "Clerk, Supabase o NextAuth integrados con Google Analytics/PostHog."
              },
              {
                title: "Dashboard & Stripe",
                desc: "Panel de administración premium con suscripciones y webhooks listos."
              }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="mt-16 text-center">
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-all text-sm font-black uppercase tracking-widest group"
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
