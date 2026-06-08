import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Play, Pause } from 'lucide-react';

export default function ProcessMiningVisualizer() {
  const [simulateBottleneck, setSimulateBottleneck] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="bg-white border border-slate-200 shadow-md rounded-3xl p-6 md:p-8 relative overflow-hidden text-left">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-slate-900 font-outfit">Live Discovery & Bottleneck Engine</h4>
          <p className="text-xs text-slate-500 mt-1 font-medium">Simulated reconstruction of transaction logs flowing through database systems.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-3.5 py-1.5 bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs font-semibold rounded-lg text-slate-700 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
          >
            {isAnimating ? (
              <>
                <Pause className="w-3.5 h-3.5" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-brand-emerald" /> Play
              </>
            )}
          </button>
          <button
            onClick={() => setSimulateBottleneck(!simulateBottleneck)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 focus:outline-none border cursor-pointer ${
              simulateBottleneck 
                ? 'bg-red-50 border-red-200 text-red-600' 
                : 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {simulateBottleneck ? "Active Bottleneck Mode" : "Normal Flow Mode"}
          </button>
        </div>
      </div>

      {/* SVG Animation Area */}
      <div className="relative aspect-[16/8] w-full bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-4">
        {/* Subtle mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <svg className="w-full max-w-2xl h-auto" viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Paths definition */}
          <path id="path1" d="M 50 120 L 150 120" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <path id="path2" d="M 150 120 L 260 120" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <path id="path3" d="M 260 120 L 370 120" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <path id="path4" d="M 370 120 L 450 120" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
          <path id="path5" d="M 260 120 C 260 40, 150 40, 150 120" stroke="rgba(0,0,0,0.04)" strokeWidth="3" strokeDasharray="4 4" />

          {/* Active Flow Pulse animations */}
          {isAnimating && (
            <>
              {/* Pulse 1: Start to Ingest */}
              <circle r="4" fill="#6366F1">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 120 L 150 120" />
              </circle>

              {/* Pulse 2: Ingest to Verify */}
              <circle r="4" fill={simulateBottleneck ? "#F59E0B" : "#8B5CF6"}>
                <animateMotion 
                  dur={simulateBottleneck ? "6s" : "2.8s"} 
                  repeatCount="indefinite" 
                  path="M 150 120 L 260 120" 
                />
              </circle>

              {/* Pulse 3: Verify to Approve */}
              <circle r="4" fill={simulateBottleneck ? "#EF4444" : "#10B981"}>
                <animateMotion 
                  dur={simulateBottleneck ? "7s" : "3s"} 
                  repeatCount="indefinite" 
                  path="M 260 120 L 370 120" 
                />
              </circle>

              {/* Pulse 4: Approve to End */}
              <circle r="4" fill="#10B981">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 370 120 L 450 120" />
              </circle>

              {/* Loop back pulse */}
              <circle r="3" fill="#EC4899" opacity="0.6">
                <animateMotion dur="5s" repeatCount="indefinite" path="M 260 120 C 260 40, 150 40, 150 120" />
              </circle>
            </>
          )}

          {/* Nodes */}
          {/* Node 1: Start */}
          <g>
            <circle cx="50" cy="120" r="10" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
            <circle cx="50" cy="120" r="4" fill="#6366F1" />
            <text x="50" y="145" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">Start (Logs)</text>
          </g>

          {/* Node 2: Ingest */}
          <g>
            <circle cx="150" cy="120" r="18" fill="#FFFFFF" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
            <circle cx="150" cy="120" r="6" fill="#8B5CF6" />
            <text x="150" y="150" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">Ingest & Map</text>
            <text x="150" y="112" fill="#10B981" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit select-none">12.4K/s</text>
          </g>

          {/* Node 3: Verify */}
          <g className="transition-all duration-300">
            <circle 
              cx="260" 
              cy="120" 
              r={simulateBottleneck ? "24" : "18"} 
              fill="#FFFFFF" 
              stroke={simulateBottleneck ? "#EF4444" : "rgba(0,0,0,0.12)"} 
              strokeWidth="2" 
              className={simulateBottleneck ? "glow-effect" : ""}
            />
            <circle cx="260" cy="120" r="6" fill={simulateBottleneck ? "#EF4444" : "#8B5CF6"} />
            <text x="260" y="156" fill={simulateBottleneck ? "#EF4444" : "#64748B"} fontSize="9" fontWeight={simulateBottleneck ? "bold" : "semibold"} textAnchor="middle" className="font-outfit select-none">Verify Compliance</text>
            {simulateBottleneck ? (
              <text x="260" y="110" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-outfit select-none animate-pulse">!! DELAY !!</text>
            ) : (
              <text x="260" y="112" fill="#64748B" fontSize="7" textAnchor="middle" className="font-outfit select-none font-bold">Avg: 0.2s</text>
            )}
          </g>

          {/* Node 4: Approve */}
          <g>
            <circle cx="370" cy="120" r="18" fill="#FFFFFF" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
            <circle cx="370" cy="120" r="6" fill="#10B981" />
            <text x="370" y="150" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">Approve & Sign</text>
            <text x="370" y="112" fill="#64748B" fontSize="7" textAnchor="middle" className="font-outfit select-none font-bold">Avg: 1.5s</text>
          </g>

          {/* Node 5: End */}
          <g>
            <circle cx="450" cy="120" r="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
            <circle cx="450" cy="120" r="4" fill="#10B981" />
            <text x="450" y="145" fill="#64748B" fontSize="9" textAnchor="middle" className="font-outfit select-none font-semibold">End Process</text>
          </g>
        </svg>

        {/* Floating Metrics Tag */}
        {simulateBottleneck && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-4 right-4 p-3 bg-red-50 border border-red-200/80 rounded-lg text-left max-w-xs z-10 shadow-lg"
          >
            <div className="flex gap-1.5 items-center text-red-600 font-bold text-xs uppercase tracking-wider font-outfit">
              <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
              Bottleneck Identified
            </div>
            <div className="text-slate-800 text-xs font-semibold mt-1">
              "Verify Compliance" wait time increased to <span className="text-red-600 font-bold">4.2 Days</span> (Queue: 124 tasks).
            </div>
            <div className="text-slate-500 text-[10px] mt-1.5 font-medium">
              Root Cause: Manual delegation in legacy ERP node database.
            </div>
          </motion.div>
        )}
      </div>

      {/* Explanatory text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="text-xs text-slate-500 leading-relaxed font-medium">
          <span className="text-slate-800 font-bold font-outfit block mb-1">Process Discovery</span>
          Logs are automatically parsed and translated into BPMN process visual configurations, showing how your business actually runs.
        </div>
        <div className="text-xs text-slate-500 leading-relaxed font-medium">
          <span className="text-slate-800 font-bold font-outfit block mb-1">Conformance Audits</span>
          Instantly audit process variants. Tasree3 identifies where transactions bypass approved paths and tags compliance anomalies immediately.
        </div>
      </div>
    </div>
  );
}
