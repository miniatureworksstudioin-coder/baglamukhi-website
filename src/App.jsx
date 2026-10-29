import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import NoticePopup from './components/NoticePopup';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Pujas from './pages/Pujas';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Admin from './pages/Admin'; 

export default function App() {
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
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/admin" element={<Admin />} /> 
          </Routes>
        </main>
        <Footer />  {/* <--- THIS IS THE ONLY PLACE IT SHOULD BE */}
        <FloatingWhatsApp /> 
      </div>
    </LanguageProvider>
  );
}
