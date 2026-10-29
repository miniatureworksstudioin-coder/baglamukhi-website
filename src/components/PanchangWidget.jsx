import { useEffect } from 'react';

export default function PanchangWidget() {
  useEffect(() => {
    // Load the MyPanchang text script
    const script = document.createElement('script');
    script.src = "https://www.mypanchang.com/displaypanchang.js";
    script.async = true;
    script.setAttribute('data-target-id', 'mypanchang-feed-container');
    script.setAttribute('data-locid', '1262060'); // Location ID for Nalkheda area
    script.setAttribute('data-mode', 'FULL');
    
    document.body.appendChild(script);

    // Cleanup script if the component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://www.mypanchang.com/displaypanchang.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="panchang" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Text */}
          <div className="pt-6">
            <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">
              Daily Almanac
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#641e17] leading-tight">
              Today's Panchang
            </h2>
            <p className="mt-6 text-[#5d4c42] text-[17px] leading-relaxed">
              Check today's Tithi, Nakshatra, and auspicious timings before planning your visit to Nalkheda or booking a Puja.
            </p>
            
            <div className="mt-8 p-5 bg-[#f8ecd4] rounded-xl border border-[#e6d5b3] shadow-sm">
              <p className="text-sm text-[#641e17] font-semibold flex items-center gap-2">
                <span className="text-lg">📍</span> Location: Nalkheda, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Right Side: Beautiful Widget Card */}
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(100,30,23,0.08)] border border-[#e6d5b3] overflow-hidden">
            <div className="bg-[#641e17] text-[#f0c25a] px-6 py-4 font-serif text-xl border-b-4 border-[#e8ad2e] flex justify-between items-center">
              <span>Daily Panchang Details</span>
              <span className="text-sm font-sans text-white/70">Today</span>
            </div>
            <div className="p-6 md:p-8">
              {/* The script injects the clean text here */}
              <div id="mypanchang-feed-container" className="text-[#2e211b] font-sans text-base leading-loose"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
