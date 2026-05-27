"use client";
import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Database, Lightbulb } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      title: "PV & Drug Safety Analytics",
      description: "Analyzing adverse drug reaction (ADR) signals, MedDRA databases, and reporting trends to identify patient safety concerns."
    },
    {
      icon: <Database className="w-6 h-6 text-sky-500" />,
      title: "Clinical Data Curation",
      description: "Understanding clinical trial architectures, data validation rules, and tracking safety metrics to support CRA goals."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "Compliance & Auditing",
      description: "Combining regulatory compliance basics (CDSCO/FDA) with data auditing to verify dosage safety indices."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      title: "Decision Support Systems",
      description: "Using Power BI, SQL, and Excel to convert complex pharmacy logs into clear reports for healthcare decision-makers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
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
            About Me
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
            Integrating pharmacology fundamentals with modern data intelligence.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Story (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-650 dark:text-slate-350 text-base sm:text-lg leading-relaxed font-sans"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Bridging Pharmacological Insights with Healthcare Intelligence
            </h3>
            
            <p>

              As a B.Pharm student at <strong>JSS Academy of Technical Education, Noida (AKTU)</strong>, I have focused my academic studies on understanding drug pathways, pharmacological kinetics, and safety boundaries. However, I believe that the future of effective healthcare lies in how we interpret clinical data.

              As a 6th-semester B.Pharm student at <strong>JSS Academy of Technical Education, Noida (AKTU)</strong>, I have focused my academic studies on understanding drug pathways, pharmacological kinetics, and safety boundaries. However, I believe that the future of effective healthcare lies in how we interpret clinical data.
            </p>
            
            <p>
              My passion is at the intersection of pharmacy and technology—specifically, transitioning into <strong>Healthcare Data Analytics</strong>. By analyzing patient logs, clinical databases, and pharmacovigilance (PV) reports, I work to convert complex biological parameters into actionable healthcare insights.
            </p>

            <p>
              I am training to become a clinical data analyst and future healthcare intelligence specialist. Whether querying adverse drug reactions (ADR) using SQL, building dashboards in Power BI, or analyzing safety variables in Excel, I aim to apply analytical rigor to improve medication safety and optimize clinical decision support systems.
            </p>

            {/* Quote block */}
            <div className="border-l-4 border-solid border-cyan-500 bg-cyan-500/5 dark:bg-cyan-500/2 p-4 rounded-r-2xl italic text-slate-700 dark:text-slate-350 text-sm font-sans">
              "Data is the key to unlocking drug safety. By visualizing clinical risks, we prevent adverse events and improve patient outcomes before they occur."
            </div>
          </motion.div>

          {/* Core Focus Areas / Cards (Right) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between h-52 sm:h-56"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center border border-solid border-slate-200/10 dark:border-slate-800/10 shadow-sm mb-4">
                  {val.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 font-sans">{val.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
