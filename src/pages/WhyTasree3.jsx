import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Sparkles, AlertTriangle, CheckCircle2, Layers, Zap, 
  Bot, DollarSign, TrendingUp, Sliders, Lock, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function WhyTasree3({ onRequestDemo }) {
  const sellingPoints = [
    {
      icon: Layers,
      title: "All-in-One Process Intelligence",
      desc: "Stop stitching together fragmented tools. Tasree3 brings process design (BPMN, EPC, VACD), automated log mining, context-aware AI, and enterprise compliance workflow reviews under one roof. Less complexity, zero data silos, and a single source of truth.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      icon: Zap,
      title: "Collaborative Speed & Zero-Lag Performance",
      desc: "Built on a modern tech stack with WebSockets. Tasree3 enables teams to co-model diagrams, track concurrent user edits, and view cursor movements in real-time. No delays, no saving conflicts—just multiplayer collaboration.",
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      icon: Bot,
      title: "The Context-Aware AI Layer",
      desc: "Move beyond basic chatbots. Tasree3 features a smart AI Command Center that understands your active canvas. Build flows from text, parse raw PDFs/DOCX guides into diagrams, query specific elements with @ mentions, and receive predictive bottleneck alerts based on actual event data.",
      color: "text-purple-600 bg-purple-50 border-purple-100"
    },
    {
      icon: CheckCircle2,
      title: "Continuous Alignment (Conformance Checking)",
      desc: "What you design is rarely what happens in practice. Tasree3 connects your approved models with real-world event logs in one click. Instantly check conformance rates, highlight deviation paths, identify average delays, and download audit-ready Excel reports.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      icon: DollarSign,
      title: "Cost Observability & Governance",
      desc: "Traditional process platforms charge astronomical flat licensing fees. Tasree3 provides full visibility into your operations, featuring a built-in AI Cost Dashboard that tracks token counts and consumption analytics. Switch models, optimize budgets, and align expenses with real usage.",
      color: "text-pink-600 bg-pink-50 border-pink-100"
    }
  ];

  return (
    <>
      <SEO 
        title="Why Tasree3 - Unified Process Intelligence & Governance Platform" 
        description="Discover why leading organizations choose Tasree3 over traditional tools. Consolidate process modeling, event-log mining, and AI-driven governance."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 overflow-hidden text-left bg-slate-50/50">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-brand-purple/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-indigo animate-pulse" />
              Why Tasree3?
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900">
              Bridge the Gap Between <span className="text-gradient animate-text-gradient">Process Design</span> and Operational Reality
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-semibold max-w-3xl">
              Tasree3 combines Collaborative Modeling, AI-Driven Process Mining, and Cost Governance in one seamless, high-speed platform.
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            
            {/* The Problem Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-red-100 rounded-3xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] rounded-full blur-2xl" />
              <div className="space-y-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl w-fit border border-red-100">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-outfit">The Problem with Traditional Tools</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Traditional enterprise transformation is broken. Teams model processes in one tool, mine operational logs in another, and run manual audits that are out of date the moment they are printed. This fragmentation creates data silos, costs hundreds of thousands in licensing fees, and slows down agility.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-red-500 font-bold font-outfit">
                <span>&bull; Fragmented Tools</span>
                <span>&bull; Stale Audits</span>
                <span>&bull; Excessive Licensing Fees</span>
              </div>
            </motion.div>

            {/* The Solution Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-emerald/[0.02] rounded-full blur-2xl" />
              <div className="space-y-4">
                <div className="p-3 bg-emerald-50 text-brand-emerald rounded-xl w-fit border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-outfit">The Tasree3 Answer</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Tasree3 is the unified Process Intelligence platform. Design workflows, analyze real event data, audit compliance, and leverage context-aware AI agents in a single, high-speed, collaborative interface. Achieve multiplayer co-modeling and deep log discovery without boundaries.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-emerald font-bold font-outfit">
                <span>&bull; Single Unified Source</span>
                <span>&bull; Real-Time Discovery</span>
                <span>&bull; Context-Aware AI Copilot</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Selling Points Grid Section */}
      <section className="py-24 bg-white relative border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">Core Value Propositions</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">Why Choose Tasree3?</h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              We replace complex, disjointed process software with a fast, modern multiplayer platform powered by native AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellingPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className={`p-3.5 rounded-xl w-fit border ${point.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-outfit text-slate-900">{point.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{point.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Comparison Matrix */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-indigo/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-outfit">Audience Value Alignment</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900">Why Different Teams Prefer Tasree3</h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Whether you are managing company financials, drawing layout diagrams, or securing cloud instances, Tasree3 is built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* C-Suite Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-outfit block">Executive Leaders</span>
                    <h3 className="text-lg font-bold text-slate-800 font-outfit">For C-Suite & Business ROI</h3>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Consolidated Subscriptions</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Replace 3 to 4 separate tool subscriptions (modeling tools, mining suites, and AI engines) with a single platform.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Accelerated Onboarding</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Reduced consulting dependency. The intuitive AI assistant guides teams to generate and document processes, reducing implementation times by up to 50%.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Transparent Cost Control</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Track AI usage, costs, and feature distributions across departments directly from the admin panel.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl border border-purple-100">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-outfit block">Operations Managers</span>
                    <h3 className="text-lg font-bold text-slate-800 font-outfit">For Operations & Analysts</h3>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-purple-50 border border-purple-100 text-purple-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Multi-Standard Versatility</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Draw EPC, BPMN, VACD, FAD, and Org Charts in the same workspace. No standard lock-ins.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-purple-50 border border-purple-100 text-purple-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Turn Text to Process</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Simply upload process guidelines or SOP documents (PDF/DOCX) and watch the AI extract flow structures and timestamps instantly.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-purple-50 border border-purple-100 text-purple-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Multiplayer Canvas</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Run interactive brainstorming workshops with live co-editing and synchronized node arrangements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IT & Security Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-outfit block">IT & Security Administrators</span>
                    <h3 className="text-lg font-bold text-slate-800 font-outfit">For IT & Security Admins</h3>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Secure Tenant Isolation</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Multi-tenant database architecture ensures organization data is isolated via scoped security filters.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Governance Approvals</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold font-semibold font-semibold">Control who can submit, review, and approve models. Build an immutable audit trail of every change.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="p-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full mt-0.5"><Check className="w-3 h-3" /></div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Custom Integration Control</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold font-semibold font-semibold">Configure custom SMTP mailboxes, license controls, auto-logout thresholds, and corporate SSO/OAuth domains.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}
