import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldAlert, AlertTriangle } from 'lucide-react';

export default function DesignVsReality() {
  const [mode, setMode] = useState('design');

  return (
    <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 md:p-8 text-left relative overflow-hidden">
      {/* Glow definer */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-indigo/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Interactive Simulation</span>
          <h4 className="text-2xl font-bold text-slate-900 font-outfit mt-1">Design vs. Reality Comparison</h4>
          <p className="text-sm text-slate-500 font-medium">Contrasts mapped workflows against actual event logs extracted from system databases.</p>
        </div>

        {/* Toggles */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50 self-stretch md:self-auto">
          <button
            onClick={() => setMode('design')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer ${
              mode === 'design' 
                ? 'bg-white text-brand-indigo shadow-sm border border-slate-200/40' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Designed Model (BPMN)
          </button>
          <button
            onClick={() => setMode('reality')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer ${
              mode === 'reality' 
                ? 'bg-red-50/80 text-red-600 shadow-sm border border-red-200/45' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Real-World Execution
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SVG Drawing Canvas */}
        <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-4 border border-slate-100 relative aspect-[16/8] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <svg className="w-full max-w-xl h-auto" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Standard Path Line */}
            <path 
              d="M 50 110 L 150 110 L 250 110 L 350 110 L 450 110" 
              stroke={mode === 'design' ? '#8B5CF6' : 'rgba(0,0,0,0.06)'} 
              strokeWidth="3" 
              className="transition-colors duration-300"
            />

            {/* Deviant Path Line (Reality loop) */}
            {mode === 'reality' && (
              <>
                <path 
                  d="M 350 110 C 350 40, 150 40, 150 110" 
                  stroke="#EF4444" 
                  strokeWidth="3" 
                  strokeDasharray="4 4"
                  className="animate-dash"
                />
                <path 
                  d="M 150 110 C 150 180, 350 180, 350 110" 
                  stroke="#F59E0B" 
                  strokeWidth="3" 
                />
              </>
            )}

            {/* Active Pulses */}
            {mode === 'design' ? (
              <circle r="4" fill="#8B5CF6">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 50 110 L 450 110" />
              </circle>
            ) : (
              <>
                <circle r="3.5" fill="#EF4444">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 350 110 C 350 40, 150 40, 150 110" />
                </circle>
                <circle r="3.5" fill="#F59E0B">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 150 110 C 150 180, 350 180, 350 110" />
                </circle>
                <circle r="4" fill="#3B82F6" opacity="0.4">
                  <animateMotion dur="5.5s" repeatCount="indefinite" path="M 50 110 L 450 110" />
                </circle>
              </>
            )}

            {/* Nodes */}
            <g>
              <circle cx="50" cy="110" r="10" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
              <circle cx="50" cy="110" r="4" fill="#6366F1" />
              <text x="50" y="132" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">Start</text>
            </g>

            <g>
              <circle cx="150" cy="110" r="15" fill="#FFFFFF" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
              <circle cx="150" cy="110" r="5" fill="#8B5CF6" />
              <text x="150" y="138" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">PR Ingest</text>
            </g>

            <g className="transition-all duration-300">
              <circle 
                cx="250" 
                cy="110" 
                r="15" 
                fill="#FFFFFF" 
                stroke={mode === 'reality' ? '#EF4444' : 'rgba(0,0,0,0.12)'} 
                strokeWidth="2"
                className={mode === 'reality' ? 'glow-effect animate-pulse' : ''}
              />
              <circle cx="250" cy="110" r="5" fill={mode === 'reality' ? '#EF4444' : '#8B5CF6'} />
              <text x="250" y="138" fill={mode === 'reality' ? '#EF4444' : '#64748B'} fontSize="9" fontWeight={mode === 'reality' ? 'bold' : 'semibold'} textAnchor="middle" className="font-outfit select-none">Verify Budget</text>
              {mode === 'reality' && (
                <text x="250" y="88" fill="#EF4444" fontSize="8" fontWeight="extrabold" textAnchor="middle" className="font-outfit select-none animate-pulse">15% Bypassed</text>
              )}
            </g>

            <g>
              <circle cx="350" cy="110" r="15" fill="#FFFFFF" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
              <circle cx="350" cy="110" r="5" fill="#10B981" />
              <text x="350" y="138" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">PO Sign</text>
            </g>

            <g>
              <circle cx="450" cy="110" r="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
              <circle cx="450" cy="110" r="4" fill="#10B981" />
              <text x="450" y="132" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">End</text>
            </g>
          </svg>

          {/* Floating message for Reality */}
          {mode === 'reality' && (
            <div 
              className="absolute top-4 right-4 p-3 bg-red-50 border border-red-200/80 rounded-lg text-left max-w-xs shadow-lg text-xs"
            >
              <div className="text-red-700 font-bold flex items-center gap-1 font-outfit uppercase tracking-wider text-[10px]">
                <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
                Rework Loop Identified
              </div>
              <p className="text-slate-600 mt-1 font-medium leading-relaxed">
                Purchase orders are continuously routed back to PR Ingest due to missing specifications. Adds <span className="text-red-600 font-bold">2.4 days</span> average latency.
              </p>
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className={`p-5 rounded-2xl border transition-all ${
            mode === 'design' 
              ? 'bg-indigo-50/20 border-indigo-200/60 shadow-sm' 
              : 'bg-red-50/10 border-red-200/50 shadow-sm'
          }`}>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-outfit">Process Metrics</h5>
            
            <div className="space-y-4 mt-4">
              <div>
                <span className="block text-xs text-slate-500 font-semibold">Average Cycle Time</span>
                <span className="text-xl font-bold text-slate-900 font-outfit">
                  {mode === 'design' ? '4.0 Hours (SLA Target)' : '4.2 Days (Actual)'}
                </span>
              </div>

              <div>
                <span className="block text-xs text-slate-500 font-semibold">Process Compliance Score</span>
                <span className={`text-xl font-bold font-outfit ${mode === 'design' ? 'text-indigo-600' : 'text-red-600'}`}>
                  {mode === 'design' ? '100% Compliant' : '85% (15% Deviant)'}
                </span>
              </div>

              <div>
                <span className="block text-xs text-slate-500 font-semibold">Rework Loop Rate</span>
                <span className="text-xl font-bold text-slate-900 font-outfit">
                  {mode === 'design' ? '0% Loops' : '22% Re-routing'}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            {mode === 'design' 
              ? "The happy path model assumes every purchase requisition maps directly to budget verification and signoff cycles within SLAs." 
              : "Event logs reveal the reality: users bypass verification checks to save time, causing downstream audit failures and iterative loops."
            }
          </p>
        </div>

      </div>

    </div>
  );
}
