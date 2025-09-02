"use client";

import { Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext"; // Import context

const projects = [
  {
    title: "IloCommute",
    description:
      "A mobile app built with React Native that helps commuters in Iloilo City find the best jeepney routes using Dijkstra’s algorithm.",
    tags: ["React Native", "Expo", "Node.js", "MongoDB"],
    link: "https://github.com/mrkndrei/ilocommute",
    thumbnail: "/thumbnails/ilocommute.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my experience as a UI/UX designer and frontend developer, built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://mrkndrei.vercel.app",
    thumbnail: "/thumbnails/portfolio.jpg",
  },
  {
    title: "AI Flashcard Generator",
    description:
      "A tool that generates study flashcards from notes and PDFs using AI integration with n8n and OpenRouter.",
    tags: ["AI", "n8n", "OpenRouter"],
    link: "https://github.com/mrkndrei/ai-flashcards",
    thumbnail: "/thumbnails/ai-flashcard.jpg",
  },
  {
    title: "Tour Package Dashboard",
    description:
      "Merchant-side dashboard for managing tour packages, availability, and bookings with modern UI/UX design principles.",
    tags: ["React", "Tailwind", "Figma"],
    link: "https://github.com/mrkndrei/tour-dashboard",
    thumbnail: "/thumbnails/placeholder.jpg",
  },
];

function ProjectThumbnail({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-48">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default function ProjectsPage() {
  const { isDark } = useTheme(); // Get shared theme state

  return (
    <div className={`min-h-screen pt-10 pb-4 transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
    <div
      className={`max-w-5xl mx-auto px-6 py-12 animate-fadeup transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
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
      <div className="flex items-center gap-3 mb-8">
        <Briefcase
          className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
        />
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <a
            key={i}
            // href={proj.link}
            // target="_blank"
            // rel="noopener noreferrer"
            className={`rounded-xl border transition hover:scale-[1.02] overflow-hidden ${
              isDark
                ? "bg-gray-800/80 border-gray-700 hover:border-blue-500"
                : "bg-white border-gray-200 hover:border-blue-600"
            }`}
          >
            {/* Thumbnail */}
            <ProjectThumbnail src={proj.thumbnail} alt={proj.title} />

            {/* Content */}
            <div className="p-5">
              <h3
                className={`font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {proj.title}
              </h3>
              <p
                className={`mb-3 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs rounded-md ${
                      isDark
                        ? "bg-blue-900/40 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer
        className={`mt-20 pt-6 border-t text-center transition-colors duration-300 ${
          isDark
            ? "border-gray-700 text-gray-500"
            : "border-gray-200 text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} Mark Andrei Bance. All rights reserved.
      </footer>
    </div>
    </div>
  );
}
