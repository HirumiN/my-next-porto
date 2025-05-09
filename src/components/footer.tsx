"use client"

import { useState, useEffect, useCallback } from "react"
import { Terminal } from "lucide-react"

const JOKES_AND_QUOTES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "The best thing about a boolean is that even if you are wrong, you are only off by a bit.",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
  "A programmer had a problem. He decided to use Java. Now he has a ProblemFactory.",
  "Documentation is like code comments, but someone told you that you'd actually have to do it.",
  "The code that you write makes you a programmer. The code you delete makes you a good one.",
  "It's not a bug – it's an undocumented feature.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "First, solve the problem. Then, write the code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Experience is the name everyone gives to their mistakes.",
  "Programming is like sex: One mistake and you have to support it for the rest of your life.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "The best error message is the one that never shows up.",
]

const MOBILE_QUOTES = [
  "403",
  "Oops",
  "Forbidden",
  "Error",
]

export default function Footer() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [jokeIndex, setJokeIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(50)
  const [isMobile, setIsMobile] = useState(false)

  const quotesArray = isMobile ? MOBILE_QUOTES : JOKES_AND_QUOTES
  const currentJoke = quotesArray[jokeIndex]

  const typeText = useCallback(() => {
    if (isDeleting) {
      setText((prev) => prev.substring(0, prev.length - 1))
      setTypingSpeed(30)
    } else {
      setText(currentJoke.substring(0, text.length + 1))
      setTypingSpeed(50)
    }

    if (!isDeleting && text === currentJoke) {
      setTimeout(() => setIsDeleting(true), 1500)
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      if (isMobile) {
        // Kalau mobile, random next
        const randomIndex = Math.floor(Math.random() * MOBILE_QUOTES.length)
        setJokeIndex(randomIndex)
      } else {
        // Kalau desktop, lanjut next normal
        setJokeIndex((prev) => (prev + 1) % JOKES_AND_QUOTES.length)
      }
    }
  }, [text, isDeleting, currentJoke, isMobile])

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768)
      }
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(typeText, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, typeText, typingSpeed])

  return (
    <footer className="mt-16 py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-4">
            <Terminal className="h-5 w-5 text-primary mr-2" />
            <span className="text-code-function font-semibold">console.log(</span>
            <span className="text-code-string">&quot;{text}&quot;</span>
            <span className="text-code-function">);</span>
            <span className="animate-blink ml-1 h-4 w-2 bg-primary inline-block"></span>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            <p>© {new Date().getFullYear()} Hilmi Nurullah. All rights reserved.</p>
            <p className="mt-1">Built with Next.js and Tailwind CSS</p>
            <p className="mt-2 text-xs opacity-50">
              <span className="text-primary">Hint:</span> Press{" "}
              <kbd className="px-1 py-0.5 bg-secondary rounded text-xs">`</kbd> to open the developer console
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
