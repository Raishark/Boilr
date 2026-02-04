import {
    Book,
    Code2,
    History,
    LifeBuoy,
    ShieldAlert,
    FileText,
    type LucideIcon
} from "lucide-react";

export interface DocMetadata {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    filename: string;
}

export const DOCS_CONFIG: DocMetadata[] = [
    {
        slug: "resumen",
        title: "Resumen General",
        description: "La puerta de entrada a Boilr. Características, stack y filosofía.",
        icon: FileText,
        filename: "README.md"
    },
    {
        slug: "guia",
        title: "Guía de Uso",
        description: "Aprende a dominar el generador y optimizar tu flujo de trabajo.",
        icon: Book,
        filename: "GUIDE.md"
    },
    {
        slug: "contribuir",
        title: "Guía de Contribución",
        description: "¿Quieres mejorar Boilr? Aquí tienes las reglas del juego.",
        icon: Code2,
        filename: "CONTRIBUTING.md"
    },
    {
        slug: "git-flow",
        title: "Git Flow Mastery",
        description: "El estándar industrial de gestión de versiones aplicado a Boilr.",
        icon: History,
        filename: "GITFLOW.md"
    },
    {
        slug: "changelog",
        title: "Historial de Cambios",
        description: "Evolución del proyecto, versiones y mejoras implementadas.",
        icon: History,
        filename: "CHANGELOG.md"
    },
    {
        slug: "soporte",
        title: "Soporte y Comunidad",
        description: "Canales oficiales para dudas, errores y colaboraciones.",
        icon: LifeBuoy,
        filename: "SUPPORT.md"
    },
    {
        slug: "codigo-de-conducta",
        title: "Código de Conducta",
        description: "Nuestros estándares para una comunidad sana y profesional.",
        icon: ShieldAlert,
        filename: "CODE_OF_CONDUCT.md"
    }
];
