"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Download, User, Code, Briefcase, GraduationCap, ChevronRight, Sun, Moon, Linkedin, Github, Facebook } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Types
type Project = {
  title: string;
  description: string;
  link: string;
  type: "Personal" | "Client";
};

const projects: Project[] = [
  {
    title: "Jenesia Red",
    description: "Client portfolio landing page built in GoHighLevel.",
    link: "https://jenesiared.com/",
    type: "Client",
  },
  {
    title: "HexLab",
    description: "A comprehensive color tool that converts Hex to RGB, HSL, CMYK, and generates color shades and harmonies.",
    link: "https://hexlab-tool.vercel.app/",
    type: "Personal",
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

export default function ProfilePage() {
  const { isDark, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.classList.add('animate-fadeup');
        ref.style.animationDelay = `${i * 0.12}s`;
      }
    });
  }, []);

  function ProfileImage({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="relative w-48 h-48">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}

      <Image
        src="/profile.jpg"
        alt="Project"
        fill
        className="object-cover rounded-lg"
        onLoad={() => setIsLoading(false)} // only hides skeleton when image finishes loading
      />
    </div>
  );
}

  const setSectionRef = (idx: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[idx] = el;
  };

  type Skill = {
    name: string;
    icon: string | React.ElementType;
  };

  const skills: Record<string, Skill[]> = {
    "Core Tech Stack": [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    ],
    "CMS Platforms": [
      { name: "GoHighLevel", icon: "https://cdn.brandfetch.io/idK-hvK7Lv/w/200/h/200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1692001846848" },
      { name: "Kajabi", icon: "https://cdn.brandfetch.io/idDDho9RcJ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1732695044236" },
      { name: "Showit", icon: "https://cdn.brandfetch.io/idl_2Bpl9t/w/32/h/32/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1759271339665" },
      { name: "Shopify", icon: "https://cdn.brandfetch.io/idAgPm7IvG/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1720758863540"},
      { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
      { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow" },
    ],
  };

  const experience = [
    {
      role: "Product Designer",
      company: "VIP Scale",
      period: "April 2025 - Present"
    },
    {
      role: "Intern",
      company: "Tanom IT Solutions", 
      period: "Nov 2024 - April 2025"
    }
  ];

  const education = {
    degree: "BS Information Technology",
    school: "Western Institute of Technology",
    period: "June 2021 - April 2025"
  };

  return (
    <div className={`min-h-screen pt-10 pb-4 transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div ref={setSectionRef(0)} className="mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            {/* Profile Image */}
            <div>
              <ProfileImage isLoading={isLoading} />
            </div>

            <div className="flex-1 space-y-4">
              {/* Name, Location, and Theme Toggle */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className={`text-3xl lg:text-3xl font-bold transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Mark Andrei Bance
                  </h1>
                  {/* Theme Toggle under name, on the right */}
                  <button
        onClick={toggleTheme}
        className={`ml-2 p-2 rounded-full transition-all duration-300 cursor-pointer w-fit
          ${isDark 
            ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Iloilo, Philippines
                  </span>
                </div>
              </div>

              {/* Role */}
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Frontend Developer & UI/UX Designer
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors duration-300
                    ${isDark 
                    ? "bg-blue-800/20 text-white border border-blue-800/80 hover:bg-blue-800/30" 
                    : "bg-[#1e1e1e] text-white border"}`}
                  href="mailto:markandreidbance@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Send Email</span>
                </a>
                <a
                  href="/mark-andrei-bance-resume.pdf"
                  download
                  className={`flex items-center gap-2 border px-6 py-3 rounded-xl transition-colors duration-300 ${
                    isDark 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* About Section */}
            <div ref={setSectionRef(1)} className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 backdrop-blur-sm border ${
              isDark 
                ? 'bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30' 
                : 'bg-white/80 border-gray-200 shadow-xl shadow-gray-200/30'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <User className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  About
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
I specialize in building intuitive, user-focused applications and experimenting with algorithms to solve real-world problems. With experience in mobile app development, automation workflows, and middleware integration, I'm passionate about creating solutions that simplify everyday tasks. </p>            </div>

            {/* Skills Section */}
            <div ref={setSectionRef(2)} className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 backdrop-blur-sm border ${
              isDark 
                ? 'bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30' 
                : 'bg-white/80 border-gray-200 shadow-xl shadow-gray-200/30'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Code className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Skills
                  </h2>
                </div>
                <Link
                  href="/skills"
                  className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-3">
                    <h3 className={`text-sm font-semibold ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill.name}
                      className={`flex items-center gap-2 px-3 py-2 text-xs rounded-md border transition-colors ${
                        isDark ? "border-gray-700 bg-gray-700/50 text-gray-200 hover:bg-gray-600/50" : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
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
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Experience Section */}
            <div ref={setSectionRef(3)} className={`rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border ${
              isDark 
                ? 'bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30' 
                : 'bg-white/80 border-gray-200 shadow-xl shadow-gray-200/30'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Experience
                </h2>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
                  isDark ? 'bg-gray-600' : 'bg-gray-300'
                }`}></div>
                
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        index === 0 
                          ? isDark 
                            ? 'bg-blue-500 border-blue-500' 
                            : 'bg-blue-600 border-blue-600'
                          : isDark 
                            ? 'bg-gray-800 border-gray-600' 
                            : 'bg-white border-gray-300'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 
                            ? 'bg-white' 
                            : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-1 pb-2">
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {exp.role}
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.company}
                        </p>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div ref={setSectionRef(4)} className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 backdrop-blur-sm border ${
              isDark 
                ? 'bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30' 
                : 'bg-white/80 border-gray-200 shadow-xl shadow-gray-200/30'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h2>
              </div>
              
              <div className="space-y-1">
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {education.degree}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {education.school}
                </p>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {education.period}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {/* Contact Section */}
          <div
            ref={setSectionRef(5)}
            className={`p-6 lg:p-8 rounded-2xl border flex flex-col gap-6 shadow-md transition-all duration-300 order-2 lg:order-1 ${
              isDark
                ? "bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30"
                : "bg-white border-gray-200 shadow-xl shadow-gray-200/30"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
              <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Contact</h2>
            </div>

            {/* Subheader */}
            <div>
              <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-900"}`}>Let's Get Connected!</p>
            </div>

            {/* Email */}
            <a
              href="mailto:markandreidbance@gmail.com"
              className={`w-full px-3 py-2 rounded-md flex flex-col cursor-pointer transition-colors duration-200 ${
                isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Email</span>
              <span className={`text-sm ${isDark ? "text-gray-100" : "text-gray-900"}`}>markandreidbance@gmail.com</span>
            </a>

            {/* Social Links */}
            <div>
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Social Links</span>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://github.com/mrkndrei"
                  target="_blank"
                  className={`flex-1 flex justify-center items-center p-3 rounded-md transition ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Github className={`w-5 h-5 ${isDark ? "text-gray-100" : "text-gray-800"}`} />
                </a>
                <a
                  href="https://linkedin.com/in/mrkndrei"
                  target="_blank"
                  className={`flex-1 flex justify-center items-center p-3 rounded-md transition ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Linkedin className={`w-5 h-5 ${isDark ? "text-gray-100" : "text-gray-800"}`} />
                </a>
                <a
                  href="https://facebook.com/mrkndrei"
                  target="_blank"
                  className={`flex-1 flex justify-center items-center p-3 rounded-md transition ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Facebook className={`w-5 h-5 ${isDark ? "text-gray-100" : "text-gray-800"}`} />
                </a>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div ref={setSectionRef(6)} className="lg:col-span-2 order-1 lg:order-2">
            <div
              className={`rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 backdrop-blur-sm border ${
                isDark
                  ? "bg-gray-800/80 border-gray-700 shadow-xl shadow-gray-900/30"
                  : "bg-white/80 border-gray-200 shadow-xl shadow-gray-200/30"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Briefcase
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <h2
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Projects
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  View More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Project Cards */}
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project, i) => (
                  <div
                  key={i}
                  className={`relative block rounded-xl border transition overflow-hidden h-full flex flex-col ${
                    isDark
                      ? "bg-gray-700/50 border-gray-600 shadow-gray-900/10"
                      : "bg-gray-50 border-gray-200 shadow-gray-200/10"
                  }`}
                >
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
                      className="font-mono text-xs bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-sm block w-fit mt-auto"
                      style={{ color: "#757575"}}
                    >
                      {getDomain(project.link)}
                    </a>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div ref={setSectionRef(7)}>
          <footer
            className={`mt-20 pt-6 border-t text-center transition-colors duration-300
              ${isDark
                ? "border-gray-700 text-gray-500"
                : "border-gray-200 text-gray-400"
              }`}
          >
            <span>
              © {new Date().getFullYear()} Mark Andrei Bance. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
