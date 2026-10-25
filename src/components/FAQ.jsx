export default function FAQ() {
  const faqs = [
    { q: "Can I take part if I cannot travel to Nalkheda?", a: "Yes. The puja can be done at the temple in your name and gotra, and you can join by video call. Prasad can be sent to your address." },
    { q: "How much does a puja cost?", a: "The dakshina depends on the puja, the number of pandits and the samagri. Guruji will tell you the full amount on call or WhatsApp before you confirm." },
    { q: "How early should I book?", a: "We suggest 3 to 7 days for a havan and 2 weeks for a long anushthan. During Navratri, please book earlier." },
    { q: "What do I need to give for the sankalp?", a: "Your full name, your father's name, gotra (if known), city and the reason for the puja." },
    { q: "Are results guaranteed?", a: "No. Puja is done with faith and in line with tradition. We do not promise any specific result, and it does not replace medical, legal or financial advice." }
  ];
  return (
    <section id="faq" className="py-24 px-5 bg-[#fbf7ee]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Before you book</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">Common questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[#fffaf1] border border-[#e5d9c6] rounded-md p-4 cursor-pointer">
              <summary className="font-bold text-[#4b2018] list-none flex justify-between items-center">
                {faq.q}
                <span className="text-[#af7d20] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[#69594e]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
