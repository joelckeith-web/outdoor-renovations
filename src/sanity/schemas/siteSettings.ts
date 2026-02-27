import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  // Singleton behavior is enforced via the custom desk structure in sanity.config.ts

  fields: [
    // ── Business Information ───────────────────────────────────────
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      description: "Legal or display name of the business.",
      validation: (rule) => rule.required(),
      group: "business",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: 'Primary business phone number (e.g. "253-293-2769").',
      validation: (rule) => rule.required(),
      group: "business",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      description: "Primary business email address.",
      validation: (rule) => rule.email(),
      group: "business",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      description: "Street address of the business.",
      group: "business",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      description: 'Two-letter state code (e.g. "WA").',
      validation: (rule) => rule.max(2),
      group: "business",
    }),
    defineField({
      name: "zip",
      title: "ZIP Code",
      type: "string",
      group: "business",
    }),
    defineField({
      name: "serviceArea",
      title: "Service Area",
      type: "string",
      description:
        'Human-readable description of the service area (e.g. "King, Pierce, Kitsap, and Thurston Counties").',
      group: "business",
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "text",
      rows: 4,
      description:
        'Business hours displayed on the site (e.g. "Mon-Fri: 7am-5pm\\nSat: 8am-2pm\\nSun: Closed").',
      group: "business",
    }),

    // ── Social Links ───────────────────────────────────────────────
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "URLs for the business social media and review profiles.",
      group: "social",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook URL",
          type: "url",
          validation: (rule) =>
            rule.uri({ allowRelative: false, scheme: ["https"] }),
        }),
        defineField({
          name: "google",
          title: "Google Business URL",
          type: "url",
          validation: (rule) =>
            rule.uri({ allowRelative: false, scheme: ["https"] }),
        }),
        defineField({
          name: "yelp",
          title: "Yelp URL",
          type: "url",
          validation: (rule) =>
            rule.uri({ allowRelative: false, scheme: ["https"] }),
        }),
        defineField({
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          validation: (rule) =>
            rule.uri({ allowRelative: false, scheme: ["https"] }),
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
          validation: (rule) =>
            rule.uri({ allowRelative: false, scheme: ["https"] }),
        }),
      ],
    }),

    // ── Reviews ────────────────────────────────────────────────────
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      description:
        "Customer reviews displayed across the site (testimonials, hero badges, etc.).",
      group: "reviews",
      of: [
        {
          type: "object",
          name: "review",
          title: "Review",
          fields: [
            defineField({
              name: "reviewerName",
              title: "Reviewer Name",
              type: "string",
              description: "Name of the customer who left the review.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "reviewText",
              title: "Review Text",
              type: "text",
              rows: 4,
              description: "The review content.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "rating",
              title: "Rating",
              type: "number",
              description: "Star rating from 1 to 5.",
              validation: (rule) => rule.required().min(1).max(5).integer(),
            }),
            defineField({
              name: "source",
              title: "Source",
              type: "string",
              description:
                'Where the review came from (e.g. "Google", "Yelp", "Facebook").',
              options: {
                list: [
                  { title: "Google", value: "google" },
                  { title: "Yelp", value: "yelp" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Other", value: "other" },
                ],
              },
            }),
            defineField({
              name: "technicianName",
              title: "Technician Name",
              type: "string",
              description:
                "Name of the technician mentioned in the review (if applicable).",
            }),
            defineField({
              name: "date",
              title: "Review Date",
              type: "date",
              description: "Date the review was posted.",
            }),
          ],
          preview: {
            select: {
              title: "reviewerName",
              subtitle: "source",
              rating: "rating",
            },
            prepare({ title, subtitle, rating }) {
              const stars = rating ? "\u2605".repeat(rating) : "";
              return {
                title: title || "Unnamed Reviewer",
                subtitle: `${stars} ${subtitle ? `- ${subtitle}` : ""}`.trim(),
              };
            },
          },
        },
      ],
    }),
  ],

  groups: [
    { name: "business", title: "Business Info" },
    { name: "social", title: "Social Links" },
    { name: "reviews", title: "Reviews" },
  ],

  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "Global site configuration",
      };
    },
  },
});
