"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/Theme/ThemeContext";
import { motion } from "framer-motion";

/* ---------------- animation variants ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 }, // 👈 starts ABOVE
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ---------------- data ---------------- */

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 80, icon: "⚙️" },
      { name: "C++", level: 85, icon: "🔧" },
      { name: "Java", level: 78, icon: "☕" },
      { name: "JavaScript", level: 90, icon: "⚡" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 88, icon: "⚛️" },
      { name: "HTML", level: 92, icon: "🌐" },
      { name: "CSS", level: 85, icon: "🎨" },
      { name: "Tailwind CSS", level: 88, icon: "💨" },
      { name: "MERN Stack", level: 85, icon: "📚" },
      { name: "Next.js", level: 80, icon: "▲" },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "MySQL", level: 82, icon: "🐬" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 88, icon: "📋" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", level: 85, icon: "🏗️" },
      { name: "Algorithms", level: 82, icon: "🧠" },
      { name: "Object-Oriented Programming", level: 80, icon: "🧩" },
      { name: "System Design", level: 72, icon: "📐" },
    ],
  },
];

/* ---------------- SkillBar (unchanged) ---------------- */

const SkillBar = ({ skill, delay, isDark }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span
            className={`font-semibold ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {skill.name}
          </span>
        </div>
        <span
          className={`text-sm font-medium ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {skill.level}%
        </span>
      </div>

      <div
        className={`w-full rounded-full h-2.5 overflow-hidden ${
          isDark ? "bg-blue-900/30" : "bg-blue-200"
        }`}
      >
        <div
          className="h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};

/* ---------------- Page ---------------- */

export default function SkillsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";
  const accentBg = isDark ? "bg-blue-900/30" : "bg-blue-100/50";

  return (
    <div
      className={`${containerBg} min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent [text-fill-color:transparent] mb-4 leading-snug overflow-visible pb-1 pt-4">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className={`text-lg md:text-xl ${textPrimary} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise across different
            domains of software development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            ["15+", "Technologies"],
            ["4", "Core Domains"],
            ["2+", "Years Learning"],
            ["∞", "Curiosity for Tech"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className={`text-center ${cardBg} rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`text-3xl font-bold ${textSecondary}`}>
                {value}
              </div>
              <div className={`text-sm font-medium ${textPrimary}`}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {categories.map((category, idx) => (
            <motion.div key={category.title} variants={fadeUp}>
              <div
                className={`${cardBg} rounded-2xl border-2 p-8 transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${textSecondary}`}>
                  {category.title}
                </h2>

                {category.skills.map((skill, sIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={600 + idx * 150 + sIdx * 100}
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mt-16 rounded-2xl p-8 md:p-12 ${
            isDark
              ? "bg-blue-950/50 border-2 border-blue-900/40"
              : "bg-blue-100/50 border-2 border-blue-200"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Continuous Learning
          </h2>

          <p className={`text-lg mb-8 ${textPrimary}`}>
            Technology evolves rapidly, and so do I. I&apos;m constantly learning
            new frameworks, exploring emerging technologies, and refining my
            existing skills.
          </p>

          <div className="flex gap-4 flex-wrap">
            {[
              "🎯 Currently Learning: Data Structures & Algorithms",
              "🚀 Next Goal: Deployment (Docker / Cloud)",
              "💡 Exploring: Backend Architecture & API Security",
            ].map((item) => (
              <span
                key={item}
                className={`${accentBg} border-2 ${
                  isDark ? "border-blue-800" : "border-blue-300"
                } px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/work">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                View My Projects
              </button>
            </Link>

            <Link href="/connect">
              <button
                className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:-translate-y-1 ${
                  isDark
                    ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Let’s Collaborate
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}