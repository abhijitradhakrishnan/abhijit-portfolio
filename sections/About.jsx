"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/Theme/ThemeContext";
import {
  FaCode,
  FaGraduationCap,
  FaGithub,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Foundation",
      description:
        "Bachelor of Computer Applications (BCA), building strong fundamentals in data structures, algorithms, and core computer science concepts.",
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Development Journey",
      description:
        "Progressed from HTML/CSS and JavaScript to modern React development, and later expanded into full-stack MERN applications.",
    },
    {
      icon: <FaArrowRight className="text-2xl" />,
      title: "Real-World Projects",
      description:
        "Built and deployed production-ready projects including hotel booking systems, e-commerce platforms, and responsive web apps.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Continuous Growth",
      description:
        "Actively learning advanced backend concepts, scalable architectures, and improving problem-solving through DSA practice.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Vercel"],
    },
  ];

  const highlights = [
    {
        icon: "📘",
        title: "Project-Based Learning",
        desc: "Learning full-stack development through hands-on projects",
    },
    {
        icon: "🧠",
        title: "DSA Fundamentals",
        desc: "Building strong foundations in data structures and algorithms",
    },
    {
        icon: "⚙️",
        title: "MERN Stack Exposure",
        desc: "Experience with React, Node.js, Express, and MongoDB basics",
    },
    {
        icon: "🌱",
        title: "Learning & Growth",
        desc: "Exploring backend concepts, APIs, and deployment workflows",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor}`}>
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            A passionate full-stack developer focused on learning, building, and
            growing through real-world projects
          </p>
        </div>

        {/* Intro Card */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Welcome to My Journey
          </h2>
          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I'm{" "}
            <span className="font-semibold text-blue-500">
              Abhijit Peringadan
            </span>
            , a MERN Stack Developer passionate about building scalable,
            user-focused web applications. My journey started with strong
            fundamentals in programming and data structures, which shaped my
            approach to problem-solving.
          </p>
          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            Over time, I transitioned from fundamentals to full-stack
            development, creating responsive frontends and robust backend
            systems. I continuously strive to write clean, maintainable code and
            learn emerging technologies.
          </p>
        </div>

        {/* Journey */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            My Development{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Path
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${headingColor}`}>
                  {item.title}
                </h3>
                <p className={`${textPrimary} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((group, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/60 text-blue-300 border border-blue-700/50 hover:bg-blue-900"
                          : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
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

        {/* ✅ Highlights & Achievements (ADDED) */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Highlights &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl font-bold text-blue-500 min-w-fit">{item.icon}</div>
                <div>
                  <h3 className={`font-bold ${headingColor} mb-1`}>{item.title}</h3>
                  <p className={textPrimary}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Interested in collaborating or exploring my work?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </Link>

            <a
              href="https://github.com/abhijitradhakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              GitHub Profile <FaGithub className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
