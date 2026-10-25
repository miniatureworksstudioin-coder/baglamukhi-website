import { useState } from 'react';
import { pujas } from '../pujas';
import { whatsappLink } from '../contact';

const INITIAL_FORM = {
  name: '',
  phone: '',
  puja: pujas[0].name,
  date: '',
  message: '',
};

const fieldClass = 'mt-1.5 w-full rounded-lg border border-[#dfcfb6] bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/40';
const today = () => new Date().toLocaleDateString('en-CA');

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (form.date && form.date < today()) {
      setError('Please choose today or a future date.');
      return;
    }

    const message = [
      'Namaste Guruji,',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Puja: ${form.puja}`,
      `Date: ${form.date || 'Not decided'}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#f3ead9] px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold text-maroon sm:text-5xl">Book your puja</h2>
          <p className="mt-3 text-lg text-ink/70">Send your details and Guruji will reply on WhatsApp with the date, samagri and dakshina.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5 rounded-xl border border-[#e4d2af] bg-[#fffaf1] p-6 shadow-lg sm:p-8">
          <label className="block font-semibold text-ink" htmlFor="booking-name">
            Your name
            <input id="booking-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} className={fieldClass} />
          </label>

          <label className="block font-semibold text-ink" htmlFor="booking-phone">
            Phone number
            <input id="booking-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={handleChange} className={fieldClass} />
          </label>

          <label className="block font-semibold text-ink" htmlFor="booking-puja">
            Puja type
            <select id="booking-puja" name="puja" value={form.puja} onChange={handleChange} className={fieldClass}>
              {pujas.map((puja) => (
                <option key={puja.id} value={puja.name}>{puja.name}</option>
              ))}
            </select>
          </label>

          <label className="block font-semibold text-ink" htmlFor="booking-date">
            Preferred date
            <input id="booking-date" name="date" type="date" min={today()} value={form.date} onChange={handleChange} className={fieldClass} />
          </label>

          <label className="block font-semibold text-ink" htmlFor="booking-message">
            Message (optional)
            <textarea id="booking-message" name="message" rows={4} value={form.message} onChange={handleChange} className={fieldClass} />
          </label>

          {error && <p role="alert" className="text-sm font-semibold text-red-700">{error}</p>}

          <button type="submit" className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-leaf px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-90">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
