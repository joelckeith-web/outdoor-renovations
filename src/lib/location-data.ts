import { siteConfig } from "./site-config";

export interface LocationData {
  city: string;
  slug: string;
  county: string;
  state: string;
  heroHeadline: string;
  heroDescription: string;
  whyTrustHeading: string;
  whyTrustSubheading: string;
  whyTrustBody: string[];
  whyTrustBullets: string[];
  residentialHeading: string;
  residentialBody: string;
  residentialServices: { name: string; description: string }[];
  expertiseHeading: string;
  expertiseSubheading: string;
  expertiseBody: string[];
  expertiseBullets: string[];
  equipmentHeading: string;
  equipmentBody: string;
  equipmentBullets: string[];
  protectionHeading: string;
  protectionSubheading: string;
  protectionBody: string;
  protectionBullets: string[];
  commercialServices: string[];
  nearbyCities: string[];
  faqs: { question: string; answer: string }[];
}

// ---------------------------------------------------------------------------
// City-specific metadata used to inject genuine local details into each page
// ---------------------------------------------------------------------------

interface CityMeta {
  county: string;
  localFlavor: string;
  trustDetail: string;
  expertiseDetail: string;
  soilNote: string;
  landmarks: string;
  residentialServices: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const cityMeta: Record<string, CityMeta> = {
  "Westlake Hills": {
    county: "Travis",
    localFlavor:
      "Nestled among rolling limestone hills west of downtown Austin, Westlake Hills features luxury estates on expansive lots with panoramic Hill Country views and proximity to Lake Austin.",
    trustDetail:
      "Westlake Hills properties demand meticulous attention to detail. Steep terrain, mature live oaks, and stringent city ordinances mean your landscape contractor must understand grading, tree preservation, and the unique permitting requirements of this enclave.",
    expertiseDetail:
      "From the winding streets off Westlake Drive to the hillside estates above Redbud Trail, we have completed dozens of projects in Westlake Hills. We know where the caliche sits close to the surface, which slopes require engineered retaining walls, and how to design irrigation that respects the community's water-use standards.",
    soilNote:
      "Westlake Hills lots frequently sit on shallow limestone and caliche subsoil, requiring specialized excavation techniques for post holes, drainage lines, and planting beds.",
    landmarks:
      "Lake Austin, Westlake Drive, Walsh Boat Landing, Wild Basin Wilderness Preserve",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Custom to-scale 2D plans, 3D renderings, and full design documentation for Westlake Hills estates. Every design reflects the hillside terrain, mature canopy, and luxury character of the neighborhood.",
      },
      {
        name: "Hardscaping",
        description:
          "Premium patios, walkways, retaining walls, outdoor kitchens, and fire features built with natural stone and precision craftsmanship. Designed to complement Westlake Hills' elevated topography and upscale aesthetic.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, pavilions, decks, privacy screens, and custom fencing handcrafted to define your outdoor space. Built to withstand Central Texas conditions while enhancing your Westlake Hills property's value.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Expert plant selection and installation tailored to Westlake Hills' rocky, sloped terrain and Central Texas climate. Native plants, ornamental grasses, and drought-adapted species for year-round beauty.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Smart irrigation systems and hillside drainage solutions designed for Westlake Hills properties. Proper water management is critical on sloped lots — we ensure healthy landscapes without runoff or erosion.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Professional outdoor lighting design and installation that highlights Westlake Hills' dramatic hillside views, enhances curb appeal, and provides safety along walkways, steps, and entryways.",
      },
    ],
    faqs: [
      {
        question:
          "Do you handle the steep hillside lots common in Westlake Hills?",
        answer:
          "Absolutely. Many Westlake Hills properties sit on significant grades. We design and build engineered retaining walls, terraced planting beds, and hillside drainage systems that work with the natural terrain rather than against it.",
      },
      {
        question:
          "Will you coordinate with the City of Westlake Hills on permits?",
        answer:
          "Yes. Westlake Hills has specific development ordinances including tree preservation requirements and impervious cover limits. We handle the permitting process and ensure your project meets all local regulations.",
      },
      {
        question:
          "How do you protect mature live oaks during construction in Westlake Hills?",
        answer:
          "We follow ISA best practices for tree protection zones, use root-sensitive excavation methods, and coordinate with certified arborists when work occurs near the critical root zones of heritage oaks.",
      },
      {
        question:
          "What drought-tolerant plants work best for Westlake Hills landscapes?",
        answer:
          "We recommend a mix of native and adapted species such as Texas Mountain Laurel, Flame Acanthus, Mexican Feathergrass, and Gregg's Mistflower. These thrive in Westlake Hills' rocky, well-drained soils with minimal supplemental water.",
      },
      {
        question:
          "Can you design an outdoor living space with a Lake Austin view in mind?",
        answer:
          "That is one of our specialties. We orient patios, pergolas, and seating areas to frame panoramic Hill Country and lake views while integrating privacy screening and wind protection where needed.",
      },
      {
        question:
          "How much does a typical landscape renovation cost in Westlake Hills?",
        answer:
          "Projects in Westlake Hills vary widely based on lot size, terrain complexity, and scope. Most comprehensive renovations range from $50,000 to $250,000+. We provide detailed proposals with transparent, itemized pricing after an on-site consultation.",
      },
    ],
  },
  Lakeway: {
    county: "Travis",
    localFlavor:
      "A premier lakeside community along the southern shore of Lake Travis, Lakeway offers golf course estates, waterfront properties, and sweeping Hill Country panoramas.",
    trustDetail:
      "Lakeway homeowners invest heavily in their outdoor spaces because the lifestyle centers on outdoor living. From poolside entertaining areas to boat-dock-adjacent landscaping, every project must withstand intense Central Texas sun, periodic flooding near the lake, and the rocky Hill Country terrain.",
    expertiseDetail:
      "We have worked throughout Lakeway's neighborhoods — from The Hills and Rough Hollow to Lakeway Highlands and the estates along Lakeway Boulevard. Our crews understand the HOA guidelines, the limestone substrate, and how to design landscapes that complement the lake-centric lifestyle.",
    soilNote:
      "Lakeway properties frequently feature shallow limestone bedrock and caliche, requiring rock-sawing and specialized drilling for footings, irrigation trenches, and large-caliper tree planting.",
    landmarks:
      "Lake Travis, Lakeway Resort & Spa, The Hills of Lakeway, Rough Hollow, Lakeway City Park",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Custom landscape plans for Lakeway properties, from lakeside retreats to golf course estates. Full design documentation including 2D plans, 3D renderings, and plant schedules tailored to your lot.",
      },
      {
        name: "Hardscaping",
        description:
          "Patios, pool decks, outdoor kitchens, fire pits, and stone retaining walls built for Lakeway's active outdoor lifestyle. Premium materials selected for durability in Central Texas heat.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, cabanas, decks, and custom shade structures designed for Lakeway living. Handcrafted from premium materials to create functional outdoor rooms that extend your entertaining space.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Drought-tolerant planting designs for Lakeway properties. Texas natives, adapted ornamentals, and strategic shade trees selected for the area's limestone soils and water conservation requirements.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Smart irrigation systems engineered for Lakeway's water restrictions and limestone terrain. Efficient drip zones, rotary nozzles, and WiFi-enabled controllers that maximize every drop.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Low-voltage LED lighting systems that showcase Lakeway properties after dark. Path lighting, accent lighting, and entertaining-area illumination designed for both beauty and security.",
      },
    ],
    faqs: [
      {
        question: "Can you work on lakefront properties in Lakeway?",
        answer:
          "Yes. We have experience with lakefront and near-waterfront projects in Lakeway. We understand LCRA setback requirements, erosion control best practices, and how to design landscapes that enhance lake views while protecting the shoreline.",
      },
      {
        question: "Do you work with Lakeway HOA requirements?",
        answer:
          "We do. Many Lakeway communities — including Rough Hollow, The Hills, and Lakeway Highlands — have architectural review processes. We prepare submissions and ensure designs meet community standards before construction begins.",
      },
      {
        question:
          "What irrigation approach works best for Lakeway's rocky soil?",
        answer:
          "We design drip and low-volume spray systems that maximize water efficiency in rocky, fast-draining soils. Smart controllers with weather-based adjustments help stay within Lakeway's water-use guidelines while keeping landscapes healthy.",
      },
      {
        question: "How do you handle deer pressure in Lakeway landscapes?",
        answer:
          "Deer are a reality in Lakeway. We select deer-resistant plant species, install protective fencing where appropriate, and design planting schemes that minimize browsing damage without sacrificing visual appeal.",
      },
      {
        question:
          "Can you build an outdoor kitchen suited to Lakeway's climate?",
        answer:
          "Absolutely. We design and build outdoor kitchens with durable natural stone, weather-resistant cabinetry, and shade structures that make year-round outdoor cooking comfortable even during Central Texas summers.",
      },
      {
        question: "How long does a full landscape project take in Lakeway?",
        answer:
          "Timelines depend on project scope and complexity. A typical comprehensive renovation in Lakeway takes 4 to 10 weeks from groundbreaking to completion. We provide a detailed schedule during the proposal phase so you know what to expect.",
      },
    ],
  },
  "Bee Cave": {
    county: "Travis",
    localFlavor:
      "Anchored by the Hill Country Galleria and surrounded by rapidly growing luxury developments, Bee Cave blends Hill Country charm with modern upscale living along the Highway 71 corridor.",
    trustDetail:
      "Bee Cave's explosive growth means many properties are on newly developed lots with compacted fill soil, minimal existing vegetation, and builder-grade landscaping that needs a complete overhaul. Homeowners here want polished outdoor spaces that match the quality of their new homes.",
    expertiseDetail:
      "From Spanish Oaks and Falconhead to the neighborhoods surrounding Bee Cave Road, we understand the development patterns, soil conditions, and HOA expectations across Bee Cave. Our team regularly works with homeowners upgrading from builder-basic landscapes to custom outdoor environments.",
    soilNote:
      "Newly developed Bee Cave lots often feature compacted clay-limestone fill that requires soil amendment, proper drainage design, and deep-root watering strategies to establish healthy plantings.",
    landmarks:
      "Hill Country Galleria, Bee Cave Central Park, Falconhead Golf Club, Spanish Oaks, Hamilton Pool Road",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Comprehensive landscape design for Bee Cave properties, from Hill Country estates to master-planned community homes. Site-specific plans that respect natural terrain while maximizing outdoor living potential.",
      },
      {
        name: "Hardscaping",
        description:
          "Natural stone patios, outdoor kitchens, fire features, and retaining walls built for Bee Cave's rocky Hill Country terrain. Expert grading and construction on challenging limestone sites.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, shade structures, decks, fences, and gates custom-built for Bee Cave homes. Designed to meet HOA requirements while creating distinctive outdoor living spaces.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Native and adapted plant installations for Bee Cave's unique Hill Country conditions. Xeriscaping, pollinator gardens, and low-maintenance plantings that thrive in shallow, rocky soils.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Water-efficient irrigation and drainage systems designed for Bee Cave properties. Smart controllers, drip irrigation, and proper drainage planning for limestone substrates and flash flood conditions.",
      },
      {
        name: "Metal Fabrication",
        description:
          "Custom iron and metal work for Bee Cave properties — fences, gates, railings, and architectural accents fabricated to your specifications. Durable, weather-resistant finishes for lasting beauty.",
      },
    ],
    faqs: [
      {
        question:
          "Can you replace builder-grade landscaping in Bee Cave new developments?",
        answer:
          "That is one of our most common projects. We remove minimal builder plantings and replace them with a comprehensive landscape design that includes proper soil preparation, irrigation, hardscaping, and a plant palette suited to your property's conditions.",
      },
      {
        question:
          "Do you handle Bee Cave HOA architectural review submissions?",
        answer:
          "Yes. We prepare complete design packages including site plans, plant schedules, and material specifications that satisfy HOA review committees in communities like Spanish Oaks, Falconhead, and others throughout Bee Cave.",
      },
      {
        question: "How do you deal with the rocky ground in Bee Cave?",
        answer:
          "We use specialized equipment for rock excavation and work with the existing terrain where possible. Raised planting beds, imported soil blends, and strategic grading allow us to create lush landscapes even on the most challenging Hill Country lots.",
      },
      {
        question:
          "What shade structures work well for Bee Cave's hot summers?",
        answer:
          "We build custom cedar pergolas, steel shade structures, and covered patios designed to reduce sun exposure while maintaining airflow. These are engineered for Central Texas wind loads and UV exposure.",
      },
      {
        question: "Is irrigation important for new Bee Cave landscapes?",
        answer:
          "Essential. Bee Cave's rocky soils drain quickly and summer temperatures regularly exceed 100 degrees. We install smart irrigation systems with drip zones, matched-precipitation sprays, and weather-based controllers to establish and maintain healthy plantings.",
      },
      {
        question:
          "How much should I budget for a full landscape renovation in Bee Cave?",
        answer:
          "Most comprehensive Bee Cave renovations range from $40,000 to $200,000+ depending on lot size and scope. We provide detailed, itemized proposals after an on-site assessment so you have a clear picture before any work begins.",
      },
    ],
  },
  "Dripping Springs": {
    county: "Hays",
    localFlavor:
      "Known as the Gateway to the Hill Country and the heart of Texas wine country, Dripping Springs features sprawling ranch estates, vineyard properties, and a relaxed rural-luxury lifestyle along Ranch Road 12.",
    trustDetail:
      "Dripping Springs properties tend toward larger acreage with diverse terrain — open meadows, wooded creek beds, and rocky hillsides all on the same lot. Landscape work here requires understanding of land management at scale, water well systems, and the rural character homeowners want to preserve.",
    expertiseDetail:
      "We have completed projects from the estates along Fitzhugh Road to the ranches off Hamilton Pool Road. We understand Hays County permitting, septic system setback requirements, and how to design landscapes that feel natural while providing the refined outdoor living spaces our clients expect.",
    soilNote:
      "Dripping Springs sits on the eastern edge of the Edwards Plateau. Soil conditions range from thin rocky topsoil over limestone to deeper clay loams in creek bottoms, requiring site-specific soil strategies for each planting zone.",
    landmarks:
      "Mercer Street, Hamilton Pool Preserve, Dripping Springs wine trail (Fitzhugh Road), Reimers Ranch Park, Camp Ben McCulloch",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Custom landscape plans for Dripping Springs' ranch estates and acreage properties. Full design services from concept through construction documents, honoring the natural Hill Country character.",
      },
      {
        name: "Hardscaping",
        description:
          "Locally sourced limestone patios, ranch-style outdoor kitchens, fire pits, and natural stone walls built for Dripping Springs' rural Hill Country setting. Craftsmanship that blends with the land.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Native Hill Country plantings for Dripping Springs properties. Wildflower meadows, native grasses, shade trees, and drought-tolerant perennials selected for the area's well-drained soils and minimal water availability.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Well-water-compatible irrigation systems and drainage solutions for Dripping Springs properties. Rainwater harvesting integration, efficient zone design, and smart controllers for properties on well or limited water supply.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, ranch-style fencing, gates, decks, and custom shade structures for Dripping Springs properties. Cedar and hardwood construction built to complement the Hill Country landscape.",
      },
      {
        name: "Property & Pest Management",
        description:
          "Comprehensive property maintenance for Dripping Springs estates and acreage. Lawn care, seasonal planting, tree trimming, pest control, and all-inclusive outdoor concierge service to protect your landscape investment.",
      },
    ],
    faqs: [
      {
        question:
          "Do you handle large acreage landscape projects in Dripping Springs?",
        answer:
          "Yes. Many of our Dripping Springs projects involve multi-acre properties. We design and install landscape improvements that focus on key living areas while integrating naturally with the surrounding Hill Country terrain.",
      },
      {
        question:
          "Can you design landscapes that complement Dripping Springs' wine country aesthetic?",
        answer:
          "Absolutely. We create outdoor environments with native stone, drought-adapted Mediterranean plantings, and rustic-refined hardscaping that reflects the Hill Country wine country character Dripping Springs is known for.",
      },
      {
        question:
          "How do you handle water well irrigation systems in Dripping Springs?",
        answer:
          "Many Dripping Springs properties rely on water wells. We design ultra-efficient drip irrigation systems, incorporate rainwater harvesting where feasible, and select low-water native plantings to minimize well-water demand.",
      },
      {
        question:
          "Do you work with Hays County permitting for Dripping Springs projects?",
        answer:
          "We do. Hays County has specific requirements for impervious cover, stormwater management, and development near waterways. We navigate the permitting process and ensure your project is fully compliant.",
      },
      {
        question:
          "What fencing options work for Dripping Springs ranch properties?",
        answer:
          "We build custom cedar and metal fencing, ranch-style pipe fencing, and decorative steel gates. Our designs respect the rural character of Dripping Springs while providing security, privacy, and curb appeal.",
      },
      {
        question:
          "Can you create a fire pit or outdoor gathering area for my Dripping Springs property?",
        answer:
          "Yes. We design and build custom fire features from native limestone and flagstone, complete with seating walls, lighting, and surrounding plantings. These become the centerpiece of outdoor entertaining on Hill Country evenings.",
      },
    ],
  },
  Tarrytown: {
    county: "Travis",
    localFlavor:
      "One of Austin's most coveted historic neighborhoods, Tarrytown features tree-lined streets, mid-century and classic Austin homes, and a walkable location between Lake Austin and the heart of downtown.",
    trustDetail:
      "Tarrytown's established character means working around heritage trees, navigating narrow lots, and respecting the architectural context of one of Austin's oldest premium neighborhoods. Landscape work here requires finesse, not just equipment.",
    expertiseDetail:
      "We have renovated front yards, backyards, and complete properties throughout Tarrytown — from the streets near Casis Elementary to the estates along Scenic Drive overlooking Lake Austin. We understand the neighborhood's rhythm, the City of Austin's heritage tree ordinance, and how to work efficiently in tight residential settings.",
    soilNote:
      "Tarrytown lots vary from deep clay soils near the lake to rocky, root-filled ground beneath mature tree canopies. Soil testing and root-zone-sensitive construction practices are essential for every project.",
    landmarks:
      "Lake Austin, Red Bud Isle, Deep Eddy Pool, Casis Village, Tarrytown Park, MoPac Expressway",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Thoughtful landscape design for Tarrytown's established, tree-lined properties. Plans that respect mature canopy, historic neighborhood character, and integrate seamlessly with existing architecture.",
      },
      {
        name: "Hardscaping",
        description:
          "Elegant patios, walkways, garden walls, and outdoor living areas designed for Tarrytown's classic neighborhood aesthetic. Natural stone and premium pavers selected to complement mid-century and traditional homes.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Shade-garden plantings, foundation beds, and seasonal color designed for Tarrytown's mature canopy environment. Expert plant selection for the area's mix of sun and deep shade conditions.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Subtle, sophisticated outdoor lighting for Tarrytown properties. Uplighting for mature trees, path lighting for walkways, and accent lighting that enhances curb appeal without disrupting the neighborhood's character.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Privacy fences, garden gates, pergolas, and custom decks designed to fit Tarrytown's established lot sizes and setbacks. Craftsmanship that complements the neighborhood's architectural heritage.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Irrigation retrofits and drainage solutions for Tarrytown's older properties. Upgrading outdated systems to smart irrigation technology while solving grading and drainage issues common in the neighborhood.",
      },
    ],
    faqs: [
      {
        question:
          "Can you work around Tarrytown's heritage trees without damaging them?",
        answer:
          "Absolutely. The City of Austin's heritage tree ordinance is strict and we take it seriously. We use root-sensitive excavation methods, avoid compaction within critical root zones, and coordinate with certified arborists to protect these irreplaceable trees.",
      },
      {
        question:
          "Do you work on smaller Tarrytown lots with tight access?",
        answer:
          "Yes. Many Tarrytown properties have narrow side yards and limited equipment access. We plan logistics carefully, use compact equipment where necessary, and protect adjacent properties and streetscapes during construction.",
      },
      {
        question:
          "Can you design a landscape that fits Tarrytown's historic neighborhood character?",
        answer:
          "We design landscapes that complement Tarrytown's established aesthetic — mature shade trees, layered foundation plantings, natural stone pathways, and refined hardscaping that enhances rather than overwhelms the existing architecture.",
      },
      {
        question:
          "Is a sprinkler system upgrade worth it for my Tarrytown property?",
        answer:
          "Many Tarrytown homes have aging irrigation systems that waste water and underperform. A modern smart irrigation upgrade improves plant health, reduces water bills, and ensures compliance with City of Austin watering restrictions.",
      },
      {
        question:
          "What outdoor living features work well for Tarrytown backyards?",
        answer:
          "Tarrytown backyards benefit from shade-oriented design — pergolas, covered patios, and understory plantings that create comfortable outdoor rooms beneath the existing tree canopy. We integrate seating areas, lighting, and cooking spaces into compact layouts.",
      },
      {
        question:
          "How long does a typical Tarrytown landscape project take?",
        answer:
          "Most Tarrytown projects take 3 to 8 weeks depending on scope. We work efficiently to minimize disruption to you and your neighbors, and we communicate schedules clearly before work begins.",
      },
    ],
  },
  "Barton Creek": {
    county: "Travis",
    localFlavor:
      "Home to the exclusive Barton Creek Country Club and some of Austin's most prestigious estates, Barton Creek offers resort-caliber living with championship golf, protected greenbelts, and commanding Hill Country views.",
    trustDetail:
      "Barton Creek properties set the standard for luxury outdoor living in Austin. Homeowners here expect flawless execution, premium materials, and designs that integrate seamlessly with the community's golf course views, greenbelt access, and architectural covenants.",
    expertiseDetail:
      "We have completed high-end landscape renovations throughout Barton Creek — from the Amarra Drive estates to the homes lining the Fazio Canyons course. We work within the community's architectural review process and understand the expectations for quality and aesthetics in this enclave.",
    soilNote:
      "Barton Creek properties sit atop the Barton Creek watershed, with thin topsoil over fractured limestone. The Edwards Aquifer recharge zone requires special attention to stormwater management and chemical-free landscape maintenance practices.",
    landmarks:
      "Barton Creek Country Club, Barton Creek Greenbelt, Barton Springs, Lost Creek Boulevard, Amarra Drive",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Estate-level landscape design for Barton Creek properties. Comprehensive plans that integrate with the community's golf course views, natural creek features, and premium architectural standards.",
      },
      {
        name: "Hardscaping",
        description:
          "Premium outdoor kitchens, expansive patios, pool surrounds, and natural stone features for Barton Creek estates. Materials and craftsmanship that match the community's luxury standard.",
      },
      {
        name: "Custom Carpentry",
        description:
          "High-end pergolas, pool cabanas, outdoor living structures, and custom fencing for Barton Creek properties. Architecturally integrated designs that extend your indoor living seamlessly outdoors.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Curated planting designs for Barton Creek estates. Specimen trees, ornamental displays, and foundation plantings that provide four-season interest while meeting the community's landscape standards.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Architectural lighting design for Barton Creek properties. Facade uplighting, landscape accent lighting, and outdoor entertaining illumination that showcases your estate after dark.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "High-performance irrigation and drainage systems for Barton Creek's large-lot properties. Multi-zone smart irrigation, proper drainage engineering, and creek-side erosion control solutions.",
      },
    ],
    faqs: [
      {
        question:
          "Do you work within Barton Creek's architectural review process?",
        answer:
          "Yes. We prepare complete design submittals that meet the Barton Creek community's architectural standards, including detailed site plans, material specifications, and plant schedules. We handle the review process so you do not have to.",
      },
      {
        question:
          "Can you design a landscape that complements golf course views in Barton Creek?",
        answer:
          "We specialize in view-corridor design. We select low-profile plantings along sight lines, frame views with strategic specimen trees, and create outdoor living spaces oriented to maximize the panoramic golf course and Hill Country vistas.",
      },
      {
        question:
          "How do you protect the Barton Creek watershed during construction?",
        answer:
          "We follow strict erosion control and stormwater management practices required in the Barton Creek watershed. This includes silt fencing, stabilized construction entrances, and the use of organic fertilizers and pest treatments to protect the Edwards Aquifer recharge zone.",
      },
      {
        question:
          "What premium materials do you use for Barton Creek hardscaping?",
        answer:
          "We work with natural limestone, travertine, bluestone, and custom-cut flagstone sourced from Texas quarries. We also install premium composite decking and powder-coated steel structures for a refined, long-lasting finish.",
      },
      {
        question:
          "Can you create a resort-style pool area landscape for my Barton Creek home?",
        answer:
          "Absolutely. We design pool surrounds with natural stone decking, lush tropical-adapted plantings, shade structures, outdoor kitchens, and integrated lighting that create a private resort atmosphere on your property.",
      },
      {
        question:
          "Do you provide ongoing landscape management for Barton Creek properties?",
        answer:
          "Yes. We offer comprehensive property management programs that include weekly maintenance, seasonal color rotations, irrigation monitoring, and proactive plant health care — keeping your Barton Creek landscape in pristine condition year-round.",
      },
    ],
  },
  Rollingwood: {
    county: "Travis",
    localFlavor:
      "A small, quiet enclave of established luxury just minutes from Zilker Park and downtown Austin, Rollingwood features mature tree canopies, generous lots, and a neighborhood feel that belies its central location.",
    trustDetail:
      "Rollingwood homeowners value understated quality and privacy. The neighborhood's mature oaks and pecans create a park-like setting that landscape work must enhance, not disrupt. Thoughtful design and careful construction practices are non-negotiable here.",
    expertiseDetail:
      "We have worked on properties throughout Rollingwood — from Hatley Drive to Ridgewood Road and the streets near Rollingwood Park. We understand the City of Rollingwood's permitting process, the neighborhood's tree preservation priorities, and how to deliver premium results in this close-knit community.",
    soilNote:
      "Rollingwood lots typically feature clay-limestone soils with extensive root systems from mature trees. Construction must account for root zones, existing drainage patterns, and soil compaction from decades of established landscapes.",
    landmarks:
      "Zilker Park, Barton Springs Pool, Lady Bird Lake, Rollingwood Park, Bee Caves Road",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Custom landscape design for Rollingwood's established, high-value properties. Space-efficient plans that maximize outdoor living potential while maintaining the neighborhood's lush, park-like character.",
      },
      {
        name: "Hardscaping",
        description:
          "Patios, walkways, retaining walls, and outdoor entertaining areas designed for Rollingwood's hillside lots. Expert construction on sloped terrain with premium natural stone and pavers.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Layered planting designs for Rollingwood properties. Foundation plantings, privacy screening, and ornamental beds that add texture and color to the neighborhood's established tree canopy.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Decks, fences, pergolas, and privacy structures custom-built for Rollingwood's unique lot configurations. Maximizing usable outdoor space on hillside and irregular properties.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Outdoor lighting that enhances Rollingwood's intimate neighborhood charm. Pathway lights, garden accents, and entertaining-area illumination designed for established lots and close-neighbor proximity.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Slope-appropriate irrigation and critical drainage solutions for Rollingwood's hillside properties. Preventing erosion and water damage while keeping landscapes healthy through Central Texas summers.",
      },
    ],
    faqs: [
      {
        question:
          "How do you protect Rollingwood's mature trees during landscape construction?",
        answer:
          "We implement comprehensive tree protection plans including root zone fencing, hand excavation near major roots, and grade-change management to ensure Rollingwood's signature mature oaks and pecans remain healthy throughout and after construction.",
      },
      {
        question: "Do you handle permits with the City of Rollingwood?",
        answer:
          "Yes. The City of Rollingwood has its own permitting requirements separate from Austin. We manage the entire permit process and ensure your project complies with local building codes and development standards.",
      },
      {
        question:
          "Can you create a private backyard retreat in Rollingwood?",
        answer:
          "That is what we do best. We design layered privacy plantings, custom fencing, shade structures, and intimate outdoor living areas that transform Rollingwood backyards into secluded retreats — all while preserving the neighborhood's established tree canopy.",
      },
      {
        question:
          "What low-maintenance landscape options work for Rollingwood?",
        answer:
          "We design low-maintenance landscapes using native and adapted plants, efficient drip irrigation, quality mulch systems, and durable hardscaping that reduces ongoing upkeep while keeping your Rollingwood property looking its best.",
      },
      {
        question: "Can you improve drainage on my Rollingwood property?",
        answer:
          "Drainage issues are common in Rollingwood due to clay soils and mature root systems that alter natural water flow. We design and install French drains, channel drains, dry creek beds, and grading solutions that move water away from structures effectively.",
      },
      {
        question:
          "How does proximity to Zilker Park influence Rollingwood landscape design?",
        answer:
          "Rollingwood's location near Zilker and Barton Creek means many properties border natural areas. We design landscapes that transition naturally into the surrounding greenbelt aesthetic, using native plantings and natural stone that complement the environment.",
      },
    ],
  },
  "Steiner Ranch": {
    county: "Travis",
    localFlavor:
      "A large, family-oriented master-planned community along the north shore of Lake Travis, Steiner Ranch combines Hill Country beauty with resort-style amenities, top-rated schools, and a strong sense of community.",
    trustDetail:
      "Steiner Ranch homes range from comfortable family residences to lakefront luxury estates. The community's HOA maintains high standards for exterior appearance, and homeowners want outdoor spaces that accommodate active family life while enhancing their property's value.",
    expertiseDetail:
      "We have worked in Steiner Ranch neighborhoods from River Dance and Emerald Ridge to the Commons and the estates along Quinlan Park Road. We know the HOA guidelines, understand which improvements require architectural review, and design landscapes that meet community standards while reflecting each homeowner's vision.",
    soilNote:
      "Steiner Ranch properties sit on typical Hill Country terrain — thin topsoil over limestone with pockets of clay. Many lots have significant grades that require retaining walls and erosion management for successful landscape installations.",
    landmarks:
      "Lake Travis, Steiner Ranch Steakhouse, The University of Texas Golf Club, Quinlan Park, River Place Nature Trail",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Comprehensive landscape plans for Steiner Ranch homes. Designs that work within HOA guidelines while transforming standard builder lots into distinctive outdoor living spaces.",
      },
      {
        name: "Hardscaping",
        description:
          "Patios, outdoor kitchens, fire pits, pool surrounds, and retaining walls for Steiner Ranch properties. Durable construction and premium materials that elevate builder-grade lots.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, shade structures, privacy fences, and custom decks for Steiner Ranch homes. Designed to meet community standards while creating outdoor rooms for Hill Country living.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Water-wise planting designs for Steiner Ranch's Hill Country setting. Replacing builder-grade landscaping with native plants, ornamental grasses, and drought-adapted species that reduce water use and maintenance.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Smart irrigation upgrades and drainage corrections for Steiner Ranch properties. Replacing inefficient builder systems with zone-optimized drip and rotary designs controlled by WiFi-enabled smart timers.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Professional landscape lighting for Steiner Ranch homes. Curb appeal uplighting, entertaining-area illumination, and pathway safety lighting that sets your property apart in the community.",
      },
    ],
    faqs: [
      {
        question:
          "Do you handle Steiner Ranch HOA approval for landscape projects?",
        answer:
          "Yes. We prepare and submit complete design packages to the Steiner Ranch HOA architectural review committee. We know the community guidelines well and design projects that meet approval requirements the first time.",
      },
      {
        question:
          "Can you design a kid-friendly outdoor space for Steiner Ranch families?",
        answer:
          "Absolutely. We create outdoor spaces with durable turf areas, safe hardscaping, shade structures, and defined play areas that work for active families while maintaining the polished appearance Steiner Ranch homeowners expect.",
      },
      {
        question: "How do you manage slopes on Steiner Ranch lots?",
        answer:
          "Many Steiner Ranch lots have significant grades. We build engineered retaining walls using natural stone or architectural block, create terraced planting areas, and install proper drainage to manage water flow on hillside properties.",
      },
      {
        question:
          "What water-efficient landscaping options work in Steiner Ranch?",
        answer:
          "We design with drought-tolerant native grasses, adapted perennials, and efficient drip irrigation systems that keep Steiner Ranch landscapes attractive while minimizing water use — important given the community's Hill Country water supply considerations.",
      },
      {
        question:
          "Can you build a pergola or covered patio for my Steiner Ranch home?",
        answer:
          "Yes. We design and build custom cedar and steel pergolas, covered patios, and shade sails engineered for Central Texas conditions. These structures extend your usable outdoor living space and provide essential relief from summer heat.",
      },
      {
        question:
          "Do you provide ongoing maintenance for Steiner Ranch properties?",
        answer:
          "We offer weekly and bi-weekly maintenance programs for Steiner Ranch homeowners that include mowing, edging, pruning, seasonal color changes, irrigation checks, and general property upkeep to keep your landscape in top condition.",
      },
    ],
  },
  "Circle C Ranch": {
    county: "Travis",
    localFlavor:
      "A well-established master-planned community in south Austin, Circle C Ranch offers miles of trails, a nature preserve, family-friendly amenities, and a convenient location near MoPac and Slaughter Lane.",
    trustDetail:
      "Circle C Ranch homeowners take pride in their neighborhood's natural setting and well-maintained properties. With miles of greenbelt trails and the Slaughter Creek nature preserve as a backdrop, landscape work here should enhance the connection between private yards and the surrounding natural environment.",
    expertiseDetail:
      "We have completed projects throughout Circle C — from the Gray Rock golf course area to the neighborhoods along Escarpment Boulevard and the sections near the swim center. We understand the HOA's architectural guidelines and design landscapes that complement Circle C's established, nature-forward character.",
    soilNote:
      "Circle C Ranch sits on the Balcones Fault zone with variable soils — expansive black clay in some areas and rocky limestone in others. Soil testing is essential for proper plant selection and drainage design on each property.",
    landmarks:
      "Circle C Ranch Metropolitan Park, Slaughter Creek Trail, Gray Rock Golf Course, Escarpment Boulevard, Lady Bird Johnson Wildflower Center (nearby)",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Custom landscape design for Circle C Ranch homes. Plans that transform master-planned community lots into personalized outdoor retreats while respecting HOA architectural guidelines.",
      },
      {
        name: "Hardscaping",
        description:
          "Patios, walkways, outdoor kitchens, fire features, and retaining walls for Circle C Ranch properties. Quality construction that upgrades standard lots into premium outdoor living spaces.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Thoughtful planting designs for Circle C Ranch's diverse lot conditions. Native plants, seasonal color, privacy screening, and shade trees selected for the area's Blackland Prairie and limestone soils.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Pergolas, fences, decks, arbors, and outdoor structures for Circle C Ranch homes. Custom-built to HOA specifications with premium materials and finishes that stand apart from standard builder options.",
      },
      {
        name: "Irrigation & Drainage",
        description:
          "Efficient irrigation design and drainage solutions for Circle C Ranch properties. Smart controllers, proper zone planning, and French drain systems that protect foundations and keep landscapes thriving.",
      },
      {
        name: "Property & Pest Management",
        description:
          "Full-service property maintenance for Circle C Ranch homeowners. Weekly lawn care, seasonal planting rotations, pest management, and all-inclusive outdoor concierge service to keep your landscape looking its best.",
      },
    ],
    faqs: [
      {
        question: "Do you work with Circle C Ranch HOA guidelines?",
        answer:
          "Yes. We are familiar with Circle C's architectural review requirements and prepare designs and submittals that align with community standards. This streamlines the approval process and avoids project delays.",
      },
      {
        question:
          "Can you design a landscape that connects with Circle C's trail system?",
        answer:
          "Absolutely. For properties adjacent to greenbelt areas or trails, we design transitions that blend private landscapes with the natural surroundings — using native plantings, natural stone borders, and habitat-friendly elements.",
      },
      {
        question: "What lawn alternatives work well in Circle C Ranch?",
        answer:
          "We install Habiturf (a Texas native grass blend), Zoysia, and Buffalo grass as alternatives to traditional St. Augustine. These require less water and maintenance while staying green through Central Texas summers with proper irrigation.",
      },
      {
        question:
          "How do you handle the different soil types in Circle C Ranch?",
        answer:
          "Circle C sits on the Balcones Fault zone, so soil varies widely even within a single lot. We test soil conditions before designing and amend planting beds accordingly — adding compost, expanded shale, or organic matter as needed.",
      },
      {
        question:
          "Can you add landscape lighting to my Circle C property?",
        answer:
          "Yes. We design and install low-voltage LED landscape lighting systems that highlight architectural features, illuminate pathways, and enhance safety — all while complementing Circle C's residential character and dark-sky considerations.",
      },
      {
        question:
          "What is the typical investment for a Circle C landscape renovation?",
        answer:
          "Circle C renovations typically range from $30,000 to $150,000+ depending on lot size, existing conditions, and project scope. We provide a detailed, transparent proposal after an on-site consultation so you know exactly what to expect.",
      },
    ],
  },
  "Travis Heights": {
    county: "Travis",
    localFlavor:
      "An eclectic, vibrant neighborhood just south of Lady Bird Lake, Travis Heights offers a mix of bungalows, mid-century homes, and modern builds with walkable access to South Congress and the downtown Austin skyline.",
    trustDetail:
      "Travis Heights is one of Austin's most character-rich neighborhoods. Landscape work here must respect the eclectic architectural mix, work within compact urban lots, and deliver outdoor spaces that feel both intentional and effortless — matching the neighborhood's creative spirit.",
    expertiseDetail:
      "We have worked on properties from the tree-lined streets near Travis Heights Elementary to the hillside lots with downtown skyline views along Lund Street. We understand the City of Austin's urban infill requirements, the challenges of working in dense residential settings, and how to create landscapes that stand out on these distinctive streets.",
    soilNote:
      "Travis Heights features variable urban soils — from heavy black clay that expands and contracts dramatically with moisture to rocky hillside lots with minimal topsoil. Proper soil assessment drives every design decision.",
    landmarks:
      "South Congress Avenue, Lady Bird Lake, Big Stacy Pool, Travis Heights Elementary, Stacy Park, Continental Club",
    residentialServices: [
      {
        name: "Landscape Design",
        description:
          "Creative landscape design for Travis Heights' eclectic, character-rich properties. Plans that honor the neighborhood's unique vibe — from bungalow cottage gardens to modern courtyard spaces.",
      },
      {
        name: "Hardscaping",
        description:
          "Patios, garden paths, courtyard walls, and outdoor entertaining areas designed for Travis Heights' distinctive homes. Reclaimed materials, natural stone, and creative hardscape solutions for urban lots.",
      },
      {
        name: "Softscaping & Planting",
        description:
          "Lush, layered plantings for Travis Heights properties. Cottage gardens, native pollinator beds, edible landscapes, and shade-loving perennials that thrive in the neighborhood's mature tree canopy.",
      },
      {
        name: "Custom Carpentry",
        description:
          "Privacy fences, garden gates, arbors, raised planters, and custom structures for Travis Heights homes. Handcrafted details that complement the neighborhood's artisan character and tight lot lines.",
      },
      {
        name: "Landscape Lighting",
        description:
          "Atmospheric outdoor lighting for Travis Heights properties. Garden accent lights, patio illumination, and pathway lighting that enhances the neighborhood's walkable, social character.",
      },
      {
        name: "Metal Fabrication",
        description:
          "Custom iron and metal work for Travis Heights properties — garden gates, decorative fencing, planter edging, and architectural accents that add industrial-modern character to this vibrant neighborhood.",
      },
    ],
    faqs: [
      {
        question:
          "Can you design a landscape for a modern infill home in Travis Heights?",
        answer:
          "Yes. We design contemporary landscapes with clean lines, architectural plantings, and modern materials that complement new construction in Travis Heights while respecting the neighborhood's eclectic character and mature tree canopy.",
      },
      {
        question:
          "How do you handle small lot landscaping in Travis Heights?",
        answer:
          "Compact lots are the norm in Travis Heights. We maximize every square foot with vertical layering, multi-functional spaces, container plantings, and creative hardscaping that makes small outdoor areas feel spacious and intentional.",
      },
      {
        question:
          "Can you work with the existing mature trees on my Travis Heights property?",
        answer:
          "Absolutely. Many Travis Heights lots have significant heritage trees. We design around them, incorporating root-sensitive construction techniques, shade-adapted plantings, and grading solutions that protect these trees while improving the overall landscape.",
      },
      {
        question:
          "What xeriscape options do you recommend for Travis Heights?",
        answer:
          "We create modern xeriscape designs using decomposed granite, native grasses, agaves, salvias, and other drought-adapted plants that reduce water use while delivering the intentional, curated look Travis Heights homeowners appreciate.",
      },
      {
        question:
          "Do you build custom fences and gates for Travis Heights properties?",
        answer:
          "Yes. We design and build custom cedar, steel, and mixed-material fences and gates that provide privacy and security while adding to the streetscape character. Many Travis Heights homeowners opt for distinctive front entry gates and courtyard walls.",
      },
      {
        question:
          "How does City of Austin permitting work for Travis Heights landscape projects?",
        answer:
          "We navigate City of Austin permitting including heritage tree protections, impervious cover calculations, and building setbacks. We handle the paperwork and inspections so your project stays on schedule and fully compliant.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Main generator
// ---------------------------------------------------------------------------

function generateLocationData(city: string, county: string): LocationData {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const meta = cityMeta[city];

  if (!meta) {
    throw new Error(
      `No cityMeta entry for "${city}". Add it to the cityMeta record.`
    );
  }

  return {
    city,
    slug,
    county,
    state: "TX",
    heroHeadline: `Premium Landscape Design & Build in ${city}, Texas`,
    heroDescription: `${meta.localFlavor} When you need expert landscape design, hardscaping, and outdoor living solutions in ${city}, trust ${siteConfig.businessName}. With ${siteConfig.yearsExperience} years of experience and ${siteConfig.reviewCount} completed projects, we deliver craftsmanship that transforms properties across ${county} County.`,

    whyTrustHeading: `Why ${city} Homeowners Trust ${siteConfig.businessName}`,
    whyTrustSubheading: "Local Expertise. Proven Craftsmanship.",
    whyTrustBody: [
      `${siteConfig.businessName} has provided premium landscape design, construction, and maintenance services to ${city} homeowners for over a decade. We understand the unique demands of Central Texas outdoor living — from extreme summer heat and extended droughts to the rocky Hill Country terrain that challenges every aspect of landscape construction.`,
      `${meta.trustDetail}`,
      `Every project starts with a thorough on-site consultation and an honest assessment of your property's conditions and potential. We do not upsell. We do not cut corners. We deliver thoughtful, well-built outdoor spaces that ${city} families enjoy for years to come.`,
    ],
    whyTrustBullets: [
      "Licensed General Contractor of Landscape in the State of Texas",
      "Fully Bonded & Insured — complete liability and worker's comp coverage",
      "1-Year Service Guarantee on all completed work",
      "Transparent, itemized proposals with no hidden fees",
      `${siteConfig.yearsExperience} years and ${siteConfig.reviewCount} completed projects in the Austin metro`,
      `Deep knowledge of ${city}'s terrain, soil conditions, and local regulations`,
    ],

    residentialHeading: `Complete Residential Landscape Services for ${city} Properties`,
    residentialBody: `Whether your ${city} property needs a full landscape renovation, a custom outdoor living space, or targeted improvements like irrigation and drainage, ${siteConfig.businessName} has the design expertise and construction capability to deliver. We tailor every project to Central Texas conditions and your property's unique characteristics.`,
    residentialServices: meta.residentialServices,

    expertiseHeading: `${city} Landscape Experts Who Know Your Property`,
    expertiseSubheading: "Local Knowledge Makes the Difference",
    expertiseBody: [
      `${meta.expertiseDetail}`,
      `${meta.soilNote} We are familiar with ${county} County building codes, permit requirements, and inspection processes. Our team has worked in ${city} neighborhoods for years and understands what designs, materials, and plant species perform best in this specific area.`,
    ],
    expertiseBullets: [
      `Familiar with ${city} building codes, HOA guidelines, and permit requirements`,
      `Extensive experience with ${city}'s terrain, soil conditions, and microclimates`,
      `Understanding of ${county} County inspection and approval processes`,
      "Knowledge of Central Texas native plants, water-wise design, and drought management",
      "Established relationships with local nurseries, quarries, and material suppliers",
    ],

    equipmentHeading: "Premium Materials Built for Central Texas",
    equipmentBody: `${siteConfig.businessName} sources materials from trusted suppliers with proven performance in Central Texas conditions. We specify products that withstand extreme heat, UV exposure, freeze-thaw cycles, and the unique soil chemistry of the Hill Country.`,
    equipmentBullets: [
      "Natural Stone & Flagstone — locally sourced Texas limestone, travertine, and sandstone for patios, walkways, and walls",
      "Premium Pavers — interlocking concrete pavers, porcelain pavers, and permeable paver systems from Belgard, Tremron, and Pavestone",
      "Native & Adapted Plants — drought-tolerant Texas natives, ornamental grasses, and regionally adapted species selected for year-round performance",
      "Smart Irrigation — WiFi-enabled controllers, drip systems, and high-efficiency rotary nozzles from Hunter, Rain Bird, and Rachio",
      "LED Landscape Lighting — low-voltage brass and copper fixtures from FX Luminaire, Kichler, and WAC Lighting for lasting curb appeal and safety",
    ],

    protectionHeading: "Comprehensive Protection for Your Landscape Investment",
    protectionSubheading: "Quality You Can Count On",
    protectionBody: `Your outdoor living space is one of the most valuable investments in your ${city} home. ${siteConfig.businessName} ensures every project is protected with material warranties, our own workmanship guarantee, and ongoing support.`,
    protectionBullets: [
      "1-Year Service Guarantee on every project — workmanship and materials",
      "Full manufacturer warranties on all hardscape materials, irrigation components, and fixtures",
      "Plant establishment guarantee with complimentary replacements during the warranty period",
      "Detailed project documentation including as-built plans and material specifications",
      `Responsive support — ${siteConfig.ownerName} personally stands behind every project`,
    ],

    commercialServices: [
      "Commercial Landscape Design & Installation",
      "HOA & Community Common Area Landscaping",
      "Retail & Restaurant Patio Construction",
      "Office Park & Corporate Campus Grounds",
      "Multi-Family & Apartment Complex Landscaping",
      "Commercial Irrigation System Design & Installation",
      "Commercial Property Maintenance Contracts",
      "Erosion Control & Stormwater Management",
    ],

    nearbyCities: siteConfig.serviceAreaCities.filter(
      (c) => c.toLowerCase() !== city.toLowerCase()
    ),

    faqs: meta.faqs,
  };
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const locations: LocationData[] = [
  generateLocationData("Westlake Hills", "Travis"),
  generateLocationData("Lakeway", "Travis"),
  generateLocationData("Bee Cave", "Travis"),
  generateLocationData("Dripping Springs", "Hays"),
  generateLocationData("Tarrytown", "Travis"),
  generateLocationData("Barton Creek", "Travis"),
  generateLocationData("Rollingwood", "Travis"),
  generateLocationData("Steiner Ranch", "Travis"),
  generateLocationData("Circle C Ranch", "Travis"),
  generateLocationData("Travis Heights", "Travis"),
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}
