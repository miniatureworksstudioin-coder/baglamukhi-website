export default function Temple() {
  return (
    <section id="temple" className="py-24 px-5 bg-[#35100c] text-[#eadfc9]">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#e6bf5b] uppercase tracking-widest text-xs font-bold">A place of worship in Agar Malwa</span>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl text-[#f0c957] leading-tight">Maa Baglamukhi Mandir, Nalkheda</h2>
          <p className="mt-6 text-[#e3d4b8] text-lg leading-relaxed">
            The temple stands on the bank of the Lakhundar river in Nalkheda, in the Agar Malwa district of Madhya Pradesh. It is counted among the three ancient Baglamukhi shrines of India, along with Datia and Kangra.
          </p>
          <p className="mt-4 text-[#e3d4b8] text-lg leading-relaxed">
            The idol is believed to be swayambhu (self-manifested). Maa is seen in three forms, with Maa Lakshmi and Maa Saraswati beside her. Devotees say that Yudhishthira worshipped here on Shri Krishna's advice before the Mahabharata war. Baglamukhi Jayanti and Navratri are the most important festivals.
          </p>
          <table className="mt-8 w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3">Temple opens</td>
                <td className="text-right text-[#f2c65c] font-bold">5:00 AM</td>
              </tr>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3">Morning aarti</td>
                <td className="text-right text-[#f2c65c] font-bold">6:00 AM</td>
              </tr>
              <tr className="border-b border-[#f5e6c72b]">
                <td className="py-3">Evening aarti</td>
                <td className="text-right text-[#f2c65c] font-bold">7:00 PM (7:30 PM in summer)</td>
              </tr>
              <tr>
                <td className="py-3">Temple closes</td>
                <td className="text-right text-[#f2c65c] font-bold">9:00 PM (9:30 PM in summer)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-[#c9b895]">Timings can change on festival days. Please confirm with Guruji before travelling.</p>
        </div>
        <div className="bg-[#50190f] border border-[#bc8720] p-3 shadow-2xl">
          <img src="/images/puja-3.jpg" alt="Temple worship" className="w-full aspect-[4/3] object-cover" />
          <p className="mt-3 text-xs text-[#d8c9aa] uppercase tracking-widest">Worship at Maa Baglamukhi Mandir, Nalkheda</p>
        </div>
      </div>
    </section>
  );
}
