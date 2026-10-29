export default function PanchangWidget() {
  return (
    <section id="panchang" className="py-16 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text Description */}
          <div>
            <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">
              Daily Almanac
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#641e17]">
              Today's Panchang
            </h2>
            <p className="mt-4 text-[#5d4c42] text-[17px] leading-relaxed">
              Check today's Tithi, Nakshatra, and auspicious timings before planning your visit to Nalkheda or booking a Puja. 
            </p>
          </div>

          {/* The Small Widget Box */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#e6d5b3] bg-white">
              <iframe 
                src="https://www.mypanchang.com/mypanchangwidget.php" 
                title="Today's panchang" 
                width="100%" 
                height="280" 
                style={{ border: 0, maxWidth: '100%' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
