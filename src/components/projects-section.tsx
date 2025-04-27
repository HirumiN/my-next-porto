"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { PROJECTS } from "../../lib/constans"
import ScrollReveal from "./ui/scroll-reveal"

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = PROJECTS.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section id="projects" className="pb-8 border-t border-border pt-6">
      <div className="text-code-comment mb-4 text-center text-xl">
        {`// PROJECTS`}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project, index) => (
          <ScrollReveal key={index}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "text-muted-foreground cursor-not-allowed"
                : "text-primary hover:bg-secondary transition-colors duration-300"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`h-8 w-8 rounded-md flex items-center justify-center transition-colors duration-300 ${
                  currentPage === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-muted-foreground cursor-not-allowed"
                : "text-primary hover:bg-secondary transition-colors duration-300"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string | null
  demoUrl: string | null
  period: string
  image: string
}

function ProjectCard({ title, description, technologies, githubUrl, demoUrl, period, image }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-glow hover:translate-y-[-4px]">
      <div className="relative h-48 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-code-function font-semibold">{title}</h3>
          <div className="flex items-center text-code-string text-sm">
            <Calendar className="h-3 w-3 mr-1 text-primary" />
            <span>{period}</span>
          </div>
        </div>

        <p className="text-foreground text-sm mb-4">{description}</p>

        <div className="mb-4">
          <div className="text-code-comment text-xs mb-2">{`// Technologies`}</div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-primary transition-colors duration-300 hover:bg-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(githubUrl || demoUrl) && (
          <div className="flex gap-4 mt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                className="flex items-center text-primary hover:text-primary/80 text-sm transition-all duration-300 hover:translate-x-1"
              >
                <Github className="h-4 w-4 mr-1" />
                <span>Code</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                className="flex items-center text-primary hover:text-primary/80 text-sm transition-all duration-300 hover:translate-x-1"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
