const fs = require('fs');
const path = require('path');

const locations = ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Sunbury', 'Melton', 'Craigieburn', 'Frankston'];
const capacities = [
  { size: '6.6', title: '6.6 kW', slug: '6-6-kw' },
  { size: '10', title: '10 kW', slug: '10-kw' },
  { size: '13', title: '13 kW', slug: '13-kw' }
];

const appDir = path.join(__dirname, 'app');

function getOtherSizesText(capacity) {
  if (capacity === '6.6 kW') {
    return `A 6.6 kW system may suit moderate electricity consumption. A 10 kW or 13 kW system may be worth considering where household consumption is higher or future electricity demand is expected to increase.`;
  } else if (capacity === '10 kW') {
    return `A 10 kW system can suit higher household consumption. A 6.6 kW system may be sufficient for a lower-use home, while a 13 kW system can be considered where electricity demand is substantially higher and the property can accommodate it.`;
  } else {
    return `A 13 kW system is intended for larger electricity requirements. A 10 kW or 6.6 kW system may be more appropriate where consumption is lower. Bigger is not automatically better; system size should match the property's energy profile.`;
  }
}

function getSuitabilityText(capacity) {
  if (capacity === '6.6 kW') {
    return `A 6.6 kW solar system may suit a {Location} household with moderate residential electricity consumption.`;
  } else if (capacity === '10 kW') {
    return `A 10 kW solar system may suit a {Location} household with higher residential electricity consumption.`;
  } else {
    return `A 13 kW solar system may suit a {Location} household with substantial residential electricity consumption.`;
  }
}

