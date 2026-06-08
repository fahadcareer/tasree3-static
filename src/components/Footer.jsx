import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#F1F5F9] border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 pb-12 border-b border-slate-200">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Logo height="26" className="text-slate-900" />
            </Link>
            <p className="text-sm text-slate-600 max-w-sm">
              Next-generation Process Modeling, Process Mining, Governance, and AI Operations platform. Accelerating operational excellence and compliance audits.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process Modeling</Link></li>
              <li><Link to="/process-management" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process Management</Link></li>
              <li><Link to="/process-mining" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process Mining</Link></li>
              <li><Link to="/governance" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Compliance & Risks</Link></li>
              <li><Link to="/ai-features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">AI Platform Operations</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Platform Pricing</Link></li>
              <li><Link to="/why-tasree3" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Why Tasree3?</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link to="/solutions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Financial Services</Link></li>
              <li><Link to="/solutions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Manufacturing</Link></li>
              <li><Link to="/solutions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">CIOs & Architects</Link></li>
              <li><Link to="/solutions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process Managers</Link></li>
            </ul>
          </div>

          {/* Newsletter / Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2">Subscribe to Operations Insights</h4>
            {subscribed ? (
              <p className="text-xs text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/20 p-3 rounded-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email" 
                  required
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-brand-indigo transition-colors placeholder-slate-400"
                />
                <button 
                  type="submit"
                  className="p-2 bg-gradient-primary rounded-lg text-white hover:opacity-90 transition-opacity flex-shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Platform Standards</span>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Shield className="w-4 h-4 text-brand-emerald" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Shield className="w-4 h-4 text-brand-emerald" />
                <span>GDPR & HIPAA Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tasree3 Platforms Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Trust Center</a>
            <Link to="/why-tasree3" className="hover:text-slate-800 transition-colors">Why Tasree3?</Link>
            <Link to="/about" className="hover:text-slate-800 transition-colors">Company About</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
