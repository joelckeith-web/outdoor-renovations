import { defineType, defineField } from "sanity";

export const servicePage = defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  fields: [
    // ── Core Identity ──────────────────────────────────────────────
    defineField({
      name: "serviceName",
      title: "Service Name",
      type: "string",
      description: "The display name of this service (e.g. \"Heat Pump Installation\").",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly identifier generated from the service name.",
      options: { source: "serviceName", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description:
        "Brief summary shown in service cards and listing pages (max 200 characters).",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description:
        'Lucide icon name to represent this service (e.g. "Flame", "Snowflake", "Zap").',
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "number",
      description:
        "Controls display order in service listings. Lower numbers appear first.",
      validation: (rule) => rule.integer().min(0),
    }),

    // ── SEO / Meta ─────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Page title for search engines (50-60 characters recommended).",
      validation: (rule) => rule.max(70),
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Page description for search engine results (150-160 characters recommended).",
      validation: (rule) => rule.max(160),
      group: "seo",
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary Keyword",
      type: "string",
      description: "The main keyword this page targets for SEO.",
      group: "seo",
    }),
    defineField({
      name: "secondaryKeywords",
      title: "Secondary Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Supporting keywords for this service page.",
      group: "seo",
    }),

    // ── Structured Data (Schema.org) ───────────────────────────────
    defineField({
      name: "schemaServiceName",
      title: "Schema.org Service Name",
      type: "string",
      description:
        "Service name for JSON-LD structured data (can differ from display name).",
      group: "seo",
    }),
    defineField({
      name: "schemaServiceDescription",
      title: "Schema.org Service Description",
      type: "text",
      rows: 3,
      description: "Service description for JSON-LD structured data.",
      group: "seo",
    }),
    defineField({
      name: "schemaAreaServed",
      title: "Schema.org Area Served",
      type: "string",
      description:
        'Geographic area for structured data (e.g. "King, Pierce, Kitsap, and Thurston Counties, WA").',
      group: "seo",
    }),

    // ── Hero Section ───────────────────────────────────────────────
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: "Primary heading displayed in the hero section.",
      validation: (rule) => rule.required(),
      group: "hero",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "string",
      description: "Secondary line of text below the hero headline.",
      group: "hero",
    }),
    defineField({
      name: "heroBody",
      title: "Hero Body",
      type: "text",
      rows: 4,
      description: "Supporting paragraph text in the hero section.",
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Background or featured image for the hero section.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessible description of the hero image.",
        }),
      ],
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryCTA",
      title: "Hero Primary CTA Text",
      type: "string",
      description:
        'Call-to-action button text (e.g. "Request a Free Estimate").',
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryCTAUrl",
      title: "Hero Primary CTA URL",
      type: "string",
      description:
        'URL or path the CTA button links to (e.g. "/contact", "tel:+12532932769").',
      group: "hero",
    }),

    // ── Page Content ───────────────────────────────────────────────
    defineField({
      name: "serviceDescription",
      title: "Service Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        },
      ],
      description:
        "Rich text description of the service. Supports headings, bold, italic, and links.",
      group: "content",
    }),
    defineField({
      name: "serviceDetails",
      title: "Service Details",
      type: "array",
      of: [
        {
          type: "object",
          name: "serviceDetail",
          title: "Service Detail",
          fields: [
            defineField({
              name: "detail",
              title: "Detail",
              type: "string",
              description: "Detail label or heading.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              description: "Explanation of this service detail.",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "detail", subtitle: "description" },
          },
        },
      ],
      description: "List of specific details or features for this service.",
      group: "content",
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "processStep",
          title: "Process Step",
          fields: [
            defineField({
              name: "stepTitle",
              title: "Step Title",
              type: "string",
              description: "Name of this process step.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "stepDescription",
              title: "Step Description",
              type: "text",
              rows: 3,
              description: "What happens during this step.",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "stepTitle", subtitle: "stepDescription" },
          },
        },
      ],
      description:
        "Step-by-step breakdown of how this service is delivered.",
      group: "content",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
      description:
        "Frequently asked questions displayed on this service page. Also used for FAQ structured data.",
      group: "content",
    }),
  ],

  groups: [
    { name: "seo", title: "SEO & Structured Data" },
    { name: "hero", title: "Hero Section" },
    { name: "content", title: "Page Content" },
  ],

  preview: {
    select: {
      title: "serviceName",
      subtitle: "shortDescription",
      media: "heroImage",
    },
  },

  orderings: [
    {
      title: "Display Order",
      name: "orderRankAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
    {
      title: "Service Name",
      name: "serviceNameAsc",
      by: [{ field: "serviceName", direction: "asc" }],
    },
  ],
});
