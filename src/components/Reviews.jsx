export default function Reviews() {
  const reviews = [
    { text: "The puja was done step by step and everything was explained to us beforehand. We felt at peace.", name: "Devotee name", city: "City" },
    { text: "Booking on WhatsApp was easy, and the samagri list was clear. Prasad reached us on time.", name: "Devotee name", city: "City" },
    { text: "Guruji is patient and answers every question. Our family was happy with the havan.", name: "Devotee name", city: "City" }
  ];
  return (
    <section id="reviews" className="py-20 px-5 bg-[#f1e5c7]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">A note before publishing</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">What devotees say</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10 p-4 bg-[#fff9e9ad] border border-dashed border-[#b88a2d] text-sm text-[#634d2a]">
          Placeholder examples from the supplied source — these are not verified devotee testimonials.
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#fffaf0] p-6 border border-[#ead9b2]">
              <p className="font-serif italic text-lg text-[#57463c]">“{r.text}”</p>
              <strong className="block mt-4 text-[#641e17]">{r.name}</strong>
              <span className="text-sm text-[#79675a]">{r.city} · Placeholder</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
