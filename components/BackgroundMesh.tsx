"use client";

import React from "react";

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      {/* Subtle fine tech grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Primary ambient glowing light orbs */}
      <div className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full bg-cyan-500/[0.04] blur-[140px]" />
      <div className="absolute top-[40%] -right-[10%] w-[550px] h-[550px] rounded-full bg-teal-500/[0.035] blur-[130px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[150px]" />

      {/* Top vignette gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050505] to-transparent opacity-90" />
      {/* Bottom vignette gradient */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent opacity-90" />
    </div>
  );
}

