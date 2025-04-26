"use client"

import { Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { EXPERIENCE } from "../../lib/constans"
import { useState } from "react"

export default function ExperienceSection() {

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }
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
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center text-left w-full hover:text-primary transition-colors duration-300 focus:outline-none hover:cursor-pointer"
                aria-expanded={expandedItems[index]}
                aria-controls={`exp-content-${index}`}
              >
                <span className="text-code-operator" style={{ marginRight: '0.5rem' }}>function </span>
                <span className="text-code-function">{exp.responsibilities ? "responsibilities" : "achievements"}</span>
                () {"{"}
                {!expandedItems[index] && <span>{"...}"}</span>}
                <span className="ml-auto">
                  {expandedItems[index] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>

              <div
                id={`exp-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${expandedItems[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-4 pt-2">
                  <span className="text-code-operator">return</span> [<br />
                  {(exp.responsibilities || exp.achievements)?.map((item, i) => (
                    <span key={i} className="pl-4 text-code-string">
                      "{item}"{i < (exp.responsibilities || exp.achievements || []).length - 1 ? "," : ""}
                      <br />
                    </span>
                  ))}
                  ];
                </div>
                {expandedItems[index] && <span>{"}"}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
