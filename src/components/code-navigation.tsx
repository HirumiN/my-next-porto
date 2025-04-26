"use client"

import { useState, useEffect } from "react"
import { FileCode, User, Briefcase, GraduationCap, Code, Layers, Menu, X } from "lucide-react"

export default function CodeNavigation() {
  const [activeSection, setActiveSection] = useState("profile")
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const sections = [
    { id: "profile", name: "Profile.jsx", icon: <User className="h-4 w-4" /> },
    { id: "skills", name: "Skills.jsx", icon: <Code className="h-4 w-4" /> },
    { id: "education", name: "Education.jsx", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "experience", name: "Experience.jsx", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", name: "Projects.jsx", icon: <Layers className="h-4 w-4" /> },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-30 bg-card p-2 rounded-r-md shadow-md border-r border-t border-b border-border hover:cursor-pointer"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
      </button>

      {/* Navigation sidebar */}
      <div
        className={`fixed left-0 top-0 h-full z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isMobile ? "w-64" : "w-56"}`}
      >
        <div className="h-full bg-card rounded-r-md border-r border-border shadow-xl p-3 flex flex-col">
          <div className="text-sm text-primary mb-4 px-2 py-1 border-b border-border flex items-center">
            <FileCode className="h-4 w-4 inline mr-2" />
            <span className="font-semibold">EXPLORER</span>
          </div>

          <ul className="flex-1 overflow-y-auto">
            {sections.map((section) => (
              <li key={section.id} className="mb-1">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-secondary hover:text-primary hover:cursor-pointer"
                  }`}
                >
                  {section.icon}
                  {section.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2 border-t border-border text-xs text-muted-foreground px-2">
            <p>© 2025 Hirumi</p>
          </div>
        </div>
      </div>
    </>
  )
}
