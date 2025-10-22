"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/all-projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/20 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo / Brand */}
        <Link
          href="/"
          className="relative font-semibold text-lg md:text-xl tracking-tight group"
        >
          <span
            className={`transition-colors ${
              scrolled ? "text-black dark:text-white" : "text-white"
            }`}
          >
            Sheikh Muhammad Ismail
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
        </Link>

        {/* 🔹 Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group transition-colors ${
                scrolled ? "text-zinc-700 hover:text-black" : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-black dark:text-white" : "text-white"
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden ${
              scrolled
                ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md"
                : "bg-black/90 backdrop-blur-sm"
            } border-t border-zinc-200/20 px-6 py-6 space-y-4`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  scrolled
                    ? "text-zinc-800 dark:text-zinc-100 hover:text-black dark:hover:text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
