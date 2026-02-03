export interface ProjectConfig {
    frontend: "nextjs" | "remix";
    db: "supabase" | "mongodb" | "prisma";
    auth: "supabase" | "clerk" | "nextauth";
    payments: "stripe" | "none";
    deploy: "vercel" | "manual";
    docker: boolean;
}
