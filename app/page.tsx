"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import {
  Sun,
  Shield,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Leaf,
  Clock,
  Phone,
  Star
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { BrandsSection } from "@/components/brands-section"
import { RebateCountdownBanner } from "@/components/rebate-countdown-banner"

const residentialServices = [
  {
    title: "SMALL HOUSEHOLD",
    subtitle: "6.6 kW",
    features: [
      "15 × 440W Premium Panels",
      "25-Year Performance Warranty",
      "High-Efficiency Inverter",
      "10-Year Inverter Warranty"
    ],
    image: "/images/solar-panels-closeup.jpg",
    href: "/contact"
  },
  {
    title: "MEDIUM HOUSEHOLD",
    subtitle: "10.56 kW",
    features: [
      "24 × 440W Premium Panels",
      "30-Year Performance Warranty",
      "High-Efficiency Inverter",
      "10-Year Workmanship Warranty"
    ],
    image: "/images/hero-solar.jpg",
    href: "/contact"
  },
  {
    title: "LARGE HOUSEHOLD",
    subtitle: "13.2 kW",
    features: [
      "30 × 440W Premium Panels",
      "30-Year Performance Warranty",
      "Premium Inverter",
      "10-Year Workmanship Warranty"
    ],
    image: "/images/commercial-solar.jpg",
    href: "/contact"
  }
]

const commercialServices = [
  {
    title: "SMALL BUSINESS",
    subtitle: "20 kW",
    features: [
      "20kW Tier 1 Solar Modules",
      "25-Year Performance Warranty",
      "High-Efficiency Inverter",
      "10-Year Inverter Warranty"
    ],
    image: "/images/commercial-solar.jpg",
    href: "/contact"
  },
  {
    title: "MEDIUM BUSINESS",
    subtitle: "30 kW",
    features: [
      "30kW Tier 1 Solar Modules",
      "25-Year Performance Warranty",
      "High-Efficiency Inverter",
      "10-Year Inverter Warranty"
    ],
    image: "/images/solar-panels-closeup.jpg",
    href: "/contact"
  },
  {
    title: "LARGE BUSINESS",
    subtitle: "50 kW",
    features: [
      "50kW Tier 1 Solar Modules",
      "25-Year Performance Warranty",
      "High-Efficiency Inverter",
      "10-Year Inverter Warranty"
    ],
    image: "/images/hero-solar.jpg",
    href: "/contact"
  }
]

const features = [
  {
    icon: Award,
    title: "CEC Approved Retailer",
    description: "Certified by the Clean Energy Council for quality and compliance."
  },
  {
    icon: Shield,
    title: "25 Year Warranty",
    description: "Industry-leading panel warranties with up to 30 years coverage."
  },
  {
    icon: Users,
    title: "10,000+ Installations",
    description: "Trusted by thousands of Australian homeowners and businesses."
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Professional installation typically completed within 1-2 days."
  }
]



