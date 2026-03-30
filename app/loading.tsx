import { Sun } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <Sun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Loading Experience</h2>
        <p className="text-muted-foreground animate-pulse">Powering up your solar solutions...</p>
      </div>
    </div>
  )
}
