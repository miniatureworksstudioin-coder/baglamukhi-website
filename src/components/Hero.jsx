import { WHATSAPP_URL } from '../contact';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-deep px-5 py-24 text-center">
      <img src="/images/hero-bg.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/80 via-deep/70 to-deep/90" />

      <div className="mx-auto max-w-4xl">
        <p className="font-hindi text-lg tracking-wide text-saffron sm:text-xl">
          ॥ जय माँ बगलामुखी ॥
        </p>

        <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-[#fff9ec] sm:text-6xl lg:text-7xl">
          Baglamukhi Puja,{' '}
          <span className="italic text-saffron">Anushthan &amp; Havan</span> at Nalkheda
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-saffron px-8 py-3 font-bold text-deep shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66]">
            Book a Puja
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-leaf px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-90">
            WhatsApp Guruji
          </a>
        </div>
      </div>
    </section>
  );
}
