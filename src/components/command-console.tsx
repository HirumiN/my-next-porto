"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "lucide-react"
import { SKILLS, PROJECTS, PROFILE } from "../../lib/constans"

export default function CommandConsole() {
  const [isOpen, setIsOpen] = useState(false)
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to the developer console!",
    "Type 'help' to see available commands.",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  // Commands
  const commands = {
    help: () => {
      return [
        "Available commands:",
        "- help: Show this help message",
        "- clear: Clear the console",
        "- about: About the developer",
        "- skills: List skills",
        "- projects: List projects",
        "- contact: Contact information",
        "- exit: Close the console",
      ]
    },
    clear: () => {
      setOutput([])
      return []
    },
    about: () => {
      return [PROFILE.bio]
    },
    skills: () => {
      const skillsList = []

      // Frontend skills as comma-separated list
      const frontendSkills = SKILLS.frontend.map((skill) => skill.name).join(", ")
      skillsList.push("Frontend: " + frontendSkills)

      // Backend skills as comma-separated list
      const backendSkills = SKILLS.backend.map((skill) => skill.name).join(", ")
      skillsList.push("Backend: " + backendSkills)

      // Tools & Others skills as comma-separated list
      const toolsSkills = SKILLS.tools.map((skill) => skill.name).join(", ")
      skillsList.push("Tools & Others: " + toolsSkills)

      return skillsList
    },
    projects: () => {
      const projectsList = []

      PROJECTS.slice(0, 5).forEach((project) => {
        projectsList.push(`${project.title}: ${project.description.substring(0, 60)}...`)
      })

      if (PROJECTS.length > 5) {
        projectsList.push(`\nAnd ${PROJECTS.length - 5} more projects. View all in the Projects section.`)
      }

      return projectsList
    },
    contact: () => {
      return [
        `Email: ${PROFILE.contact.email}`,
        `Phone: ${PROFILE.contact.phone}`,
        `GitHub: ${PROFILE.contact.github}`,
        `LinkedIn: ${PROFILE.contact.linkedin}`,
      ]
    },
    exit: () => {
      setIsOpen(false)
      return []
    },
  }

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (!trimmedCmd) return

    setOutput((prev) => [...prev, `> ${cmd}`])

    if (trimmedCmd in commands) {
      const result = commands[trimmedCmd as keyof typeof commands]()
      setOutput((prev) => [...prev, ...result])
    } else {
      setOutput((prev) => [...prev, `Command not found: ${trimmedCmd}`])
    }

    setCommand("")

    // Scroll to bottom
    setTimeout(() => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
    }, 0)
  }

  // Handle key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle console with backtick key
      if (e.key === "`" && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault()
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Focus input when console opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-96 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between bg-secondary p-2 border-b border-border">
          <div className="flex items-center">
            <Terminal className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-semibold">Developer Console</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary"
            aria-label="Close console"
          >
            ×
          </button>
        </div>

        <div ref={outputRef} className="h-80 overflow-y-auto p-4 font-mono text-sm">
          {output.map((line, i) => (
            <div key={i} className={`mb-1 ${line.startsWith(">") ? "text-primary" : ""}`}>
              {line}
            </div>
          ))}

          <div className="flex items-center mt-2">
            <span className="text-primary mr-2">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  executeCommand(command)
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-foreground"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  )
}
