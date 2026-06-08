import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function CTABanner({ onRequestDemo }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-indigo/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-brand-purple/[0.03] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl p-8 md:p-16 text-center"
        >
          {/* Inner decorative light line */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple rounded-full text-xs font-bold uppercase tracking-wider font-outfit">
              <Sparkles className="w-3.5 h-3.5" />
              Maximize Process Efficiency
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-outfit max-w-3xl mx-auto leading-tight text-slate-900">
            Ready to Accelerate Your Enterprise Digital Transformation?
          </h2>
          
          <p className="text-slate-500 mt-6 max-w-xl mx-auto text-sm md:text-base font-medium">
            Join leading organizations using Tasree3 to model, audit, and analyze their workflows. Uncover bottlenecks and ensure governance in real time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/20 flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              Request Enterprise Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-[0.98] text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Play className="w-4 h-4 text-brand-emerald" />
              Watch Product Tour
            </button>
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-100 text-center">
            <div>
              <div className="text-xl font-extrabold text-slate-900 font-outfit">SOC2 Type II</div>
              <div className="text-xs text-slate-400 mt-1 font-bold">Enterprise Grade Compliance</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900 font-outfit">&lt; 3 Weeks</div>
              <div className="text-xs text-slate-400 mt-1 font-bold">Typical Integration Period</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl font-extrabold text-slate-900 font-outfit">45% +</div>
              <div className="text-xs text-slate-400 mt-1 font-bold">Average Bottleneck Reduction</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
