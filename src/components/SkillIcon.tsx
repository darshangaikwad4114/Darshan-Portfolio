import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Code2 } from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

// Icon mapping - single source of truth
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Programming Languages
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,

  // Frontend Frameworks
  React: SiReact,
  TailwindCSS: SiTailwindcss,

  // Backend & Databases
  "Node.js": SiNodedotjs,
  MySQL: SiMysql,
  MongoDB: SiMongodb,

  // Dev Tools
  Git: SiGit,
  GitHub: SiGithub,
};

export const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  className = "w-4 h-4",
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback to generic icon
    return <Code2 className={className} />;
  }

  return <IconComponent className={className} />;
};
