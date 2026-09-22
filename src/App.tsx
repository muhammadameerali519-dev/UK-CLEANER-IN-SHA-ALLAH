/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyBookingBar } from './components/StickyBookingBar';
import { BookingModal } from './components/BookingModal';
import { SendToPhoneModal } from './components/SendToPhoneModal';
import { ShareModal } from './components/ShareModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { SpacesPage } from './pages/SpacesPage';
import { StandardPage } from './pages/StandardPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { CoveragePage } from './pages/CoveragePage';
import { ContactPage } from './pages/ContactPage';

import { INITIAL_REVIEWS } from './data/reviewsData';
import { ReviewItem, ServiceItem } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSendToPhoneOpen, setIsSendToPhoneOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    try {
      return localStorage.getItem('eden_clean_saved') === 'true';
    } catch {
      return false;
    }
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const handleToggleSave = () => {
    const nextState = !isSaved;
    setIsSaved(nextState);
    try {
      localStorage.setItem('eden_clean_saved', String(nextState));
    } catch {
      // ignore
    }
    showToast(
      nextState
        ? 'Eden Clean UK saved to your favourites'
        : 'Removed from favourites'
    );
  };

  const handleSelectService = (service: ServiceItem) => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews([newReview, ...reviews]);
    showToast('Your review has been verified and published');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col antialiased selection:bg-neutral-950 selection:text-white">
        {/* Subtle Toast Notification */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-50 bg-neutral-950 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-xl border border-neutral-800 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Global Multi-Page Navigation Bar */}
        <Navbar
          onOpenBooking={() => {
            setPreselectedService(null);
            setIsBookingOpen(true);
          }}
          onOpenSendToPhone={() => setIsSendToPhoneOpen(true)}
          onOpenShare={() => setIsShareOpen(true)}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  reviews={reviews}
                  onAddReview={handleAddReview}
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                  onSelectService={handleSelectService}
                />
              }
            />

            <Route
              path="/spaces"
              element={
                <SpacesPage
                  onSelectService={handleSelectService}
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                />
              }
            />

            <Route
              path="/standard"
              element={
                <StandardPage
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                />
              }
            />

            <Route
              path="/reviews"
              element={
                <ReviewsPage
                  reviews={reviews}
                  onAddReview={handleAddReview}
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                />
              }
            />

            <Route
              path="/calculator"
              element={
                <CalculatorPage
                  onDirectBook={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                />
              }
            />

            <Route
              path="/coverage"
              element={
                <CoveragePage
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenBooking={() => {
                    setPreselectedService(null);
                    setIsBookingOpen(true);
                  }}
                  onOpenSendToPhone={() => setIsSendToPhoneOpen(true)}
                />
              }
            />

            {/* Catch-all redirects to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Minimalist Footer */}
        <Footer
          onOpenBooking={() => {
            setPreselectedService(null);
            setIsBookingOpen(true);
          }}
        />

        {/* Global Sticky Booking Pill */}
        <StickyBookingBar
          onOpenBooking={() => {
            setPreselectedService(null);
            setIsBookingOpen(true);
          }}
        />

        {/* Global Modals */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedService={preselectedService}
        />

        <SendToPhoneModal
          isOpen={isSendToPhoneOpen}
          onClose={() => setIsSendToPhoneOpen(false)}
        />

        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
