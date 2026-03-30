"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Send,
  CheckCircle2,
  MessageSquare
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "0435 064 555",
    subDetail: "Mon-Fri 8am-6pm, Sat 9am-4pm",
    href: "tel:0435064555"
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@easysolarsolution.com.au",
    subDetail: "We respond within 24 hours",
    href: "mailto:info@easysolarsolution.com.au"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "86 Hotham St",
    subDetail: "Preston VIC 3072",
    href: "https://www.google.com/maps/dir//86+Hotham+St,+Preston+VIC+3072"
  },
]

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer: "Most residential installations are completed in 1-2 days. Commercial projects vary depending on system size, typically ranging from 3-10 days."
  },
  {
    question: "What rebates are available?",
    answer: "Australian homeowners can access Small-scale Technology Certificates (STCs) which provide significant upfront discounts. The exact amount depends on your location and system size."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer various financing options including interest-free payment plans. Our team can help you find the best option for your budget."
  },
  {
    question: "What warranty do you provide?",
    answer: "We provide a 5-year workmanship warranty on installation, plus manufacturer warranties of up to 25-30 years on panels and 10-12 years on inverters."
  }
]

export default function ContactPage() {
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
        // Reset form after a delay
        setTimeout(() => {
          setFormSubmitted(false)
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
        }, 5000)
      } else {
        console.error("Failed to submit lead")
        alert("Something went wrong. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("Error submitting lead:", error)
      alert("Something went wrong. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <MessageSquare className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-balance">Contact</span>{" "}
              <span className="text-white">
                Our Team
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-primary-foreground/90">
              Have questions about solar? Our friendly team is here to help. Get in touch with us
              today for expert advice, a free quote, or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-20 relative z-20">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-primary hover:text-primary/80 font-medium block mb-1">
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-foreground font-medium mb-1">{item.detail}</p>
                )}
                <p className="text-sm text-muted-foreground">{item.subDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-input border-border h-12"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="john@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-input border-border h-12"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="04XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-input border-border h-12"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Address Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            House Number *
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder="123"
                            value={formData.houseNumber}
                            onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                            className="bg-input border-border h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Street Name *
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder="High St"
                            value={formData.streetName}
                            onChange={(e) => setFormData({ ...formData, streetName: e.target.value })}
                            className="bg-input border-border h-12"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Suburb *
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder="Preston"
                            value={formData.suburb}
                            onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                            className="bg-input border-border h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            State
                          </label>
                          <Input
                            type="text"
                            readOnly
                            value={formData.state}
                            className="bg-muted border-border h-12 font-semibold cursor-not-allowed"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Postcode *
                          </label>
                          <Input
                            type="text"
                            required
                            pattern="[0-9]{4}"
                            maxLength={4}
                            placeholder="3072"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value.replace(/\D/g, '') })}
                            className="bg-input border-border h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-5 w-5" />}
                  </Button>
                </form>
              )}
            </div>

            {/* Map / Quick Quote */}
            <div>
              <div className="bg-primary rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Need a Quick Quote?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get an instant estimate for your solar system. Our team will follow up
                  with a detailed proposal tailored to your needs.
                </p>
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  size="lg"
                  className="w-full bg-secondary text-white hover:bg-secondary/90 font-semibold shadow-lg shadow-secondary/20 transition-all hover:scale-105"
                >
                  Get Free Quote
                </Button>
              </div>

              {/* Live Google Map */}
              <div className="bg-muted rounded-2xl overflow-hidden shadow-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.6022687556734!2d145.0003057!3d-37.7408809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644fc273060cf%3A0xc3f6d745423f038!2s86+Hotham+St%2C+Preston+VIC+3072%2C+Australia!5e0!3m2!1sen!2sau!4v1711466000000!5m2!1sen!2sau"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Easy Solar Solution Office Location"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-muted-foreground mb-2 flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  86 Hotham St, Preston VIC 3072
                </p>
                <a
                  href="https://www.google.com/maps/dir//86+Hotham+St,+Preston+VIC+3072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium inline-block"
                >
                  Get Directions in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our solar services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Have more questions? We&apos;re here to help!
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="tel:0479 074 555">
                <Phone className="mr-2 h-4 w-4" />
                Call 0479 074 555
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}
