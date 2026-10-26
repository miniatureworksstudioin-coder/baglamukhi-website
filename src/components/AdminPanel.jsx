import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [reviews, setReviews] = useState([]);
  const [replyText, setReplyText] = useState({});

  const SECRET_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

  useEffect(() => {
    if (isAuthenticated) {
      fetchReviews();
    }
  }, [isAuthenticated]);

  const fetchReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (data) setReviews(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Access denied.");
      setPassword('');
    }
  };

  const handleReplySubmit = async (id) => {
    const text = replyText[id];
    if (!text) return;

    const { error } = await supabase
      .from('reviews')
      .update({ admin_reply: text })
      .eq('id', id);

    if (!error) {
      alert("Reply saved successfully!");
      fetchReviews(); // Refresh the list
    } else {
      alert("Error saving reply.");
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf7ee] p-5">
        <form onSubmit={handleLogin} className="bg-[#fffaf2] p-8 rounded-xl shadow-xl border border-[#e2d5c0] w-full max-w-md">
          <h2 className="font-serif text-3xl text-[#641e17] mb-6 text-center">Admin Login</h2>
          <label className="block text-sm font-bold text-[#58352c] mb-2">Enter Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-[#dfcfb6] p-3 mb-6 outline-none focus:border-[#d6a632]"
            placeholder="••••••••"
          />
          <button type="submit" className="w-full rounded-full bg-[#641e17] px-6 py-3 font-bold text-cream hover:bg-[#45140f]">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  // --- ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#fbf7ee] p-5 pt-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-[#e5d8c5] pb-4">
          <h1 className="font-serif text-4xl text-[#641e17]">Guruji's Dashboard</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-red-600 font-bold hover:underline">
            Logout
          </button>
        </div>

        <h2 className="text-2xl font-bold text-[#58352c] mb-4">Manage Reviews</h2>
        
        {reviews.length === 0 ? (
          <p>No reviews to display.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#fffaf0] p-6 rounded-lg border border-[#ead9b2] shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <strong className="text-lg text-[#641e17]">{review.name}</strong> <span className="text-sm text-gray-600">({review.city || 'No City'})</span>
                    <div className="text-[#e8ad2e]">{'★'.repeat(review.rating)}</div>
                  </div>
                  <span className="text-xs text-gray-400">{new Date(review.created_at).toLocaleDateString()}</span>
                </div>
                
                <p className="italic text-[#57463c] mb-4">"{review.review_text}"</p>

                {review.admin_reply ? (
                  <div className="bg-[#f2e8d5] border-l-4 border-[#641e17] p-3 text-sm text-[#57463c]">
                    <strong className="block mb-1">Your Current Reply:</strong>
                    {review.admin_reply}
                  </div>
                ) : (
                  <div className="mt-4">
                    <textarea 
                      placeholder="Write a reply to this devotee..." 
                      className="w-full rounded-md border border-[#dfcfb6] p-3 text-sm outline-none focus:border-[#d6a632] mb-2"
                      rows="2"
                      value={replyText[review.id] || ''}
                      onChange={(e) => setReplyText({...replyText, [review.id]: e.target.value})}
                    />
                    <button 
                      onClick={() => handleReplySubmit(review.id)}
                      className="rounded-full bg-[#167b4a] px-6 py-2 text-sm font-bold text-white hover:bg-[#11643e]"
                    >
                      Post Reply
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
