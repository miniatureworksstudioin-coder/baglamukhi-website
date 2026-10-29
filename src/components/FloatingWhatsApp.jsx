import { WHATSAPP_URL } from '../contact';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg 
        viewBox="0 0 32 32" 
        className="w-8 h-8 fill-current" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2a13 13 0 0 0-11 20l-2 5a1 1 0 0 0 1.2 1.2l5.2-2A13 13 0 1 0 16 2zm0 24a11 11 0 0 1-5.6-1.5l-.4-.2-4 1.5 1.5-4-.3-.4A11 11 0 1 1 16 26zm6.3-8.6c-.3-.2-1.8-.9-2.1-1s-.5-.1-.7.2-.8 1-.9 1.2-.4.3-.7.1A9.2 9.2 0 0 1 13.2 14c-.5-.5-1-1.2-1.1-1.5s0-.5.2-.7.6-.7.8-1 .3-.4.4-.7 0-.5-.1-.6-.7-1.7-1-2.3c-.2-.5-.5-.4-.7-.4h-.6A1.9 1.9 0 0 0 9.7 8a3 3 0 0 0-1 2.2c0 1.4.7 2.8 1.9 4A13 13 0 0 0 21 22.6c1.2.4 2.3.4 3.1-.2s1.2-1.5 1.2-2.1-.2-.8-.4-.9z"/>
      </svg>
    </a>
  );
}
