import { useState } from 'react';
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from '../contact'; // Fixed path

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
      {/* Top bar - Deep brown */}
      <div className="bg-[#2c0d09] text-[#f0dfbd] text-[13px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-5 py-2 sm:flex-row">
          <p>Baglamukhi Mandir, Nalkheda, Agar Malwa (M.P.)</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[#f3c758]">Call: {PHONE_DISPLAY}</a>
            <span>|</span>
            <a href="#" className="hover:text-[#f3c758]">WhatsApp</a>
            <span>|</span>
            <span>Open daily, 6 am to 9 pm</span>
            <span>|</span>
            <a href="https://mabaglamukhi.org" target="_blank" rel="noreferrer" className="text-[#f3c758]">Live Darshan ↗</a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header className="sticky top-0 z-50 border-b border-[#e5d8c5] bg-[#fbf7ee]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f0c25a] font-hindi text-2xl text-[#4b160f] shadow-[0_0_0_4px_#fbf7ee,0_0_0_5px_#d3a846]">
              ॐ
            </span>
            <span className="leading-tight">
              <strong className="block font-serif text-xl font-bold text-[#641e17]">Shree Baglamukhi Nalkheda</strong>
              <small className="text-xs text-[#77675b]">Pandit Raghunandan Sharma</small>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-[15px] font-semibold text-[#46342d] transition-colors hover:bg-[#f2e8d5] hover:text-[#641e17]">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[#baa780] px-3 py-1.5 text-sm font-bold text-[#641e17] sm:block hover:bg-[#f4e8cb]">
              हिन्दी
            </button>
            <a href="#contact" className="hidden rounded-full bg-[#efbd48] px-5 py-2.5 font-bold text-[#35100c] shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66] sm:inline-flex">
              Book Puja
            </a>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#baa780] text-[#641e17] lg:hidden">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="border-t border-[#e5d8c5] bg-[#fbf7ee] px-5 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-[#46342d] hover:bg-[#f2e8d5]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
