import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <div className="relative max-w-[480px] mx-auto md:mx-0">
          <div className="bg-[#fffaf0] border border-[#c29431] p-3 shadow-[18px_20px_0_#eddfbd,0_28px_55px_rgba(53,16,12,0.15)] relative">
            <img src="/images/pandit-ji.jpg" alt="Pandit Raghunandan Sharma" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-8 -right-5 bg-[#641e17] text-[#f8ecd4] px-5 py-3 font-serif italic text-lg max-w-[176px] leading-tight">
              A prayer prepared with care
            </div>
          </div>
        </div>
        <div>
          <span className="text-[#9e7426] uppercase tracking-[0.17em] text-xs font-bold">{t('about_kicker')}</span>
          <h2 className="mt-3 font-serif text-5xl md:text-[5rem] text-[#641e17] leading-[0.9] tracking-tight">
            {t('about_title')}
          </h2>
          <p className="mt-6 text-[#5d4c42] text-[17px] leading-[1.65]">{t('about_p1')}</p>
          <p className="mt-4 text-[#5d4c42] text-[17px] leading-[1.65]">{t('about_p2')}</p>
          
          <div className="mt-8 flex items-center gap-4 border-l-2 border-[#dbad47] pl-4">
             <span className="text-2xl text-[#77675b]">🌺</span>
             <div>
               <strong className="block text-sm text-[#2e211b]">Hindi, English</strong>
               <span className="text-sm text-[#77675b]">{t('about_lang')}</span>
             </div>
          </div>
          
          <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#641e17] px-8 py-3.5 font-bold text-[#fffaf0] transition hover:-translate-y-0.5 hover:bg-[#45140f]">
            {t('about_btn')} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
