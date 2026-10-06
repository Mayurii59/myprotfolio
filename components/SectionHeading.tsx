"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  number: string;
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-400 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="text-cyan-400 font-semibold">{number}</span>
        <span className="text-zinc-600">/</span>
        <span className="tracking-wider uppercase text-[11px] text-zinc-300">{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

