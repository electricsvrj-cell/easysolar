"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Home,
  ChevronRight
} from "lucide-react"
import { BrandsSection } from "@/components/brands-section"


const packageDetails = [
  {
    id: "panels",
    label: "Solar Panels",
    title: "Premium Quality",
    points: [
      "6.6kW Tier-1 Solar Panel System",
      "Optimised Residential Configuration",
      "25 Year Linear Output Warranty",
      "High Efficiency Mono-Crystalline Panels"
    ]
  },
  {
    id: "inverter",
    label: "Solar Inverter",
    title: "Smart Solar Inverter",
    points: [
      "CEC Approved 5kW Inverter",
      "WiFi Monitoring via Mobile App",
      "Advanced Safety & Grid Protection",
      "Optimised for Australian Homes"
    ]
  },
  {
    id: "mounting",
    label: "Mounting Kit",
    title: "Durable Mounting System",
    points: [
      "Lightweight Aluminium Rails",
      "Weather Resistant Components",
      "Engineered for Long-Term Stability",
      "Australian Wind Load Certified"
    ]
  },
  {
    id: "installation",
    label: "Expert Installation",
    title: "Professional Installation",
    points: [
      "CEC Accredited Installers",
      "Clean & Safe Installation Process",
      "Full System Testing & Handover",
      "After-Sales Support & Assistance"
    ]
  }
]

