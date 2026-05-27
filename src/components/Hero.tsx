"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, ArrowRight, Award, FileText, CheckCircle2, X } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const roles = [
    "Data Visualization",
    "Pharma-Tech Innovator",
    "Pharmacology Specialist"
  ];

  // Typing animation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        if (currentText === activeRole) {
          timer = setTimeout(() => setIsDeleting(true), 2500); // Wait before delete
          return;
        }
      } else {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Molecular network background canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const maxParticles = Math.min(60, Math.floor((width * height) / 12000));

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2.5 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D, isDark: boolean) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = isDark ? "rgba(34, 211, 238, 0.4)" : "rgba(2, 132, 199, 0.3)";
        c.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    init();

    const animate = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx, isDark);
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = isDark
              ? `rgba(34, 211, 238, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navbarHeight = 80;
      window.scrollTo({
        top: el.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const navbarHeight = 80;
      window.scrollTo({
        top: el.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden py-16">
      {/* Interactive molecular canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/8 dark:bg-cyan-500/10 border border-solid border-sky-500/15 dark:border-cyan-500/15 text-sky-600 dark:text-cyan-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
             Bachelor Of Pharmacy
            </motion.div>

            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-none font-sans"
              >
                Hi, I'm <span className="bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent font-sans">Vipin</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-10 sm:h-12 flex items-center justify-center lg:justify-start"
              >
                <span className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                  {currentText}
                  <span className="w-1 ml-1 h-6 inline-block bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed font-sans"
            >
              I combine Pharmacology knowledge with data analytics to build intelligent healthcare solutions using Excel, SQL, Power BI, Python, & AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sky-500/20 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                View Projects
              </button>
              
              <button
                onClick={() => setCvModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-solid border-slate-350 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 py-3.5 text-slate-650 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative w-64 h-64 sm:w-76 sm:h-76 lg:w-80 lg:h-80"
            >
              {/* Outer Glow / Glass ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-400 to-sky-500 opacity-20 blur-xl animate-pulse-slow" />
              
              {/* Inner glass frame */}
              <div className="absolute inset-0 rounded-3xl border border-solid border-white/20 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 p-2 shadow-2xl backdrop-blur-sm animate-float">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src="/vipin.jpg"
                    alt="Vipin"
                    fill
                    sizes="(max-w-768px) 256px, 320px"
                    priority
                    className="object-cover object-top scale-102 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating SQL visual card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 border border-solid border-slate-200/50 dark:border-slate-800 rounded-2xl p-2.5 shadow-xl flex items-center gap-2 animate-float hidden sm:flex z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-mono text-[10px] font-bold">
                  SQL
                </div>
                <div className="text-[10px] font-mono text-slate-650 dark:text-slate-350">
                  SELECT drug_adr FROM safety_db
                </div>
              </motion.div>

              {/* Floating Power BI metric trend visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute top-1/2 -left-12 bg-white/95 dark:bg-slate-900/95 border border-solid border-slate-200/50 dark:border-slate-800 rounded-2xl p-3 shadow-xl space-y-1 animate-float hidden lg:block z-20" 
                style={{ animationDelay: "2s" }}
              >
                <span className="block text-[6px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">PV Analytics ADR Signals</span>
                <div className="flex items-end gap-1 h-5 pt-1">
                  <div className="w-2 h-1.5 bg-cyan-550 dark:bg-cyan-500 rounded-sm" />
                  <div className="w-2 h-2.5 bg-cyan-450 dark:bg-cyan-400 rounded-sm animate-pulse" />
                  <div className="w-2 h-2 bg-sky-500 rounded-sm" />
                  <div className="w-2 h-3 bg-sky-400 rounded-sm" />
                </div>
              </motion.div>

              {/* Float Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-slate-900 border border-solid border-slate-100 dark:border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-2 animate-float z-20" style={{ animationDelay: "1s" }}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-100">B.Pharm</span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400"> 2027</span>
                </div>
              </div>
            </motion.div>

        </div>
      </div>

      {/* CV / Resume Interactive Modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 border border-solid border-slate-100 dark:border-slate-800 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-solid border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">Curriculum Vitae</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Vipin Prajapati • Pharmacy Student</p>
                  </div>
                </div>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* CV Body Container (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
                {/* CV Heading */}
                <div className="text-center pb-6 border-b border-solid border-slate-100 dark:border-slate-800 space-y-1.5">
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white">Vipin</h4>
                  <p className="text-sky-600 dark:text-cyan-400 font-medium">B.Pharm Scholar | Healthcare Data Analyst & Pharma-Tech Professional</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Noida, Uttar Pradesh • vipin22nov@gmail.com • +91 XXXXX XXXXX</p>
                </div>

                {/* Section: Objective */}
                <div>
                  <h5 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-xs border-l-2 border-cyan-500 pl-2 mb-2">Professional Objective</h5>
                  <p>
                    Highly motivated 6th-semester Bachelor of Pharmacy (B.Pharm) student at JSS Academy of Technical Education, Noida (AKTU) transitioning into Healthcare Data Analytics and Pharmaceutical Technology. Equipped with specialized capabilities in Excel, Power BI, SQL, Python, and clinical database handling alongside solid pharmacology knowledge. Seeking a data-driven clinical analyst or pharmacovigilance (PV) research internship to audit safety metrics and support clinical decision systems.
                  </p>
                </div>

                {/* Section: Education */}
                <div>
                  <h5 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-xs border-l-2 border-cyan-500 pl-2 mb-3">Education</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-semibold text-slate-900 dark:text-slate-100">Bachelor of Pharmacy (B.Pharm)</h6>
                        <p className="text-xs text-slate-500 dark:text-slate-400">JSS Academy of Technical Education, Noida (AKTU)</p>
                      </div>
                      <div className="text-right text-xs">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">2023 - 2027</span>
                        <p className="text-emerald-500 font-semibold">GPA: 8.2/10 (Current)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Core Skills */}
                <div>
                  <h5 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-xs border-l-2 border-cyan-500 pl-2 mb-3">Core Skills Matrix</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-slate-100 text-xs mb-1.5">Data Analytics</h6>
                      <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                        <li>Microsoft Excel & Power BI</li>
                        <li>SQL Querying & DB Basics</li>
                        <li>Python Programming & Pandas</li>
                        <li>Data Cleaning & Dashboards</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-slate-100 text-xs mb-1.5">Pharmaceutical Knowledge</h6>
                      <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-650 dark:text-slate-400">
                        <li>Pharmacology & Therapeutics</li>
                        <li>Pharmacovigilance (PV) & MedDRA</li>
                        <li>Drug Interactions & safety</li>
                        <li>Healthcare Systems & Regs</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-slate-100 text-xs mb-1.5">Technical & Professional</h6>
                      <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-650 dark:text-slate-400">
                        <li>Data Visualization & Charts</li>
                        <li>Analytical & Critical Thinking</li>
                        <li>Report Building & Summarizing</li>
                        <li>Scientific Review Interpretation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Project Highlights */}
                <div>
                  <h5 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-xs border-l-2 border-cyan-500 pl-2 mb-3">Key Projects</h5>
                  <div className="space-y-3">
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-slate-100">Drug Interaction Awareness System</h6>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Designed and developed a clinical web application using HTML, CSS, JavaScript, and pharmaceutical data to display clashing drug-drug combinations and alert clinicians.</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-slate-100">Healthcare Dashboard & Reporting (Simulated)</h6>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Constructed mock analytical dashboards to model pharmacovigilance adverse reaction logs, highlighting trend lines and patient safety indices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Modal Footer */}
              <div className="p-6 border-t border-solid border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" /> Professional Recruiter-Ready CV format
                </span>
                
                <div className="flex w-full sm:w-auto items-center gap-3">
                  <button
                    onClick={() => {
                      // Trigger a print window of the content
                      window.print();
                    }}
                    className="w-full sm:w-auto px-4 py-2 border border-solid border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold cursor-pointer text-center"
                  >
                    Print CV
                  </button>

                  <a
                    href="mailto:vipin22nov@gmail.com?subject=Requesting Vipin's Resume/CV"
                    className="w-full sm:w-auto px-4 py-2 bg-sky-600 dark:bg-cyan-500 text-white rounded-xl hover:bg-sky-700 dark:hover:bg-cyan-600 text-xs font-semibold cursor-pointer text-center shadow-sm"
                  >
                    Request PDF Resume
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
