import { PHONE_DISPLAY, PHONE_TEL, PHONE2_DISPLAY, PHONE2_TEL } from '../contact';

export default function Footer({ onAdminClick }) {
  return (
    <footer className="bg-[#2b0c08] text-[#d8c7a6] py-14 px-5">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 border-b border-[#fff3d72e] pb-10">
        <div>
          <h2 className="text-2xl font-serif text-[#efc75d]">Shree Baglamukhi Nalkheda</h2>
          <p className="mt-4 text-sm">Puja, havan and anushthan at the Maa Baglamukhi Mandir, Nalkheda, with Pandit Raghunandan Sharma.</p>
        </div>
        <div>
          <h3 className="text-xl font-serif text-[#efc75d]">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#f0c75c]">About Guruji</a></li>
            <li><a href="#services" className="hover:text-[#f0c75c]">Puja Sequence</a></li>
            <li><a href="#temple" className="hover:text-[#f0c75c]">Temple</a></li>
            <li><a href="#faq" className="hover:text-[#f0c75c]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-serif text-[#efc75d]">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-[#f0c75c]">{PHONE_DISPLAY}</a></li>
            <li><a href={`tel:${PHONE2_TEL}`} className="hover:text-[#f0c75c]">{PHONE2_DISPLAY}</a></li>
            <li><a href="mailto:shreebaglamukhinalkheda@gmail.com" className="hover:text-[#f0c75c]">shreebaglamukhinalkheda@gmail.com</a></li>
            <li><a href="https://wa.me/919174137815" target="_blank" rel="noreferrer" className="hover:text-[#f0c75c]">WhatsApp</a></li>
            <li>Nalkheda, Agar Malwa, M.P.</li>
          </ul>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl mt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-[#b8a786]">
        <p>© 2026 Shree Baglamukhi Nalkheda. All rights reserved.</p>
        <p className="text-center md:text-left flex-1">Beware of third-party apps or brokers using our name.</p>
        <button onClick={onAdminClick} className="hover:text-[#f0c75c] underline decoration-[#f0c75c]/30 underline-offset-4 transition-colors">
          Admin Sign-in
        </button>
      </div>

      {/* NEW: Designer Credit Section */}
      <div className="mx-auto max-w-7xl mt-6 text-center text-xs text-[#b8a786]">
        Website designed by Aakash |{' '}
        <a 
          href="https://miniatureworksstudio.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline decoration-[#f0c75c]/30 underline-offset-4 hover:text-[#f0c75c] transition-colors"
        >
          miniatureworksstudio.com
        </a>
      </div>

    </footer>
  );
}
