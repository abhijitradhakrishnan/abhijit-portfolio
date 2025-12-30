"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/Theme/ThemeContext";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaGraduationCap,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ Animation Variants ------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reduceMotion = useReducedMotion();

  const roles = [
    { icon: FaCode, title: "Full Stack Developer", desc: "Building complete web solutions" },
    { icon: FaDatabase, title: "MERN Stack Developer", desc: "MongoDB, Express, React, Node.js" },
    { icon: FaGraduationCap, title: "DSA Problem Solver", desc: "Solving complex algorithms" },
    { icon: FaServer, title: "Backend Developer", desc: "APIs, authentication, server-side logic" },
    { icon: FaLaptopCode, title: "Frontend Developer", desc: "Responsive UI with React & Tailwind CSS" },
    { icon: FaCogs, title: "API & System Design", desc: "REST APIs and scalable architectures" },
  ];

  return (
    <div className={`${isDark ? "bg-black" : "bg-white"} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">

        {/* MAIN GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14"
        >

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.h1
              variants={fadeUp}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Abhijit Peringadan
              </span>
            </motion.h1>

            {/* Subtle typewriter-style fade */}
            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Full Stack Developer | MERN Specialist
            </motion.p>

            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg leading-relaxed mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              
               I&apos;m a passionate <span className="font-semibold">Full Stack Developer</span>{" "}
               specializing in the <span className="font-semibold">MERN Stack</span>. I build{" "}
               <span className="font-semibold">scalable web applications</span>, focus on{" "}
               <span className="font-semibold">clean, maintainable code</span>, develop{" "}
               <span className="font-semibold">robust backend systems and APIs</span>, and enjoy solving{" "}
               <span className="font-semibold">DSA problems</span>.

            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-semibold"
            >
              <Link href="/work">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View My Work
                </button>
              </Link>

              <Link href="/connect">
                <button
                  className={`px-8 py-3 rounded-lg border-2 transition ${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center gap-8">

            {/* FLOATING IMAGE */}
            <motion.div
              variants={imageVariant}
              animate={!reduceMotion ? { y: [0, -8, 0] } : undefined}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 ${
                isDark ? "border-blue-900/40" : "border-blue-200"
              } shadow-2xl`}
            >
              <Image
                src="/pro.jpg"
                alt="Abhijit Peringadan"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* ROLE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariant}
                    whileHover={!reduceMotion ? { y: -6, scale: 1.02 } : undefined}
                    className={`flex gap-4 p-4 rounded-lg ${
                      isDark
                        ? "bg-blue-950 hover:bg-blue-900/80"
                        : "bg-blue-100 hover:bg-blue-200"
                    }`}
                  >
                    <Icon className="text-2xl text-blue-500" />
                    <div>
                      <h4 className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                        {role.title}
                      </h4>
                      <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {role.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}