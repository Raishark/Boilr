import { Metadata } from "next";
import TemplatesPage from "./templates-page";

export const metadata: Metadata = {
    title: "Plantillas Profesionales",
    description: "Explora nuestra colección de plantillas SaaS, E-commerce y API con el mejor stack tecnológico.",
};

export default function Page() {
    return <TemplatesPage />;
}
