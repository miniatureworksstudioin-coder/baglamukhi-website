import { useLanguage } from '../LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fbf7ee] py-20 px-5">
      <div className="mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-xl shadow-md border border-[#e5d8c5]">
        <h1 className="text-4xl font-serif font-bold text-[#641e17] mb-6">{t('privacy_title')}</h1>
        
        <div className="text-[#5d4c42] space-y-4 text-[16px] leading-relaxed">
          <p>{t('privacy_p1')}</p>
          
          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">{t('privacy_h1')}</h2>
          <p>{t('privacy_p2')}</p>
          
          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">{t('privacy_h2')}</h2>
          <p>{t('privacy_p3')}</p>

          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">{t('privacy_h3')}</h2>
          <p>{t('privacy_p4')}</p>

          <h2 className="text-2xl font-serif text-[#641e17] mt-8 mb-2">{t('privacy_h4')}</h2>
          <p>{t('privacy_p5')}</p>
          
          <p className="mt-8 text-sm text-gray-500">{t('terms_last_updated')}</p>
        </div>
      </div>
    </div>
  );
}
