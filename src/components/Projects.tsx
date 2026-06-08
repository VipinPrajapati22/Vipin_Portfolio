"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Activity, ShieldAlert, Database, BarChart3, FileSpreadsheet, ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons";

type ProjectItem = {
  title: string;
  category: "webapps" | "powerbi" | "sqlpython" | "excel";
  description: string;
  tools: string[];
  liveLink: string | null;
  githubLink: string | null;
  image?: string; //
};

// Custom coded interactive preview thumbnails for premium UX
function ProjectThumbnail({ type }: { type: "web" | "powerbi" | "sql" | "excel" | "python" }) {
  if (type === "web") {
    return (
      <div className="h-44 w-full bg-slate-950 rounded-t-2xl relative overflow-hidden border-b border-solid border-slate-900 flex flex-col justify-between p-3 font-sans">
        {/* Browser header */}
        <div className="flex items-center gap-1 border-b border-solid border-slate-900 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-slate-550 ml-2 font-mono truncate bg-slate-900/60 px-2 py-0.5 rounded-md">drug-interaction-awareness...</span>
        </div>
        {/* Mock UI */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent blur-xl" />
          <div className="glass-card bg-slate-900/50 p-2.5 rounded-xl border border-solid border-cyan-500/20 text-center space-y-1.5 max-w-[85%] z-10">
            <div className="flex items-center justify-center gap-1.5">
              <Pill className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-100 font-sans tracking-wide">Interaction Ledger</span>
            </div>
            <p className="text-[9px] text-slate-400">Cardiovascular Drugs vs. Food Pairing Check</p>
            <div className="text-[8px] font-mono text-rose-400 font-bold bg-rose-950/20 py-0.5 px-2 rounded border border-solid border-rose-500/10 inline-block">
              ⚠️ Alert: Clashing Pairing Detected
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === "powerbi") {
    return (
      <div className="h-44 w-full bg-slate-950 rounded-t-2xl relative overflow-hidden border-b border-solid border-slate-900 flex flex-col justify-between p-3">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b border-solid border-slate-900 pb-2">
          <span className="text-[10px] font-bold text-amber-550 flex items-center gap-1">
            <BarChart3 className="w-3.5 h-3.5" /> Power BI Analytics
          </span>
          <span className="text-[8px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400">Live Metric Dashboard</span>
        </div>
        {/* Visual Charts */}
        <div className="flex-1 grid grid-cols-3 gap-2 items-end pt-3">
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-solid border-slate-900 h-full flex flex-col justify-between">
            <span className="text-[8px] text-slate-500 font-bold">ADR Rate</span>
            <span className="text-sm font-bold text-amber-400">4.2%</span>
          </div>
          <div className="col-span-2 bg-slate-900/60 p-2 rounded-lg border border-solid border-slate-900 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-amber-500/5 to-transparent blur-md" />
            <span className="text-[8px] text-slate-500 font-bold z-10">Monthly Side-Effect Logs</span>
            <div className="flex items-end gap-1.5 h-12 pt-2 z-10">
              <div className="w-full h-[30%] bg-amber-500/30 rounded-sm" />
              <div className="w-full h-[60%] bg-amber-500/50 rounded-sm" />
              <div className="w-full h-[40%] bg-amber-500/40 rounded-sm" />
              <div className="w-full h-[85%] bg-amber-500 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "sql") {
    return (
      <div className="h-44 w-full bg-slate-950 rounded-t-2xl relative overflow-hidden border-b border-solid border-slate-900 flex flex-col justify-between p-3 font-mono text-[10px]">
        {/* Editor tabs */}
        <div className="flex items-center gap-1 border-b border-solid border-slate-900 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <span className="text-[8px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-t-md border-t border-x border-solid border-slate-850">safety_audit.sql</span>
        </div>
        {/* Syntax highlight query */}
        <div className="flex-1 pt-3 space-y-1.5 overflow-hidden text-slate-350">
          <div>
            <span className="text-sky-400 font-bold">SELECT</span> drug_name, <span className="text-cyan-400 font-bold">COUNT</span>(adr_id)
          </div>
          <div>
            <span className="text-sky-400 font-bold">FROM</span> patient_logs
          </div>
          <div>
            <span className="text-sky-400 font-bold">INNER JOIN</span> safety_ledger
          </div>
          <div>
            <span className="text-sky-400 font-bold">ON</span> patient_logs.id = safety_ledger.patient_id
          </div>
          <div>
            <span className="text-sky-400 font-bold">GROUP BY</span> drug_name;
          </div>
        </div>
      </div>
    );
  }

  if (type === "excel") {
    return (
      <div className="h-44 w-full bg-slate-950 rounded-t-2xl relative overflow-hidden border-b border-solid border-slate-900 flex flex-col justify-between p-3 font-mono text-[9px]">
        {/* Excel Header */}
        <div className="flex items-center justify-between border-b border-solid border-slate-900 pb-2">
          <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
            <FileSpreadsheet className="w-3.5 h-3.5" /> clinical_records.xlsx
          </span>
          <span className="text-[8px] text-slate-500">Pivot Report</span>
        </div>
        {/* Grid Cells */}
        <div className="flex-1 pt-3 space-y-1">
          <div className="grid grid-cols-4 gap-1.5 font-bold border-b border-solid border-slate-900 pb-1 text-slate-400">
            <span>Drug ID</span>
            <span>Patients</span>
            <span>Mean Dosage</span>
            <span>Compliance</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 border-b border-solid border-slate-900/60 pb-1 text-slate-500">
            <span>D-2045</span>
            <span>1,420</span>
            <span>15.4 mg</span>
            <span className="text-emerald-500 font-bold">96%</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 border-b border-solid border-slate-900/60 pb-1 text-slate-500">
            <span>D-8891</span>
            <span>890</span>
            <span>120.0 mg</span>
            <span className="text-emerald-500 font-bold">94%</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-slate-500">
            <span>D-3042</span>
            <span>3,124</span>
            <span>50.2 mg</span>
            <span className="text-rose-500 font-bold">88%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 w-full bg-slate-950 rounded-t-2xl relative overflow-hidden border-b border-solid border-slate-900 flex flex-col justify-between p-3 font-mono text-[10px]">
      {/* Editor tabs */}
      <div className="flex items-center gap-1 border-b border-solid border-slate-900 pb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        <span className="text-[8px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-t-md border-t border-x border-solid border-slate-850">correlate.py</span>
      </div>
      {/* Python code */}
      <div className="flex-1 pt-3 space-y-1.5 overflow-hidden text-slate-350">
        <div>
          <span className="text-indigo-400 font-bold">import</span> pandas <span className="text-indigo-400 font-bold">as</span> pd
        </div>
        <div>
          df = pd.read_csv(<span className="text-emerald-400">"safety_data.csv"</span>)
        </div>
        <div>
          corr = df[<span className="text-emerald-400">"adr_score"</span>].corr(df[<span className="text-emerald-400">"dosage_mg"</span>])
        </div>
       <div>
  <span className="text-emerald-400">
    Correlation: 0.67
  </span>
</div>

<div className="text-[8px] text-slate-500 italic">
  # Output: Correlation: 0.67
</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "webapps" | "powerbi" | "sqlpython" | "excel">("all");

  const projects: ProjectItem[] = [
    {
      title: "Drug Interaction Awareness System",
      category: "webapps",
      description: "A healthcare-focused web application designed to spread awareness about harmful drug interactions and improve medication safety using accessible pharmaceutical information.",
      tools: ["HTML", "CSS", "JavaScript", "Healthcare Content"],
      liveLink: "https://drug-interaction-awareness-system-c.vercel.app/",
      githubLink: "https://github.com/VipinPrajapati22",
      image:"/drug-interaction.png"
    },
{
      title: "PV Sentinel",
      category: "webapps",
      description: "PV Sentinel is an AI-powered pharmacovigilance platform for ADR monitoring, signal detection, risk management and drug safety intelligence.",
      tools: ["HTML", "CSS", "JavaScript", "Healthcare Content"],
      liveLink: "https://pv-sentinel-theta.vercel.app/",
      githubLink: "https://github.com/VipinPrajapati22",
      image:"/pv-senntinel.png"
    },
    {
      title: "Healthcare Dashboard using Power BI",
      category: "powerbi",
      description: "An interactive business intelligence dashboard modeling pharmacovigilance adverse reaction signals, clinical patient safety indices, and reporting volume trends over time.",
      tools: ["Power BI", "DAX", "Data Modeling", "Excel Source"],
      liveLink: null,
      githubLink: "https://github.com/VipinPrajapati22",
      image:"/powerbi-dashboard.png"
    },
    {
      title: "SQL-based Medical Data Analysis",
      category: "sqlpython",
      description: "A comprehensive clinical database audit query library built to isolate drug side-effects, analyze patient demography trends, and evaluate therapeutic dosage frequencies.",
      tools: ["SQL", "Relational Database", "Queries & JOINs", "Data Auditing"],
      liveLink: null,
      githubLink: "https://github.com/VipinPrajapati22",
      image:"/sql-analysis.png"
    },
    {
      title: "Excel Healthcare Reporting System",
      category: "excel",
      description: "A complex automated workbook designed to prepare patient logs, calculate medication safety statistics, and generate summarized pivot-chart reporting sheets.",
      tools: ["Excel", "Pivot Tables", "Advanced Formulas", "Conditional Formats"],
      liveLink: null,
      githubLink: "https://github.com/VipinPrajapati22",
      image:"/excel-reporting.png"
    },
    {
      title: "Python Data Analytics Project",
      category: "sqlpython",
      description: "Exploratory data analysis scripts checking drug-drug interaction alerts and side-effect correlations using clinical safety databases.",
      tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
      liveLink: null,
      githubLink: "https://github.com/VipinPrajapati22/VipinPrajapati22",
      image:"/python-analytics.png"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
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
            Portfolio Projects
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
            Healthcare intelligence dashboards, pharmaceutical tools, and data-driven analysis projects.
          </motion.p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "webapps", label: "Web Applications" },
            { id: "powerbi", label: "Power BI" },
            { id: "sqlpython", label: "SQL & Python" },
            { id: "excel", label: "Excel Analytics" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === btn.id
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-cyan-500/10"
                  : "bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="min-h-[400px]">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  layout
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 group border border-solid border-slate-200/40 dark:border-slate-850/50"
                >
                  <div>
                    {/* Visual Coded Preview Thumbnail */}
<img
  src={project.image}
  alt={project.title}
  className="w-full h-48 object-cover"
/>
                    {/* Content padding */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors leading-tight font-sans">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-550 dark:text-slate-450 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Tools Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tools.map((t) => (
                          <span 
                            key={t}
                            className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 dark:border-slate-800/10 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons footer card */}
                  <div className="p-6 pt-0 border-t border-solid border-slate-100 dark:border-slate-900 flex items-center gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-4 rounded-xl text-center text-xs font-bold bg-cyan-500 dark:bg-cyan-500/10 text-white dark:text-cyan-400 border border-solid border-cyan-500/10 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 animate-pulse-slow"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="flex-1 py-2 px-4 rounded-xl text-center text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 border border-solid border-slate-200/5 dark:border-slate-800/10 cursor-not-allowed">
                        Working on it 
                      </span>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/30 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-xl transition-all active:scale-95"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
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
