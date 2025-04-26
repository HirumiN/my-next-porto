import { Terminal } from "lucide-react"
import ProfileSection from "@/components/profile-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CodeNavigation from "@/components/code-navigation"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono">
      {/* Code editor header - fixed at the top */}
      <div className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold">portfolio.jsx</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main content area */}
        <div className="relative mt-4">
          <CodeNavigation />

          <div className="ml-0 md:ml-4 bg-background rounded-lg border border-border p-5 overflow-y-auto">
            <div className="space-y-10">
              <ProfileSection />
              <SkillsSection />
              <EducationSection />
              <ExperienceSection />
              <ProjectsSection />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
