"use client";

import React, { useState } from "react";
import {
  Compass,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Bot,
  MapPin,
  ShieldAlert,
} from "lucide-react";

type RoleType = "tourist" | "admin" | "business" | "student";

export function CityTourPreview() {
  const [activeRole, setActiveRole] = useState<RoleType>("tourist");

  const roles: { id: RoleType; label: string; icon: typeof Compass }[] = [
    { id: "tourist", label: "Tourist Portal", icon: Compass },
    { id: "admin", label: "Admin Console", icon: Users },
    { id: "business", label: "Business Hub", icon: Building2 },
    { id: "student", label: "Student Pass", icon: GraduationCap },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#09090d] border border-white/[0.08] p-4 font-mono text-xs overflow-hidden">
      {/* Browser Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-[10px] text-zinc-500 font-mono">
            https://citytour.local/dashboard/{activeRole}
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          MERN STACK
        </span>
      </div>

      {/* Role Switcher Pill Bar */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = activeRole === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] flex items-center gap-1.5 whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{r.label}</span>
            </button>
          );
        })}
      </div>

      {/* Simulated Portal Content */}
      <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.05] space-y-3">
        {activeRole === "tourist" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-zinc-400 text-[11px]">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Featured Cities: Mumbai & Indore
              </span>
              <span className="text-emerald-400">JWT Authorized</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="font-bold text-zinc-200">Indore Heritage Walk</div>
                <div className="text-zinc-500 text-[10px]">Rajwada • Sarafa Night Market</div>
                <div className="mt-1.5 text-cyan-400 text-[10px]">★ 4.9 (320 Reviews)</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="font-bold text-zinc-200">Mumbai Coastal Tour</div>
                <div className="text-zinc-500 text-[10px]">Marine Drive • Colaba Causeway</div>
                <div className="mt-1.5 text-cyan-400 text-[10px]">★ 4.8 (840 Reviews)</div>
              </div>
            </div>
          </div>
        )}

        {activeRole === "admin" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="text-white font-semibold">City Management & Analytics</span>
              <span className="text-cyan-400">RESTful Controller</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <div className="text-zinc-500">Total Users</div>
                <div className="text-sm font-bold text-white mt-0.5">1,480</div>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <div className="text-zinc-500">Active Listings</div>
                <div className="text-sm font-bold text-teal-300 mt-0.5">124</div>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <div className="text-zinc-500">Verified Vendors</div>
                <div className="text-sm font-bold text-blue-300 mt-0.5">48</div>
              </div>
            </div>
          </div>
        )}

        {activeRole === "business" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="text-white font-semibold">Vendor Portal: Chhappan Dukan Eateries</span>
              <span className="text-emerald-400">Live Status</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] flex items-center justify-between">
              <div>
                <span className="text-zinc-200">Featured Culinary Experience</span>
                <p className="text-[10px] text-zinc-500">Indore Street Food Showcase</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">98 Bookings</span>
            </div>
          </div>
        )}

        {activeRole === "student" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="text-white font-semibold">Student Concession Program</span>
              <span className="text-purple-400">50% Off Pass</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px]">
              <span className="text-zinc-300">Indore University Transit & Museum Pass</span>
              <p className="text-[10px] text-zinc-500 mt-0.5">
                Verified with College ID • Central Museum & Lal Bagh Palace
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function HealthcarePreview() {
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);

  const sampleScenarios = [
    {
      label: "Sleep & Recovery Plan",
      query: "Draft a 7-day circadian sleep hygiene & recovery schedule for high-stress weeks.",
      response:
        "1. Wind-down: 9:30 PM screen cutoff\n2. Melatonin-supportive herbal infusion\n3. Optimal sleep room temperature: 18-20°C\n4. Morning 10-min sunlight exposure at 7:00 AM",
    },
    {
      label: "Hydration & Energy Schedule",
      query: "Structure optimal daily hydration cadence with electrolyte intervals.",
      response:
        "1. 500ml room-temp water at wakeup (7:00 AM)\n2. Electrolyte infusion at 11:30 AM\n3. Consistent 250ml intake every 90 minutes until 8:00 PM",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#09090d] border border-white/[0.08] p-4 font-mono text-xs overflow-hidden">
      {/* Docker & FastAPI Status Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-mono">
            docker://fastapi-llm-service:v1 [PORT 8000]
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
          STREAMLIT + LLM
        </span>
      </div>

      {/* Scenario Selector */}
      <div className="flex gap-2 mb-3">
        {sampleScenarios.map((sc, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] transition-all ${
              selectedPrompt === idx
                ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                : "bg-white/[0.03] text-zinc-400 hover:text-white"
            }`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Simulated Prompt & Response Box */}
      <div className="space-y-2.5">
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[10px] text-zinc-500 mb-1 flex items-center gap-1">
            <Bot className="w-3 h-3 text-cyan-400" /> User Input Query
          </div>
          <div className="text-zinc-200 text-[11px]">
            &ldquo;{sampleScenarios[selectedPrompt].query}&rdquo;
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-teal-500/[0.04] border border-teal-500/20">
          <div className="text-[10px] text-teal-400 mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Structured LLM Planning Output
            </span>
            <span className="text-[9px] text-zinc-500">Response time: 420ms</span>
          </div>
          <pre className="text-zinc-300 text-[11px] whitespace-pre-line font-mono">
            {sampleScenarios[selectedPrompt].response}
          </pre>
        </div>

        {/* Disclaimer */}
        <div className="p-2 rounded bg-amber-500/[0.05] border border-amber-500/20 text-[10px] text-amber-300/80 flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
          <span>General planning advice; does not replace licensed medical doctors.</span>
        </div>
      </div>
    </div>
  );
}
