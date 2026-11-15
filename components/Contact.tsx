"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Printer,
  ExternalLink,
  Sparkles,
  Download,
  Building2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "sriramkittu@gmail.com";
  const phone = "+91 9916216641";
  const rawPhone = "9916216641";
  const linkedInUrl = "https://linkedin.com/in/krishnakumarsatrasala";
  const location = "Bengaluru, Karnataka, India";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(rawPhone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-black text-white border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXECUTIVE RESUME &amp; DIRECT CONNECT</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              Connect With Krishna<span className="text-emerald-400">.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF Resume</span>
            </button>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full glass-panel hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Executive Profile Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-panel-glow border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl glass-panel-glow border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${rawPhone}`}
                    className="text-base font-bold text-white hover:text-purple-300 transition-colors font-mono"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  Operational Base
                </div>
                <div className="text-base font-bold text-white">{location}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">
                  Open to Hybrid / Remote Leadership Worldwide
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                    Professional Network
                  </div>
                  <div className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs font-mono">
                    in/krishnakumarsatrasala
                  </div>
                </div>
              </div>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 text-xs font-mono flex items-center gap-1 transition-all"
              >
                <span>Visit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Executive Dossier Summary (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl glass-panel-glow border border-white/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  EXECUTIVE PROFILE AT A GLANCE
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20">
                  Active Candidacy
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Krishna Kumar S
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-6">
                Operations Manager <span className="text-gray-600">|</span> AI-Enabled Operations Transformation
              </p>

              <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed mb-8">
                <p>
                  19+ years of single-organisation leadership at TTK Services (GetFriday) spanning BPO,
                  virtual assistant management, and high-volume client delivery for 370+ global accounts.
                </p>
                <p>
                  Pioneered production adoption of Claude Skills and structured prompt engineering to streamline
                  business development, automated proposal generation, and client retention audits while enforcing
                  rigorous human-in-the-loop oversight.
                </p>
              </div>

              {/* Core Strengths Checklist: Clean font */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>70+ Member Multi-Shift Teams</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>40% → 60% Productivity Surge</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>65% → 90% Quality Audit Coverage</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Claude Skills Workflow Architect</span>
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-gray-400">
                Direct Contact: <span className="text-white font-semibold">{phone}</span>
              </div>
              <a
                href={`mailto:${email}?subject=Executive%20Opportunity%20-%20Krishna%20Kumar%20S`}
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
