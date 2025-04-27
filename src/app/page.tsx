import { Terminal } from "lucide-react"
import ProfileSection from "@/components/profile-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CodeNavigation from "@/components/code-navigation"
import Footer from "@/components/footer"
import ConstellationBackground from "@/components/ui/constellation-background"
import CommandConsole from "@/components/command-console"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono relative overflow-hidden">
      {/* Background effects - wrapped in a fixed container */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <ConstellationBackground />
      </div>

      {/* Code editor header - fixed at the top */}
      <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold">portfolio.jsx</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main content area */}
        <div className="relative mt-4">
          <CodeNavigation />

          <div className="ml-0 md:ml-4 bg-background/95 backdrop-blur-sm rounded-lg border border-border p-5 overflow-y-auto">
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
      <CommandConsole />
    </main>
  )
}
