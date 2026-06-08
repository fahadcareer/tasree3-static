import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Brain, Clock, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

const insightAlerts = {
  all: [
    { type: 'warning', text: 'Invoice processing loop detected. 34 cases bypassed invoice-PO validation.', time: '2 mins ago', icon: AlertTriangle, color: 'text-amber-600 bg-amber-50' },
    { type: 'idea', text: 'AI recommendation: Automate step 3 of order intake. Expected savings: $4.2K/mo.', time: '10 mins ago', icon: Lightbulb, color: 'text-brand-emerald bg-emerald-50' },
    { type: 'success', text: 'Process compliance score for Procurement recovered to 99.2%.', time: '1 hr ago', icon: CheckCircle2, color: 'text-indigo-600 bg-indigo-50' }
  ],
  procure: [
    { type: 'warning', text: 'Invoice processing loop detected. 34 cases bypassed invoice-PO validation.', time: '2 mins ago', icon: AlertTriangle, color: 'text-amber-600 bg-amber-50' },
    { type: 'success', text: 'Process compliance score for Procurement recovered to 99.2%.', time: '1 hr ago', icon: CheckCircle2, color: 'text-indigo-600 bg-indigo-50' }
  ],
  support: [
    { type: 'idea', text: 'AI recommendation: Automate step 3 of order intake. Expected savings: $4.2K/mo.', time: '10 mins ago', icon: Lightbulb, color: 'text-brand-emerald bg-emerald-50' },
    { type: 'warning', text: 'Customer escalations route has a 4.2 hour queue bottleneck.', time: '3 hrs ago', icon: AlertTriangle, color: 'text-red-600 bg-red-50' }
  ]
};

const variances = {
  all: [
    { label: 'Standard Path (Happy Path)', count: '52,840 cases', pct: '72%', color: 'bg-brand-indigo' },
    { label: 'Path B (Bypassed Verification)', count: '10,920 cases', pct: '15%', color: 'bg-amber-500' },
    { label: 'Path C (Multi-Approval Loop)', count: '7,290 cases', pct: '10%', color: 'bg-brand-purple' },
    { label: 'Other Deviant Variants', count: '2,189 cases', pct: '3%', color: 'bg-red-500' }
  ],
  procure: [
    { label: 'Standard Path (Happy Path)', count: '24,200 cases', pct: '82%', color: 'bg-brand-indigo' },
    { label: 'Path B (Direct Invoice Bypass)', count: '4,120 cases', pct: '14%', color: 'bg-amber-500' },
    { label: 'Path C (Over-limit signoff)', count: '1,180 cases', pct: '4%', color: 'bg-red-500' }
  ],
  support: [
    { label: 'Happy Path resolution', count: '28,640 cases', pct: '64%', color: 'bg-brand-indigo' },
    { label: 'Path B (Direct Escalations)', count: '12,090 cases', pct: '27%', color: 'bg-brand-purple' },
    { label: 'Path C (Tier 3 loop)', count: '4,030 cases', pct: '9%', color: 'bg-red-500' }
  ]
};

export default function KPIDashboard() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 md:p-8 relative overflow-hidden shadow-2xl text-left">
      {/* Decorative Lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
            <h4 className="text-lg font-bold font-outfit text-slate-900">Tasree3 Control Center</h4>
          </div>
          <p className="text-xs text-slate-500 mt-1 font-medium">Cross-system optimization metrics aggregated from live event streams.</p>
        </div>

        {/* Tab Filters */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50 self-stretch sm:self-auto justify-between sm:justify-start">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors focus:outline-none cursor-pointer ${filter === 'all' ? 'bg-gradient-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            All Systems
          </button>
          <button
            onClick={() => setFilter('procure')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors focus:outline-none cursor-pointer ${filter === 'procure' ? 'bg-gradient-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Procurement
          </button>
          <button
            onClick={() => setFilter('support')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors focus:outline-none cursor-pointer ${filter === 'support' ? 'bg-gradient-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Support Tickets
          </button>
        </div>
      </div>

      {/* Key KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-slate-100 relative z-10">
        
        {/* KPI 1 */}
        <div className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit">Efficiency Score</span>
            <Activity className="w-4 h-4 text-brand-indigo" />
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-outfit">
              {filter === 'all' ? '94.2%' : filter === 'procure' ? '96.5%' : '90.1%'}
            </div>
            <span className="text-[10px] text-brand-emerald flex items-center gap-1 font-bold mt-1">
              <ArrowUpRight className="w-3 h-3" /> +1.4% vs last week
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit">Mined Cases</span>
            <Brain className="w-4 h-4 text-brand-purple" />
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-outfit">
              {filter === 'all' ? '84,291' : filter === 'procure' ? '29,500' : '54,791'}
            </div>
            <span className="text-[10px] text-slate-500 font-medium block mt-1">Processed Log Lines</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit">Compliance Rate</span>
            <ShieldCheck className="w-4 h-4 text-brand-emerald" />
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-outfit">
              {filter === 'all' ? '98.7%' : filter === 'procure' ? '99.2%' : '98.1%'}
            </div>
            <span className="text-[10px] text-brand-emerald flex items-center gap-1 font-bold mt-1">
              Stable Compliance
            </span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-outfit">Avg Lead Time</span>
            <Clock className="w-4 h-4 text-pink-500" />
          </div>
          <div className="mt-4">
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900 font-outfit">
              {filter === 'all' ? '1.8 Days' : filter === 'procure' ? '2.4 Days' : '0.9 Days'}
            </div>
            <span className="text-[10px] text-brand-emerald flex items-center gap-1 font-bold mt-1">
              <ArrowUpRight className="w-3 h-3" /> -12% bottlenecks
            </span>
          </div>
        </div>

      </div>

      {/* Grid: Variants and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 relative z-10">
        
        {/* Variants Layout */}
        <div className="lg:col-span-7 space-y-4">
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-outfit">Process Variants Discovery</h5>
          <div className="space-y-3">
            {variances[filter].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="text-slate-500">{item.count} ({item.pct})</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: item.pct }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`${item.color} h-full rounded-full`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Alerts */}
        <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-6">
          <h5 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-outfit flex items-center gap-2">
            <Brain className="w-4 h-4 text-brand-purple" />
            AI Operations Feed
          </h5>
          <div className="space-y-3">
            {insightAlerts[filter].map((alert, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-slate-50/50 border border-slate-200/30 rounded-xl text-left">
                <div className={`p-2 rounded-lg flex-shrink-0 ${alert.color}`}>
                  <alert.icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-700 leading-snug font-medium">{alert.text}</p>
                  <span className="text-[10px] text-slate-400 block font-bold">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
