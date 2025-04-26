import { Calendar, ExternalLink } from "lucide-react"
import { EXPERIENCE } from "../../lib/constans"
export default function ExperienceSection() {
  return (
    <section id="experience" className="pb-8 border-t border-border pt-6">
      <div className="text-code-comment mb-4 text-center ">
        {`// EXPERIENCE`}
      </div>

      <div className="space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <h3 className="text-code-function font-semibold">{exp.title}</h3>
              <div className="flex items-center text-code-string">
                <Calendar className="h-4 w-4 mr-1 text-primary" />
                <span>{exp.period}</span>
              </div>
            </div>
            <div className="flex items-center text-code-keyword mb-2">
              <span>{exp.company}</span>
              <a
                href={exp.companyUrl}
                className="inline-flex items-center ml-2 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <p className="text-foreground mb-4">{exp.description}</p>
            <div className="text-code-comment">
              <span className="text-code-operator">function</span>{" "}
              <span className="text-code-function">{exp.responsibilities ? "responsibilities" : "achievements"}</span>(){" "}
              {"{"}
              <div className="pl-4">
                <span className="text-code-operator">return</span> [<br />
                {(exp.responsibilities )?.map((item, i) => (
                  <span key={i} className="pl-4 text-code-string">
                    &quot;{item}&quot;{i < (exp.responsibilities || []).length - 1 ? "," : ""}
                    <br />
                  </span>
                ))}
                ];
              </div>
              {"}"}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
