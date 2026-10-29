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
              Check today's Tithi, Nakshatra, and auspicious timings before planning your visit to Nalkheda or booking a Puja. You can even change the city to see the timings for your own location.
            </p>
          </div>

          {/* The Interactive Widget Box with a Custom Footer */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-[#e6d5b3] bg-white w-full max-w-[380px] flex flex-col">
              
              {/* Iframe - Height reduced to cut off the internal white space */}
              <iframe 
                src="https://www.mypanchang.com/mypanchangwidget.php" 
                title="Today's panchang" 
                className="block w-full border-0"
                style={{ height: '145px', width: '100%', overflow: 'hidden' }}
                loading="lazy"
                scrolling="no"
              ></iframe>

              {/* NEW: Our Custom Footer to fill the space beautifully */}
              <div className="bg-[#fbf7ee] border-t border-[#e6d5b3] p-3 text-center">
                <p className="text-xs text-[#77675b] font-medium tracking-wide">
                  Timings calculated for Nalkheda, M.P.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
