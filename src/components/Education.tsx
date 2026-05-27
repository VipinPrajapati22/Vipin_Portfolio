"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Pharmacy (B.Pharm)",
      school: "JSS Academy of Technical Education, Noida",
      university: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      location: "Noida, Uttar Pradesh, India",
      period: "2023 - 2027",
      details: [
        "Focused study in Pharmacology, Pharmacovigilance, and Healthcare Systems.",
        "Engaged in data exploration tasks using clinical databases.",
        "Upper tier academic performer at JSSATE Noida."
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII - CBSE)",
      school: "Kendriya Vidyalaya Sangathan",
      Course: "Physics, Chemistry, Biology & Maths ",
      location: "Noida, Uttar Pradesh, India",
      period: "Completed 2021",
      details: [
        "Focused on Physics, Chemistry, Biology, and Maths.",
        "Graduated with distinction in Science subjects.",
        "Participated in science exhibitions."
      ]
    },
    {
      degree: "Secondary Education (Class X - CBSE)",
      school: "Kendriya Vidyalaya Sangathan",
      Course: "General Sciences & Mathematics",
      location: "Noida, Uttar Pradesh, India",
      period: "Completed 2019",
      details: [
        "Developed a strong foundation in biological sciences and mathematical reasoning."
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-white dark:bg-brand-dark">
      {/* Background blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -z-10" />
      
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
            Education Timeline
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
            Chronological overview of my academic background and milestones.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={item.degree} className={`relative flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-solid border-sky-500 dark:border-cyan-400 -translate-x-1/2 flex items-center justify-center z-10">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                  </div>

                  {/* Spacer for Desktop Layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-full md:w-[46%] pl-10 md:pl-0"
                  >
                    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-xl hover:shadow-sky-500/5">
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-solid border-slate-100 dark:border-slate-850 pb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                            {item.degree}
                          </h3>
                          <p className="text-sm font-semibold text-sky-600 dark:text-cyan-400 mt-1">
                            {item.school}
                          </p>
                          {item.university && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {item.university}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <ul className="space-y-2.5 pt-2">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
