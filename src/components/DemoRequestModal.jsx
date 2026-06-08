import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

export default function DemoRequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    industry: '',
    maturity: 'Exploring',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      title: '',
      industry: '',
      maturity: 'Exploring',
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl z-10 text-left"
          >
            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100 relative z-10">
              <div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900">Request Enterprise Demo</h3>
                <p className="text-sm text-slate-500 mt-1">See how Tasree3 can model, analyze, and optimize your operations.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 relative z-10 max-h-[75vh] overflow-y-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/30 rounded-full flex items-center justify-center mb-6 text-brand-emerald glow-effect animate-pulse">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-outfit">Demo Request Submitted!</h4>
                  <p className="text-slate-600 mt-3 max-w-md text-sm leading-relaxed">
                    Thank you, {formData.name}. Our enterprise solutions team will reach out to you within 24 hours to schedule a custom demonstration based on your operational maturity.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-700 font-semibold transition-colors cursor-pointer focus:outline-none"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Job Title</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter your Job Title"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Industry</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      >
                        <option value="" disabled>Select your industry</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Healthcare">Healthcare & Life Sciences</option>
                        <option value="Retail & E-commerce">Retail & E-commerce</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Government">Government & Public Sector</option>
                        <option value="Telecom">Technology & Telecom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Process Maturity</label>
                      <select
                        value={formData.maturity}
                        onChange={(e) => setFormData({ ...formData, maturity: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                      >
                        <option value="Exploring">Just Exploring</option>
                        <option value="Manual Modeling">Manual Process Mapping</option>
                        <option value="Basic Mining">Initial Process Mining</option>
                        <option value="Advanced">Advanced Automation & AI Ops</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-outfit">Message / Optimization Goals</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What process compliance or bottleneck challenges are you trying to solve?"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-primary rounded-lg text-white font-bold hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer focus:outline-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing Request...
                        </>
                      ) : (
                        <>
                          Submit Demo Request
                          <ChevronRight className="w-4 h-4 ml-1.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center mt-4">
                    By submitting, you agree to Tasree3's Privacy Policy. We process your data in accordance with SOC2 and GDPR guidelines.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
