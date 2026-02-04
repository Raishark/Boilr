import JSZip from "jszip";
import { saveAs } from "file-saver";
import { BASE_TEMPLATES, DOCKER_TEMPLATES } from "@/templates/base";
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
import "./globals.css";
${config.auth === 'clerk' ? 'import { ClerkProvider } from "@clerk/nextjs";' : ''}
${config.auth === 'nextauth' ? 'import { NextAuthProvider } from "@/components/auth-provider";' : ''}
${config.analytics === 'posthog' ? 'import { PHProvider } from "@/components/posthog-provider";' : ''}

export const metadata: Metadata = {
  title: "Generated App",
  description: "Built with Boilr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let content = children;

  if (config.analytics === 'posthog') {
    content = <PHProvider>{content}</PHProvider>;
  }

  if (config.auth === 'nextauth') {
    content = <NextAuthProvider>{content}</NextAuthProvider>;
  }

  return (
    ${config.auth === 'clerk' ? '<ClerkProvider>' : ''}
    <html lang="en">
      <body>{content}</body>
    </html>
    ${config.auth === 'clerk' ? '</ClerkProvider>' : ''}
  );
}
    `);

    app.file("page.tsx", `
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to your new project</h1>
      <p className="mt-4 text-xl text-gray-600">Generated with Boilr.</p>
    </main>
  );
}
    `);

    app.file("globals.css", `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  color: var(--foreground);
  background: var(--background);
}
    `);
  }

  // Add component placeholders
  const components = src?.folder("components");
  components?.file("example.tsx", "// Placeholder component\nexport const Example = () => <div>Example</div>;");

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
