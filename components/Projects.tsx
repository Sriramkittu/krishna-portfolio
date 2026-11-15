"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  X,
  Cpu,
  Eye,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

interface AIWorkflow {
  id: string;
  title: string;
  tagline: string;
  category: string;
  timeline: string;
  description: string;
  longDescription: string;
  businessImpact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const workflows: AIWorkflow[] = [
  {
    id: "website-audit-workflow",
    title: "AI Website Audit Workflow",
    tagline: "Claude Skills-Assisted Technical Assessment",
    category: "Claude Skills / Sales Enablement",
    timeline: "Nov 2024 – June 2026",
    description:
      "Built an AI-assisted audit skill enabling the Sales team to generate comprehensive, evidence-based client assessments, slashing turnaround from 1–2 days to 4–5 hours.",
    longDescription:
      "Engineered and deployed a bespoke Claude Skill leveraging structured prompt engineering and human-in-the-loop validation. The workflow analyzes digital presence, identifies operational bottlenecks, and drafts structured audit dossiers with verifiable research citations. This eliminated back-and-forth dependencies between technical and sales teams.",
    businessImpact:
      "Reduced assessment turnaround from 48 hours to under 5 hours, drastically shortening sales response time and increasing prospect engagement rates.",
    tags: ["Claude Skills", "Prompt Engineering", "Sales Enablement", "SOP Integration", "Human-in-the-Loop"],
    metrics: [
      { label: "Turnaround Time", value: "1-2 Days → 4-5 Hrs" },
      { label: "Audit Accuracy", value: "Human-Validated" },
      { label: "Team Adoption", value: "Full Sales Team" },
    ],
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "sales-proposal-workflow",
    title: "Automated Sales Proposal Engine",
    tagline: "Autonomous Same-Day Proposal Generation",
    category: "AI Automation / Revenue Ops",
    timeline: "Nov 2024 – June 2026",
    description:
      "Developed an AI-assisted proposal skill that empowers Sales Associates to draft custom proposals independently, enabling same-day turnaround across 150+ monthly enquiries.",
    longDescription:
      "Designed an intelligent proposal drafting framework that translates client inquiry notes directly into structured, SLA-mapped service agreements. Deployed across approximately 50% of the company's 150+ monthly incoming client enquiries, completely removing the typical 1-2 day consultative review delays while maintaining strict pricing governance.",
    businessImpact:
      "Achieved same-day proposal dispatch for 50% of 150+ monthly client inquiries, dramatically improving conversion velocity and sales capacity.",
    tags: ["Claude Skills", "Sales Automation", "SLA Mapping", "SOP Standardisation", "Revenue Ops"],
    metrics: [
      { label: "Delivery Speed", value: "Same-Day Delivery" },
      { label: "Monthly Volume", value: "150+ Enquiries" },
      { label: "Workflow Coverage", value: "50% of Pipeline" },
    ],
    accentColor: "from-purple-500/20 to-indigo-500/10",
  },
  {
    id: "airbnb-lead-insights",
    title: "Airbnb Insights & 30-Day Roadmaps",
    tagline: "Rapid Market Intelligence & Action Plans",
    category: "Growth Ops / Market Intelligence",
    timeline: "2025 – 2026",
    description:
      "Formulated an AI-assisted lead-generation workflow delivering ~30-minute property assessments with market research and 30-day operational roadmaps for vacation rental hosts.",
    longDescription:
      "Engineered an automated research pipeline that ingests vacation rental property data, evaluates occupancy and pricing dynamics against competitive benchmarks, identifies operational friction (guest response times, listing optimization, maintenance management), and produces an actionable 30-day improvement roadmap.",
    businessImpact:
      "Delivered high-value, research-backed roadmaps in ~30 minutes, turning cold inbound inquiries into highly qualified service contracts.",
    tags: ["Market Research", "Prompt Architecture", "Claude Skills", "SOP Formulation", "Growth Strategy"],
    metrics: [
      { label: "Assessment Time", value: "~30 Minutes" },
      { label: "Roadmap Scope", value: "30-Day Blueprint" },
      { label: "Output Quality", value: "Evidence-Based" },
    ],
    accentColor: "from-amber-500/20 to-rose-500/10",
  },
  {
    id: "ntnt-retention-framework",
    title: "NTNT (No Task, No Time) Framework",
    tagline: "Dormant Account Diagnostics & Recovery",
    category: "Client Retention / Churn Diagnostics",
    timeline: "2024 – 2026",
    description:
      "Devised an analytical framework to investigate inactive client accounts across 370+ active relationships, isolating root causes like Offering Misalignment and Disengagement Risk.",
    longDescription:
      "Created an early-warning retention framework to identify and categorize dormant accounts across GetFriday's 370+ active clients. By diagnosing whether inactive clients suffered from scope mismatch, shifting internal priorities, or communication gaps, operations and account managers executed targeted recovery conversations.",
    businessImpact:
      "Significantly mitigated client churn and rescued dormant high-value accounts through structured root-cause interventions and realignment QBRs.",
    tags: ["Root Cause Analysis", "Client Retention", "Churn Diagnostics", "Incident Tracking", "Account Recovery"],
    metrics: [
      { label: "Client Portfolio", value: "370+ Global Accounts" },
      { label: "Diagnostic Target", value: "Zero Unchecked Churn" },
      { label: "Intervention Mode", value: "Targeted Recovery" },
    ],
    accentColor: "from-blue-500/20 to-cyan-500/10",
  },
];

export default function Projects() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<AIWorkflow | null>(null);

  return (
    <section id="ai-workflows" className="relative py-32 px-6 md:px-12 bg-black text-white">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI-ENABLED PROCESS ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              AI Transformations<span className="text-emerald-400">.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-light">
            Real-world operational transformations designed with Claude Skills, structured prompt engineering, and human-in-the-loop governance.
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflows.map((wf, index) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl glass-panel-glow p-8 md:p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden"
            >
              {/* Dynamic Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${wf.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    {wf.category}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{wf.timeline}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {wf.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-4">{wf.tagline}</p>

                {/* Description: Light & Comfortable */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  {wf.description}
                </p>

                {/* Metrics Pills */}
                <div className="grid grid-cols-3 gap-2 py-4 px-4 rounded-2xl bg-black/40 border border-white/5 mb-6">
                  {wf.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white truncate">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {wf.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link to Modal */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedWorkflow(wf)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Architecture &amp; SOP</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <span className="text-xs font-mono text-gray-500">PROVEN DEPLOYMENT</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedWorkflow && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/20 p-8 md:p-12 overflow-y-auto max-h-[90vh] bg-neutral-950 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedWorkflow(null)}
                aria-label="Close details dialog"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
                <span>{selectedWorkflow.category}</span>
                <span>•</span>
                <span>{selectedWorkflow.timeline}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                {selectedWorkflow.title}
              </h3>
              <p className="text-base text-emerald-400 font-mono mb-6">
                {selectedWorkflow.tagline}
              </p>

              <div className="space-y-6 text-gray-300 leading-relaxed font-light mb-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Implementation &amp; Workflow Architecture
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    {selectedWorkflow.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Operational &amp; Business Impact
                  </h4>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-light">
                      {selectedWorkflow.businessImpact}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                    Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedWorkflow.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center"
                      >
                        <div className="text-[11px] font-mono text-gray-400 mb-1">{m.label}</div>
                        <div className="text-sm font-bold text-white">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedWorkflow.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedWorkflow(null)}
                  className="px-5 py-2 rounded-full bg-white text-black text-xs font-mono font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
