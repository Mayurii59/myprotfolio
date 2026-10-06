"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, ShieldAlert, Cpu, Layers } from "lucide-react";
import { Github } from "@/components/Icons";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c10] border border-white/[0.12] rounded-3xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0c0c10]/95 backdrop-blur-md border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Tagline & Overview */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-base text-zinc-200 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>Technical & Architectural Foundations</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Disclaimer for Healthcare project */}
            {project.id === "healthcare-planning-assistant" && (
              <div className="p-4 rounded-xl bg-yellow-500/[0.07] border border-yellow-500/30 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-200/90 leading-relaxed">
                  <strong>Important Notice:</strong> This application is engineered for general lifestyle and wellness planning workflows. It does not provide medical diagnosis, treatment protocols, or replace licensed healthcare practitioners.
                </p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Engineered Features & Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300 leading-relaxed font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="sticky bottom-0 p-6 bg-[#0c0c10]/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-90 transition-opacity"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
