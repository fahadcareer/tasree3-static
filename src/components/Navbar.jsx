import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Activity, ShieldCheck, Cpu, LayoutGrid, Building2, UserCheck, Users, Award, Workflow } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onRequestDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platformItems = [
    { name: 'Process Modeling', desc: 'Collaboratively map and simulate workflows.', path: '/features', icon: LayoutGrid, color: 'text-indigo-600' },
    { name: 'Process Management', desc: 'Model, benchmark & govern every process.', path: '/process-management', icon: Workflow, color: 'text-blue-600' },
    { name: 'Process Mining', desc: 'Discover bottlenecks and analyze logs.', path: '/process-mining', icon: Activity, color: 'text-emerald-600' },
    { name: 'Governance & Audits', desc: 'Assure compliance and manage risks.', path: '/governance', icon: ShieldCheck, color: 'text-purple-600' },
    { name: 'AI Platform Operations', desc: 'Predictive analytics & AI copilot.', path: '/ai-features', icon: Cpu, color: 'text-pink-600' },
  ];

  const solutionItems = [
    { name: 'Financial Services', desc: 'Audit compliance & reduce costs.', path: '/solutions', icon: Building2, color: 'text-blue-600' },
    { name: 'Healthcare & Life Sciences', desc: 'Clinical pathway compliance.', path: '/solutions', icon: Award, color: 'text-emerald-600' },
    { name: 'CIOs & Architects', desc: 'Align technology and processes.', path: '/solutions', icon: UserCheck, color: 'text-purple-600' },
    { name: 'Operations & Process Managers', desc: 'Optimize efficiency & streamline ops.', path: '/solutions', icon: Users, color: 'text-indigo-600' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'glassmorphism-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo height="30" className="text-slate-900" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Platform Dropdown Link */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveMegaMenu('platform')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors focus:outline-none cursor-pointer">
                Platform <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'platform' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'platform' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4 z-[9999]"
                  >
                    {platformItems.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.path}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all group"
                      >
                        <div className={`p-2 bg-slate-100 rounded-lg border border-slate-200/50 ${item.color} group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover:text-brand-indigo transition-colors">{item.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown Link */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors focus:outline-none cursor-pointer">
                Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4 z-[9999]"
                  >
                    {solutionItems.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.path}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all group"
                      >
                        <div className={`p-2 bg-slate-100 rounded-lg border border-slate-200/50 ${item.color} group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover:text-brand-indigo transition-colors">{item.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                      <span className="text-slate-400">Looking for custom scenarios?</span>
                      <Link to="/solutions" className="text-brand-indigo hover:underline font-bold flex items-center gap-1">
                        View All Solutions &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/why-tasree3" className={({isActive}) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-600 hover:text-slate-950'}`}>
              Why Tasree3?
            </NavLink>
            <NavLink to="/pricing" className={({isActive}) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-600 hover:text-slate-950'}`}>
              Pricing
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-600 hover:text-slate-950'}`}>
              About
            </NavLink>
            <NavLink to="/faq" className={({isActive}) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-600 hover:text-slate-950'}`}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-indigo font-bold' : 'text-slate-600 hover:text-slate-950'}`}>
              Contact
            </NavLink>

          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onRequestDemo}
              className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              Watch Tour
            </button>
            <button 
              onClick={onRequestDemo}
              className="px-4 py-2 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-brand-indigo/15 cursor-pointer"
            >
              Request Enterprise Demo
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-950 p-2 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 overflow-hidden shadow-xl"
          >
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2">Platform</div>
              <Link to="/features" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <LayoutGrid className="w-4 h-4 text-indigo-500" /> Process Modeling
              </Link>
              <Link to="/process-management" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <Workflow className="w-4 h-4 text-blue-500" /> Process Management
              </Link>
              <Link to="/process-mining" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <Activity className="w-4 h-4 text-emerald-500" /> Process Mining
              </Link>
              <Link to="/governance" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-purple-500" /> Governance & Audits
              </Link>
              <Link to="/ai-features" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <Cpu className="w-4 h-4 text-pink-500" /> AI Operations
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2">Solutions</div>
              <Link to="/solutions" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <Building2 className="w-4 h-4 text-blue-500" /> Industries Overview
              </Link>
              <Link to="/solutions" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                <Users className="w-4 h-4 text-indigo-500" /> Enterprise Roles
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Link to="/why-tasree3" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                Why Tasree3?
              </Link>
              <Link to="/pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                Pricing
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                About
              </Link>
              <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                FAQ
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button 
                onClick={() => { setIsOpen(false); onRequestDemo(); }}
                className="w-full py-2.5 bg-gradient-primary text-white text-sm font-semibold rounded-lg text-center shadow-lg"
              >
                Request Enterprise Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
