"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          badge="Academic Track"
          title="Education."
          subtitle="Formal computer science education and fundamental STEM foundation with strong academic consistency."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {PORTFOLIO_DATA.education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={fadeInUp}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c0c10] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-sm sm:text-base text-cyan-400 font-medium mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-mono">
                      Field: {edu.field}
                    </div>
                  </div>
                </div>

                {/* Score & Period Badge */}
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>
                      {edu.scoreLabel}: {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Details Coursework */}
              {edu.details && (
                <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400/70 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
