import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, PenTool, Activity, ShieldCheck, Brain, ArrowUpRight, CheckCircle2, GitBranch, Upload, Bot } from 'lucide-react';
import SEO from '../components/SEO';
import DesignVsReality from '../components/DesignVsReality';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CTABanner from '../components/CTABanner';
import coreImage from '../assets/Tasree3 Core.png';
import processEditorImg from '../assets/process_editor.png';
import commandCenterImg from '../assets/command_center.png';
import processMiningImg from '../assets/process_mining_dashboard.png';
import aiAnalyticsImg from '../assets/ai_analytics.png';

const platformShowcaseList = [
  {
    id: "editor",
    label: "Process Editor",
    desc: "Process Editor is the canvas tool for manual or hybrid diagram construction (EPC, BPMN, VACD, FAD).",
    img: processEditorImg,
    route: "tasree3.ai/app/editor"
  },
  {
    id: "command",
    label: "Command Center",
    desc: "Command Center is the AI agent side panel inside that canvas tool, enabling text-to-diagram, voice generation, and document parsing.",
    img: commandCenterImg,
    route: "tasree3.ai/app/command-center"
  },
  {
    id: "mining",
    label: "Process Mining",
    desc: "Process Mining processes execution logs to display how processes operate in reality (discovering bottlenecks, throughput times, and conformance rates).",
    img: processMiningImg,
    route: "tasree3.ai/app/process-mining"
  },
  {
    id: "analytics",
    label: "AI Analytics",
    desc: "AI Analytics is the administrative portal to observe LLM usage, expenses, latency, and user-level token allocations across the organization.",
    img: aiAnalyticsImg,
    route: "tasree3.ai/app/ai-analytics"
  }
];

const modulesList = [
  {
    num: "1",
    title: "Process Management",
    desc: "Model and govern processes in value chains, EPC and BPMN on one shared repository.",
    path: "/features"
  },
  {
    num: "2",
    title: "Process Mining",
    desc: "Reconstruct the as-is flow from event logs, then audit it for conformance.",
    path: "/process-mining"
  },
  {
    num: "3",
    title: "Process Re-Engineering",
    desc: "Redesign the to-be and simulate the impact before you commit.",
    path: "/features"
  },
  {
    num: "4",
    title: "Process Intelligence",
    desc: "Monitor live processes with KPIs, conformance drift and AI alerts.",
    path: "/ai-features"
  },
  {
    num: "5",
    title: "Process Governance",
    desc: "Route designs for endorsement, sign-off and controlled, versioned publishing.",
    path: "/governance"
  }
];

