"use client";

import { Activity } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      window.scrollTo({
        top: el.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-solid border-slate-200/30 dark:border-slate-850/50 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-solid border-slate-200/20 dark:border-slate-800/20 pb-8">
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-2.5 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 dark:text-cyan-400 flex items-center justify-center">
              <Activity className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="block font-bold text-sm text-slate-800 dark:text-slate-200">
                Vipin
              </span>
              <span className="block text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mt-0.5">
                2027 • JSS ATE
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <button onClick={() => handleNavClick("about")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">About</button>
            <button onClick={() => handleNavClick("education")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">Education</button>
            <button onClick={() => handleNavClick("skills")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">Skills</button>
            <button onClick={() => handleNavClick("career-goals")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">Goals</button>
            <button onClick={() => handleNavClick("projects")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">Projects</button>
            <button onClick={() => handleNavClick("contact")} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">Contact</button>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/vipin-prajapati-5a11a0275" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/5 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-400 text-slate-550 dark:text-slate-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/5 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-400 text-slate-550 dark:text-slate-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
          </div>

        </div>

        {/* Sub-footer details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Vipin. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for Healthcare Data Analytics & Pharma Tech
          </p>
        </div>

      </div>
    </footer>
  );
}
