import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Users, Award, Landmark, MapPin, Target, Zap, Cpu, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function About({ onRequestDemo }) {

  const leaders = [
    { 
      name: "Matar Almahri", 
      role: "CEO", 
      desc: "Visionary leader driving the strategic direction of Tasree3. Dedicated to accelerating digital transformation and process innovation globally.", 
      initial: "MA" 
    },
    { 
      name: "Anchunath", 
      role: "CTO", 
      desc: "Lead software engineer and systems architect piloting our high-speed process mining engines and secure distributed log parsers.", 
      initial: "AN" 
    },
    { 
      name: "Yaseen Abdul Kader", 
      role: "Consultant - Digital Transformation & Partner (India Branch)", 
      desc: "Advising enterprise partners on workflow optimization, digital audits, and leading process consulting operations in India.", 
      initial: "YA" 
    },
    { 
      name: "Zubair Ali", 
      role: "Consultant - Digital Solutions & Partner(India Branch)", 
      desc: "Designing and scaling digital workflow systems, enabling enterprise automation, and managing digital solution deliveries for India branch.", 
      initial: "ZA" 
    }
  ];

  return (
    <>
      <SEO 
        title="About Tasree3 - Our Story, Mission & Leadership" 
        description="Learn about the team behind Tasree3. Discover our commitment to connecting process design with real execution, accelerating organizational performance."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-6 overflow-hidden bg-slate-50/50 text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
            <Target className="w-3.5 h-3.5" />
            Our Corporate Narrative
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mt-3 leading-tight">
            Pioneering Process <span className="text-gradient">Intelligence</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            We build next-generation software platforms to map, mine, audit, and optimize complex enterprise operations workflows continuously.
          </p>
        </div>
      </section>

      {/* Narrative Section Story/Mission/Vision */}
      <section className="pb-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Story */}
            <div className="lg:col-span-6 bg-slate-50/50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-md">
              <div className="space-y-4">
                <span className="text-[9px] uppercase font-bold text-brand-indigo tracking-wider block font-outfit">The Genesis</span>
                <h3 className="text-2xl font-bold font-outfit text-slate-900">The Tasree3 Story</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Tasree3 was created to connect business process design with real operational execution.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  For years, enterprise teams mapped ideal workflows on static flowcharts, only to discover that system databases and transaction logs obeyed completely different, un-audited pathways. We designed Tasree3 to stitch event database pings to collaborative modeling assets, achieving 100% operational transparency.
                </p>
              </div>
              <div className="border-t border-slate-200/60 pt-4 mt-6 text-[8.5px] text-slate-400 font-bold font-outfit uppercase">
                Founded by Process Researchers
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
              {/* Mission */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-left flex gap-4 items-start flex-grow">
                <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-brand-indigo mt-0.5"><Target className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-bold text-brand-indigo tracking-wider block font-outfit">Our Mission</span>
                  <h4 className="text-sm font-bold text-slate-900 font-outfit">Accelerate Organizational Performance</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    Provide operations managers, auditors, and IT architects the precise data maps required to remove bottleneck delays and build resilient paths.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-left flex gap-4 items-start flex-grow">
                <div className="p-2.5 bg-emerald-50 border border-emerald-100 rounded-xl text-brand-emerald mt-0.5"><Eye className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-bold text-brand-emerald tracking-wider block font-outfit">Our Vision</span>
                  <h4 className="text-sm font-bold text-slate-900 font-outfit">Self-Documenting and Self-Optimizing Enterprises</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    A future where digital operating workflows audit, balance, and heal their path anomalies automatically based on live system telemetry.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Technology Philosophy Section */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">Engineering Values</span>
              <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">Our Technology Philosophy</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                We believe software engines must adapt to corporate operations, not the other way around. Our tech stack enforces three key rules:
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  { label: "Data Integrity & Evidence First", desc: "No guessworks. Reconstruct actual events from database telemetry." },
                  { label: "Zero Vendor Lock-in", desc: "Open standards. Import and export visual layouts in standardized BPMN XML." },
                  { label: "Absolute Security Separation", desc: "Segregated database tenants keeping transaction logs encrypted." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                    <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                    <span><strong>{item.label}</strong>: {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-3.5 items-start">
                <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-xl text-brand-indigo"><Cpu className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-outfit">Heuristics Miner</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">
                    Custom parsing engine converting raw timestamp rows into graph coordinates.
                  </p>
                </div>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-3.5 items-start">
                <div className="p-2 bg-purple-50 border border-purple-100 rounded-xl text-brand-purple"><Sparkles className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-outfit">Conversational AI</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">
                    Vector indexing mapping process schemas directly to semantic model inputs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50/50 border-t border-b border-slate-200/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">Operational Leaders</span>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mt-2">Tasree3 Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {leaders.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm font-outfit">
                    {leader.initial}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-outfit">{leader.name}</h4>
                    <span className="text-[9px] uppercase font-bold text-brand-indigo tracking-wider font-outfit block">{leader.role}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Corporate Operations</span>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mt-2">Global Reach</h2>
            <p className="text-slate-500 mt-3 text-sm font-medium">
              Our engineering hubs and regional solutions architects support operational transformations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            {[
              { city: "Dubai", role: "Headquarters", address: "Business Bay - Dubai - United Arab Emirates" },
              { city: "India", role: "Branch", address: "Royapuram, Chennai, Tamil Nadu" }
            ].map((loc, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between text-left space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-brand-indigo"><MapPin className="w-4 h-4" /></div>
                  <h4 className="text-xs font-bold text-slate-900 font-outfit">{loc.city}</h4>
                </div>
                <div>
                  <span className="text-[8px] uppercase font-bold text-slate-400 font-outfit tracking-wider block">{loc.role}</span>
                  <span className="text-[10px] text-slate-500 mt-1 font-semibold block">{loc.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}

// Custom simple Check icon since standard import check works
function Check(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