function generatePageContent(location, cap) {
  const c = cap.title;
  const l = location;
  const url = `/${cap.slug}-solar-installation-${location.toLowerCase()}/`;

  const otherSizesText = getOtherSizesText(c);
  const suitabilityText = getSuitabilityText(c).replace('{Location}', l);

  return `import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { QuoteModalWrapper } from '@/components/quote-modal-wrapper';
import { CheckCircle2, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { BrandsSection } from '@/components/brands-section';

export const metadata: Metadata = {
  title: '${c} Solar Installation ${l} | Easy Solar Solution',
  description: 'Explore ${c} solar installation in ${l}. Compare system suitability, installation considerations and solar options for your home with Easy Solar Solution.',
  alternates: {
    canonical: '${url}'
  }
};

export default function SEOLandingPage() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-inter)]">
      <Header />
      
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">${c} Solar Installation ${l}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-space-grotesk)]">
            ${c} Solar Installation ${l}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Professional ${c} residential solar solutions for homeowners in ${l} and surrounding suburbs.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue max-w-none">
          
          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">${c} Solar Installation in ${l}</h2>
          <p>Looking for a ${c} solar installation ${l}? Easy Solar Solution provides residential solar solutions for homeowners in ${l} and surrounding suburbs. A ${c} system can be considered by households with ${c === '6.6 kW' ? 'moderate' : c === '10 kW' ? 'higher' : 'substantial'} residential electricity consumption. The right system depends on electricity use, roof space, orientation, shading, equipment selection and future energy plans.</p>
          <p>${l} properties can vary considerably, so a solar system should be designed for the individual home rather than selected solely by advertised system size. Whether you are replacing a small existing system, building a new home or planning for higher electricity use, a property and energy assessment can help determine whether ${c} is appropriate.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Is a ${c} Solar System Right for Your ${l} Home?</h2>
          <p>${suitabilityText} It can be particularly relevant where the home uses air conditioning, electric hot water, pool equipment, electric cooking, refrigeration, home-office equipment or an electric vehicle.</p>
          <p>The best system size is not determined by the number of bedrooms alone. Reviewing recent electricity bills and considering planned changes to energy use can provide a better basis for system selection.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Current electricity consumption</li>
            <li>Daytime electricity usage</li>
            <li>Available roof area</li>
            <li>Roof orientation and pitch</li>
            <li>Shading from trees or buildings</li>
            <li>Future electric vehicle or appliance plans</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">What Does a ${c} Solar System Include?</h2>
          <p>A typical ${c} installation includes a solar panel array, suitable inverter equipment, mounting components and the electrical work required for the installation. The exact configuration depends on the equipment selected and the property.</p>
          <p>For a 6.6 kW system, for example, panel count depends on panel wattage. A 440 W panel configuration would use approximately 15 panels. For larger systems, the panel count likewise changes according to the selected module wattage. The final design should be confirmed in the quotation rather than assumed from system size alone.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Solar Generation from a ${c} System in ${l}</h2>
          <p>A ${c} system's electricity production changes with season, weather, daylight hours, roof orientation, shading, panel performance and system losses. Conditions in ${l} will affect actual generation, so advertised daily figures should be treated as estimates rather than guarantees.</p>
          <p>A professional assessment can provide a more useful estimate by considering the property's roof and expected electricity usage. Maximising daytime use of solar electricity can also improve the value of the energy your system generates.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">${c} Solar System Cost in ${l}</h2>
          <p>The cost of a ${c} solar installation in ${l} varies according to panel and inverter selection, roof type, accessibility, installation complexity, switchboard requirements, electrical work, grid connection requirements and any additional equipment.</p>
          <p>When comparing quotes, look beyond the headline price. Check the equipment specifications, warranties, installation inclusions, monitoring arrangements and after-sales support. Easy Solar Solution can provide a property-specific quotation so the system can be assessed against your requirements.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Why Choose Easy Solar Solution?</h2>
          <p>Choosing a solar installer for your ${l} property involves more than choosing a panel brand. A suitable installer should consider the roof, energy use, system design, electrical requirements and long-term support.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Property-specific system design</li>
            <li>Appropriate solar and inverter selection</li>
            <li>Professional installation</li>
            <li>Clear equipment and workmanship warranty information</li>
            <li>Advice based on current and future electricity needs</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Our ${c} Solar Installation Process</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Energy discussion:</strong> Understand your electricity consumption, current bills and future energy plans.</li>
            <li><strong>Property assessment:</strong> Review roof area, orientation, shading, access and electrical requirements.</li>
            <li><strong>System design:</strong> Determine whether ${c} is suitable and select an appropriate system configuration.</li>
            <li><strong>Quote:</strong> Prepare a quotation based on the actual installation requirements.</li>
            <li><strong>Installation:</strong> Install the solar panels, inverter and associated equipment.</li>
            <li><strong>Connection and commissioning:</strong> Complete the applicable electrical, grid connection and commissioning processes.</li>
          </ol>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Solar Rebates and Incentives for ${l} Homeowners</h2>
          <p>Eligible Victorian households may be able to access incentives through the Victorian Government's Solar Homes Program, while eligible solar installations may also qualify for federal Small-scale Technology Certificates (STCs). Eligibility, product requirements and incentive values can change, so customers should confirm the current rules before applying.</p>
          <p>For 2026–27, the Victorian solar PV rebate is advertised by Solar Victoria at up to $1,400 for eligible households, with an optional interest-free loan of up to the same amount, subject to program conditions. The final benefit available to a customer depends on eligibility and the applicable program rules.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Solar Installation in ${l} and Nearby Areas</h2>
          <p>Easy Solar Solution can assess enquiries from homeowners in ${l} and surrounding areas. Local property conditions can vary, particularly between older homes and newer developments, so the installation should be assessed individually.</p>
          <p>If your property is outside the immediate ${l} area, contact the team to confirm current service availability before requesting a quotation.</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">${c} vs Other Solar System Sizes</h2>
          <p>${otherSizesText}</p>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">How much does a ${c} solar system cost in ${l}?</h3>
              <p>Pricing varies by equipment, roof conditions, electrical work and installation complexity. A property-specific quotation is the most accurate way to establish the cost.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Is a ${c} system suitable for a home in ${l}?</h3>
              <p>It can be, particularly for households with ${c === '6.6 kW' ? 'moderate' : c === '10 kW' ? 'higher' : 'substantial'} residential electricity consumption. Suitability should be confirmed using electricity consumption and a property assessment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">How much electricity can a ${c} system generate?</h3>
              <p>Generation varies with sunlight, season, orientation, shading, panel performance and system losses. A site-specific estimate is more useful than a generic daily figure.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Can I add a battery to a ${c} solar system?</h3>
              <p>Battery storage may be possible depending on system configuration, energy use, budget and the selected equipment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Can I receive a Victorian solar rebate?</h3>
              <p>Eligible households may qualify for current Victorian Solar Homes incentives. Eligibility and product requirements apply and should be confirmed before purchase.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">How do I choose between 6.6 kW, 10 kW and 13 kW?</h3>
              <p>Compare your recent electricity consumption with your future plans, available roof space and budget. A solar assessment can help determine the appropriate system size.</p>
            </div>
          </div>

          <div className="mt-16 bg-muted/30 p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-[#3e70b5] mb-4">Get a ${c} Solar Installation Quote in ${l}</h2>
            <p className="mb-6">If you are considering ${c} solar installation ${l}, Easy Solar Solution can help you understand the system options available for your property. Discuss your electricity usage, roof requirements and future energy plans to determine whether ${c} is the right fit.</p>
            <p className="mb-8 font-semibold">Contact Easy Solar Solution today to enquire about ${c} solar installation in ${l}.</p>
            
            <QuoteModalWrapper />
          </div>

        </div>
      </section>

      <BrandsSection />
      <Footer />
    </div>
  );
}
`;
}

locations.forEach(location => {
  capacities.forEach(cap => {
    const dirName = `${cap.slug}-solar-installation-${location.toLowerCase()}`;
    const fullPath = path.join(appDir, dirName);
    
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    
    const content = generatePageContent(location, cap);
    fs.writeFileSync(path.join(fullPath, 'page.tsx'), content);
    console.log(`Created ${dirName}/page.tsx`);
  });
});
