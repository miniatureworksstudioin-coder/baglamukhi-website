import { Link } from 'react-router-dom';
import { pujas } from '../pujas';
import { whatsappLink } from '../contact';
import { useLanguage } from '../LanguageContext'; // <-- ADDED THIS

function PujaCard({ puja, language }) {
  const step = String(puja.id).padStart(2, '0');

  // HELPER: Picks the correct script based on the selected language
  const getScriptName = () => {
    if (language === 'gu') return puja.hindi_gu || puja.hindi;
    if (language === 'mr') return puja.hindi_mr || puja.hindi;
    return puja.hindi; // Default to Hindi
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[#e7dac6] bg-[#fffaf1] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img 
          src={puja.image} 
          alt={`${puja.name} puja`} 
          loading="lazy" 
          className="h-56 w-full bg-[#efe3cc] object-cover" 
        />
        <span className="absolute left-3 top-3 rounded-full bg-deep/90 px-3 py-1 text-xs font-bold tracking-[0.17em] text-saffron">
          STEP {step}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* WE USE THE HELPER FUNCTION HERE */}
        <h3 className="font-hindi text-2xl leading-snug text-maroon">{getScriptName()}</h3>
        <p className="mt-1 font-serif text-xl font-semibold text-ink">{puja.name}</p>
        
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75">
          {puja.shortDesc}
        </p>

        <div className="mt-5 flex gap-3">
          <Link 
            to={`/pujas/${puja.slug}`} 
            className="flex-1 rounded-full bg-maroon px-4 py-2.5 text-center font-bold text-cream transition hover:bg-[#45140f]"
          >
            Details
          </Link>
          
          <a 
            href={whatsappLink(`Namaste, I want to know about ${puja.name}.`)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 rounded-full border border-leaf px-4 py-2.5 text-center font-bold text-leaf transition hover:bg-leaf hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PujaList() {
  const { language } = useLanguage(); // <-- GET THE CURRENT LANGUAGE

  return (
    <section id="services" className="scroll-mt-24 bg-cream px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-maroon sm:text-5xl">Puja Sequence</h2>
          <p className="mt-3 text-lg text-ink/70">The twelve steps of the ceremony. Select the one you need.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pujas.map((puja) => (
            // PASS THE LANGUAGE TO THE CARD
            <PujaCard key={puja.id} puja={puja} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
