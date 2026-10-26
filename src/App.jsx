import { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import NoticePopup from './components/NoticePopup'; // NEW IMPORT
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PujaList from './components/PujaList';
import Process from './components/Process';
import Temple from './components/Temple';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-[#fbf7ee] text-[#2e211b] font-sans antialiased relative">
        
        {/* NEW POPUP COMPONENT */}
        <NoticePopup />

        <Header />
        <main>
          <Hero />
          <About />
          <PujaList />
          <Process />
          <Temple />
          <Gallery />
          <Reviews />
          <FAQ />
          <BookingForm />
        </main>
        <Footer onAdminClick={() => setIsAdminOpen(true)} />
        <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </LanguageProvider>
  );
}
