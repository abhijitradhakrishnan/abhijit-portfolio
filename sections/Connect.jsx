"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
  User,
} from "lucide-react";
import { useTheme } from "@/context/Theme/ThemeContext";
import { useState } from "react";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  //Using Web3Forms
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "peringadanabhijit@gmail.com",
      link: "mailto:peringadanabhijit@gmail.com",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Alternate Email",
      value: "abhij3644@gmail.com",
      link: "mailto:abhij3644@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8669728813",
      link: "tel:+918669728813",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
      value: "Bachelor of Computer Applications (BCA)",
    },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/abhijitradhakrishnan",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhijit-radhakrishnan/",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://instagram.com/abhijit.radhakrishnan",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/8669728813",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "X",
      link: "https://x.com/AbhijitRadhakr1",
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-12 pt-24 transition-colors duration-500 ${
        isDark
          ? "bg-black text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-3xl p-8 backdrop-blur-sm shadow-2xl border transition-all duration-500 ${
          isDark
            ? "bg-blue-950/40 border-blue-900/40"
            : "bg-white/90 border-blue-100"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-1">
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center overflow-hidden ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              >
                <User className="w-16 h-16 text-blue-600" />
                <Image
                  src="/pro1.jpg"
                  alt="Abhijit Peringadan"
                  fill
                  className="object-cover rounded-2xl opacity-90"
                  priority
                />
              </div>
            </div>
          </div>

          <h1
            className={`text-4xl font-bold mb-3 text-center ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Connect with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Abhijit Peringadan
            </span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="grid gap-4 mb-8">
          {contacts.map((item, i) => {
            const Wrapper = item.link ? "a" : "div";
            return (
                <Wrapper
                key={i}
                href={item.link}
                className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                    isDark
                    ? "bg-blue-950/40 border-blue-900/40 hover:bg-blue-950"
                    : "bg-white/80 border-blue-100 hover:bg-blue-50"
                }`}
                >
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold text-lg">{item.value}</p>
              </div>
            </Wrapper>
            )
          })}
        </div>

        {/* Social Links */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Find Me On
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-500 hover:-translate-y-1 ${
                isDark
                  ? "bg-blue-950/40 border-blue-900/40 hover:text-blue-400"
                  : "bg-white/80 border-blue-100 hover:text-blue-700"
              }`}
            >
              <div className="transition-transform duration-300 hover:scale-125">
                {social.icon}
              </div>
              <span className="font-medium">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
            Get in Touch
        </h2>
        <form
            onSubmit={onSubmit}
            className={`max-w-2xl mx-auto rounded-2xl p-6 border ${
            isDark
                ? "bg-blue-950/40 border-blue-900/40"
                : "bg-white/90 border-blue-100"
            }`}
        >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg border outline-none bg-transparent"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg border outline-none bg-transparent"
            />
            </div>

            <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border outline-none bg-transparent mb-4"
            />

            <button
            type="submit"
            disabled={result === "Sending..."}
            className="w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
            Send Message
            </button>

            {result && (
            <p className={`mt-4 text-center text-sm ${result.includes("success") ? "text-green-500": "text-red-500"}`}>
                {result}
            </p>
            )}
        </form>
        </div>      


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="mailto:peringadanabhijit@gmail.com"
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-110 ${
              isDark
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            <Mail className="inline w-5 h-5 mr-2" />
            Send Email
          </a>

          <a
            href="https://wa.me/8669728813"
            className={`px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-500 hover:scale-110 ${
              isDark
                ? "border-blue-900 text-blue-400 hover:bg-green-600 hover:text-white"
                : "border-blue-600 text-blue-600 hover:bg-green-500 hover:text-white"
            }`}
          >
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
