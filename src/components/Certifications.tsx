"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

export default function Certifications() {
  const certifications: {
  title: string;
  issuer: string;
  status: string;
  description: string;
  certificateUrl?: string;
}[] = [
    {
      title: "ICH Good Clinical Practices (GCP) Certification",
      issuer: "The National Institute on Drug Abuse (NIDA)",
      status: "Issued Jun 2026",
      certificateUrl: "/certificates/ich-gcp-certificate.pdf",
      description: "Covered key aspects of clinical research, including Institutional Review Boards (IRBs), informed consent, participant safety, confidentiality and privacy, quality assurance, research protocols, documentation and record-keeping, research misconduct, recruitment and retention, and investigational new drugs."
    },
    {
      title: "Microsoft Excel Specialist (Advanced)",
      issuer: "Microsoft Certification Pathways",
      status: "In Progress / Target Q3 2026",
      description: "Focusing on advanced data models, lookup functions, pivot tables, data cleaning, and statistical reporting structures."
    },
    {
      title: "Microsoft Power BI Data Analyst (PL-300)",
      issuer: "Microsoft Certification Pathways",
      status: "Planned / Target Q4 2026",
      description: "Data preparation, modeling clinical tables, creating interactive dashboards, and writing DAX expression metrics."
    },
    {
      title: "SQL & Database Management Certificate",
      issuer: "Coursera / Self-Paced Track",
      status: "In Progress / Target Q4 2026",
      description: "Relational database basics, writing queries, using groupings and aggregations, and connecting multiple medical schemas."
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google via Coursera Course",
      status: "Planned / Target Q1 2027",
      description: "Foundational training covering spreadsheet processing, data cleaning pipelines, SQL, and data visualization tools."
    },
    {
      title: "Healthcare Data Analytics Certification",
      issuer: "Johns Hopkins University via Coursera",
      status: "Planned / Target Q2 2027",
      description: "Analyzing electronic health records (EHR), clinical trial protocols, safety statistics, and patient outcomes metrics."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
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
            Target Certifications
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
            A roadmap of key certifications I am working towards to strengthen my analytical capabilities.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 group border border-solid border-slate-200/40 dark:border-slate-850/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center shadow-sm">
                    <Award className="w-5 h-5 text-cyan-500" />
                  </div>
                  <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/8 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {cert.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors font-sans">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-sm text-slate-550 dark:text-slate-450 leading-relaxed border-t border-solid border-slate-100 dark:border-slate-850 pt-4 font-sans">
                  {cert.description}
                </p>
                {cert.certificateUrl && (
  <a
    href={cert.certificateUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition"
  >
    🏆 View Credential
  </a>
)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
