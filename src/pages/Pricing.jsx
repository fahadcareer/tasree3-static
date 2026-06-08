import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, HelpCircle, ChevronDown, DollarSign, Calculator, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function Pricing({ onRequestDemo }) {
  const [billingCycle, setBillingCycle] = useState('annual');

  // ROI Calculator States
  const [employees, setEmployees] = useState(50);
  const [hourlyWage, setHourlyWage] = useState(40);
  const [wastedHours, setWastedHours] = useState(6);

  // ROI calculations
  const annualWaste = employees * hourlyWage * wastedHours * 52;
  const tasree3Savings = Math.round(annualWaste * 0.60); // assume 60% process waste reduction
  const licensingCost = employees * (billingCycle === 'annual' ? 39 : 49) * 12;
  const netReturn = Math.max(0, tasree3Savings - licensingCost);

  // FAQ State
  const [activeFaqIdx, setActiveFaqIdx] = useState(null);

  const faqs = [
    {
      q: "How is a 'User' defined for the Professional plan?",
      a: "A user is defined as any team member with edit, design, or review permissions on the Process modeling canvas. View-only access for published processes is completely free for all team members."
    },
    {
      q: "What is event log volume, and how does it apply to Enterprise?",
      a: "Event log volume refers to the row count of activity logs ingested into our Process Mining engine from databases (like SAP or Oracle). Enterprise contracts include a generous baseline and support custom scales (100M+ events/month)."
    },
    {
      q: "Can we migrate our existing Visio or Signavio models?",
      a: "Yes! Our Enterprise plan includes complimentary migration support. You can upload standard BPMN 2.0 XML formats directly, or work with our engineering team to convert proprietary flowchart files."
    },
    {
      q: "Is on-premise private VPC hosting supported?",
      a: "Yes. For Enterprise accounts with strict data sovereignty requirements, we support dedicated deployments inside private AWS, Azure, or Google Cloud VPC boundaries."
    }
  ];

  return (
    <>
      <SEO 
        title="SaaS Pricing Plans - Professional & Enterprise Options" 
        description="View pricing details for Tasree3 Process modeling, mining, and governance. Choose between the Professional modeling plan or Custom Enterprise operations suite."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-6 overflow-hidden bg-slate-50/50">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
            <DollarSign className="w-3.5 h-3.5" />
            Flexible SaaS Tiers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mt-3 leading-tight">
            Simple Plans, <span className="text-gradient">Exponential</span> Operational Return
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Select the modeling package matching your team size or consult our operations engineers to construct custom enterprise process mining pipelines.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>Billed Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-12 h-6 bg-slate-200 hover:bg-slate-300 rounded-full relative p-1 flex items-center transition-colors focus:outline-none cursor-pointer"
            >
              <motion.div 
                animate={{ x: billingCycle === 'annual' ? 24 : 0 }}
                className="w-4 h-4 bg-brand-indigo rounded-full" 
              />
            </button>
            <span className={`text-sm flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
              Billed Annually
              <span className="px-2 py-0.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-[10px] rounded font-bold uppercase tracking-wider">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Professional Card */}
            <div className="glassmorphism-card bg-white border border-slate-200/80 p-8 rounded-3xl text-left relative flex flex-col justify-between overflow-hidden shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-slate-900">Professional</h3>
                  <p className="text-xs text-slate-500 mt-2 min-h-[40px] font-medium">For growing teams standardizing and documenting process workflows collaboratively.</p>
                </div>

                <div className="pt-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 font-outfit">
                    {billingCycle === 'annual' ? '$39' : '$49'}
                  </span>
                  <span className="text-xs text-slate-400 font-bold"> / user / month</span>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Includes:</h4>
                  <ul className="space-y-3">
                    {[
                      "Process Modeling (BPMN 2.0)",
                      "Basic Reporting Dashboards",
                      "Up to 5 Active Process Models",
                      "Collaborative Canvas Comments",
                      "Standard Email Support",
                      "Secure SOC2 cloud hosting"
                    ].map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-slate-500 items-start leading-snug font-medium">
                        <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={onRequestDemo}
                  className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all active:scale-95 cursor-pointer focus:outline-none border border-slate-200"
                >
                  Request Professional Trial
                </button>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="glassmorphism-card bg-white border border-brand-indigo/60 p-8 rounded-3xl text-left relative flex flex-col justify-between overflow-hidden shadow-xl shadow-brand-indigo/5">
              <div className="absolute top-0 right-0 bg-brand-indigo text-white text-[10px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-bl-xl">
                Recommended
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-slate-900">Enterprise</h3>
                  <p className="text-xs text-slate-500 mt-2 min-h-[40px] font-medium">For global organizations linking process maps to transactional data logs, compliance gates, and AI tools.</p>
                </div>

                <div className="pt-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 font-outfit">
                    Custom
                  </span>
                  <span className="text-xs text-slate-400 font-bold"> / volume structures</span>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Includes:</h4>
                  <ul className="space-y-3">
                    {[
                      "Unlimited Models & Directories",
                      "Process Mining Ingestion (CSV/XES/APIs)",
                      "Governance workflows (Draft -> Approved)",
                      "Automated Rollback & Policy Matrix",
                      "AI Copilot assistant diagnostics",
                      "SSO & Custom KMS security controls",
                      "Dedicated 24/7 Slack Engineer SLA"
                    ].map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-slate-500 items-start leading-snug font-medium">
                        <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={onRequestDemo}
                  className="w-full py-4 bg-gradient-primary text-white font-bold rounded-xl text-xs transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-brand-indigo/20 cursor-pointer focus:outline-none"
                >
                  Contact Enterprise Sales
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">Investment Analysis</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Calculate Your Process ROI</h2>
            <p className="text-slate-500 mt-3 text-sm font-medium">
              Adjust employee counts, wages, and weekly lost hours to calculate the potential operational return of deploying Tasree3 process intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-lg text-left">
            {/* Sliders on Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Calculator className="w-5 h-5 text-brand-indigo" />
                <h4 className="text-base font-bold text-slate-800 font-outfit">Operational Variables</h4>
              </div>

              {/* Slider 1: Employees */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Number of Operations Employees:</span>
                  <span className="text-brand-indigo font-outfit">{employees} team members</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  value={employees} 
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full accent-brand-indigo cursor-ew-resize"
                />
              </div>

              {/* Slider 2: Wage */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Average Hourly Employee Rate ($):</span>
                  <span className="text-brand-indigo font-outfit">${hourlyWage} / hour</span>
                </div>
                <input 
                  type="range" 
                  min="15" 
                  max="150" 
                  value={hourlyWage} 
                  onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                  className="w-full accent-brand-indigo cursor-ew-resize"
                />
              </div>

              {/* Slider 3: Hours Wasted */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Weekly Wasted Hours (Delays/Manual Tracing):</span>
                  <span className="text-brand-indigo font-outfit">{wastedHours} hours / week</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="20" 
                  value={wastedHours} 
                  onChange={(e) => setWastedHours(parseInt(e.target.value))}
                  className="w-full accent-brand-indigo cursor-ew-resize"
                />
              </div>
            </div>

            {/* Calculations Result Output on Right */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl self-stretch flex flex-col justify-between text-left space-y-4">
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-outfit">Projected Annual Financial Waste</span>
                <span className="text-xl font-extrabold text-red-500 font-outfit mt-1 block">
                  ${annualWaste.toLocaleString()}
                </span>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">
                  Financial loss in employee time wasted waiting on bottleneck queues or manually reconstructing procedures.
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-4">
                <span className="text-[9px] uppercase font-bold text-brand-emerald tracking-wider block font-outfit">Estimated Savings with Tasree3 (60% Efficiency)</span>
                <span className="text-2xl font-extrabold text-brand-emerald font-outfit mt-1 block">
                  ${tasree3Savings.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-slate-200/80 pt-4 flex justify-between items-center text-xs">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-outfit">Net Annual Operations Return</span>
                  <span className="text-base font-extrabold text-slate-800 font-outfit mt-0.5 block">
                    +${netReturn.toLocaleString()}
                  </span>
                </div>
                <button 
                  onClick={onRequestDemo}
                  className="px-4 py-2 bg-gradient-primary hover:opacity-90 active:scale-95 text-white font-bold rounded-lg text-[10px] transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none"
                >
                  Verify ROI
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-24 bg-white border-b border-slate-200/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Detailed Breakdown</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Feature Comparison Matrix</h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-3xl shadow-lg">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-outfit font-bold">
                  <th className="p-5">Feature Capability</th>
                  <th className="p-5">Professional</th>
                  <th className="p-5">Enterprise Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-500">
                {/* Modeling */}
                <tr>
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/20" colSpan="3">Process Modeling & Design</td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">BPMN 2.0 Canvas Editor</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-indigo" /></td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Model Limits</td>
                  <td className="p-5">5 Active Models</td>
                  <td className="p-5 text-slate-900 font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Dictionary Attributes Catalog</td>
                  <td className="p-5">Basic (Roles, Systems)</td>
                  <td className="p-5 text-slate-900 font-semibold">Unlimited custom variables</td>
                </tr>

                {/* Mining */}
                <tr>
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/20" colSpan="3">Process Mining & Analytics</td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Chronological Event Discovery</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Bottleneck Idle Queue Monitors</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Variant Path Audit Comparison</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>

                {/* Governance */}
                <tr>
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/20" colSpan="3">Governance & Security</td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Release Approval Workflow Chains</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">SAML / SSO Federated Identity</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Dedicated Private VPC Deployment</td>
                  <td className="p-5 text-slate-400">Not Included</td>
                  <td className="p-5"><Check className="w-4.5 h-4.5 text-brand-emerald" /></td>
                </tr>

                {/* Support */}
                <tr>
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/20" colSpan="3">Support & Integration</td>
                </tr>
                <tr>
                  <td className="p-5 pl-8">Support SLA Response</td>
                  <td className="p-5">Standard Email Support</td>
                  <td className="p-5 text-slate-900 font-semibold">24/7 dedicated Slack Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs Accordion */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">Common Queries</span>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mt-2">Pricing FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = activeFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all text-left"
                >
                  <button
                    onClick={() => setActiveFaqIdx(isExpanded ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-indigo flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-slate-800' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-slate-50 border-t border-slate-100"
                      >
                        <p className="p-5 text-[11px] text-slate-500 font-semibold leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}
