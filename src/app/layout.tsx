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

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";

import { BASE_URL, getStructuredData } from "@/lib/seo-utils";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Boilr - Generador de Boilerplates Profesionales",
    template: "%s | Boilr"
  },
  description: "Crea proyectos Next.js configurados con tu stack preferido en segundos. El generador definitivo para desarrolladores modernos.",
  keywords: ["Next.js", "Boilerplate", "SaaS Starter", "Web Development", "Generator", "Next.js 15", "Prisma", "Supabase", "Tailwind CSS"],
  authors: [{ name: "Raishark", url: "https://github.com/Raishark" }],
  creator: "Raishark",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Boilr",
    title: "Boilr - Generador de Boilerplates Profesionales",
    description: "Crea proyectos Next.js en segundos. Arquitectura premium lista para el éxito.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Boilr - Generador Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boilr - Generador de Boilerplates Profesionales",
    description: "Crea proyectos Next.js en segundos.",
    images: ["/api/og"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getStructuredData('SoftwareApplication', {
              name: 'Boilr',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Windows, macOS, Linux',
              description: 'Generador de boilerplates premium para Next.js 15.',
              url: BASE_URL,
              author: {
                '@type': 'Person',
                name: 'Raishark'
              }
            })
          }}
        />
        <MotionProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
