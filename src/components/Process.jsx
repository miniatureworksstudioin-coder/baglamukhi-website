const steps = [
  { num: '01', title: 'Contact Guruji', desc: 'Call or message on WhatsApp and tell us which puja you need.' },
  { num: '02', title: 'Fix the date', desc: 'Guruji suggests an auspicious muhurat and tells you the samagri and dakshina.' },
  { num: '03', title: 'Puja is performed', desc: 'Pandits perform the ritual at the temple, with your name and gotra in the sankalp.' },
  { num: '04', title: 'Prasad & blessings', desc: 'Join in person or by video call. Prasad can be sent to your address.' }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Simple, personal, by phone</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">How booking works</h2>
          <p className="mt-4 text-lg text-[#77675b]">Four simple steps, all by phone or WhatsApp.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-[#d6bf8f] pt-6 relative">
              <div className="absolute top-[-2px] left-0 w-16 h-1 bg-[#bd8a24]"></div>
              <span className="block font-serif text-4xl text-[#c3932e]">{step.num}</span>
              <h3 className="mt-4 font-serif text-2xl text-[#641e17]">{step.title}</h3>
              <p className="mt-2 text-[#6c5c52]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
