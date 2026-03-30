'use client'

import { useEffect } from 'react'
import { AlertCircle, RotateCcw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>
      
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
        Something went wrong!
      </h1>
      
      <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
        We encountered an unexpected error while loading this page. 
        Don't worry, your solar journey is safe with us.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => reset()}
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Try Again
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary/10 font-bold px-8 py-6 rounded-xl transition-all"
          asChild
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
        </Button>
      </div>

      <div className="mt-16 p-4 bg-muted/50 rounded-lg max-w-2xl w-full text-left overflow-auto">
        <p className="text-xs font-mono text-muted-foreground break-all">
          Error: {error.message || 'An unknown error occurred'}
          {error.digest && <span className="block mt-1">ID: {error.digest}</span>}
        </p>
      </div>
    </div>
  )
}
