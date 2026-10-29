import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export default function Temple() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fbf7ee]">
      
      {/* Hero Section */}
      <div className="bg-[#35100c] text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#f0c25a] mb-4">
          {t('temple_page_title')}
        </h1>
        <p className="text-lg md:text-xl text-[#e5d8c5] max-w-3xl mx-auto">
          {t('temple_page_subtitle')}
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-16 space-y-12">
        
        {/* Live Darshan CTA */}
        <div className="bg-[#f8ecd4] border-2 border-[#e6d5b3] rounded-xl p-6 text-center shadow-sm">
          <h2 className="text-2xl font-serif text-[#641e17] mb-2">Live Darshan</h2>
          <p className="text-[#5d4c42] mb-4">Experience the divine presence of Maa Baglamukhi from anywhere in the world.</p>
          <a 
            href="https://www.youtube.com/channel/UCp9MFSs8Vvmh-eyqCgtd6IA" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-[#167b4a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#11643e] transition shadow-lg"
          >
            Watch Live Darshan on YouTube ↗
          </a>
        </div>

        {/* Timings Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8">
          <h2 className="text-3xl font-serif text-[#641e17] mb-6 border-b border-[#e5d8c5] pb-2">{t('temple_timings_title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🌅</span>
              <div>
                <h3 className="font-bold text-[#641e17]">{t('temple_morning_aarti')}</h3>
                <p className="text-[#5d4c42]">6:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🌇</span>
              <div>
                <h3 className="font-bold text-[#641e17]">{t('temple_evening_aarti')}</h3>
                <p className="text-[#5d4c42]">7:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🛕</span>
              <div>
                <h3 className="font-bold text-[#641e17]">{t('temple_darshan_hours')}</h3>
                <p className="text-[#5d4c42]">6:00 AM to 9:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🔥</span>
              <div>
                <h3 className="font-bold text-[#641e17]">{t('temple_havan_time')}</h3>
                <p className="text-[#5d4c42]">{t('temple_havan_desc')}</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#9e7426] font-bold">{t('temple_navratri_note')}</p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4 border-b border-[#e5d8c5] pb-2">{t('temple_history_title')}</h2>
          <div className="space-y-4 text-[#5d4c42] text-lg leading-relaxed">
            <p>{t('temple_p1')}</p>
            <p>{t('temple_p2')}</p>
            <p>{t('temple_p3')}</p>
          </div>
        </div>

        {/* How to Reach Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4 border-b border-[#e5d8c5] pb-2">{t('temple_how_to_reach_title')}</h2>
          <div className="space-y-4 text-[#5d4c42] text-lg leading-relaxed">
            <p><strong>{t('temple_how_to_reach_title')}:</strong> Nalkheda is well-connected by road. Distances from major cities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ujjain:</strong> Approx. 100 km</li>
              <li><strong>Indore:</strong> Approx. 130 km</li>
              <li><strong>Bhopal:</strong> Approx. 200 km</li>
            </ul>
            <p><strong>By Train:</strong> The nearest railway stations are Ujjain Junction (100 km) and Shajapur (58 km).</p>
            <p><strong>By Air:</strong> The nearest airports are Devi Ahilya Bai Holkar Airport in Indore (156 km) and Raja Bhoj Airport in Bhopal (182 km).</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4">{t('temple_planning_puja')}</h2>
          <p className="text-[#5d4c42] mb-6">{t('temple_planning_desc')}</p>
          <Link to="/pujas" className="inline-block bg-[#641e17] text-white px-8 py-3 rounded-full font-bold hover:bg-[#45140f] transition shadow-lg text-lg">
            {t('temple_explore_pujas')}
          </Link>
        </div>

      </div>
    </div>
  );
}
