import { client, projectId } from "./sanity";
import type { QueryParams } from "next-sanity";

/**
 * Check whether Sanity is actually configured.
 * When projectId is the default "placeholder", all fetches short-circuit to null.
 */
export const isSanityConfigured = projectId !== "placeholder";

/**
 * Type-safe Sanity fetch with ISR revalidation.
 * Returns `null` when Sanity isn't configured so pages fall back to static data.
 */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  revalidate = 60
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate },
    });
    return data ?? null;
  } catch (error) {
    console.error("[Sanity] Fetch failed, falling back to static data:", error);
    return null;
  }
}
