"use client";

import { ArrowLeft, Code, Filter } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    { name: "React", level: "Medium" },
    { name: "Next.js", level: "Medium" },
    { name: "Tailwind CSS", level: "Medium" },
    { name: "GSAP", level: "High" },
    { name: "React Native", level: "Low" },
    { name: "Node.js", level: "Medium" },
    { name: "Express.js", level: "Low" },
    { name: "MongoDB", level: "Low" },
    { name: "RESTful APIs", level: "High" },
  ],
  "CMS & No-code Platforms": [
    { name: "GoHighLevel", level: "High" },
    { name: "Kajabi", level: "High" },
    { name: "Showit", level: "Medium" },
    { name: "WordPress", level: "Low" },
    { name: "Framer", level: "Low" },
    { name: "Webflow", level: "Low" },
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
    { name: "Git", level: "Medium" },
    { name: "GitHub", level: "Medium" },
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

const badgeColors = (level: string, isDark: boolean) => {
  switch (level) {
    case "High":
      return isDark
        ? "bg-green-900/40 text-green-300"
        : "bg-green-100 text-green-700";
    case "Medium":
      return isDark
        ? "bg-yellow-900/40 text-yellow-300"
        : "bg-yellow-100 text-yellow-700";
    case "Low":
      return isDark
        ? "bg-red-900/40 text-red-300"
        : "bg-red-100 text-red-700";
    default:
      return isDark
        ? "bg-gray-800 text-gray-300"
        : "bg-gray-100 text-gray-700";
  }
};

export default function SkillsPage() {
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  return (
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
                className="flex items-center gap-1"
              >
                {filter} Exposure
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Level</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilter("All")}>
                All Skills
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("High")}>
                High Exposure
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("Medium")}>
                Medium Exposure
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("Low")}>
                Low Exposure
              </DropdownMenuItem>
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
                {filteredSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-xs rounded-md ${badgeColors(
                      skill.level,
                      isDark
                    )}`}
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
  );
}
