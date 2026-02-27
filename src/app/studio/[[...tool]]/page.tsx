"use client";

/**
 * /studio – Embedded Sanity Studio
 *
 * This catch-all route renders the Sanity Studio inside the Next.js app.
 * It uses next-sanity's NextStudio wrapper which handles loading states,
 * viewport meta tags, and global CSS isolation for the studio.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
