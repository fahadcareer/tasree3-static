import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Search, Cpu, Scale, RefreshCw, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 0,
    title: "1. Data Ingestion",
    short: "Log Ingestion",
    icon: Database,
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/10",
    desc: "Tasree3 connects directly to your enterprise database systems (SAP, Salesforce, Oracle, SQL) to extract process event logs (timestamp, case ID, activity name) securely without impacting active system performance.",
    kpi: "30+ Out-of-the-box DB Connectors"
  },
  {
    id: 1,
    title: "2. Process Mining",
    short: "Discovery",
    icon: Search,
    color: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/10",
    desc: "Our high-speed ingestion engine parses logs to reconstruct the actual flows. It immediately visualizes hidden paths, task repetitions, bottleneck durations, and process variants that deviate from standard designs.",
    kpi: "45% Bottleneck Speed Detection"
  },
  {
    id: 2,
    title: "3. AI Operations & Analytics",
    short: "Diagnostics",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/10",
    desc: "The AI Core compares the mined flows against standard BPMN models, executing conformance auditing, root cause analysis of delays, and predictive variance forecasting using machine learning.",
    kpi: "98% Anomaly Detection Accuracy"
  },
  {
    id: 3,
    title: "4. Automated Governance",
    short: "Risk Controls",
    icon: Scale,
    color: "from-pink-500 to-emerald-500",
    shadow: "shadow-pink-500/10",
    desc: "Define process governance policies and rule boundaries. If a transaction deviates (e.g. bypassing PO approval), Tasree3 alerts risk officers, registers audit logs, and blocks unauthorized transactions in real time.",
    kpi: "SOC2 & HIPAA Continuous Audits"
  },
  {
    id: 4,
    title: "5. Optimization Loop",
    short: "Refinement",
    icon: RefreshCw,
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/10",
    desc: "Apply AI recommendations directly onto the process model. Update the canvas and push changes down to live operational lines, initiating a feedback loop that continually monitors process efficiency gains.",
    kpi: "Average 300% ROI Realized"
  }
];

export default function InteractiveDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
      {/* Selector Side */}
      <div className="lg:col-span-5 space-y-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all focus:outline-none cursor-pointer ${
                isActive 
                  ? 'bg-white border-brand-indigo/30 shadow-md' 
                  : 'bg-transparent border-slate-200/50 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-tr ${step.color} flex items-center justify-center text-white flex-shrink-0 shadow-md ${step.shadow}`}>
                <step.icon className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Phase 0{idx + 1}</span>
                <span className="block font-bold text-slate-800 font-outfit mt-0.5">{step.short}</span>
              </div>
              <ChevronRight className={`w-4 h-4 text-slate-400 transition-all ${isActive ? 'translate-x-1 text-brand-indigo font-bold' : ''}`} />
            </button>
          );
        })}
      </div>

      {/* SVG Canvas and Info Side */}
      <div className="lg:col-span-7 space-y-6">
        {/* Interactive Loop SVG Diagram */}
        <div className="relative aspect-[16/9] bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-center justify-center overflow-hidden">
          {/* Subtle backdrop mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <svg className="w-full max-w-lg h-auto" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The circular loop pathway */}
            <path 
              d="M 200 40 A 60 60 0 1 1 199.9 40 Z" 
              stroke="rgba(0,0,0,0.04)" 
              strokeWidth="6" 
              strokeLinecap="round"
            />
            <path 
              d="M 200 40 A 60 60 0 1 1 199.9 40 Z" 
              stroke="url(#gradient-loop)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="animate-dash"
              strokeDasharray="25, 45"
            />

            {/* Gradients definitions */}
            <defs>
              <linearGradient id="gradient-loop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Nodes on the loop */}
            {steps.map((step, idx) => {
              const angle = (idx * 72 - 90) * (Math.PI / 180);
              const r = 60;
              const cx = 200 + r * Math.cos(angle);
              const cy = 100 + r * Math.sin(angle);
              const isActive = activeStep === idx;

              return (
                <g 
                  key={idx} 
                  className="cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={isActive ? "18" : "13"} 
                    className="transition-all duration-300"
                    fill={isActive ? "#FFFFFF" : "#F8FAFC"}
                    stroke={isActive ? "#8B5CF6" : "rgba(0,0,0,0.12)"}
                    strokeWidth="2"
                  />
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={isActive ? "14" : "10"} 
                    className="transition-all duration-300"
                    fill={isActive ? "#8B5CF6" : "transparent"}
                    opacity={isActive ? 0.15 : 0}
                  />
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r="4" 
                    fill={isActive ? "#10B981" : "#4F46E5"} 
                    className="transition-colors duration-300"
                  />
                  <text 
                    x={cx} 
                    y={cy + (angle > 0 ? 28 : -20)} 
                    fill={isActive ? "#312E81" : "#64748B"} 
                    fontSize="9" 
                    fontWeight={isActive ? "bold" : "normal"}
                    textAnchor="middle" 
                    className="select-none transition-all duration-300 pointer-events-none font-outfit"
                  >
                    {step.short}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detailed Description Panel */}
        <div className="relative min-h-[170px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                {steps[activeStep].title}
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed font-medium">
                {steps[activeStep].desc}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">Enterprise Impact Indicator:</span>
                <span className="text-brand-emerald font-bold uppercase tracking-wider font-outfit">
                  {steps[activeStep].kpi}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
