"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  Users,
  Target,
  Wrench,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface CompetencyCategory {
  title: string;
  icon: React.ReactNode;
  competencies: { name: string; tag: string; description: string }[];
}

const categories: CompetencyCategory[] = [
  {
    title: "AI & Process Transformation",
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    competencies: [
      {
        name: "Claude Skills Development",
        tag: "Specialized",
        description: "Authoring domain-specific Claude Skills to automate complex audit and proposal preparation tasks.",
      },
      {
        name: "Prompt Engineering & Architecture",
        tag: "Core Focus",
        description: "Structured system prompting, few-shot conditioning, and context management for zero-hallucination operational outputs.",
      },
      {
        name: "Human-in-the-Loop (HITL) Validation",
        tag: "Governance",
        description: "Strict quality control frameworks verifying AI-generated outputs prior to client dispatch.",
      },
      {
        name: "SOP Standardization & Automation",
        tag: "Engineering",
        description: "Translating recurring operational procedures into modular, machine-assisted workflows.",
      },
    ],
  },
  {
    title: "Operations & Service Delivery",
    icon: <Briefcase className="w-4 h-4 text-purple-400" />,
    competencies: [
      {
        name: "Operations & Workforce Management",
        tag: "Scale",
        description: "Running multi-shift 70+ personnel operations across European, Asian, and Americas time zones.",
      },
      {
        name: "SLA & KPI Management",
        tag: "Precision",
        description: "Rigorous adherence to contracted turnaround times, resolution SLAs, and client task milestones.",
      },
      {
        name: "Turnaround Time (TAT) Optimization",
        tag: "Velocity",
        description: "Continuous bottleneck elimination cutting delivery cycles from days to hours across deliverables.",
      },
      {
        name: "Operational Excellence",
        tag: "Standard",
        description: "Institutionalizing Lean operational cadences, incident logs, and corrective action roadmaps.",
      },
    ],
  },
  {
    title: "People & Performance",
    icon: <Users className="w-4 h-4 text-blue-400" />,
    competencies: [
      {
        name: "Team Leadership (70+ Members)",
        tag: "Leadership",
        description: "Managing three Team Leaders and multiple shift pods with high morale and retention.",
      },
      {
        name: "Productivity Lift (40% → 60%)",
        tag: "Proven Impact",
        description: "Engineered KPI monitoring and structured coaching to generate a 50% relative boost in output.",
      },
      {
        name: "Quality Auditing (65% → 90%)",
        tag: "Quality",
        description: "Constructed an audit engine reviewing 80% of completed client tasks with feedback loops.",
      },
      {
        name: "Coaching & Knowledge Transfer",
        tag: "Mentorship",
        description: "4-week structured assistant handovers and tailored performance improvement plans (PIPs).",
      },
    ],
  },
  {
    title: "Client & Business Operations",
    icon: <Target className="w-4 h-4 text-amber-400" />,
    competencies: [
      {
        name: "Client Retention & Recovery",
        tag: "Retention",
        description: "Deploying the NTNT framework and root-cause interventions to rescue high-value dormant accounts.",
      },
      {
        name: "Quarterly Business Reviews (QBRs)",
        tag: "Executive",
        description: "Conducting strategic performance reviews with 25–35 high-value global accounts.",
      },
      {
        name: "Escalation & Root Cause Analysis",
        tag: "Governance",
        description: "Detailed incident reviews and SLA penalty mitigation through collaborative recovery plans.",
      },
      {
        name: "First 90-Day Client Onboarding",
        tag: "Lifecycle",
        description: "Proactive milestone monitoring to eliminate early churn during initial service adoption.",
      },
    ],
  },
];

const marqueeKeywords = [
  "OPERATIONS MANAGEMENT",
  "CLAUDE SKILLS",
  "70+ TEAM LEADERSHIP",
  "PROMPT ENGINEERING",
  "HUMAN-IN-THE-LOOP",
  "40% → 60% PRODUCTIVITY",
  "65% → 90% QUALITY AUDIT",
  "ROOT CAUSE ANALYSIS",
  "SLA & KPI EXCELLENCE",
  "SOP ARCHITECTURE",
  "QBR REVIEWS",
  "BPO & MANAGED SERVICES",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="competencies" className="relative py-28 bg-black text-white overflow-hidden border-t border-white/5">
      {/* Infinite Marquee Ticker */}
      <div className="relative w-full py-4 bg-white/[0.02] border-y border-white/10 mb-20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeKeywords.concat(marqueeKeywords).map((word, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-6 font-mono text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>EXECUTIVE EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Core Competencies<span className="text-emerald-400">.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-light">
            A battle-tested synergy of operational discipline, multi-tiered team leadership, and modern AI enablement.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${
                activeTab === idx
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] font-semibold"
                  : "glass-panel text-gray-400 hover:text-white border-white/10 hover:border-white/20"
              }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories[activeTab].competencies.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 md:p-8 rounded-2xl glass-panel-glow border border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {skill.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tooling Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-gray-400 uppercase tracking-wider">
            PRIMARY OPERATING TOOLS:
          </span>
          <div className="flex flex-wrap gap-3 text-white">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Claude &amp; Claude Skills</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Odoo CRM</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Task Management Systems</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Microsoft Office Suite</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Prompt Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
