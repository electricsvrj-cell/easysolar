"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"


const residentialDropdown = [
  { name: "6.6 KW Solar System", href: "/residential/6-6kw-solar-system" },
  { name: "10 KW Solar System", href: "/residential/10kw-solar-system" },
  { name: "13 KW Solar System", href: "/residential/13kw-solar-system" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [residentialOpen, setResidentialOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        {/* Top bar */}
        <div className="bg-secondary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <p className="hidden sm:block font-medium">
                Higher rebates available only until 30 April 2026 - Act Now!
              </p>
              <div className="flex items-center gap-4 ml-auto">
                <a href="tel:0435064555" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>0435 064 555</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-white rounded-lg p-1 px-3 shadow-md flex items-center justify-center h-12 lg:h-16">
                <img
                  src="/logo-ess-final.png"
                  alt="ESS Easy Solar Solution"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/solar-battery"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Solar Battery
              </Link>

              {/* Residential Solar Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors"
                  onMouseEnter={() => setResidentialOpen(true)}
                  onMouseLeave={() => setResidentialOpen(false)}
                >
                  Residential Solar
                  <ChevronDown className={`h-4 w-4 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 ${residentialOpen ? 'block' : 'hidden'}`}
                  onMouseEnter={() => setResidentialOpen(true)}
                  onMouseLeave={() => setResidentialOpen(false)}
                >
                  <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                    {residentialDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/commercial-solar"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Commercial Solar
              </Link>

              <Link
                href="/contact"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105"
              >
                Get a Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/solar-battery"
                className="block py-3 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solar Battery
              </Link>

              {/* Mobile Residential Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary font-medium"
                  onClick={() => setResidentialOpen(!residentialOpen)}
                >
                  Residential Solar
                  <ChevronDown className={`h-4 w-4 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} />
                </button>
                {residentialOpen && (
                  <div className="pl-4 space-y-1">
                    {residentialDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/commercial-solar"
                className="block py-3 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commercial Solar
              </Link>

              <Link
                href="/contact"
                className="block py-3 text-foreground hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Button
                onClick={() => {
                  setQuoteModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full mt-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary hover:to-primary/90 font-bold shadow-lg"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  )
}
