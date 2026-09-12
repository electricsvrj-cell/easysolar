"use client"

import { useState } from "react"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function QuoteModalWrapper() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <>
      <Button 
        onClick={() => setQuoteModalOpen(true)}
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-xl shadow-red-600/20 transition-all hover:scale-105"
      >
        Get a Free Quote Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  )
}
