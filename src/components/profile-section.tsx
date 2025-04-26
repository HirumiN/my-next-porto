import type React from "react"
import Image from "next/image"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"
import { PROFILE } from "../../lib/constans"
export default function ProfileSection() {
  return (
    <section id="profile" className="pb-8">
      <div className="text-code-comment mb-4 text-center text-xl">
        {`// PROFILE`}
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-primary/50 group transition-transform duration-300 hover:scale-105 shadow-glow">
          <Image
            src="/img/profile.jpeg"
            alt="Profile picture"
            fill
            sizes="224px"
            priority
            className="object-cover object-[25%_80%] scale-[1.1] transition-transform duration-500 group-hover:scale-110"
          />

        </div>



        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h1 className="text-3xl font-bold text-code-function mb-2">
            <span className="text-code-keyword">const</span> developer <span className="text-white">=</span>{" "}
            <span className="text-code-string">&quot;{PROFILE.name}&quot;</span>;
          </h1>

          <p className="my-4 text-foreground">{PROFILE.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <ContactItem icon={<Mail className="h-4 w-4" />} text={PROFILE.contact.email} href={`mailto:${PROFILE.contact.email}`} />
            <ContactItem icon={<Github className="h-4 w-4" />} text={PROFILE.contact.github} href="https://github.com/HirumiN" />
            <ContactItem icon={<Linkedin className="h-4 w-4" />} text={PROFILE.contact.linkedin} href="https://www.linkedin.com/in/hilmin/" />
            <ContactItem icon={<Instagram className="h-4 w-4" />} text={PROFILE.contact.instagram} href="#https://www.instagram.com/hirumi_nur/" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ReactNode
  text: string
  href?: string
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const content = (
    <>
      <span className="text-primary">{icon}</span>
      <span className="text-code-string">{text}</span>
    </>
  )

  return (
    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 bg-secondary/50 rounded-md px-3 py-2">
      {href ? (
        <a href={href} className="flex items-center gap-2 w-full hover:text-primary/80 transition-colors duration-300">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}
