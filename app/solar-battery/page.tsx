"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import {
  Battery,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Moon,
  Sun,
  Phone,
  ChevronRight,
  Clock,
  Home
} from "lucide-react"
import { BrandsSection } from "@/components/brands-section"

const batteryOptions = [
  {
    name: "5 kWh Battery",
    capacity: "5 kWh",
    cycles: "6,000+",
    warranty: "10 Years",
    price: "",
    features: [
      "Perfect for small households",
      "Store excess solar energy",
      "Backup essential circuits",
      "Wall mountable design",
      "Smart app monitoring"
    ]
  },
  {
    name: "10 kWh Battery",
    capacity: "10 kWh",
    cycles: "6,000+",
    warranty: "10 Years",
    price: "",
    popular: true,
    features: [
      "Ideal for average homes",
      "Power through the night",
      "Backup multiple circuits",
      "Expandable storage",
      "Real-time monitoring"
    ]
  },
  {
    name: "15 kWh Battery",
    capacity: "15 kWh",
    cycles: "6,000+",
    warranty: "10 Years",
    price: "",
    features: [
      "Large family solution",
      "Full home backup",
      "EV charging compatible",
      "Multiple battery stack",
      "Premium warranty"
    ]
  }
]

const benefits = [
  {
    icon: Moon,
    title: "Power at Night",
    description: "Use your stored solar energy after the sun goes down instead of buying from the grid."
  },
  {
    icon: Shield,
    title: "Blackout Protection",
    description: "Keep essential appliances running during power outages for peace of mind."
  },
  {
    icon: Zap,
    title: "Lower Bills",
    description: "Avoid peak electricity rates by using your battery when grid prices are highest."
  },
  {
    icon: Clock,
    title: "Energy Independence",
    description: "Reduce your reliance on the grid and take control of your energy future."
  }
]

