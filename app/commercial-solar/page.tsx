"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Shield, 
  Award,
  CheckCircle2, 
  ArrowRight, 
  Zap,
  TrendingDown,
  Clock,
  Phone,
  ChevronRight,
  Factory,
  Warehouse,
  Store,
  Lightbulb,
  TrendingUp,
  Sun,
  Battery
} from "lucide-react"
import { BrandsSection } from "@/components/brands-section"

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Reduce operational costs with large-scale solar installations for factories and production facilities."
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    description: "Utilize expansive roof space to generate significant solar energy and lower overheads."
  },
  {
    icon: Store,
    title: "Retail",
    description: "Power your retail operations sustainably and showcase your commitment to the environment."
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Create a modern, sustainable workplace while reducing electricity costs."
  }
]



const commercialPackages = [
  {
    size: "30 kw",
    suitable: "Perfect For Small Business",
    features: ["Tier 1 Panels", "20kw+10kw Inverter"],
    badge: "Value for Money"
  },
  {
    size: "50 kw",
    suitable: "Perfect For Large Business",
    features: ["Tier 1 Panels", "30kw+20kw Inverter"],
    badge: "Value for Money"
  },
  {
    size: "100 kw",
    suitable: "Good For Businesses",
    features: ["Tier 1 Panels", "30kw+30kw+30kw+10kw Inverter"],
    badge: "Value for Money"
  }
]

