"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactChannels = [
    {
      title: "Email Address",
      value: PORTFOLIO_DATA.personal.email,
      href: PORTFOLIO_DATA.personal.socialLinks.email,
      icon: Mail,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
      actionType: "copy",
      subtext: "Fastest response within 24h",
    },
    {
      title: "Phone Number",
      value: PORTFOLIO_DATA.personal.phone,
      href: PORTFOLIO_DATA.personal.socialLinks.phone,
      icon: Phone,
      iconColor: "text-teal-400",
      iconBg: "bg-teal-500/10 border-teal-500/20",
      actionType: "call",
      subtext: "Available for calls & WhatsApp",
    },
    {
      title: "Location",
      value: PORTFOLIO_DATA.personal.location,
      href: null,
      icon: MapPin,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      actionType: "info",
      subtext: "Open to Relocation & Remote",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          badge="Get in Touch"
          title="Let's build something meaningful."
          subtitle="Have an idea, project, or opportunity? Let's connect directly."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 3 Aligned Contact Channel Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          >
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  variants={fadeInUp}
                  className="p-6 rounded-3xl bg-[#0c0c10] border border-white/[0.08] hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl border ${channel.iconBg} ${channel.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {channel.actionType === "copy" && (
                        <button
                          onClick={handleCopyEmail}
                          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                          title="Copy Email to Clipboard"
                          aria-label="Copy Email"
                        >
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}

                      {channel.actionType === "call" && (
                        <a
                          href={channel.href || "#"}
                          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                          aria-label="Call Mayuri"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                      {channel.title}
                    </span>

                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors mt-1 break-all"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="text-base sm:text-lg font-bold text-white mt-1">
                        {channel.value}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.05] text-xs font-mono text-zinc-500">
                    {channel.subtext}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Centered Actions Container */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0c0c10] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Ready to collaborate?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                  Open for full-time engineering and AI roles, internships, and freelance projects.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.email}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-95 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer transform active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="Mayuri_Patidar_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.1] transition-all"
                >
                  <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
