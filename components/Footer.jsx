"use client";

import React from "react";
import { useTheme } from "@/context/Theme/ThemeContext";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark ? "bg-black border-blue-900/40" : "bg-white border-blue-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Name / Brand */}
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Abhijit Peringadan
          </h3>

          {/* Copyright */}
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
            © {new Date().getFullYear()} Abhijit Peringadan. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;