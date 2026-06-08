import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = {
  general: [
    { q: "What is Tasree3?", a: "Tasree3 is a unified enterprise platform that combines Process Modeling (mapping and documentation), Process Mining (analyzing event logs), and Compliance Governance to optimize operations using AI." },
    { q: "How is Tasree3 different from standard modeling tools?", a: "Unlike static BPMN drawing tools, Tasree3 integrates directly with ERP/CRM database event logs to overlay actual system execution data onto your process diagrams, identifying live bottlenecks automatically." },
    { q: "Who is the target audience for the platform?", a: "Tasree3 is designed for CIOs, Process Managers, Compliance Officers, Enterprise Architects, and Operations Directors looking to streamline workflows and reduce audit cycles." }
  ],
  technology: [
    { q: "Which ERP and CRM databases does Tasree3 support?", a: "Tasree3 supports native connectors for major enterprise applications including SAP, Oracle, Salesforce, Microsoft Dynamics, as well as generic SQL/NoSQL databases and CSV/XES file uploads." },
    { q: "How does the AI process generation work?", a: "Through our AI Copilot, enterprise architects can describe a desired process in plain English (e.g., 'Draft a vendor procurement workflow with three authorization levels') and the platform will auto-generate a valid BPMN 2.0 process flow diagram." },
    { q: "Is there a cloud or on-premise deployment option?", a: "Yes. Tasree3 can be deployed as a fully-managed secure SaaS cloud, or hosted on-premise within your virtual private cloud (AWS, Azure, GCP) for maximum compliance and data security." }
  ],
  compliance: [
    { q: "How does compliance monitoring operate?", a: "Tasree3 features a continuous audit rule engine. As process mining ingests transaction logs, it compares actual actions with modeled compliance rules, flagging discrepancies, unauthorized actions, or policy bypasses instantly." },
    { q: "What certifications does the platform have?", a: "Tasree3 maintains SOC 2 Type II certification, GDPR compliance, and supports HIPAA-compliant processing layers for healthcare organizations." },
    { q: "Can we manage process sign-offs and approvals within the app?", a: "Yes. The platform includes a formal governance workflow. Process owners can publish updates, route them for electronic sign-offs with full audit trails, and distribute policies to teams." }
  ]
};

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const categories = [
    { id: 'general', label: 'General Questions' },
    { id: 'technology', label: 'Technology & Integrations' },
    { id: 'compliance', label: 'Security & Compliance' }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Category Tabs */}
      <div className="flex border-b border-slate-200 mb-8 justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
            className={`pb-4 px-4 text-sm font-semibold border-b-2 transition-all relative focus:outline-none cursor-pointer ${
              activeCategory === cat.id 
                ? 'border-brand-indigo text-slate-900 font-bold' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Panels */}
      <div className="space-y-4">
        {faqs[activeCategory].map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="rounded-xl glassmorphism-card border border-slate-200/60 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer"
              >
                <div className="flex gap-3 items-start pr-4">
                  <HelpCircle className="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 font-outfit leading-snug">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-indigo' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 leading-relaxed pl-14">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
