export default function Footer() {
  return (
    <footer className="bg-[#2b0c08] text-[#d8c7a6] py-14 px-5">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 border-b border-[#fff3d72e] pb-10">
        <div>
          <h2 className="text-2xl font-serif text-[#efc75d]">Shree Baglamukhi Nalkheda</h2>
          <p className="mt-4 text-sm">Puja, havan and anushthan at the Maa Baglamukhi Mandir, Nalkheda, with Pandit Raghunandan.</p>
        </div>
        <div>
          <h3 className="text-xl font-serif text-[#efc75d]">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#f0c75c]">About Guruji</a></li>
            <li><a href="#services" className="hover:text-[#f0c75c]">Puja Sequence</a></li>
            <li><a href="#temple" className="hover:text-[#f0c75c]">Temple</a></li>
            <li><a href="#faq" className="hover:text-[#f0c75c]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-serif text-[#efc75d]">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+919174137815" className="hover:text-[#f0c75c]">+91 91741 37815</a></li>
            <li><a href="#" className="hover:text-[#f0c75c]">WhatsApp</a></li>
            <li>Nalkheda, Agar Malwa, M.P.</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-6 text-xs flex flex-col gap-2">
        <p>© 2026 Shree Baglamukhi Nalkheda. All rights reserved.</p>
        <p>Beware of third-party apps or brokers using our name. Please book only through the phone number above. Services follow tradition and faith, and no specific result is promised.</p>
      </div>
    </footer>
  );
}
