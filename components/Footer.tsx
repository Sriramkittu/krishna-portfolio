"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 bg-black text-gray-500 border-t border-white/5 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-gray-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>BENGALURU, INDIA</span> <span className="text-gray-600">•</span> {time || "08:30:00 AM"} IST
          </span>
        </div>

        {/* Center: Title */}
        <div className="text-center text-gray-400">
          <span className="text-white font-medium">Krishna Kumar S</span> — Operations Manager | AI Operations Transformation
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/10"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 gap-4">
        <div>&copy; {new Date().getFullYear()} Krishna Kumar S. All rights reserved.</div>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/krishnakumarsatrasala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a href="mailto:sriramkittu@gmail.com" className="hover:text-gray-400">
            sriramkittu@gmail.com
          </a>
          <span className="text-gray-600">+91 9916216641</span>
        </div>
      </div>
    </footer>
  );
}
