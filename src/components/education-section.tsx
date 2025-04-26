import { Calendar } from "lucide-react"
import { EDUCATION } from "../../lib/constans"
export default function EducationSection() {
    return (
        <section id="education" className="pb-8 border-t border-border pt-6">
            <div className="text-code-comment mb-4 text-center text-xl">
                {`// EDUCATION`}
            </div>
            <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:shadow-glow"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-3">
                            <h3 className="text-code-function font-semibold">{edu.degree}</h3>
                            <div className="flex items-center text-code-string">
                                <Calendar className="h-4 w-4 mr-1 text-primary" />
                                <span>{edu.period}</span>
                            </div>
                        </div>
                        <div className="text-code-keyword mb-2">{edu.institution}</div>
                        <p className="text-foreground mb-4">{edu.description}</p>
                        <div className="text-code-comment">
                            <span className="text-code-operator">const</span>{" "}
                            <span className="text-code-variable">{edu.courses ? "courses" : "projects"}</span> = [
                            {(edu.courses )?.map((item, i) => (
                                <span key={i}>
                                    <span className="text-code-string">&quot;{item}&quot;</span>
                                    {i < (edu.courses  || []).length - 1 ? ", " : ""}
                                </span>
                            ))}
                            ];
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
