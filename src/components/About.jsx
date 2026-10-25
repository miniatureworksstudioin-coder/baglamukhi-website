export default function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div className="relative max-w-[480px] mx-auto md:mx-0">
          <div className="bg-[#fffaf0] border border-[#c29431] p-3 shadow-[18px_20px_0_#eddfbd] relative">
            <img src="/images/puja-6.jpg" alt="Puja offerings" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-8 -right-4 bg-[#641e17] text-[#f8ecd4] px-5 py-3 font-serif italic text-lg max-w-[176px]">
              A prayer prepared with care
            </div>
          </div>
        </div>
        <div>
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">At Nalkheda · Madhya Pradesh</span>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl text-[#641e17] leading-tight">Pandit Raghunandan</h2>
          <p className="mt-6 text-[#5d4c42] text-lg leading-relaxed">
            Pandit Raghunandan performs Baglamukhi Pujan, Anushthan, Havan and Durga Saptashati Chandi Path at the Nalkheda temple. Each puja follows Vedic vidhi, with the sankalp taken in your name and gotra.
          </p>
          <p className="mt-4 text-[#5d4c42] text-lg leading-relaxed">
            Before the puja he tells you the samagri needed, the muhurat and the number of pandits required, so that you know what to expect and what it costs.
          </p>
          <div className="mt-8 flex items-center gap-4 border-l-2 border-[#dbad47] pl-4">
             <span className="text-2xl">🌺</span>
             <div>
               <strong className="block text-sm text-[#2e211b]">Hindi, English</strong>
               <span className="text-sm text-[#77675b]">Languages spoken</span>
             </div>
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#641e17] px-8 py-3 font-bold text-[#fffaf0] transition hover:-translate-y-0.5 hover:bg-[#45140f]">
            Speak to Guruji ↗
          </a>
        </div>
      </div>
    </section>
  );
}
