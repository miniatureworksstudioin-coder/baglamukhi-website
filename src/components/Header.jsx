import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, PHONE2_DISPLAY, PHONE2_TEL, WHATSAPP_URL } from '../contact';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // UPDATED NAV LINKS TO POINT TO NEW PAGES
  const NAV_LINKS = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/#about' },
    { label: t('nav_puja'), href: '/pujas' }, // Goes to new Pujas page
    { label: t('nav_temple'), href: '/temple' }, // Goes to new Temple page
    { label: t('nav_gallery'), href: '/#gallery' },
    { label: t('nav_reviews'), href: '/#reviews' },
    { label: t('nav_contact'), href: '/contact' }, // Goes to new Contact page
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2c0d09] text-[#f0dfbd] text-[12px] sm:text-[13px] font-medium">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 sm:flex-row sm:justify-between sm:px-5 sm:py-2">
          <p className="hidden md:block">{ADDRESS}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[#f3c758] whitespace-nowrap">
              Call: {PHONE_DISPLAY}
            </a>
            <span className="text-white/30">|</span>
            <a href={`tel:${PHONE2_TEL}`} className="hover:text-[#f3c758] whitespace-nowrap">
              Call: {PHONE2_DISPLAY}
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[#f3c758] whitespace-nowrap">
              WhatsApp
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="https://mabaglamukhi.org" target="_blank" rel="noreferrer" className="text-[#f3c758] whitespace-nowrap flex items-center gap-1 hover:text-[#f7cb66]">
              Live Darshan ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-[#e5d8c5] bg-[#fbf7ee]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
          
          {/* Logo goes to Home */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
            <img 
              src="/baglamukhi-logo.png?v=2" 
              alt="Shree Baglamukhi Nalkheda Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full object-cover shadow-[0_0_0_3px_#fbf7ee,0_0_0_4px_#d3a846]" 
            />

            <span className="leading-tight flex flex-col justify-center">
              <strong className="block font-serif text-[1.1rem] sm:text-[1.3rem] font-bold text-[#641e17] leading-tight">
                Shree Baglamukhi Nalkheda
              </strong>
              <span className="text-[15px] sm:text-[17px] font-serif italic text-[#35100c] block mt-0.5 tracking-wide">
                Pandit Raghunandan Sharma
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="rounded-md px-3 py-2 text-[15px] font-semibold text-[#46342d] transition-colors hover:bg-[#f2e8d5] hover:text-[#641e17]">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* LANGUAGE TOGGLE BUTTON */}
            <button onClick={toggleLanguage} className="hidden rounded-full border border-[#baa780] px-3 py-1.5 text-sm font-bold text-[#641e17] sm:block hover:bg-[#f4e8cb]">
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            
            {/* Book Puja Button goes to Contact page */}
            <Link to="/contact" className="hidden rounded-full bg-[#efbd48] px-5 py-2.5 font-bold text-[#35100c] shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66] sm:inline-flex">
              {t('btn_book')}
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#baa780] text-[#641e17] lg:hidden bg-white/50">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-[#e5d8c5] bg-[#fbf7ee] px-5 py-4 lg:hidden shadow-lg absolute w-full">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-[#46342d] hover:bg-[#f2e8d5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
