// Blog content source of truth.
// To add a new post: append an object to the `blogPosts` array below.
// Links inside `text` use markdown form: [visible text](/internal-path)

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

export interface BlogFAQ {
  q: string
  a: string
}

export interface BlogPost {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  primaryKeyword: string
  relatedKeywords: string[]
  /** ISO date — controls publish date shown on the page and in schema */
  date: string
  excerpt: string
  blocks: BlogBlock[]
  faqs: BlogFAQ[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-electricity-does-6-6kw-solar-system-generate-victoria",
    title: "How Much Electricity Does a 6.6 kW Solar System Generate in Victoria?",
    seoTitle: "6.6 kW Solar System Output in Victoria | Easy Solar Solution",
    metaDescription:
      "Learn what affects 6.6 kW solar system output in Victoria, including season, roof direction, shade and household use. Get guidance on estimating generation.",
    primaryKeyword: "6.6 kW solar system output Victoria",
    relatedKeywords: [
      "6.6 kW solar generation",
      "solar panel output",
      "solar generation in Victoria",
      "solar self-consumption",
    ],
    date: "2026-09-15",
    excerpt:
      "A 6.6 kW system is a common choice for Australian households, but real-world output depends on the property, equipment and how electricity is used. Here is what actually shapes generation across the year.",
    blocks: [
      {
        type: "p",
        text: "Choosing solar starts with a practical question: how much electricity can a system produce, and will that output suit the home? A 6.6 kW solar system is a common option for Australian households, but its real-world performance depends on the property, equipment and the way electricity is used. Rather than relying on a single headline number, homeowners in Victoria should consider expected generation across the year and how much of that energy they can use directly.",
      },
      { type: "h2", text: "What does 6.6 kW mean?" },
      {
        type: "p",
        text: "A 6.6 kW solar system describes the combined rated capacity of the solar panels under standard test conditions. It is not a promise that the system will produce 6.6 kilowatt-hours every hour, nor does it mean the home will always be powered entirely by solar. Actual output changes throughout the day and across the seasons.",
      },
      {
        type: "p",
        text: "Panel capacity is only one part of system design. The inverter, roof direction, panel tilt, shade, temperature, wiring, system losses and local weather all influence the electricity that reaches the home or is exported to the grid.",
      },
      { type: "h2", text: "What affects solar generation in Victoria?" },
      {
        type: "p",
        text: "Season is a major factor. Longer days and stronger sunlight generally support higher generation in summer, while shorter days and cloudier periods can reduce output in winter. This variation is normal and should be considered when estimating annual savings.",
      },
      {
        type: "p",
        text: "Roof orientation and tilt also matter. North-facing panels can provide strong overall generation in many Australian locations, while east- and west-facing arrays may better match morning or afternoon electricity use. A roof with multiple orientations can still be suitable, but the layout should be modelled for the property.",
      },
      {
        type: "p",
        text: "Shade from trees, chimneys, nearby buildings or roof structures can reduce output. Even partial shade on part of an array may affect performance depending on the panel layout and electrical design. An installer should assess shading at different times of day and across the year.",
      },
      {
        type: "p",
        text: "Panel cleanliness, ventilation, equipment quality and correct installation also contribute. Solar panels generally need limited routine maintenance, but the system should be monitored so that an unexpected drop in production can be investigated.",
      },
      { type: "h2", text: "How to estimate your own system’s output" },
      {
        type: "p",
        text: "Start with a site-specific estimate from a qualified solar installer rather than relying only on a generic online figure. Ask for projected monthly and annual generation, the assumptions used, and how roof orientation and shade have been considered.",
      },
      {
        type: "p",
        text: "Then compare the estimate with your electricity bills. Look at total consumption and, if available, when energy is used. A home that consumes most of its electricity during daylight can use more solar generation directly. A household that is empty during the day may export more electricity and import power later in the evening.",
      },
      {
        type: "p",
        text: "For example, two homes with the same 6.6 kW system may receive similar total generation but achieve different bill savings. One may run appliances, pool equipment or an electric vehicle during daylight; the other may use most electricity after sunset. Their self-consumption and export patterns will differ.",
      },
      { type: "h2", text: "Generation is not the same as bill savings" },
      {
        type: "p",
        text: "Solar generation measures the electricity produced by the panels. Bill savings depend on how much of that electricity is used in the home, the retail electricity tariff, any feed-in credit for exported electricity, and the household’s usage pattern. A system that generates more electricity is not automatically the system that delivers the best financial outcome for every household.",
      },
      {
        type: "p",
        text: "Ask the installer to distinguish estimated generation from estimated bill savings. Any savings estimate should clearly state its assumptions and should not be treated as a guarantee. Retail tariffs and feed-in arrangements can change, so use current details from your electricity retailer when assessing the financial case.",
      },
      { type: "h2", text: "Is a 6.6 kW system suitable for your home?" },
      {
        type: "p",
        text: "A 6.6 kW system may suit households with moderate electricity demand and suitable roof space, but the right capacity depends on current and future use. Consider air conditioning, electric cooking, a heat-pump hot water system, a home office, a pool, or a planned electric vehicle. If demand is high or likely to increase, compare the design with a larger system before making a decision.",
      },
      {
        type: "p",
        text: "You can explore the existing [6.6 kW solar installation Melbourne](/6-6-kw-solar-installation-melbourne) and compare the relevant local page for your area. For households considering a higher capacity, review the [10 kW solar installation Melbourne](/10-kw-solar-installation-melbourne) as a comparison—not as an automatic upgrade recommendation.",
      },
      { type: "h2", text: "Questions to ask before accepting a quote" },
      {
        type: "p",
        text: "Ask for the proposed panel and inverter specifications, expected annual generation, the effect of roof shade, warranty details, monitoring options, and any assumptions behind the savings estimate. Confirm whether switchboard work, meter changes, scaffolding or other site-specific requirements are included in the quote.",
      },
      {
        type: "p",
        text: "Also ask how the system will be configured for your roof and whether export limits or network approval requirements apply at your property. A reliable quote should explain the design clearly and avoid promising a fixed output or guaranteed payback.",
      },
      {
        type: "p",
        text: "A 6.6 kW solar system can be a useful option for many Victorian households, but its value depends on more than its nameplate capacity. Use a site-specific generation estimate, review your household’s daytime electricity use, and compare the total quote and assumptions before deciding.",
      },
      {
        type: "p",
        text: "Ready to explore your options? Contact Easy Solar Solution for a property-specific assessment and compare the available [6.6 kW solar installation Geelong](/6-6-kw-solar-installation-geelong).",
      },
    ],
    faqs: [
      {
        q: "How much electricity can a 6.6 kW solar system generate in Victoria?",
        a: "Generation depends on location, season, roof orientation and tilt, shading, equipment and system design. Ask your installer for a site-specific monthly and annual estimate.",
      },
      {
        q: "Does a 6.6 kW solar system produce the same amount every day?",
        a: "No. Output varies with daylight hours, weather and seasons. Summer production is often higher than winter production, and cloudy conditions can reduce output.",
      },
      {
        q: "Will a 6.6 kW solar system eliminate my electricity bill?",
        a: "Not necessarily. Savings depend on how much solar power you use directly, your retail tariff, feed-in credits and electricity consumed at night. Fixed supply charges may remain.",
      },
      {
        q: "Is a 6.6 kW system suitable for every home?",
        a: "No. Suitability depends on household consumption, roof space, shade, future energy needs and the proposed design. A qualified installer should assess the property.",
      },
      {
        q: "How can I get a more accurate generation estimate?",
        a: "Share recent electricity bills and interval usage data if available. Ask the installer to account for roof direction, shade, equipment and seasonal variation.",
      },
    ],
  },

