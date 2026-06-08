import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoRequestModal from './components/DemoRequestModal';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import ProcessMining from './pages/ProcessMining';
import Governance from './pages/Governance';
import AIFeatures from './pages/AIFeatures';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import WhyTasree3 from './pages/WhyTasree3';
import ProcessManagement from './pages/ProcessManagement';

// Scroll Restoration Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-slate-600 relative overflow-x-hidden selection:bg-brand-purple selection:text-white">
        {/* Navbar */}
        <Navbar onRequestDemo={openDemoModal} />

        {/* Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onRequestDemo={openDemoModal} />} />
            <Route path="/features" element={<Features onRequestDemo={openDemoModal} />} />
            <Route path="/process-mining" element={<ProcessMining onRequestDemo={openDemoModal} />} />
            <Route path="/governance" element={<Governance onRequestDemo={openDemoModal} />} />
            <Route path="/ai-features" element={<AIFeatures onRequestDemo={openDemoModal} />} />
            <Route path="/solutions" element={<Solutions onRequestDemo={openDemoModal} />} />
            <Route path="/pricing" element={<Pricing onRequestDemo={openDemoModal} />} />
            <Route path="/about" element={<About onRequestDemo={openDemoModal} />} />
            <Route path="/why-tasree3" element={<WhyTasree3 onRequestDemo={openDemoModal} />} />
            <Route path="/process-management" element={<ProcessManagement onRequestDemo={openDemoModal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage onRequestDemo={openDemoModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Demo Request Modal */}
        <DemoRequestModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      </div>
    </Router>
  );
}
