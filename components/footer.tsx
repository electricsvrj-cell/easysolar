"use client"

import Link from "next/link"
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0b2a4d' }} className="text-primary-foreground pb-48 md:pb-28">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-[220px] lg:w-[300px] h-auto aspect-[3/2] flex items-center">
                <img
                  src="/logo-footer-final.png"
                  alt="ESS Easy Solar Solution"
                  style={{ maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)', WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)' }}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Australia&apos;s trusted solar installation company. Delivering premium solar solutions for homes and businesses since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solar-battery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Solar Battery
                </Link>
              </li>
              <li>
                <Link href="/residential/6-6kw-solar-system" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  6.6 KW Solar System
                </Link>
              </li>
              <li>
                <Link href="/residential/10kw-solar-system" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  10 KW Solar System
                </Link>
              </li>
              <li>
                <Link href="/residential/13kw-solar-system" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  13 KW Solar System
                </Link>
              </li>
              <li>
                <Link href="/commercial-solar" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Commercial Solar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:0435064555" className="text-primary-foreground/80 hover:text-white transition-colors">
                    0435 064 555
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:info@easysolarsolution.com.au" className="text-primary-foreground/80 hover:text-white transition-colors">
                    info@easysolarsolution.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-primary-foreground/80">
                    86 Hotham St, Preston VIC 3072
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Easy Solar Solution. All rights reserved. | CEC Approved Retailer.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/60">Powered by <a href="https://fubit.co.in" target="_blank" rel="noopener noreferrer">FUBIT IT SOLUTIONS</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
