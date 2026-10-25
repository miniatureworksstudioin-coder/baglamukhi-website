import { useState } from 'react';
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from '../contact';

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
      <div className="bg-deep text-[13px] text-[#f0dfbd]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-5 py-2 sm:flex-row">
          <p>{ADDRESS}</p>
          <a href={`tel:${PHONE_TEL}`} className="font-semibold transition-colors hover:text-saffron">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e5d8c5] bg-cream/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron font-hindi text-2xl text-deep shadow-md">
              ॐ
            </span>
            <span className="leading-tight">
              <strong className="block font-serif text-xl font-semibold text-maroon">
                Shree Baglamukhi Nalkheda
              </strong>
              <small className="text-xs text-ink/70">Pandit Raghunandan Sharma</small>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[15px] font-medium text-ink transition-colors hover:text-maroon">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-saffron px-5 py-2.5 font-bold text-deep shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66] sm:inline-flex">
              Book Puja
            </a>

            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle menu" className="grid h-11 w-11 place-items-center rounded-full border border-[#dfcfb6] text-maroon lg:hidden">
              <span className="text-xl leading-none">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-[#e5d8c5] bg-cream px-5 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-saffron/15 hover:text-maroon">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 flex justify-center rounded-full bg-saffron px-5 py-3 font-bold text-deep">
              Book Puja
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
