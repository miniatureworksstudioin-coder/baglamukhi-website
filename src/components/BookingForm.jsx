import { useState } from 'react';
import { pujas } from '../pujas';
import { whatsappLink } from '../contact';
import { supabase } from '../supabaseClient';

const INITIAL_FORM = { name: '', phone: '', puja: pujas[0].name, date: '', message: '' };
const fieldClass = 'mt-1.5 w-full rounded-md border border-[#d4c4a9] bg-[#fffdf8] px-4 py-3 text-[#37251d] text-[17px] outline-none transition focus:border-[#d6a632] focus:ring-1 focus:ring-[#d6a632]';

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    // 1. Save to Supabase Database
    const { error } = await supabase
      .from('bookings')
      .insert([
        { 
          name: form.name, 
          phone: form.phone, 
          puja_type: form.puja, 
          preferred_date: form.date || null, 
          message: form.message 
        }
      ]);

    if (error) {
      console.error(error);
      setErrorMsg('There was an error saving your booking. Please try again or call us.');
      setLoading(false);
      return;
    }

    // 2. If successful, open WhatsApp
    setSuccess(true);
    const msg = `Namaste Guruji,\nName: ${form.name}\nPhone: ${form.phone}\nPuja: ${form.puja}\nDate: ${form.date || 'Not decided'}\nMessage: ${form.message}`;
    window.open(whatsappLink(msg), '_blank');
    
    // Reset form
    setForm(INITIAL_FORM);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-5 bg-[#f1e9dc]">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        
        {/* Left Column (Contact Info) */}
        <div>
          <span className="text-[#9e7426] uppercase tracking-[0.17em] text-xs font-bold">Start with a conversation</span>
          <h2 className="mt-3 font-serif text-6xl md:text-[5.3rem] text-[#641e17] leading-[0.9] tracking-tight">
            Book your puja
          </h2>
          <p className="mt-6 text-[#6c5b4f] text-[17px] max-w-[50ch]">
            Send your details and Guruji will reply on WhatsApp with the date, samagri and dakshina.
          </p>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] w-11 h-11 flex items-center justify-center rounded-full border border-[#c5962e] text-xl">📞</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Phone & WhatsApp</strong>
                <a href="tel:+919174137815" className="text-[#6c5b4f]">+91 91741 37815</a>
              </div>
            </div>

            {/* NEW EMAIL SECTION */}
            <div className="flex items-center gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] w-11 h-11 flex items-center justify-center rounded-full border border-[#c5962e] text-xl">✉️</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Email</strong>
                <a href="mailto:shreebaglamukhinalkheda@gmail.com" className="text-[#6c5b4f] break-words">shreebaglamukhinalkheda@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] w-11 h-11 flex items-center justify-center rounded-full border border-[#c5962e] text-xl">📍</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Address</strong>
                <span className="text-[#6c5b4f]">Baglamukhi Mandir, Nalkheda, Agar Malwa, Madhya Pradesh</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#f3d790] text-[#6b2418] w-11 h-11 flex items-center justify-center rounded-full border border-[#c5962e] text-xl">🕒</div>
              <div>
                <strong className="block text-sm text-[#641e17]">Available</strong>
                <span className="text-[#6c5b4f]">Every day, 6 am to 9 pm</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-dashed border-[#b1842c] p-5 bg-[#faf2df] rounded-lg">
             <strong className="block text-xl font-serif text-[#5d2118]">Find the temple on Google Maps</strong>
             <span className="text-sm text-[#766355]">Baglamukhi Mandir, Nalkheda, Agar Malwa, M.P. Tap to open directions.</span>
          </div>
        </div>

        {/* Right Column (Form) */}
        <form onSubmit={handleSubmit} className="bg-[#fffaf2] border border-[#e2d5c0] rounded-xl p-8 md:p-10 shadow-[0_22px_54px_rgba(56,25,12,0.1)] grid grid-cols-1 sm:grid-cols-2 gap-5">
          <h3 className="col-span-full font-serif text-[2rem] text-[#641e17] leading-tight mb-2">Puja booking request</h3>
          
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
          
          {errorMsg && <p className="col-span-full text-red-600 font-bold text-sm">{errorMsg}</p>}
          {success && <p className="col-span-full text-green-700 font-bold text-sm">Booking saved! Opening WhatsApp...</p>}

          <button type="submit" disabled={loading} className="col-span-full mt-2 rounded-full bg-[#167b4a] px-8 py-3.5 font-bold text-white transition hover:bg-[#11643e] flex justify-center items-center gap-2 disabled:opacity-50">
            {loading ? 'Saving...' : 'Send on WhatsApp ↗'}
          </button>
          <p className="col-span-full text-xs text-center text-[#7b6c5f] mt-1">This form opens WhatsApp with your message. We do not store your details on this website.</p>
        </form>
      </div>
    </section>
  );
}
