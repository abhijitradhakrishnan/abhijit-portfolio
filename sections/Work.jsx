"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "@/context/Theme/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ VARIANTS ------------------ */

// Heading animation
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card animation factory (direction-based)
const cardVariants = (direction, index, reduceMotion) => ({
  hidden: {
    opacity: 0,
    x: reduceMotion ? 0 : direction === "left" ? -40 : direction === "right" ? 40 : 0,
    y: reduceMotion ? 0 : direction === "bottom" ? 40 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.12, // ⏱ stagger per card
    },
  },
});

/* ------------------ COMPONENT ------------------ */

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [
    {
      title: "QuickStay",
      desc:
        "Hotel Booking Website — Full-stack MERN platform with secure authentication and real-time booking.",
      img: "/quickstay.png",
      live: "https://quickstay-dun-xi.vercel.app/",
      git: "https://github.com/abhijitradhakrishnan/Hotel-Booking-Website",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "PrimeMart",
      desc:
        "Responsive e-commerce app with cart, products, and REST APIs.",
      img: "/primemart.png",
      live: "https://primemart-ecommerce-website.netlify.app/",
      git: "https://github.com/abhijitradhakrishnan/PrimeMart",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "Online Book Store",
      desc:
        "Bookstore UI with categorized browsing and responsive design.",
      img: "/onlinebookstore.png",
      live: "https://online-bookstore-website.netlify.app/",
      git: "https://github.com/abhijitradhakrishnan/Online-Book-Store",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "My Portfolio",
      desc:
        "Personal portfolio with animations and dark/light mode.",
      img: "/myport.png",
      live: "https://abhijit-portfolio-eight.vercel.app/",
      git: "https://github.com/abhijitradhakrishnan/abhijit-portfolio",
      tech: ["Next.js", "Framer Motion"],
    },
  ];

  return (
    <div className={`${containerBg} min-h-screen py-24 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* ------------------ HEADING ------------------ */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            My <span className="text-blue-500">Projects</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className={`mt-5 text-lg max-w-3xl mx-auto ${textPrimary}`}>
            A collection of projects showcasing modern web development and clean UI.
          </p>
        </motion.div>

        {/* ------------------ PROJECTS GRID ------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // 📱 Mobile → bottom
            // 🖥 Desktop → left / right alternating
            const direction =
              typeof window !== "undefined" && window.innerWidth < 768
                ? "bottom"
                : index % 2 === 0
                ? "left"
                : "right";

            return (
              <motion.div
                key={index}
                variants={cardVariants(direction, index, reduceMotion)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-2xl border ${borderColor} overflow-hidden ${cardBg}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[280px]">
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm ${textPrimary}`}>{project.desc}</p>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-blue-900/50 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      className={`flex-1 border-2 py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold ${
                        isDark
                          ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                          : "border-blue-600 text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
