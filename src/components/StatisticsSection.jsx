import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 300, suffix: '%', label: 'Average ROI Achieved', desc: 'Typical ROI realized within the first 12 months.' },
  { value: 45, suffix: '%', label: 'Bottleneck Reduction', desc: 'Average cycle time improvement across critical paths.' },
  { value: 14, suffix: 'M+', label: 'Daily Events Processed', desc: 'Robust event log ingestion at scale from ERP database.' },
  { value: 99.9, suffix: '%', label: 'Compliance Audit Rate', desc: 'Automatic rule verification score across processes.' }
];

function CountUp({ value, suffix, isDecimal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; 
    let startTime = null;

    const updateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;

      if (isDecimal) {
        setCount(Number(currentVal.toFixed(1)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref} className="font-outfit text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
      {count}{suffix}
    </span>
  );
}

export default function StatisticsSection() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-slate-200/60 bg-[#F1F5F9]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism-card bg-white/80 rounded-2xl p-6 border border-slate-200/55 relative flex flex-col justify-between"
            >
              <div>
                <CountUp value={stat.value} suffix={stat.suffix} isDecimal={stat.value === 99.9} />
                <h4 className="text-base font-bold text-brand-emerald font-outfit mt-3">{stat.label}</h4>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
