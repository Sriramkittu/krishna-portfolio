"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, TrendingUp, Cpu, Users } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Hero (0% - 15% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.94]);

  // Section 2: Standout 1 - Smarter Operations (22% - 48% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.28, 0.4, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.48], [60, -60]);

  // Section 3: Standout 2 - People, Process & AI at the Centre (52% - 78% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.58, 0.7, 0.78], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.78], [60, -60]);

  // Section 4: Transition to Resume (82% - 98% scroll)
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.88, 0.98], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.98], [40, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 md:p-16 max-w-7xl mx-auto w-full">
      {/* SECTION 1: 0% Scroll - Hero (Center) */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-gray-300">
            19+ Years Operational Leadership • Bengaluru, India
          </span>
        </motion.div>

        {/* Main Name / Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white drop-shadow-2xl mb-4 font-sans">
          Krishna Kumar S<span className="text-emerald-400">.</span>
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide max-w-3xl font-sans mb-3">
          Operations Manager <span className="text-gray-500">|</span> AI-Enabled Operations Transformation
        </p>

        <p className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider max-w-xl mb-8">
          TTK Services (GetFriday) • 70+ Team Members • Claude Skills Workflows • 370+ Global Clients
        </p>

        {/* Scroll Call to Action Indicator */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
              Scroll to Explore Executive Storyline
            </span>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-white animate-pulse" />
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2: STANDOUT 1 (30% Scroll - Left Aligned) */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start px-6 md:px-16"
      >
        <div className="max-w-xl text-left">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 font-mono text-xs mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>EXECUTIVE VISION</span>
          </div>

          {/* Standout 1 Main Headline with Gold Underline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            I build smarter operations that deliver{" "}
            <span className="relative inline-block text-white">
              exceptional
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-amber-400"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,8 Q50,1 98,7"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            business results.
          </h2>

          {/* Standout 1 Subtext: Clean, Muted & Readable */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-6">
            I bring <span className="text-white font-medium">people</span>,{" "}
            <span className="text-white font-medium">processes</span> and{" "}
            <span className="text-white font-medium">AI</span> together to improve productivity,
            elevate service quality, and build scalable operations.
          </p>

          {/* Quantified Executive Impact Pills */}
          <div className="flex flex-wrap gap-2.5">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-emerald-400">
              40% → 60% Productivity
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-gray-300">
              65% → 90% Quality Audits
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-gray-300">
              70+ Members Across Shifts
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-gray-300">
              370+ Global Clients
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: STANDOUT 2 (60% Scroll - Right Aligned) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end px-6 md:px-16"
      >
        <div className="max-w-xl text-left md:text-right">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 font-mono text-xs mb-4 md:ml-auto">
            <Cpu className="w-3.5 h-3.5" />
            <span>— ABOUT ME / OPERATIONAL PHILOSOPHY</span>
          </div>

          {/* Standout 2 Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Growing operations with{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-white bg-clip-text text-transparent">
              people, process and AI
            </span>{" "}
            at the centre.
          </h2>

          {/* Standout 2 Paragraph 1: Muted, Light Font */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-4">
            I have spent nearly two decades building operations that grow with the business.
            My work sits where people, process and technology meet: designing how work flows,
            leading the teams that deliver it, and keeping quality strong as volume increases.
          </p>

          {/* Standout 2 Paragraph 2: Muted, Light Font */}
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light mb-6">
            Today I focus on <span className="text-white font-medium">AI-enabled transformation</span>.
            I bring automation and intelligent tools into everyday operations so teams are more
            productive and clients receive a faster, more consistent service.
          </p>

          {/* Standout Capability Badges */}
          <div className="flex flex-wrap md:justify-end gap-2.5">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-purple-300">
              Claude Skills Workflows
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-gray-300">
              Human-in-the-Loop Validation
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-gray-300">
              SOP Architecture
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-emerald-400">
              2 Days → 4 Hrs Turnaround
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: 90% Scroll - Transition (Center / Bottom) */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-4">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-gray-300">
            Executive Narrative Complete
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Explore AI Workflows &amp; Career History
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mb-6 font-light">
          Inspect the live Claude Skills transformation architectures, the 19-year leadership journey at TTK Services, and full executive competencies below.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs font-mono text-gray-400"
        >
          <ChevronDown className="w-5 h-5 text-emerald-400" />
          <span>PROCEED TO ARCHIVE &amp; CASE STUDIES</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