const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "",
    rating: 5,
    text: "Excellent service from start to finish. The team was professional and our electricity bills have dropped by 80%. Highly recommend!"
  },
  {
    name: "James Chen",
    location: "",
    rating: 5,
    text: "Great communication throughout the process. The 10kW system they installed is performing above expectations. Very happy with our decision."
  },
  {
    name: "Lisa Thompson",
    location: "",
    rating: 5,
    text: "Best investment we have made for our home. The quality of panels and installation was top-notch. Our energy bills are now almost zero!"
  },
  {
    name: "Pete",
    location: "",
    rating: 4,
    text: "Uper Solar Service – Late last year we engaged Easy Solar Solutions to install our solar system. The process from sales to switch-on was well managed with us being updated on each step as they occured. The sales consultant was extremely knowledgable and at no stage was pushy, or rushed us to make decisions."
  },
  {
    name: "James M",
    location: "",
    rating: 5,
    text: "Great Service & Quality Product – Very happy with the pre and post sales service plus it's a quality system with excellent warranty terms. Would definitely recommend Easy Solar Solution."
  }
]

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential')
  const activeServices = activeTab === 'residential' ? residentialServices : commercialServices

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Image Slider */}
      <section className="relative pt-20 lg:pt-24 overflow-hidden bg-background">
        <div className="mx-auto max-w-[1440px]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {[
                {
                  src: "/images/easter-special.png",
                  mobSrc: "/images/mob-slider-1.png.jpeg",
                  alt: "Easter Special Solar Energy 48kWh"
                },
                {
                  src: "/images/easter-special-2.png",
                  mobSrc: "/images/mob-slider-2.png.jpeg",
                  alt: "Easter Special Solar Energy 27kWh"
                }
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full overflow-hidden">
                    {/* Desktop Image */}
                    <div className="hidden md:block">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1920}
                        height={640}
                        className="w-full h-auto"
                        priority={index === 0}
                      />
                    </div>
                    {/* Mobile Image */}
                    <div className="block md:hidden">
                      <Image
                        src={item.mobSrc}
                        alt={item.alt}
                        width={1080}
                        height={1350}
                        className="w-full h-auto"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-card border-y border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
              <Sun className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {activeTab === 'residential' ? 'Residential' : 'Commercial'} Solar Solutions
              </span>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12 items-center space-x-4">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'residential'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                  }`}
              >
                Residential
              </button>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'commercial'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                  }`}
              >
                Commercial
              </button>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              {activeTab === 'residential' ? (
                <span className="text-balance">Premium Residential Solar Systems</span>
              ) : (
                <span className="text-balance">Premium Commercial Solar Solutions</span>
              )}
            </h2>
            <p className="text-lg text-muted-foreground">
              {activeTab === 'residential' ? (
                "From the very beginning, the team provided clear guidance and helped us understand all available system options. They patiently answered our questions and recommended the best solution for our needs."
              ) : (
                "At Evergreen Solar Power, we design and install high-performance commercial solar systems tailored to business energy demands. Our solutions help reduce operational costs while improving sustainability."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map((service, index) => (
              <div
                key={index}
                onClick={() => setQuoteModalOpen(true)}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-center p-8 text-center cursor-pointer"
              >
                {/* Image Background (Small Circle or Box if you want image) */}
                {/* The user's design is very clean/white. I'll include the image as a header or background */}
                <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-3xl font-extrabold text-primary mb-6">
                  {service.subtitle}
                </p>


                {/* Features Checklist */}
                <ul className="space-y-4 mb-8 w-full">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-yellow-500 fill-yellow-500/20" />
                      </div>
                      <span className="text-foreground/80 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary/90 transition-all shadow-lg group-hover:shadow-primary/20">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NETCC Trust Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#001540] rounded-[2.5rem] p-8 lg:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-space-grotesk)]">
                  You are right where you belong! <br />
                  At the trusted NETCC Approved solar system retailer in Australia!
                </h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                  Our team of in-house solar engineers and consultants, project managers, and quality assurance personnel
                  work seamlessly to create the most efficient systems available. As a NETCC Approved Seller, we are
                  committed to delivering transparent, high-standard solar solutions. Customers are rapidly recognizing
                  that our commitment to excellence is truly unparalleled.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105"
                  >
                    GET A FREE QUOTE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all"
                    asChild
                  >
                    <a href="tel:0435064555" className="flex items-center">
                      CALL 0435 064 555
                      <Phone className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                  <Image
                    src="/images/solar_tech_cartoon.png"
                    alt="Friendly Solar Technician"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                  {/* Subtle Background Shape */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="w-full">
        <Image
          src="/images/refer-friend.jpeg"
          alt="Refer a Friend"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-4">
                <Leaf className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Why Choose Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                <span className="text-balance">Australia&apos;s Trusted Solar Installation Experts</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                With over a decade of experience and 1,000+ successful installations, we deliver premium solar solutions
                that maximize your savings and minimize your environmental footprint.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Tier 1 Solar Panels with up to 30 Year Warranty",
                  "CEC Accredited Installers",
                  "Australian-Owned and Operated",
                  "5-Year Workmanship Guarantee",
                  "Hassle-Free Grid Connection",
                  "Monitoring & Ongoing Support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setQuoteModalOpen(true)}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 rounded-xl shadow-xl transition-all hover:scale-105 shadow-white/5"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-panels-closeup.jpg"
                  alt="Premium solar panels installation"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">1,000+</p>
                    <p className="text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandsSection />

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Customer Reviews</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-balance">What Our Customers Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied homeowners who have made the switch to solar
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-2">
                    <div className="bg-card rounded-2xl p-6 border border-border h-full flex flex-col">
                      <div className="flex gap-1 mb-4 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 flex-grow italic">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          {testimonial.location && (
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-balance">Ready to Start Saving on Your Energy Bills?</span>
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today and discover how much you could save with solar.
            Our experts will design the perfect system for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-7 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105"
            >
              Get Your Free Quote Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded-full transition-all"
              asChild
            >
              <a href="tel:1300000000" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Speak to an Expert
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-white" />
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-white" />
              Response within 24 Hours
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-white" />
              Expert Consultation
            </span>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      <RebateCountdownBanner onOpenModal={() => setQuoteModalOpen(true)} />
    </div>
  )
}
