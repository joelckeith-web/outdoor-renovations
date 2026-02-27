import { sanityFetch } from "./sanity-fetch";
import { siteSettingsQuery } from "./queries";
import type { SanitySiteSettings } from "./queries";

/**
 * Fetch reviews from Sanity and transform them into the shape the
 * ReviewCarousel expects. Returns undefined when Sanity isn't configured
 * so the carousel uses its own placeholder data.
 */
export async function getReviews() {
  const settings = await sanityFetch<SanitySiteSettings>(siteSettingsQuery);
  if (!settings?.reviews?.length) return undefined;

  return settings.reviews.map((r, i) => ({
    id: i + 1,
    name: r.reviewerName,
    text: r.reviewText,
    rating: r.rating,
    technician: r.technicianName ? `Tech: ${r.technicianName}` : "",
  }));
}
