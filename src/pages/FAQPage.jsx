import React from 'react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

export default function FAQPage({ onRequestDemo }) {
  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions Portal" 
        description="Browse questions and answers regarding Tasree3 process modeling, data compliance adapters, ERP event log formats, and secure hosting."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-indigo/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Knowledge Center</span>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mt-3 leading-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Find immediate answers concerning compliance audit rule structures, database configurations, and pricing plans.
          </p>
        </div>
      </section>

      {/* Accordion area */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}
