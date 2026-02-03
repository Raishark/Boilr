import JSZip from "jszip";
import { saveAs } from "file-saver";
import { BASE_TEMPLATES } from "@/templates/base";
import { ProjectConfig } from "@/types/config";

export async function generateBoilerplate(config: ProjectConfig) {
  const zip = new JSZip();

  // Add base files and handle subdirectories
  Object.entries(BASE_TEMPLATES).forEach(([path, templateFn]) => {
    const content = templateFn(config);
    if (path.includes("/")) {
      const parts = path.split("/");
      const filename = parts.pop()!;
      let currentFolder: JSZip = zip;

      parts.forEach(part => {
        currentFolder = currentFolder.folder(part) || currentFolder;
      });

      currentFolder.file(filename, content);
    } else {
      zip.file(path, content);
    }
  });

  // Add src directory structure
  const src = zip.folder("src");
  const app = src?.folder("app");

  if (app) {
    app.file("layout.tsx", `
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generated App",
  description: "Built with Boilr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
    `);

    app.file("page.tsx", `
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to your new project</h1>
      <p className="mt-4 text-xl text-gray-600">Generated with Boilr.</p>
    </main>
  );
}
    `);

    app.file("globals.css", `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  color: var(--foreground);
  background: var(--background);
}
    `);
  }

  // Add component placeholders
  const components = src?.folder("components");
  components?.file("example.tsx", "// Placeholder component\nexport const Example = () => <div>Example</div>;");

  // Add lib folder for db clients
  const lib = src?.folder("lib");
  if (config.db === 'supabase') {
    lib?.file("supabase.ts", `
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
    `);
  }

  // Generate ZIP and download
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "boilr-project.zip");
}