  {
    slug: "is-6-6kw-solar-system-enough-for-home",
    title: "Is a 6.6 kW Solar System Enough for Your Home?",
    seoTitle: "Is a 6.6 kW Solar System Enough? | Easy Solar Solution",
    metaDescription:
      "Find out when a 6.6 kW solar system may suit your home, what affects system sizing and when it is worth comparing a 10 kW option.",
    primaryKeyword: "is a 6.6 kW solar system enough",
    relatedKeywords: [
      "6.6 kW solar system for home",
      "solar system sizing",
      "household electricity use",
      "6.6 kW vs 10 kW",
    ],
    date: "2026-09-22",
    excerpt:
      "A 6.6 kW system is a practical starting point for many homes, but it is not automatically the right size. Here is how to size a system against your bills, roof and future plans.",
    blocks: [
      {
        type: "p",
        text: "A 6.6 kW solar system can be a practical starting point for many homes, but it is not automatically the right size for every household. The best system is one that matches electricity use, roof conditions, budget and future plans. Before choosing a capacity, it helps to understand how much power the home uses and when that power is needed.",
      },
      { type: "h2", text: "Start with your electricity bills" },
      {
        type: "p",
        text: "Review at least several recent electricity bills, including a period of high seasonal use if possible. Look at total kilowatt-hours consumed, daily average use and whether your retailer provides interval data showing when electricity is used. A single bill may not represent the home’s normal pattern.",
      },
      {
        type: "p",
        text: "Households with air conditioning, electric hot water, a pool, multiple occupants or work-from-home equipment may use more electricity than a smaller household. The number of residents alone is not enough to size a system; appliances and usage habits are important.",
      },
      { type: "h2", text: "When a 6.6 kW system may be enough" },
      {
        type: "p",
        text: "A 6.6 kW system may be worth considering when the home has moderate electricity demand, suitable roof space and a consumption pattern that allows a useful share of solar generation to be used during daylight. It can also be a sensible option where the household wants to start with a system aligned to current needs rather than oversizing without a clear reason.",
      },
      {
        type: "p",
        text: "However, the rated capacity does not tell you exactly how much energy will be available at a particular time. Output varies with season, weather, roof direction and shade. A site-specific estimate is needed to judge whether expected generation aligns with household consumption.",
      },
      { type: "h2", text: "When to compare a larger system" },
      {
        type: "p",
        text: "Consider comparing a larger system if electricity bills are high, substantial daytime loads are present, or the household expects demand to grow. Examples include adding an electric vehicle, switching to electric heating or hot water, installing a pool, or increasing air-conditioning use.",
      },
      {
        type: "p",
        text: "A larger system is not automatically more economical. If much of the extra generation is exported for a low credit, the financial benefit may be smaller than expected. The decision should compare additional installation cost with likely self-consumption, export arrangements and the household’s plans.",
      },
      { type: "h2", text: "Roof space and system design matter" },
      {
        type: "p",
        text: "The roof must accommodate the panel layout with appropriate access, setbacks and safe installation conditions. Complex roof shapes, multiple orientations, shade and obstructions may affect the amount of usable area and the best arrangement.",
      },
      {
        type: "p",
        text: "The inverter and other components also need to suit the proposed array. A qualified installer should explain the design, equipment specifications, expected output and any applicable network or export constraints. Do not choose capacity based on panel count alone.",
      },
      { type: "h2", text: "Compare 6.6 kW and 10 kW before deciding" },
      {
        type: "p",
        text: "The most useful comparison is not simply “small versus large”. Ask the installer to model both options using the same electricity usage profile and clearly stated tariff assumptions. Compare estimated annual generation, likely self-consumption, exported energy, installed price, warranties and any site-specific costs.",
      },
      {
        type: "p",
        text: "For a local example, review Easy Solar Solution’s [6.6 kW solar installation in Melbourne](/6-6-kw-solar-installation-melbourne) page. If the home has higher demand, compare it with the [10 kW solar installation in Melbourne](/10-kw-solar-installation-melbourne) page. Use the equivalent location page when the property is in another service area.",
      },
      { type: "h2", text: "Questions to ask your installer" },
      {
        type: "p",
        text: "Ask what annual generation is expected and how seasonal changes are accounted for. Request an explanation of the estimated self-consumption and export figures, and confirm whether savings projections assume current retail rates remain unchanged.",
      },
      {
        type: "p",
        text: "Check panel and inverter warranties, workmanship coverage, monitoring, maintenance guidance, installation inclusions and the process for network approval. Confirm that the quote reflects the actual property rather than a generic package.",
      },
      {
        type: "p",
        text: "A 6.6 kW solar system may be enough for a home with moderate demand, but the answer depends on the household’s usage profile and future plans. Compare it with a larger system when demand is high or likely to increase, and base the decision on a transparent, site-specific assessment rather than a generic rule.",
      },
    ],
    faqs: [
      {
        q: "Is a 6.6 kW solar system enough for a family home?",
        a: "It may suit some homes with moderate electricity demand, but the right size depends on appliances, usage patterns, roof conditions and future plans.",
      },
      {
        q: "Should I choose a 6.6 kW or 10 kW solar system?",
        a: "Compare both options using your consumption, daytime usage, roof space, installed price and estimated self-consumption. A larger system is not automatically better value.",
      },
      {
        q: "Can I add an electric vehicle after installing solar?",
        a: "Yes, but EV charging can increase electricity demand. If you expect to buy an EV, ask the installer to model that future load before choosing a system size.",
      },
      {
        q: "Does roof direction affect whether 6.6 kW is enough?",
        a: "Yes. Roof direction, tilt and shading influence output and when electricity is generated. A site-specific assessment can help determine whether the system suits your needs.",
      },
      {
        q: "What information should I give a solar installer?",
        a: "Provide recent electricity bills, typical daytime and evening usage, plans for new appliances or EV charging, and details about roof shading or known electrical issues.",
      },
    ],
  },

