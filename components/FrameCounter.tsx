"use client";

import React from "react";
import { Activity } from "lucide-react";

interface FrameCounterProps {
  currentFrame: number;
  totalFrames: number;
  scrollPercent: number;
}

export default function FrameCounter({
  currentFrame,
  totalFrames,
  scrollPercent,
}: FrameCounterProps) {
  const paddedCurrent = (currentFrame + 1).toString().padStart(2, "0");
  const paddedTotal = totalFrames.toString().padStart(2, "0");

  return (
    <aside
      aria-label="Frame and timeline HUD"
      className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-20 pointer-events-none hidden sm:flex items-center gap-4"
    >
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-full glass-panel border border-white/10 font-mono text-xs">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span className="text-[10px] tracking-widest font-semibold uppercase">CANVAS SCRUB</span>
        </div>
        <span className="text-gray-600">|</span>
        <div className="text-gray-300">
          FRAME <span className="text-white font-bold">{paddedCurrent}</span> / {paddedTotal}
        </div>
        <span className="text-gray-600">|</span>
        <div className="text-gray-400">
          <span className="text-white font-semibold">{scrollPercent}%</span>
        </div>
      </div>

      {/* Mini Visual Scrubber Progress Bar */}
      <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden hidden md:block">
        <div
          className="h-full bg-emerald-400 rounded-full transition-all duration-75 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
    </aside>
  );
}
