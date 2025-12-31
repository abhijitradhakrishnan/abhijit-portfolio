"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/Theme/ThemeContext";

const Resume = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [
    {
      title: "QuickStay – Hotel Booking Platform",
      desc: "Full-stack MERN application featuring authentication, room management, booking workflows, and responsive UI.",
      tech: "React • Node.js • Express • MongoDB • Tailwind"
    },
    {
      title: "PrimeMart – E-commerce Website",
      desc: "Responsive e-commerce platform with product listing, cart functionality, and REST API integration.",
      tech: "React • Node.js • Express • MongoDB • Tailwind"
    },
  ]

  return (
    <div className={`${containerBg} min-h-screen py-24`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className={`text-5xl md:text-6xl font-bold ${headingColor}`}>
            Abhijit{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Peringadan
            </span>
          </h1>

          <p className={`mt-4 text-lg md:text-xl ${textPrimary}`}>
           Entry-Level Full Stack Developer (MERN Stack)
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              <Download className="inline w-4 h-4 mr-2" />
              Download Resume
            </a>

            <Link
              href="/connect"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              <Mail className="inline w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 mb-12`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
            Professional Summary
          </h2>
          <p className={`${textPrimary} leading-relaxed`}>
            Entry-level Full Stack Developer with hands-on experience building
            production-style MERN applications. Strong foundation in React,
            REST APIs, MongoDB schema design, and responsive UI development.
            Comfortable working with Git, deployments, and modern frontend tooling.

          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend",
                items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6`}
              >
                <h3 className={`font-bold mb-3 ${headingColor}`}>
                  {group.title}
                </h3>
                <ul className={`text-sm space-y-1 ${textPrimary}`}>
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
            Projects
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
              key={index}
              className={`p-6 rounded-xl border ${borderColor} ${cardBg}`}>
              <h3 className={`text-xl font-bold ${headingColor}`}>
                {project.title}
              </h3>
              <p className={`${textPrimary} mt-2`}>
                {project.desc}
              </p>
              <p className="text-sm mt-2 text-blue-500 font-medium">
                {project.tech}
              </p>
            </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 mb-16`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
            Education
          </h2>
          <p className={`${textPrimary}`}>
            <strong>Bachelor of Computer Applications (BCA)</strong> — 2022
            <br />
            Relevant Coursework: Data Structures, DBMS, Web Development, OOP
          </p>
        </motion.section>

        {/* Footer */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/abhijitradhakrishnan" target="_blank">
            <Github className="w-6 h-6 text-blue-500 hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/abhijit-radhakrishnan/" target="_blank">
            <Linkedin className="w-6 h-6 text-blue-500 hover:scale-110 transition" />
          </a>
        </div>

         <div className="flex justify-end gap-4 mt-6">   
          <a
              href="/resume.pdf"
              // download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Preview Resume (PDF)
            </a>   
         </div>   
      </div>
    </div>
  );
};

export default Resume;