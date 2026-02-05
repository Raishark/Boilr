import { Metadata } from "next";
import DocsPortalClient from "./docs-portal-client";
import { getOgImageUrl, getStructuredData } from "@/lib/seo-utils";

export const metadata: Metadata = {
    title: "Documentación y Guías",
    description: "Accede a la inteligencia de Boilr. Documentos, guías y estándares para desarrolladores profesionales.",
    openGraph: {
        images: [getOgImageUrl("Documentación de Élite", "Guías, estándares y mejores prácticas para Next.js 15")]
    }
};

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: getStructuredData('WebSite', {
                        name: 'Documentación de Boilr',
                        description: 'Portal de conocimiento para el generador Boilr.',
                        publisher: {
                            '@type': 'Organization',
                            name: 'Boilr'
                        }
                    })
                }}
            />
            <DocsPortalClient />
        </div>
    );
}
