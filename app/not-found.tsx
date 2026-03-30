import Link from 'next/link'
import { FileQuestion, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
        <FileQuestion className="h-12 w-12 text-primary" />
      </div>

      <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
        404
      </h1>
      
      <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
      
      <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
        Oops! It seems the page you're looking for has wandered off-grid. 
        Let's get you back on the right track.
      </p>

      <Button
        asChild
        size="lg"
        className="bg-primary text-white hover:bg-primary/90 font-bold px-10 py-7 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-6 w-6" />
          Back to Home
        </Link>
      </Button>

      <div className="mt-20 text-muted-foreground/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Easy Solar Solution. All rights reserved.</p>
      </div>
    </div>
  )
}
