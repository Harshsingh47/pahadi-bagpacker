'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface OrbItem {
  id: number;
  name: string;
  sub: string;
  img: string;
  href: string;
}

const HERO_ORBS: OrbItem[] = [
  { id: 0, name: 'Cameo Pass (Manali)', sub: 'Solang Valley, Himachal', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80', href: '/destinations/manali' },
  { id: 1, name: 'Spiti Cold Desert', sub: 'Key Monastery, Himachal', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=400&q=80', href: '/destinations/spiti-valley' },
  { id: 2, name: 'Chopta & Tungnath', sub: 'Garhwal, Uttarakhand', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=400&q=80', href: '/destinations/chopta' },
  { id: 3, name: 'Kasol & Parvati', sub: 'Tosh Village, Himachal', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=400&q=80', href: '/destinations/kasol' },
  { id: 4, name: 'Rishikesh Rafting', sub: 'Ganges River, Uttarakhand', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80', href: '/destinations/rishikesh' },
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(2); // Start highlighted on Chopta (middle)
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll / rotate badges every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_ORBS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-20 flex flex-col justify-between overflow-hidden">
      {/* BACKGROUND IMAGE & CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/hero-bg.jpg" alt="Majestic Himalayan Snow Peaks & Alpine River Valley" className="w-full h-full object-cover object-center brightness-90 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#F8FAF9]"></div>
      </div>

      {/* HERO CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN — CURSIVE TITLE, PILL BADGE & CTAS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* TOP PILL BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-medium shadow-lg animate-fade-in">
              <span className="px-2.5 py-0.5 rounded-full bg-white text-slate-950 font-bold text-[11px]">New</span>
              <span className="text-slate-200">Travel Beyond Expectations</span>
            </div>

            {/* CURSIVE ELEGANT HERO HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cursive text-white leading-tight font-normal drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] tracking-wide">
              Travel Beyond the Ordinary
            </h1>

            {/* DESCRIPTIVE BODY COPY */}
            <p className="text-sm sm:text-base text-slate-200 max-w-lg leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Explore extraordinary Himalayan places, compare travel options, and uncover experiences that match your travel style. Travel smarter, discover more, and make every moment count.
            </p>

            {/* GLASSMORPHISM CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/destinations" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all shadow-xl hover:scale-105">
                Explore Destinations <span className="text-base">↗</span>
              </Link>
              <Link href="/itinerary-planner" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all">
                Plan Your Trip &rarr;
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN — FLOATING CIRCULAR DESTINATION ORBS WITH FAR-RIGHT INDICATOR */}
          <div 
            className="lg:col-span-5 relative flex items-center justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* FLOATING ORBS LIST */}
            <div className="space-y-4 w-full max-w-sm">
              {HERO_ORBS.map((orb, index) => {
                const isActive = activeIdx === index;
                
                // Curve stagger styling
                let indentClass = 'pr-0';
                if (index === 1 || index === 3) indentClass = 'pr-4 sm:pr-8';
                if (index === 2) indentClass = 'pr-8 sm:pr-14';

                return (
                  <Link 
                    key={orb.id} 
                    href={orb.href}
                    onClick={() => setActiveIdx(index)}
                    onMouseEnter={() => setActiveIdx(index)}
                    className={`flex items-center justify-end gap-4 group transition-all duration-500 transform ${indentClass} ${isActive ? '-translate-x-3 scale-105' : 'hover:-translate-x-1 opacity-85 hover:opacity-100'}`}
                  >
                    <div className="text-right">
                      <h4 className={`text-lg font-serif-italic transition-colors drop-shadow-md ${isActive ? 'text-emerald-300 font-bold text-xl' : 'text-white group-hover:text-emerald-300'}`}>
                        {orb.name}
                      </h4>
                      <span className={`text-xs block transition-colors ${isActive ? 'text-emerald-200 font-semibold' : 'text-slate-300'}`}>
                        {orb.sub}
                      </span>
                    </div>

                    {/* CIRCULAR IMAGE BADGE */}
                    <div className={`relative rounded-full overflow-hidden transition-all duration-500 shrink-0 shadow-2xl ${
                      isActive 
                        ? 'w-24 h-24 sm:w-28 sm:h-28 border-2 border-white ring-4 ring-emerald-400/60 scale-105 shadow-emerald-500/30' 
                        : 'w-18 h-18 sm:w-20 sm:h-20 border-2 border-white/70 group-hover:border-white'
                    }`}>
                      <img src={orb.img} alt={orb.name} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* VERTICAL DOTS INDICATOR POSITIONED ON THE FAR RIGHT SIDE (BEHIND/BESIDE BADGES) */}
            <div className="hidden sm:flex flex-col gap-3.5 ml-6 pl-2 z-20 border-l border-white/10 py-4">
              {HERO_ORBS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIdx === index 
                      ? 'w-3 h-3 bg-white ring-4 ring-emerald-400/50 shadow-glow scale-125' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* SEARCH / TRIP PLANNING PANEL INTEGRATED AT BOTTOM OF HERO */}
        <div className="mt-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-200 text-left">
          <form action="/itinerary-planner" method="GET" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5">Destination</label>
              <select name="destination" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 outline-none">
                <option value="all">Himachal & Uttarakhand</option>
                <option value="manali">Manali & Solang Valley</option>
                <option value="spiti">Spiti Valley Circuit</option>
                <option value="rishikesh">Rishikesh & Chopta</option>
                <option value="kasol">Kasol & Parvati Valley</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5">Travel Season / Date</label>
              <input type="date" name="travel_date" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 outline-none" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5">Travelers</label>
              <select name="travelers" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 outline-none">
                <option value="solo">Solo Backpacker (1)</option>
                <option value="couple">Couple / Duo (2)</option>
                <option value="small_group">Friends Group (3-6)</option>
                <option value="large_group">Large Group (7+)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md">
                Plan My Trip
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
