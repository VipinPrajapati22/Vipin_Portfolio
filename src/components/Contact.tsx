"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
      return;
    }

    setFormState("submitting");

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-brand-dark">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

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
            Get In Touch
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
            Let's discuss healthcare analytics internships, clinical data projects, or professional opportunities.
          </motion.p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Details Sidebar (Left 5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
                Contact Information
              </h3>
              <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
                Feel free to reach out to discuss clinical data projects, PV safety dashboards, or internships. I am responsive and open to scheduling a conversation.
              </p>
            </div>

            {/* List items */}
            <div className="space-y-5">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center text-sky-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Location</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">JSS Academy of Technical Education, Noida, UP, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center text-cyan-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Email</h4>
                  <a 
                    href="mailto:vipin22nov@gmail.com" 
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-cyan-400 transition-colors mt-0.5 block"
                  >
                    vipin22nov@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 flex items-center justify-center text-teal-500 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Networking</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <a 
                      href="https://www.linkedin.com/in/vipin-prajapati-5a11a0275" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-400 text-slate-600 dark:text-slate-450 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-solid border-slate-200/10 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-400 text-slate-600 dark:text-slate-450 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quote block */}
            <div className="hidden lg:block text-xs italic text-slate-400 dark:text-slate-500 leading-normal">
              Note: Contact form inputs will trigger a success simulation. No real mail delivery server is connected.
            </div>

          </motion.div>

          {/* Form Card (Right 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been successfully transmitted and Vipin will respond shortly.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-6 py-2 border border-solid border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-350 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-solid border-slate-200/50 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                        placeholder="Dr. Rajesh Kumar"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-solid border-slate-200/50 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                        placeholder="recruiter@pharma.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-solid border-slate-200/50 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                      placeholder="Opportunity / Research Inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-solid border-slate-200/50 dark:border-slate-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white resize-none"
                      placeholder="Hi Vipin, I reviewed your portfolio. We are looking for an intern in regulatory affairs..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <AnimatePresence>
                      {formState === "error" && (
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-xs font-semibold text-rose-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" /> Please fill all fields.
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="ml-auto w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sky-500/10 active:scale-98 transition-all cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-solid border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
