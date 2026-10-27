// src/components/AboutPuja.jsx
import { useLanguage } from '../LanguageContext';

export default function AboutPuja() {
  const { t } = useLanguage();

  return (
    <section id="about-puja" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-[0.17em] text-xs font-bold">
            The Divine Grace of Maa Baglamukhi
          </span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">
            Puja & Benefits
          </h2>
          <p className="mt-4 text-[#6c5b4f] text-lg">
            Discover the spiritual significance and life-changing benefits of performing this sacred ritual at the Siddha Peeth of Nalkheda.
          </p>
        </div>

        <div className="space-y-8 text-[#5d4c42] text-[17px] leading-relaxed">
          <p>
            Maa Baglamukhi, the eighth of the ten Mahavidyas, is revered as the Goddess of Victory and Protection. Known as **Pitambara** (the one who loves yellow), her worship is considered one of the most powerful spiritual practices for overcoming obstacles, defeating negative forces, and attaining success in life.
          </p>
          
          <div className="bg-[#fffaf0] border border-[#ead9b2] p-6 rounded-lg">
            <h3 className="font-serif text-2xl text-[#641e17] mb-4">Key Benefits of the Puja</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#e8ad2e] text-xl">⚖️</span>
                <span><strong>Victory in Legal Matters:</strong> Divine intervention in court cases, helping devotees overcome false allegations and achieve justice.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#e8ad2e] text-xl">🛡️</span>
                <span><strong>Protection from Negativity:</strong> Creates a powerful spiritual shield (Raksha Kavach) against hidden enemies, black magic, and the evil eye.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#e8ad2e] text-xl">💼</span>
                <span><strong>Success in Career & Business:</strong> Removes professional obstacles and helps devotees win competitions and achieve leadership positions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#e8ad2e] text-xl">🧠</span>
                <span><strong>Mental Peace & Clarity:</strong> Calms the mind, reduces stress, and removes fear and confusion for better decision-making.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#e8ad2e] text-xl">🏠</span>
                <span><strong>Harmony & Prosperity:</strong> Brings stability, wealth, and peace to the family and home.</span>
              </li>
            </ul>
          </div>

          <p>
            The **Maa Baglamukhi Mandir in Nalkheda** holds a unique place in Hindu mythology. It is believed that during the Mahabharata era, **Yudhishthira** performed a special puja here with yellow offerings to seek victory, and the Pandavas were blessed with success. Because the idol at Nalkheda is **Swayambhu** (self-manifested) and the temple is considered a *Siddha Peeth*, rituals performed here are believed to be especially powerful.
          </p>
        </div>
      </div>
    </section>
  );
}
