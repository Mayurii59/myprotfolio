"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/Icons";
import { Project } from "@/data/portfolio";
import { CityTourPreview, HealthcarePreview } from "./ProjectPreviews";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl bg-[#0b0b0f] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 lg:p-10 transition-colors duration-500 shadow-xl overflow-hidden"
    >
      {/* Dynamic ambient hover glow */}
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Project Content Side */}
        <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div>
            {/* Category & Status Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                0{index + 1} {"//"} {project.category}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400">
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Metrics / Stats Grid */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <div className="text-[10px] font-mono text-zinc-500">{s.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Key Feature Highlights */}
            <div className="mt-5 space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-light">{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-cyan-300 transition-colors cursor-pointer shadow-md"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Deep Dive & Specs</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/[0.1] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Interactive Mockup Preview Side */}
        <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            {project.previewType === "tour" ? (
              <CityTourPreview />
            ) : (
              <HealthcarePreview />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
