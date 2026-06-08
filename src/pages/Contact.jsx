import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Calendar,
  Clock, Landmark, Users, Building, ShieldCheck, ChevronDown,
  HelpCircle, Laptop, Globe
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  // Demo request form states
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Banking',
    employeeCount: '100-500',
    message: ''
  });
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  const [isDemoSuccess, setIsDemoSuccess] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setIsDemoSubmitting(true);
    setTimeout(() => {
      setIsDemoSubmitting(false);
      setIsDemoSuccess(true);
    }, 1500);
  };

  // Calendly simulator states
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  const dates = ['Today', 'Tomorrow', 'Jun 8', 'Jun 9', 'Jun 10'];
  const times = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

  const handleBookMeeting = (e) => {
    e.preventDefault();
    if (!selectedTime || !bookingEmail) return;
    setIsBookingSubmitting(true);
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setIsBookingSuccess(true);
    }, 1200);
  };

  // Interactive office locations map states
  const [activeLocationId, setActiveLocationId] = useState('dubai');
  const officeLocations = {
    dubai: { name: "Dubai Headquarters", address: "Business Bay - Dubai - United Arab Emirates", phone: "+971 50 224 0989" },
    india: { name: "India Branch", address: "Royapuram, Chennai, Tamil Nadu", phone: "+91 98402 75786" }
  };

  // FAQs states
  const [activeFaqIdx, setActiveFaqIdx] = useState(null);
  const contactFaqs = [
    {
      q: "How fast can we set up database mining adapters?",
      a: "For standard cloud database setups (like Salesforce or ServiceNow), read-only credential mapping takes under 15 minutes. Custom ERP setups (like on-premise SAP schemas) are deployed via VPC adapters in 3 to 5 business days."
    },
    {
      q: "Is there a developer sandbox for API testing?",
      a: "Yes. Once an Enterprise Trial is initiated, we provision a secure sandbox environment with fully generated mockup event logs, enabling developers to test API webhooks and REST integrations."
    },
    {
      q: "What data encryption keys do you support?",
      a: "All transaction logs are encrypted in transit via TLS 1.3 and at rest via AES-256. For Enterprise private VPCs, we support customer-managed KMS keys (AWS KMS / Azure Key Vault)."
    }
  ];

  return (
    <>
      <SEO
        title="Contact Enterprise Sales & Support - Book Consultation"
        description="Book a live process intelligence consultation, submit enterprise demo inquiries, locate global offices, and review technical support channels."
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-6 overflow-hidden bg-slate-50/50 text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-indigo/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-indigo uppercase tracking-wider font-outfit shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            Connect With Our Teams
          </span>

          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mt-3 leading-tight">
            Connect With Our <span className="text-gradient">Solutions Team</span>
          </h1>

          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Request an enterprise demo trial, book a live operations calendar slot, locate our offices, or query support resources.
          </p>
        </div>
      </section>

      {/* Forms & Schedulers Container */}
      <section className="pb-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Block: Demo Request Form */}
            <div className="lg:col-span-6 bg-slate-50/50 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md text-left">
              <div>
                <h3 className="text-xl font-bold font-outfit text-slate-900 mb-2">Request Enterprise Demo</h3>
                <p className="text-xs text-slate-500 mb-6 font-semibold">Fill out operational specifications to provision a trial sandbox.</p>

                <AnimatePresence mode="wait">
                  {isDemoSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/30 rounded-full flex items-center justify-center text-brand-emerald">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 font-outfit">Demo Inquiry Registered</h4>
                      <p className="text-xs text-slate-500 max-w-sm font-semibold leading-relaxed">
                        Thank you, {demoForm.name}. A solutions engineer will contact you shortly to configure custom database adapters.
                      </p>
                      <button
                        onClick={() => setIsDemoSuccess(false)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-700 text-xs font-bold transition-all cursor-pointer"
                      >
                        Reset Form
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleDemoSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={demoForm.name}
                            onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-brand-indigo"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Work Email</label>
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-brand-indigo"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Company Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your company name"
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-brand-indigo"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Industry</label>
                          <select
                            value={demoForm.industry}
                            onChange={(e) => setDemoForm({ ...demoForm, industry: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-indigo"
                          >
                            <option value="Banking">Banking</option>
                            <option value="Finance">Financial Services</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Logistics">Logistics</option>
                            <option value="Government">Government</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Employee Count</label>
                        <select
                          value={demoForm.employeeCount}
                          onChange={(e) => setDemoForm({ ...demoForm, employeeCount: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-indigo"
                        >
                          <option value="5-50">5 - 50 employees</option>
                          <option value="50-100">50 - 100 employees</option>
                          <option value="100-500">100 - 500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Message</label>
                        <textarea
                          rows="3"
                          required
                          placeholder="What process bottlenecks or transaction logs are you looking to optimize?"
                          value={demoForm.message}
                          onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs placeholder-slate-400 focus:outline-none focus:border-brand-indigo"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isDemoSubmitting}
                        className="w-full py-3 bg-gradient-primary hover:opacity-90 active:scale-95 transition-all text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none disabled:opacity-50"
                      >
                        {isDemoSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                        Submit Demo Request
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Block: Calendly Simulator */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md text-left">
              <div>
                <h3 className="text-xl font-bold font-outfit text-slate-900 mb-2">Book Video Consultation</h3>
                <p className="text-xs text-slate-500 mb-6 font-semibold">Choose a time slot to consult our operations architecture leads directly.</p>

                <AnimatePresence mode="wait">
                  {isBookingSuccess ? (
                    <motion.div
                      key="booked"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-brand-indigo/10 border border-brand-indigo/30 rounded-full flex items-center justify-center text-brand-indigo">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 font-outfit">Consultation Scheduled!</h4>
                      <p className="text-xs text-slate-500 max-w-sm font-semibold leading-relaxed">
                        Meeting confirmed for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>. A calendar link has been sent to <strong>{bookingEmail}</strong>.
                      </p>
                      <button
                        onClick={() => { setIsBookingSuccess(false); setBookingEmail(''); setSelectedTime(''); }}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-700 text-xs font-bold transition-all cursor-pointer"
                      >
                        Book Another Slot
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBookMeeting} className="space-y-4">
                      {/* Date picker */}
                      <div className="space-y-2">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">1. Select Date</span>
                        <div className="flex gap-1.5 flex-wrap">
                          {dates.map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setSelectedDate(d)}
                              className={`px-3 py-1.5 border text-[10px] font-bold rounded-lg transition-all cursor-pointer focus:outline-none ${selectedDate === d
                                ? 'bg-brand-indigo text-white border-brand-indigo shadow-sm'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500'
                                }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time picker */}
                      <div className="space-y-2">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">2. Select Time (EST)</span>
                        <div className="grid grid-cols-2 gap-2">
                          {times.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`p-2 border text-[10px] font-bold rounded-lg transition-all cursor-pointer focus:outline-none flex items-center justify-center gap-1.5 ${selectedTime === t
                                ? 'bg-brand-emerald text-white border-brand-emerald shadow-sm'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500'
                                }`}
                            >
                              <Clock className="w-3.5 h-3.5" />
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Email booking */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">3. Confirmation Email</label>
                        <input
                          type="email"
                          required
                          placeholder="your-email@company.com"
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 focus:bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-indigo"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isBookingSubmitting || !selectedTime}
                        className="w-full py-3 bg-gradient-primary hover:opacity-90 active:scale-95 disabled:opacity-40 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer focus:outline-none"
                      >
                        {isBookingSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Calendar className="w-3.5 h-3.5" />}
                        Confirm Consultation Booking
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support & Consultation Channels Info grid */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-200/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sales Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3.5 shadow-sm text-left">
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-brand-indigo w-fit"><Users className="w-5 h-5" /></div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-outfit">Contact Sales</h4>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">Questions about custom deployment volumes, trials, and contract licensing options.</p>
              </div>
              <a href="mailto:sales@tasree3.com" className="text-xs font-bold text-brand-indigo hover:underline block pt-2 border-t border-slate-100">
                sales@tasree3.com &rarr;
              </a>
            </div>

            {/* Technical Support Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3.5 shadow-sm text-left">
              <div className="p-2.5 bg-purple-50 border border-purple-100 rounded-xl text-brand-purple w-fit"><Laptop className="w-5 h-5" /></div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-outfit">Technical Support</h4>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">Troubleshooting database adapters, log mapping schemas, or custom webhook integrations.</p>
              </div>
              <a href="mailto:support@tasree3.com" className="text-xs font-bold text-brand-purple hover:underline block pt-2 border-t border-slate-100">
                support@tasree3.com &rarr;
              </a>
            </div>

            {/* Enterprise Consultation Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3.5 shadow-sm text-left">
              <div className="p-2.5 bg-emerald-50 border border-emerald-100 rounded-xl text-brand-emerald w-fit"><ShieldCheck className="w-5 h-5" /></div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-outfit">Enterprise Consultation</h4>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">Establish continuous compliance guidelines, SOC2 boundaries, or private VPC plans.</p>
              </div>
              <a href="mailto:compliance@tasree3.com" className="text-xs font-bold text-brand-emerald hover:underline block pt-2 border-t border-slate-100">
                compliance@tasree3.com &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations & Interactive SVG Coordinate Map */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Locations listing */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo font-outfit">Global Presence</span>
                <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900">Office Locations</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">Click on any office location below to highlight its map coordinates.</p>
              </div>

              <div className="space-y-2.5">
                {Object.keys(officeLocations).map((locId) => (
                  <button
                    key={locId}
                    onClick={() => setActiveLocationId(locId)}
                    className={`w-full p-4 border rounded-2xl text-left transition-all focus:outline-none cursor-pointer flex gap-3 items-start ${activeLocationId === locId
                      ? 'bg-slate-50 border-brand-indigo shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                  >
                    <div className={`p-1.5 rounded-lg border mt-0.5 ${activeLocationId === locId ? 'bg-indigo-50 border-indigo-100 text-brand-indigo' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-outfit">{officeLocations[locId].name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-0.5">{officeLocations[locId].address}</p>
                      <span className="text-[9px] text-slate-400 font-bold block mt-1 font-outfit">{officeLocations[locId].phone}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Map Canvas representation */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between aspect-[16/10] relative overflow-hidden">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-indigo" /> Global Coordinate Planner Map
              </div>

              {/* SVG Map visualizer */}
              <div className="flex-grow flex items-center justify-center p-3 relative min-h-[220px]">
                <svg className="w-full max-w-[480px] h-auto opacity-70" viewBox="0 0 400 200" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(0,0,0,0.03)" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(0,0,0,0.03)" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(0,0,0,0.03)" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(0,0,0,0.03)" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(0,0,0,0.03)" />
                  <line x1="300" y1="0" x2="300" y2="200" stroke="rgba(0,0,0,0.03)" />

                  {/* Abstract landmasses in background */}
                  <g fill="rgba(99, 102, 241, 0.04)" filter="url(#mapBlur)">
                    <path d="M 30 50 C 50 30, 80 60, 90 90 C 100 120, 70 160, 50 170 C 30 180, 20 120, 30 50 Z" />
                    <path d="M 170 100 C 190 90, 220 100, 220 120 C 220 150, 200 180, 180 190 C 160 170, 155 130, 170 100 Z" />
                    <path d="M 180 50 C 230 30, 320 30, 360 60 C 380 90, 350 150, 330 160 C 310 130, 290 120, 270 130 C 250 140, 240 100, 230 90 C 210 80, 190 80, 180 50 Z" />
                    <path d="M 330 150 C 350 140, 370 150, 370 165 C 370 180, 340 180, 330 170 C 320 160, 320 155, 330 150 Z" />
                  </g>

                  {/* Dotted data flow connection arc between Dubai and India */}
                  <path
                    d="M 255 90 Q 270 95 285 115"
                    fill="none"
                    stroke="url(#arcGradient)"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    className="animate-dash"
                  />

                  {/* Dubai Headquarters Node */}
                  <circle cx="255" cy="90" r="4" fill={activeLocationId === 'dubai' ? '#6366F1' : '#CBD5E1'} stroke={activeLocationId === 'dubai' ? 'rgba(99,102,241,0.25)' : 'none'} strokeWidth="10" className="transition-all duration-300" />
                  <text x="255" y="80" fill="#475569" fontSize="6.5" fontWeight="bold" textAnchor="middle" className="font-outfit">Dubai HQ</text>

                  {/* India Branch Node */}
                  <circle cx="285" cy="115" r="4" fill={activeLocationId === 'india' ? '#6366F1' : '#CBD5E1'} stroke={activeLocationId === 'india' ? 'rgba(99,102,241,0.25)' : 'none'} strokeWidth="10" className="transition-all duration-300" />
                  <text x="285" y="105" fill="#475569" fontSize="6.5" fontWeight="bold" textAnchor="middle" className="font-outfit">India Branch</text>

                  <defs>
                    <linearGradient id="arcGradient" x1="255" y1="90" x2="285" y2="115">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <filter id="mapBlur" x="-10%" y="-10%" width="120%" height="120%">
                      <feGaussianBlur stdDeviation="8" />
                    </filter>
                  </defs>
                </svg>

                {/* Info Tooltip overlay inside canvas map */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-slate-200/60 p-3 rounded-xl shadow-lg text-left max-w-xs z-10">
                  <span className="text-[8px] uppercase font-bold text-brand-indigo tracking-wider font-outfit block">Selected coordinate Details</span>
                  <h5 className="text-[10px] font-bold text-slate-800 font-outfit mt-0.5">{officeLocations[activeLocationId].name}</h5>
                  <p className="text-[9px] text-slate-500 font-semibold leading-relaxed mt-0.5">{officeLocations[activeLocationId].address}</p>
                </div>
              </div>

              <div className="text-[8px] text-slate-400 text-left font-semibold">
                Locations represent active physical engineering nodes and support lines.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact FAQ accordion */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo">Support Clarifications</span>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mt-2">Contact FAQs</h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => {
              const isExpanded = activeFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all text-left"
                >
                  <button
                    onClick={() => setActiveFaqIdx(isExpanded ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-indigo flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-slate-50 border-t border-slate-100"
                      >
                        <p className="p-5 text-[11px] text-slate-500 font-semibold leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
