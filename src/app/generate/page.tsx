import { Metadata } from "next";
import GeneratePage from "./generate-page";

export const metadata: Metadata = {
    title: "Generador de Código",
    description: "Configura y genera tu boilerplate personalizado en segundos. Elige tu stack, base de datos y servicios.",
};

export default function Page() {
    return <GeneratePage />;
}
