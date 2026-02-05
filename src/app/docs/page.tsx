import { Metadata } from "next";
import DocsPortalClient from "./docs-portal-client";

export const metadata: Metadata = {
    title: "Documentación y Guías",
    description: "Accede a la inteligencia de Boilr. Documentos, guías y estándares para desarrolladores profesionales.",
};

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto">
            <DocsPortalClient />
        </div>
    );
}
