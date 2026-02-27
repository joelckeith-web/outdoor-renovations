"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

const singletonTypes = new Set(["siteSettings"]);

// Custom desk structure that enforces singleton documents
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const singletonStructure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),

      S.divider(),

      // Document list: Service Pages
      S.documentTypeListItem("servicePage").title("Service Pages"),
    ]);

export default defineConfig({
  name: "qc-mechanical-studio",
  title: "QC Mechanical",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [
    structureTool({ structure: singletonStructure }),
    // Note: @sanity/vision removed — requires React 19. Add back when upgrading to Next.js 15+.
  ],

  schema: {
    types: schemaTypes,

    // Prevent "new document" menu from offering singleton types
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.has(schemaType)
      ),
  },
});
