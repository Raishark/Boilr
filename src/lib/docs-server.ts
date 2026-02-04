import "server-only";
import { readFile } from "fs/promises";
import { join } from "path";
import { DOCS_CONFIG } from "./docs-config";

export async function getDocContent(slug: string): Promise<string> {
    const doc = DOCS_CONFIG.find(d => d.slug === slug);
    if (!doc) throw new Error(`Document not found: ${slug}`);

    try {
        const filePath = join(process.cwd(), doc.filename);
        const content = await readFile(filePath, "utf-8");
        return content;
    } catch (error) {
        console.error(`Error reading doc ${slug}:`, error);
        return `# Error\nNo se pudo cargar el documento ${doc.filename}.`;
    }
}
