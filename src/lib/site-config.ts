export const siteConfig = {
  businessName: "Outdoor Renovations",
  phone: "(512) 743-0570",
  phoneHref: "tel:+15127430570",
  email: "Kstoutenger@outdoorreno.com",
  address: {
    street: "1108 Hollybluff St",
    city: "Kyle",
    state: "TX",
    zip: "78640",
  },
  serviceArea: "Austin Metro & Central Texas",
  serviceAreaCities: [
    "Westlake Hills",
    "Lakeway",
    "Bee Cave",
    "Dripping Springs",
    "Tarrytown",
    "Barton Creek",
    "Rollingwood",
    "Steiner Ranch",
    "Circle C Ranch",
    "Travis Heights",
  ],
  yearsExperience: "16+",
  foundedYear: "2010",
  ownerName: "Kyle Stoutenger",
  certifications: [
    "Licensed General Contractor of Landscape",
    "Fully Bonded & Insured",
    "1-Year Service Guarantee",
  ],
  productBrands: [] as string[],
  social: {
    facebook: "https://facebook.com/outdoorrenovations",
    instagram: "https://instagram.com/outdoorrenoatx",
    google: "[PLACEHOLDER]",
  },
  reviewCount: "200+",
  averageRating: "5.0",
  siteUrl: "https://outdoor-renovations.vercel.app",
  gtmId: "[PLACEHOLDER]",
  motto: "Renovating Outdoor Dreams to Reality",
  tagline: "Design | Landscape | Maintain",
} as const;

export const services = [
  {
    name: "Landscape Design",
    slug: "landscape-design",
    shortDescription:
      "Custom to-scale 2D plans, 3D renderings, and full design documentation — from concept to construction-ready drawings.",
    icon: "PenTool",
  },
  {
    name: "Hardscaping",
    slug: "hardscaping",
    shortDescription:
      "Patios, walkways, retaining walls, outdoor kitchens, fire pits, and stone features built with precision and premium materials.",
    icon: "Layers",
  },
  {
    name: "Custom Carpentry",
    slug: "custom-carpentry",
    shortDescription:
      "Pergolas, casitas, decks, fences, gates, and privacy screens — handcrafted structures that define your outdoor space.",
    icon: "Hammer",
  },
  {
    name: "Softscaping & Planting",
    slug: "softscaping-planting",
    shortDescription:
      "Expert plant selection, installation, and ongoing enhancements tailored to Central Texas climate and your property's unique conditions.",
    icon: "Leaf",
  },
  {
    name: "Irrigation & Drainage",
    slug: "irrigation-drainage",
    shortDescription:
      "Smart irrigation systems and drainage solutions designed to protect your investment and sustain healthy landscapes year-round.",
    icon: "Droplets",
  },
  {
    name: "Landscape Lighting",
    slug: "landscape-lighting",
    shortDescription:
      "Professional outdoor lighting design and installation that enhances curb appeal, safety, and the ambiance of your property after dark.",
    icon: "Lightbulb",
  },
  {
    name: "Metal Fabrication",
    slug: "metal-fabrication",
    shortDescription:
      "Custom iron and metal work — fences, gates, retaining walls, edging, pergolas, and architectural features fabricated to your specifications.",
    icon: "Cog",
  },
  {
    name: "Property & Pest Management",
    slug: "property-management",
    shortDescription:
      "White-glove property care from weekly lawn maintenance to all-inclusive outdoor concierge service — protecting your landscape investment year-round.",
    icon: "TreeDeciduous",
  },
] as const;
