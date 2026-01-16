"use client";

import { Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

// Types
type Project = {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  type: "Personal" | "Client" | "Design";
};

// Data
const allProjects: Project[] = [
  {
    title: "HexLab",
    description: "A comprehensive color tool that converts Hex to RGB, HSL, CMYK, and generates color shades and harmonies.",
    link: "https://hexlab-tool.vercel.app/",
    thumbnail: "/thumbnails/hexlab.png",
    type: "Personal",
  },
  {
    title: "AI Flashcard Generator",
    description: "A tool that generates study flashcards from notes and PDFs using AI integration with n8n and OpenRouter.",
    link: "https://formyann-studyhub.lovable.app/",
    thumbnail: "/thumbnails/ai-flashcard.jpg",
    type: "Personal",
  },
  {
    title: "Jenesia Red",
    description: "Client portfolio landing page built in GoHighLevel.",
    link: "https://jenesiared.com/",
    thumbnail: "/thumbnails/jenesiared.png",
    type: "Client",
  },
  {
    title: "Snaply",
    description: "Website for Snaply built in GoHighLevel.",
    link: "https://heysnaply.com/",
    thumbnail: "/thumbnails/snaply.png",
    type: "Client",
  },
  {
    title: "VIP Scale",
    description: "Corporate website for an agency built in GoHighLevel.",
    link: "https://vipscaleph.com/",
    thumbnail: "/thumbnails/vipscaleph.png",
    type: "Client",
  },
  {
    title: "Xfnite",
    description: "Landing page for Xfnite built in GoHighLevel.",
    link: "https://vipscaleph.com/xfnite",
    thumbnail: "/thumbnails/xfnite.png",
    type: "Client",
  },
];

function getDomain(url: string) {
  try {
    const domain = new URL(url).hostname;
    return domain.startsWith("www.") ? domain.slice(4) : domain;
  } catch {
    return url;
  }
}

function ProjectThumbnail({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
      {/* Skeleton loader underneath */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

function ProjectCard({ project, isDark }: { project: Project; isDark: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block rounded-xl border transition overflow-hidden h-full flex flex-col hover:-translate-y-1 hover:shadow-lg ${
        isDark
          ? "bg-gray-800/80 border-gray-700 shadow-gray-900/10"
          : "bg-white border-gray-200 shadow-gray-200/10"
      }`}
    >
      {/* Badge */}
      <div className={`absolute top-3 right-3 z-10 px-2.5 py-1 text-xs font-semibold rounded-full border ${
        project.type === "Personal"
          ? isDark 
            ? "bg-blue-900/80 text-blue-200 border-blue-700/50 backdrop-blur-md" 
            : "bg-gray-100 text-gray-700 border-gray-200/50"
          : project.type === "Client"
            ? isDark
              ? "bg-purple-900/80 text-purple-200 border-purple-700/50 backdrop-blur-md"
              : "bg-purple-100 text-purple-700 border-purple-200/50"
            : isDark // Design type
              ? "bg-teal-900/80 text-teal-200 border-teal-700/50 backdrop-blur-md"
              : "bg-teal-100 text-teal-700 border-teal-200/50"
      }`}>
        {project.type}
      </div>

      {/* Thumbnail */}
      <ProjectThumbnail src={project.thumbnail} alt={project.title} />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className={`font-semibold mb-2 text-lg ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-3 text-sm ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Link Below Description */}
        <span 
          className={`font-mono text-xs hover:underline mb-4 block w-fit ${
            isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-700"
          }`}
        >
          {getDomain(project.link)}
        </span>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<"Development" | "Designs">("Development");

  // Design Projects Data
  const designProjects: Project[] = [
    {
      title: "AI-Powered Content Calendar Generator",
      description: "Designed in Figma using modern principles such as white spaces, use of gradients, and a clean layout.",
      link: "https://www.figma.com/proto/3BuEz8CDioEHbuCPKC2Yll/Landing-Pages?node-id=21-80&scaling=scale-down-width&content-scaling=fixed",
      thumbnail: "/thumbnails/Hero.png",
      type: "Design",
    },
    {
      title: "Work Related Designs",
      description: "A small collection of designs during my work as a web designer for VIP Scale.",
      link: "https://www.figma.com/design/xprwHgSqntJ7vT55G8ElfD/Untitled?node-id=0-1",
      thumbnail: "/thumbnails/collection.png",
      type: "Design",
    },
    {
      title: "20 Step Funnel",
      description: "Funnel page designed for a course in marketing.",
      link: "https://www.figma.com/proto/wAeu3QTjXnqAwEqnsSTpRg/20-Step-Funnel?node-id=3-141&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      thumbnail: "/thumbnails/20step.png",
      type: "Design",
    },
    {
      title: "VIP Scale Agency",
      description: "Designed VIP Scale company website in Figma with an interactive prototype",
      link: "https://www.figma.com/proto/i3NxKf2qX1hd8DegUTV1Uf/VIP-Scale-Agency?node-id=1-2&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      thumbnail: "/thumbnails/Hero Section.png",
      type: "Design",
    },
  ];

  const displayedProjects = activeTab === "Development" ? allProjects : designProjects;

  return (
    <div className={`min-h-screen pt-10 pb-12 transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div
        className="max-w-5xl mx-auto px-6 py-12 animate-fadeup"
      >
        {/* Back button */}
        <Link
          href="/"
          className={`flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        {/* Sliding Tabs */}
        <div className="flex justify-center mb-10">
          <div className={`relative flex p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <div
              className={`absolute inset-y-1 rounded-lg shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isDark ? 'bg-gray-700' : 'bg-white'
              }`}
              style={{
                width: 'calc(50% - 4px)',
                left: '4px',
                transform: activeTab === 'Development' ? 'translateX(0)' : 'translateX(100%)',
              }}
            />
            {(['Development', 'Designs'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 w-36 text-center rounded-lg ${
                   activeTab === tab 
                     ? (isDark ? 'text-white' : 'text-gray-900')
                     : (isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800')
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {displayedProjects.map((proj, i) => (
            <ProjectCard key={i} project={proj} isDark={isDark} />
          ))}
        </div>

        {/* Footer */}
        <footer
          className={`mt-20 pt-8 border-t text-center transition-colors duration-300 ${
            isDark
              ? "border-gray-800 text-gray-500"
              : "border-gray-200 text-gray-400"
          }`}
        >
          <p>© {new Date().getFullYear()} Mark Andrei Bance. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
