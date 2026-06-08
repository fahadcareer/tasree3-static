import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Bot, Cpu, Zap, ArrowRight, Check, Play, FileText, 
  ShieldCheck, Activity, Eye, Search, UploadCloud, RefreshCw, 
  AlertCircle, FileSearch, HelpCircle, Scan, MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function AIFeatures({ onRequestDemo }) {
  // Preset prompts for simulation
  const promptsList = [
    { id: 'bpmn', text: 'Create PO BPMN diagram', label: 'Text-to-Diagram' },
    { id: 'compare', text: 'Compare v3.2 & v3.4', label: 'Version Summaries' },
    { id: 'ocr', text: 'OCR Scan Whiteboard', label: 'OCR Diagram Import' },
    { id: 'mining', text: 'Audit PO Bottlenecks', label: 'Mining Assistant' }
  ];

  const [activePrompt, setActivePrompt] = useState('bpmn');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState('');

  // Handle preset prompt click
  const runPromptSimulation = (promptId) => {
    setActivePrompt(promptId);
    setIsRunning(true);
    setProgress(0);
    
    const targetText = promptsList.find(p => p.id === promptId).text;
    setTypedPrompt('');

    // Typewriter effect on simulated input
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < targetText.length) {
        setTypedPrompt(prev => prev + targetText.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
        
        // Progress bar simulation
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              setIsRunning(false);
              return 100;
            }
            return prev + 20;
          });
        }, 150);
      }
    }, 40);
  };

  useEffect(() => {
    runPromptSimulation('bpmn');
  }, []);

  return (
    <>
      <SEO 
        title="AI Process Architecture & Copilot" 
        description="Auto-generate BPMN models from text, summarize version differences, scan whiteboard flowcharts via OCR, and analyze event logs with conversational AI."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-10 overflow-hidden text-left bg-slate-50/50">
        {/* Glow Backgrounds */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-brand-purple/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copywriting */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-indigo" />
                Generative AI Operations Core
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900 font-bold">
                AI Built for <span className="text-gradient">Process</span> Architecture
              </h1>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                Draft BPMN layouts in seconds from simple text prompts, scan hand-drawn whiteboard charts via OCR, and summarize process version logs with conversational AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm cursor-pointer focus:outline-none"
                >
                  Try AI Features
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Futuristic AI Workspace Widget */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
                
                {/* Header */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-brand-indigo" />
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-outfit">Tasree3 AI Copilot Workspace</span>
                  </div>

                  <span className="text-[8px] bg-indigo-50 border border-indigo-200/50 text-brand-indigo px-2 py-0.5 rounded font-bold uppercase tracking-wider font-outfit animate-pulse">
                    LLM Engine Active
                  </span>
                </div>

                {/* Main Simulator Workspace Grid */}
                <div className="grid grid-cols-12 gap-4 flex-grow my-4 items-stretch">
                  
                  {/* Left Prompt side selector */}
                  <div className="col-span-4 flex flex-col justify-center gap-2.5">
                    <span className="block text-[8px] uppercase font-bold text-slate-400 tracking-wider font-outfit text-left pl-1">Select Prompts</span>
                    {promptsList.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => runPromptSimulation(p.id)}
                        disabled={isRunning}
                        className={`w-full p-2 border rounded-xl text-[9px] font-bold text-left transition-all focus:outline-none disabled:opacity-50 cursor-pointer ${
                          activePrompt === p.id 
                            ? 'bg-brand-indigo/5 border-brand-indigo text-brand-indigo shadow-sm' 
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500'
                        }`}
                      >
                        <span className="block uppercase tracking-wide text-[7px] text-slate-400 font-outfit mb-0.5">{p.label}</span>
                        {p.text}
                      </button>
                    ))}
                  </div>

                  {/* Right Canvas Output Display */}
                  <div className="col-span-8 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between text-left relative min-h-[220px]">
                    {/* Simulated Text Prompts Terminal */}
                    <div className="bg-slate-900 text-slate-200 font-mono text-[9.5px] p-2.5 rounded-xl border border-slate-800 shadow-inner flex items-center gap-1.5 h-10">
                      <span className="text-brand-indigo font-bold font-sans">AI Prompt:</span>
                      <span className="text-slate-100 truncate font-semibold">
                        {typedPrompt}
                        {isRunning && <span className="w-1 h-3.5 bg-brand-indigo inline-block animate-pulse ml-0.5" />}
                      </span>
                    </div>

                    {/* Progress Loader overlay when processing */}
                    {isRunning && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1.5px] rounded-2xl flex flex-col items-center justify-center space-y-2 z-10">
                        <Cpu className="w-6 h-6 text-brand-indigo animate-spin" />
                        <span className="text-[10px] font-bold text-slate-700 font-outfit">AI Generation Engine: {progress}%</span>
                      </div>
                    )}

                    {/* Simulation Outputs based on activePrompt */}
                    <div className="flex-grow flex items-center justify-center p-2 min-h-[120px]">
                      <AnimatePresence mode="wait">
                        
                        {/* 1. BPMN Canvas Draw */}
                        {activePrompt === 'bpmn' && !isRunning && (
                          <motion.div 
                            key="bpmn-canvas"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full flex justify-center"
                          >
                            <svg className="w-full max-w-[240px] h-auto animate-float" viewBox="0 0 240 100" fill="none">
                              {/* Draw vector diagram flow */}
                              <rect x="5" y="35" width="40" height="25" rx="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="1.2" />
                              <text x="25" y="50" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Create PR</text>

                              <path d="M 45 47 L 75 47" stroke="#6366F1" strokeWidth="1" />

                              <polygon points="75,47 87,35 99,47 87,59" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="87" y="50" fill="#8B5CF6" fontSize="7" fontWeight="bold" textAnchor="middle">?</text>

                              <path d="M 99 47 L 130 47" stroke="#8B5CF6" strokeWidth="1" />

                              <rect x="130" y="35" width="45" height="25" rx="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="152.5" y="50" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Approve Budget</text>

                              {/* Green arrow */}
                              <path d="M 175 47 L 200 47" stroke="#10B981" strokeWidth="1.2" />
                              <circle cx="210" cy="47" r="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
                              <path d="M 207 47 L 209 49 L 213 45" stroke="#10B981" strokeWidth="1" strokeLinecap="round" />
                            </svg>
                          </motion.div>
                        )}

                        {/* 2. Version Summaries */}
                        {activePrompt === 'compare' && !isRunning && (
                          <motion.div 
                            key="compare-results"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full space-y-2"
                          >
                            <div className="p-2.5 bg-brand-indigo/5 border border-brand-indigo/20 text-brand-indigo rounded-xl text-[9.5px] leading-relaxed font-semibold">
                              <span className="font-bold block text-slate-800 uppercase tracking-widest text-[7.5px] mb-1 font-outfit">AI Difference Summary (3.2s scan):</span>
                              1. Added PO budget check verification step.<br />
                              2. Separation of Duties check checks audit logs.<br />
                              3. Process path complexity increased by 15%.
                            </div>
                          </motion.div>
                        )}

                        {/* 3. OCR Sketch Scan */}
                        {activePrompt === 'ocr' && !isRunning && (
                          <motion.div 
                            key="ocr-result"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full relative flex flex-col items-center justify-center"
                          >
                            {/* Sketch diagram */}
                            <svg className="w-full max-w-[200px] h-auto opacity-40" viewBox="0 0 200 80" fill="none">
                              <path d="M 10 40 L 40 40 M 80 40 L 110 40" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
                              <circle cx="25" cy="40" r="12" stroke="#475569" strokeWidth="1.2" />
                              <rect x="50" y="25" width="40" height="30" rx="3" stroke="#475569" strokeWidth="1.2" />
                              <rect x="120" y="25" width="40" height="30" rx="3" stroke="#475569" strokeWidth="1.2" />
                            </svg>
                            {/* Scanning horizontal line */}
                            <motion.div 
                              animate={{ y: [0, 80, 0] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 right-0 h-0.5 bg-brand-emerald shadow-lg shadow-brand-emerald/50"
                            />
                            <div className="absolute bg-white/90 border border-brand-emerald rounded-lg px-2 py-0.5 text-[8px] font-bold text-brand-emerald uppercase tracking-wider font-outfit top-1/2">
                              Scanning whiteboards &rarr; Converting Vector...
                            </div>
                          </motion.div>
                        )}

                        {/* 4. Mining Assistant */}
                        {activePrompt === 'mining' && !isRunning && (
                          <motion.div 
                            key="mining-result"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full space-y-2 text-xs"
                          >
                            <div className="p-2.5 bg-brand-purple/5 border border-brand-purple/20 text-brand-purple rounded-xl text-[9.5px] leading-relaxed font-semibold">
                              <span className="font-bold block text-slate-800 uppercase tracking-widest text-[7.5px] mb-1 font-outfit">AI Root Cause Diagnostics:</span>
                              Average queue backlog at 'Approve Invoice' is 4.8 days. Bottleneck root cause: Only 2 finance managers hold approval permissions for invoice amounts exceeding $50k.
                            </div>
                          </motion.div>
                        )}

                      </AnimatePresence>
                    </div>

                    {/* Footer confirmation */}
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 font-bold border-t border-slate-100 pt-2 font-outfit uppercase">
                      <span>Telemetry Status: Connected</span>
                      <span className="text-brand-emerald flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-ping" />
                        AI Output Rendered
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="pt-6 pb-16 bg-white border-y border-slate-200/60 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Metric 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-center items-center shadow-sm"
            >
              <span className="font-outfit text-4xl sm:text-5xl font-extrabold text-slate-900">85% Faster</span>
              <h4 className="text-sm font-bold text-brand-indigo font-outfit mt-2 uppercase tracking-wide">BPMN Diagram Creation</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                Skip layout grids. Convert textual procedures or whiteboard drawings into structured models automatically.
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-center items-center shadow-sm"
            >
              <span className="font-outfit text-4xl sm:text-5xl font-extrabold text-slate-900">3 Seconds</span>
              <h4 className="text-sm font-bold text-brand-purple font-outfit mt-2 uppercase tracking-wide">For Version Summaries</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                Review draft modifications instantly without checking line-by-line BPMN change histories manually.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Product Features Sections */}
      <section className="py-24 space-y-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Text-to-Diagram Generation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">01 / Process Autopilot</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Text-to-Diagram Builder (Visual Canvas)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Translates standard text descriptions (SOPs) into fully structured EPC, BPMN, Org, or FAD process diagrams, complete with logical gateways and connections automatically.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> Natural Language Parsing</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> Standard BPMN Output XML</span>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-indigo animate-pulse" /> Natural Language Layout Engine
              </div>
              <div className="flex-grow flex flex-col justify-center gap-2.5 my-3 text-left">
                <div className="p-2.5 bg-slate-900 text-slate-300 font-mono text-[9px] rounded-xl border border-slate-800">
                  <span className="text-slate-500">&gt; Prompt:</span> "Write billing model with supervisor check."
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-800">Layout Auto-generated</div>
                    <div className="text-slate-400 mt-0.5 font-medium">Created: 3 Tasks, 1 Exclusive Gateway.</div>
                  </div>
                  <span className="bg-emerald-50 text-brand-emerald text-[8px] px-2 py-0.5 rounded font-extrabold uppercase font-outfit">Success</span>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                BPMN layout rules compiled automatically in active workspace.
              </div>
            </div>
          </div>

          {/* Section 2: AI Process Analyst */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] order-last md:order-first">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <FileSearch className="w-3.5 h-3.5 text-brand-emerald" /> Operational Anomaly Diagnostics
              </div>
              <div className="flex-grow flex flex-col justify-center gap-3.5 my-2 text-left">
                <div className="flex justify-between items-center text-xs pb-1 border-b border-slate-100">
                  <span className="text-slate-400">Log Anomalies Scanned:</span>
                  <span className="text-slate-800 font-bold font-sans">84,120 rows</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-1 border-b border-slate-100">
                  <span className="text-slate-400">Identified Latency Hotspot:</span>
                  <span className="text-red-500 font-bold font-sans font-bold">Approve Invoice Node</span>
                </div>
                <div className="p-2 bg-emerald-50 border border-emerald-200/50 text-brand-emerald text-[9px] font-bold rounded-lg leading-relaxed">
                  AI Recommendation: Automate matching ledger codes to reduce cycle wait queue by 82%.
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Continuous diagnostics scans update based on background log replication.
              </div>
            </div>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">02 / Diagnostic Audits</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Diagnostics & Chat Companion (Mining Dashboard)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Analyzes execution metrics (average cycle times, variants, delays) to write text summaries of bottlenecks/rework loops, and provides an interactive sidebar analyst chat that uses your live data as context.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Anomaly Root-Cause Audit</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Automated Efficiency Tips</span>
              </div>
            </div>
          </div>

          {/* Section 3: AI Version Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-outfit">03 / Summarization Engine</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Version Control & Releases (Approval Governance)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Instantly compares the newly approved model version against the previous version, auto-writing a change log explaining what changed (added/removed steps, visual style edits, attachments) and what it means for your operations.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> 3 Seconds Diff Summarization</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> Plain Text Release Logs</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-brand-purple animate-spin" style={{ animationDuration: '8s' }} /> Model Diff Comparator
              </div>
              <div className="grid grid-cols-2 gap-4 flex-grow my-4 text-left text-xs font-bold">
                <div className="p-3 bg-white border border-slate-200/60 rounded-2xl">
                  <span className="text-[8px] uppercase text-slate-400 font-outfit block">v3.2 Base</span>
                  <span className="text-slate-800 font-outfit mt-1 block">Verify Credit Node</span>
                </div>
                <div className="p-3 bg-white border border-slate-200/60 rounded-2xl border-brand-purple">
                  <span className="text-[8px] uppercase text-brand-purple font-outfit block">v3.4 Update</span>
                  <span className="text-slate-800 font-outfit mt-1 block">Verify Credit + Risk SLA</span>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Changes: Added conditional gate check for approvals &gt;$10,000.
              </div>
            </div>
          </div>

          {/* Section 4: OCR Diagram Import */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] order-last md:order-first">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <Scan className="w-3.5 h-3.5 text-brand-emerald" /> whiteboard OCR Scan engine
              </div>
              <div className="flex-grow flex items-center justify-center p-3 relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-inner text-left font-mono text-[9px] text-slate-400">
                <div className="space-y-1">
                  <div className="text-brand-emerald">&gt; Ingestion: whiteboard_photo.jpg</div>
                  <div>&gt; Performing OCR edge detection... OK</div>
                  <div>&gt; Mapping 3 connector pathways... OK</div>
                  <div className="text-slate-200 font-bold">&gt; Output: Successfully generated vector BPMN XML!</div>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                OCR imports support hand-sketched flowcharts with zero precision loss.
              </div>
            </div>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">04 / Whiteboard Migration</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Visual Flowchart Import (OCR & Migration)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Reads text from uploaded scans, PDF manuals, or whiteboard screenshots using OCR, and automatically reconstructs them as editable digital diagrams on your canvas.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Whiteboard Photo Scanning</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Automatic Vectorization</span>
              </div>
            </div>
          </div>

          {/* Section 5: AI Mining Assistant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">05 / Natural Language Database Queries</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Text Log Uploader (Process Mining)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Scans unstructured text journals or execution paragraphs and extracts structured event columns (case_id, activity, timestamp) to prepare them for process mapping and cycle-time analysis.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> SQL-Free Log Querying</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> Dynamic Telemetry Mining</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-brand-indigo" /> Database Telemetry Ingestion
              </div>
              <div className="flex-grow flex flex-col justify-center gap-3 my-2 text-left">
                <div className="p-2.5 bg-slate-900 text-slate-300 font-mono text-[9px] rounded-xl border border-slate-800">
                  <span className="text-slate-500">&gt; Query:</span> "What is the loopback rate on billing verification?"
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-bold">
                  <span className="text-slate-400 block uppercase text-[8px] font-outfit">AI Discovery:</span>
                  <span className="text-slate-800 font-outfit block mt-1">22.4% Loopback Rate Detected</span>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Telemetry processed continuously across active database event tables.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">Unleash Process Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight">
            Ready to Accelerate Process Design?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Deploy automated diagram creation, summarize version diffs, and query process logs in plain language with Tasree3.
          </p>
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-gradient-primary hover:opacity-90 active:scale-95 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 text-sm cursor-pointer focus:outline-none"
          >
            Try AI Features
          </button>
        </div>
      </section>
    </>
  );
}
