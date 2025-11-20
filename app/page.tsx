import { Button } from "@/components/ui/button"
import { Sparkles, Mic, Target, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <h1 className="text-xl font-semibold text-balance">SpeakEasy</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/practice" className="text-muted-foreground hover:text-foreground transition-colors">
              Practice
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center bg-secondary border border-border px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Practice makes perfect
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
              Master the art of spontaneous speaking
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Build confidence and improve your impromptu speaking skills with random topic generation. Perfect for
              interviews, presentations, and public speaking practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base px-8 h-12">
                <Link href="/practice">
                  Start Practicing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 bg-transparent">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to excel</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Powerful features designed to help you become a confident and effective speaker
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Random Topics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate unlimited random topics across multiple categories to challenge yourself and expand your
                  speaking range.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Category Filters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on specific areas like tech, business, or interview questions to target your practice sessions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Build Confidence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regular practice with diverse topics helps you think on your feet and speak with confidence in any
                  situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold">1000+</div>
                <div className="text-lg text-muted-foreground">Topics Available</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold">7</div>
                <div className="text-lg text-muted-foreground">Categories</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold">∞</div>
                <div className="text-lg text-muted-foreground">Practice Sessions</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="about" className="container mx-auto px-4 py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to improve your speaking skills?</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Start practicing today and watch your confidence grow with every session.
            </p>
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link href="/practice">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SpeakEasy. Practice makes perfect.</p>
        </div>
      </footer>
    </div>
  )
}
