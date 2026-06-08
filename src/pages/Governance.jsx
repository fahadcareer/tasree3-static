import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, CheckSquare, AlertTriangle, Scale, ArrowRight, Check, 
  X, ShieldAlert, FileText, ChevronRight, UserCheck, Calendar, 
  Cpu, GitFork, RefreshCw, Eye, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

export default function Governance({ onRequestDemo }) {
  // Workflow Simulator Step (1 = Draft, 2 = Reviewer 1, 3 = Reviewer 2, 4 = Approver, 5 = Approved)
  const [workflowStep, setWorkflowStep] = useState(1);
  const [rollbackAlert, setRollbackAlert] = useState(null);

  const workflowStages = [
    { id: 1, name: 'Draft', desc: 'Editor drafts v3.5 PO process layout.', role: 'Process Modeler' },
    { id: 2, name: 'Reviewer 1', desc: 'Checks process path SLAs & metrics.', role: 'Operations Lead' },
    { id: 3, name: 'Reviewer 2', desc: 'Verifies Separation of Duties policies.', role: 'Compliance Auditor' },
    { id: 4, name: 'Approver', desc: 'Executes digital security sign-off.', role: 'Finance Director' },
    { id: 5, name: 'Approved', desc: 'Published to active company directory.', role: 'Governance Engine' }
  ];

  const handleNextStep = () => {
    if (workflowStep < 5) {
      setWorkflowStep(prev => prev + 1);
    }
  };

  const handleRollback = () => {
    if (workflowStep > 1 && workflowStep < 5) {
      setRollbackAlert(`Automated Rollback Rule triggered: Process layout reverted from '${workflowStages[workflowStep - 1].name}' back to 'Draft'. Notifications dispatched.`);
      setWorkflowStep(1);
      setTimeout(() => setRollbackAlert(null), 4000);
    }
  };

  // Expandable Audit Logs State
  const [expandedLogId, setExpandedLogId] = useState(null);

  const auditLogs = [
    {
      id: 'log-1',
      time: '02-Jun-2026 14:12 UTC',
      actor: 'john.o@comp.com',
      event: 'Workflow Parameter Mutation',
      status: 'Revision',
      details: {
        nodeId: 'verify-credit-gateway-01',
        description: 'Changed target SLA time limit on critical PO review node.',
        diff: {
          attribute: 'Target SLA Limit',
          oldValue: '2.0 Hours',
          newValue: '4.0 Hours'
        }
      }
    },
    {
      id: 'log-2',
      time: '02-Jun-2026 11:32 UTC',
      actor: 'sarah.c@comp.com',
      event: 'Compliance Sign-off Verification',
      status: 'Compliant',
      details: {
        nodeId: 'po-approval-step-4',
        description: 'Completed sequential verification for v3.2.0 release approval.',
        diff: {
          approverRole: 'Compliance Auditor',
          ruleSet: 'SOC2 Annex A.12',
          status: 'Passed'
        }
      }
    },
    {
      id: 'log-3',
      time: '01-Jun-2026 16:54 UTC',
      actor: 'System Auto-Auditor',
      event: 'Path Deviation Violation Flagged',
      status: 'Deviation Alert',
      details: {
        nodeId: 'case_8902_apac',
        description: 'Ingested database log shows critical path bypass violation.',
        diff: {
          expectedPath: 'Verify Budget -> Approve PO -> Release Goods',
          actualPath: 'Verify Budget -> Release Goods (Bypassed Approval)',
          actionTriggered: 'Slack alert dispatched to Compliance Operations Team'
        }
      }
    }
  ];

  return (
    <>
      <SEO 
        title="Enterprise Process Governance - Approval Workflows & Auditing" 
        description="Enforce sequential reviewer approval chains, automate process rollbacks on audit failures, and monitor compliant operations in real-time."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-10 overflow-hidden text-left bg-slate-50/50">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-purple/[0.04] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-brand-indigo/[0.03] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copywriting */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider font-outfit shadow-sm">
                <Shield className="w-3.5 h-3.5" />
                Operational Compliance Control
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight text-slate-900">
                Govern Every <span className="text-gradient">Process Change</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                Establish rigorous approval guidelines. Enforce sequential stakeholder reviews, verify compliance frameworks automatically, and rollback variations upon authorization gaps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onRequestDemo}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-primary hover:opacity-90 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 flex items-center justify-center gap-2 text-sm cursor-pointer focus:outline-none"
                >
                  Request Enterprise Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Approval Workflow Simulator */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                {/* Visual Header */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-brand-purple rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest font-outfit">Approval Pipeline Engine</span>
                  </div>

                  <div className="text-[9px] bg-slate-100 border border-slate-200 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-outfit">
                    Active: Purchase Order Process v3.5
                  </div>
                </div>

                {/* Rollback Alert Alert Banner */}
                {rollbackAlert && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 0.98 }}
                    className="my-2 p-2 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[10px] font-bold text-left flex items-start gap-2"
                  >
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{rollbackAlert}</span>
                  </motion.div>
                )}

                {/* Workflow Nodes Animation */}
                <div className="flex-grow flex flex-col justify-center py-6 text-left relative space-y-6">
                  {/* Pipeline Path Graphic */}
                  <div className="relative flex justify-between items-center max-w-lg mx-auto w-full">
                    {/* Horizontal connecting background line */}
                    <div className="absolute left-4 right-4 h-1 bg-slate-100 pointer-events-none z-0" />
                    
                    {/* Horizontal connecting active line */}
                    <div 
                      className="absolute left-4 h-1 bg-brand-emerald pointer-events-none z-0 transition-all duration-300"
                      style={{ width: `${(workflowStep - 1) * 23.5}%` }}
                    />

                    {workflowStages.map((stage) => {
                      const isCompleted = workflowStep > stage.id;
                      const isActive = workflowStep === stage.id;
                      const isApproved = workflowStep === 5;
                      
                      return (
                        <div key={stage.id} className="relative z-10 flex flex-col items-center">
                          <div 
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${
                              isCompleted || isApproved
                                ? 'bg-brand-emerald border-brand-emerald text-white shadow-md shadow-brand-emerald/10'
                                : isActive 
                                  ? 'bg-brand-purple border-brand-purple text-white shadow-md shadow-brand-purple/10 ring-4 ring-brand-purple/15'
                                  : 'bg-white border-slate-200 text-slate-400'
                            }`}
                          >
                            {isCompleted || isApproved ? <Check className="w-4 h-4" /> : stage.id}
                          </div>
                          <span className={`text-[8px] font-bold mt-2 uppercase font-outfit tracking-wider ${
                            isActive ? 'text-brand-purple' : isCompleted || isApproved ? 'text-brand-emerald' : 'text-slate-400'
                          }`}>
                            {stage.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Active Stage Card details */}
                  <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl max-w-md mx-auto w-full flex justify-between items-center gap-4">
                    <div className="space-y-1">
                      <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider font-outfit block">
                        Active Step Role: {workflowStages[workflowStep - 1].role}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">
                        {workflowStages[workflowStep - 1].name} Stage Check
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {workflowStages[workflowStep - 1].desc}
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      {workflowStep === 5 ? (
                        <span className="px-2.5 py-1 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-[9px] font-bold rounded-lg uppercase tracking-wider font-outfit">
                          Published
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-yellow-50 border border-yellow-200 text-yellow-600 text-[9px] font-bold rounded-lg uppercase tracking-wider font-outfit">
                          Pending Approval
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 flex-wrap gap-2 text-[10px] text-slate-400 font-bold font-outfit">
                  <div className="flex gap-2">
                    <button 
                      onClick={handleNextStep}
                      disabled={workflowStep === 5}
                      className="px-3.5 py-1.5 bg-brand-emerald hover:opacity-90 active:scale-95 disabled:opacity-40 text-white rounded-lg transition-all cursor-pointer flex items-center gap-1 focus:outline-none"
                    >
                      Approve Stage &rarr;
                    </button>
                    
                    <button 
                      onClick={handleRollback}
                      disabled={workflowStep === 1 || workflowStep === 5}
                      className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 disabled:opacity-40 text-red-600 rounded-lg transition-all cursor-pointer flex items-center gap-1 focus:outline-none border border-red-200/50"
                    >
                      Reject / Rollback
                    </button>
                  </div>

                  <button 
                    onClick={() => setWorkflowStep(1)}
                    className="hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset Flow
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Governance Value Features Grid */}
      <section className="pt-8 pb-24 bg-white border-b border-slate-200/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald font-outfit">Secure Guardrails</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mt-2">Continuous Governance Capabilities</h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-medium">
              Eliminate loose audit blueprints. Establish a unified, chronological compliance barrier with full operational controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: '1. Sequential Reviews', desc: 'Prevent bypass. Ensure that initial technical reviews must pass successfully before operations and legal teams are pinged for approval.' },
              { icon: RefreshCw, title: '2. Automated Rollback Rules', desc: 'Trigger automatic rollback. If a compliance check is rejected at any gate, the design reverts to Draft, preventing partial updates.' },
              { icon: GitFork, title: '3. Customized Approval Chains', desc: 'Design sign-off hierarchies matching specific risk profiles, cost center thresholds, or department boundaries.' },
              { icon: FileText, title: '4. Visual Version History', desc: 'Monitor visual process adjustments side-by-side. Track every node deletion, SLA modification, and gateway change.' },
              { icon: CheckSquare, title: '5. Regulatory Compliance Mapping', desc: 'Correlate operational layouts to SOC 2, ISO 27001, HIPAA, and GDPR frameworks automatically for auditor review.' },
              { icon: UserCheck, title: '6. Certified Audit Trails', desc: 'Log exact timestamps, editing users, approval notes, and system changes to build regulatory-compliant audit manuals.' }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50/50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:border-slate-300 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-brand-indigo">
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

      {/* Interactive Audit Logs Dashboard Panel */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">Operations Audit Trail</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Interactive Audit Logs Feed</h2>
            <p className="text-slate-500 mt-3 text-sm font-medium">
              Click on individual log instances in the feed below to inspect historical process changes and metadata payloads.
            </p>
          </div>

          {/* Interactive Logs Feed */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg text-left">
            <div className="p-4 bg-slate-50 border-b border-slate-200/80 text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-indigo" /> Process Mutation History & Alerts
            </div>

            <div className="divide-y divide-slate-100">
              {auditLogs.map((log) => {
                const isExpanded = expandedLogId === log.id;
                
                return (
                  <div key={log.id} className="transition-colors hover:bg-slate-50/40">
                    {/* Row Header */}
                    <div 
                      onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
                      className="p-4 flex flex-wrap items-center justify-between gap-4 cursor-pointer text-xs font-semibold"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-slate-400 font-bold font-sans flex-shrink-0 w-24">
                          {log.time.split(' ')[0]}
                        </span>
                        
                        <div className="space-y-0.5">
                          <span className="text-slate-800 font-bold block">{log.event}</span>
                          <span className="text-[10px] text-slate-400 block font-medium">Actor: {log.actor}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 text-[8px] font-extrabold uppercase font-outfit rounded-lg border ${
                          log.status === 'Compliant'
                            ? 'bg-emerald-50 text-brand-emerald border-brand-emerald/20'
                            : log.status === 'Revision'
                              ? 'bg-indigo-50 text-brand-indigo border-brand-indigo/20'
                              : 'bg-red-50 text-red-500 border-red-200'
                        }`}>
                          {log.status}
                        </span>

                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90 text-slate-800' : ''}`} />
                      </div>
                    </div>

                    {/* Expanded Content Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden bg-slate-50 border-t border-slate-100"
                        >
                          <div className="p-4 space-y-3 font-medium text-[11px] text-slate-600">
                            <div>
                              <span className="font-bold text-slate-800 block">Affected Node ID:</span>
                              <code className="text-brand-indigo bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-200/20 text-[9px] font-mono mt-0.5 inline-block">
                                {log.details.nodeId}
                              </code>
                            </div>

                            <div>
                              <span className="font-bold text-slate-800 block">Event Description:</span>
                              <p className="mt-0.5 text-xs text-slate-500 font-medium">{log.details.description}</p>
                            </div>

                            <div>
                              <span className="font-bold text-slate-800 block mb-1">Decryption Payload Diff (JSON):</span>
                              <pre className="p-3 bg-slate-900 text-slate-300 font-mono text-[9px] rounded-xl overflow-x-auto border border-slate-800 shadow-inner">
                                {JSON.stringify(log.details.diff, null, 2)}
                              </pre>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Compliance Certifications Badges Showcase */}
      <section className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Enterprise Shield</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-2">Verified Framework Compliance</h2>
            <p className="text-slate-500 mt-3 text-sm font-medium">
              We process operational telemetry logs in accordance with the highest global cybersecurity and data separation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { label: 'SOC 2 Type II', desc: 'Audited annual reviews covering operational security, log data integrity, and availability pipelines.', status: 'Active Certificate' },
              { label: 'ISO / IEC 27001', desc: 'Global information security standard certifying centralized risk mitigation and database isolation protocols.', status: 'Active Certificate' },
              { label: 'GDPR Compliant', desc: 'Regional tenant isolation gateways ensuring that EU operational telemetry logs obey data residency rules.', status: 'Enforced' },
              { label: 'HIPAA Certified', desc: 'Cryptographic data protection securing transaction streams and employee identities across core healthcare paths.', status: 'Enforced' }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between text-left space-y-3.5 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-xl text-brand-indigo">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="bg-emerald-50 border border-emerald-200/30 text-brand-emerald text-[8px] px-2 py-0.5 rounded font-extrabold uppercase font-outfit tracking-wider">
                    {badge.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-outfit uppercase tracking-wide">{badge.label}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold mt-1">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">Mitigate Operations Risk</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight">
            Ready to Secure Your Operations?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Automate continuous compliance audits, enforce stakeholder sign-offs, and safeguard logs pipelines with Tasree3.
          </p>
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-gradient-primary hover:opacity-90 active:scale-95 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-indigo/15 text-sm cursor-pointer focus:outline-none"
          >
            Request Enterprise Demo
          </button>
        </div>
      </section>
    </>
  );
}
