"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "@/context/Theme/ThemeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Connect", path: "/connect" },
];

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navbarBg =
    theme === "dark"
      ? "bg-black border-b border-blue-900/40"
      : "bg-white border-b border-blue-100";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              A
            </div>
            <span className="hidden sm:inline text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 group-hover:opacity-80 transition-opacity">
              Portfolio
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 lg:gap-3">
          {navLinks.map(({ name, path }, i) => {
            const isActive = pathname === path;

            return (
              <motion.li
                key={path}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <Link
                  href={path}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 relative
                    ${
                      isActive
                        ? theme === "dark"
                          ? "text-blue-400 bg-blue-950"
                          : "text-blue-600 bg-blue-100"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                >
                  {name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Theme + Mobile Menu */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            className={`p-2.5 rounded-lg transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-blue-900 text-white"
                  : "bg-blue-100 text-blue-600"
              }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            className={`md:hidden p-2.5 rounded-lg transition-all
              ${
                theme === "dark"
                  ? "bg-blue-950 text-blue-300"
                  : "bg-blue-50 text-blue-700"
              }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden border-t
                ${
                  theme === "dark"
                    ? "border-blue-900/40 bg-black/90"
                    : "border-blue-100 bg-white/90"
                }`}
            >
              <ul className="flex flex-col gap-2 px-6 py-4">
                {navLinks.map(({ name, path }, i) => {
                  const isActive = pathname === path;

                  return (
                    <motion.li
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg font-medium text-center transition-all duration-300
                          ${
                            isActive
                              ? theme === "dark"
                                ? "text-blue-400 bg-blue-950"
                                : "text-blue-600 bg-blue-100"
                              : theme === "dark"
                              ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                              : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                          }`}
                      >
                        {name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  );
}