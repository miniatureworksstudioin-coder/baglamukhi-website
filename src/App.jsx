import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import NoticePopup from './components/NoticePopup';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Pujas from './pages/Pujas';
import Contact from './pages/Contact';
import Terms from './pages/Terms';         {/* <-- ADDED */}
import Privacy from './pages/Privacy';     {/* <-- ADDED */}

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-[#fbf7ee] text-[#2e211b] font-sans antialiased relative">
        <NoticePopup />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pujas" element={<Pujas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />      {/* <-- ADDED */}
            <Route path="/privacy" element={<Privacy />} />  {/* <-- ADDED */}
          </Routes>
        </main>
        <Footer onAdminClick={() => setIsAdminOpen(true)} />
        <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
        
        {/* FLOATING BUTTON */}
        <FloatingWhatsApp /> 
        
      </div>
    </LanguageProvider>
  );
}
