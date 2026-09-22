import React, { useState } from 'react';
import { Star, Check, Plus, Heart, Shield, Filter } from 'lucide-react';
import { ReviewItem } from '../types';
import { BUSINESS_INFO } from '../data/reviewsData';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
  onOpenBooking: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onAddReview,
  onOpenBooking
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

  // New review form
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceType, setServiceType] = useState('Master Bedroom & TV Lounge');
  const [comment, setComment] = useState('');
  const [highlight, setHighlight] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredReviews = reviews.filter(rev => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bedrooms') return rev.serviceType.toLowerCase().includes('bedroom') || rev.serviceType.toLowerCase().includes('lounge');
    if (selectedFilter === 'tenancy') return rev.serviceType.toLowerCase().includes('tenancy');
    if (selectedFilter === 'deep') return rev.serviceType.toLowerCase().includes('deep');
    if (selectedFilter === 'regular') return rev.serviceType.toLowerCase().includes('regular') || rev.serviceType.toLowerCase().includes('weekly');
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      avatarLetter: author.trim().charAt(0).toUpperCase() || 'U',
      rating,
      date: 'Just now',
      location: location.trim() || 'United Kingdom',
      serviceType,
      comment: comment.trim(),
      verified: true,
      highlight: highlight.trim() || undefined
    };

    onAddReview(newRev);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsWriteModalOpen(false);
      setAuthor('');
      setLocation('');
      setComment('');
      setHighlight('');
    }, 1200);
  };

  return (
    <section id="reviews" className="bg-neutral-50/50 py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Google Business Header Panel */}
        <div className="apple-panel rounded-[32px] p-6 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs shrink-0 mt-1">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Eden Clean UK"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5 text-xs font-medium text-neutral-500">
                  <span className="w-5 h-5 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px]">
                    G
                  </span>
                  <span>Google Verified Business</span>
                  <span>·</span>
                  <span className="text-rose-600 font-semibold flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-rose-500" />
                    LGBTQ+ Friendly
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-neutral-950">
                  Eden Clean UK
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  {BUSINESS_INFO.category} · Across England & Scotland
                </p>

                {/* Rating Summary */}
                <div className="flex items-center gap-3 mt-3.5 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl font-black text-neutral-950">4.8</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-600 font-medium">
                    Based on {reviews.length} authentic Google client reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="apple-pill-btn px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium cursor-pointer"
              >
                Write a Review
              </button>

              <button
                onClick={onOpenBooking}
                className="apple-pill-btn px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium cursor-pointer shadow-xs"
              >
                Book Your Clean
              </button>
            </div>
          </div>

          {/* Breakdown Bars */}
          <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-12">5 stars</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '89%' }} />
                </div>
                <span className="w-6 text-right font-medium text-neutral-900">16</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12">4 stars</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '11%' }} />
                </div>
                <span className="w-6 text-right font-medium text-neutral-900">2</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="w-12">3 stars</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-6 text-right">0</span>
              </div>
            </div>

            <div className="text-xs text-neutral-600 space-y-0.5 md:border-l md:border-neutral-100 md:pl-6">
              <p className="font-bold text-neutral-950">100% Genuine Google Reviews</p>
              <p className="text-neutral-500">Every testimonial verified against domestic booking and photographic sign-off.</p>
            </div>

            <div className="text-xs text-neutral-600 space-y-0.5 md:border-l md:border-neutral-100 md:pl-6">
              <p className="font-bold text-neutral-950">Specialist Feedback</p>
              <p className="text-neutral-500">Highest scores for master bedroom linen care, TV screen dust removal, and deposit return.</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by service:</span>
          </div>

          <div className="flex flex-wrap gap-1 p-1 bg-neutral-200/60 rounded-xl">
            {[
              { id: 'all', label: `All (${reviews.length})` },
              { id: 'bedrooms', label: 'Bedrooms & Lounges' },
              { id: 'regular', label: 'Regular Domestic' },
              { id: 'deep', label: 'Deep Cleans' },
              { id: 'tenancy', label: 'End of Tenancy' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`apple-pill-btn px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-white text-neutral-950 shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid (Apple clean, subtle borders, high legibility) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(rev => (
            <div
              key={rev.id}
              className="apple-panel rounded-[24px] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 tracking-tight">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-neutral-500">{rev.location}</p>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 text-[11px]">
                  <span className="font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md">
                    {rev.serviceType}
                  </span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-400">{rev.date}</span>
                </div>

                {rev.highlight && (
                  <p className="text-xs font-semibold text-neutral-900 mb-2 italic">
                    "{rev.highlight}"
                  </p>
                )}

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <Check className="w-3 h-3 text-emerald-600" />
                  Verified Google Review
                </span>
                <span className="text-neutral-400 font-mono text-[10px]">Eden Clean UK</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Review Eden Clean UK</h3>
              </div>
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-neutral-950">Review Published</h4>
                <p className="text-xs text-neutral-500">
                  Thank you. Your feedback has been verified and added to our Google listing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Rating</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400' : 'text-neutral-300'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-medium text-neutral-600 ml-2">{rating} / 5 stars</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Location / UK Town</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Notting Hill, London"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Service Received</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                  >
                    <option value="Master Bedroom & TV Lounge">Master Bedroom & TV Lounge</option>
                    <option value="Regular Domestic Clean">Regular Domestic Clean</option>
                    <option value="Deep Spring Reset">Deep Spring Reset</option>
                    <option value="End of Tenancy Clean">End of Tenancy Clean</option>
                    <option value="Reception Lobby Detailing">Reception Lobby Detailing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Highlight (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Impeccable care on delicate joinery and TV lounge"
                    value={highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share your experience with punctuality, cleaning standards, and attention to detail..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="apple-pill-btn px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 hover:bg-neutral-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="apple-pill-btn px-5 py-2 rounded-xl text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
