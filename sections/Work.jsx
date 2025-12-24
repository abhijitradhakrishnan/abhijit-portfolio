"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "@/context/Theme/ThemeContext";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
      desc: "Hotel Booking Website — Full-stack MERN platform with secure authentication, room management, and real-time booking workflows.",
      img: "/quickstay.png",
      live: "https://quickstay-dun-xi.vercel.app/",
      git: "https://github.com/abhijitradhakrishnan/Hotel-Booking-Website",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "PrimeMart",
      desc: "PrimeMart — Responsive e-commerce web app with product catalog, cart functionality, and REST API integration.",
      img: "/primemart.png",
      live: "https://primemart-ecommerce-website.netlify.app/",
      git: "https://github.com/abhijitradhakrishnan/PrimeMart",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "Online Book Store",
      desc: "Online Book Store — Responsive bookstore UI with categorized browsing and improved user experience.",
      img: "/onlinebookstore.png",
      live: "https://online-bookstore-website.netlify.app/",
      git: "https://github.com/abhijitradhakrishnan/Online-Book-Store",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "My Portfolio",
      desc: "Personal portfolio with animations and dark/light mode.",
      img: "/myport.png",
      live: "",
      git: "https://github.com/abhijitradhakrishnan/abhijit-portfolio",
      tech: ["React", "Framer Motion", "Tailwind", "Next.js"],
    },
  ];

  return (
    <div className={`${containerBg} min-h-screen py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mt-4 mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            My <span className="text-blue-500">Projects</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border ${borderColor} overflow-hidden transition-all duration-500 transform
                ${hoveredIndex === index ? "scale-105 -translate-y-3 shadow-2xl" : "hover:-translate-y-2"}
                ${cardBg}`}
            >
              {/* Image */}
              <div className="relative h-56">
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
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
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
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 border-2 py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold
                      ${isDark ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300 hover:text-white " : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"}`}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;
