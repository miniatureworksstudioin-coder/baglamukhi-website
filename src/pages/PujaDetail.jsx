import { useParams, Link } from 'react-router-dom';
import { pujas } from '../pujas';
import { whatsappLink } from '../contact';

export default function PujaDetail() {
  const { slug } = useParams();
  const puja = pujas.find((p) => p.slug === slug);

  if (!puja) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbf7ee]">
        <h1 className="text-4xl font-serif text-[#641e17] mb-4">Puja Not Found</h1>
        <Link to="/pujas" className="text-[#167b4a] font-bold underline">Go back to all Pujas</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbf7ee] py-20 px-5">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl border border-[#e5d8c5] overflow-hidden">
        
        <div className="h-72 w-full relative">
          <img src={puja.image} alt={puja.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-8">
              <span className="bg-[#f0c25a] text-[#641e17] px-3 py-1 text-xs font-bold rounded-full mb-3 inline-block">
                Step {String(puja.id).padStart(2, '0')}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-white">{puja.hindiName}</h1>
              <h2 className="text-2xl font-serif text-[#f0c25a] mt-1">{puja.name}</h2>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <Link to="/pujas" className="text-sm font-bold text-[#9e7426] hover:underline mb-6 inline-block">
            ← Back to all Pujas
          </Link>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-[#641e17] mb-3 border-b border-[#e5d8c5] pb-2">About this Ritual</h3>
              <p className="text-[#5d4c42] text-lg leading-relaxed">{puja.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#641e17] mb-3 border-b border-[#e5d8c5] pb-2">Key Benefits</h3>
              <p className="text-[#5d4c42] text-lg leading-relaxed">{puja.benefits}</p>
            </div>

            <div className="bg-[#f8ecd4] p-6 rounded-xl border border-[#e6d5b3] flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-bold text-[#9e7426] uppercase tracking-wider">Approximate Duration</p>
                <p className="text-xl font-serif text-[#641e17]">{puja.duration}</p>
              </div>
              <a 
                href={whatsappLink(`I want to book the ${puja.name} at Nalkheda`)}
                target="_blank"
                rel="noreferrer"
                className="bg-[#167b4a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#11643e] transition shadow-lg text-lg"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
