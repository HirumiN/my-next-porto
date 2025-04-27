import { SKILLS } from "../../lib/constans";
import ScrollReveal from "./ui/scroll-reveal";
export default function SkillsSection() {
  return (
    <section id="skills" className="pb-8 border-t border-border pt-6">
      <div className="text-code-comment mb-4 text-center text-xl">
        {`// TECHNICAL SKILLS`}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollReveal>
          <div className="h-full">
            <SkillCategory title="Frontend" skills={SKILLS.frontend} />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="h-full">
            <SkillCategory title="Backend" skills={SKILLS.backend} />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="h-full">
            <SkillCategory title="Tools & Others" skills={SKILLS.tools} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface Skill {
  name: string
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border shadow-sm hover:shadow-glow transition-shadow duration-300 h-full">
      <h3 className="text-code-keyword mb-3 font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex px-3 py-1 rounded-full text-sm bg-secondary text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-default">
      {name}
    </span>
  )
}