export default function CommercialSolarPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Commercial Solar</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <Building2 className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Business Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-[family-name:var(--font-space-grotesk)]">
                <span className="text-balance">Commercial</span>{" "}
                <span className="text-white">
                  Solar Power
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8">
                Transform your business with commercial solar. Reduce operating costs, improve sustainability, 
                and take advantage of government incentives. Our expert team designs and installs systems 
                from 30kW to multi-megawatt scale.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-white">500+</p>
                  <p className="text-sm text-primary-foreground/70">Commercial Installs</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary-foreground">25MW+</p>
                  <p className="text-sm text-primary-foreground/70">Total Capacity</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setQuoteModalOpen(true)}
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-10 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
                >
                  Get Commercial Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all"
                  asChild
                >
                  <a href="tel:0479074555" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Business Enquiries
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/commercial-solar.jpg"
                  alt="Commercial Solar Installation"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 1: Intro & Advantages */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A4D] mb-4 font-[family-name:var(--font-space-grotesk)]">
              Commercial Solar Systems
            </h2>
            <div className="h-1 w-16 bg-red-500 mx-auto mb-10"></div>
            <div className="space-y-8 text-lg lg:text-xl text-muted-foreground/80 leading-relaxed">
              <p>
                Installing a solar system for business growth is an up-and-coming investment and has an outstanding record. 
                Lowering your company&apos;s electricity costs might help you invest funds more wisely than draining your capital on unnecessary expenditures.
              </p>
              <p>
                Going Solar demonstrates your company&apos;s commitment to responsible, environmentally sustainable, and clever development strategies to pursue excellence. 
                Continue reading to discover how solar systems help when installed in business settings for industry-related purposes.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/commercial-solar.jpg" 
                alt="Large scale commercial solar installation"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0B2A4D] mb-8 font-[family-name:var(--font-space-grotesk)]">
                The advantages of installing a commercial solar system
              </h3>
              <ul className="space-y-6">
                {[
                  "Reduce your reliance on costly and tricky grid power.",
                  "Reduce your business's carbon footprint as much as possible.",
                  "Strengthen your credentials as a proponent of environmentalism."
                ].map((advantage, index) => (
                  <li key={index} className="flex gap-4 items-start group">
                    <div className="w-7 h-7 rounded-lg border-2 border-red-500 flex items-center justify-center flex-shrink-0 mt-1 bg-red-50 group-hover:bg-red-500 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-red-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xl font-bold text-[#0B2A4D]">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-32">
             <div className="text-center max-w-4xl mx-auto mb-20">
                <h3 className="text-3xl lg:text-4xl font-bold text-muted-foreground/40 mb-8 font-[family-name:var(--font-space-grotesk)]">
                  What are some ways a commercial solar system might help you save money?
                </h3>
                <p className="text-xl text-muted-foreground/80 leading-relaxed">
                  A financial benefit is one of the numerous important reasons to install a commercial solar system. 
                  If you finance the initial investment, your commercial solar system will often create enough benefit to generate a positive cash flow within twenty-four months. 
                  Your solar PV investment will quickly pay for itself, reduce your carbon footprint, and provide you with a large portion of your energy solutions for free when your loan term finishes.
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-10">
                {[
                  { icon: Lightbulb, title: "Latest Solar Technology" },
                  { icon: TrendingUp, title: "Guaranteed Performance" },
                  { icon: Award, title: "Premium Quality Solar" }
                ].map((card, index) => (
                  <div key={index} className="p-10 bg-muted/30 rounded-[40px] border border-border/50 text-center flex flex-col items-center group hover:bg-white hover:shadow-2xl transition-all duration-300">
                    <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                      <card.icon className="h-14 w-14 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0B2A4D]">{card.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 2: Commercial Packages */}
      <section className="py-16 lg:py-24 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A4D] mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ideal solar system from our Premium Solar Panel packages.
          </h2>
          <div className="h-1 w-16 bg-red-500 mx-auto mb-10"></div>
          <p className="text-xl text-muted-foreground mb-16">
            Choose from quick, efficient, affordable and reliable Solar Power System Installations & Designs
          </p>

          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-2xl px-16 py-8 text-2xl font-bold mb-20 shadow-xl shadow-red-500/20 active:scale-95 transition-transform">
            Solar for Business
          </Button>

          <div className="grid md:grid-cols-3 gap-10">
            {commercialPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-border flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-[#F59E0B] py-4 text-white font-bold text-xl uppercase tracking-wider">
                  {pkg.badge}
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-6xl font-black text-[#0B2A4D] mb-4">{pkg.size}</h3>
                  <p className="text-muted-foreground font-extrabold text-xl mb-12 uppercase tracking-wide">{pkg.suitable}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-12 pt-10 border-t border-border">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-3">
                         <Sun className="h-12 w-12 text-[#0B2A4D]" />
                      </div>
                      <p className="text-base font-black text-[#0B2A4D] uppercase tracking-tighter">Tier 1 Panels</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-3">
                         <Battery className="h-12 w-12 text-[#0B2A4D]" />
                      </div>
                      <p className="text-base font-black text-[#0B2A4D] uppercase tracking-tighter leading-tight">{pkg.features[1]}</p>
                    </div>
                  </div>

                  <div className="mt-auto space-y-6">
                    <Button 
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full bg-[#8E8E8E] hover:bg-[#707070] text-white rounded-2xl py-8 text-2xl font-black flex items-center justify-center gap-3 transition-colors uppercase tracking-widest shadow-lg"
                    >
                      BOOK NOW <ArrowRight className="h-7 w-7" />
                    </Button>
                    <Link href="/contact" className="text-muted-foreground/60 hover:text-[#0B2A4D] font-bold text-lg underline underline-offset-8 inline-block transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Solutions for Every Industry
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              We provide tailored commercial solar solutions for a wide range of industries across Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-muted/50 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Process */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-balance">Our Commercial Installation Process</span>
            </h2>
            <p className="text-lg text-primary-foreground/80">
              From initial consultation to ongoing support, we manage every aspect of your commercial solar project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Site Assessment", desc: "Free on-site evaluation of your premises and energy needs" },
              { step: 2, title: "Custom Design", desc: "Tailored system design optimized for your business" },
              { step: 3, title: "Professional Install", desc: "Expert installation with minimal business disruption" },
              { step: 4, title: "Ongoing Support", desc: "Monitoring, maintenance, and performance guarantee" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border-2 border-white flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-10 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
            >
              Start Your Commercial Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-10 w-10 mx-auto text-primary mb-3" />
              <p className="font-semibold text-foreground">CEC Approved</p>
              <p className="text-sm text-muted-foreground">Certified Installer</p>
            </div>
            <div>
              <Shield className="h-10 w-10 mx-auto text-primary mb-3" />
              <p className="font-semibold text-foreground">25 Year Warranty</p>
              <p className="text-sm text-muted-foreground">Panel Coverage</p>
            </div>
            <div>
              <Clock className="h-10 w-10 mx-auto text-primary mb-3" />
              <p className="font-semibold text-foreground">10+ Years</p>
              <p className="text-sm text-muted-foreground">Industry Experience</p>
            </div>
            <div>
              <Building2 className="h-10 w-10 mx-auto text-primary mb-3" />
              <p className="font-semibold text-foreground">500+ Projects</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </div>
      </section>

      <BrandsSection />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}
