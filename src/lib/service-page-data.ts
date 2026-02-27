export interface ServicePageFallbackData {
  heroSubheadline: string;
  heroBody: string;
  heroImage: string;
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
    image?: string;
  }[];
  systemsList?: string[];
  advantages?: string[];
  processSteps: { title: string; description: string }[];
  investmentSection?: { heading: string; body: string; bullets?: string[] };
  whyChooseBullets?: string[];
  faqs: { question: string; answer: string }[];
}

export const servicePageData: Record<string, ServicePageFallbackData> = {
  // ─── SERVICE 1: LANDSCAPE DESIGN ──────────────────────────────────
  "landscape-design": {
    heroSubheadline:
      "Custom landscape designs that bring your outdoor vision to life — tailored for Austin's unique climate and terrain.",
    heroBody:
      "Outdoor Renovations creates detailed to-scale 2D plans, photorealistic 3D renderings, and comprehensive design documentation for properties across the Austin metro. With 16+ years of experience and 200+ completed projects, owner Kyle Stoutenger and our design team translate your ideas into a buildable blueprint that accounts for Central Texas soils, sun exposure, drainage patterns, and native plant opportunities.",
    heroImage: "/images/hero-drone-estate.jpg",
    sections: [
      {
        heading: "A Design-First Approach to Outdoor Living",
        body: "Every great outdoor space starts with a great plan. Our landscape design process begins with a thorough site analysis — evaluating topography, existing vegetation, soil composition, microclimates, and how you actually use your yard. From there, we develop a master plan that balances aesthetics, functionality, and long-term sustainability. Whether you are envisioning a full property transformation or a phased multi-year plan, our designs give you a clear roadmap from concept to completion.",
        bullets: [
          "Accurate to-scale 2D site plans with detailed plant and material specifications",
          "Photorealistic 3D renderings so you can visualize the finished space before construction begins",
          "Full design documentation including grading plans, irrigation layouts, and lighting placement",
          "Phased master plans that allow you to build your dream landscape over time",
          "Plant palettes curated for Central Texas heat tolerance, water efficiency, and seasonal color",
        ],
        image: "/images/project-landscape.jpg",
      },
      {
        heading: "Designed for Austin's Climate and Your Lifestyle",
        body: "Central Texas presents unique design challenges — from the alkaline limestone soils of the Hill Country to the intense summer heat and periodic drought restrictions. Our designs are built around these realities, specifying drought-adapted plantings, efficient irrigation zones, and hardscape materials that withstand temperature swings. We also design for how you live: outdoor kitchens for entertaining, shaded retreats for relaxation, play areas for families, and low-maintenance solutions for busy homeowners across Westlake Hills, Lakeway, Bee Cave, and beyond.",
        bullets: [
          "Xeriscaping and native plant integration for water-wise landscapes",
          "Shade structure placement optimized for afternoon sun relief",
          "Drainage solutions engineered into the design from day one",
          "HOA-compliant designs for communities like Steiner Ranch and Circle C Ranch",
        ],
        image: "/images/hero-aerial.jpg",
      },
    ],
    processSteps: [
      {
        title: "Initial Consultation",
        description:
          "We visit your property, discuss your vision, budget, and timeline, and assess site conditions including soil, drainage, sun exposure, and existing features.",
      },
      {
        title: "Site Survey & Analysis",
        description:
          "Our team conducts a detailed site survey, measuring elevations, mapping utilities, and documenting existing vegetation and structures to create an accurate base plan.",
      },
      {
        title: "Concept Development",
        description:
          "We present initial design concepts with 2D layouts and mood boards, refining the direction based on your feedback before moving into detailed design.",
      },
      {
        title: "Detailed Design & 3D Renderings",
        description:
          "The approved concept is developed into a comprehensive design package with to-scale plans, 3D renderings, material specifications, and plant schedules.",
      },
      {
        title: "Review & Revisions",
        description:
          "We walk you through every detail of the finished design and make revisions until it is exactly right. You will know precisely what to expect before any work begins.",
      },
      {
        title: "Build-Ready Documentation",
        description:
          "The final design package includes everything needed for construction — grading plans, irrigation layouts, lighting plans, and detailed specifications ready for permitting and installation.",
      },
    ],
    investmentSection: {
      heading: "Landscape Design Investment",
      body: "Design fees vary based on property size, project scope, and level of documentation required. Most residential design packages range from concept-only plans to full construction-document sets. Design fees are often credited toward construction when Outdoor Renovations is selected as your build partner.",
      bullets: [
        "Concept plans starting for smaller residential projects",
        "Comprehensive master plans for full-property transformations",
        "Design fees credited toward construction contracts",
        "Phased design plans available for budget-conscious homeowners",
        "Discounted rates for Military, First Responders & Nonprofits",
      ],
    },
    whyChooseBullets: [
      "16+ years of landscape design experience in the Austin metro area",
      "Licensed General Contractor of Landscape — we design what we build",
      "Photorealistic 3D renderings so you see the result before construction",
      "Deep knowledge of Central Texas soils, climate, and native plant species",
      "200+ completed projects across Westlake, Lakeway, Bee Cave, and surrounding communities",
      "1-Year Service Guarantee on all design-build projects",
    ],
    faqs: [
      {
        question: "Do I need a professional landscape design, or can I just describe what I want?",
        answer:
          "A professional design saves significant time and money during construction. It eliminates guesswork, prevents costly changes mid-project, and ensures all elements — from grading to irrigation to plant spacing — work together. Most homeowners find that the design investment pays for itself through reduced construction waste and change orders.",
      },
      {
        question: "How long does the design process take?",
        answer:
          "Most residential landscape designs take 2 to 4 weeks from the initial consultation to final deliverables, depending on the scope and complexity of the project. Larger estate properties or multi-phase master plans may take longer. We provide a clear timeline at the start of every project.",
      },
      {
        question: "Can I use the design with a different contractor?",
        answer:
          "Yes, the design documents are yours to use as you see fit. However, when Outdoor Renovations handles both design and construction, we can often credit design fees toward your build contract and ensure the finished result matches the design intent exactly.",
      },
      {
        question: "Do your designs account for Austin's water restrictions?",
        answer:
          "Absolutely. Every design we create considers current Austin Water utility guidelines and seasonal watering restrictions. We specify drought-adapted and native plantings, efficient drip irrigation zones, and permeable hardscape materials to minimize water use while maintaining a beautiful landscape.",
      },
      {
        question: "Can the design be built in phases?",
        answer:
          "Yes, phased master plans are one of our specialties. We design the complete vision upfront but organize it into logical build phases so you can spread the investment over months or years without compromising the final result.",
      },
      {
        question: "What areas do you serve for landscape design?",
        answer:
          "We serve the entire Austin metro area including Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights.",
      },
    ],
  },

  // ─── SERVICE 2: HARDSCAPING ───────────────────────────────────────
  "hardscaping": {
    heroSubheadline:
      "Patios, walkways, retaining walls, outdoor kitchens, and stone features — built to last in Central Texas conditions.",
    heroBody:
      "Outdoor Renovations designs and builds hardscape installations that anchor your outdoor living space. From expansive travertine patios and natural stone walkways to engineered retaining walls and fully equipped outdoor kitchens, our team delivers craftsmanship that stands up to Austin's heat, expansive clay soils, and heavy spring rains. Every project is backed by our 1-Year Service Guarantee.",
    heroImage: "/images/project-stonework.jpg",
    sections: [
      {
        heading: "Premium Hardscape Construction for Austin Properties",
        body: "Hardscaping is the foundation of any great outdoor space. It defines traffic flow, creates functional zones for dining and entertaining, and adds lasting value to your property. Outdoor Renovations works with natural stone, pavers, concrete, and manufactured materials to build structures that are as durable as they are beautiful. We handle everything from small accent walls to large-scale patio-and-kitchen complexes — all engineered for the specific soil and drainage conditions on your property.",
        bullets: [
          "Patios and terraces in travertine, flagstone, pavers, and stamped concrete",
          "Walkways and pathways with proper base preparation and drainage",
          "Retaining walls and seat walls engineered for Austin's expansive soils",
          "Outdoor kitchens with built-in grills, countertops, sinks, and storage",
          "Fire pits and fireplaces for year-round outdoor enjoyment",
          "Stone and masonry accents including columns, planters, and water features",
        ],
        image: "/images/project-patio.jpg",
      },
      {
        heading: "Engineered for Central Texas Ground Conditions",
        body: "Austin's geology presents unique challenges for hardscape construction. Expansive clay soils shift with moisture changes, shallow limestone bedrock complicates excavation, and intense heat demands materials that resist fading and thermal cracking. Our team has 16+ years of experience building in these conditions. We engineer proper subgrade preparation, specify appropriate base materials, and select surface materials rated for the Central Texas climate so your hardscape performs beautifully for decades.",
        bullets: [
          "Subgrade engineering to account for expansive clay soil movement",
          "Proper compaction and base preparation for long-term stability",
          "Material selection rated for UV exposure and freeze-thaw cycles",
          "Integrated drainage to prevent water pooling and erosion",
        ],
        image: "/images/project-walkway.jpg",
      },
    ],
    systemsList: [
      "Travertine and limestone patios",
      "Flagstone and natural stone walkways",
      "Interlocking concrete pavers",
      "Segmental retaining walls",
      "Poured and stamped concrete",
      "Outdoor kitchen islands and countertops",
      "Fire pit and fireplace construction",
      "Stone veneer and masonry accents",
    ],
    processSteps: [
      {
        title: "Consultation & Site Assessment",
        description:
          "We evaluate your property, discuss your goals for the space, and assess soil conditions, drainage patterns, and existing structures to develop a construction approach tailored to your site.",
      },
      {
        title: "Design & Material Selection",
        description:
          "Working from your landscape plan or creating a new one, we finalize the layout, select materials, and provide a detailed scope of work and project estimate.",
      },
      {
        title: "Site Preparation & Grading",
        description:
          "Our crew prepares the site with proper excavation, grading, compaction, and base installation — the hidden work that determines how well your hardscape performs over time.",
      },
      {
        title: "Construction & Installation",
        description:
          "Skilled craftsmen install your hardscape features according to the approved design, with quality checkpoints throughout the process to ensure precision and structural integrity.",
      },
      {
        title: "Final Inspection & Walkthrough",
        description:
          "We conduct a thorough inspection and walk you through the completed project, covering care and maintenance recommendations. Every hardscape project is backed by our 1-Year Service Guarantee.",
      },
    ],
    whyChooseBullets: [
      "Licensed General Contractor of Landscape with 16+ years of hardscape experience",
      "Fully Bonded & Insured for residential and commercial hardscape projects",
      "200+ completed projects across the Austin metro area",
      "Deep expertise with Central Texas soils, drainage, and climate conditions",
      "In-house crews — no subcontracted labor on your project",
      "1-Year Service Guarantee on all hardscape installations",
    ],
    faqs: [
      {
        question: "How long does a typical patio or hardscape project take?",
        answer:
          "Most residential patio projects take 1 to 3 weeks depending on size, complexity, and material lead times. Larger projects involving retaining walls, outdoor kitchens, or multiple phases may take longer. We provide a detailed construction timeline before work begins.",
      },
      {
        question: "What is the best patio material for Austin's climate?",
        answer:
          "Travertine, natural limestone, and high-quality concrete pavers all perform well in Central Texas. Travertine stays cooler underfoot than many alternatives, while pavers offer excellent durability and design flexibility. We help you select the best material for your budget, aesthetic preferences, and how you plan to use the space.",
      },
      {
        question: "Do I need a retaining wall on my sloped property?",
        answer:
          "Many Austin-area properties — especially in Westlake Hills, Barton Creek, and Lakeway — have significant grade changes that benefit from retaining walls. Beyond preventing erosion, retaining walls create level terraces for usable outdoor space. We evaluate your specific conditions and recommend whether a wall is necessary and what type will perform best.",
      },
      {
        question: "Will my hardscape crack or shift over time?",
        answer:
          "Proper construction technique is the key to long-term performance. We engineer every installation with appropriate base depth, compaction, and drainage to minimize movement in Austin's challenging soils. We also use expansion joints and flexible paver systems where appropriate. Our 1-Year Service Guarantee covers workmanship issues.",
      },
      {
        question: "Can you add an outdoor kitchen to my existing patio?",
        answer:
          "In many cases, yes. We evaluate the existing patio structure, ensure it can support the additional load, and design the kitchen to integrate seamlessly with your current space. If the existing patio needs reinforcement, we handle that as well.",
      },
      {
        question: "Do hardscape projects require permits in Austin?",
        answer:
          "Some hardscape projects — particularly retaining walls over 4 feet, structures near property lines, or work in the Edwards Aquifer recharge zone — may require permits. Outdoor Renovations handles all permitting and inspections as part of our scope of work.",
      },
    ],
  },

  // ─── SERVICE 3: CUSTOM CARPENTRY ──────────────────────────────────
  "custom-carpentry": {
    heroSubheadline:
      "Pergolas, casitas, decks, fences, gates, and privacy screens — custom-built outdoor structures for Austin living.",
    heroBody:
      "Outdoor Renovations builds custom wood and composite structures that extend your living space into the outdoors. From shade-providing pergolas and entertaining decks to fully enclosed casitas and stylish privacy screens, every project is designed for your property and built to withstand the Central Texas climate. As a Licensed General Contractor of Landscape, we handle design, permitting, and construction in-house.",
    heroImage: "/images/project-deck.jpg",
    sections: [
      {
        heading: "Custom-Built Outdoor Structures for Every Need",
        body: "Your outdoor space should be as functional and comfortable as your indoor rooms. Our custom carpentry team builds structures that create shade, define spaces, add privacy, and provide year-round usability. Whether you need a pergola over your patio, a multi-level deck off the back of your home, a new cedar fence, or a fully framed casita for guests or a home office, we build it from scratch to your exact specifications.",
        bullets: [
          "Pergolas and shade structures in cedar, pine, and composite materials",
          "Casitas and outdoor rooms for entertaining, guest quarters, or home offices",
          "Multi-level decks and elevated platforms in wood and composite decking",
          "Privacy fences, decorative fences, and custom gates",
          "Privacy screens and lattice walls for targeted screening",
          "Arbors, trellises, and garden structures",
        ],
        image: "/images/project-outdoor-living.jpg",
      },
      {
        heading: "Materials Built for the Texas Sun",
        body: "Central Texas is tough on outdoor wood structures. Intense UV exposure, triple-digit heat, seasonal downpours, and occasional ice storms demand materials and construction methods that go beyond standard building practices. We select species and treatments based on their proven performance in our climate — from naturally rot-resistant cedar to modern composite decking that resists fading and warping. All structural connections use corrosion-resistant hardware rated for exterior use.",
        bullets: [
          "Western red cedar and Texas cedar for natural beauty and rot resistance",
          "Composite and PVC decking for low-maintenance longevity",
          "Stainless steel and hot-dipped galvanized structural hardware",
          "UV-resistant stains and sealants applied before and during installation",
          "Engineered footings and post anchors for structural stability",
        ],
      },
    ],
    processSteps: [
      {
        title: "Design Consultation",
        description:
          "We discuss your vision, evaluate the installation site, take measurements, and review material options. If your project requires a permit, we outline the approval timeline.",
      },
      {
        title: "Custom Design & Engineering",
        description:
          "Our team creates detailed construction drawings showing dimensions, materials, hardware, and footings. For permitted structures, we prepare engineering documents as required by the City of Austin.",
      },
      {
        title: "Material Procurement",
        description:
          "We source materials from trusted suppliers, inspecting lumber and components for quality before they arrive on your property. Lead times are communicated upfront so there are no schedule surprises.",
      },
      {
        title: "Construction & Assembly",
        description:
          "Our carpentry crew builds your structure on-site, following the approved plans with precision. We maintain a clean worksite and communicate daily on progress.",
      },
      {
        title: "Finishing & Protection",
        description:
          "All surfaces receive appropriate finishing treatments — staining, sealing, or painting — to protect against UV damage, moisture, and insects. Hardware is inspected and tightened to final specification.",
      },
      {
        title: "Final Walkthrough & Guarantee",
        description:
          "We walk you through the completed structure, review care recommendations, and activate your 1-Year Service Guarantee covering materials and workmanship.",
      },
    ],
    whyChooseBullets: [
      "Licensed General Contractor of Landscape — permitted and inspected work",
      "16+ years building outdoor structures in the Austin metro area",
      "In-house carpentry crew with no subcontracted labor",
      "Material selection optimized for Central Texas UV, heat, and moisture",
      "Fully Bonded & Insured for your protection",
      "1-Year Service Guarantee on all custom carpentry projects",
    ],
    faqs: [
      {
        question: "Do I need a permit for a pergola or deck in Austin?",
        answer:
          "Many outdoor structures require permits in the City of Austin, particularly decks over a certain height, covered structures, and any construction near property lines or in flood zones. Outdoor Renovations handles all permit applications and inspections as part of our standard scope of work.",
      },
      {
        question: "What is the best wood for outdoor structures in Central Texas?",
        answer:
          "Western red cedar is our most popular choice for its natural rot and insect resistance, dimensional stability, and warm appearance. For higher-traffic surfaces like decks, composite decking offers excellent long-term durability with minimal maintenance. We discuss the pros and cons of each material during the design consultation.",
      },
      {
        question: "How long will a cedar pergola last in Austin's climate?",
        answer:
          "A well-built cedar pergola with proper finishing and maintenance typically lasts 15 to 25 years in Central Texas. The key factors are quality of construction, hardware selection, and consistent reapplication of UV-protective stain or sealant every 2 to 3 years.",
      },
      {
        question: "Can you build a casita or outdoor room on my property?",
        answer:
          "Yes, we build fully enclosed and semi-enclosed outdoor structures including casitas, pool houses, and covered outdoor rooms. These projects typically require building permits, and in some cases electrical and plumbing permits. We coordinate all trades and handle the full permitting process.",
      },
      {
        question: "What is the difference between wood and composite decking?",
        answer:
          "Wood decking — particularly cedar — offers a natural look and feel at a lower initial cost but requires regular staining and sealing. Composite decking costs more upfront but requires virtually no maintenance, resists fading and warping, and typically lasts longer. We help you weigh the trade-offs based on your budget and maintenance preferences.",
      },
      {
        question: "How long does a typical deck or pergola build take?",
        answer:
          "Most pergola projects take 1 to 2 weeks. Decks typically take 2 to 4 weeks depending on size, elevation, and complexity. Projects requiring permits may add 2 to 6 weeks for the approval process. We provide a complete timeline before construction begins.",
      },
    ],
  },

  // ─── SERVICE 4: SOFTSCAPING & PLANTING ────────────────────────────
  "softscaping-planting": {
    heroSubheadline:
      "Thoughtful plant selection and expert installation designed for Central Texas heat, soil, and water conditions.",
    heroBody:
      "Outdoor Renovations transforms landscapes with carefully curated plantings that thrive in Austin's climate. From native and adapted trees and shrubs to seasonal color beds and ornamental grasses, our planting designs balance beauty, water efficiency, and year-round interest. With 16+ years of experience in Central Texas horticulture, we know which plants perform and which ones struggle in our unique conditions.",
    heroImage: "/images/project-planting.jpg",
    sections: [
      {
        heading: "Plants That Thrive in the Austin Climate",
        body: "Central Texas is not a forgiving environment for plants. Alkaline limestone soils, intense summer heat, periodic drought, and occasional hard freezes eliminate many popular species from consideration. Our plant selection process starts with what works — proven performers adapted to our USDA Zone 8b/9a climate. We then layer in color, texture, seasonal interest, and screening to create a landscape that looks intentional and stays healthy year after year.",
        bullets: [
          "Native Texas species including live oaks, Texas mountain laurel, and cenizo",
          "Adapted Mediterranean and xeric plants for low-water areas",
          "Ornamental grasses like Lindheimer muhly and Gulf Coast muhly for texture and movement",
          "Seasonal color rotations for beds and containers",
          "Shade-tolerant plantings for understory and north-facing areas",
          "Edible landscapes including herb gardens, citrus, and fruit trees",
        ],
        image: "/images/project-garden.jpg",
      },
      {
        heading: "Professional Installation for Long-Term Success",
        body: "How a plant is installed matters as much as which plant is selected. Our installation process includes soil amendment based on site-specific testing, proper root ball preparation, correct planting depth, and initial irrigation setup. We also install mulch at the right depth to retain moisture, regulate soil temperature, and suppress weeds. Every planting project includes guidance on watering schedules and establishment care so your new landscape has the best possible start.",
        bullets: [
          "Soil testing and amendment tailored to your property's conditions",
          "Proper root ball preparation and planting depth for each species",
          "Mulch installation at recommended depth for moisture retention",
          "Temporary irrigation adjustments for plant establishment",
          "Post-installation care guide with watering and fertilization schedules",
        ],
        image: "/images/project-landscape.jpg",
      },
    ],
    systemsList: [
      "Native and adapted tree installation",
      "Shrub and hedge planting",
      "Ornamental grass installation",
      "Seasonal color bed planting",
      "Ground cover installation",
      "Container and raised bed planting",
      "Soil amendment and preparation",
      "Mulch installation and bed edging",
    ],
    processSteps: [
      {
        title: "Site Evaluation & Soil Analysis",
        description:
          "We assess your property's sun exposure, soil conditions, existing vegetation, drainage patterns, and microclimates to understand what will thrive in each area of your landscape.",
      },
      {
        title: "Plant Palette Development",
        description:
          "Based on the site analysis and your aesthetic preferences, we develop a plant palette specifying species, sizes, quantities, and placement — optimized for year-round interest and water efficiency.",
      },
      {
        title: "Soil Preparation & Amendment",
        description:
          "Before any planting begins, we prepare the soil with appropriate amendments to improve drainage, nutrient availability, and root development based on your site's specific conditions.",
      },
      {
        title: "Professional Installation",
        description:
          "Our crews install trees, shrubs, perennials, grasses, and groundcovers according to the approved plan, ensuring correct spacing, depth, and orientation for each species.",
      },
      {
        title: "Mulching & Bed Finishing",
        description:
          "We apply mulch at the proper depth, install bed edging where specified, and clean the site. Your landscape is camera-ready on completion day.",
      },
      {
        title: "Establishment Care Guidance",
        description:
          "We provide a detailed care guide for the establishment period — typically the first 1 to 2 growing seasons — covering watering schedules, fertilization timing, and what to watch for as your plants settle in.",
      },
    ],
    whyChooseBullets: [
      "16+ years of planting experience in Central Texas soils and climate",
      "Curated plant palettes proven to thrive in USDA Zone 8b/9a",
      "Soil testing and site-specific amendment for long-term plant health",
      "Relationships with top regional nurseries for premium plant material",
      "200+ completed landscapes across the Austin metro area",
      "1-Year Service Guarantee covering plant installation workmanship",
    ],
    faqs: [
      {
        question: "When is the best time to plant in Austin?",
        answer:
          "Fall (October through November) is the ideal planting season in Central Texas. Cooler temperatures and autumn rains allow roots to establish before summer heat arrives. Spring (February through April) is a good secondary window. We can install year-round with proper irrigation support, but fall planting gives your landscape the strongest start.",
      },
      {
        question: "Do you guarantee the plants you install?",
        answer:
          "Our 1-Year Service Guarantee covers the quality of our installation workmanship. Plant survival depends on many factors including watering, weather events, and ongoing care. We set you up for success with proper installation techniques, soil preparation, and a detailed care guide for the establishment period.",
      },
      {
        question: "Can you design a landscape that uses very little water?",
        answer:
          "Absolutely. Xeriscaping and water-wise design is one of our strengths. We specify native and adapted species that thrive on natural rainfall once established, group plants by water needs, and design efficient drip irrigation zones. Many of our clients see significant reductions in water use after we redesign their plantings.",
      },
      {
        question: "Will you remove existing plants and trees before installing new ones?",
        answer:
          "Yes, site clearing and removal of existing vegetation is a standard part of our planting projects when needed. We evaluate existing plants and recommend keeping healthy, well-placed specimens while removing those that are declining, poorly located, or incompatible with the new design.",
      },
      {
        question: "How do I keep new plants alive during an Austin summer?",
        answer:
          "The first summer is the critical period. We provide species-specific watering schedules, recommend deep and infrequent irrigation over shallow frequent watering, and ensure proper mulch depth to retain soil moisture. If you have an irrigation system, we adjust it for the establishment period. Many clients also pair planting projects with our irrigation service.",
      },
      {
        question: "Do you install sod or seed for new lawns?",
        answer:
          "We install sod — typically Zoysia, Bermuda, or St. Augustine varieties depending on sun exposure and your maintenance preferences. Sod provides an instant lawn and establishes more reliably than seed in Austin's conditions. We prepare the soil, grade for drainage, and install the sod with precise seam placement.",
      },
    ],
  },

  // ─── SERVICE 5: IRRIGATION & DRAINAGE ─────────────────────────────
  "irrigation-drainage": {
    heroSubheadline:
      "Smart irrigation systems and drainage solutions engineered for Austin's water conditions and regulations.",
    heroBody:
      "Outdoor Renovations designs and installs efficient irrigation systems and drainage solutions that protect your landscape investment and your property. From WiFi-enabled smart controllers and drip zones to French drains and grading corrections, we solve water management challenges across the Austin metro. Our systems are designed to comply with Austin Water utility guidelines while keeping your landscape healthy through Central Texas summers.",
    heroImage: "/images/project-garden.jpg",
    sections: [
      {
        heading: "Smart Irrigation for Water-Wise Landscapes",
        body: "Water is a precious resource in Central Texas, and an efficient irrigation system is essential for maintaining a healthy landscape without waste. Outdoor Renovations installs modern smart irrigation systems with WiFi-enabled controllers, rain and soil moisture sensors, and pressure-regulated drip zones that deliver the right amount of water to each area of your landscape. We design irrigation layouts around hydrozones — grouping plants with similar water needs — to maximize efficiency and comply with local watering restrictions.",
        bullets: [
          "WiFi-enabled smart controllers with weather-based scheduling",
          "Rain sensors and soil moisture sensors to prevent overwatering",
          "Drip irrigation for beds, trees, and foundation plantings",
          "Rotary and spray zones for turf areas with matched precipitation rates",
          "Hydrozone design grouping plants by water requirements",
          "Backflow prevention and compliance with local codes",
        ],
        image: "/images/project-landscape.jpg",
      },
      {
        heading: "Drainage Solutions That Protect Your Property",
        body: "Poor drainage causes erosion, foundation damage, standing water, and plant loss. Austin's combination of clay soils, limestone outcrops, and intense rainstorms makes drainage engineering critical for most properties. We design and install drainage systems that move water efficiently away from structures and sensitive areas while preventing downstream problems. From simple grading corrections to comprehensive French drain networks, we solve drainage issues at their source.",
        bullets: [
          "French drains and channel drains for subsurface water management",
          "Surface grading and swale construction to direct runoff",
          "Dry creek beds that manage water flow while enhancing landscape aesthetics",
          "Downspout extensions and catch basins to protect foundations",
          "Erosion control on sloped properties throughout the Hill Country",
        ],
      },
    ],
    systemsList: [
      "Hunter and Rain Bird smart controllers",
      "WiFi-enabled weather-based scheduling",
      "Drip irrigation systems",
      "Rotary and fixed spray heads",
      "Rain and soil moisture sensors",
      "French drain systems",
      "Channel and trench drains",
      "Dry creek bed installations",
      "Catch basins and pop-up emitters",
      "Backflow prevention devices",
    ],
    processSteps: [
      {
        title: "Site Assessment & Water Audit",
        description:
          "We evaluate your property's water needs, existing irrigation (if any), drainage trouble spots, soil permeability, and grade to develop a comprehensive water management plan.",
      },
      {
        title: "System Design & Layout",
        description:
          "Our team designs a custom irrigation and/or drainage layout with zone maps, head placement, pipe routing, and controller programming tailored to your landscape and local water regulations.",
      },
      {
        title: "Trenching & Installation",
        description:
          "We install mainlines, lateral lines, heads, drip tubing, valves, and drainage piping with minimal disruption to your existing landscape. Utility lines are located and marked before any excavation.",
      },
      {
        title: "Controller Setup & Programming",
        description:
          "Smart controllers are installed, connected to WiFi, and programmed with zone-specific schedules based on plant type, sun exposure, and soil conditions. We set up the app on your phone for remote access.",
      },
      {
        title: "Testing & Calibration",
        description:
          "Every zone is tested for coverage, pressure, and proper operation. We adjust heads, check for leaks, verify drainage flow, and fine-tune the system before final walkthrough.",
      },
    ],
    whyChooseBullets: [
      "Irrigation designs compliant with Austin Water utility guidelines",
      "Smart controller installation with WiFi and weather-based scheduling",
      "16+ years solving Austin drainage challenges in clay and limestone soils",
      "Licensed General Contractor of Landscape — Fully Bonded & Insured",
      "Integrated irrigation and drainage design to solve water issues holistically",
      "1-Year Service Guarantee on all irrigation and drainage installations",
    ],
    faqs: [
      {
        question: "How much water can a smart irrigation system save?",
        answer:
          "Most homeowners see 20 to 50 percent water savings compared to a standard timer-based system. Smart controllers adjust watering automatically based on weather data, soil moisture, and seasonal plant needs. Combined with drip irrigation and proper hydrozone design, the savings are significant — especially during Austin's long, hot summers.",
      },
      {
        question: "Do I need to upgrade my existing irrigation system?",
        answer:
          "If your system is more than 10 years old, uses a basic timer controller, or has uneven coverage, an upgrade will likely improve performance and reduce water waste. We offer irrigation audits to evaluate your current system and recommend targeted upgrades rather than unnecessary full replacements.",
      },
      {
        question: "What causes standing water in my yard after rain?",
        answer:
          "Standing water is usually caused by compacted clay soil, improper grading, or inadequate drainage infrastructure. Austin's clay soils have very low permeability, so water sits on the surface rather than soaking in. We diagnose the specific cause and install the appropriate solution — whether it is regrading, a French drain, a dry creek bed, or a combination.",
      },
      {
        question: "Can you install drainage without tearing up my whole yard?",
        answer:
          "In many cases, yes. We use targeted trenching techniques and plan drainage routes to minimize disruption to existing landscaping. We restore all disturbed areas after installation. For larger drainage projects, we coordinate the work with any planned landscape improvements to reduce overall disruption.",
      },
      {
        question: "How do I comply with Austin's watering schedule?",
        answer:
          "Austin Water enforces watering schedules based on your address. Our smart controllers are programmed to comply with these restrictions automatically, adjusting for seasonal changes and any emergency conservation measures. We set up your system to water during allowed hours and skip days when restrictions apply.",
      },
      {
        question: "Do irrigation systems need winterization in Austin?",
        answer:
          "Austin's winters are generally mild enough that full system winterization is not required. However, we recommend insulating backflow preventers and exposed pipes, and shutting off the system during freeze events. Our smart controllers can pause watering automatically when freezing temperatures are forecast.",
      },
    ],
  },

  // ─── SERVICE 6: LANDSCAPE LIGHTING ────────────────────────────────
  "landscape-lighting": {
    heroSubheadline:
      "Professional outdoor lighting design and installation that transforms your Austin landscape after dark.",
    heroBody:
      "Outdoor Renovations designs and installs landscape lighting systems that extend the beauty and usability of your outdoor space into the evening hours. From architectural uplighting and path lighting to moonlighting through tree canopies and dramatic accent features, our lighting designs enhance safety, security, and ambiance. We use commercial-grade LED fixtures built to perform in Central Texas conditions.",
    heroImage: "/images/project-evening.jpg",
    sections: [
      {
        heading: "Lighting Design That Elevates Your Landscape",
        body: "Great landscape lighting is about more than visibility — it is about creating atmosphere, highlighting your property's best features, and extending your outdoor living hours. Our designers use a layered approach combining ambient, task, and accent lighting to create depth and drama. We light architectural features, specimen trees, water elements, walkways, and outdoor living areas with careful attention to fixture placement, beam angles, and color temperature so the effect feels natural and inviting rather than harsh or overdone.",
        bullets: [
          "Architectural uplighting and wall washing for home facades",
          "Path and step lighting for safe navigation",
          "Moonlighting from tree canopies for soft, natural-looking illumination",
          "Accent lighting for specimen plants, sculptures, and water features",
          "Outdoor living area lighting for kitchens, pergolas, and seating areas",
          "Security and perimeter lighting with optional smart controls",
        ],
        image: "/images/project-evening.jpg",
      },
      {
        heading: "Commercial-Grade Fixtures and Smart Controls",
        body: "We install commercial-grade brass and copper LED fixtures that resist corrosion, withstand extreme heat, and deliver consistent light output for years. All systems run on low-voltage transformers for energy efficiency and safety. Smart timers and optional WiFi controls let you manage your lighting from your phone — adjusting schedules, dimming zones, and creating scenes for different occasions. We design every system with expansion capacity so you can add fixtures as your landscape grows.",
        bullets: [
          "Solid brass and copper fixtures with lifetime corrosion resistance",
          "Energy-efficient LED lamps with warm color temperatures",
          "Low-voltage systems for safety and reduced energy costs",
          "Smart timers with astronomical clock and photocell activation",
          "WiFi-enabled controls for remote management and scene creation",
          "Expandable systems designed to grow with your landscape",
        ],
      },
    ],
    processSteps: [
      {
        title: "Evening Consultation",
        description:
          "We visit your property after dark to evaluate existing lighting conditions, identify key features to highlight, and discuss the mood and functionality you want to achieve.",
      },
      {
        title: "Lighting Design & Layout",
        description:
          "Our designer creates a fixture placement plan specifying locations, fixture types, beam angles, and wattage for each light. We use the plan to calculate transformer sizing and wire runs.",
      },
      {
        title: "Fixture & Material Selection",
        description:
          "We present fixture options that match your aesthetic and budget. All recommended fixtures are commercial-grade with manufacturer warranties and proven performance in our climate.",
      },
      {
        title: "Installation",
        description:
          "Our crew installs transformers, runs low-voltage wiring, places and aims fixtures, and connects everything to the control system. Wiring is buried and concealed for a clean appearance.",
      },
      {
        title: "Nighttime Aiming & Adjustment",
        description:
          "After installation, we return at night to make final adjustments — fine-tuning beam angles, adjusting brightness levels, and ensuring even coverage across all zones.",
      },
      {
        title: "Smart Control Setup & Training",
        description:
          "We program your timer or smart controller, set up any app-based controls on your phone, and walk you through how to manage scenes, schedules, and dimming for different occasions.",
      },
    ],
    whyChooseBullets: [
      "Nighttime design consultations to see your property in actual lighting conditions",
      "Commercial-grade brass and copper fixtures — not plastic big-box alternatives",
      "Energy-efficient LED systems with smart timer and WiFi control options",
      "16+ years of lighting design experience in the Austin metro area",
      "Expandable systems designed to grow with future landscape additions",
      "1-Year Service Guarantee on all landscape lighting installations",
    ],
    faqs: [
      {
        question: "How much does a landscape lighting system cost?",
        answer:
          "Landscape lighting costs vary based on the number of fixtures, fixture quality, property size, and complexity of the design. Most residential projects range from targeted accent packages for focal areas to comprehensive whole-property systems. We provide a detailed proposal after the evening consultation so you know exactly what to expect.",
      },
      {
        question: "Are LED landscape lights bright enough?",
        answer:
          "Modern LED landscape fixtures produce excellent light output — in many cases surpassing older halogen systems while using a fraction of the energy. LED technology has advanced significantly, and the warm color temperatures we specify create a natural, inviting glow rather than a harsh or clinical look.",
      },
      {
        question: "How much does landscape lighting add to my electric bill?",
        answer:
          "Very little. Low-voltage LED systems are extremely energy efficient. A typical 15-to-20-fixture system running 6 hours per night costs roughly the same as running a single standard light bulb. The energy savings compared to older halogen systems are substantial.",
      },
      {
        question: "Can landscape lighting be added to an existing landscape?",
        answer:
          "Absolutely. Retrofit lighting installations are one of our most common projects. We install fixtures and bury wiring with minimal disruption to your existing beds, lawns, and hardscape. Most installations are completed in 1 to 2 days.",
      },
      {
        question: "How long do LED landscape lights last?",
        answer:
          "Quality LED lamps typically last 40,000 to 50,000 hours — roughly 15 to 20 years at typical usage rates. The solid brass and copper fixtures we install last even longer, often outliving multiple lamp replacements. This durability is a significant advantage over plastic fixtures that degrade in Central Texas UV conditions.",
      },
      {
        question: "Can I control my landscape lighting from my phone?",
        answer:
          "Yes. We offer WiFi-enabled control systems that let you turn zones on and off, adjust brightness, set schedules, and create scenes for different occasions — all from your smartphone. You can also set astronomical timers that automatically adjust on/off times based on sunset and sunrise throughout the year.",
      },
    ],
  },

  // ─── SERVICE 7: METAL FABRICATION ─────────────────────────────────
  "metal-fabrication": {
    heroSubheadline:
      "Custom iron and metal fences, gates, retaining walls, edging, and pergolas — fabricated and installed by Outdoor Renovations.",
    heroBody:
      "Outdoor Renovations designs and fabricates custom metalwork that adds strength, security, and distinctive style to your landscape. From ornamental iron fences and automated driveway gates to Corten steel retaining walls and modern metal pergolas, our fabrication capabilities allow us to create features that cannot be bought off the shelf. Every piece is built to withstand Austin's elements and complement your property's architecture.",
    heroImage: "/images/project-stonework.jpg",
    sections: [
      {
        heading: "Custom Metal Features for Distinctive Landscapes",
        body: "Metal fabrication opens design possibilities that wood and stone alone cannot achieve. Clean-lined steel pergolas, decorative iron entry gates, Corten steel planter walls that develop a rich natural patina, and precision-cut metal edging that creates crisp bed lines — these are the details that set a landscape apart. Our fabrication team works from custom designs, producing one-of-a-kind features sized and styled specifically for your property.",
        bullets: [
          "Ornamental iron and steel fencing in custom patterns and heights",
          "Automated driveway gates and pedestrian gates with access control",
          "Corten steel retaining walls and planter boxes with natural weathered patina",
          "Steel and aluminum pergolas and shade structures",
          "Precision metal landscape edging for clean bed lines",
          "Custom railings, handrails, and stair features",
          "Decorative screens, panels, and trellises",
        ],
        image: "/images/project-hardscape.jpg",
      },
      {
        heading: "Built to Last in Central Texas Conditions",
        body: "Metal in an outdoor environment must be properly specified and finished to resist corrosion. We select materials based on their intended application — hot-dipped galvanized steel for structural elements, powder-coated iron for decorative features, marine-grade stainless steel for hardware, and Corten steel where a natural weathering patina is desired. All welds are ground and finished before coating, and every piece receives multi-layer protection against Austin's UV, heat, and moisture.",
        bullets: [
          "Hot-dipped galvanized steel for structural durability",
          "Powder-coat finishing in custom colors for UV and corrosion resistance",
          "Corten weathering steel for architectural patina without maintenance",
          "Marine-grade stainless steel hardware for coastal and pool environments",
          "All welds ground and finished before protective coating",
        ],
      },
    ],
    processSteps: [
      {
        title: "Design Consultation",
        description:
          "We discuss your vision, take measurements, and evaluate the installation site. For gates, we assess driveway slope, clearance, and automation requirements. For fencing, we review property lines and any HOA guidelines.",
      },
      {
        title: "Custom Design & Shop Drawings",
        description:
          "Our team produces detailed shop drawings showing dimensions, materials, connection details, and finish specifications. You approve the design before fabrication begins.",
      },
      {
        title: "Fabrication",
        description:
          "Your custom metalwork is fabricated according to the approved drawings. We manage material sourcing, cutting, welding, grinding, and finishing in a controlled shop environment for consistent quality.",
      },
      {
        title: "Finishing & Coating",
        description:
          "Completed pieces receive multi-layer finishing — primer, powder coat or paint, and clear coat as specified — for maximum durability and the exact color and sheen you selected.",
      },
      {
        title: "Site Installation",
        description:
          "Our installation crew sets posts, mounts panels, installs gates, and connects any automation or access control systems. Footings are engineered for your specific soil conditions.",
      },
      {
        title: "Final Inspection & Walkthrough",
        description:
          "We inspect every weld, connection, and finish on the installed product, test all moving parts, and walk you through operation and care. Your 1-Year Service Guarantee is activated at completion.",
      },
    ],
    whyChooseBullets: [
      "In-house design and fabrication for fully custom metalwork",
      "No off-the-shelf products — every piece built to your specifications",
      "Multi-layer finishing systems for long-term corrosion resistance",
      "Gate automation and access control integration",
      "Licensed General Contractor of Landscape — Fully Bonded & Insured",
      "1-Year Service Guarantee on all fabrication and installation",
    ],
    faqs: [
      {
        question: "What types of metal do you work with?",
        answer:
          "We fabricate in mild steel, Corten (weathering) steel, aluminum, and stainless steel. Material selection depends on the application — structural, decorative, or architectural — and the desired finish. We recommend the best material for each project during the design consultation.",
      },
      {
        question: "How long does custom metal fabrication take?",
        answer:
          "Fabrication timelines depend on project complexity and current shop volume. Most residential projects — fences, gates, and edging — take 2 to 4 weeks from design approval to installation. Larger or more complex projects may take longer. We provide a firm timeline at the start of every project.",
      },
      {
        question: "Will a metal fence rust in Austin's climate?",
        answer:
          "Not with proper finishing. Our standard process includes hot-dip galvanizing or rust-inhibiting primer followed by powder coat in your chosen color. This multi-layer system provides years of corrosion protection. For Corten steel features, the surface develops a stable oxide patina that actually protects the underlying metal.",
      },
      {
        question: "Can you install an automated gate on my existing driveway?",
        answer:
          "In most cases, yes. We evaluate your driveway width, slope, clearance, and power availability to determine the best gate style and automation system. We handle everything from the gate fabrication to the motor, controls, and access systems including keypads, remotes, and smartphone integration.",
      },
      {
        question: "What is Corten steel and why is it popular in landscaping?",
        answer:
          "Corten steel is a weathering steel alloy that develops a stable, rust-colored patina when exposed to the elements. This patina protects the underlying metal from further corrosion, eliminating the need for painting or coating. It is popular in modern landscape design for retaining walls, planters, and edging because of its warm, natural appearance and zero-maintenance finish.",
      },
      {
        question: "Do metal fences and gates require permits in Austin?",
        answer:
          "Fences over 8 feet typically require a permit in Austin, and gates across driveways may require review for fire department access. Properties in historic districts or with HOA restrictions may have additional requirements. Outdoor Renovations handles all permitting and compliance research as part of our standard scope of work.",
      },
    ],
  },

  // ─── SERVICE 8: PROPERTY MANAGEMENT ───────────────────────────────
  "property-management": {
    heroSubheadline:
      "From weekly lawn maintenance to all-inclusive outdoor concierge service — keeping Austin landscapes pristine year-round.",
    heroBody:
      "Outdoor Renovations offers tiered property management programs that protect and maintain your landscape investment. Whether you need basic weekly mowing and edging or a comprehensive concierge service covering irrigation management, seasonal plantings, lighting adjustments, and proactive repairs, our team keeps your outdoor space looking its best through every Central Texas season. Managed by owner Kyle Stoutenger with 16+ years of Austin landscaping experience.",
    heroImage: "/images/project-outdoor-living.jpg",
    sections: [
      {
        heading: "Maintenance Programs for Every Level of Care",
        body: "Your landscape is a living investment that needs consistent, knowledgeable care to maintain its beauty and value. Outdoor Renovations offers structured maintenance programs ranging from essential lawn care to full-service outdoor property management. Every program is customized to your property's specific needs — plant types, irrigation system, hardscape features, lighting, and seasonal requirements. You choose the level of service; we handle the rest.",
        bullets: [
          "Weekly lawn mowing, edging, and blowing",
          "Shrub and hedge trimming on seasonal schedules",
          "Seasonal flower bed rotations and color plantings",
          "Irrigation system monitoring, adjustments, and repairs",
          "Mulch refresh and bed maintenance",
          "Landscape lighting inspection and bulb replacement",
          "Tree and shrub health monitoring and treatment",
          "All-inclusive outdoor concierge service for estate properties",
        ],
        image: "/images/hero-drone-estate.jpg",
      },
      {
        heading: "Proactive Care for Central Texas Conditions",
        body: "Maintaining a landscape in Austin requires more than mowing and watering. Summer heat stress, seasonal pest and disease pressure, soil compaction, winter freeze preparation, and irrigation system maintenance all demand attention at the right time. Our property management team follows a seasonal care calendar tailored to Central Texas conditions, addressing issues proactively rather than reactively. The result is a landscape that stays healthy and attractive year-round without you having to manage the details.",
        bullets: [
          "Spring: Pre-emergent application, fertilization, irrigation startup and testing",
          "Summer: Irrigation monitoring, heat stress management, pest and disease scouting",
          "Fall: Aeration, overseeding, seasonal color installation, freeze preparation",
          "Winter: Pruning, mulch application, irrigation winterization, lighting checks",
        ],
        image: "/images/project-landscape.jpg",
      },
    ],
    advantages: [
      "Consistent care from a team that knows your property and its specific needs",
      "Proactive seasonal maintenance based on Central Texas growing conditions",
      "Single point of contact for all outdoor maintenance and repair needs",
      "Priority scheduling for storm damage, irrigation emergencies, and urgent repairs",
      "Detailed visit reports so you always know what was done and what is planned",
      "Discounted rates on enhancement projects for maintenance clients",
    ],
    processSteps: [
      {
        title: "Property Assessment",
        description:
          "We conduct a thorough evaluation of your landscape — turf, plantings, irrigation, hardscape, lighting, and drainage — to understand the current condition and specific maintenance requirements.",
      },
      {
        title: "Custom Maintenance Plan",
        description:
          "Based on the assessment, we develop a maintenance program tailored to your property and budget. The plan includes visit frequency, seasonal tasks, and a 12-month care calendar.",
      },
      {
        title: "Team Assignment",
        description:
          "Your property is assigned to a consistent crew that learns its specific needs and maintains continuity of care. You will have a direct point of contact for questions and requests.",
      },
      {
        title: "Ongoing Service & Reporting",
        description:
          "Our team performs scheduled maintenance, documents each visit, and flags any issues that need attention. You receive regular reports and photos so you always know the status of your landscape.",
      },
      {
        title: "Seasonal Adjustments",
        description:
          "We adjust the maintenance program seasonally — modifying mowing frequency, updating irrigation schedules, rotating seasonal color, and performing time-sensitive tasks like fertilization and pruning at the right moment.",
      },
    ],
    investmentSection: {
      heading: "Property Management Investment",
      body: "Maintenance programs are priced based on property size, service level, and visit frequency. We offer tiered programs to match different needs and budgets — from essential lawn care to comprehensive estate management.",
      bullets: [
        "Essential: Weekly mowing, edging, and blowing with seasonal cleanups",
        "Standard: Essential services plus shrub trimming, bed maintenance, and irrigation monitoring",
        "Premium: Standard services plus seasonal color rotations, lighting maintenance, and proactive plant health care",
        "Concierge: All-inclusive outdoor property management for estate properties with priority response",
        "Discounted rates for Military, First Responders & Nonprofits",
      ],
    },
    whyChooseBullets: [
      "Owner-managed maintenance programs — not a franchise operation",
      "Consistent crews assigned to your property for continuity of care",
      "Seasonal care calendar designed for Central Texas growing conditions",
      "Single provider for maintenance, repairs, and enhancement projects",
      "200+ properties maintained across the Austin metro area",
      "Discounted rates for Military, First Responders & Nonprofits",
    ],
    faqs: [
      {
        question: "What is included in a basic maintenance plan?",
        answer:
          "Our Essential plan includes weekly mowing, edging, and blowing of all turf areas, plus seasonal cleanups in spring and fall. From there, you can add services like shrub trimming, bed maintenance, irrigation monitoring, and seasonal color to build a program that matches your property's needs and your budget.",
      },
      {
        question: "Can I customize my maintenance plan?",
        answer:
          "Absolutely. Every property is different, and we build each maintenance program around your specific landscape features, preferences, and budget. If you have irrigation but no lighting, or flower beds but no turf, we adjust the plan accordingly. You are never paying for services your property does not need.",
      },
      {
        question: "Do you offer one-time cleanups or seasonal services?",
        answer:
          "Yes. While our ongoing maintenance programs offer the best value and results, we also provide one-time services including spring cleanups, fall leaf removal, mulch installation, and pre-event property preparation. Contact us to schedule a one-time service.",
      },
      {
        question: "How do you handle irrigation issues during maintenance visits?",
        answer:
          "Our maintenance crews are trained to identify irrigation problems — broken heads, misaligned sprinklers, dry zones, and controller issues. Minor adjustments are handled on the spot during regular visits. Larger repairs are flagged, quoted, and scheduled promptly so problems do not escalate.",
      },
      {
        question: "What areas do you serve for property management?",
        answer:
          "We provide ongoing property management services throughout the Austin metro area including Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights.",
      },
      {
        question: "Can I switch between maintenance tiers?",
        answer:
          "Yes. We encourage clients to start with the tier that fits their current needs and adjust as circumstances change. Many clients start with the Essential plan and upgrade to Standard or Premium as they add landscape features or simply decide they want more comprehensive care. Changes can be made at any time.",
      },
    ],
  },
};
