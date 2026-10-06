"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "profile" | "runtime">("pipeline");
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle diagnostic pipeline steps smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pipelineSteps = [
    {
      title: "UI/UX Research & Figma Wireframing",
      tool: "Figma • Design Systems",
      status: "Verified",
      desc: "Pixel-perfect component tokens, accessibility compliance, and developer handoff.",
    },
    {
      title: "Full-Stack Web Architecture",
      tool: "ReactJS • Node.js • Express • MongoDB",
      status: "Active",
      desc: "Role-based dashboards, RESTful APIs, JWT token security, and responsive layouts.",
    },
    {
      title: "AI Integration & Prompt Engineering",
      tool: "FastAPI • Streamlit • LLMs",
      status: "Optimized",
      desc: "Structured healthcare planning advice, asynchronous APIs, and prompt orchestration.",
    },
    {
      title: "Containerization & DevOps Packaging",
      tool: "Docker • AWS Cloud • Git",
      status: "Ready",
      desc: "Multi-stage Docker builds, environment isolation, and version control discipline.",
    },
  ];

  const profileJsonText = `{
  "candidate": "Mayuri Patidar",
  "focus": "AI + Software Dev + UI/UX",
  "academics": {
    "degree": "B.Tech CSE",
    "institution": "Medi-Caps University, Indore",
    "cgpa": 8.26
  },
  "internship": {
    "company": "Horizon17 Technology",
    "role": "UI/UX Intern",
    "impact": "Figma wireframes, design-to-code, a11y"
  },
  "projects": [
    "CityTour Web App",
    "Dockerised Healthcare Assistant"
  ]
}`;

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-blue-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Terminal Window Frame */}
      <div className="relative rounded-2xl bg-[#0c0c10]/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
            <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>mayuri@dev-node:~/portfolio</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-medium">LIVE</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/[0.08] bg-black/40 text-xs font-mono">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors border-r border-white/[0.06] ${
              activeTab === "pipeline"
                ? "bg-white/[0.06] text-cyan-400 font-semibold border-b-2 border-b-cyan-400"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>pipeline.ai</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors border-r border-white/[0.06] ${
              activeTab === "profile"
                ? "bg-white/[0.06] text-cyan-400 font-semibold border-b-2 border-b-cyan-400"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>profile.json</span>
          </button>
          <button
            onClick={() => setActiveTab("runtime")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === "runtime"
                ? "bg-white/[0.06] text-cyan-400 font-semibold border-b-2 border-b-cyan-400"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>runtime.sh</span>
          </button>
        </div>

        {/* Terminal Content Area */}
        <div className="p-4 sm:p-5 font-mono text-xs text-zinc-300 min-h-[280px]">
          {activeTab === "pipeline" && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-2 border-b border-white/[0.06]">
                <span className="text-cyan-300 font-medium">▸ SYSTEM PIPELINE: MULTI-DISCIPLINARY STACK</span>
                <span className="text-zinc-500 font-mono">Step {activeStep + 1} of 4</span>
              </div>

              <div className="space-y-2.5">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = idx === activeStep;
                  return (
                    <div
                      key={step.title}
                      onClick={() => setActiveStep(idx)}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                          : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCurrent ? "bg-cyan-400 animate-ping" : "bg-zinc-600"
                            }`}
                          />
                          <span className={`font-semibold ${isCurrent ? "text-cyan-300" : "text-zinc-200"}`}>
                            {step.title}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded ${
                            isCurrent
                              ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                              : "text-zinc-500"
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed pl-3.5">{step.desc}</p>
                      <div className="mt-1 pl-3.5 text-[10px] text-teal-400/80 font-mono">
                        {"// "}{step.tool}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="relative">
              <div className="absolute right-0 top-0">
                <button
                  onClick={() => copyCode(profileJsonText)}
                  className="p-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white"
                  title="Copy JSON"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <pre className="text-cyan-300/90 leading-relaxed text-[11px] overflow-x-auto pr-8">
                <code>{profileJsonText}</code>
              </pre>
            </div>
          )}

          {activeTab === "runtime" && (
            <div className="space-y-3 font-mono text-[11px]">
              <div className="text-zinc-500">{"// Execution Diagnostics & Stack Checks"}</div>
              <div className="p-2.5 rounded bg-black/60 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-zinc-500">$</span>
                  <span>curl -X GET https://mayuri.dev/v1/health</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>200 OK — Systems Optimal (Latency: 12ms)</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-black/60 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-zinc-500">$</span>
                  <span>docker run -p 8000:8000 mayuri/healthcare-ai</span>
                </div>
                <div className="text-zinc-400">
                  <span>[FastAPI] Application startup complete.</span>
                  <br />
                  <span className="text-teal-400">[Streamlit] UI mounted on port 8501.</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-zinc-400">
                <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
                <span className="text-zinc-500">Ready to build next-generation applications.</span>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">MODE</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-300">Full-Stack & Applied AI</span>
          </div>
          <div className="text-zinc-500">
            UTF-8 · TS 5.0
          </div>
        </div>
      </div>
    </div>
  );
}
