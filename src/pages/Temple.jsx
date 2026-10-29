import { Link } from 'react-router-dom';

export default function Temple() {
  return (
    <div className="min-h-screen bg-[#fbf7ee]">
      
      {/* Hero Section */}
      <div className="bg-[#35100c] text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#f0c25a] mb-4">
          Maa Baglamukhi Mandir, Nalkheda
        </h1>
        <p className="text-lg md:text-xl text-[#e5d8c5] max-w-3xl mx-auto">
          A Sacred Shakti Peeth on the banks of the Lakhundar River in Agar Malwa, Madhya Pradesh.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-16">
        
        {/* Timings Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8 mb-12">
          <h2 className="text-3xl font-serif text-[#641e17] mb-6 border-b border-[#e5d8c5] pb-2">Darshan & Aarti Timings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🌅</span>
              <div>
                <h3 className="font-bold text-[#641e17]">Morning Aarti (Mangala Aarti)</h3>
                <p className="text-[#5d4c42]">6:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🌇</span>
              <div>
                <h3 className="font-bold text-[#641e17]">Evening Aarti (Sandhya Aarti)</h3>
                <p className="text-[#5d4c42]">7:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🛕</span>
              <div>
                <h3 className="font-bold text-[#641e17]">Darshan Hours</h3>
                <p className="text-[#5d4c42]">6:00 AM to 9:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fbf7ee] p-4 rounded-lg">
              <span className="text-3xl">🔥</span>
              <div>
                <h3 className="font-bold text-[#641e17]">Havan & Puja Time</h3>
                <p className="text-[#5d4c42]">Performed throughout the day (except during Aarti)</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#9e7426] font-bold">* During Navratri, special darshan timings apply.</p>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8 mb-12">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4 border-b border-[#e5d8c5] pb-2">History & Significance</h2>
          <div className="space-y-4 text-[#5d4c42] text-lg leading-relaxed">
            <p>
              Located about 100 km from Ujjain, the Maa Baglamukhi Mandir in Nalkheda is a highly significant Siddha Peeth. The temple is situated on the banks of the Lakhundar River (historically known as Lakshmana) in the Agar Malwa district.
            </p>
            <p>
              The idol of Maa Baglamukhi here is believed to be self-manifested (swayambhu) and dates back to the Mahabharata era. It is said that during their exile, Lord Krishna advised Yudhishthira to perform Sadhana of Maa Baglamukhi for victory in the battle of Kurukshetra. 
            </p>
            <p>
              In the sanctum sanctorum, Maa Baglamukhi is worshipped in three forms—with Maa Lakshmi on her right and Maa Saraswati on her left. The temple is also surrounded by ancient trees like Bel, Champa, and Peepal, and is known for its deep tantric significance.
            </p>
          </div>
        </div>

        {/* How to Reach Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5d8c5] p-8 mb-12">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4 border-b border-[#e5d8c5] pb-2">How to Reach Nalkheda</h2>
          <div className="space-y-4 text-[#5d4c42] text-lg leading-relaxed">
            <p><strong>By Road:</strong> Nalkheda is well-connected by road. Distances from major cities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ujjain:</strong> Approx. 100 km</li>
              <li><strong>Indore:</strong> Approx. 130 km</li>
              <li><strong>Bhopal:</strong> Approx. 200 km</li>
              <li><strong>Dewas & Kota:</strong> Easily accessible via state highways.</li>
            </ul>
            <p><strong>By Train:</strong> The nearest railway stations are Ujjain Junction (100 km) and Shajapur (58 km). From there, you can hire a taxi or take a bus.</p>
            <p><strong>By Air:</strong> The nearest airports are Devi Ahilya Bai Holkar Airport in Indore (156 km) and Raja Bhoj Airport in Bhopal (182 km).</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#641e17] mb-4">Planning a Puja?</h2>
          <p className="text-[#5d4c42] mb-6">Book a Havan or Anushthan at Nalkheda performed by Pandit Raghunandan Sharma.</p>
          <Link to="/pujas" className="inline-block bg-[#641e17] text-white px-8 py-3 rounded-full font-bold hover:bg-[#45140f] transition shadow-lg text-lg">
            Explore Puja Services
          </Link>
        </div>

      </div>
    </div>
  );
}
