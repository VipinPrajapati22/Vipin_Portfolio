"use client";

import { motion } from "framer-motion";
import { Database, Terminal, Activity, FileSpreadsheet } from "lucide-react";

export default function CareerGoals() {
  const goals = [
    {
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      title: "Healthcare Data Analytics",
      badge: "Clinical Safety",
      description: "Analyzing patient safety databases, Adverse Event Reporting systems, and clinical logs to systematically monitor drug side-effects, investigate anomalies, and track compliance metrics."
    },
    {
      icon: <Terminal className="w-6 h-6 text-sky-500" />,
      title: "Pharma-Tech Integration",
      badge: "Technology Tools",
      description: "Bridging pharmacology fundamentals with modern database technologies. Writing SQL queries and Python script packages to clean, process, and analyze healthcare information."
    },
    {
      icon: <Activity className="w-6 h-6 text-indigo-500" />,
      title: "Optimizing Healthcare Systems",
      badge: "Operations Research",
      description: "Using data visualization tools like Power BI to design interactive layouts for clinical stakeholders, reducing medication errors, and tracking drug usage trends."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-rose-500" />,
      title: "Healthcare Decision Support",
      badge: "Business Intelligence",
      description: "Providing structured data-driven reports, pivot summaries, and clinical trial safety metrics to support healthcare administrators and regulatory auditing protocols."
    }
  ];

  return (
    <section id="career-goals" className="py-20 relative bg-white dark:bg-brand-dark">
      {/* Subtle background glow */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

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
            Career Vision & Goals
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
            A roadmap aimed at refining patient safety pipelines and clinical data flows through technology.
          </motion.p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center shadow-sm">
                    {goal.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full border border-solid border-slate-200/10">
                    {goal.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors font-sans">
                  {goal.title}
                </h3>
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                  {goal.description}
                </p>
              </div>

              {/* Progress visual tracker */}
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                  <span>Objective Alignment</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
