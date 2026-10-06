"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  FileDown,
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import InteractiveTerminal from "./InteractiveTerminal";

export default function Hero() {
  const roles = PORTFOLIO_DATA.personal.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Smooth role cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                {PORTFOLIO_DATA.personal.statusBadge}
              </span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-cyan-400 font-bold">.</span>
            </motion.h1>

            {/* Animated Dynamic Role Headline */}
            <div className="h-14 sm:h-16 md:h-20 flex items-center mt-3 sm:mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gradient-accent flex items-center gap-3"
                >
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400 shrink-0" />
                  <span>{roles[currentRoleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tagline & Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl font-light"
            >
              <strong className="text-white font-medium">
                &ldquo;{PORTFOLIO_DATA.personal.tagline}&rdquo;
              </strong>{" "}
              {PORTFOLIO_DATA.personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* View Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-cyan-500/40 hover:text-white transition-all active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>

              {/* Download Resume */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Mayuri_Patidar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium tracking-wide text-zinc-400 hover:text-cyan-300 hover:bg-white/[0.03] transition-colors"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-6"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Connect Directly
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.email}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all"
                  aria-label="Email Mayuri"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Credentials Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2.5 text-xs text-zinc-400"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Medi-Caps University (CGPA: 8.26)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                <span>UI/UX Designer Intern @ Horizon17</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Indore, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Interactive Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
