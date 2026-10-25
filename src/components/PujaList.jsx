import { pujas } from '../pujas';
import { whatsappLink } from '../contact';

function PujaCard({ puja, onDetails }) {
  const step = String(puja.id).padStart(2, '0');

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[#e7dac6] bg-[#fffaf1] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={puja.image} alt={`${puja.name} puja`} loading="lazy" className="h-56 w-full bg-[#efe3cc] object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-deep/90 px-3 py-1 text-xs font-bold tracking-[0.17em] text-saffron">
          STEP {step}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-hindi text-2xl leading-snug text-maroon">{puja.hindi}</h3>
        <p className="mt-1 font-serif text-xl font-semibold text-ink">{puja.name}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75">{puja.description}</p>

        <div className="mt-5 flex gap-3">
          <button type="button" onClick={() => onDetails?.(puja)} className="flex-1 rounded-full bg-maroon px-4 py-2.5 font-bold text-cream transition hover:bg-[#45140f]">
            Details
          </button>
          <a href={whatsappLink(`Namaste, I want to know about ${puja.name}.`)} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-leaf px-4 py-2.5 text-center font-bold text-leaf transition hover:bg-leaf hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PujaList({ onDetails }) {
  return (
    <section id="services" className="scroll-mt-24 bg-cream px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-maroon sm:text-5xl">Puja Sequence</h2>
          <p className="mt-3 text-lg text-ink/70">The twelve steps of the ceremony. Select the one you need.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pujas.map((puja) => (
            <PujaCard key={puja.id} puja={puja} onDetails={onDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}
