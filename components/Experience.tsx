"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle,
  Building,
  ChevronRight,
} from "lucide-react";

interface Role {
  title: string;
  period: string;
  company: string;
  location: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

const roles: Role[] = [
  {
    title: "Operations Manager",
    period: "March 2019 – September 2026",
    company: "TTK Services Private Limited – GetFriday Virtual Assistant Services",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Led a 70+ member virtual assistant operation across day and night shifts, managing three Team Leaders and driving productivity, quality, and SLA adherence.",
      "Improved operational productivity from 40% to 60% through stronger KPI monitoring, performance management, and workflow execution.",
      "Increased quality performance from 65% to 90% by introducing a comprehensive quality audit process covering 80% of completed client tasks.",
      "Oversaw service delivery for 370+ active global clients and an average monthly volume of 400+ client tasks, meeting stringent SLAs and turnaround times.",
      "Directly managed 25–35 high-value client accounts, conducting Quarterly Business Reviews (QBRs) to review performance and strengthen client retention.",
      "Established a structured first-three-month monitoring process for new clients with defined feedback touchpoints to identify service friction early.",
      "Introduced Root Cause Analysis (RCA) for client cancellations and implemented incident reporting with SLA tracking to support corrective actions.",
      "Spearheaded workforce planning, onboarding, coaching, and partnered closely with HR on screening, interviews, and hiring recommendations.",
    ],
    metrics: [
      { label: "Team Size", value: "70+ Members" },
      { label: "Productivity", value: "40% → 60%" },
      { label: "Quality Audit", value: "65% → 90%" },
      { label: "Active Clients", value: "370+ Global" },
    ],
  },
  {
    title: "Senior Team Lead – Customer Success Manager",
    period: "April 2017 – February 2019",
    company: "TTK Services Private Limited – GetFriday",
    location: "Bengaluru, India",
    highlights: [
      "Managed key global client relationships, identified new project opportunities, and drove retention programs for at-risk client accounts.",
      "Developed standard operating procedures (SOPs) for recurring client processes, driving consistency across diverse assistant engagements.",
      "Collaborated cross-functionally with Sales and Operations to ensure seamless client transitions and rapid issue escalation resolution.",
    ],
  },
  {
    title: "Team Lead – Operations",
    period: "January 2013 – March 2017",
    company: "TTK Services Private Limited – GetFriday",
    location: "Bengaluru, India",
    highlights: [
      "Ran day-to-day European-region operations, managing dedicated assistant pods and shift handovers.",
      "Held fortnightly operational reviews with high-demand clients and executive stakeholders to evaluate turnaround accuracy.",
      "Audited daily transactions for shift-based clients and designed training modules for incoming operations hires.",
    ],
  },
  {
    title: "Subject Matter Expert (SME)",
    period: "April 2009 – December 2012",
    company: "TTK Services Private Limited – GetFriday",
    location: "Bengaluru, India",
    highlights: [
      "Monitored 4–5 hours of daily live transactions across calls, emails, and web chats, maintaining rigorous compliance standards.",
      "Delivered monthly one-on-one coaching and facilitated calibration sessions and Performance Improvement Plans (PIPs) across European and Asian shifts.",
    ],
  },
  {
    title: "Remote Virtual Assistant",
    period: "September 2007 – March 2009",
    company: "TTK Services Private Limited – GetFriday",
    location: "Bengaluru, India",
    highlights: [
      "Delivered hands-on client support managing executive emails, scheduling, travel logistics, data entry, and comprehensive web research.",
      "Achieved consistent top-tier client satisfaction ratings that accelerated advancement into supervisory and coaching roles.",
    ],
  },
];

export default function Experience() {
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const activeRole = roles[activeRoleIndex];

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER PROGRESSION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              19-Year Leadership Journey<span className="text-emerald-400">.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-light">
            An unbroken 19+ year progression at TTK Services (GetFriday) — from frontline virtual assistant delivery to operations leadership of 70+ professionals.
          </p>
        </div>

        {/* Roles Layout: Interactive Timeline on Left, Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline selector */}
          <div className="lg:col-span-5 space-y-3">
            {roles.map((r, idx) => (
              <button
                key={r.title + r.period}
                onClick={() => setActiveRoleIndex(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                  activeRoleIndex === idx
                    ? "bg-white/[0.08] border-white/30 shadow-lg shadow-white/5"
                    : "glass-panel border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeRoleIndex === idx ? "bg-emerald-400 animate-pulse" : "bg-gray-600"
                      }`}
                    />
                    <span className="font-mono text-xs text-gray-400">{r.period}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono truncate max-w-xs">
                    {r.company}
                  </p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeRoleIndex === idx
                      ? "text-emerald-400 translate-x-1"
                      : "text-gray-600 group-hover:text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Detailed Role Inspection */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeRole.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-10 rounded-3xl glass-panel-glow border border-white/15"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20">
                  {activeRole.period}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {activeRole.location}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {activeRole.title}
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-6 flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>{activeRole.company}</span>
              </p>

              {/* Metrics if present */}
              {activeRole.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/50 border border-white/10 mb-8">
                  {activeRole.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-sm md:text-base font-bold text-white">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet highlights: Comfortable font-light text */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Key Responsibilities &amp; Impact
                </h4>
                {activeRole.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300 font-light leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
