import { useState } from 'react';
import { pujas } from '../pujas';
import { whatsappLink } from '../contact';

const INITIAL_FORM = { name: '', phone: '', puja: pujas[0].name, date: '', message: '' };
const fieldClass = 'mt-1.5 w-full rounded-lg border border-[#dfcfb6] bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/40';

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Namaste Guruji,\nName: ${form.name}\nPhone: ${form.phone}\nPuja: ${form.puja}\nDate: ${form.date || 'Not decided'}\nMessage: ${form.message}`;
    window.open(whatsappLink(msg), '_blank');
  };

  return (
    <section id="contact" className="py-24 px-5 bg-[#f1e9dc]">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[.8fr_1.2fr] gap-16 items-start">
        <div>
          <span className="text-[#9e7426] uppercase tracking-widest text-xs font-bold">Start with a conversation</span>
          <h2 className="mt-3 font-serif text-6xl text-[#641e17] leading-none">Book your puja</h2>
          <p className="mt-6 text-[#6c5b4f] text-lg">Send your details and Guruji will reply on WhatsApp with the date, samagri and dakshina.</p>
          
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] p-3 rounded-full border border-[#c5962e]">📞</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Phone & WhatsApp</strong>
                <a href="tel:+919174137815" className="text-[#6c5b4f]">+91 91741 37815</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] p-3 rounded-full border border-[#c5962e]">📍</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Address</strong>
                <span className="text-[#6c5b4f]">Baglamukhi Mandir, Nalkheda, Agar Malwa, Madhya Pradesh</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] p-3 rounded-full border border-[#c5962e]">🕒</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Available</strong>
                <span className="text-[#6c5b4f]">Every day, 6 am to 9 pm</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-dashed border-[#b1842c] p-4 bg-[#faf2df] rounded-lg">
             <strong className="block text-lg font-serif text-[#5d2118]">Find the temple on Google Maps</strong>
             <span className="text-sm text-[#766355]">Baglamukhi Mandir, Nalkheda, Agar Malwa, M.P. Tap to open directions.</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#fffaf2] border border-[#e2d5c0] rounded-xl p-8 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h3 className="col-span-full font-serif text-3xl text-[#641e17]">Puja booking request</h3>
          
          <label className="block text-sm font-bold text-[#58352c]">Your name
            <input name="name" required value={form.name} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="block text-sm font-bold text-[#58352c]">Phone number
            <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="block text-sm font-bold text-[#58352c]">Puja type
            <select name="puja" value={form.puja} onChange={handleChange} className={fieldClass}>
              {pujas.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </label>
          <label className="block text-sm font-bold text-[#58352c]">Preferred date
            <input name="date" type="date" value={form.date} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="col-span-full block text-sm font-bold text-[#58352c]">Message (optional)
            <textarea name="message" rows="3" value={form.message} onChange={handleChange} className={fieldClass} />
          </label>
          
          <button type="submit" className="col-span-full mt-2 rounded-full bg-[#167b4a] px-8 py-3 font-bold text-white transition hover:bg-[#11643e]">
            Send on WhatsApp
          </button>
          <p className="col-span-full text-xs text-center text-[#7b6c5f] mt-2">This form opens WhatsApp with your message. We do not store your details on this website.</p>
        </form>
      </div>
    </section>
  );
}
