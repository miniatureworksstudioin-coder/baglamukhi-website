export default function PanchangWidget() {
  return (
    <section id="panchang" className="py-20 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">
            Daily Almanac
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#641e17]">
            Panchang Calendar
          </h2>
          <p className="mt-4 text-[#5d4c42]">Tap on any date to see the Tithi and auspicious timings.</p>
        </div>
        
        {/* The Panchang Widget */}
        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#e6d5b3] bg-white">
          <iframe 
            src="https://www.mypanchang.com/newsite/calembed.php?locid=1262060&embed=1" 
            title="Panchang calendar" 
            className="w-full h-[700px] md:h-[900px] border-0"
            loading="lazy"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
