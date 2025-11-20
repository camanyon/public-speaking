"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, RefreshCw, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function PracticePage() {
  const [topic, setTopic] = useState<{ text: string; category: string } | null>(null)
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const fetchTopic = async () => {
    setIsLoading(true)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://public-speaking-api-production.up.railway.app"
      const url = category ? `${apiUrl}/api/topics/random?category=${category}` : `${apiUrl}/api/topics/random`
      const response = await fetch(url)
      const data = await response.json()
      setTopic(data)
    } catch (error) {
      console.error("Error fetching topic:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              <h1 className="text-xl font-semibold text-balance">SpeakEasy</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/practice" className="text-foreground font-medium">
                Practice
              </Link>
              <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Practice Session</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Generate random topics instantly and practice your impromptu speaking skills.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <label htmlFor="category" className="text-sm font-medium text-muted-foreground">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 rounded-xl border border-input bg-background text-foreground font-medium focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              >
                <option value="">All Categories</option>
                <option value="funny">Funny</option>
                <option value="tech">Tech</option>
                <option value="interview">Interview</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
                <option value="serious">Serious</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>

            <Button
              onClick={fetchTopic}
              disabled={isLoading}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 px-8 rounded-xl transition-all shadow-md hover:shadow-lg h-auto text-base group"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Generate Random Topic
                </>
              )}
            </Button>

            {topic && (
              <div className="bg-secondary/50 rounded-2xl p-8 border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {topic.category}
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed text-balance">
                  {topic.text}
                </p>
              </div>
            )}

            {!topic && (
              <div className="bg-muted/30 rounded-2xl p-12 border border-dashed border-border text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">Click the button above to generate your first topic</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
