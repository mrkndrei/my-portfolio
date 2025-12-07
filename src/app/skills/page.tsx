"use client";

import { 
  ArrowLeft, 
  Code, 
  Globe, 
  Layout, 
  Palette, 
  PenTool, 
  Film, 
  Layers, 
  Users,
  Award
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

// Skills mapped with icons
// Using Simple Icons for brands, Lucide for concepts
const skills = {
  "Web Development & Programming": [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock" },
    { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "RESTful APIs", icon: Globe },
  ],
  "CMS & No-code Platforms": [
    { name: "GoHighLevel", icon: "https://cdn.brandfetch.io/idK-hvK7Lv/w/200/h/200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1692001846848" },
    { name: "Kajabi", icon: "https://cdn.brandfetch.io/idDDho9RcJ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1732695044236" },
    { name: "Showit", icon: "https://cdn.brandfetch.io/idl_2Bpl9t/w/32/h/32/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1759271339665" },
    { name: "Shopify", icon: "https://cdn.brandfetch.io/idAgPm7IvG/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1720758863540"},
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
    { name: "Framer", icon: "https://cdn.simpleicons.org/framer" },
    { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
    { name: "ConvertKit", icon: "https://cdn.brandfetch.io/idrz4d2Ld_/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1736494310937" },
    { name: "Mailchimp", icon: "https://cdn.simpleicons.org/mailchimp" },
  ],
  "Design Tools": [
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Adobe Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
    { name: "Adobe Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
    { name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
    { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
  ],
  "Collaboration & Version Control Tools": [
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup" },
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
    { name: "Asana", icon: "https://cdn.simpleicons.org/asana" },
    { name: "Google Workspace", icon: "https://cdn.simpleicons.org/google" },
  ],
  "Creative Skills": [
    { name: "UI/UX Design", icon: Palette },
    { name: "Wireframing", icon: Layout },
    { name: "Prototyping", icon: Layers },
    { name: "Branding", icon: Award },
    { name: "Logo Design", icon: PenTool },
    { name: "Motion Graphics", icon: Film },
  ],
};

export default function SkillsPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-10 pb-4 transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6 py-12 animate-fadeup">
        
        {/* Back button */}
        <Link
          href="/"
          className={`flex items-center gap-2 mb-8 text-sm font-medium ${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Code
              className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            />
            <h1
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Skills
            </h1>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], i) => {
            return (
              <div key={i}>
                <h2
                  className={`text-sm font-semibold mb-3 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill.name}
                      className={`flex items-center gap-2 px-3 py-2 text-xs rounded-md border transition-colors ${
                        isDark ? "border-gray-700 bg-gray-800/50 text-gray-200 hover:bg-gray-800" : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {typeof skill.icon === 'string' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} icon`}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <skill.icon className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                      )}
                      
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
