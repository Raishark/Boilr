import { ProjectConfig } from "@/types/config";

export interface Snippet {
    title: string;
    description: string;
    code: string;
    language: string;
}

export function getLiveSnippets(config: ProjectConfig): Snippet[] {
    const snippets: Snippet[] = [];

    // Frontend Snippet
    snippets.push({
        title: "Page Structure",
        description: "Modern Next.js 15 App Router page with Framer Motion.",
        language: "tsx",
        code: `"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen p-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Hello World
      </motion.h1>
    </main>
  );
}`
    });

    // Database Snippet
    if (config.db === "prisma") {
        snippets.push({
            title: "Database Client",
            description: "Type-safe database access with Prisma client.",
            language: "typescript",
            code: `import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;`
        });
    } else if (config.db === "supabase") {
        snippets.push({
            title: "Supabase Client",
            description: "Direct access to Supabase with auto-refreshing sessions.",
            language: "typescript",
            code: `import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);`
        });
    }

    // Auth Snippet
    if (config.auth === "clerk") {
        snippets.push({
            title: "Auth Guard",
            description: "Protecting routes with Clerk middleware.",
            language: "typescript",
            code: `import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});`
        });
    } else if (config.auth === "nextauth") {
        snippets.push({
            title: "Auth Route",
            description: "Full-stack authentication with NextAuth handlers.",
            language: "typescript",
            code: `import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);`
        });
    }

    // Extras
    if (config.payments === "stripe") {
        snippets.push({
            title: "Stripe Checkout",
            description: "Simple server-side checkout session creation.",
            language: "typescript",
            code: `import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: 'price_H5ggY...', quantity: 1 }],
    mode: 'payment',
    success_url: 'https://example.com/success',
  });
  return session.url;
}`
        });
    }

    return snippets;
}
