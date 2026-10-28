import PujaList from '../components/PujaList';

export default function Pujas() {
  return (
    <div className="min-h-screen bg-[#fbf7ee] py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-maroon">Our Puja Services</h1>
        <p className="mt-4 text-ink">Explore the sacred rituals performed at Nalkheda.</p>
      </div>
      <PujaList /> 
    </div>
  );
}
