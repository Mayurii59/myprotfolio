"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { Figma } from "@/components/Icons";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp } from "@/lib/animations";

export default function Experience() {
  const exp = PORTFOLIO_DATA.experience[0];

  const highlights = [
    {
      title: "Design-to-Code Synergy",
      desc: "Partnered directly with engineering leads to define reusable tokens, UI props, and responsive layouts, preventing visual regression during handoff.",
      icon: Layers,
    },
    {
      title: "Figma Prototyping & Wireframes",
      desc: "Designed low-to-high fidelity wireframes and user flow architectures for web application dashboards with high visual polish.",
      icon: Figma,
    },
    {
      title: "Accessibility Standards (WCAG)",
      desc: "Championed high-contrast color palettes, accessible touch targets, and consistent semantic typography across digital touchpoints.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="Experience"
          title="Work Experience."
          subtitle="Hands-on internship experience designing user-friendly enterprise interfaces, building design systems, and improving developer collaboration."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
            {/* Timeline Marker Pulse */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050505] shadow-[0_0_12px_#06b6d4]" />

            {/* Main Experience Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.15)]"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-xs font-mono mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-cyan-400 font-medium mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors"
                        aria-label="Horizon17 Company Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 text-zinc-300 bg-white/[0.03] px-3 py-1 rounded-md border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="mt-6 space-y-3.5">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Key Responsibilities & Deliverables
                </p>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three Impact Callouts */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <Icon className="w-4 h-4 text-teal-400 mb-2" />
                      <h4 className="text-xs font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-[11px] text-zinc-400 leading-normal">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">Competencies:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
