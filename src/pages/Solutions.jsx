import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Building2, Activity, Factory, Truck, Landmark, 
  ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, UserCheck, 
  Users, HelpCircle, Star, Heart, Clock, AlertTriangle, DollarSign
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function Solutions({ onRequestDemo }) {
  const [activeTab, setActiveTab] = useState('banking');

  const industries = [
    { id: 'banking', label: 'Banking', icon: Landmark },
    { id: 'finance', label: 'Financial Services', icon: Building2 },
    { id: 'healthcare', label: 'Healthcare', icon: Activity },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'government', label: 'Government', icon: Building }
  ];

  const solutionsData = {
    banking: {
      title: "Banking Operations",
      challenge: "High transactional audit latency, manual KYC review delays, and compliance approval bottlenecks on consumer loan applications.",
      solution: "Tasree3 reconstructs end-to-end banking transactions from mainframe server logs, automatically flagging KYC bottleneck queues and routing compliance approvals.",
      outcomes: [
        { label: "Onboarding Cycle Time", value: "60% Faster" },
        { label: "Audit Log Transparency", value: "100% Mapped" },
        { label: "Annual Compliance Costs", value: "$1.2M Saved" }
      ],
      story: "Vanguard Credit Union automated their mortgage verification using Tasree3. They resolved a 4-day approval bottleneck, reducing verification cycles to just 3.5 hours.",
      dashboard: "banking"
    },
    finance: {
      title: "Financial Services",
      challenge: "Manual invoice validation, credit approval discrepancies, and high audit fees across accounts payable departments.",
      solution: "Tasree3 stitches order-to-cash event logs, highlighting duplicate invoice processing, billing leaks, and unauthorized validation pathway bypasses.",
      outcomes: [
        { label: "Cycle Delay Reduction", value: "45% Saved" },
        { label: "Billing Rework Loops", value: "90% Removed" },
        { label: "External Audit Fees", value: "$800k Saved" }
      ],
      story: "Apex Global Finance optimized invoice validation paths, discovering a recurring rework loop. Ingesting transaction logs removed 45% of manual sign-off overhead.",
      dashboard: "finance"
    },
    healthcare: {
      title: "Healthcare",
      challenge: "Emergency room patient queue bottlenecks, slow clinical hand-offs, and HIPAA regulatory compliance auditing.",
      solution: "Tasree3 maps clinical workflows using electronic health record (EHR) timestamps. Audits compliance automatically against HIPAA and flags treatment bottlenecks.",
      outcomes: [
        { label: "Patient Wait Time", value: "40% Cut" },
        { label: "SLA Pathway Breaches", value: "50% Reduced" },
        { label: "HIPAA Audit Conformity", value: "100% Verified" }
      ],
      story: "Novis Medical Center analyzed emergency room intake records with Tasree3 process mining. Triage-to-treatment delays were cut by 40% in just two weeks.",
      dashboard: "healthcare"
    },
    manufacturing: {
      title: "Manufacturing & Supply",
      challenge: "Shopfloor assembly cycle latency, supplier delivery delays, and quality assurance bottlenecks across parts tracking.",
      solution: "Tasree3 traces assembly log milestones from ERP databases. Isolates material delivery backlogs and monitors production cycle times in real-time.",
      outcomes: [
        { label: "Assembly Cycle Time", value: "35% Faster" },
        { label: "Inventory Holding Costs", value: "20% Savings" },
        { label: "QA Checkpoint Visibility", value: "100% Tracked" }
      ],
      story: "Acme Industrial mapped assembly telemetry logs with Tasree3. They identified key machinery bottlenecks, increasing shopfloor throughput by 35%.",
      dashboard: "manufacturing"
    },
    logistics: {
      title: "Logistics & Shipping",
      challenge: "Port delivery queues, carrier hand-offs bottlenecks, and supply chain dispatch delay penalties.",
      solution: "Tasree3 mines warehouse execution database logs. Maps carrier routes, isolates customs clearance delays, and automatically pings carriers on late steps.",
      outcomes: [
        { label: "Documentation Cycles", value: "5x Faster" },
        { label: "Carrier Hand-off Delays", value: "25% Reduced" },
        { label: "Port Demurrage Penalties", value: "Fully Avoided" }
      ],
      story: "Velo Logistics resolved carrier queue delays by mining shipping log metrics. Dynamic routing recommendations cut port demurrages by 25%.",
      dashboard: "logistics"
    },
    government: {
      title: "Government Services",
      challenge: "Citizen visa approval backlogs, manual document reviews, and public service transparent audit logs.",
      solution: "Tasree3 models and structures public agency visa processing steps, tracking review cycles and automating application sign-offs.",
      outcomes: [
        { label: "Visa Processing Speed", value: "50% Faster" },
        { label: "Audit Logs Transparency", value: "100% Compliant" },
        { label: "Public Service Savings", value: "$3.0M Saved" }
      ],
      story: "The Federal Ministry of Interior migrated document reviews to Tasree3's governance engine. Application review backlogs were cut by 50%, saving citizens 14 days.",
      dashboard: "government"
    }
  };

  const activeSol = solutionsData[activeTab];

  return (
    <>
      <SEO 
        title="Enterprise Industry Solutions - Banking, Healthcare & Government" 
        description="Explore how Tasree3 process intelligence models, mines, and secures operations for Banking, Financial Services, Healthcare, Manufacturing, Logistics, and Government."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-10 overflow-hidden text-center bg-slate-50/50">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-indigo/[0.04] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              Tailored Process Industry Mapping
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900 max-w-4xl mx-auto">
            Process Intelligence for <span className="text-gradient">Operational Leaders</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Discover how Tasree3 process modeling, log mining, and automated governance workflows drive compliance and efficiency across key enterprise sectors.
          </p>
        </div>
      </section>

      {/* Industry Selector Grid Tabs */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 bg-slate-100 border border-slate-200/50 p-2 rounded-2xl">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`p-3.5 rounded-xl text-center border transition-all cursor-pointer focus:outline-none flex flex-col justify-center items-center gap-1.5 ${
                    isActive 
                      ? 'bg-gradient-primary border-brand-indigo/40 text-white shadow-lg shadow-brand-indigo/10' 
                      : 'bg-transparent border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold font-outfit block">{ind.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structured Details with Custom Dashboards */}
      <section className="pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/50 border border-slate-200/80 shadow-xl rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative overflow-hidden">
            
            {/* Left Column Copywriting */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">
                  Tasree3 for {activeSol.title}
                </h2>
                
                <div className="space-y-3 mt-4">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-red-500 tracking-wider block font-outfit">Industry Challenge</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold mt-0.5">{activeSol.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-brand-indigo tracking-wider block font-outfit">Tasree3 Solution</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold mt-0.5">{activeSol.solution}</p>
                  </div>
                </div>
              </div>

              {/* Outcomes list */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[9px] uppercase font-bold text-brand-emerald tracking-wider block font-outfit">Business Outcomes</span>
                <div className="grid grid-cols-3 gap-3">
                  {activeSol.outcomes.map((o, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-slate-200/60 rounded-xl shadow-sm text-left">
                      <span className="text-base font-extrabold text-slate-900 font-outfit block">{o.value}</span>
                      <span className="text-[8px] text-slate-400 font-bold block mt-0.5 leading-tight">{o.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Story Quote card */}
              <div className="p-4 bg-brand-indigo/5 border border-brand-indigo/20 rounded-2xl flex gap-3 items-start mt-4">
                <div className="p-1 bg-brand-indigo rounded-full text-white mt-1"><Star className="w-3.5 h-3.5" /></div>
                <div>
                  <span className="text-[8px] uppercase font-bold text-brand-indigo font-outfit tracking-widest block">Customer Case Study</span>
                  <p className="text-[10px] text-slate-600 italic font-semibold leading-relaxed mt-1">
                    &ldquo;{activeSol.story}&rdquo;
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column KPI Dashboards visualizers */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest font-outfit">Operations KPI Dashboard</span>
                <span className="text-[8px] bg-indigo-50 border border-indigo-200/50 text-brand-indigo px-2 py-0.5 rounded font-bold uppercase tracking-wider font-outfit">
                  Live metrics
                </span>
              </div>

              {/* Interactive Visual content */}
              <div className="flex-grow flex items-center justify-center p-2 min-h-[180px]">
                <AnimatePresence mode="wait">
                  
                  {/* Banking Dashboard */}
                  {activeSol.dashboard === 'banking' && (
                    <motion.div 
                      key="banking"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4 text-left"
                    >
                      {/* Gauge circle */}
                      <div className="flex items-center justify-center gap-6">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                          {/* Inner dial */}
                          <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="6" fill="none" />
                          <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="6" strokeDasharray="251" strokeDashoffset="45" fill="none" />
                          <text x="50" y="55" fill="#1E293B" fontSize="11" fontWeight="extrabold" textAnchor="middle" className="font-outfit">86.2%</text>
                        </svg>
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-400 font-bold block uppercase">Loan KYC Throughput</span>
                          <span className="text-xs font-bold text-slate-800 block">SLA Rate Target: &gt;85%</span>
                          <span className="text-[9px] text-brand-emerald bg-emerald-50 px-1.5 py-0.2 border border-emerald-200/20 rounded font-bold uppercase">Pass</span>
                        </div>
                      </div>
                      <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                          <span>Active Application Audits:</span>
                          <span className="text-slate-800">4,210 Cases</span>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-500 font-bold pt-1 border-t border-slate-200/50">
                          <span>Separation of Duties Check:</span>
                          <span className="text-brand-emerald">Compliant</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Finance Dashboard */}
                  {activeSol.dashboard === 'finance' && (
                    <motion.div 
                      key="finance"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-3.5 text-left"
                    >
                      {/* Bar chart */}
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Accounts Payable processing (Days)</span>
                      <div className="flex justify-between items-end h-20 px-2 bg-slate-50/50 p-2 rounded-xl border border-slate-100/50">
                        {[
                          { month: 'Feb', days: 12.8, bg: 'bg-slate-300' },
                          { month: 'Mar', days: 9.4, bg: 'bg-slate-300' },
                          { month: 'Apr', days: 6.2, bg: 'bg-slate-300' },
                          { month: 'May', days: 4.2, bg: 'bg-brand-indigo' }
                        ].map((b, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <span className="text-[8px] font-bold text-slate-500">{b.days}d</span>
                            <div className={`w-6 ${b.bg} rounded-t`} style={{ height: `${b.days * 4}px` }} />
                            <span className="text-[8px] text-slate-400 font-bold">{b.month}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                        <span>Invoice Rework loop:</span>
                        <span className="text-brand-indigo">4.2% Rate</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Healthcare Dashboard */}
                  {activeSol.dashboard === 'healthcare' && (
                    <motion.div 
                      key="healthcare"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-3.5 text-left"
                    >
                      {/* Emergency room Wait dial */}
                      <div className="flex items-center justify-around">
                        <div className="text-center space-y-1">
                          <span className="text-[9px] text-slate-400 font-bold uppercase block">ER Triage SLA</span>
                          <span className="text-xl font-extrabold text-slate-800 font-outfit mt-0.5 block">14.8 min</span>
                          <span className="text-[8px] bg-brand-emerald/10 text-brand-emerald px-1.5 rounded font-bold uppercase">40% Wait Cut</span>
                        </div>

                        <svg className="w-16 h-16" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="35" stroke="#F1F5F9" strokeWidth="5" fill="none" />
                          <circle cx="50" cy="50" r="35" stroke="#8B5CF6" strokeWidth="5" strokeDasharray="220" strokeDashoffset="0" fill="none" />
                          <text x="50" y="55" fill="#8B5CF6" fontSize="10" fontWeight="extrabold" textAnchor="middle" className="font-outfit">HIPAA</text>
                        </svg>
                      </div>

                      <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                        <div className="flex justify-between text-[8px] text-slate-500 font-bold">
                          <span>Clinical Path Compliance score:</span>
                          <span className="text-slate-800 font-bold font-sans">98.4% Compliant</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Manufacturing Dashboard */}
                  {activeSol.dashboard === 'manufacturing' && (
                    <motion.div 
                      key="manufacturing"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full grid grid-cols-2 gap-3.5 text-left"
                    >
                      <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl">
                        <span className="text-[8px] text-slate-400 font-bold block uppercase">Shopfloor Speed</span>
                        <span className="text-sm font-extrabold text-slate-800 font-outfit mt-0.5 block">4.2 min/unit</span>
                        <span className="text-[7px] text-brand-emerald font-bold mt-1 block uppercase">35% Increase</span>
                      </div>
                      
                      <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl">
                        <span className="text-[8px] text-slate-400 font-bold block uppercase">QA check pass</span>
                        <span className="text-sm font-extrabold text-slate-800 font-outfit mt-0.5 block">99.8% Rate</span>
                        <span className="text-[7px] text-brand-indigo font-bold mt-1 block uppercase">SLA Compliant</span>
                      </div>

                      <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl col-span-2 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                          <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-ping" />
                          Assembly line telemetry online
                        </div>
                        <span className="text-[9px] text-slate-400 font-semibold font-sans">ERP Sync active</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Logistics Dashboard */}
                  {activeSol.dashboard === 'logistics' && (
                    <motion.div 
                      key="logistics"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-3.5 text-left"
                    >
                      {/* Process timeline map */}
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Shipping Log dispatch timeline</span>
                      <div className="relative p-2.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-semibold text-slate-700">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                            <span>1. Ingest Cargo</span>
                          </div>
                          <span className="text-slate-400">0.2h</span>
                        </div>
                        <div className="flex justify-between items-center text-[9px] font-semibold text-slate-700">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span>2. Customs clearance</span>
                          </div>
                          <span className="text-yellow-600 font-bold">1.2h Delay</span>
                        </div>
                        <div className="flex justify-between items-center text-[9px] font-semibold text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-slate-200" />
                            <span>3. Carrier delivery</span>
                          </div>
                          <span>-</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Government Dashboard */}
                  {activeSol.dashboard === 'government' && (
                    <motion.div 
                      key="government"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4 text-left"
                    >
                      <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[8px] text-slate-400 font-bold block uppercase">Visa Documents Processed</span>
                          <span className="text-base font-extrabold text-slate-800 font-outfit mt-0.5 block">12,410 cases</span>
                        </div>
                        <span className="bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-[8px] px-2 py-0.5 rounded font-extrabold uppercase font-outfit">
                          Monthly
                        </span>
                      </div>
                      
                      <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[8px] text-slate-400 font-bold block uppercase">Avg document sign-off speed</span>
                          <span className="text-base font-extrabold text-slate-800 font-outfit mt-0.5 block">1.4 Days</span>
                        </div>
                        <span className="text-[8px] bg-brand-emerald/10 text-brand-emerald px-2 py-0.5 rounded font-extrabold uppercase font-outfit">
                          50% Faster
                        </span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Confirm details indicator */}
              <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-[8.5px] text-slate-400 font-bold font-outfit uppercase">
                <span>Data Ingestion: Active</span>
                <span className="text-brand-emerald">Systems synchronized</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Transform Operations</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight">
            Ready to Optimize Your Industry?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Contact our engineering solutions team to design custom log adapters and continuous governance rule maps.
          </p>
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-gradient-primary hover:opacity-90 active:scale-95 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 text-sm cursor-pointer focus:outline-none"
          >
            Request Enterprise Demo
          </button>
        </div>
      </section>
    </>
  );
}
