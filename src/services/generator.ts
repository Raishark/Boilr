import JSZip from "jszip";
import { saveAs } from "file-saver";
import { BASE_TEMPLATES, DOCKER_TEMPLATES } from "@/templates/base";
import { UI_COMPONENTS } from "@/templates/ui-library";
import { ProjectConfig } from "@/types/config";

export async function generateBoilerplate(config: ProjectConfig) {
  const zip = new JSZip();

  // Add base files and handle subdirectories
  Object.entries(BASE_TEMPLATES).forEach(([path, templateFn]) => {
    const content = templateFn(config);
    if (path.includes("/")) {
      const parts = path.split("/");
      const filename = parts.pop()!;
      let currentFolder: JSZip = zip;

      parts.forEach(part => {
        currentFolder = currentFolder.folder(part) || currentFolder;
      });

      currentFolder.file(filename, content);
    } else {
      zip.file(path, content);
    }
  });

  // Add Docker files if selected
  if (config.docker) {
    Object.entries(DOCKER_TEMPLATES).forEach(([path, templateFn]) => {
      const content = templateFn(config);
      zip.file(path, content);
    });
  }

  // Add src directory structure
  const src = zip.folder("src");
  const app = src?.folder("app");

  if (app) {
    app.file("layout.tsx", `
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
${config.auth === 'clerk' ? 'import { ClerkProvider } from "@clerk/nextjs";' : ''}
${config.auth === 'nextauth' ? 'import { NextAuthProvider } from "@/components/auth-provider";' : ''}
${config.analytics === 'posthog' ? 'import { PHProvider } from "@/components/posthog-provider";' : ''}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Awesome Project",
  description: "Built with Boilr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let content = (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );

  if (config.analytics === 'posthog') {
    content = <PHProvider>{content}</PHProvider>;
  }

  if (config.auth === 'nextauth') {
    content = <NextAuthProvider>{content}</NextAuthProvider>;
  }

  return (
    ${config.auth === 'clerk' ? '<ClerkProvider>' : ''}
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {content}
        </ThemeProvider>
      </body>
    </html>
    ${config.auth === 'clerk' ? '</ClerkProvider>' : ''}
  );
}
    `);

    app.file("page.tsx", `
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-border rounded-3xl bg-card/50">
            <h3 className="text-xl font-bold mb-4">Edit this page</h3>
            <p className="text-foreground/60">Modify src/app/page.tsx to start building your feature.</p>
          </div>
          <div className="p-8 border border-border rounded-3xl bg-card/50">
            <h3 className="text-xl font-bold mb-4">Configure DB</h3>
            <p className="text-foreground/60">Check src/lib/ to manage your database connections.</p>
          </div>
          <div className="p-8 border border-border rounded-3xl bg-card/50">
            <h3 className="text-xl font-bold mb-4">Read the Docs</h3>
            <p className="text-foreground/60">Everything you need to know is in the docs folder.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
    `);

    app.file("globals.css", `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
    `);
  }

  // Add premium UI library
  const components = src?.folder("components");
  Object.entries(UI_COMPONENTS).forEach(([path, templateFn]) => {
    const filename = path.split("/").pop()!;
    components?.file(filename, templateFn(config));
  });

  // Add lib folder for db clients
  const lib = src?.folder("lib");
  if (config.db === 'supabase') {
    lib?.file("supabase.ts", `
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
    `);
  }

  if (config.db === 'mongodb') {
    lib?.file("mongodb.ts", `
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}
    `);
  }

  if (config.payments === 'stripe') {
    lib?.file("stripe.ts", `
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});
    `);
  }

  if (config.email === 'resend') {
    lib?.file("resend.ts", `
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
    `);
  }

  if (config.analytics === 'posthog') {
    components?.file("posthog-provider.tsx", `
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
    `);
  }
  if (config.auth === 'nextauth' && app) {
    components?.file("auth-provider.tsx", `
'use client'
import { SessionProvider } from "next-auth/react"

export function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
    `);
    const authFolder = app.folder("api")?.folder("auth")?.folder("[...nextauth]");
    authFolder?.file("route.ts", `
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
    `);
  }

  if (config.auth === 'clerk' && src) {
    src.file("middleware.ts", `
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[\\\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
    `);
  }

  // Generate ZIP and download
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "boilr-project.zip");
}
