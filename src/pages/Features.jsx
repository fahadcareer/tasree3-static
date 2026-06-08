import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PenTool, Database, GitBranch, ShieldCheck, Key, Building2, Lock, 
  ArrowRight, Check, Activity, Award, Eye, FileText, Settings, 
  Layers, GitFork, Trash2, Plus, Search, ChevronRight, UserCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function Features({ onRequestDemo }) {
  // Sticky Scroll Spy Navigation
  const [activeSection, setActiveSection] = useState('process-modeling');
  
  const sections = [
    { id: 'process-modeling', label: '1. Process Modeling', icon: PenTool },
    { id: 'dictionary-management', label: '2. Dictionary Management', icon: Database },
    { id: 'version-control', label: '3. Version Control', icon: GitBranch },
    { id: 'role-based-access', label: '4. Role-Based Access', icon: Key },
    { id: 'multi-tenant', label: '5. Multi-Tenant Architecture', icon: Building2 },
    { id: 'enterprise-security', label: '6. Enterprise Security', icon: Lock },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // offset for sticky navbar + header
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 110,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // --- SECTION MOCKUP STATES ---

  // 1. Modeling Canvas Active Tab (BPMN, EPC, FAD, Org Charts)
  const [modelingTab, setModelingTab] = useState('BPMN');

  // 2. Dictionary Active Tab (Systems, Roles, Documents, Custom Attributes)
  const [dictTab, setDictTab] = useState('Systems');
  const [searchQuery, setSearchQuery] = useState('');
  
  const initialDictionary = {
    Systems: [
      { id: 'sys-1', name: 'SAP ERP S/4HANA', type: 'Core ERP', desc: 'Central repository for inventory & purchase ordering data logs.', usages: 14 },
      { id: 'sys-2', name: 'Salesforce CRM', type: 'Customer CRM', desc: 'Ingests opportunity stages and contract signing event timestamps.', usages: 8 },
      { id: 'sys-3', name: 'Workday HR', type: 'HCM Platform', desc: 'Manages user identities, employee cost centers, and hierarchies.', usages: 4 },
      { id: 'sys-4', name: 'ServiceNow ITSM', type: 'IT Service Manager', desc: 'Extracts service ticket handling states and resolver latency.', usages: 11 }
    ],
    Roles: [
      { id: 'role-1', name: 'Procurement Clerk', type: 'Execution', desc: 'Creates Purchase Requisition and initiates vendor check.', usages: 3 },
      { id: 'role-2', name: 'Finance Controller', type: 'Approval', desc: 'Reviews PO and signs off on allocations exceeding $50k.', usages: 5 },
      { id: 'role-3', name: 'Compliance Officer', type: 'Governance', desc: 'Audits transaction loops against corporate code of conduct.', usages: 12 },
      { id: 'role-4', name: 'Operations Architect', type: 'Modeling', desc: 'Maps global process flows, SLAs, and optimizes path gateways.', usages: 18 }
    ],
    Documents: [
      { id: 'doc-1', name: 'Purchase Requisition', type: 'Finance Form', desc: 'Mandatory documentation to check budget availability.', usages: 2 },
      { id: 'doc-2', name: 'SLA Agreement', type: 'Legal Template', desc: 'Enforces external vendor response targets.', usages: 6 },
      { id: 'doc-3', name: 'Security Pass Certificate', type: 'Compliance', desc: 'Required clearance for high-value transactional systems.', usages: 4 }
    ],
    'Custom Attributes': [
      { id: 'attr-1', name: 'Target Cycle Time (h)', type: 'Integer KPI', desc: 'SLA limit for standard execution nodes.', usages: 25 },
      { id: 'attr-2', name: 'Regulatory Risk Level', type: 'Enum Tag', desc: 'Low, Medium, or High risk flag for continuous audits.', usages: 15 },
      { id: 'attr-3', name: 'Cost Center Code', type: 'String Index', desc: 'Unique finance department reference identifier.', usages: 9 }
    ]
  };

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const newItem = {
      id: `new-${Date.now()}`,
      name: newItemName,
      type: 'Custom Defined',
      desc: 'Defined in-session custom metadata node to govern operations.',
      usages: 1
    };
    setDictionary({
      ...dictionary,
      [dictTab]: [...dictionary[dictTab], newItem]
    });
    setNewItemName('');
  };

  // 3. Version Control State
  const [compareMode, setCompareMode] = useState(false);
  const [rollbackStatus, setRollbackStatus] = useState(null);
  const [branches, setBranches] = useState(['main', 'dev-compliance-fix']);
  const [activeBranch, setActiveBranch] = useState('main');

  const handleCreateBranch = () => {
    const branchName = `draft-optimize-po-${branches.length}`;
    setBranches([...branches, branchName]);
    setActiveBranch(branchName);
  };

  const handleRollback = () => {
    setRollbackStatus("Restored process layout back to v3.1.0 (Production stable version)");
    setTimeout(() => setRollbackStatus(null), 4000);
  };

  // 4. Role-Based Access Control State
  const [rbacRole, setRbacRole] = useState('Process Owner');
  const [permissions, setPermissions] = useState({
    'Process Owner': { edit: true, publish: true, dictionary: true, simulate: true, reports: true },
    'Compliance Auditor': { edit: false, publish: false, dictionary: true, simulate: false, reports: true },
    'Operations Analyst': { edit: true, publish: false, dictionary: true, simulate: true, reports: true },
    'Business Viewer': { edit: false, publish: false, dictionary: false, simulate: false, reports: true }
  });
  const [rbacAlert, setRbacAlert] = useState(null);

  const togglePermission = (role, action) => {
    const updated = {
      ...permissions,
      [role]: {
        ...permissions[role],
        [action]: !permissions[role][action]
      }
    };
    setPermissions(updated);
    setRbacAlert(`Updated Role: '${role}' capability '${action}' successfully.`);
    setTimeout(() => setRbacAlert(null), 3000);
  };

  // 5. Multi-Tenant Architecture State
  const [selectedTenant, setSelectedTenant] = useState('Tenant-A');
  const tenantData = {
    'Tenant-A': { region: 'APAC Operations', schema: 'tasree3_db_apac', users: 140, volume: '12.4M transactions', status: 'Compliant' },
    'Tenant-B': { region: 'EMEA Corporate', schema: 'tasree3_db_emea', users: 380, volume: '45.1M transactions', status: 'Compliant' },
    'Tenant-C': { region: 'Americas Operations', schema: 'tasree3_db_americas', users: 95, volume: '8.2M transactions', status: 'Requires Review' }
  };

  // 6. Enterprise Security Real-Time Log Mock
  const [secLogs, setSecLogs] = useState([
    { time: '12:44:02 UTC', event: 'SSO Sign-in: User josh.a@corp.com via Okta', status: 'Authorized' },
    { time: '12:44:05 UTC', event: 'Process v3.2.0 signed off & published to main', status: 'Signed' },
    { time: '12:44:12 UTC', event: 'Event logs schema ingestion stream complete', status: 'Complete' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const logs = [
        'SSO Token renewed for user sarah.w@corp.com',
        'Database transaction schema backup verified',
        'Log mining anomaly detection rules check complete',
        'ISO-27001 automatic compliance scan status: OK',
        'Compliance sign-off request broadcasted to Legal Team'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      const now = new Date();
      const timeStr = `${now.toISOString().slice(11, 19)} UTC`;
      setSecLogs(prev => [
        { time: timeStr, event: randomLog, status: 'Active' },
        prev[0],
        prev[1]
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="Enterprise Process Modeling & Capabilities Showcase" 
        description="Explore Tasree3's premium capabilities, including collaborative BPMN modeling, centralized data dictionaries, git-like version control, and multi-tenant architectures."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-10 overflow-hidden text-center bg-slate-50/50">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-indigo/[0.04] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
              <Award className="w-3.5 h-3.5 text-brand-emerald" />
              Advanced Process Governance
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900 max-w-4xl mx-auto"
          >
            Enterprise Process Modeling <span className="text-gradient animate-text-gradient">Reimagined</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Unify modeling frameworks, catalog metadata, secure multi-tenant deployments, and trace compliance milestones automatically with Tasree3.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm focus:outline-none cursor-pointer"
            >
              Request Enterprise Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 active:scale-[0.98] text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm focus:outline-none cursor-pointer"
            >
              Watch Product Tour
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Body Content with Sticky Left Side Nav */}
      <section className="pt-8 pb-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sticky Side Navigation */}
            <div className="hidden lg:block lg:col-span-3 sticky top-32 space-y-2">
              <div className="p-1 bg-slate-100/50 border border-slate-200/80 rounded-2xl p-2.5">
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest px-3 mb-2">Capabilities Directory</span>
                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold font-outfit transition-all focus:outline-none cursor-pointer ${
                          isActive 
                            ? 'bg-gradient-primary text-white shadow-md shadow-brand-indigo/10' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                        {sec.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right Column: Dynamic Feature Categories */}
            <div className="lg:col-span-9 space-y-28">
              
              {/* Category 1: Process Modeling */}
              <div id="process-modeling" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">01 / Modeling Standard Frameworks</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">AI Text-to-Diagram Builder & Canvas</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Design processes your way with our AI Text-to-Diagram Builder. Translate standard text descriptions (SOPs) into fully structured EPC, BPMN, Org, or FAD process diagrams, complete with logical gateways and connections automatically, or toggle layouts natively.
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[
                        { label: 'EPC (Event-driven Process Chain)', desc: 'Map logical functions and triggered events.' },
                        { label: 'BPMN 2.0 Canvas Standards', desc: 'Collaborate with full pool, lane, and gateway specifications.' },
                        { label: 'FAD (Function Allocation Diagrams)', desc: 'Assign roles, systems, and assets to individual actions.' },
                        { label: 'Visual Hierarchy Org Charts', desc: 'Correlate operational processes with corporate structures.' }
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                          <span><strong>{li.label}</strong>: {li.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Visualizer Mockup */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100 flex-wrap gap-2">
                      <div className="flex items-center gap-1.5">
                        <PenTool className="w-4 h-4 text-brand-indigo" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Interactive Diagram Engine</span>
                      </div>
                      
                      {/* Diagram Selector Tabs */}
                      <div className="flex bg-slate-100 border border-slate-200 rounded-lg p-0.5 text-[9px] font-bold">
                        {['BPMN', 'EPC', 'FAD', 'Org Chart'].map(t => (
                          <button
                            key={t}
                            onClick={() => setModelingTab(t)}
                            className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                              modelingTab === t ? 'bg-white text-brand-indigo shadow-sm' : 'text-slate-400 hover:text-slate-700'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Graphic */}
                    <div className="flex-grow flex items-center justify-center p-3 relative min-h-[160px]">
                      <AnimatePresence mode="wait">
                        {modelingTab === 'BPMN' && (
                          <motion.div 
                            key="bpmn"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex justify-center"
                          >
                            <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 280 140" fill="none">
                              {/* Lane boundaries */}
                              <rect x="5" y="10" width="270" height="60" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                              <rect x="5" y="70" width="270" height="60" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                              <text x="12" y="45" fill="#94A3B8" fontSize="6" fontWeight="bold" transform="rotate(-90 12 45)" textAnchor="middle" className="font-outfit">PURCHASING</text>
                              <text x="12" y="105" fill="#94A3B8" fontSize="6" fontWeight="bold" transform="rotate(-90 12 105)" textAnchor="middle" className="font-outfit">FINANCE</text>

                              {/* Flow items */}
                              <circle cx="35" cy="40" r="10" fill="#E2F2FE" stroke="#6366F1" strokeWidth="1.2" />
                              <text x="35" y="42" fill="#6366F1" fontSize="6" fontWeight="bold" textAnchor="middle">Start</text>

                              <path d="M 45 40 L 65 40" stroke="#6366F1" strokeWidth="1.2" />

                              <rect x="65" y="25" width="55" height="30" rx="4" fill="#FFFFFF" stroke="#6366F1" strokeWidth="1.2" />
                              <text x="92.5" y="42" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Order Request</text>

                              <path d="M 120 40 L 140 40" stroke="#6366F1" strokeWidth="1.2" />

                              <polygon points="140,40 152,28 164,40 152,52" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="152" y="43" fill="#8B5CF6" fontSize="8" fontWeight="bold" textAnchor="middle">?</text>

                              <path d="M 152 52 L 152 85 M 152 85 L 180 85" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="157" y="65" fill="#8B5CF6" fontSize="5" fontWeight="bold">Yes</text>

                              <path d="M 164 40 L 210 40" stroke="#6366F1" strokeWidth="1.2" />
                              <text x="180" y="37" fill="#6366F1" fontSize="5" fontWeight="bold">No</text>

                              <rect x="180" y="70" width="55" height="30" rx="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="207.5" y="87" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Approve Budget</text>

                              <circle cx="255" cy="40" r="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.2" />
                              <text x="255" y="42" fill="#EF4444" fontSize="6" fontWeight="bold" textAnchor="middle">End</text>
                            </svg>
                          </motion.div>
                        )}

                        {modelingTab === 'EPC' && (
                          <motion.div 
                            key="epc"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex justify-center"
                          >
                            <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 280 140" fill="none">
                              {/* EPC nodes Event-driven Process Chain */}
                              {/* Event (Hexagon) */}
                              <polygon points="55,10 75,10 85,25 75,40 55,40 45,25" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
                              <text x="65" y="27" fill="#D97706" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Inquiry Received</text>

                              <path d="M 65 40 L 65 55" stroke="#CBD5E1" strokeWidth="1.2" />

                              {/* Function (Rounded Rect) */}
                              <rect x="35" y="55" width="60" height="30" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
                              <text x="65" y="72" fill="#10B981" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Calculate Pricing</text>

                              <path d="M 65 85 L 65 100" stroke="#CBD5E1" strokeWidth="1.2" />

                              {/* Event (Hexagon) */}
                              <polygon points="55,100 75,100 85,115 75,130 55,130 45,115" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
                              <text x="65" y="117" fill="#D97706" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Pricing Fixed</text>

                              {/* Connection side branch */}
                              <path d="M 95 70 L 155 70" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" />
                              
                              {/* Resource unit */}
                              <rect x="155" y="55" width="55" height="30" rx="3" fill="#EEF2F6" stroke="#64748B" strokeWidth="1" />
                              <text x="182.5" y="72" fill="#64748B" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Sales Rep</text>
                            </svg>
                          </motion.div>
                        )}

                        {modelingTab === 'FAD' && (
                          <motion.div 
                            key="fad"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex justify-center"
                          >
                            <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 280 140" fill="none">
                              {/* Central function Allocation Diagram */}
                              {/* Central Function Node */}
                              <rect x="90" y="55" width="100" height="30" rx="5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
                              <text x="140" y="72" fill="#0284C7" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-outfit">Perform Asset Audit</text>

                              {/* Supporting Roles link */}
                              <path d="M 140 55 L 140 25" stroke="#94A3B8" strokeWidth="1.2" />
                              <rect x="100" y="5" width="80" height="20" rx="3" fill="#EEF2F6" stroke="#64748B" strokeWidth="1" />
                              <text x="140" y="17" fill="#475569" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Role: Audit Lead</text>

                              {/* Database link */}
                              <path d="M 90 70 L 45 70" stroke="#94A3B8" strokeWidth="1.2" />
                              <rect x="5" y="60" width="40" height="20" rx="3" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
                              <text x="25" y="72" fill="#065F46" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Asset DB</text>

                              {/* Output Documents link */}
                              <path d="M 190 70 L 235 70" stroke="#94A3B8" strokeWidth="1.2" />
                              <rect x="235" y="60" width="40" height="20" rx="3" fill="#FFF1F2" stroke="#F43F5E" strokeWidth="1" />
                              <text x="255" y="72" fill="#9F1239" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-outfit">Audit Log PDF</text>
                            </svg>
                          </motion.div>
                        )}

                        {modelingTab === 'Org Chart' && (
                          <motion.div 
                            key="orgchart"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex justify-center"
                          >
                            <svg className="w-full max-w-[280px] h-auto" viewBox="0 0 280 140" fill="none">
                              {/* Executive Node */}
                              <rect x="105" y="10" width="70" height="25" rx="4" fill="#F8FAFC" stroke="#6366F1" strokeWidth="1.5" />
                              <text x="140" y="22" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">VP Operations</text>
                              <text x="140" y="30" fill="#94A3B8" fontSize="5" textAnchor="middle" className="font-outfit">Executive Dir</text>

                              <path d="M 140 35 L 140 60" stroke="#CBD5E1" strokeWidth="1.2" />

                              {/* Middle Level Split */}
                              <path d="M 60 60 L 220 60" stroke="#CBD5E1" strokeWidth="1.2" />
                              <path d="M 60 60 L 60 75" stroke="#CBD5E1" strokeWidth="1.2" />
                              <path d="M 220 60 L 220 75" stroke="#CBD5E1" strokeWidth="1.2" />

                              {/* Left Manager */}
                              <rect x="25" y="75" width="70" height="25" rx="4" fill="#F8FAFC" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="60" y="87" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Procurement Mgr</text>
                              <text x="60" y="95" fill="#94A3B8" fontSize="5" textAnchor="middle" className="font-outfit">Middle Office</text>

                              {/* Right Manager */}
                              <rect x="185" y="75" width="70" height="25" rx="4" fill="#F8FAFC" stroke="#8B5CF6" strokeWidth="1.2" />
                              <text x="220" y="87" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-outfit">Logistics Director</text>
                              <text x="220" y="95" fill="#94A3B8" fontSize="5" textAnchor="middle" className="font-outfit">Warehouse ops</text>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold border-t border-slate-100 pt-2.5">
                      <span>Interactive Live View</span>
                      <span className="text-brand-emerald flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-ping" />
                        Rendering: {modelingTab} Mode
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: Dictionary Management */}
              <div id="dictionary-management" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Interactive Dashboard - Placed left for alternating layout */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden order-last md:order-first">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100 flex-wrap gap-2">
                      <div className="flex items-center gap-1.5">
                        <Database className="w-4 h-4 text-brand-emerald" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Object Dictionary Manager</span>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search database..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-6 pr-2 py-0.5 text-[10px] bg-slate-100 hover:bg-slate-200/60 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-brand-indigo w-28 placeholder:text-slate-400 font-medium font-sans"
                        />
                        <Search className="w-2.5 h-2.5 text-slate-400 absolute left-2 top-1.5" />
                      </div>
                    </div>

                    {/* Subcategories selector */}
                    <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-[9px] font-bold mt-2 text-slate-500">
                      {Object.keys(dictionary).map(cat => (
                        <button
                          key={cat}
                          onClick={() => { setDictTab(cat); setSearchQuery(''); }}
                          className={`flex-1 py-1 px-1.5 rounded-lg transition-colors cursor-pointer ${
                            dictTab === cat ? 'bg-white text-slate-900 shadow-sm font-bold' : 'hover:text-slate-800'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Object List */}
                    <div className="flex-grow mt-3 overflow-y-auto no-scrollbar max-h-[140px] text-left space-y-1.5">
                      {dictionary[dictTab]
                        .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item) => (
                          <div 
                            key={item.id} 
                            className="bg-white border border-slate-200/60 p-2 rounded-xl flex items-center justify-between text-[10px] hover:border-slate-300 hover:shadow-sm transition-all"
                          >
                            <div>
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                {item.name}
                                <span className="bg-slate-100 text-slate-500 font-sans font-medium px-1.5 py-0.2 rounded text-[7px] border border-slate-200/50 uppercase">
                                  {item.type}
                                </span>
                              </div>
                              <div className="text-slate-400 mt-0.5 line-clamp-1 font-medium">{item.desc}</div>
                            </div>
                            <div className="text-[8px] font-bold text-brand-indigo bg-brand-indigo/5 px-2 py-1 rounded-lg flex-shrink-0 text-right font-outfit">
                              MAPPED IN: {item.usages}x
                            </div>
                          </div>
                        ))
                      }
                      {dictionary[dictTab].filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                        <div className="text-[10px] text-slate-400 font-medium text-center py-4">No matching objects cataloged.</div>
                      )}
                    </div>

                    {/* Add Element inline form */}
                    <form onSubmit={handleAddItem} className="flex gap-2 pt-3 border-t border-slate-100 mt-2">
                      <input 
                        type="text" 
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        placeholder={`Register new ${dictTab.slice(0, -1)}...`}
                        className="flex-grow px-3 py-1.5 bg-slate-100 hover:bg-slate-200/50 focus:bg-white text-[10px] rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-brand-emerald font-semibold"
                      />
                      <button 
                        type="submit"
                        className="px-3 bg-brand-emerald hover:opacity-90 active:scale-95 text-white rounded-lg flex items-center justify-center cursor-pointer transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>

                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">02 / Centralized Object Repositories</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">Unified Dictionary Catalog Rules</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Establish a single source of truth across all business maps. Declare systems, user roles, input documents, and custom tags once inside the central Object Dictionary, then link them to modeling elements. Modifying an entity updates all mapping occurrences globally.
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[
                        { label: 'Role Governance Mapping', desc: 'Associate standard roles with tasks for access audit.' },
                        { label: 'System Architecture Alignment', desc: 'Catalog software systems to trace digital footprint.' },
                        { label: 'Compliance Index Tagging', desc: 'Create custom tags (risk status, SLA, costs) across steps.' }
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                          <span><strong>{li.label}</strong>: {li.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Category 3: Version Control */}
              <div id="version-control" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">03 / Branching & Release Pipeline</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">AI-Driven Version Control & Releases</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Safely experiment with process design. Our AI instantly compares a newly approved model version against the previous version, auto-writing a change log explaining what changed (added/removed steps, visual style edits, attachments) and what it means for your operations.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button 
                        onClick={handleCreateBranch}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold rounded-lg text-xs transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
                      >
                        <GitFork className="w-3.5 h-3.5 text-brand-purple" />
                        Create Draft Branch
                      </button>
                      <button 
                        onClick={handleRollback}
                        className="px-4 py-2 bg-red-50 hover:bg-red-600/90 text-white font-bold rounded-lg text-xs transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-red-500/10"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Simulate rollback
                      </button>
                    </div>
                  </div>

                  {/* Git-like Timeline Visualization */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <GitBranch className="w-4 h-4 text-brand-purple" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Release Pipeline History</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] text-slate-400 font-bold">Active Branch:</span>
                        <span className="px-2 py-0.5 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple rounded-md text-[9px] font-bold font-outfit">
                          {activeBranch}
                        </span>
                      </div>
                    </div>

                    {/* Commit Feed & Branches diagram */}
                    <div className="flex-grow flex flex-col justify-center gap-2.5 my-3 text-left">
                      
                      {rollbackStatus && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-2 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[9px] font-bold flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                          {rollbackStatus}
                        </motion.div>
                      )}

                      {/* Timeline Node cards */}
                      <div className="space-y-2 relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200 pointer-events-none" />

                        {/* Node 1 */}
                        <div className={`p-2 rounded-xl border flex justify-between items-center text-[10px] transition-all bg-white ${compareMode ? 'border-red-200 bg-red-50/20' : 'border-slate-200'}`}>
                          <div className="flex items-start gap-2.5 relative z-10">
                            <span className="w-2 h-2 rounded-full bg-brand-emerald mt-1.5 flex-shrink-0 ring-4 ring-brand-emerald/15" />
                            <div>
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                v3.2.0 <span className="bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-outfit px-1.5 py-0.2 rounded text-[7px] uppercase font-bold">Published</span>
                              </div>
                              <div className="text-slate-400 font-medium">Merge pull request #14: Fix credit approval SLA limit.</div>
                            </div>
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold">Sarah Compliance</span>
                        </div>

                        {/* Node 2 */}
                        <div className={`p-2 rounded-xl border flex justify-between items-center text-[10px] transition-all bg-white ${compareMode ? 'border-green-200 bg-green-50/20 shadow-sm' : 'border-slate-200'}`}>
                          <div className="flex items-start gap-2.5 relative z-10">
                            <span className="w-2 h-2 rounded-full bg-brand-purple mt-1.5 flex-shrink-0 ring-4 ring-brand-purple/15" />
                            <div>
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                v3.1.2 <span className="bg-slate-100 border border-slate-200 text-slate-400 font-outfit px-1.5 py-0.2 rounded text-[7px] uppercase font-bold">Archived</span>
                              </div>
                              <div className="text-slate-400 font-medium">Update purchase requisition routing hierarchy config.</div>
                            </div>
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold">John Analyst</span>
                        </div>

                        {/* Node 3 */}
                        <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-[10px]">
                          <div className="flex items-start gap-2.5 relative z-10 text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                            <div>
                              <div className="font-bold text-slate-700">v3.1.0 (Production Stable)</div>
                              <div className="font-medium">Original signed process audit parameters approved by Executive.</div>
                            </div>
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold">Board Sign-off</span>
                        </div>
                      </div>

                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold border-t border-slate-100 pt-2.5">
                      <button 
                        onClick={() => setCompareMode(!compareMode)}
                        className={`text-xs px-3 py-1 border rounded-lg font-bold transition-all focus:outline-none cursor-pointer ${
                          compareMode ? 'bg-brand-purple text-white border-brand-purple' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {compareMode ? 'Hide Differences' : 'Compare Mapped Diff'}
                      </button>
                      <span className="text-slate-400">Branch count: {branches.length} drafts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: Role-Based Access */}
              <div id="role-based-access" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Interactive Permission Grid Matrix - Left column for alternating design */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden order-last md:order-first">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Key className="w-4 h-4 text-brand-indigo" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Access Permission Matrix</span>
                      </div>
                      
                      <span className="text-[8px] bg-indigo-50 border border-indigo-200/50 text-brand-indigo px-2 py-0.5 rounded font-bold uppercase tracking-wider font-outfit">
                        RBAC Engine Active
                      </span>
                    </div>

                    {/* Alert banner for modification updates */}
                    {rbacAlert && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-1.5 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-lg text-[9px] font-bold text-center"
                      >
                        {rbacAlert}
                      </motion.div>
                    )}

                    {/* Selector & Grid */}
                    <div className="flex-grow flex flex-col justify-center my-2 gap-2 text-left">
                      <div className="flex gap-1.5 text-[10px] font-bold">
                        {Object.keys(permissions).map((role) => (
                          <button
                            key={role}
                            onClick={() => setRbacRole(role)}
                            className={`px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                              rbacRole === role 
                                ? 'bg-white border-brand-indigo text-brand-indigo shadow-sm font-bold font-outfit' 
                                : 'bg-slate-100 hover:bg-slate-200 border-transparent text-slate-500'
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>

                      {/* Permissions Checklist for selected role */}
                      <div className="bg-white border border-slate-200/60 p-3 rounded-2xl space-y-2 mt-1">
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-100">
                          Capabilities granted for: {rbacRole}
                        </div>
                        {Object.keys(permissions[rbacRole]).map((action) => {
                          const actionLabels = {
                            edit: 'Edit process maps / flow layouts',
                            publish: 'Approve and publish live models',
                            dictionary: 'Manage Dictionary objects catalog',
                            simulate: 'Run resource load simulations',
                            reports: 'View log mining reports & KPI feeds'
                          };
                          const isAllowed = permissions[rbacRole][action];
                          return (
                            <div 
                              key={action}
                              onClick={() => togglePermission(rbacRole, action)}
                              className="flex items-center justify-between p-1 rounded hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                              <span className="text-[10px] text-slate-700 font-semibold">{actionLabels[action]}</span>
                              <div className={`w-8 h-4 rounded-full relative p-0.5 transition-colors ${isAllowed ? 'bg-brand-emerald' : 'bg-slate-200'}`}>
                                <div className={`w-3 h-3 bg-white rounded-full transition-transform ${isAllowed ? 'translate-x-4' : 'translate-x-0'}`} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-[8px] text-slate-400 font-bold border-t border-slate-100 pt-2.5 text-center">
                      Click toggles to test custom adjustments. Custom modifications update in real-time.
                    </div>
                  </div>

                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">04 / Corporate Access Control</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">Granular RBAC Security & Sign-offs</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Enforce strict data separation principles. Define access policies so modeling experts can design flows, governance committees can check compliance targets, and line managers can review logs—while business viewers access only approved documentations.
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[
                        { label: 'Custom Security Roles', desc: 'Define unique profiles aligned with corporate governance.' },
                        { label: 'Audit Log Sign-offs', desc: 'Secure digital approvals recorded for SOC2/ISO conformity.' },
                        { label: 'Visual Hierarchy Control', desc: 'Restrict process folder tree nodes based on AD permissions.' }
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                          <span><strong>{li.label}</strong>: {li.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Category 5: Multi-Tenant Architecture */}
              <div id="multi-tenant" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">05 / Architecture Segregation</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">Shared Operations, Isolated Database Schemes</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Scale your process intelligence globally with full security assurance. Tasree3's modern multi-tenant engine isolates event log databases, processes schemas, and access directories. Regional subsidiaries can collaborate globally while obeying strict territorial data residency guidelines (GDPR / CCPA).
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[
                        { label: 'Isolated Database Schemas', desc: 'Zero data leakage risk. Unique cryptographic namespaces per tenant.' },
                        { label: 'Custom KMS Keys', desc: 'Own your decryption cycles with customer-managed keys.' },
                        { label: 'Regional Tenant Gateways', desc: 'Route regional transaction logs to localized storage buckets.' }
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                          <span><strong>{li.label}</strong>: {li.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Multi-Tenant Interactive Pipeline */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-brand-emerald" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Tenant Database Segregator</span>
                      </div>
                      
                      <span className="text-[8px] bg-emerald-50 border border-emerald-200/50 text-brand-emerald px-2 py-0.5 rounded font-bold uppercase tracking-wider font-outfit">
                        Isolated Namespace
                      </span>
                    </div>

                    {/* Pipeline Animation Grid */}
                    <div className="flex-grow grid grid-cols-12 gap-3 items-center my-3 relative min-h-[140px]">
                      {/* Left: Tenant buttons list */}
                      <div className="col-span-4 space-y-1.5 text-left">
                        {Object.keys(tenantData).map((tenantId) => (
                          <button
                            key={tenantId}
                            onClick={() => setSelectedTenant(tenantId)}
                            className={`w-full p-2 border rounded-xl text-[9px] font-bold text-left transition-all focus:outline-none cursor-pointer ${
                              selectedTenant === tenantId 
                                ? 'bg-white border-brand-emerald text-brand-emerald shadow-sm' 
                                : 'bg-slate-100 hover:bg-slate-200 border-transparent text-slate-500'
                            }`}
                          >
                            <span className="block font-outfit uppercase tracking-wider">{tenantId}</span>
                            <span className="text-[7px] text-slate-400 font-sans block">{tenantData[tenantId].region}</span>
                          </button>
                        ))}
                      </div>

                      {/* Center: Interactive Graphic pipelines */}
                      <div className="col-span-8 bg-white border border-slate-200/60 p-3 rounded-2xl h-full flex flex-col justify-between text-left">
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1.5">
                          Virtual Pipeline Diagnostics
                        </div>

                        {/* Mapped stats for selected tenant */}
                        <div className="space-y-1.5 flex-grow flex flex-col justify-center py-1">
                          <div className="flex justify-between text-[10px] font-medium">
                            <span className="text-slate-400">Database Schema:</span>
                            <span className="text-slate-800 font-bold font-sans">`{tenantData[selectedTenant].schema}`</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-medium">
                            <span className="text-slate-400">Active Mapped Users:</span>
                            <span className="text-slate-800 font-bold font-sans">{tenantData[selectedTenant].users} admins</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-medium">
                            <span className="text-slate-400">Mined Logs Volume:</span>
                            <span className="text-slate-800 font-bold font-sans">{tenantData[selectedTenant].volume}</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-medium">
                            <span className="text-slate-400">Governance Audit Status:</span>
                            <span className={`font-bold uppercase text-[8px] px-1.5 py-0.2 rounded font-outfit border ${
                              tenantData[selectedTenant].status === 'Compliant'
                                ? 'bg-emerald-50 text-brand-emerald border-brand-emerald/20'
                                : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                            }`}>{tenantData[selectedTenant].status}</span>
                          </div>
                        </div>

                        {/* Security check confirmation */}
                        <div className="flex items-center gap-1 border-t border-slate-100 pt-1.5 text-[8px] text-slate-400 font-bold">
                          <Check className="w-3 h-3 text-brand-emerald" />
                          <span>Tenant Data Segregation Enforced (AES-256)</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[8px] text-slate-400 font-bold border-t border-slate-100 pt-2.5 text-center">
                      Select Tenant on left to monitor network namespace segregation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 6: Enterprise Security */}
              <div id="enterprise-security" className="scroll-mt-24 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Interactive Dashboard - Placed left for alternating layout */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-5 shadow-lg flex flex-col justify-between aspect-[4/3] overflow-hidden order-last md:order-first">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-brand-indigo" />
                        <span className="text-[10px] font-bold text-slate-800 font-outfit uppercase tracking-wider">Enterprise Security Feed</span>
                      </div>
                      
                      <div className="flex gap-1">
                        <span className="text-[8px] bg-slate-100 border border-slate-200 text-slate-500 px-1.5 py-0.2 rounded font-bold uppercase tracking-wider font-outfit">SAML Active</span>
                        <span className="text-[8px] bg-emerald-50 border border-emerald-200/50 text-brand-emerald px-1.5 py-0.2 rounded font-bold uppercase tracking-wider font-outfit">TLS 1.3</span>
                      </div>
                    </div>

                    {/* Logs terminal feed */}
                    <div className="flex-grow my-3 bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-col justify-between font-mono text-[9px] text-slate-300 text-left relative overflow-hidden shadow-inner">
                      <div className="text-[7px] text-slate-500 uppercase font-bold tracking-widest border-b border-slate-800 pb-1 mb-2">
                        Audit Logging Console v2.4 (Simulated)
                      </div>
                      <div className="space-y-1.5 flex-grow">
                        {secLogs.map((log, index) => (
                          <div key={index} className="flex gap-2">
                            <span className="text-slate-500">{log.time}</span>
                            <span className="text-brand-emerald">&gt;</span>
                            <span className="text-slate-100 line-clamp-1">{log.event}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[8px] text-slate-500 font-bold pt-2 border-t border-slate-800">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                        Listening for security log mutations...
                      </div>
                    </div>

                    {/* Security credentials badges */}
                    <div className="flex justify-around items-center border-t border-slate-100 pt-2 text-[8px] text-slate-400 font-bold font-outfit uppercase">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo" />
                        SOC 2 Type II
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo" />
                        ISO 27001
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo" />
                        HIPAA
                      </div>
                    </div>
                  </div>

                  {/* Copywriting */}
                  <div className="space-y-5 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">06 / Security & Compliance</span>
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 leading-tight">Enterprise Compliance Guardrails</h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Protect your operational data flows. Tasree3 meets strict enterprise security expectations out-of-the-box. Enjoy custom SAML/SSO integration, strict TLS 1.3 transmission tunnels, localized database encryption keys, and complete SOC 2 Type II operational certifications.
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[
                        { label: 'SSO Federated Logins', desc: 'Secure identities via Okta, Microsoft Azure AD, or PingIdentity.' },
                        { label: 'Full Access Audit Logs', desc: 'Record configuration adjustments, log exports, and modeling updates.' },
                        { label: 'Cryptographic Protection', desc: 'AES-256 state encryption at rest and TLS 1.3 streams in transit.' }
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                          <span><strong>{li.label}</strong>: {li.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Secondary Feature Cards Section */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">SaaS Utility Assets</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Fully Loaded Operational Utilities</h2>
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto font-medium">
            Discover the minor structural design additions engineered to speed up documentation and auditing cycles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {[
              { icon: Activity, title: 'Discrete Simulation Engine', desc: 'Simulate workflow load capacities. Forecast bottlenecks and verify staffing costs before deployment.' },
              { icon: FileText, title: 'BPMN XML Import / Export', desc: 'Zero lock-in. Smoothly migrate complex legacy files from Visio, Signavio, or Aris without information loss.' },
              { icon: Settings, title: 'Rest API & Integration Webhooks', desc: 'Sync mapping assets. Trigger automated compliance updates via Slack, Teams, or corporate webhook pipelines.' },
              { icon: UserCheck, title: 'SLA Gatekeeper Notifications', desc: 'Flag late workflow approvals. Send immediate alert reminders to bottlenecked user groups.' },
              { icon: Layers, title: 'Process Folders Hierarchy', desc: 'Catalog process files inside clear trees. Establish folder permissions matching corporate roles.' },
              { icon: Award, title: 'Auto-Generated Manuals', desc: 'Convert visual diagrams into detailed text procedures with one click, cutting documentation cycles by 5x.' }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-md hover:border-brand-indigo/35 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-brand-indigo">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-outfit text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix Table */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Comprehensive Overview</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Capabilities Matrix</h2>
          
          <div className="mt-12 overflow-x-auto border border-slate-200 rounded-3xl shadow-lg">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-outfit font-bold">
                  <th className="p-5">Capability Node</th>
                  <th className="p-5">Standard</th>
                  <th className="p-5">Professional</th>
                  <th className="p-5">Enterprise Core</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-500">
                <tr>
                  <td className="p-5 font-bold text-slate-800">Process Modeling Format</td>
                  <td className="p-5">BPMN 2.0 & Org Charts</td>
                  <td className="p-5">BPMN, EPC, FAD, Org Charts</td>
                  <td className="p-5 text-slate-900 font-semibold">Full Custom Notation Formats</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-800">Object Dictionary Catalog</td>
                  <td className="p-5">Up to 25 items</td>
                  <td className="p-5">Up to 250 items</td>
                  <td className="p-5 text-slate-900 font-semibold">Unlimited Custom Attributes</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-800">Release Version Branches</td>
                  <td className="p-5">Linear version history</td>
                  <td className="p-5">Branching + Diff check</td>
                  <td className="p-5 text-slate-900 font-semibold">Custom Release Approval Gateways</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-800">Role-Based RBAC Permissions</td>
                  <td className="p-5">Basic (Admin vs Viewer)</td>
                  <td className="p-5">Advanced role levels</td>
                  <td className="p-5 text-slate-900 font-semibold">Custom Permission Matrix & SAML</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-800">Architecture Isolation</td>
                  <td className="p-5">Shared multi-tenant database</td>
                  <td className="p-5">Segregated database schema</td>
                  <td className="p-5 text-slate-900 font-semibold">Dedicated VPC & On-Premises Option</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-slate-800">Support & SLA Targets</td>
                  <td className="p-5">Standard Email Support</td>
                  <td className="p-5">Priority Slack Support</td>
                  <td className="p-5 text-slate-900 font-semibold">24/7 dedicated Engineer SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner onRequestDemo={onRequestDemo} />
    </>
  );
}
