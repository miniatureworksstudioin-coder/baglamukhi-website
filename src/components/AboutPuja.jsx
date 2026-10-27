import { useLanguage } from '../LanguageContext';

export default function AboutPuja() {
  const { t } = useLanguage();

  return (
    <section id="about-puja" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-[0.17em] text-xs font-bold">
            {t('about_puja_kicker')}
          </span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">
            {t('about_puja_title')}
          </h2>
          <p className="mt-4 text-[#6c5b4f] text-lg">
            {t('about_puja_desc')}
          </p>
        </div>

        <div className="space-y-8 text-[#5d4c42] text-[17px] leading-relaxed">
          <p>{t('about_puja_p1')}</p>
          
          <div className="bg-[#fffaf0] border border-[#ead9b2] p-6 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-[#641e17] mb-4">{t('about_puja_benefits_title')}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-[#e8ad2e] text-xl">⚖️</span>
                <span><strong>{t('about_puja_b1')}</strong> {t('about_puja_b1_desc')}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#e8ad2e] text-xl">🛡️</span>
                <span><strong>{t('about_puja_b2')}</strong> {t('about_puja_b2_desc')}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#e8ad2e] text-xl">💼</span>
                <span><strong>{t('about_puja_b3')}</strong> {t('about_puja_b3_desc')}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#e8ad2e] text-xl">🧠</span>
                <span><strong>{t('about_puja_b4')}</strong> {t('about_puja_b4_desc')}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#e8ad2e] text-xl">🏠</span>
                <span><strong>{t('about_puja_b5')}</strong> {t('about_puja_b5_desc')}</span>
              </li>
            </ul>
          </div>

          <p>{t('about_puja_p2')}</p>
        </div>
      </div>
    </section>
  );
}
