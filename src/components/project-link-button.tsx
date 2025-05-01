import { ExternalLink, Github } from "lucide-react";
import React from "react";

type ProjectLinkButtonProps = {
  type: "github" | "demo";
  url: string;
};

const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({ type, url }) => {
  if (!url) return null;

  const isGithub = type === "github";
  const label = isGithub ? "Code" : "Live Demo";
  const Icon = isGithub ? Github : ExternalLink;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center text-primary text-sm transition-all duration-300 hover:translate-x-1"
    >
      <Icon className="h-4 w-4 mr-1 group-hover:text-primary/80 transition-colors" />
      <span className="group-hover:text-primary/80">{label}</span>
    </a>
  );
};

export default ProjectLinkButton;
