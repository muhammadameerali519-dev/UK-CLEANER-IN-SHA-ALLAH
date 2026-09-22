/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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

interface AnimatedRoutesProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
  onOpenBooking: () => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenSendToPhone: () => void;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({
  reviews,
  onAddReview,
  onOpenBooking,
  onSelectService,
  onOpenSendToPhone,
}) => {
  const location = useLocation();
  const [navKey, setNavKey] = useState(0);

  // Trigger top sweep bar on route change
  useEffect(() => {
    setNavKey(k => k + 1);
  }, [location.pathname]);

  return (
    <>
      {/* Sleek Apple-style Ambient Route Switch Progress Indicator */}
      <motion.div
        key={`bar-${navKey}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 0.7, 1], opacity: [1, 1, 0] }}
        transition={{
          duration: 0.55,
          times: [0, 0.6, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-neutral-900 to-emerald-400 z-50 pointer-events-none shadow-[0_1px_8px_rgba(16,185,129,0.35)]"
      />

      {/* Fluid Page Dissolve and Spatial Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
          transition={{
            duration: 0.34,
            ease: [0.16, 1, 0.3, 1], // Apple fluid easing
          }}
          className="w-full flex-1 flex flex-col"
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <HomePage
                  reviews={reviews}
                  onAddReview={onAddReview}
                  onOpenBooking={onOpenBooking}
                  onSelectService={onSelectService}
                />
              }
            />

            <Route
              path="/spaces"
              element={
                <SpacesPage
                  onSelectService={onSelectService}
                  onOpenBooking={onOpenBooking}
                />
              }
            />

            <Route
              path="/standard"
              element={<StandardPage onOpenBooking={onOpenBooking} />}
            />

            <Route
              path="/reviews"
              element={
                <ReviewsPage
                  reviews={reviews}
                  onAddReview={onAddReview}
                  onOpenBooking={onOpenBooking}
                />
              }
            />

            <Route
              path="/calculator"
              element={<CalculatorPage onDirectBook={onOpenBooking} />}
            />

            <Route
              path="/coverage"
              element={<CoveragePage onOpenBooking={onOpenBooking} />}
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenBooking={onOpenBooking}
                  onOpenSendToPhone={onOpenSendToPhone}
                />
              }
            />

            {/* Catch-all redirects to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

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

  const handleOpenGeneralBooking = () => {
    setPreselectedService(null);
    setIsBookingOpen(true);
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
          onOpenBooking={handleOpenGeneralBooking}
          onOpenSendToPhone={() => setIsSendToPhoneOpen(true)}
          onOpenShare={() => setIsShareOpen(true)}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
        />

        {/* Animated Multi-Page Routes with Apple Fluid Transitions */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <AnimatedRoutes
            reviews={reviews}
            onAddReview={handleAddReview}
            onOpenBooking={handleOpenGeneralBooking}
            onSelectService={handleSelectService}
            onOpenSendToPhone={() => setIsSendToPhoneOpen(true)}
          />
        </main>

        {/* Global Minimalist Footer */}
        <Footer onOpenBooking={handleOpenGeneralBooking} />

        {/* Global Sticky Booking Pill */}
        <StickyBookingBar onOpenBooking={handleOpenGeneralBooking} />

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
