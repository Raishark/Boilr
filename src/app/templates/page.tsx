import { Metadata } from "next";
import TemplatesPage from "./templates-page";
import { getOgImageUrl } from "@/lib/seo-utils";

export const metadata: Metadata = {
    title: "Plantillas Profesionales",
    description: "Explora nuestra colección de plantillas SaaS, E-commerce y API con el mejor stack tecnológico.",
    openGraph: {
        images: [getOgImageUrl("Plantillas de Élite", "Arquitecturas listas para producción para SaaS y E-commerce")]
    }
};

export default function Page() {
    return <TemplatesPage />;
}
