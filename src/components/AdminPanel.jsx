import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPanel({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [reviews, setReviews] = useState([]);
  const [replyText, setReplyText] = useState({});

  const SECRET_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      fetchReviews();
    }
  }, [isAuthenticated, isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsAuthenticated(false);
      setPassword('');
      setReplyText({});
    }
  }, [isOpen]);

  const fetchReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (data) setReviews(data);
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

    const { error } = await supabase
      .from('reviews')
      .update({ admin_reply: text })
      .eq('id', id);

    if (!error) {
      alert("Reply saved successfully!");
      fetchReviews();
    } else {
      alert("Error saving reply.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f0906c7] backdrop-blur-sm p-4">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fbf7ee] rounded-lg shadow-2xl p-6 sm:p-10 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 bg-white border border-[#dfcfb6] rounded-full w-8 h-8 flex items-center justify-center text-[#641e17] hover:bg-gray-100">
          ✕
        </button>

        {!isAuthenticated ? (
          /* --- LOGIN SCREEN --- */
          <div className="max-w-md mx-auto py-10 text-center">
            <h2 className="font-serif text-4xl text-[#641e17] mb-2">Admin Sign-in</h2>
            <p className="text-[#77675b] mb-8">Enter your secret PIN to manage reviews.</p>
            
            <form onSubmit={handleLogin} className="text-left">
              <label className="block text-sm font-bold text-[#58352c] mb-2">PIN</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-[#dfcfb6] p-3 mb-6 outline-none focus:border-[#d6a632] bg-white"
                placeholder="••••••••"
              />
              <button type="submit" className="w-full rounded-full bg-[#2b0c08] px-6 py-3.5 font-bold text-cream hover:bg-black transition">
                Sign in
              </button>
            </form>
          </div>
        ) : (
          /* --- ADMIN DASHBOARD --- */
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-[#e5d8c5] pb-4">
              <h1 className="font-serif text-3xl text-[#641e17]">Manage Reviews</h1>
              <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-600 font-bold hover:underline">
                Logout
              </button>
            </div>
            
            {reviews.length === 0 ? (
              <p className="text-center text-[#77675b] py-10">No reviews to display yet.</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-[#fffaf0] p-5 rounded-lg border border-[#ead9b2]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <strong className="text-lg text-[#641e17]">{review.name}</strong> <span className="text-sm text-gray-600">({review.city || 'No City'})</span>
                        <div className="text-[#e8ad2e] text-sm">{'★'.repeat(review.rating)}</div>
                      </div>
                      <span className="text-xs text-gray-400">{new Date(review.created_at).toLocaleDateString()}</span>
                    </div>
                    
                    <p className="italic text-[#57463c] mb-3 text-sm">"{review.review_text}"</p>

                    {review.admin_reply ? (
                      <div className="bg-[#f2e8d5] border-l-4 border-[#641e17] p-3 text-sm text-[#57463c]">
                        <strong className="block mb-1 text-xs">Your Reply:</strong>
                        {review.admin_reply}
                      </div>
                    ) : (
                      <div className="mt-3">
                        <textarea 
                          placeholder="Write a reply..." 
                          className="w-full rounded-md border border-[#dfcfb6] p-2 text-sm outline-none focus:border-[#d6a632] mb-2 bg-white"
                          rows="2"
                          value={replyText[review.id] || ''}
                          onChange={(e) => setReplyText({...replyText, [review.id]: e.target.value})}
                        />
                        <button 
                          onClick={() => handleReplySubmit(review.id)}
                          className="rounded-full bg-[#167b4a] px-5 py-1.5 text-xs font-bold text-white hover:bg-[#11643e]"
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
        )}
      </div>
    </div>
  );
}
