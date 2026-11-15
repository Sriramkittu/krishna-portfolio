"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowUpRight, Linkedin, Download, FileText } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 pointer-events-none">
      {/* Brand logo / Monogram */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto group flex items-center gap-3 px-4 py-2 rounded-full glass-panel hover:bg-white/[0.08] transition-all duration-300 border border-white/10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="font-mono text-xs uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
          KRISHNA KUMAR S <span className="text-gray-500 mx-1">/</span> OPS &amp; AI
        </span>
      </motion.a>

      {/* Center Nav Pill */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel border border-white/10 shadow-lg shadow-black/40"
      >
        <a
          href="#scrolly-section"
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.07] transition-all"
        >
          Executive Story
        </a>
        <a
          href="#ai-workflows"
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.07] transition-all"
        >
          AI Workflows
        </a>
        <a
          href="#experience"
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.07] transition-all"
        >
          19-Yr Journey
        </a>
        <a
          href="#competencies"
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.07] transition-all"
        >
          Competencies
        </a>
        <a
          href="#contact"
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.07] transition-all"
        >
          Resume &amp; Contact
        </a>
      </nav>

      {/* Right Controls */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-auto flex items-center gap-3"
      >
        {/* Sound toggle button */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          aria-label={soundEnabled ? "Mute ambient audio" : "Enable ambient audio"}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full glass-panel hover:bg-white/[0.08] transition-all border border-white/10 text-gray-400 hover:text-white text-xs font-mono"
        >
          {soundEnabled ? (
            <>
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-3 bg-emerald-400 animate-pulse" />
                <span className="w-0.5 h-2 bg-emerald-400 animate-pulse delay-75" />
                <span className="w-0.5 h-3.5 bg-emerald-400 animate-pulse delay-150" />
              </div>
              <span className="text-[11px] text-emerald-400">AUDIO ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="text-[11px]">AUDIO OFF</span>
            </>
          )}
        </button>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/krishnakumarsatrasala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full glass-panel hover:bg-white/[0.08] transition-all border border-white/10 text-gray-300 hover:text-white text-xs font-mono"
        >
          <Linkedin className="w-3.5 h-3.5 text-blue-400" />
          <span>LinkedIn</span>
        </a>

        {/* View Resume CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View Resume</span>
        </a>
      </motion.div>
    </header>
  );
}