export default function Home({ onRequestDemo }) {
  const [activeShowcaseTab, setActiveShowcaseTab] = React.useState('editor');
  
  const featuresList = [
    {
      icon: PenTool,
      title: "1. AI Text-to-Diagram Builder (Visual Canvas)",
      desc: "Translates standard text descriptions (SOPs) into fully structured EPC, BPMN, Org, or FAD process diagrams, complete with logical gateways and connections automatically.",
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: Brain,
      title: "2. AI Visual Flowchart Import (OCR & Migration)",
      desc: "Reads text from uploaded scans, PDF manuals, or whiteboard screenshots using OCR, and automatically reconstructs them as editable digital diagrams on your canvas.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: GitBranch,
      title: "3. AI-Driven Version Control & Releases",
      desc: "Instantly compares the newly approved model version against the previous version, auto-writing a change log explaining what changed (steps, styles, attachments) and what it means for your operations.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      icon: Upload,
      title: "4. AI Text Log Uploader (Process Mining)",
      desc: "Scans unstructured text journals or execution paragraphs and extracts structured event columns (case_id, activity, timestamp) to prepare them for process mapping.",
      color: "text-pink-600 bg-pink-50"
    },
    {
      icon: Bot,
      title: "5. AI Diagnostics & Chat Companion",
      desc: "Analyzes execution metrics (cycle times, variants, delays) to write text summaries of bottlenecks/rework loops, and provides an interactive sidebar analyst chat that uses live data as context.",
      color: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Process Mining & Governance Platform" 
        description="Bridge the gap between process design and real-world execution. Design workflows, enforce compliance policies, and analyze database logs in real time."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden text-left">
        {/* Glow Backgrounds */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-brand-purple/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Copywriting */}
            <div className="lg:col-span-5 space-y-6">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-fit"
              >
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit">
                  <Sparkles className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
                  Agentic Government Process Intelligence Platform
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900"
              >
                Bridge the Gap Between <span className="text-gradient animate-text-gradient">Process Design</span> and Real-World Execution
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium"
              >
                Design processes, enforce governance, analyze execution logs, and optimize operations with AI.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm focus:outline-none cursor-pointer"
                >
                  Request Enterprise Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 active:scale-[0.98] text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm focus:outline-none cursor-pointer"
                >
                  Watch Product Tour
                </button>
              </motion.div>
            </div>

            {/* Right Column: Split Screen Visual animation */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100/40 p-2.5 border border-slate-200/80 rounded-3xl shadow-xl relative"
              >
                {/* Visual Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/[0.02] to-brand-purple/[0.02] pointer-events-none rounded-3xl" />

                {/* Left Visual: Process Modeling Canvas */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col justify-between aspect-[1/1] overflow-hidden">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-widest">BPMN Editor Canvas</span>
                    <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                  </div>
                  
                  {/* Modeling nodes flow mockup */}
                  <div className="flex-grow flex items-center justify-center relative">
                    <svg className="w-full h-auto" viewBox="0 0 160 100" fill="none">
                      <rect x="5" y="35" width="40" height="25" rx="4" fill="#F8FAFC" stroke="#6366F1" strokeWidth="1.2" />
                      <text x="25" y="50" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Create PR</text>

                      <path d="M 45 47 L 65 47" stroke="#6366F1" strokeWidth="1" />

                      <polygon points="70,47 80,37 90,47 80,57" fill="#F8FAFC" stroke="#8B5CF6" strokeWidth="1.2" />
                      <text x="80" y="50" fill="#10B981" fontSize="7" fontWeight="extrabold" textAnchor="middle" className="font-outfit">?</text>

                      <path d="M 90 47 L 110 47" stroke="#8B5CF6" strokeWidth="1" />

                      <rect x="110" y="35" width="45" height="25" rx="4" fill="#F8FAFC" stroke="#8B5CF6" strokeWidth="1.2" />
                      <text x="132" y="50" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Sign PO</text>
                    </svg>
                  </div>

                  <div className="flex justify-between text-[8px] text-slate-400 font-bold pt-2 border-t border-slate-100">
                    <span>SLA: 2.0h</span>
                    <span>100% Compliant</span>
                  </div>
                </div>

                {/* Right Visual: Process Mining Dashboard */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col justify-between aspect-[1/1] overflow-hidden">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-widest">Mining Dashboard</span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  </div>
                  
                  {/* Dashboard metrics preview */}
                  <div className="flex-grow flex flex-col justify-center gap-3">
                    <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-left">
                      <span className="block text-[8px] text-slate-400 font-bold uppercase">Actual Cycle Duration</span>
                      <span className="text-sm font-extrabold text-red-500 font-outfit mt-0.5 block flex items-center gap-1">
                        4.2 Days
                        <span className="text-[7px] bg-red-100 text-red-600 px-1 rounded font-bold uppercase font-outfit">Anomaly</span>
                      </span>
                    </div>

                    <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-left">
                      <span className="block text-[8px] text-slate-400 font-bold uppercase">Rework Loop Rate</span>
                      <span className="text-sm font-extrabold text-slate-800 font-outfit mt-0.5 block">
                        22.4% Loopback
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[8px] text-slate-400 font-bold pt-2 border-t border-slate-100">
                    <span>Mined Log Rows: 84K</span>
                    <span className="text-red-500 font-bold">1 Bottleneck Alert</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By Enterprises Section */}
      <section className="py-10 border-t border-slate-200/60 bg-slate-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Trusted by leading operations leaders at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-6 opacity-60 grayscale contrast-125 text-slate-600">
            <span className="font-outfit font-extrabold text-xl select-none tracking-wider">MEERANA TECHNOLOGY</span>
          </div>
        </div>
      </section>

      {/* Statistics Section (With Specific User values) */}
      <section className="py-20 bg-white border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                <span className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">35%</span>
                <h4 className="text-base font-bold text-brand-indigo font-outfit mt-3">Reduction in Cycle Delays</h4>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                Average cycle latency reduction realized across critical paths through automated bottleneck identification.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                <span className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">100%</span>
                <h4 className="text-base font-bold text-brand-purple font-outfit mt-3">Audit Visibility</h4>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                Complete log reconstruction streams mapped automatically, leaving zero transaction details un-audited.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                <span className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">5x</span>
                <h4 className="text-base font-bold text-brand-emerald font-outfit mt-3">Faster Documentation</h4>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                BPMN generation speeds accelerated via conversational AI commands compared to manual drawing canvas editor routines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Five Modules. One AI-Native Core Section */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden text-left">
        {/* Decorative Background Blurs */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-indigo/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-purple/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copywriting & Modules List */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
                  Platform Core Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit leading-tight text-slate-900">
                  Five modules. <span className="text-gradient animate-text-gradient">One AI-native core</span>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                  Tasree is built as five connected modules that share one AI core—design, discover, improve, monitor and govern—each surrounded and amplified by native AI capabilities, not bolted on afterwards.
                </p>
              </div>

              {/* Module Stack */}
              <div className="space-y-4">
                {modulesList.map((mod) => (
                  <Link 
                    key={mod.num}
                    to={mod.path}
                    className="group flex gap-4 p-5 bg-white hover:bg-slate-50 border border-slate-200/60 hover:border-brand-indigo/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-brand-indigo/10 text-slate-400 group-hover:text-brand-indigo font-bold font-outfit text-sm border border-slate-100 group-hover:border-brand-indigo/20 transition-all duration-300">
                      {mod.num}
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-brand-indigo transition-colors font-outfit">
                          {mod.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-indigo group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {mod.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Image representation */}
            <div className="lg:col-span-6 relative">
              {/* Decorative Glow Effects behind the card */}
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-brand-indigo/[0.08] rounded-full blur-[80px] pointer-events-none animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-brand-purple/[0.06] rounded-full blur-[80px] pointer-events-none animate-pulse" />

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white border border-slate-200/80 rounded-3xl p-4 md:p-6 shadow-xl flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={coreImage} 
                  alt="Tasree3 Core Platform Architecture" 
                  className="w-full h-auto object-contain max-h-[500px] select-none transition-transform duration-500 hover:scale-[1.01]"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Platform Showcase Section */}
      <section className="py-24 bg-white border-b border-slate-200/60 relative text-left">
        {/* Glow behind the sections */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-purple/[0.03] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-brand-emerald/[0.02] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/80 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit">
              Live Platform Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight">
              Designed for Operations, <span className="text-gradient animate-text-gradient">Powered by AI</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Explore the core interfaces powering Tasree3's next-generation process editor, log mining, and operational analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Selector Tabs */}
            <div className="lg:col-span-5 space-y-4">
              {platformShowcaseList.map((tab) => {
                const isActive = activeShowcaseTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveShowcaseTab(tab.id)}
                    className={`w-full text-left p-6 border rounded-2xl transition-all duration-300 focus:outline-none cursor-pointer flex flex-col gap-2 relative ${
                      isActive 
                        ? 'bg-slate-50/80 border-brand-indigo/30 shadow-md shadow-brand-indigo/[0.02]' 
                        : 'bg-white hover:bg-slate-50/50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Left active marker strip */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabMarker"
                        className="absolute left-0 top-4 bottom-4 w-1 bg-brand-indigo rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <h3 className={`text-base font-bold font-outfit transition-colors duration-200 ${
                      isActive ? 'text-brand-indigo' : 'text-slate-800'
                    }`}>
                      {tab.label}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {tab.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Browser Mock Frame */}
            <div className="lg:col-span-7">
              <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-2.5 shadow-2xl relative overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-3 px-3 pb-2.5 border-b border-slate-200/50">
                  {/* macOS buttons */}
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
                  </div>
                  {/* Address Bar */}
                  <div className="flex-grow bg-white border border-slate-200/80 rounded-lg py-1 px-3 text-[10px] text-slate-400 font-medium select-none font-mono flex items-center gap-1.5 shadow-sm">
                    <span className="text-slate-300 font-sans">HTTPS://</span>
                    {platformShowcaseList.find(t => t.id === activeShowcaseTab).route}
                  </div>
                </div>

                {/* Screenshot Display Panel */}
                <div className="bg-white rounded-2xl overflow-hidden relative border border-slate-200/40 w-full h-auto">
                  <AnimatePresence mode="wait">
                    {platformShowcaseList.map((tab) => {
                      if (tab.id !== activeShowcaseTab) return null;
                      return (
                        <motion.img
                          key={tab.id}
                          src={tab.img}
                          alt={tab.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="w-full h-auto block select-none"
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-24 bg-slate-100/50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">AI Superpowers</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mt-2">AI-Powered Process Capabilities</h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-medium">
              Our core advantage is deep generative AI process intelligence. Explore the 5 core AI capabilities powering Tasree3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-slate-300 transition-all ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl w-fit ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold font-outfit text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Design vs Reality Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-outfit">Real-World Analysis</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Design Model vs. Real-World Logs</h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-medium">
              Static BPMN models do not show execution bypasses or rework loops. Interact with the simulation below to see what process mining uncovers.
            </p>
          </div>

          <DesignVsReality />
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-slate-100/50 border-t border-slate-200/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-indigo/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Trusted by Leading Operations</h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Global CTA Banner */}
      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}
