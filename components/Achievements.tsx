"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Figma } from "@/components/Icons";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Achievements() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Figma":
        return Figma;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="Milestones"
          title="Milestones & Achievements."
          subtitle="Key milestones demonstrating practical design execution and professional internship completion."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PORTFOLIO_DATA.achievements.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-6 sm:p-8 rounded-3xl bg-[#0c0c10] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    {item.organization}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Accomplished</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
