import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react';

const testimonials = [
  {
    quote: "Tasree3 transformed how we model and govern our clinical workflows. Within six weeks of deploying process mining, we discovered critical compliance leaks and shortened audit cycle preparation by 60%.",
    author: "Dr. Sarah Jenkins",
    title: "Chief Operations Officer",
    company: "Vanguard Healthcare Group",
    metric: "60% Audit Cycle Reduction",
    initials: "SJ",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    quote: "The combination of process mining and automated compliance checks inside Tasree3 is unmatched. The AI platform operation alerts us to process bottlenecks before they affect our customer service delivery.",
    author: "Marc Andre-Voss",
    title: "VP of Digital Transformation",
    company: "Apex Global Finance",
    metric: "32% Operational Speedup",
    initials: "MA",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "For a CIO, compliance and security are paramount. Tasree3's automated compliance auditing and SOC2 monitoring give us total visibility into processes running across all legacy ERP databases.",
    author: "Elena Rostova",
    title: "Chief Information Officer",
    company: "Novis Logistics Enterprises",
    metric: "Saved $1.4M in Audit Costs",
    initials: "ER",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const slideLeft = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovering) {
      timeoutRef.current = setInterval(() => {
        slideRight();
      }, 6000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovering, index]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 py-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden rounded-2xl glassmorphism-card border border-slate-200/60 p-8 md:p-12 text-left">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
        
        {/* Quote Icon */}
        <div className="absolute top-6 left-6 text-slate-900/5 pointer-events-none">
          <Quote className="w-24 h-24 stroke-[1.5]" />
        </div>

        <div className="relative min-h-[280px] md:min-h-[180px] flex flex-col justify-between">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed font-outfit">
                "{testimonials[index].quote}"
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[index].gradient} flex items-center justify-center font-bold text-white text-sm shadow-md`}>
                    {testimonials[index].initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{testimonials[index].author}</h5>
                    <p className="text-xs text-slate-500">{testimonials[index].title}, <span className="text-brand-purple font-semibold">{testimonials[index].company}</span></p>
                  </div>
                </div>

                {/* Achieved Metric */}
                <div className="flex items-center gap-2 bg-brand-emerald/5 border border-brand-emerald/20 px-3.5 py-1.5 rounded-lg text-brand-emerald font-bold text-xs tracking-wide uppercase font-outfit w-fit">
                  <Shield className="w-3.5 h-3.5" />
                  {testimonials[index].metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav Controls */}
      <div className="flex justify-end gap-3 mt-6">
        <button 
          onClick={slideLeft}
          className="p-3 bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 rounded-full text-slate-400 hover:text-slate-700 transition-all shadow-md focus:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={slideRight}
          className="p-3 bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 rounded-full text-slate-400 hover:text-slate-700 transition-all shadow-md focus:outline-none cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
