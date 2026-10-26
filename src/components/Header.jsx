import { useState } from 'react';
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../contact';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Guruji', href: '#about' },
  { label: 'Puja Sequence', href: '#services' },
  { label: 'Temple', href: '#temple' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Cleaned up for Mobile */}
      <div className="bg-[#2c0d09] text-[#f0dfbd] text-[12px] sm:text-[13px] font-medium">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 sm:flex-row sm:justify-between sm:px-5 sm:py-2">
          
          {/* Address (Hidden on very small screens to save space) */}
          <p className="hidden md:block">{ADDRESS}</p>
          
          {/* Contact Links (Flex-wrap prevents squishing) */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[#f3c758] whitespace-nowrap">
              Call: {PHONE_DISPLAY}
            </a>
            
            <span className="hidden sm:inline text-white/30">|</span>
            
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[#f3c758] whitespace-nowrap">
              WhatsApp
            </a>
            
            <span className="hidden sm:inline text-white/30">|</span>
            
            <span className="whitespace-nowrap">Open daily, 6 am to 9 pm</span>
            
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
          
          {/* Brand (Slightly smaller on mobile) */}
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
            <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full bg-[#f0c25a] font-hindi text-xl sm:text-2xl text-[#4b160f] shadow-[0_0_0_4px_#fbf7ee,0_0_0_5px_#d3a846]">
              ॐ
            </span>
            <span className="leading-tight">
              <strong className="block font-serif text-[1.1rem] sm:text-xl font-bold text-[#641e17] leading-tight">
                Shree Baglamukhi Nalkheda
              </strong>
              <small className="text-[11px] sm:text-xs text-[#77675b] block mt-0.5">
                Pandit Raghunandan Sharma
              </small>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-[15px] font-semibold text-[#46342d] transition-colors hover:bg-[#f2e8d5] hover:text-[#641e17]">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="hidden rounded-full border border-[#baa780] px-3 py-1.5 text-sm font-bold text-[#641e17] sm:block hover:bg-[#f4e8cb]">
              हिन्दी
            </button>
            <a href="#contact" className="hidden rounded-full bg-[#efbd48] px-5 py-2.5 font-bold text-[#35100c] shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66] sm:inline-flex">
              Book Puja
            </a>

            {/* Mobile menu button */}
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
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-[#46342d] hover:bg-[#f2e8d5]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#e5d8c5] flex flex-col gap-3">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="flex justify-center rounded-full bg-[#efbd48] px-5 py-3 font-bold text-[#35100c]">
                Book Puja
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