  {
    slug: "6-6kw-vs-10kw-solar-system",
    title: "6.6 kW vs 10 kW Solar Systems: Which Is Better for Your Home?",
    seoTitle: "6.6 kW vs 10 kW Solar System: How to Choose",
    metaDescription:
      "Compare 6.6 kW and 10 kW solar systems by electricity use, generation, roof space and likely savings. Learn what to check before choosing.",
    primaryKeyword: "6.6 kW vs 10 kW solar system",
    relatedKeywords: [
      "compare solar system sizes",
      "10 kW solar system",
      "solar system for high electricity use",
      "solar quote comparison",
    ],
    date: "2026-10-05",
    excerpt:
      "Choosing between 6.6 kW and 10 kW is not just about buying more panels. Compare the two on consumption, timing of use, roof space and the price difference between quotes.",
    blocks: [
      {
        type: "p",
        text: "Choosing between a 6.6 kW and a 10 kW solar system is not just a matter of buying more panels. The right capacity depends on electricity consumption, when the home uses energy, roof space, system design and the price difference between quotes. This guide explains how to compare the two options for a home in Victoria.",
      },
      { type: "h2", text: "What is the practical difference?" },
      {
        type: "p",
        text: "A 6.6 kW system has a lower rated panel capacity than a 10 kW system. Under suitable conditions, the larger array can produce more electricity over time, but the amount depends on the site and system configuration. Neither capacity produces the same output every day, and the rated size alone cannot predict bill savings.",
      },
      {
        type: "p",
        text: "The useful question is whether the extra capacity of a 10 kW system matches your home’s needs and creates enough additional value to justify its cost.",
      },
      { type: "h2", text: "Which households might consider 6.6 kW?" },
      {
        type: "p",
        text: "A 6.6 kW system may suit homes with moderate energy demand, appropriate roof space and a useful amount of daytime electricity consumption. It can be a reasonable option for households that do not have unusually large loads and are not planning major changes to how they use energy.",
      },
      {
        type: "p",
        text: "It is still important to assess seasonal generation, shade and roof orientation. A smaller system on a well-suited roof can perform more predictably than a poorly designed larger array.",
      },
      { type: "h2", text: "Which households might consider 10 kW?" },
      {
        type: "p",
        text: "A 10 kW system may be worth comparing for homes with higher electricity consumption, larger daytime loads, electric hot water, significant air-conditioning use, pool equipment or plans to charge an electric vehicle. It may also be considered when the household expects to electrify more appliances in coming years.",
      },
      {
        type: "p",
        text: "These factors do not automatically mean a 10 kW system is best. A larger array may produce more energy than the home can use during daylight. The value of exported electricity may differ from the value of electricity consumed directly, so the savings model needs to distinguish between them.",
      },
      { type: "h2", text: "Compare more than the installation price" },
      {
        type: "p",
        text: "Request comparable quotes for both sizes. Review the installed price, panel and inverter specifications, estimated monthly and annual generation, expected self-consumption, exports, warranties, monitoring and any additional site costs.",
      },
      {
        type: "p",
        text: "Ask the installer to show the assumptions behind estimated savings. If the calculation assumes a particular electricity price or feed-in tariff, confirm whether those values are current and understand that they can change. A payback estimate is a projection, not a guarantee.",
      },
      {
        type: "p",
        text: "Check roof layout and network requirements too. More panels require sufficient suitable roof area and an installation design that meets applicable requirements. Export limits may influence the value of additional generation, depending on the property and network approval.",
      },
      { type: "h2", text: "A simple decision framework" },
      {
        type: "p",
        text: "First, identify your current annual electricity use and the times when it occurs. Second, list likely changes over the next five to ten years, such as an EV, heat-pump hot water or more people working from home. Third, obtain generation estimates for both capacities based on the actual roof. Finally, compare the additional cost with the expected additional self-consumption and export value.",
      },
      {
        type: "p",
        text: "If the 10 kW option costs more but most additional energy is exported, the financial case may be weaker than expected. If the home has high daytime consumption or demand is likely to rise, the larger system may be more appropriate. The answer should come from the numbers and the site design.",
      },
      { type: "h2", text: "Explore the matching local installation pages" },
      {
        type: "p",
        text: "For local service details, see [6.6 kW solar installation in Melbourne](/6-6-kw-solar-installation-melbourne) and [10 kW solar installation in Melbourne](/10-kw-solar-installation-melbourne). Homeowners in other service areas should use their matching location page—for example, Geelong, Ballarat, Bendigo, Sunbury, Melton, Craigieburn or Frankston—so the information reflects the relevant service area.",
      },
      {
        type: "p",
        text: "There is no universal winner between 6.6 kW and 10 kW. Compare both using your own electricity data, future plans, roof conditions and a transparent quote. A well-matched system is generally a better decision than choosing the largest capacity available without considering how the energy will be used.",
      },
    ],
    faqs: [
      {
        q: "Does a 10 kW solar system generate more electricity than a 6.6 kW system?",
        a: "It has greater rated panel capacity and may generate more electricity, but actual output depends on roof conditions, equipment, weather and system design.",
      },
      {
        q: "Is a 10 kW solar system always more cost-effective?",
        a: "No. Compare the additional installed cost with the value of extra electricity used in the home and any surplus exported to the grid.",
      },
      {
        q: "Which system is better for a home with high electricity use?",
        a: "A larger system may be worth assessing, but the decision should be based on consumption data, roof suitability, generation estimates and future plans.",
      },
      {
        q: "Can a 6.6 kW system help if I use most electricity at night?",
        a: "It may still help, but the financial value depends on how much solar electricity is used directly versus exported. Review your usage profile and tariff.",
      },
      {
        q: "What should I compare in solar quotes?",
        a: "Compare installed cost, equipment, generation estimates, self-consumption and export assumptions, warranties, monitoring, inclusions and site-specific work.",
      },
    ],
  },

