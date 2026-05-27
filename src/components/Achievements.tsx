"use client";

import { motion } from "framer-motion";
import { Terminal, BarChart3, ShieldCheck, BookOpen } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Terminal className="w-6 h-6 text-sky-500" />,
      title: "Built Healthcare Web Apps",
      subtitle: "Project Engineering",
      description: "Successfully built the Drug Interaction Awareness System, converting pharmaceutical matrices into a clean, functional clinical check web application."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      title: "Data Analytics Upskilling",
      subtitle: "Self-Paced Track",
      description: "Self-studied database structures, SQL query optimization, Power BI metrics creation, and advanced Excel formulas to analyze healthcare records."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "Pharma-Tech Synopses",
      subtitle: "Academic Presentations",
      description: "Presented research detailing the role of databases in pharmacovigilance tracking and Adverse Event database auditing during college academic programs."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Academic Dedication",
      subtitle: "B.Pharm ",
      description: "Consistently maintained strong academic standing in B.Pharm (2023–2027), JSSATE Noida (AKTU)"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-white dark:bg-brand-dark">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Academic & Upskilling Milestones
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 font-medium"
          >
            Realistic achievements, milestones, and continuous learning steps in clinical data science.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="space-y-1 w-full">
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors font-sans">
                  {item.title}
                </h3>
                <span className="inline-block text-[10px] font-bold text-sky-600 dark:text-cyan-400 uppercase tracking-wider bg-sky-500/8 dark:bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-solid border-slate-100 dark:border-slate-850 w-full font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
