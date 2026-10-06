"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Sparkles, Terminal, Award, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Cloud":
        return Cloud;
      case "AI & ML":
        return Sparkles;
      case "DevOps":
        return Terminal;
      default:
        return Award;
    }
  };

  const getGradient = (category: string) => {
    switch (category) {
      case "Cloud":
        return "from-cyan-500/10 via-blue-500/5 to-transparent border-cyan-500/30 text-cyan-400";
      case "AI & ML":
        return "from-teal-500/10 via-emerald-500/5 to-transparent border-teal-500/30 text-teal-400";
      case "DevOps":
        return "from-purple-500/10 via-indigo-500/5 to-transparent border-purple-500/30 text-purple-400";
      default:
        return "from-white/5 to-transparent border-white/10 text-white";
    }
  };

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          badge="Verified Knowledge"
          title="Certifications & Credentials."
          subtitle="Specialized technical foundations in cloud computing, generative AI systems, agentic architectures, and modern DevOps methodologies."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PORTFOLIO_DATA.certifications.map((cert) => {
            const Icon = getIcon(cert.category);
            const style = getGradient(cert.category);

            return (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                className={`p-6 rounded-3xl bg-gradient-to-br ${style} bg-[#0e0e13] border backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/[0.06]">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h3>

                  {/* Key Topics */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                      Key Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                  <span className="text-zinc-500 text-[11px]">Credential</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
