"use client";

import React from 'react';
import { MapPin, Mail, Download, User, Code, Briefcase, GraduationCap, ChevronRight, Sun, Moon } from 'lucide-react';

export default function ProfilePage() {
  const [isDark, setIsDark] = React.useState(false);

  const skills = {
    "Web Development & Programming": ["JavaScript", "React", "Next.js", "Tailwind CSS", "GSAP"],
    "CMS Platforms": ["GoHighLevel", "Kajabi", "Showit", "WordPress", "Framer", "Webflow"],
    "Design Tools": ["Figma", "Adobe Illustrator", "Adobe Photoshop"]
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
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Profile Image */}
            <div>
              <img 
                src="/profile.jpg" 
                alt="Mark Andrei Bance"
                className="w-40 h-40 rounded-2xl object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              {/* Name and Location */}
              <div className="space-y-1">
                <h1 className={`text-3xl lg:text-3xl font-bold transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Mark Andrei Bance
                </h1>
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
                <button className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors duration-300
                      ${isDark ? "bg-gray-800/90 text-white border border-white/30" : "bg-[#1e1e1e] text-white border"}`}>
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Send Email</span>
                </button>
                <button className={`flex items-center gap-2 border px-6 py-3 rounded-xl transition-colors duration-300 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Download CV</span>
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className={`rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border ${
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
                I specialize in building intuitive, user-focused applications and experimenting with algorithms to solve real-world problems. With experience in mobile app development, automation workflows, and middleware integration, I'm passionate about creating solutions that simplify everyday tasks.
              </p>
            </div>

            {/* Skills Section */}
            <div className={`rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border ${
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
                <button className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                }`}>
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
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
                          key={skill}
                          className={`px-3 py-1 text-xs rounded-lg border transition-colors duration-200 ${
                            isDark 
                              ? 'border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' 
                              : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience Section */}
            <div className={`rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border ${
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
            <div className={`rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border ${
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
      </div>
    </div>
  );
}