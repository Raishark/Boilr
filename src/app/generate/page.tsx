import { Metadata } from "next";
import GeneratePage from "./generate-page";
import { getOgImageUrl } from "@/lib/seo-utils";

export const metadata: Metadata = {
    title: "Generador de Código",
    description: "Configura y genera tu boilerplate personalizado en segundos. Elige tu stack, base de datos y servicios.",
    openGraph: {
        images: [getOgImageUrl("Generador Inteligente", "Crea tu stack ideal: Next.js + Prisma/Supabase + Clerk/Stripe")]
    }
};

export default function Page() {
    return <GeneratePage />;
}
