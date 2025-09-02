"use client";

import { ArrowLeft, Code, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Skills mapped with exposure level
const skills = {
  "Web Development & Programming": [
    { name: "HTML5", level: "High" },
    { name: "CSS3", level: "High" },
    { name: "JavaScript", level: "High" },
    { name: "React", level: "High" },
    { name: "Next.js", level: "High" },
    { name: "Tailwind CSS", level: "High" },
    { name: "GSAP", level: "High" },
    { name: "React Native", level: "Medium" },
    { name: "Node.js", level: "High" },
    { name: "Express.js", level: "Medium" },
    { name: "MongoDB", level: "Medium" },
    { name: "RESTful APIs", level: "High" },
  ],
  "CMS & No-code Platforms": [
    { name: "GoHighLevel", level: "High" },
    { name: "Kajabi", level: "High" },
    { name: "Showit", level: "Medium" },
    { name: "WordPress", level: "High" },
    { name: "Framer", level: "Medium" },
    { name: "Webflow", level: "Medium" },
    { name: "n8n", level: "High" },
    { name: "Zapier", level: "Medium" },
    { name: "ConvertKit", level: "Medium" },
    { name: "Mailchimp", level: "Low" },
  ],
  "Design Tools": [
    { name: "Figma", level: "High" },
    { name: "Adobe Illustrator", level: "High" },
    { name: "Adobe Photoshop", level: "High" },
    { name: "Adobe XD", level: "Low" },
    { name: "Canva", level: "High" },
  ],
  "Collaboration & Version Control Tools": [
    { name: "Git", level: "High" },
    { name: "GitHub", level: "High" },
    { name: "ClickUp", level: "High" },
    { name: "Slack", level: "High" },
    { name: "Asana", level: "Medium" },
    { name: "Google Workspace", level: "High" },
  ],
  "Creative Skills": [
    { name: "UI/UX Design", level: "High" },
    { name: "Wireframing", level: "High" },
    { name: "Prototyping", level: "High" },
    { name: "Branding", level: "High" },
    { name: "Logo Design", level: "High" },
    { name: "Motion Graphics", level: "Low" },
  ],
};

export default function SkillsPage() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("All");

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

          {/* Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter
              className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 cursor-pointer ${isDark ? "bg-gray-800 hover:bg-gray-700 text-white/80 hover:text-white border-white/20" : "border-gray-300" }`}
                >
                  {filter} Exposure
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={`${isDark 
                  ? "bg-gray-800 border-white/20 text-white/80" 
                  : "border-gray-300 bg-white text-gray-700"}`}
              >
                <DropdownMenuLabel>Filter by Level</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {["All", "High", "Medium", "Low"].map((level) => (
                  <DropdownMenuItem
                    key={level}
                    onClick={() => setFilter(level)}
                    className={`cursor-pointer ${isDark
                      ? "data-[highlighted]:bg-gray-700 data-[highlighted]:text-white" 
                      : "data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"}`}
                  >
                    {level === "All" ? "All Skills" : `${level} Exposure`}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], i) => {
            const filteredSkills =
              filter === "All"
                ? skillList
                : skillList.filter((s) => s.level === filter);

            if (filteredSkills.length === 0) return null;

            // Sort alphabetically by name
            const sortedSkills = [...filteredSkills].sort((a, b) =>
              a.name.localeCompare(b.name)
            );

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
                  {sortedSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 text-xs rounded-md border ${
                        isDark ? "border-gray-700 text-gray-200" : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {skill.name}
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
