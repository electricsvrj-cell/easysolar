"use client"

import { useState } from "react"
import { X, CheckCircle2, User, Mail, Phone, Home, MapPin, Building2, Hash, Send, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
        setIsSubmitted(true)
        setTimeout(() => {
          onOpenChange(false) // Changed from onClose() to onOpenChange(false)
          setIsSubmitted(false)
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
        }, 3000)
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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We have received your quote request. Our solar experts will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-secondary p-6 rounded-t-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-foreground font-[family-name:var(--font-space-grotesk)]">
                  Get Your Free Quote
                </h2>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Fill in your details and our solar experts will get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-border mt-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Address Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      House Number *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="123"
                      value={formData.houseNumber}
                      onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Street Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="High St"
                      value={formData.streetName}
                      onChange={(e) => setFormData({ ...formData, streetName: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Suburb *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Preston"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-foreground mb-1">
                      State
                    </label>
                    <Input
                      type="text"
                      readOnly
                      value={formData.state}
                      className="bg-muted border-border cursor-not-allowed font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-foreground mb-1">
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
                      className="bg-input border-border"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground pt-4">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I agree to receive communications from Easy Solar. I can unsubscribe at any time.
                </span>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95 flex items-center justify-center gap-2"
            >
                {isSubmitting ? "Sending..." : "Submit Quote Request"}
                {!isSubmitting && <Send className="h-5 w-5" />}
            </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. Your information is 100% secure and will never be shared.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