export default function SolarBatteryPage() {
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
            <span className="text-white">Solar Battery</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <Battery className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Energy Storage Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-[family-name:var(--font-space-grotesk)]">
                <span className="text-balance">Solar</span>{" "}
                <span className="text-white">
                  Battery Storage
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8">
                Store your solar energy for use when you need it most. Our premium battery solutions
                give you energy independence, backup power during outages, and maximum savings on
                your electricity bills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-10 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
                >
                  Get Battery Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all"
                  asChild
                >
                  <a href="tel:0435064555" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Speak to an Expert
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-battery.jpg"
                  alt="Home Battery Storage"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-balance">Unlock the Power of Solar Energy with Our Advanced Solar Panel System with Battery Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At Easy Solar Solution, we are committed to providing cutting-edge solar energy solutions that meet the evolving needs of Australian homes and businesses. Our solar system with battery options ensures you maximize your energy savings while enjoying uninterrupted power supply. Discover the benefits of integrating a solar panel system with battery storage into your energy plan and take advantage of government incentives like the solar battery rebate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Why Choose Solar + Battery */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Why Choose a Solar Panel System with Battery?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A solar system with battery storage allows you to store excess energy generated during the day for use at night or during grid outages. 
                  This not only increases your energy independence but also enhances the efficiency of your solar setup.
                </p>
                <p>
                  By storing energy during peak sunlight hours and using it when the sun isn&apos;t shining, you can ensure a consistent and reliable power supply for your home or business. 
                  This means fewer disruptions and more savings on your electricity bills.
                </p>
                <p>
                  Moreover, a solar panel system with battery storage helps to mitigate the impact of rising energy costs. 
                  With traditional energy sources becoming increasingly expensive, having a solar panel system with battery allows you to lock in lower energy costs and protect yourself against future price hikes.
                </p>
                <p>
                  This long-term financial benefit makes investing in solar and battery technology a smart choice for any property owner.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="/images/solar-energy-flow.png"
                  alt="Solar Home Energy Flow Illustration"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Future of Energy Management */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-4 border-secondary/20 max-w-md mx-auto">
                <Image
                  src="/images/battery-storage-interior.png"
                  alt="Modern Battery Storage System"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Solar Panel System with Battery Storage: The Future of Energy Management
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Harnessing solar energy is a smart investment, but coupling it with a battery storage system takes it to the next level. 
                  Our solar panel system with battery storage ensures that you have a reliable power source even when the sun isn&apos;t shining.
                </p>
                <p>
                  This integrated approach to energy management allows you to store and use solar power as needed, providing peace of mind and substantial cost savings.
                </p>
                <p>
                  With a solar panel system with battery storage, you can also participate in energy trading programs. 
                  Any excess energy your system generates can be sold back to the grid, earning you additional income and further offsetting the initial investment costs.
                </p>
                <p>
                  This creates a win-win scenario where you are not only saving on your energy bills but also generating revenue from your solar installation.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50">
            <p className="text-lg text-muted-foreground italic text-center max-w-4xl mx-auto">
              Additionally, having a solar panel system with battery storage can enhance the resilience of your power supply. 
              In the event of a grid failure or natural disaster, your solar battery can provide backup power, 
              ensuring that critical systems and appliances remain operational. This level of energy security is invaluable, 
              particularly in areas prone to power outages.
            </p>
          </div>
        </div>
      </section>

      {/* Battery Options */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Sun className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Battery Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-balance">Choose Your Battery Size</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a range of battery sizes to match your energy needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batteryOptions.map((battery, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-6 border ${battery.popular ? 'border-primary shadow-xl' : 'border-border'
                  } hover:border-primary/50 transition-colors`}
              >
                {battery.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary rounded-full text-white text-sm font-semibold shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{battery.name}</h3>
                  <p className="text-3xl font-bold text-primary">{battery.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-xl">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{battery.capacity}</p>
                    <p className="text-xs text-muted-foreground">Capacity</p>
                  </div>
                  <div className="text-center border-x border-border">
                    <p className="text-lg font-bold text-foreground">{battery.cycles}</p>
                    <p className="text-xs text-muted-foreground">Cycles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{battery.warranty}</p>
                    <p className="text-xs text-muted-foreground">Warranty</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {battery.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  className={`w-full ${battery.popular
                    ? 'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all hover:scale-105'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                >
                  Get a Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Empowering Homeowners - Infographic */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Solar Battery for Home: Empowering Homeowners
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Shield, title: "Energy Security" },
              { icon: Zap, title: "Lower Utility Costs" },
              { icon: Clock, title: "Buffer Against Power Outages" },
              { icon: Sun, title: "Constant Clean Energy Supply" },
              { icon: Home, title: "Designed for Residential Properties" },
              { icon: Moon, title: "Reduces Carbon Footprint" },
              { icon: ArrowRight, title: "Increases Property Value" },
              { icon: Battery, title: "Efficiency Maximization" }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-muted rounded-2xl hover:bg-secondary/5 transition-colors border border-border/50 group">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm leading-tight">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Solar Battery Rebate */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
              Take Advantage of the Solar Panel Battery Rebate
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground">
              <div className="space-y-4">
                <p>
                  The Australian government offers a solar battery rebate to encourage the adoption of renewable energy solutions. 
                  By choosing our solar panel system with battery storage, you can benefit from these incentives and reduce the overall cost of your installation.
                </p>
                <p>
                  Our team will guide you through the process of applying for the solar panel battery rebate, ensuring you get the maximum financial benefit. 
                  The solar panel battery rebate can significantly lower the upfront cost of your solar installation, making it more accessible and affordable.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  This rebate is part of the government&apos;s initiative to promote clean energy and reduce the nation&apos;s carbon footprint. 
                   By taking advantage of the solar panel battery rebate, you can contribute to a more sustainable future while enjoying financial savings.
                </p>
                <p>
                  Our knowledgeable staff is well-versed in the eligibility criteria and application process for the solar panel battery rebate. 
                  We will assist you in compiling the necessary documentation and submitting your application, ensuring a smooth and efficient process.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <p className="text-lg font-medium text-secondary text-center">
                With our help, you can make the most of the available incentives and maximize the return on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-solar.jpg"
                  alt="Solar and battery system"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                <span className="text-balance">How Solar + Battery Works</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Daytime Generation</h3>
                    <p className="text-muted-foreground">
                      Your solar panels generate electricity from sunlight during the day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Power Your Home</h3>
                    <p className="text-muted-foreground">
                      Solar energy powers your home directly, reducing grid consumption.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Store Excess Energy</h3>
                    <p className="text-muted-foreground">
                      Extra solar energy charges your battery for later use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Use at Night</h3>
                    <p className="text-muted-foreground">
                      Draw from your battery in the evening instead of paying grid prices.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setQuoteModalOpen(true)}
                size="lg"
                className="mt-8 bg-secondary text-white hover:bg-secondary/90 font-semibold px-10 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
              >
                Get Your Battery Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: EV Charger with Solar Integration */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Electric Vehicle Charger with Solar Integration
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  For those looking to further enhance their green lifestyle, we offer EV charger with solar integration. 
                  This allows you to charge your electric vehicle using the power generated by your solar panels, providing an eco-friendly and cost-effective solution for your transportation needs.
                </p>
                <p>
                  Integrating an EV charger with your solar system not only reduces your reliance on grid power but also enables you to enjoy the benefits of clean, renewable energy for your vehicle.
                </p>
                <p>
                  This combination of solar power and electric vehicle technology represents a significant step towards a more sustainable and environmentally friendly lifestyle.
                </p>
                <p>
                  Our EV charger with solar addition is designed for optimal efficiency and convenience. 
                  Whether you have a residential solar system or a commercial setup, our chargers can be seamlessly integrated to provide reliable and fast charging for your electric vehicle.
                </p>
                <p>
                  This integration ensures that you are making the most of your solar investment and reducing your overall carbon footprint.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="/images/ev-charger-solar.png"
                  alt="Electric Vehicle Charging with Solar Integration"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-6">
            <Home className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-balance">Ready to Store Your Solar Energy?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free assessment of your home&apos;s battery requirements. Our experts will design
            the perfect storage solution to maximize your energy independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-10 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
            >
              Get Free Battery Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all"
              asChild
            >
              <a href="tel:0435064555" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call 0435 064 555
              </a>
            </Button>
          </div>
        </div>
      </section>

      <BrandsSection />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}
