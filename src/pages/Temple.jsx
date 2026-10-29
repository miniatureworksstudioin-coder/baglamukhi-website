import { useLanguage } from '../LanguageContext';

export default function Temple() {
  const { t } = useLanguage();

  return (
    <section id="temple" className="py-24 px-5 bg-[#35100c] text-[#eadfc9] relative overflow-hidden">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_0.86fr] gap-16 items-center relative z-10">
        <div>
          <span className="text-[#e6bf5b] uppercase tracking-[0.17em] text-xs font-bold">
            {t('temple_kicker')}
          </span>
          <h2 className="mt-3 font-serif text-5xl md:text-[4.2rem] text-[#f0c957] leading-[0.98] tracking-tight max-w-[630px]">
            {t('temple_title')}
          </h2>
          <p className="mt-6 text-[#e3d4b8] text-[17px] leading-[1.65]">
            {t('temple_p1')}
          </p>
          
          {/* TRANSLATED WIKIPEDIA SEO FACTS */}
          <p className="mt-4 text-[#e3d4b8] text-[17px] leading-[1.65]">
            {t('temple_p3')}
          </p>
          
          <p className="mt-4 text-[#e3d4b8] text-[17px] leading-[1.65]">
            {t('temple_p2')}
          </p>
          
          <table className="mt-8 w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3 text-[17px]">{t('temple_time_1')}</td>
                <td className="text-right text-[#f2c65c] font-bold text-[17px]">5:00 AM</td>
              </tr>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3 text-[17px]">{t('temple_time_2')}</td>
                <td className="text-right text-[#f2c65c] font-bold text-[17px]">6:00 AM</td>
              </tr>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3 text-[17px]">{t('temple_time_3')}</td>
                <td className="text-right text-[#f2c65c] font-bold text-[17px]">7:00 PM (7:30 PM in summer)</td>
              </tr>
              <tr>
                <td className="py-3 text-[17px]">{t('temple_time_4')}</td>
                <td className="text-right text-[#f2c65c] font-bold text-[17px]">9:00 PM (9:30 PM in summer)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-[#c9b895]">
            {t('temple_timing_note')}
          </p>
        </div>
        
        <div className="bg-[#50190f] border border-[#bc8720] p-2.5 shadow-[0_28px_60px_rgba(0,0,0,0.25)]">
          <img src="/images/puja-3.jpg" alt="Baglamukhi Temple Nalkheda worship" className="w-full aspect-[4/3] object-cover" />
          <p className="mt-3 text-xs text-[#d8c9aa] uppercase tracking-[0.1em]">
            {t('temple_caption')}
          </p>
        </div>
      </div>
    </section>
  );
}
