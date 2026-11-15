"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  GraduationCap,
  CheckCircle2,
  FileText,
  Languages,
  ShieldCheck,
  Users2,
  Clock,
  Layers,
} from "lucide-react";

export default function About() {
  const stats = [
    { label: "Tenure at TTK Services", value: "19+ Yrs" },
    { label: "Team Members Led", value: "70+" },
    { label: "Active Global Clients", value: "370+" },
    { label: "Quality Audit Benchmark", value: "90%" },
  ];

  const pillars = [
    {
      title: "Multi-Shift Workforce Orchestration",
      description:
        "Directly managed 70+ virtual assistants across day and night shifts, coordinating three Team Leaders to maintain continuous 24/7 service availability for European, Asian, and American time zones.",
      icon: <Users2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: "Quality Governance & 80% Task Auditing",
      description:
        "Introduced a structured auditing framework inspecting 80% of all completed client tasks, elevating organizational quality performance from 65% to a sustained 90% benchmark.",
      icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
    },
    {
      title: "Root Cause Analysis & Churn Mitigation",
      description:
        "Formulated formal incident reporting, SLA breach tracking, and root cause analysis (RCA) on client cancellations to enact immediate corrective action and safeguard client retention.",
      icon: <Clock className="w-4 h-4 text-amber-400" />,
    },
    {
      title: "SOP Architecture & Human-in-the-Loop AI",
      description:
        "Transformed repetitive client procedures into standardized SOPs, embedding Claude Skills with mandatory human-in-the-loop review to guarantee zero-defect execution.",
      icon: <Layers className="w-4 h-4 text-teal-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPERATIONAL ARCHITECTURE &amp; FOUNDATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Operational Excellence at Scale<span className="text-emerald-400">.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-light">
            19+ years of single-organisation leadership across global virtual assistant operations, managed services, and human-in-the-loop AI integration.
          </p>
        </div>

        {/* Full-Width Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl glass-panel border border-white/10 text-center flex flex-col justify-between"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Balanced 2-Column Split: Operational Pillars on Left, Academics & Languages on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Core Operational Delivery Pillars (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl glass-panel-glow border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>EXECUTIVE METHODOLOGY &amp; DELIVERY PILLARS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                Systemic Process Governance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-medium text-white mb-2">
                        {p.icon}
                        <span>{p.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-gray-400">
              <span>BENCHMARK: 90% QUALITY AUDIT</span>
              <span className="text-emerald-400">HUMAN-IN-THE-LOOP VALIDATED</span>
            </div>
          </div>

          {/* Right Column: Academic Foundation & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Education Card */}
            <div className="p-8 rounded-3xl glass-panel-glow border border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                Bachelor&apos;s Degree in Computer Science
              </h4>
              <p className="text-gray-400 text-xs font-mono mb-4">
                University of Madras <span className="text-gray-600">•</span> 1999 – 2002 (Correspondence Programme)
              </p>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Grounding in core computer science, software logic, and computational systems — the technical bridge that today enables rapid adoption of Claude Skills, prompt architecture, and automated workflow engineering.
              </p>
            </div>

            {/* Linguistic Proficiency Card */}
            <div className="p-8 rounded-3xl glass-panel border border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-purple-400 uppercase mb-3">
                <Languages className="w-4 h-4" />
                <span>LINGUISTIC PROFICIENCY</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="font-bold text-white text-sm mb-1">Telugu</div>
                  <div className="text-emerald-400 text-[11px]">Full Professional</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="font-bold text-white text-sm mb-1">English</div>
                  <div className="text-gray-400 text-[11px]">Professional Working</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="font-bold text-white text-sm mb-1">Hindi</div>
                  <div className="text-gray-400 text-[11px]">Professional Working</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="font-bold text-white text-sm mb-1">Kannada</div>
                  <div className="text-gray-400 text-[11px]">Professional Working</div>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-gray-400">READY FOR LEADERSHIP ROLES</div>
                <div className="text-sm font-bold text-white">Review Detailed Credentials</div>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
