import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myReviewIds, setMyReviewIds] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', city: '', rating: 5, review_text: '' });
  const [submitting, setSubmitting] = useState(false);

  // 1. Load reviews and check local storage on mount
  useEffect(() => {
    fetchReviews();
    const savedIds = JSON.parse(localStorage.getItem('my_review_ids')) || [];
    setMyReviewIds(savedIds);
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { data, error } = await supabase
      .from('reviews')
      .insert([{ 
        name: formData.name, 
        city: formData.city, 
        rating: formData.rating, 
        review_text: formData.review_text 
      }])
      .select();

    if (!error && data) {
      // Save the new review ID to LocalStorage so the user can delete it later
      const newId = data[0].id;
      const updatedIds = [...myReviewIds, newId];
      localStorage.setItem('my_review_ids', JSON.stringify(updatedIds));
      setMyReviewIds(updatedIds);
      
      // Reset form and refresh list
      setFormData({ name: '', city: '', rating: 5, review_text: '' });
      setShowForm(false);
      fetchReviews();
    } else {
      alert('Error submitting review. Please try again.');
    }
    setSubmitting(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    const { error } = await supabase.from('reviews').delete().eq('id', id);

    if (!error) {
      // Remove from LocalStorage
      const updatedIds = myReviewIds.filter(reviewId => reviewId !== id);
      localStorage.setItem('my_review_ids', JSON.stringify(updatedIds));
      setMyReviewIds(updatedIds);
      fetchReviews();
    }
  };

  return (
    <section id="reviews" className="py-20 px-5 bg-[#f1e5c7]">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#9e7426] uppercase tracking-[0.17em] text-xs font-bold">Words of Devotion</span>
          <h2 className="mt-3 font-serif text-5xl text-[#641e17]">What devotees say</h2>
          <p className="mt-4 text-[#634d2a] max-w-2xl mx-auto">
            Read experiences from other devotees. If you have booked a puja with us, we would be grateful if you shared your thoughts.
          </p>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="mt-6 inline-flex rounded-full bg-[#641e17] px-6 py-2.5 font-bold text-cream transition hover:bg-[#45140f]"
          >
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-[#fffaf0] p-6 rounded-xl border border-[#ead9b2] shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-sm font-bold text-[#58352c]">Your Name
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 w-full rounded-md border border-[#dfcfb6] p-3 outline-none focus:border-[#d6a632]" />
                </label>
                <label className="block text-sm font-bold text-[#58352c]">City (Optional)
                  <input value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="mt-1 w-full rounded-md border border-[#dfcfb6] p-3 outline-none focus:border-[#d6a632]" />
                </label>
              </div>
              
              <label className="block text-sm font-bold text-[#58352c]">Rating
                <select value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="mt-1 w-full rounded-md border border-[#dfcfb6] p-3 outline-none focus:border-[#d6a632]">
                  <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                  <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                  <option value={3}>3 Stars ⭐⭐⭐</option>
                  <option value={2}>2 Stars ⭐⭐</option>
                  <option value={1}>1 Star ⭐</option>
                </select>
              </label>

              <label className="block text-sm font-bold text-[#58352c]">Your Review
                <textarea required rows="4" value={formData.review_text} onChange={e => setFormData({...formData, review_text: e.target.value})} className="mt-1 w-full rounded-md border border-[#dfcfb6] p-3 outline-none focus:border-[#d6a632]" placeholder="Tell us about your experience with the puja..." />
              </label>

              <button disabled={submitting} type="submit" className="w-full rounded-full bg-[#167b4a] px-6 py-3 font-bold text-white transition hover:bg-[#11643e] disabled:opacity-50">
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        )}

        {/* Reviews Grid */}
        {loading ? (
          <div className="text-center text-[#634d2a]">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-[#634d2a]">No reviews yet. Be the first to share your experience!</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#fffaf0] p-6 border border-[#ead9b2] relative flex flex-col h-full rounded-lg shadow-sm">
                
                {/* Delete Button (Only shows if user created it) */}
                {myReviewIds.includes(review.id) && (
                  <button 
                    onClick={() => handleDelete(review.id)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm font-bold"
                    title="Delete your review"
                  >
                    ✕ Delete
                  </button>
                )}

                {/* Rating Stars */}
                <div className="text-[#e8ad2e] text-lg mb-2">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-lg text-[#57463c] mb-6 flex-grow">“{review.review_text}”</p>
                
                {/* Reviewer Info */}
                <div>
                  <strong className="block text-[#641e17]">{review.name}</strong>
                  <span className="text-sm text-[#79675a]">{review.city || 'Devotee'}</span>
                </div>

                {/* Admin Reply (If Pandit Ji has replied) */}
                {review.admin_reply && (
                  <div className="mt-4 p-3 bg-[#f2e8d5] border-l-4 border-[#641e17] rounded-r-md">
                    <span className="block text-xs font-bold text-[#641e17] mb-1">Reply from Guruji:</span>
                    <p className="text-sm text-[#57463c] italic">{review.admin_reply}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
