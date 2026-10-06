"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/Icons";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          badge="Featured Engineering Work"
          title="Engineered Projects."
          subtitle="Explore full-stack web platforms and applied AI applications built with modern frameworks, role-based workflows, and containerized architectures."
        />

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repositories Footer Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/[0.02] via-cyan-500/[0.04] to-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Github className="w-5 h-5 text-cyan-400" />
              <span>Explore More Code Repositories on GitHub</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
              Check out open source experiments, full-stack prototypes, and algorithms on GitHub.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.12] transition-all whitespace-nowrap"
          >
            <span>Visit @Mayurii59</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
