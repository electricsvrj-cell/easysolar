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
  Zap,
  Battery,
  Phone,
  Home,
  ChevronRight,
  Car
} from "lucide-react"
import { BrandsSection } from "@/components/brands-section"


const whyChoose = [
  {
    icon: Award,
    title: "CEC Approved Retailer",
    description: "Certified by the Clean Energy Council for quality and compliance."
  },
  {
    icon: Shield,
    title: "5 Year Workmanship",
    description: "Our installation work is guaranteed for 5 years."
  },
  {
    icon: Car,
    title: "EV Ready",
    description: "Perfect for electric vehicle charging at home."
  },
  {
    icon: Battery,
    title: "Battery Ready",
    description: "System designed for future battery integration."
  }
]

export default function SolarSystem13KW() {
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
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffca08]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/residential/13kw-solar-system" className="hover:text-secondary transition-colors">Residential Solar</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">13 KW Solar System</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <Zap className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Maximum Power Output</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-8 font-[family-name:var(--font-space-grotesk)] tracking-tight">
                <span className="text-balance text-white">13 KW</span>{" "}
                <span className="text-[#ffca08]">
                  Solar System
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-xl">
                The 13kW solar system is our premium residential solution, delivering maximum power for large 
                properties and high-consumption households. Ideal for homes with electric vehicles, multiple 
                air conditioning units, pools, and those looking to achieve near-complete energy independence.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-primary-foreground/70">Expert Installation</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary-foreground">~52</p>
                  <p className="text-sm text-primary-foreground/70">kWh Daily Output</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
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

      {/* System Output Introduction */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a365d] mb-4 font-[family-name:var(--font-space-grotesk)]">
            The output of a 13.2kw solar system
          </h2>
          <div className="w-12 h-1 bg-[#e11d48] mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For a larger home, a 13.2kW household <span className="font-bold text-[#1a365d]">solar power system</span> can be ideal. 
            A 13.2kW solar system will require 31 solar PV panels equal to a standard 425-watt panel. 
            Similarly, 34 solar panels will be needed if using 390-watt panels. 
            A 13.2kW solar system will require between 475 and 615 square feet of roof area for installation. 
            The savings made from a 13.2kW solar system are determined by how much solar energy you can utilise 
            <span className="font-bold text-[#1a365d]"> significantly</span> on your utility bill.
          </p>
        </div>
      </section>

      {/* Detailed Components Sections */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          
          {/* Section 1: Solar Panels */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 scale-110 lg:scale-125">
                <Image
                  src="/images/panels-10kw.png"
                  alt="Tier 1 Solar Panels"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight">SOLAR PANELS</h2>
                <p className="text-xl lg:text-2xl font-bold text-[#e11d48]">TIER 1 PANELS – 13.2 KW SYSTEM</p>
              </div>
              <ul className="space-y-4">
                {[
                  "Tier 1 Solar Module",
                  "Reputed Solar Brand",
                  "High Efficiency Solar Module",
                  "30 Days Quality Build Guarantee",
                  "Local Australian Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#1a365d]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e11d48] flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#e11d48]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#e11d48] hover:bg-[#e11d48]/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-200 transition-all hover:scale-105 group"
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Section 2: Solar Inverter */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight">SOLAR INVERTER</h2>
                <p className="text-xl lg:text-2xl font-bold text-[#e11d48]">1 X 10 KW SOLAR INVERTER</p>
              </div>
              <ul className="space-y-4">
                {[
                  "High Efficiency",
                  "Proven Track Record",
                  "Online Monitoring (optional)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#1a365d]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e11d48] flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#e11d48]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#e11d48] hover:bg-[#e11d48]/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-200 transition-all hover:scale-105 group"
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative lg:order-2">
              <div className="relative z-10 scale-110 lg:scale-125">
                <Image
                  src="/images/inverter-10kw.png"
                  alt="Solar Inverter"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Panel Mounting Gear */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 scale-110 lg:scale-125">
                <Image
                  src="/images/mounting-10kw.png"
                  alt="Panel Mounting Gear"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight uppercase">Panel Mounting Gear</h2>
                <p className="text-xl lg:text-2xl font-bold text-[#e11d48] uppercase">Panel Mounting Kit</p>
              </div>
              <ul className="space-y-4">
                {[
                  "Available in Tin, Tile and Klip-Lok",
                  "Light weight",
                  "Easy to install"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#1a365d]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e11d48] flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#e11d48]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#e11d48] hover:bg-[#e11d48]/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-200 transition-all hover:scale-105 group"
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-secondary transition-all hover:shadow-xl group">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <item.icon className="h-7 w-7 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image
                src="/images/solar-panels-closeup.jpg"
                alt="High Efficiency Solar Panels"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#3e70b5] font-[family-name:var(--font-space-grotesk)]">
                Maximum Energy Independence
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A 13kW system is the gold standard for residential solar in Australia. It provides enough power
                  not just for your daily needs, but also to charge electric vehicles and sustain backup batteries
                  through the night.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    "30+ Premium Panels",
                    "Dual Smart Inverters",
                    "EV Charging Ready",
                    "Advanced Grid Protection",
                    "Maximum Rebate Value",
                    "Full Home Backup Ready"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                <span className="text-balance">Go Big on Savings!</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Ready to eliminate your power bill? Get a free evaluation for our 13kW premium system today.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>Maximum Output Warranty</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>5 Year Workmanship Warranty</span>
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
