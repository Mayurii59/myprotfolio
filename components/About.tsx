"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  CheckCircle,
  Layout,
  Code2,
  Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const statCards = [
    {
      title: "Education",
      primary: "B.Tech CSE",
      secondary: "Medi-Caps University",
      period: "2022 – 2026",
      icon: GraduationCap,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      bgGradient: "from-cyan-500/[0.07] to-transparent",
    },
    {
      title: "Academic Record",
      primary: "CGPA 8.26",
      secondary: "Scale of 10.0",
      period: "Consistent Academic Focus",
      icon: Award,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      bgGradient: "from-emerald-500/[0.07] to-transparent",
    },
    {
      title: "Experience",
      primary: "UI/UX Designer Intern",
      secondary: "Horizon17 Technology",
      period: "July 2025 – Present",
      icon: Briefcase,
      color: "text-teal-400",
      borderColor: "border-teal-500/20",
      bgGradient: "from-teal-500/[0.07] to-transparent",
    },
    {
      title: "Base Location",
      primary: "Indore, India",
      secondary: "Madhya Pradesh",
      period: "Open to Relocation & Remote",
      icon: MapPin,
      color: "text-blue-400",
      borderColor: "border-blue-500/20",
      bgGradient: "from-blue-500/[0.07] to-transparent",
    },
  ];

  const focusPoints = [
    {
      icon: Layout,
      title: "UI/UX & Design Systems",
      desc: "Translating ambiguous requirements into intuitive, accessible Figma wireframes and design systems ready for developer implementation.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Crafting structured MERN applications with role-based access control, clean RESTful APIs, and responsive React interfaces.",
    },
    {
      icon: Cpu,
      title: "Applied AI & Containerization",
      desc: "Integrating Large Language Models with Python FastAPI services, interactive Streamlit workflows, and reliable Docker containers.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          badge="About"
          title="A little about me."
          subtitle="Computer Science Engineering graduate operating at the intersection of human-centered UI/UX design, full-stack web development, and applied AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#0d0d12]/80 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                I am a Computer Science Engineering graduate from{" "}
                <span className="text-white font-medium">Medi-Caps University, Indore</span>,
                graduating with a <span className="text-cyan-400 font-semibold">CGPA of 8.26</span>.
              </p>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                During my tenure as a{" "}
                <span className="text-white font-medium">UI/UX Intern at Horizon17 Technology and Sustainability</span>,
                I designed user-friendly interfaces and wireframes in Figma, collaborated directly with frontend engineers
                to optimize design-to-code handoffs, and championed accessibility and usability improvements across digital platforms.
              </p>

              <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                My approach unites systematic engineering with design aesthetics: creating products that aren&apos;t just
                technically robust with clean code and modern architectures, but also deliver fluid, intuitive, and accessible user experiences.
              </p>

              {/* Pillars */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Core Engineering Pillars
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
                  {focusPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div
                        key={point.title}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 transition-colors h-full flex flex-col justify-between"
                      >
                        <div>
                          <Icon className="w-4 h-4 text-cyan-400 mb-2" />
                          <h4 className="text-xs font-semibold text-white mb-1">{point.title}</h4>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-normal mt-1">{point.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Info Cards Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 items-stretch"
          >
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${card.bgGradient} bg-[#0b0b0e] border ${card.borderColor} backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:scale-[1.01] h-full flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                        {card.title}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-white tracking-tight">
                        {card.primary}
                      </h3>
                      <p className="text-sm text-zinc-300 font-medium mt-0.5">{card.secondary}</p>
                    </div>
                    <div className={`p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>{card.period}</span>
                    <span className="text-cyan-400/80 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
