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
  type: "Personal" | "Client";
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
    title: "IloCommute",
    description: "A mobile app built with React Native that helps commuters in Iloilo City find the best jeepney routes.",
    link: "https://github.com/mrkndrei/ilocommute",
    thumbnail: "/thumbnails/ilocommute.jpg",
    type: "Personal",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my experience as a UI/UX designer and frontend developer.",
    link: "https://mrkndrei.vercel.app",
    thumbnail: "/thumbnails/portfolio.jpg",
    type: "Personal",
  },
  {
    title: "AI Flashcard Generator",
    description: "A tool that generates study flashcards from notes and PDFs using AI integration with n8n and OpenRouter.",
    link: "https://github.com/mrkndrei/ai-flashcards",
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
    <div
      className={`relative block rounded-xl border transition overflow-hidden h-full flex flex-col ${
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
          : isDark
            ? "bg-purple-900/80 text-purple-200 border-purple-700/50 backdrop-blur-md"
            : "bg-purple-100 text-purple-700 border-purple-200/50"
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
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="font-mono text-xs bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-sm mb-4 block w-fit"
          style={{ color: "#757575"}}
        >
          {getDomain(project.link)}
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { isDark } = useTheme();

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
        
        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {allProjects.map((proj, i) => (
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
