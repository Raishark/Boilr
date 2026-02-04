import { ProjectConfig } from "@/types/config";

/**
 * Serializes the project configuration into a Base64 string.
 */
export function serializeConfig(config: ProjectConfig): string {
    const json = JSON.stringify(config);
    return btoa(json);
}

/**
 * Deserializes a Base64 string back into a ProjectConfig object.
 * Returns null if the string is invalid.
 */
export function deserializeConfig(encoded: string): ProjectConfig | null {
    try {
        const json = atob(encoded);
        const config = JSON.parse(json);
        // Basic validation could be added here
        return config as ProjectConfig;
    } catch (e) {
        console.error("Failed to deserialize config:", e);
        return null;
    }
}
