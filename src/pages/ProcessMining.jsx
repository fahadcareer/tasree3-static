import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, FileSpreadsheet, Eye, Play, BarChart3, AlertTriangle, 
  ShieldAlert, Sparkles, ArrowRight, Check, Activity, Clock, 
  DollarSign, Users, Database, Server, RefreshCw
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function ProcessMining({ onRequestDemo }) {
  // Simulator States
  // 1 = CSV Upload, 2 = Process Discovery, 3 = Bottleneck Detection, 4 = Variant Analysis
  const [simulatorStep, setSimulatorStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('v1');

  // Handle simulated upload
  const startSimulatedUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadedFileName('sap_invoice_logs_2026.csv');
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Auto advance to process discovery state
          setTimeout(() => setSimulatorStep(2), 800);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Reset simulator
  const resetSimulator = () => {
    setSimulatorStep(1);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadedFileName('');
    setSelectedVariant('v1');
  };

  // AI Insights State
  const [aiAnalysisType, setAiAnalysisType] = useState('summary');

  return (
    <>
      <SEO 
        title="Enterprise Process Mining - Automatic Discovery & Analytics" 
        description="Extract event logs from SAP, Salesforce, and databases to reconstruct transaction flows, isolate bottleneck delays, and run AI process diagnostics."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-10 overflow-hidden text-left bg-slate-50/50">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-emerald/[0.04] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-brand-indigo/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copywriting */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-emerald uppercase tracking-wider font-outfit shadow-sm">
                <Activity className="w-3.5 h-3.5" />
                Data-driven Process Discovery
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900">
                Turn Event Logs <span className="text-gradient">Into Actionable</span> Intelligence
              </h1>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                Connect enterprise systems or upload spreadsheet logs to automatically map transaction pathways, pinpoint bottleneck delays, and optimize audits with AI.
              </p>

              {/* Sub-features list */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald flex-shrink-0 font-outfit">✓</span>
                  CSV/XES Ingestion
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald flex-shrink-0 font-outfit">✓</span>
                  Process Discovery
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald flex-shrink-0 font-outfit">✓</span>
                  Bottleneck Analysis
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-emerald flex-shrink-0 font-outfit">✓</span>
                  Variant Comparison
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm cursor-pointer focus:outline-none"
                >
                  Book Mining Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Process Mining Simulator */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                {/* Visual Glassmorphic header */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-outfit">Operations Discovery Simulator</span>
                  </div>

                  <div className="flex gap-1.5">
                    {[
                      { id: 1, label: '1. Ingest logs' },
                      { id: 2, label: '2. Discover' },
                      { id: 3, label: '3. Bottlenecks' },
                      { id: 4, label: '4. Variants' }
                    ].map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setSimulatorStep(btn.id)}
                        className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all cursor-pointer ${
                          simulatorStep === btn.id 
                            ? 'bg-brand-emerald text-white shadow-sm shadow-brand-emerald/10 font-bold' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-500'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulator Content Area */}
                <div className="flex-grow flex items-center justify-center py-6 relative">
                  <AnimatePresence mode="wait">
                    
                    {/* Step 1: Upload Logs */}
                    {simulatorStep === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-md space-y-4 text-center"
                      >
                        {!uploadedFileName ? (
                          <div 
                            onClick={startSimulatedUpload}
                            className="border-2 border-dashed border-slate-200 hover:border-brand-emerald hover:bg-slate-50/50 rounded-2xl p-8 cursor-pointer transition-all flex flex-col items-center justify-center space-y-3"
                          >
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                              <UploadCloud className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-700">Click to Upload Event Log File</div>
                              <div className="text-[10px] text-slate-400 mt-1 font-semibold">Supports CSV, XES, XLS formats (Max: 50MB)</div>
                            </div>
                            <span className="px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-[9px] font-bold rounded-lg border border-brand-emerald/20 hover:bg-brand-emerald/20 transition-colors uppercase font-outfit">
                              Simulate Upload
                            </span>
                          </div>
                        ) : (
                          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-emerald-100 rounded-lg text-brand-emerald">
                                <FileSpreadsheet className="w-5 h-5" />
                              </div>
                              <div className="flex-grow">
                                <div className="text-xs font-bold text-slate-800 truncate">{uploadedFileName}</div>
                                <div className="text-[9px] text-slate-400 font-semibold">Size: 12.4 MB · Status: Mapped</div>
                              </div>
                            </div>
                            
                            {/* Upload Progress Bar */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[9px] font-bold text-slate-400">
                                <span>Parsing CSV Schema...</span>
                                <span>{uploadProgress}%</span>
                              </div>
                              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-brand-emerald h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Step 2: Process Discovery Graph */}
                    {simulatorStep === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full flex justify-center"
                      >
                        <svg className="w-full max-w-[420px] h-auto" viewBox="0 0 420 180" fill="none">
                          {/* Process nodes flow discovered */}
                          <rect x="5" y="70" width="60" height="32" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
                          <text x="35" y="86" fill="#1E293B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Receive PR</text>
                          <text x="35" y="94" fill="#94A3B8" fontSize="5" fontWeight="bold" textAnchor="middle">10.2k Cases</text>

                          <path d="M 65 86 L 105 86" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#discovery-arrow)" />

                          <rect x="110" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
                          <text x="142.5" y="86" fill="#1E293B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Verify Budget</text>
                          <text x="142.5" y="94" fill="#94A3B8" fontSize="5" fontWeight="bold" textAnchor="middle">10.2k Cases</text>

                          <path d="M 175 86 L 215 86" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#discovery-arrow)" />

                          <rect x="220" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
                          <text x="252.5" y="86" fill="#1E293B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Approve PO</text>
                          <text x="252.5" y="94" fill="#94A3B8" fontSize="5" fontWeight="bold" textAnchor="middle">9.8k Cases</text>

                          <path d="M 285 86 L 325 86" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#discovery-arrow)" />

                          <rect x="330" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
                          <text x="362.5" y="86" fill="#1E293B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Release Goods</text>
                          <text x="362.5" y="94" fill="#94A3B8" fontSize="5" fontWeight="bold" textAnchor="middle">9.8k Cases</text>

                          {/* Arrow marker */}
                          <defs>
                            <marker id="discovery-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#10B981" />
                            </marker>
                          </defs>
                        </svg>
                      </motion.div>
                    )}

                    {/* Step 3: Bottleneck Detection */}
                    {simulatorStep === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full flex justify-center"
                      >
                        <svg className="w-full max-w-[420px] h-auto" viewBox="0 0 420 180" fill="none">
                          <rect x="5" y="70" width="60" height="32" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
                          <text x="35" y="86" fill="#64748B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Receive PR</text>
                          <text x="35" y="94" fill="#94A3B8" fontSize="5" textAnchor="middle">Avg: 12 min</text>

                          <path d="M 65 86 L 105 86" stroke="#CBD5E1" strokeWidth="1" />

                          <rect x="110" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.5" className="animate-pulse" />
                          <text x="142.5" y="86" fill="#EF4444" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Verify Budget</text>
                          <text x="142.5" y="94" fill="#EF4444" fontSize="5" fontWeight="extrabold" textAnchor="middle">Avg: 3.4 Days</text>

                          {/* Red glowing path indicating delay */}
                          <path d="M 175 86 L 215 86" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#bottleneck-arrow)" />
                          <rect x="180" y="60" width="30" height="12" rx="3" fill="#FEE2E2" stroke="#EF4444" strokeWidth="0.5" />
                          <text x="195" y="68" fill="#EF4444" fontSize="5" fontWeight="extrabold" textAnchor="middle" className="font-outfit">+4.8 Days</text>

                          <rect x="220" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.5" />
                          <text x="252.5" y="86" fill="#EF4444" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Approve PO</text>
                          <text x="252.5" y="94" fill="#EF4444" fontSize="5" fontWeight="extrabold" textAnchor="middle">SLA Breached</text>

                          <path d="M 285 86 L 325 86" stroke="#CBD5E1" strokeWidth="1" />

                          <rect x="330" y="70" width="65" height="32" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
                          <text x="362.5" y="86" fill="#64748B" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Release Goods</text>
                          <text x="362.5" y="94" fill="#94A3B8" fontSize="5" textAnchor="middle">Avg: 4.0h</text>

                          <defs>
                            <marker id="bottleneck-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#EF4444" />
                            </marker>
                          </defs>
                        </svg>
                      </motion.div>
                    )}

                    {/* Step 4: Variant Analysis */}
                    {simulatorStep === 4 && (
                      <motion.div 
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full grid grid-cols-12 gap-4 items-center"
                      >
                        {/* Variant selector panel */}
                        <div className="col-span-4 space-y-1.5 text-left">
                          {[
                            { id: 'v1', label: 'Variant 1 (SOP Standard)', share: '64%', desc: 'Linear path, 4.2d avg.' },
                            { id: 'v2', label: 'Variant 2 (Budget Loop)', share: '22%', desc: 'Rework loops, 12.8d avg.' },
                            { id: 'v3', label: 'Variant 3 (Bypass Compliance)', share: '14%', desc: 'Gateway bypass, 1.1d avg.' }
                          ].map(v => (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariant(v.id)}
                              className={`w-full p-2 border rounded-xl text-left transition-all text-[9px] font-bold focus:outline-none cursor-pointer ${
                                selectedVariant === v.id
                                  ? 'bg-brand-emerald/5 border-brand-emerald text-brand-emerald shadow-sm'
                                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500'
                              }`}
                            >
                              <div className="flex justify-between items-center font-outfit uppercase tracking-wide">
                                <span>{v.id}</span>
                                <span>{v.share}</span>
                              </div>
                              <span className="text-[7px] text-slate-400 block font-semibold mt-0.5">{v.desc}</span>
                            </button>
                          ))}
                        </div>

                        {/* Variant path visualizer SVG */}
                        <div className="col-span-8 bg-slate-50 border border-slate-100 rounded-2xl p-2.5 h-full min-h-[160px] flex items-center justify-center">
                          <svg className="w-full h-auto" viewBox="0 0 280 140" fill="none">
                            {/* Standard nodes */}
                            <rect x="5" y="55" width="45" height="22" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                            <text x="27.5" y="68" fill="#64748B" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Verify</text>

                            {/* Node 2 */}
                            <rect x="90" y="55" width="45" height="22" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                            <text x="112.5" y="68" fill="#64748B" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Approve</text>

                            {/* Node 3 */}
                            <rect x="180" y="55" width="45" height="22" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                            <text x="202.5" y="68" fill="#64748B" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Release</text>

                            {/* Variant 1: Straight Flow */}
                            {selectedVariant === 'v1' && (
                              <g>
                                <path d="M 50 66 L 90 66" stroke="#10B981" strokeWidth="1.5" markerEnd="url(#var-arrow)" />
                                <path d="M 135 66 L 180 66" stroke="#10B981" strokeWidth="1.5" markerEnd="url(#var-arrow)" />
                                <text x="140" y="30" fill="#10B981" fontSize="6" fontWeight="bold" className="font-outfit">Straight through (64%)</text>
                              </g>
                            )}

                            {/* Variant 2: Rework loop */}
                            {selectedVariant === 'v2' && (
                              <g>
                                <path d="M 50 66 L 90 66" stroke="#EF4444" strokeWidth="1.5" />
                                <path d="M 135 66 L 180 66" stroke="#CBD5E1" strokeWidth="1" />
                                {/* Rework Loop path arrow */}
                                <path d="M 112.5 55 C 112.5 25, 27.5 25, 27.5 55" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#var-arrow-red)" />
                                <text x="70" y="22" fill="#EF4444" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Loopback Delay (+22%)</text>
                              </g>
                            )}

                            {/* Variant 3: Bypass deviation */}
                            {selectedVariant === 'v3' && (
                              <g>
                                <path d="M 50 66 L 90 66" stroke="#CBD5E1" strokeWidth="1" />
                                <path d="M 135 66 L 180 66" stroke="#CBD5E1" strokeWidth="1" />
                                {/* Bypass connection */}
                                <path d="M 27.5 77 C 27.5 115, 202.5 115, 202.5 77" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#var-arrow-purp)" />
                                <text x="115" y="125" fill="#8B5CF6" fontSize="6" fontWeight="extrabold" textAnchor="middle" className="font-outfit">Bypass Compliance Violation (14%)</text>
                              </g>
                            )}

                            <defs>
                              <marker id="var-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#10B981" />
                              </marker>
                              <marker id="var-arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#EF4444" />
                              </marker>
                              <marker id="var-arrow-purp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#8B5CF6" />
                              </marker>
                            </defs>
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-bold font-outfit">
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-brand-emerald" /> 
                    SAP Ingestion Connected
                  </span>
                  <button 
                    onClick={resetSimulator}
                    className="hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High-Impact Statistics Grid */}
      <section className="pt-6 pb-16 bg-white border-y border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-center items-center shadow-sm"
            >
              <span className="font-outfit text-4xl sm:text-5xl font-extrabold text-slate-900">10 Million+</span>
              <h4 className="text-sm font-bold text-brand-emerald font-outfit mt-2 uppercase tracking-wide">Events Processed Monthly</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                Our high-performance parsing architecture routinely processes large volumes of transaction databases.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex flex-col justify-center items-center shadow-sm"
            >
              <span className="font-outfit text-4xl sm:text-5xl font-extrabold text-slate-900">80% Faster</span>
              <h4 className="text-sm font-bold text-brand-indigo font-outfit mt-2 uppercase tracking-wide">Bottleneck Identification</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                Skip month-long operations interviews. Identify transaction loops and path bypasses in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Product Features Sections */}
      <section className="py-24 space-y-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Upload Logs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">01 / Ingestion Wizard</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Text Log Uploader (Process Mining)</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Scans unstructured text journals or execution paragraphs and extracts structured event columns (case_id, activity, timestamp) to prepare them for process mapping and cycle-time analysis.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> TLS 1.3 Encryption</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Automatic Schema Mapping</span>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-brand-emerald" /> Database Integrator Adapters
              </div>
              <div className="grid grid-cols-2 gap-4 flex-grow my-4">
                {['SAP ERP', 'Salesforce CRM', 'Oracle DB', 'ServiceNow'].map((adapter, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200/60 rounded-2xl flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-brand-emerald/20 border border-brand-emerald text-brand-emerald flex items-center justify-center text-[7px] font-bold">✓</span>
                    <span className="text-xs font-bold text-slate-800">{adapter} Connector</span>
                  </div>
                ))}
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Direct replication streams secure SOC2 data processing guidelines.
              </div>
            </div>
          </div>

          {/* Section 2: Automatic Discovery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] order-last md:order-first">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-brand-indigo" /> Reconstruction Engine
              </div>
              <div className="flex-grow flex items-center justify-center relative p-3">
                <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 280 120" fill="none">
                  {/* Nodes being reconstructed */}
                  <rect x="5" y="45" width="40" height="25" rx="3" fill="#FFFFFF" stroke="#6366F1" strokeWidth="1.2" />
                  <text x="25" y="60" fill="#475569" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Task A</text>

                  <path d="M 45 57 L 90 57" stroke="#6366F1" strokeWidth="1" strokeDasharray="3,3" />

                  <polygon points="110,57 122,45 134,57 122,69" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                  <text x="122" y="60" fill="#8B5CF6" fontSize="6" fontWeight="bold" textAnchor="middle">?</text>

                  <path d="M 134 57 L 180 57" stroke="#8B5CF6" strokeWidth="1" />

                  <rect x="180" y="45" width="40" height="25" rx="3" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                  <text x="200" y="60" fill="#475569" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Task B</text>

                  {/* Flow completion checkmark */}
                  <circle cx="255" cy="57" r="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
                  <path d="M 251 57 L 254 60 L 260 54" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Event log parsed: 84,120 rows mapped to process structures.
              </div>
            </div>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">02 / Automatic Flow Mapping</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">Real-Time Process Discovery</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Our high-speed graph parsing heuristics process transaction log streams in seconds. Tasree3 constructs a live flow diagram based on actual chronological data, showing you what pathways operations follow.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> 100% Path Reconstruction</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> No Manual Blueprinting</span>
              </div>
            </div>
          </div>

          {/* Section 3: KPI Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-outfit">03 / Analytics & Insights</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">Quantitative Process KPI Feeds</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Track cycle durations, queue idle wait times, and financial overhead losses. Filter processes by department, country, client account, or resource operator to isolate operational trends.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> Average Cycle Latency</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> Financial Overhead Tracking</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-brand-purple" /> Operations KPI Dashboard
              </div>
              <div className="grid grid-cols-3 gap-3 flex-grow my-4">
                <div className="p-3 bg-white border border-slate-200/60 rounded-2xl text-left flex flex-col justify-between">
                  <div className="p-1.5 bg-slate-100 rounded-lg w-fit text-slate-500"><Clock className="w-4 h-4" /></div>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 block font-bold">Avg SLA Time</span>
                    <span className="text-base font-extrabold text-slate-800 font-outfit mt-0.5 block">4.2 Days</span>
                  </div>
                </div>
                <div className="p-3 bg-white border border-slate-200/60 rounded-2xl text-left flex flex-col justify-between">
                  <div className="p-1.5 bg-slate-100 rounded-lg w-fit text-slate-500"><DollarSign className="w-4 h-4" /></div>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 block font-bold">Wasted Cost</span>
                    <span className="text-base font-extrabold text-red-500 font-outfit mt-0.5 block">$24,800</span>
                  </div>
                </div>
                <div className="p-3 bg-white border border-slate-200/60 rounded-2xl text-left flex flex-col justify-between">
                  <div className="p-1.5 bg-slate-100 rounded-lg w-fit text-slate-500"><Users className="w-4 h-4" /></div>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 block font-bold">Operators</span>
                    <span className="text-base font-extrabold text-slate-800 font-outfit mt-0.5 block">48 Active</span>
                  </div>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Financial overhead evaluated automatically per loopback anomaly.
              </div>
            </div>
          </div>

          {/* Section 4: Bottleneck Detection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] order-last md:order-first">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500 animate-pulse" /> Backlog Queue Monitor
              </div>
              <div className="flex-grow flex flex-col justify-center gap-3 my-2 text-left">
                <div className="p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-red-600 font-outfit">4.8 Days SLA Wait Delay</div>
                    <div className="text-red-400 mt-0.5 font-semibold">Node: "Approve Invoice" has 142 cases waiting.</div>
                  </div>
                  <span className="bg-red-100 text-red-600 text-[8px] px-2 py-0.5 rounded font-extrabold uppercase font-outfit">SLA Breach</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-800">Resource Congestion Alert</div>
                    <div className="text-slate-400 mt-0.5 font-medium">Ops Manager role assigned to 82% of loop approvals.</div>
                  </div>
                  <span className="bg-slate-100 text-slate-500 text-[8px] px-2 py-0.5 rounded font-extrabold uppercase font-outfit">Warning</span>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                System tracks average response limits and generates dashboard alerts.
              </div>
            </div>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">04 / Backlog Tracing</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">Pinpoint Queue Bottlenecks</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Locate exactly where processes stall. Tasree3 measures idle queue latency between individual activities to alert compliance groups on late SLA tasks.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> Queue Idle Monitors</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-emerald" /> SLA Breach Alerts</span>
              </div>
            </div>
          </div>

          {/* Section 5: Conformance Checking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">05 / Audit & Compliance Assurance</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">Automated Conformance Checks</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Do actual operations matches your compliance standards? Tasree3 maps mined transaction pathways against reference BPMN model rule structures, instantly flagging path bypasses, unauthorized sign-offs, and compliance violations.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> Path Deviation Alerts</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-indigo" /> Compliance Audit Reports</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10]">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-indigo" /> Conformance Compliance Auditor
              </div>
              <div className="flex-grow flex flex-col justify-center gap-3.5 my-2 text-left">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                  <span className="text-slate-400">Total Cases Analyzed:</span>
                  <span className="text-slate-800 font-bold font-sans">10,240 cases</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                  <span className="text-slate-400">Path Conformance Rate:</span>
                  <span className="text-slate-800 font-bold font-sans">86.2% compliant</span>
                </div>
                <div className="flex justify-between items-center text-xs text-red-500 font-bold">
                  <span>Critical Deviations Detected:</span>
                  <span className="font-sans">1,412 bypasses</span>
                </div>
              </div>
              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Conformance scores calculate continuously as event logs sync.
              </div>
            </div>
          </div>

          {/* Section 6: AI Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] order-last md:order-first">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-purple" /> AI Operations Copilot
                </div>
                
                {/* Copilot Selector Tabs */}
                <div className="flex bg-slate-100 rounded-md p-0.5 text-[8px] font-bold text-slate-500">
                  <button 
                    onClick={() => setAiAnalysisType('summary')}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${aiAnalysisType === 'summary' ? 'bg-white text-slate-900 shadow-sm' : ''}`}
                  >
                    Summary
                  </button>
                  <button 
                    onClick={() => setAiAnalysisType('recommendation')}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${aiAnalysisType === 'recommendation' ? 'bg-white text-slate-900 shadow-sm' : ''}`}
                  >
                    Recommendation
                  </button>
                </div>
              </div>

              {/* Chat Simulation Area */}
              <div className="flex-grow flex flex-col justify-center my-3 text-left space-y-3.5">
                <div className="p-2.5 bg-slate-100 border border-slate-200 rounded-2xl text-[10px] max-w-[85%] self-start font-medium text-slate-700">
                  Why is the Procure-to-Pay process taking 5 days longer this month?
                </div>

                <AnimatePresence mode="wait">
                  {aiAnalysisType === 'summary' ? (
                    <motion.div 
                      key="summary"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="p-3 bg-brand-indigo/5 border border-brand-indigo/20 text-brand-indigo rounded-2xl text-[10px] max-w-[90%] self-end leading-relaxed font-semibold"
                    >
                      Analysis shows a 4.2-day bottleneck at the 'Approve PO' stage for orders &gt;$50k. Root cause is a resource constraint: only 2 finance directors are assigned to approve this budget level, creating a backlog queue.
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="rec"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="p-3 bg-brand-emerald/5 border border-brand-emerald/20 text-brand-emerald rounded-2xl text-[10px] max-w-[90%] self-end leading-relaxed font-semibold"
                    >
                      AI Optimization Tip: Delegate PO approvals under $100k to automated systems using department budget rules. This will remove 82% of the approval backlog queue and reduce cycle times by 3.8 days.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Conversational diagnostics use vector-mapped event logs indexing.
              </div>
            </div>

            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-outfit">06 / AI Ops Intelligence</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900">AI Diagnostics & Chat Companion</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Analyzes execution metrics (average cycle times, variants, delays) to write text summaries of bottlenecks/rework loops, and provides an interactive sidebar analyst chat that uses your live data as context.
              </p>
              <div className="flex gap-4 pt-2 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> Root Cause Diagnosis</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-purple" /> Automated Optimization Advice</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Start Mining Today</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight">
            Ready to Discover Hidden Bottlenecks?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Ingest your logs or sync database endpoints inside our secure process sandbox environment and trace delay sources in minutes.
          </p>
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-gradient-primary hover:opacity-90 active:scale-95 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 text-sm cursor-pointer focus:outline-none"
          >
            Book Mining Demo
          </button>
        </div>
      </section>
    </>
  );
}
