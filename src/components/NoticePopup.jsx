import { useState, useEffect } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../contact';

export default function NoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('has_seen_notice');
    if (!hasSeenNotice) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('has_seen_notice', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#4a1610] to-[#2b0c08] border-2 border-[#e8ad2e]/40 rounded-2xl shadow-[0_20px_60px_rgba(232,173,46,0.15)] overflow-hidden p-6 sm:p-10 text-center animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#e8ad2e]/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center transition-all"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Shield Icon */}
        <div className="mx-auto w-14 h-14 bg-gradient-to-b from-[#e8ad2e]/20 to-transparent border border-[#e8ad2e]/50 rounded-full flex items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e8ad2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* Titles */}
        <h2 className="text-[#f2c45c] font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          Important Notice
        </h2>
        <p className="text-[#d8c7a6] text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-2 mb-6">
          Maa Baglamukhi Siddha Peeth, Nalkheda Dham
        </p>

        {/* Body Text Box (Cream background for contrast) */}
        <div className="bg-[#fffaf0] border border-[#e4d2af] rounded-xl p-5 mb-6 text-left shadow-inner">
          <p className="text-[#4a3b35] text-sm leading-relaxed font-medium">
            "Beware of unauthorized third-party mobile apps, brokers, or intermediaries claiming to offer rituals under our name. For an authentic Vedic Havan and Gotra-based Sankalp conducted directly from the sanctum premises of Maa Baglamukhi Mandir Nalkheda, connect exclusively through our official channels."
          </p>
        </div>

        {/* Verified Badge */}
        <div className="inline-flex items-center gap-2 border border-[#e8ad2e]/60 bg-[#e8ad2e]/10 text-[#f2c45c] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="text-sm">🛡️</span> Verified Priest Consultation & Video Proof
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#167b4a] hover:bg-[#11643e] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Consult Pandit Ji on WhatsApp
          </a>
          
          <a 
            href={`tel:${PHONE_TEL}`}
            className="w-full bg-[#641e17] hover:bg-[#45140f] text-[#f2c45c] border border-[#641e17] hover:border-[#f2c45c]/50 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Directly: {PHONE_DISPLAY}
          </a>
        </div>

        {/* Footer Text */}
        <button 
          onClick={handleClose} 
          className="mt-6 text-xs text-gray-400 hover:text-[#f2c45c] tracking-[0.15em] uppercase transition-colors"
        >
          I Understand • Continue to Website →
        </button>
      </div>
    </div>
  );
}