  {
    slug: "who-should-consider-13kw-solar-system",
    title: "Who Should Consider a 13 kW Solar System?",
    seoTitle: "Who Should Consider a 13 kW Solar System? | Easy Solar",
    metaDescription:
      "Understand who may benefit from a 13 kW solar system, how to assess roof space and usage, and how to compare it with a 10 kW system.",
    primaryKeyword: "who should consider a 13 kW solar system",
    relatedKeywords: [
      "13 kW solar system",
      "large home solar system",
      "high electricity consumption",
      "13 kW vs 10 kW solar",
    ],
    date: "2026-10-13",
    excerpt:
      "A 13 kW system may suit some larger homes with high energy demand, but it has to be assessed against usage, roof conditions and the value of the electricity produced.",
    blocks: [
      {
        type: "p",
        text: "The right solar system size depends on the home’s electricity needs—not simply on roof size or the desire to install more panels. A 13 kW solar system may be worth investigating for some larger homes and households with high energy demand, but it needs to be assessed against usage, roof conditions and the value of the electricity produced.",
      },
      { type: "h2", text: "What does a 13 kW system represent?" },
      {
        type: "p",
        text: "The 13 kW label generally refers to the combined rated capacity of the solar panels. Actual electricity production varies with sunlight, season, roof orientation, shade, temperature, equipment and system configuration. A larger rated capacity can increase potential generation, but it does not guarantee a particular bill reduction.",
      },
      {
        type: "p",
        text: "Ask the installer to explain the panel capacity, inverter arrangement and expected generation. The design should be suitable for the roof and comply with applicable electrical and network requirements.",
      },
      { type: "h2", text: "Who may want to consider 13 kW?" },
      {
        type: "p",
        text: "Households with high electricity use may want to compare a 13 kW system with smaller options. Potential examples include larger homes with multiple occupants, substantial daytime air-conditioning loads, pool equipment, electric hot water, home offices or electric vehicle charging.",
      },
      {
        type: "p",
        text: "Future plans are important. If a household expects to replace gas appliances with electric alternatives or add an EV, the additional demand may influence system sizing. However, future demand should be estimated realistically rather than used as a reason to oversize without analysis.",
      },
      { type: "h2", text: "Check daytime consumption and export value" },
      {
        type: "p",
        text: "The amount of electricity a system generates is only one part of the financial picture. Electricity used directly in the home can offset purchases from the retailer, while surplus energy may be exported under the applicable feed-in arrangement. The financial value of these two outcomes can differ.",
      },
      {
        type: "p",
        text: "Ask for a model showing how much generation is expected to be used in the home and how much may be exported. If most of the extra output from a larger array is exported, the additional savings may not be proportional to the increase in system capacity.",
      },
      { type: "h2", text: "Is there enough suitable roof space?" },
      {
        type: "p",
        text: "A 13 kW array requires more panel area than a smaller system. The available roof must be assessed for orientation, shading, structural suitability, safe access, obstructions and applicable setbacks. Multiple roof faces may be used where appropriate, but their different orientations can change generation throughout the day.",
      },
      {
        type: "p",
        text: "The installer should also assess inverter sizing, electrical infrastructure, export constraints and any additional work required at the property. A quote should clearly identify equipment, installation inclusions, warranties and any assumptions.",
      },
      { type: "h2", text: "Compare 13 kW with 10 kW" },
      {
        type: "p",
        text: "Before selecting 13 kW, ask for a comparison with a 10 kW option based on the same consumption data and tariff assumptions. Compare total installed cost, expected generation, self-consumption, export, likely bill impact and the additional value created by the larger system.",
      },
      {
        type: "p",
        text: "You can review Easy Solar Solution’s [10 kW solar installation in Melbourne](/10-kw-solar-installation-melbourne) and [13 kW solar installation in Melbourne](/13-kw-solar-installation-melbourne) pages. If the property is outside Melbourne, select the corresponding page for its location rather than using a location that does not match the project.",
      },
      { type: "h2", text: "What to ask before installation" },
      {
        type: "p",
        text: "Ask for the system design, product specifications, projected annual and seasonal generation, shade assessment, warranty details, monitoring options, estimated self-consumption and export assumptions. Confirm whether switchboard upgrades, meter work, scaffolding or other site-specific tasks are included.",
      },
      {
        type: "p",
        text: "Request a written explanation of any savings estimate and its assumptions. Energy prices, usage and export arrangements can change, so projected savings and payback should be treated as estimates rather than guarantees.",
      },
      {
        type: "p",
        text: "A 13 kW solar system may suit some high-consumption homes, but it is not automatically the best choice for every large property. Compare it with smaller systems using realistic usage data and a roof-specific design. The aim is to install a system that meets the household’s needs and makes sensible use of the energy it generates.",
      },
    ],
    faqs: [
      {
        q: "Is a 13 kW solar system suitable for a large home?",
        a: "It may suit some high-consumption homes, but usage, roof space, shading, inverter design and network requirements should be assessed first.",
      },
      {
        q: "How many panels are needed for a 13 kW system?",
        a: "The number depends on the wattage of the selected panels. Ask for the proposed panel count and layout, including any roof or access constraints.",
      },
      {
        q: "Should I choose 13 kW instead of 10 kW?",
        a: "Compare both options using the same consumption and tariff assumptions. Consider whether extra generation will be used at home or exported, and whether the added cost is justified.",
      },
      {
        q: "Can a 13 kW system reduce my bill to zero?",
        a: "There is no guarantee. Savings depend on generation, usage timing, retail rates, feed-in credits, fixed charges and how much electricity the home imports.",
      },
      {
        q: "Does a 13 kW system need a large roof?",
        a: "Generally, a larger array requires more suitable roof area. An installer should assess layout, orientation, shade, access and applicable installation requirements.",
      },
    ],
  },
]

/** Newest first — used by the blog listing page. */
export const sortedBlogPosts: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatBlogDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function readingTime(post: BlogPost): string {
  const words = post.blocks
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .concat(post.faqs.map((faq) => `${faq.q} ${faq.a}`))
    .join(" ")
    .split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}