function PackageTabs() {
  const [activeTab, setActiveTab] = useState("panels")
  const activeDetail = packageDetails.find(d => d.id === activeTab) || packageDetails[0]

  return (
    <div className="space-y-4">
      {packageDetails.map((item) => (
        <div key={item.id} className="border-b border-border/50">
          <button
            onClick={() => setActiveTab(item.id)}
            className={`w-full py-4 flex items-center justify-between text-left transition-all ${
              activeTab === item.id 
                ? "bg-[#ffca08] px-6 rounded-xl mb-4 text-white shadow-md shadow-[#ffca08]/20" 
                : "hover:text-[#3e70b5] px-2 text-foreground/80"
            }`}
          >
            <span className="text-xl font-bold">
              {item.label}
            </span>
          </button>
          
          {activeTab === item.id && (
            <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
              <h4 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                {activeDetail.title}
              </h4>
              <ul className="space-y-4">
                {activeDetail.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-medium text-muted-foreground group">
                    <div className="w-8 h-8 rounded-full border-2 border-[#ffca08] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#ffca08] transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-[#ffca08] group-hover:text-white" />
                    </div>
                    <span className="pt-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function SixPointSixKWPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    houseNumber: "",
    streetName: "",
    suburb: "",
    state: "Victoria",
    postcode: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          houseNumber: "",
          streetName: "",
          suburb: "",
          state: "Victoria",
          postcode: ""
        })
        setTimeout(() => setFormSubmitted(false), 5000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Error submitting lead. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-inter)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffca08]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">6.6kW Solar System</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">CEC Approved Systems</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-8 font-[family-name:var(--font-space-grotesk)] tracking-tight">
                <span className="text-balance text-white">6.6kW Solar</span>{" "}
                <span className="text-[#ffca08]">
                  Power System
                </span>
              </h1>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center gap-3 text-primary-foreground bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Home className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">16-18</div>
                    <div className="text-xs opacity-70">Solar Panels</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">5 kW</div>
                    <div className="text-xs opacity-70">Single Phase</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#ffca08]/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#ffca08]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Elite</div>
                    <div className="text-xs opacity-70">Performance</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button 
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-7 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-xl shadow-red-600/20 transition-all hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#ffca08]" />
                  <span className="text-primary-foreground font-bold">0435 064 555</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white/5 ring-1 ring-white/10">
                <Image
                  src="/images/hero-solar.jpg"
                  alt="Premium Solar Panels"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Intro Features & Warranty Boxes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3e70b5] mb-8 font-[family-name:var(--font-space-grotesk)]">
              6.6kW Solar Systems
            </h2>
            <ul className="space-y-4 text-xl text-foreground/80 font-medium">
              {[
                "15 × 440W Premium Tier-1 Solar Panels",
                "High Efficiency 5kW CEC Approved Inverter",
                "Flexible Solar Battery Upgrade Options",
                "Local Australian Installation & Support"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md bg-[#ffca08] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "30", label: "Days Quality Build", sub: "Guarantee" },
              { num: "25", label: "Years Panel Performance Warranty", sub: "Performance Warranty" },
              { num: "10", label: "Years Inverter Warranty", sub: "Warranty" },
              { num: "10", label: "Years Workmanship Warranty", sub: "Warranty" }
            ].map((box, i) => (
              <div key={i} className="bg-[#ffca08] rounded-[2rem] p-8 text-center flex flex-col items-center justify-center min-h-[220px] shadow-lg shadow-[#ffca08]/20">
                <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center mb-4">
                  <span className="text-3xl font-extrabold text-black">{box.num}</span>
                </div>
                <p className="font-bold text-black text-lg leading-tight uppercase tracking-tight">
                  {box.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Packages That Fit Your Needs */}
      <section className="py-16 lg:py-24 bg-muted/30 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3e70b5] mb-2 font-[family-name:var(--font-space-grotesk)]">
                Packages That Fit Your Needs
              </h2>
              <p className="text-lg text-muted-foreground mb-12">Solar Packages</p>

              <PackageTabs />
            </div>

            <div className="relative pt-12">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-black/5">
                <Image
                  src="/images/solar-on-roof.png"
                  alt="Solar Panels Installation on Roof"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solar Power System & Stats */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "20 MW+", label: "Number of Installations" },
                { val: "56,000+", label: "Solar Panels Installed" },
                { val: "~60 MW/d+", label: "Energy Production" },
                { val: "~21 GWh+", label: "Annual Energy Production" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border-2 border-[#ffca08] text-center shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-3xl lg:text-4xl font-extrabold text-[#3e70b5] mb-2">
                    {stat.val}
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground leading-tight uppercase tracking-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Content block */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3e70b5] font-[family-name:var(--font-space-grotesk)]">
                Solar Power System
              </h2>
              <h3 className="text-2xl font-bold text-foreground/90">
                Why you should use solar panels
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A 6.6kW solar power system is the ideal choice for Australian households looking to reduce 
                  electricity bills and gain greater energy independence. With rising energy prices, generating 
                  your own renewable power provides long-term financial savings and stability.
                </p>
                <p>
                  Solar energy not only lowers household expenses but also increases property value and reduces 
                  carbon emissions. By switching to clean renewable energy, your family contributes to a 
                  sustainable future while enjoying reliable, cost-effective power for years to come.
                </p>
              </div>
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                size="lg"
                className="bg-[#ffca08] text-white hover:bg-[#ffca08]/90 font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-[#ffca08]/20 transition-all hover:scale-105 mt-4"
              >
                Get a FREE Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Quote Form */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                <span className="text-balance">Request a Free Quote Today!</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Get Australia&apos;s best value solar panel system. It&apos;s never been easier to go solar. 
                Contact us for a FREE evaluation today.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Up To 30 Year Performance Warranty</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>5 Year Workmanship Warranty</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Zero Deposit Installation</span>
                </li>
              </ul>

              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm font-medium text-white">
                  Higher rebates available only until 30 April 2026 - Don&apos;t lose your rebate!
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get Your Free Quote</h3>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Request Sent!</h4>
                  <p className="text-muted-foreground">Thank you. We will contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="House Number"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.houseNumber}
                      onChange={(e) => setFormData({...formData, houseNumber: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Street Name"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.streetName}
                      onChange={(e) => setFormData({...formData, streetName: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Suburb"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.suburb}
                      onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                    />
                    <input
                      type="text"
                      value="Victoria"
                      readOnly
                      className="w-full h-11 px-4 rounded-lg border border-border bg-muted text-foreground text-sm font-semibold cursor-not-allowed"
                    />
                    <input
                      type="text"
                      placeholder="Postcode (4 digits)"
                      pattern="[0-9]{4}"
                      maxLength={4}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-input text-foreground text-sm"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 font-semibold py-6 text-lg shadow-lg shadow-secondary/20 transition-all hover:scale-105 mt-2"
                  >
                    {isSubmitting ? "Sending..." : "Get a Free Quote"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              )}
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
