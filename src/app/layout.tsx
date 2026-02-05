import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";

export const metadata: Metadata = {
  title: {
    default: "Boilr - Generador de Boilerplates Profesionales",
    template: "%s | Boilr"
  },
  description: "Crea proyectos Next.js configurados con tu stack preferido en segundos. El generador definitivo para desarrolladores modernos.",
  keywords: ["Next.js", "Boilerplate", "Generator", "Saas", "Starter Kit", "Prisma", "Clerk", "Stripe"],
  authors: [{ name: "Raishark" }],
  creator: "Raishark",
  metadataBase: new URL("https://boilr.ribla.mx"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://boilr.ribla.mx",
    title: "Boilr - Generador de Boilerplates Profesionales",
    description: "Crea proyectos Next.js configurados con tu stack preferido en segundos.",
    siteName: "Boilr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boilr - Generador de Boilerplates Profesionales",
    description: "Crea proyectos Next.js configurados con tu stack preferido en segundos.",
    creator: "@raishark",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <Analytics />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
