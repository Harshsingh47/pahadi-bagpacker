import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import HimalayanDestinationsSection from '@/components/HimalayanDestinationsSection';
import AdventureCategoriesSection from '@/components/AdventureCategoriesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* LUXURY INTERACTIVE HIMALAYAN DESTINATIONS SECTION */}
      <HimalayanDestinationsSection />

      {/* ADVENTURE CATEGORIES SHOWCASE SECTION */}
      <AdventureCategoriesSection />

      {/* HOME — FINAL CINEMATIC LUXURY HERO CTA BANNER */}
      <section className="py-12 bg-[#F8FAF9] w-full px-4 sm:px-8">
        <div className="w-full relative rounded-[3rem] overflow-hidden shadow-2xl min-h-[460px] flex items-center justify-center border border-slate-200">
          {/* CINEMATIC HIMALAYAN BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
            alt="Majestic Alpine Mountain Range"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          />
          {/* MULTI-LAYERED GRADIENT OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/90 backdrop-blur-[2px]"></div>

          {/* INNER GLASS CONTENT */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
            {/* HERO-STYLE CAPSULE BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-xs font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Direct Basecamp Assistance</span>
            </div>

            {/* CURSIVE ELEGANT DISPLAY TITLE */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cursive text-white font-normal leading-tight tracking-wide drop-shadow-md">
              Ready to Plan Your Himalayan Adventure?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
              Tell us where you want to go, how long you have, and what kind of experience you're looking for. Our local Pahadi basecamp travel experts will craft your customized itinerary.
            </p>

            {/* QUICK BENEFITS ROW */}
            <div className="flex flex-wrap items-center justify-center gap-6 py-2 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5">⚡ Instant 7-Step Itinerary</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">💬 Direct WhatsApp Coordinator</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">🛡️ Zero Booking Markup</span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
              <Link
                href="/itinerary-planner"
                className="px-9 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Plan My Trip Now</span>
                <span className="font-mono text-sm">↗</span>
              </Link>

              <a
                href="https://wa.me/919816012345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Talk to Basecamp on WhatsApp</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
