"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp } from "@/lib/animations";

export default function Experience() {
  const exp = PORTFOLIO_DATA.experience[0];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
  ];

  const certificateUrl =
    exp.certificateUrl ||
    "https://drive.google.com/file/d/1BSbdeSWoIaz4OlEFEr0Z-Urnz1W3zTwe/view?usp=drive_link";

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="Experience"
          title="Work Experience."
          subtitle="Hands-on internship experience designing user-friendly interfaces, improving visual consistency, usability, and responsive user experiences."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30">
            {/* Timeline Marker Pulse */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050505] shadow-[0_0_12px_#06b6d4]" />

            {/* Main Experience Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0e0e13] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.15)] flex flex-col justify-between"
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
                  <div className="text-base sm:text-lg text-cyan-400 font-medium mt-1.5 flex items-center gap-2">
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
                  <div className="inline-flex items-center gap-1.5 text-zinc-300 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Professional Description */}
              <div className="py-6 border-b border-white/[0.08]">
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Technologies Used Subsection */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Technologies Used
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {technologies.length} Core Tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center h-8 px-3.5 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View Internship Certificate */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Credentials</span>
                </div>

                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-95 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer transform active:scale-95"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>View Internship Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
