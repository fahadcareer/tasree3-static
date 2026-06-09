import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, Activity, Award, Shield, Cpu, PenTool, Database, 
  Layers, GitFork, RefreshCw, FileText, ChevronDown, ChevronRight, 
  Workflow, GitBranch, ShieldCheck, Settings, Users, Scale, Network
} from 'lucide-react';
import SEO from '../components/SEO';

export default function ProcessManagement({ onRequestDemo }) {
  // Modeling state
  const [modelingTab, setModelingTab] = useState('BPMN');
  
  // Cross-functional view state ('map' vs 'matrix')
  const [cfView, setCfView] = useState('map');

  // L1-L2-L3 Taxonomy Data
  const taxonomyData = {
    '1.0': {
      code: '1.0',
      title: 'Develop Vision & Strategy',
      type: 'Operating',
      bg: '#0B1D33',
      textColor: 'text-white',
      l2List: [
        {
          code: '1.1',
          title: 'Define the business concept',
          l3List: ['1.1.1 Assess environment', '1.1.2 Survey market']
        },
        {
          code: '1.2',
          title: 'Manage strategic initiatives',
          l3List: ['1.2.1 Set targets', '1.2.2 Build roadmap']
        }
      ]
    },
    '2.0': {
      code: '2.0',
      title: 'Develop Products & Services',
      type: 'Operating',
      bg: '#0A8DA8',
      textColor: 'text-white',
      l2List: [
        {
          code: '2.1',
          title: 'Manage product portfolio',
          l3List: ['2.1.1 Plan portfolio', '2.1.2 Evaluate concepts']
        },
        {
          code: '2.2',
          title: 'Design & develop offerings',
          l3List: ['2.2.1 Design', '2.2.2 Test & pilot']
        }
      ]
    },
    '3.0': {
      code: '3.0',
      title: 'Market & Sell',
      type: 'Operating',
      bg: '#166988',
      textColor: 'text-white',
      l2List: [
        {
          code: '3.1',
          title: 'Understand markets & customers',
          l3List: ['3.1.1 Segment', '3.1.2 Analyze needs']
        },
        {
          code: '3.2',
          title: 'Develop & manage sales',
          l3List: ['3.2.1 Generate leads', '3.2.2 Close orders']
        }
      ]
    },
    '4.0': {
      code: '4.0',
      title: 'Deliver & Operate',
      type: 'Operating',
      bg: '#1A367E',
      textColor: 'text-white',
      l2List: [
        {
          code: '4.1',
          title: 'Plan & procure resources',
          l3List: ['4.1.1 Plan supply', '4.1.2 Source materials']
        },
        {
          code: '4.2',
          title: 'Deliver products & services',
          l3List: ['4.2.1 Schedule', '4.2.2 Fulfil & ship']
        }
      ]
    },
    '5.0': {
      code: '5.0',
      title: 'Manage Customer Service',
      type: 'Operating',
      bg: '#1E5EF3',
      textColor: 'text-white',
      l2List: [
        {
          code: '5.1',
          title: 'Manage customer requests',
          l3List: ['5.1.1 Receive', '5.1.2 Resolve']
        },
        {
          code: '5.2',
          title: 'Measure satisfaction',
          l3List: ['5.2.1 Survey', '5.2.2 Act on feedback']
        }
      ]
    },
    '6.0': {
      code: '6.0',
      title: 'Human Capital',
      type: 'Support',
      bg: '#54686A',
      textColor: 'text-white',
      l2List: [
        {
          code: '6.1',
          title: 'Recruit & develop people',
          l3List: ['6.1.1 Hire', '6.1.2 Train']
        }
      ]
    },
    '7.0': {
      code: '7.0',
      title: 'Information Technology',
      type: 'Support',
      bg: '#54686A',
      textColor: 'text-white',
      l2List: [
        {
          code: '7.1',
          title: 'Manage IT & data',
          l3List: ['7.1.1 Operate', '7.1.2 Secure']
        }
      ]
    },
    '8.0': {
      code: '8.0',
      title: 'Financial Resources',
      type: 'Support',
      bg: '#54686A',
      textColor: 'text-white',
      l2List: [
        {
          code: '8.1',
          title: 'Manage finance',
          l3List: ['8.1.1 Budget', '8.1.2 Report']
        }
      ]
    },
    '9.0': {
      code: '9.0',
      title: 'Risk & Compliance',
      type: 'Support',
      bg: '#54686A',
      textColor: 'text-white',
      l2List: [
        {
          code: '9.1',
          title: 'Manage risk & controls',
          l3List: ['9.1.1 Assess', '9.1.2 Audit']
        }
      ]
    },
    '10.0': {
      code: '10.0',
      title: 'Procurement & Assets',
      type: 'Support',
      bg: '#54686A',
      textColor: 'text-white',
      l2List: [
        {
          code: '10.1',
          title: 'Manage assets',
          l3List: ['10.1.1 Acquire', '10.1.2 Maintain']
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Enterprise Process Management & Governance Platform" 
        description="Model processes to a global standard, benchmark cycle times, map cross-functional inter-relationships, and establish SOC2/ISO 9001 compliance loops."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 overflow-hidden text-left bg-slate-50/50 dark:bg-slate-950/20">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-purple-500/[0.03] dark:bg-purple-500/[0.06] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copywriting */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold text-brand-indigo dark:text-indigo-400 uppercase tracking-wider font-outfit shadow-sm">
                <Workflow className="w-3.5 h-3.5" />
                Module 01 · Process Management
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900 dark:text-white">
                Model, Benchmark <span className="text-gradient font-outfit">and Govern</span> Every Process
              </h1>

              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                The Process Management module structures your processes to a global standard, maps how they interconnect, and keeps them compliant and secure, end to end.
              </p>

              {/* Sub-features list */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/35 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  BPMN / EPC Notations
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/35 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  APQC PCF Alignment
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/35 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  Dependency Matrix
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/35 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  ISO 9001 Compliance
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#valuechain"
                  className="w-full sm:w-auto px-7 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  Explore Value Chain
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Board */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1f3a] rounded-3xl p-6 shadow-2xl text-white relative overflow-hidden bg-[radial-gradient(600px_300px_at_90%_-20%,rgba(99,102,241,0.25),transparent_60%)] border border-slate-800">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800/80 pb-3">
                  <span className="w-2.5 h-2.5 bg-brand-indigo rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-outfit">Live Repository Status</span>
                </div>

                <div className="relative border border-slate-800/80 rounded-xl p-4 bg-slate-900/50 mb-6">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold mb-3">
                    <span>OPERATIONS VALUE CHAIN</span>
                    <span className="text-brand-emerald">98.2% COMPLIANT</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 relative py-3">
                    {/* Animated Token */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                    <motion.div 
                      className="absolute w-2.5 h-2.5 rounded-full bg-[#7db5ff] shadow-[0_0_10px_rgba(125,181,255,0.8)] z-10"
                      animate={{ left: ['4%', '96%'] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    />

                    {['Draft', 'Review', 'Approved', 'Published'].map((step, i) => (
                      <div 
                        key={step} 
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border z-20 transition-all ${
                          i === 2 
                            ? 'bg-brand-indigo border-brand-indigo text-white font-extrabold shadow-md animate-pulse' 
                            : 'bg-slate-900/90 border-slate-800 text-slate-400'
                        }`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-400 block font-bold">Total Models</span>
                    <span className="text-xl font-extrabold text-white mt-1 block">1,420</span>
                  </div>
                  <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-400 block font-bold">Unresolved Risks</span>
                    <span className="text-xl font-extrabold text-red-400 mt-1 block">0</span>
                  </div>
                  <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-400 block font-bold">APQC Score</span>
                    <span className="text-xl font-extrabold text-[#7db5ff] mt-1 block">94.8%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modeling Notations */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800" id="notation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-indigo-400">Modeling notations</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-slate-900 dark:text-white leading-tight">
              Model in the Notation that Fits the Audience
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              One governed repository, three industry-standard notations, from the boardroom value chain down to executable BPMN, every model stays linked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Value Chains */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 transition-all hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:border-slate-300 dark:hover:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center justify-center h-20 mb-6">
                  <svg width="150" height="30" viewBox="0 0 150 30" fill="none">
                    <polygon className="fill-brand-indigo/10 dark:fill-indigo-950/40 stroke-brand-indigo dark:stroke-indigo-400" strokeWidth="1.2" points="2,4 32,4 40,15 32,26 2,26 10,15"></polygon>
                    <polygon className="fill-slate-900 dark:fill-slate-100 stroke-slate-900 dark:stroke-slate-100" strokeWidth="1.2" points="44,4 74,4 82,15 74,26 44,26 52,15"></polygon>
                    <polygon className="fill-brand-indigo/10 dark:fill-indigo-950/40 stroke-brand-indigo dark:stroke-indigo-400" strokeWidth="1.2" points="86,4 116,4 124,15 116,26 86,26 94,15"></polygon>
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-brand-indigo dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 rounded-full px-2 py-0.5 uppercase tracking-wide">Strategic</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">Value Chains</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  A high-level, left-to-right view of how value is created across the enterprise, ideal for executives and process landscapes.
                </p>
              </div>
            </div>

            {/* Card 2: EPC */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 transition-all hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:border-slate-300 dark:hover:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center justify-center h-20 mb-6">
                  <svg width="150" height="30" viewBox="0 0 150 30" fill="none">
                    <polygon className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.2" points="4,15 12,6 30,6 38,15 30,24 12,24"></polygon>
                    <line className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.2" x1="38" y1="15" x2="52" y2="15"></line>
                    <rect className="fill-brand-indigo dark:fill-indigo-600 stroke-brand-indigo dark:stroke-indigo-600" strokeWidth="1.2" x="52" y="6" width="34" height="18" rx="4"></rect>
                    <line className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.2" x1="86" y1="15" x2="100" y2="15"></line>
                    <polygon className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.2" points="100,15 108,6 126,6 134,15 126,24 108,24"></polygon>
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 rounded-full px-2 py-0.5 uppercase tracking-wide">Detailed</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">Event-driven EPC</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  Event-driven Process Chains alternate events and functions. The trusted notation for detailed, SAP-style process documentation.
                </p>
              </div>
            </div>

            {/* Card 3: BPMN 2.0 */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 transition-all hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:border-slate-300 dark:hover:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center justify-center h-20 mb-6">
                  <svg width="150" height="30" viewBox="0 0 150 30" fill="none">
                    <rect className="fill-slate-900 dark:fill-slate-100 stroke-slate-900 dark:stroke-slate-100" strokeWidth="1.2" x="4" y="6" width="34" height="18" rx="4"></rect>
                    <line className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.2" x1="38" y1="15" x2="52" y2="15"></line>
                    <polygon className="fill-purple-50 dark:fill-purple-950/30 stroke-brand-purple dark:stroke-purple-400" strokeWidth="1.2" points="64,4 76,15 64,26 52,15"></polygon>
                    <line className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.2" x1="76" y1="15" x2="90" y2="15"></line>
                    <rect className="fill-[#10B981] stroke-[#10B981]" strokeWidth="1.2" x="90" y="6" width="34" height="18" rx="4"></rect>
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-brand-emerald dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 rounded-full px-2 py-0.5 uppercase tracking-wide">Executable</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">BPMN 2.0</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  The global standard for precise, executable process models: swimlanes, gateways, and tasks that map straight to automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Value Chains */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-950/30 relative" id="valuechain">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 dark:text-white leading-tight">
              Your end-to-end process value chain
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              See the whole enterprise on one board, operating processes run left to right, management and support sit beneath, and every L1 category decomposes into its L2 process groups and L3 processes.
            </p>
          </div>

          {/* Board Scroll Container (Horizontal scroll on tablets/mobiles, standard display on large screens) */}
          <div className="w-full overflow-x-auto pb-6 no-scrollbar">
            <div className="min-w-[1020px] lg:min-w-0 space-y-8">
              
              {/* OPERATING PROCESSES */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-outfit whitespace-nowrap">
                    Operating Processes · Value Flows Downstream →
                  </span>
                  <div className="h-px bg-slate-200 dark:bg-slate-800/80 flex-grow" />
                </div>
                
                {/* 5 Column Grid */}
                <div className="grid grid-cols-5 gap-3">
                  {Object.values(taxonomyData)
                    .filter(cat => cat.type === 'Operating')
                    .map((cat, idx) => {
                      const chevronClipPath = idx === 0
                        ? 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)'
                        : 'polygon(0% 0%, 12px 50%, 0% 100%, calc(100% - 12px) 100%, 100% 50%, calc(100% - 12px) 0%)';
                      
                      return (
                        <div key={cat.code} className="flex flex-col gap-3">
                          {/* L1 Chevron Card */}
                          <div 
                            style={{ 
                              clipPath: chevronClipPath,
                              backgroundColor: cat.bg 
                            }}
                            className={`h-16 flex flex-col justify-center text-left text-white shadow-md relative group transition-transform duration-200 hover:scale-[1.01] ${
                              idx === 0 ? 'pl-4 pr-6' : 'pl-7 pr-6'
                            }`}
                          >
                            <span className="text-[10px] font-semibold opacity-75 font-outfit">{cat.code}</span>
                            <span className="text-xs font-extrabold font-outfit leading-tight truncate">{cat.title}</span>
                          </div>

                          {/* L2 Stack */}
                          <div className="flex flex-col gap-3">
                            {cat.l2List.map((l2) => (
                              <div 
                                key={l2.code} 
                                className="bg-white dark:bg-slate-900 border border-slate-250/85 dark:border-slate-800/80 rounded-xl p-3.5 space-y-3.5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
                              >
                                <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 font-outfit block">
                                    {l2.code}
                                  </span>
                                  <h4 className="text-xs font-extrabold text-slate-800 dark:text-slate-200 font-outfit leading-snug">
                                    {l2.title}
                                  </h4>
                                </div>

                                {/* L3 Pills Grid */}
                                <div className="flex flex-wrap gap-1.5">
                                  {l2.l3List.map((l3) => (
                                    <div 
                                      key={l3} 
                                      className="bg-slate-50/70 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 px-2 py-1.5 rounded-lg text-[9px] font-semibold text-slate-550 dark:text-slate-400 flex items-center justify-center shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                                    >
                                      {l3}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* MANAGEMENT & SUPPORT */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-outfit whitespace-nowrap">
                    Management & Support
                  </span>
                  <div className="h-px bg-slate-200 dark:bg-slate-800/80 flex-grow" />
                </div>

                {/* 5 Column Grid */}
                <div className="grid grid-cols-5 gap-3">
                  {Object.values(taxonomyData)
                    .filter(cat => cat.type === 'Support')
                    .map((cat) => {
                      return (
                        <div key={cat.code} className="flex flex-col gap-3">
                          {/* L1 support rectangular card */}
                          <div 
                            style={{ backgroundColor: cat.bg }}
                            className="h-16 flex flex-col justify-center text-left text-white shadow-md rounded-xl px-4 transition-transform duration-200 hover:scale-[1.01]"
                          >
                            <span className="text-[10px] font-semibold opacity-75 font-outfit">{cat.code}</span>
                            <span className="text-xs font-extrabold font-outfit leading-tight truncate">{cat.title}</span>
                          </div>

                          {/* L2 Stack */}
                          <div className="flex flex-col gap-3">
                            {cat.l2List.map((l2) => (
                              <div 
                                key={l2.code} 
                                className="bg-white dark:bg-slate-900 border border-slate-250/85 dark:border-slate-800/80 rounded-xl p-3.5 space-y-3.5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
                              >
                                <div className="space-y-1">
                                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 font-outfit block">
                                    {l2.code}
                                  </span>
                                  <h4 className="text-xs font-extrabold text-slate-800 dark:text-slate-200 font-outfit leading-snug">
                                    {l2.title}
                                  </h4>
                                </div>

                                {/* L3 Pills Grid */}
                                <div className="flex flex-wrap gap-1.5">
                                  {l2.l3List.map((l3) => (
                                    <div 
                                      key={l3} 
                                      className="bg-slate-50/70 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 px-2 py-1.5 rounded-lg text-[9px] font-semibold text-slate-550 dark:text-slate-400 flex items-center justify-center shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                                    >
                                      {l3}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Legend & Footnote */}
              <div className="pt-4 border-t border-slate-200/65 dark:border-slate-800/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Legend Pill Items */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-md bg-[#1E5EF3] shadow-xs" />
                    <span>Operating processes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-md bg-[#54686A] shadow-xs" />
                    <span>Management & support</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="px-2 py-1 rounded-lg bg-slate-50/70 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 text-[9px] font-semibold text-slate-550 dark:text-slate-400 shadow-2xs">
                      1.1.1 Process
                    </span>
                    <span>L3 process</span>
                  </div>
                </div>

                {/* Subtext */}
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold font-outfit text-center sm:text-right">
                  Illustrative structure using APQC Process Classification Framework numbering. Your own taxonomy maps the same way.
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* APQC PCF Cascade Section */}
      <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-indigo-400">Process Benchmarking</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-slate-900 dark:text-white leading-tight">
              Drill any Process to L4, and Benchmark It
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Take a single thread out of the value chain and decompose it all the way to the executable activity, benchmarking against APQC global metrics.
            </p>
          </div>

          {/* Vertical Cascade Cards */}
          <div className="max-w-2xl mx-auto relative pl-4">
            {/* Dripping Line Indicator */}
            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-dashed border-l border-indigo-500/30 dark:border-indigo-500/20" />

            {[
              { level: 'L1', type: 'Category', code: 'PCF 4.0', title: 'Procure Products and Services', desc: 'The top-level value category that frames every sourcing and purchasing activity across the organization.', bg: 'bg-[#0B1F3A]' },
              { level: 'L2', type: 'Process Group', code: 'PCF 4.2', title: 'Procure materials and services', desc: 'A coherent group of processes that turns an approved operational requirement into a paid order.', bg: 'bg-[#6366F1]' },
              { level: 'L3', type: 'Process', code: 'PCF 4.2.3', title: 'Order materials and services', desc: 'The specific, modellable process that creates and issues a purchase order against an approved request.', bg: 'bg-[#8B5CF6]' },
              { level: 'L4', type: 'Activity', code: 'PCF 4.2.3.2', title: 'Approve purchase requisition', desc: 'A single executable activity, with its owner, controls, and endorsements built in and fully traceable.', bg: 'bg-amber-500' }
            ].map((node, i) => (
              <motion.div
                key={node.level}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 pb-10 last:pb-0"
              >
                {/* Node Level Badge */}
                <div className={`absolute left-0 top-1.5 w-9 h-9 rounded-full flex flex-col items-center justify-center text-[10px] font-bold text-white shadow ${node.bg} z-10 font-outfit`}>
                  {node.level}
                  <span className="text-[5px] uppercase font-bold tracking-tight opacity-75">{node.type}</span>
                </div>

                {/* Content Card */}
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-705 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-brand-indigo dark:text-indigo-400 font-outfit uppercase tracking-wider">{node.code}</span>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 font-outfit uppercase">APQC Standards Link</span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white font-outfit">{node.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-functional process inter-relationships */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-950/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-indigo-400">Cross-functional clarity</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-slate-900 dark:text-white leading-tight">
              Cross-functional Process Inter-relationships
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              No process runs alone. Tasree shows how every function feeds into and flows out of your core processes. Toggle between Flow Map and Matrix View.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-200/80 dark:bg-slate-900 p-1 rounded-full flex gap-1 border border-slate-300/40 dark:border-slate-800 text-xs font-bold">
              <button
                onClick={() => setCfView('map')}
                className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                  cfView === 'map' ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Flow view
              </button>
              <button
                onClick={() => setCfView('matrix')}
                className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                  cfView === 'matrix' ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Matrix view
              </button>
            </div>
          </div>

          {/* Interactive display area */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-xl">
            <AnimatePresence mode="wait">
              {cfView === 'map' ? (
                <motion.div
                  key="flow-map"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4"
                >
                  <svg className="w-full h-auto overflow-visible" viewBox="0 0 760 450" fill="none">
                    <defs>
                      <marker id="arrowIn" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M0,0 L7,4 L0,8 Z" fill="#6366F1"></path>
                      </marker>
                      <marker id="arrowOut" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M0,0 L7,4 L0,8 Z" fill="#10B981"></path>
                      </marker>
                    </defs>

                    {/* Column Headers */}
                    <text x="40" y="34" fill="#6366F1" fontSize="11" fontWeight="bold" textAnchor="start" className="font-outfit uppercase tracking-wider fill-indigo-600 dark:fill-indigo-400">Incoming Feeds</text>
                    <text x="380" y="34" fill="#64748B" fontSize="11" fontWeight="bold" textAnchor="middle" className="font-outfit uppercase tracking-wider fill-slate-500 dark:fill-slate-400">Focus Function</text>
                    <text x="720" y="34" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="end" className="font-outfit uppercase tracking-wider fill-emerald-600 dark:fill-emerald-450">Outgoing Flows</text>

                    {/* Connection lines (Static visual guide) */}
                    <path d="M 160 150 C 250 160 250 220 320 230" stroke="#6366F1" strokeWidth="2" fill="none" opacity="0.15" markerEnd="url(#arrowIn)" />
                    <path d="M 160 300 C 250 290 250 250 320 240" stroke="#6366F1" strokeWidth="2" fill="none" opacity="0.15" markerEnd="url(#arrowIn)" />
                    <path d="M 440 230 C 510 220 530 110 590 100" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.15" markerEnd="url(#arrowOut)" />
                    <path d="M 440 240 C 510 240 530 240 590 240" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.15" markerEnd="url(#arrowOut)" />
                    <path d="M 440 250 C 510 260 530 370 590 380" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.15" markerEnd="url(#arrowOut)" />

                    {/* Animated Dashed Paths */}
                    <path d="M 160 150 C 250 160 250 220 320 230" stroke="#6366F1" strokeWidth="2.5" fill="none" strokeDasharray="6 8" strokeLinecap="round" className="animate-dash" style={{ animationDuration: '30s' }} />
                    <path d="M 160 300 C 250 290 250 250 320 240" stroke="#6366F1" strokeWidth="2.5" fill="none" strokeDasharray="6 8" strokeLinecap="round" className="animate-dash" style={{ animationDuration: '30s' }} />
                    
                    <path d="M 440 230 C 510 220 530 110 590 100" stroke="#10B981" strokeWidth="2.5" fill="none" strokeDasharray="6 8" strokeLinecap="round" className="animate-dash" style={{ animationDuration: '30s' }} />
                    <path d="M 440 240 C 510 240 530 240 590 240" stroke="#10B981" strokeWidth="2.5" fill="none" strokeDasharray="6 8" strokeLinecap="round" className="animate-dash" style={{ animationDuration: '30s' }} />
                    <path d="M 440 250 C 510 260 530 370 590 380" stroke="#10B981" strokeWidth="2.5" fill="none" strokeDasharray="6 8" strokeLinecap="round" className="animate-dash" style={{ animationDuration: '30s' }} />

                    {/* Left nodes (Feeds In) */}
                    <g transform="translate(160, 150)">
                      <circle cx="0" cy="0" r="18" fill="#E0F2FE" stroke="#6366F1" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-indigo-505" />
                      <text cx="0" cy="0" dy="3.5" fill="#6366F1" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-outfit dark:fill-indigo-400">12</text>
                      <text x="-25" y="0" dy="4" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="end" className="font-outfit dark:fill-slate-200">Finance</text>
                    </g>
                    <g transform="translate(160, 300)">
                      <circle cx="0" cy="0" r="18" fill="#E0F2FE" stroke="#6366F1" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-indigo-505" />
                      <text cx="0" cy="0" dy="3.5" fill="#6366F1" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-outfit dark:fill-indigo-400">6</text>
                      <text x="-25" y="0" dy="4" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="end" className="font-outfit dark:fill-slate-200">Legal</text>
                    </g>

                    {/* Central Focus Node */}
                    <g transform="translate(380, 240)">
                      <circle cx="0" cy="0" r="48" fill="#0B1F3A" stroke="#6366F1" strokeWidth="2" className="glow-effect" />
                      <text cx="0" cy="-5" dy="0" fill="#FFFFFF" fontSize="20" fontWeight="extrabold" textAnchor="middle" className="font-outfit">18</text>
                      <text cx="0" cy="15" dy="0" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-outfit uppercase tracking-widest">Procurement</text>
                    </g>

                    {/* Right nodes (Flows To) */}
                    <g transform="translate(600, 100)">
                      <circle cx="0" cy="0" r="18" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-emerald-500" />
                      <text cx="0" cy="0" dy="3.5" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-outfit dark:fill-emerald-450">8</text>
                      <text x="25" y="0" dy="4" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="start" className="font-outfit dark:fill-slate-200">HR</text>
                    </g>
                    <g transform="translate(600, 240)">
                      <circle cx="0" cy="0" r="18" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-emerald-500" />
                      <text cx="0" cy="0" dy="3.5" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-outfit dark:fill-emerald-450">14</text>
                      <text x="25" y="0" dy="4" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="start" className="font-outfit dark:fill-slate-200">IT</text>
                    </g>
                    <g transform="translate(600, 380)">
                      <circle cx="0" cy="0" r="18" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-emerald-500" />
                      <text cx="0" cy="0" dy="3.5" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-outfit dark:fill-emerald-450">9</text>
                      <text x="25" y="0" dy="4" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="start" className="font-outfit dark:fill-slate-200">Customer Service</text>
                    </g>
                  </svg>

                  <div className="flex justify-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 font-outfit mt-4">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-brand-indigo" /> Incoming Feeds</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-brand-emerald" /> Outgoing Flows</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="matrix-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="overflow-x-auto"
                >
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit">Department</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">Procure (PR)</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">Finance (FN)</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">HR</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">IT</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">Legal (LG)</th>
                        <th className="p-3 font-bold text-slate-900 dark:text-slate-200 font-outfit text-center">Customer (CS)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                      {[
                        { dept: 'Procurement', cells: ['·', 'Strong', 'Light', 'Strong', 'Supporting', 'Supporting'] },
                        { dept: 'Finance', cells: ['Strong', '·', 'Supporting', 'Strong', 'Supporting', 'Light'] },
                        { dept: 'HR', cells: ['Light', 'Supporting', '·', 'Strong', 'Light', 'Light'] },
                        { dept: 'IT', cells: ['Strong', 'Strong', 'Strong', '·', 'Supporting', 'Strong'] },
                        { dept: 'Legal', cells: ['Supporting', 'Supporting', 'Light', 'Supporting', '·', 'Supporting'] },
                        { dept: 'Customer Service', cells: ['Supporting', 'Light', 'Light', 'Strong', 'Supporting', '·'] }
                      ].map((row) => (
                        <tr key={row.dept} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50">
                          <td className="p-3 font-bold text-slate-800 dark:text-slate-200">{row.dept}</td>
                          {row.cells.map((cell, idx) => (
                            <td key={idx} className="p-3 text-center">
                              {cell === '·' ? (
                                <span className="text-slate-300 dark:text-slate-600 font-bold">-</span>
                              ) : cell === 'Strong' ? (
                                <span className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40 text-brand-indigo dark:text-indigo-400 px-2 py-0.5 rounded font-bold text-[10px]">S</span>
                              ) : cell === 'Supporting' ? (
                                <span className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded font-bold text-[10px]">M</span>
                              ) : (
                                <span className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded font-bold text-[10px]">L</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-center gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 font-outfit mt-5">
                    <span><b className="text-brand-indigo dark:text-indigo-400">S</b> Strong dependency</span>
                    <span><b className="text-amber-500 dark:text-amber-450">M</b> Supporting link</span>
                    <span><b className="text-slate-500 dark:text-slate-450">L</b> Light touchpoint</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Designed Processes (Governance) */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-indigo-400 font-outfit">Process governance</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-slate-900 dark:text-white leading-tight">
                Designed Processes, Reviewed and Endorsed
              </h2>
              <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
                No process goes live on a hunch. Tasree routes every model through review, endorsement, and approval, with role-based accountability and a full audit trail.
              </p>

              <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-brand-emerald dark:text-emerald-400 flex-shrink-0">✓</span>
                  Role-based review, endorsement, and approval steps
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-brand-emerald dark:text-emerald-400 flex-shrink-0">✓</span>
                  Electronic sign-off on every published version
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-brand-emerald dark:text-emerald-400 flex-shrink-0">✓</span>
                  Version history with full rollback functionality
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-brand-emerald dark:text-emerald-400 flex-shrink-0">✓</span>
                  Audit trail of who approved what, and when
                </li>
              </ul>
            </div>

            {/* Right Visualizer */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-lg text-left">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest font-outfit">Approval Workflow</span>
                  <span className="text-[9px] font-bold text-brand-indigo dark:text-indigo-400 font-outfit uppercase">Draft to Published</span>
                </div>

                <div className="space-y-2">
                  {[
                    { num: '1', name: 'Draft', desc: 'Model the process structure', role: 'Author' },
                    { num: '2', name: 'Review', desc: 'Comment & refine visual gates', role: 'Reviewer / QA' },
                    { num: '3', name: 'Endorse', desc: 'Confirm it reflects operations reality', role: 'Process Owner' },
                    { num: '4', name: 'Approve', desc: 'Sign off to publish release', role: 'Dept. Head' }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all">
                      <div className="flex gap-3 items-center">
                        <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-xs font-bold text-brand-indigo dark:text-indigo-400 font-outfit">
                          {step.num}
                        </span>
                        <div>
                          <div className="text-xs font-extrabold text-slate-800 dark:text-slate-200 font-outfit">{step.name}</div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{step.desc}</div>
                        </div>
                      </div>
                      <span className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-brand-indigo dark:text-indigo-400 text-[8px] font-bold px-2 py-0.5 rounded-full font-outfit uppercase">
                        {step.role}
                      </span>
                    </div>
                  ))}
                  <div className="bg-gradient-primary text-white rounded-xl p-3 flex gap-3 items-center shadow-md">
                    <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold font-outfit">
                      ✓
                    </span>
                    <div>
                      <div className="text-xs font-extrabold font-outfit">Publish</div>
                      <div className="text-[10px] text-white/80 font-semibold">Live and governed in the repositories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ISO 9001 Compliance Loop */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visualizer */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-lg text-left">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest font-outfit">Continual Improvement</span>
                  <span className="text-[9px] font-bold text-brand-indigo dark:text-indigo-400 font-outfit uppercase">ISO 9001 Cycle</span>
                </div>

                <div className="space-y-2">
                  {[
                    { num: '1', name: 'Document', desc: 'Model & control process taxonomy' },
                    { num: '2', name: 'Operate', desc: 'Run steps with digital approvals' },
                    { num: '3', name: 'Evaluate', desc: 'Mine as-is logs and check conformance' },
                    { num: '4', name: 'Improve', desc: 'Optimize anomalies and deploy version' }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl p-3.5 flex gap-3.5 items-center hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all">
                      <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-xs font-bold text-brand-indigo dark:text-indigo-400 font-outfit">
                        {step.num}
                      </span>
                      <div>
                        <div className="text-xs font-extrabold text-slate-800 dark:text-slate-200 font-outfit">{step.name}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo dark:text-indigo-400 font-outfit">Compliance built in</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-slate-900 dark:text-white leading-tight">
                Stay Aligned with ISO 9001
              </h2>
              <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
                Tasree turns the standard's intent (documented, controlled, continually improved processes) into everyday operations without the paperwork overhead.
              </p>

              <ul className="space-y-3 pt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  Documented processes in one governed repository
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  Clear process owners, approvals, and controls on every activity
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  Mine as-is logs to track standard conformance in real time
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-brand-indigo dark:text-indigo-400 flex-shrink-0">✓</span>
                  Close the loop: discover, analyze, optimize, and redeploy
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-full flex items-center gap-1.5 shadow-sm font-outfit">
                  <Shield className="w-3.5 h-3.5 text-brand-emerald" /> ISO 9001 Certified
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-full flex items-center gap-1.5 shadow-sm font-outfit">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo" /> Governed Audits
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden bg-[radial-gradient(800px_400px_at_80%_10%,rgba(99,102,241,0.22),transparent_60%)]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit leading-tight text-white">
            See Process Management on One of Your Own Processes
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Benchmark your operational nodes L1 to L4, map cross-functional dependencies, and configure review stages in our sandbox environment.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/20 flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              Request Custom Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-4 bg-slate-800 hover:bg-slate-700/80 active:scale-[0.98] text-slate-200 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              Watch Video Walkthrough
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
