"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSpreadsheet, Database, Terminal, BarChart3, Layout, 
  HeartPulse, Activity, Search, Brain, Network, PieChart, ShieldCheck
} from "lucide-react";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: string;
  progress: number;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"analytics" | "pharma" | "technical">("analytics");

  const analyticsSkills: SkillItem[] = [
    {
      name: "Microsoft Excel",
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />,
      description: "Advanced data modeling using pivot tables, lookup functions (VLOOKUP/XLOOKUP), nesting formulas, and data preparation.",
      level: "Advanced",
      progress: 90
    },
    {
      name: "Power BI",
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
      description: "Building interactive healthcare dashboards, modeling relationships, and implementing basic DAX query calculations.",
      level: "Intermediate",
      progress: 80
    },
    {
      name: "SQL",
      icon: <Database className="w-5 h-5 text-sky-500" />,
      description: "Writing complex queries using SELECT, JOINs, GROUP BY, aggregations, and subqueries to filter patient and clinical records.",
      level: "Intermediate",
      progress: 75
    },
    {
      name: "Python",
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      description: "Writing scripts for exploratory data analysis (EDA) using foundational scientific libraries like Pandas, NumPy, and Matplotlib.",
      level: "Intermediate",
      progress: 70
    },
    {
      name: "Data Cleaning",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
      description: "Formatting datasets, handling null/missing variables, transforming records, and normalizing data for reliable reporting.",
      level: "Advanced",
      progress: 85
    },
    {
      name: "Dashboard Creation",
      icon: <Layout className="w-5 h-5 text-rose-500" />,
      description: "Designing modern, recruiter-friendly layouts focused on usability, key performance metrics, and clinical insight reporting.",
      level: "Intermediate",
      progress: 80
    }
  ];

  const pharmaSkills: SkillItem[] = [
    {
      name: "Pharmacology",
      icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
      description: "Comprehensive understanding of drug-receptor interactions, pharmacokinetics, therapeutic categories, and drug action.",
      level: "Advanced",
      progress: 85
    },
    {
      name: "Drug Interactions",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      description: "Analyzing clinical prescribing safety, side-effect signaling, and mapping adverse drug-drug or drug-food clashing matrices.",
      level: "Advanced",
      progress: 85
    },
    {
      name: "Pharmacovigilance",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      description: "Familiarity with Adverse Drug Reaction (ADR) reporting systems, patient safety surveillance, and standard MedDRA terminologies.",
      level: "Intermediate",
      progress: 80
    },
    {
      name: "Healthcare Systems",
      icon: <Network className="w-5 h-5 text-sky-500" />,
      description: "Understanding clinical workflow architectures, hospital information systems, and regulatory governance directives (CDSCO/FDA).",
      level: "Intermediate",
      progress: 75
    }
  ];

  const technicalSkills: SkillItem[] = [
    {
      name: "Data Visualization",
      icon: <PieChart className="w-5 h-5 text-cyan-500" />,
      description: "Translating medical parameters into readable visual elements like distribution curves, trend charts, and scatter plots.",
      level: "Advanced",
      progress: 85
    },
    {
      name: "Analytical Thinking",
      icon: <Brain className="w-5 h-5 text-amber-500" />,
      description: "Deconstructing medical and scientific data models to isolate variables, explain anomalies, and discover patterns.",
      level: "Advanced",
      progress: 90
    },
    {
      name: "Report Building",
      icon: <FileSpreadsheet className="w-5 h-5 text-indigo-500" />,
      description: "Structuring scientific review documents, auditing clinical records, and drafting summarized data presentation slides.",
      level: "Advanced",
      progress: 85
    },
    {
      name: "Research Interpretation",
      icon: <Search className="w-5 h-5 text-emerald-500" />,
      description: "Parsing medical literature databases (PubMed, clinicaltrials.gov) to extract and summarize evidence-based insights.",
      level: "Advanced",
      progress: 80
    }
  ];

  const activeSkillsList = 
    activeCategory === "analytics" 
      ? analyticsSkills 
      : activeCategory === "pharma" 
      ? pharmaSkills 
      : technicalSkills;

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Skills Matrix
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
            A tailored skillset bridging pharmaceutical sciences, clinical safety, and data analysis technologies.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-solid border-slate-200/40 dark:border-slate-800/40">
            <button
              onClick={() => setActiveCategory("analytics")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "analytics"
                  ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Data Analytics
            </button>
            <button
              onClick={() => setActiveCategory("pharma")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "pharma"
                  ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Pharmaceutical Knowledge
            </button>
            <button
              onClick={() => setActiveCategory("technical")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "technical"
                  ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Technical & Professional
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="min-h-[350px]">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {activeSkillsList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center border border-solid border-slate-200/10 dark:border-slate-800/10 shadow-sm">
                        {skill.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {/* Micro-bar */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">
                      <span>Proficiency</span>
                      <span className="text-cyan-500 dark:text-cyan-400">{skill.level}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-500" 
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
