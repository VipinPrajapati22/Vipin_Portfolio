"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "career-goals", label: "Goals" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  const activeSection = useActiveSection(sections.map(s => s.id));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky navbar
      const navbarHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Branding */}
          <button 
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 text-left cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300">
              <Activity className="w-5.5 h-5.5 animate-pulse-slow" />
            </div>
            <div>
              <span className="block font-bold text-lg leading-none text-slate-800 dark:text-slate-100 tracking-tight font-sans">
                Vipin
              </span>
              <span className="block text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase mt-0.5">
                Pharma Tech & Analytics
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "text-sky-600 dark:text-cyan-400" 
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-sky-500/8 dark:bg-cyan-500/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {section.label}
                </button>
              );
            })}
          </nav>

          {/* Utilities & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-black/[.04] dark:hover:bg-white/[.04] text-slate-700 dark:text-slate-200 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-solid border-black/[.06] dark:border-white/[.06] bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-colors cursor-pointer ${
                      isActive 
                        ? "bg-sky-500/8 text-sky-600 dark:text-cyan-400 dark:bg-cyan-500/10" 
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
