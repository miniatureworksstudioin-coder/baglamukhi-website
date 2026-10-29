import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPanel({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('reviews');
  
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [replyText, setReplyText] = useState({});

  const SECRET_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      fetchData();
    }
  }, [isAuthenticated, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsAuthenticated(false);
      setPassword('');
      setReplyText({});
      setActiveTab('reviews');
    }
  }, [isOpen]);

  const fetchData = async () => {
    const { data: reviewData } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (reviewData) setReviews(reviewData);

    const { data: bookingData } = await supabase.from('bookings').select('*').order('created_at', { ascending: false });
    if (bookingData) setBookings(bookingData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect PIN. Access denied.");
      setPassword('');
    }
  };

  const handleReplySubmit = async (id) => {
    const text = replyText[id];
    if (!text) return;
    const { error } = await supabase.from('reviews').update({ admin_reply: text }).eq('id', id);
    if (!error) {
      alert("Reply saved successfully!");
      fetchData();
    } else {
      alert("Error saving reply.");
    }
  };

  const handleDeleteReview = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this review?")) return;
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    if (!error) {
      alert("Review deleted successfully.");
      fetchData();
    } else {
      alert("Error deleting review. Please try again.");
    }
  };

  const handleDeleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this booking?")) return;
    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (!error) {
      alert("Booking deleted successfully.");
      fetchData();
    } else {
      alert("Error deleting booking. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f0906c7] backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fbf7ee] rounded-lg shadow-2xl p-6 sm:p-10 animate-in fade-in zoom-in duration-200">
        
        <button onClick={onClose} className="absolute top-4 right-4 bg-white border border-[#dfcfb6] rounded-full w-8 h-8 flex items-center justify-center text-[#641e17] hover:bg-gray-100">✕</button>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-10 text-center">
            <h2 className="font-serif text-4xl text-[#641e17] mb-2">Admin Sign-in</h2>
            <p className="text-[#77675b] mb-8">Enter your secret PIN to manage the website.</p>
            
            <form onSubmit={handleLogin} className="text-left">
              <label className="block text-sm font-bold text-[#58352c] mb-2">PIN</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-[#dfcfb6] p-3 mb-6 outline-none focus:border-[#d6a632] bg-white" placeholder="••••••••" />
              <button type="submit" className="w-full rounded-full bg-[#2b0c08] px-6 py-3.5 font-bold text-cream hover:bg-black transition">Sign in</button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-[#e5d8c5] pb-4 gap-4">
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('reviews')} className={`font-serif text-2xl pb-2 border-b-2 transition ${activeTab === 'reviews' ? 'border-[#641e17] text-[#641e17]' : 'border-transparent text-[#9e7426] hover:text-[#641e17]'}`}>Reviews</button>
                <button onClick={() => setActiveTab('bookings')} className={`font-serif text-2xl pb-2 border-b-2 transition ${activeTab === 'bookings' ? 'border-[#641e17] text-[#641e17]' : 'border-transparent text-[#9e7426] hover:text-[#641e17]'}`}>Bookings ({bookings.length})</button>
              </div>
              <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-600 font-bold hover:underline">Logout</button>
            </div>

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {reviews.length === 0 ? <p className="text-center py-10">No reviews yet.</p> : reviews.map((review) => (
                  <div key={review.id} className="bg-[#fffaf0] p-5 rounded-lg border border-[#ead9b2]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <strong className="text-lg text-[#641e17]">{review.name}</strong> <span className="text-sm text-gray-600">({review.city || 'No City'})</span>
                        <div className="text-[#e8ad2e] text-sm">{'★'.repeat(review.rating)}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs text-gray-400">{new Date(review.created_at).toLocaleDateString()}</span>
                        <button onClick={() => handleDeleteReview(review.id)} className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 px-2 py-1 rounded">🗑️ Delete</button>
                      </div>
                    </div>
                    <p className="italic text-[#57463c] mb-3 text-sm">"{review.review_text}"</p>
                    {review.admin_reply ? (
                      <div className="bg-[#f2e8d5] border-l-4 border-[#641e17] p-3 text-sm text-[#57463c]">
                        <strong className="block mb-1 text-xs">Your Reply:</strong>{review.admin_reply}
                      </div>
                    ) : (
                      <div className="mt-3">
                        <textarea placeholder="Write a reply..." className="w-full rounded-md border border-[#dfcfb6] p-2 text-sm outline-none focus:border-[#d6a632] mb-2 bg-white" rows="2" value={replyText[review.id] || ''} onChange={(e) => setReplyText({...replyText, [review.id]: e.target.value})} />
                        <button onClick={() => handleReplySubmit(review.id)} className="rounded-full bg-[#167b4a] px-5 py-1.5 text-xs font-bold text-white hover:bg-[#11643e]">Post Reply</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-4">
                {bookings.length === 0 ? <p className="text-center py-10">No bookings yet.</p> : bookings.map((booking) => (
                  <div key={booking.id} className="bg-[#fffaf0] p-5 rounded-lg border border-[#ead9b2] flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <strong className="text-lg text-[#641e17]">{booking.name}</strong>
                      <div className="text-sm text-[#57463c] mt-1 space-y-1">
                        <p><strong>Puja:</strong> {booking.puja_type}</p>
                        <p><strong>Date:</strong> {booking.preferred_date || 'Not decided'}</p>
                        {booking.message && <p className="italic text-gray-600">"{booking.message}"</p>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end justify-center border-t md:border-t-0 md:border-l border-[#ead9b2] pt-3 md:pt-0 md:pl-4">
                      <a href={`tel:${booking.phone}`} className="text-sm font-bold text-[#167b4a] hover:underline flex items-center gap-1">📞 Call: {booking.phone}</a>
                      <a href={`https://wa.me/${booking.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#167b4a] hover:underline flex items-center gap-1">💬 WhatsApp</a>
                      <div className="flex items-center justify-between md:justify-end gap-3 mt-2">
                        <span className="text-[11px] text-gray-400">Booked: {new Date(booking.created_at).toLocaleDateString()}</span>
                        <button onClick={() => handleDeleteBooking(booking.id)} className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 px-2 py-1 rounded">🗑️ Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
