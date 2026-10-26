import { WHATSAPP_URL } from '../contact';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section id="top" className="relative flex min-h-[790px] items-center overflow-hidden bg-[#35100c] text-white">
        <img src="/images/hero-bg.jpg" alt="Havan Background" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#230805]/95 via-[#2b0a06]/80 to-[#2e0d07]/30"></div>
        <svg className="absolute right-[-70px] top-1/2 w-[min(58vw,740px)] -translate-y-1/2 text-[#efd084] opacity-20" viewBox="-100 -100 200 200" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="0.48">
            <circle r="98" /><circle r="88" /><circle r="55" /><circle r="22" />
            {Array.from({ length: 24 }).map((_, i) => (<ellipse key={i} rx="7" ry="27" cy="-65" transform={`rotate(${i * 15})`} />))}
            {Array.from({ length: 12 }).map((_, i) => (<ellipse key={`inner-${i}`} rx="5" ry="18" cy="-38" transform={`rotate(${i * 30 + 15})`} />))}
          </g>
        </svg>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24">
          <div className="max-w-[710px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#efd0848a] bg-white/10 px-4 py-1.5 text-sm tracking-wide text-[#f4d788]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#efbd48]"></span>
              {t('hero_kicker')}
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.88] tracking-tight text-[#fff9ec] sm:text-7xl lg:text-8xl">
              {t('hero_title_1')} <span className="block italic text-[#f2c353]">{t('hero_title_2')}</span> {t('hero_title_3')}
            </h1>
            <p className="mt-6 max-w-[59ch] text-lg text-[#f0e4d0]">{t('hero_desc')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-[#efbd48] px-8 py-3 font-bold text-[#35100c] shadow-[0_8px_24px_rgba(208,153,43,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7cb66]">
                {t('hero_btn_book')} ↓
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-[#167b4a] px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#11643e]">
                {t('hero_btn_wa')}
              </a>
              <a href="tel:+919174137815" className="inline-flex min-h-[49px] items-center justify-center rounded-full border border-[#fff7e399] bg-white/10 px-8 py-3 font-bold text-[#fff6e4] transition hover:bg-[#fff6e4] hover:text-[#35100c]">
                {t('hero_btn_call')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-12 mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e7be575c] bg-[#35100c] shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-[#f1daad2b] p-6 lg:border-b-0 lg:border-r">
            <strong className="block font-serif text-2xl text-[#f2c45c]">{t('hero_strip_1')}</strong>
            <span className="mt-1 block text-sm text-[#d9c9ae]">{t('hero_strip_1_sub')}</span>
          </div>
          <div className="border-b border-[#f1daad2b] p-6 lg:border-b-0 lg:border-r">
            <strong className="block font-serif text-2xl text-[#f2c45c]">{t('hero_strip_2')}</strong>
            <span className="mt-1 block text-sm text-[#d9c9ae]">{t('hero_strip_2_sub')}</span>
          </div>
          <div className="border-b border-[#f1daad2b] p-6 sm:border-b-0 sm:border-r">
            <strong className="block font-serif text-2xl text-[#f2c45c]">{t('hero_strip_3')}</strong>
            <span className="mt-1 block text-sm text-[#d9c9ae]">{t('hero_strip_3_sub')}</span>
          </div>
          <div className="p-6">
            <strong className="block font-serif text-2xl text-[#f2c45c]">+91 91741 37815</strong>
            <span className="mt-1 block text-sm text-[#d9c9ae]">{t('hero_strip_4_sub')}</span>
          </div>
        </div>
      </div>
    </>
  );
}
