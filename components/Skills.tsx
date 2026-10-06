"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode,
  Binary,
  Layers,
  FileText,
  Code,
  Palette,
  Database,
  HardDrive,
  GitBranch,
  Table,
  Sparkles,
  Bot,
  Brain,
  Terminal,
  Cpu,
} from "lucide-react";
import { Figma, Github } from "@/components/Icons";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "FileCode":
        return FileCode;
      case "Binary":
        return Binary;
      case "Layers":
        return Layers;
      case "FileText":
        return FileText;
      case "Code":
        return Code;
      case "Palette":
        return Palette;
      case "Database":
        return Database;
      case "HardDrive":
        return HardDrive;
      case "Figma":
        return Figma;
      case "GitBranch":
        return GitBranch;
      case "Github":
        return Github;
      case "Table":
        return Table;
      default:
        return Terminal;
    }
  };

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & Design" },
  ];

  const allSkills = PORTFOLIO_DATA.skills.categories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id, categoryName: cat.name }))
  );

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.categoryId === selectedCategory);

  const areasOfInterest = [
    {
      title: "AI & Machine Learning",
      tag: "Intelligent Systems",
      desc: "Fundamental algorithms, model training principles, neural network concepts, and predictive systems.",
      icon: Brain,
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      pillBg: "bg-cyan-500/10 text-cyan-300",
    },
    {
      title: "Generative AI",
      tag: "LLMs & Prompting",
      desc: "Large language models, transformer workflows, structured JSON generation, and multi-modal assistants.",
      icon: Sparkles,
      gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
      borderColor: "border-teal-500/30",
      accentColor: "text-teal-400",
      pillBg: "bg-teal-500/10 text-teal-300",
    },
    {
      title: "Agentic AI",
      tag: "Autonomous Reasoning",
      desc: "Autonomous agent execution, function calling, task orchestration, and tool-augmented reasoning loops.",
      icon: Bot,
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      pillBg: "bg-blue-500/10 text-blue-300",
    },
    {
      title: "DevOps & Cloud",
      tag: "Containers & CI/CD",
      desc: "Docker containerization, reproducible builds, AWS cloud architecture foundation, and environment isolation.",
      icon: Cpu,
      gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      pillBg: "bg-purple-500/10 text-purple-300",
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          badge="Skills & Technologies"
          title="Technical Competencies."
          subtitle="Proficiency in core programming languages, modern web engineering, database architecture, UI/UX tools, and emerging AI specializations."
        />

        {/* Highlight Section: Emerging Areas of Interest */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-300">
              Areas of Interest & Specialization
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {areasOfInterest.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${area.gradient} bg-[#0e0e13] border ${area.borderColor} backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] h-full flex flex-col justify-between`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] ${area.accentColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${area.pillBg}`}>
                        {area.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">{area.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{area.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-white/[0.06]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = getIcon(skill.iconName);
              return (
                <motion.div
                  layout
                  key={skill.name}
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group p-5 rounded-2xl bg-[#0d0d12] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#121218] transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/30 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.05]">
                          {skill.level}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {skill.categoryName}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
