"use client"

import Image from "next/image"

const brands = [
  { name: "Fox ESS", logo: "/images/brand-fox-ess.png" },
  { name: "JA Solar", logo: "/images/brand-ja-solar.png" },
  { name: "Neovolt", logo: "/images/brand-neovolt.png" },
  { name: "Jinko Solar", logo: "/images/brand-jinko-solar.png" },
  { name: "Sigenergy", logo: "/images/brand-sigenergy.png" },
  { name: "Growatt", logo: "/images/brand-growatt.png" },
  { name: "Solis", logo: "/images/brand-solis.jpg" },
  { name: "Sunpro Power", logo: "/images/brand-sunpro.png" }
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
          Premium Brands We Trust
        </h2>
        <p className="text-muted-foreground font-medium">We only use Tier 1 panels and inverters from leading manufacturers</p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll whitespace-nowrap py-4">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-12 h-24 hover:scale-110 transition-all duration-300 pointer-events-none sm:pointer-events-auto"
            >
              <div className="relative w-48 h-16 flex items-center justify-center p-2">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
