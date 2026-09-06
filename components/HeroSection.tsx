'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Users, Compass, ArrowUpRight, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

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
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-rotate destination badges every 2 seconds (2000ms) continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_ORBS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] pt-28 sm:pt-36 lg:pt-44 pb-10 sm:pb-16 flex flex-col justify-between overflow-hidden">
      {/* BACKGROUND IMAGE & SCENIC MOUNTAIN OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.jpg" 
          alt="Majestic Himalayan Snow Peaks & Alpine River Valley" 
          className="w-full h-full object-cover object-center brightness-95" 
        />
        {/* Soft, crisp gradient vignette for clear contrast without darkening scenery */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-[#F8FAF9]"></div>
      </div>

      {/* HERO CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN — ELEGANT TYPOGRAPHY, BADGE & CTAS */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* TOP PILL BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium shadow-lg">
              <span className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-emerald-500 text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> New
              </span>
              <span className="text-slate-100 font-medium tracking-wide">Travel Beyond Expectations</span>
            </div>

            {/* ELEGANT SERIF & CURSIVE HERO HEADING */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight font-normal drop-shadow-md">
              Travel Beyond the <span className="font-cursive italic text-emerald-300 font-normal">Ordinary</span>
            </h1>

            {/* DESCRIPTIVE BODY COPY */}
            <p className="text-xs sm:text-base text-slate-200 max-w-lg leading-relaxed font-normal drop-shadow-sm">
              Explore extraordinary Himalayan places, compare travel options, and uncover experiences that match your travel style. Travel smarter, discover more, and make every moment count.
            </p>

            {/* GLASSMORPHISM CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link 
                href="/destinations" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                Explore Destinations 
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </Link>
              
              <Link 
                href="/itinerary-planner" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105"
              >
                Plan Your Trip 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MOBILE ONLY HORIZONTAL DESTINATION PILLS */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar w-full">
              {HERO_ORBS.map((orb, index) => {
                const isActive = activeIdx === index;
                return (
                  <Link 
                    key={orb.id} 
                    href={orb.href}
                    onClick={() => setActiveIdx(index)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full shrink-0 transition-all border text-xs font-medium backdrop-blur-md ${
                      isActive 
                        ? 'bg-emerald-600/90 text-white border-emerald-400 shadow-md scale-105' 
                        : 'bg-white/15 text-slate-100 border-white/20 hover:bg-white/25'
                    }`}
                  >
                    <img src={orb.img} alt={orb.name} className="w-4 h-4 rounded-full object-cover shrink-0" />
                    <span className="truncate max-w-[130px]">{orb.name}</span>
                  </Link>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN — FLOATING CIRCULAR DESTINATION ORBS (DESKTOP ONLY) */}
          <div 
            className="hidden lg:flex lg:col-span-5 relative items-center justify-end"
          >
            
            {/* FLOATING ORBS LIST */}
            <div className="space-y-3 w-full max-w-xs sm:max-w-sm">
              {HERO_ORBS.map((orb, index) => {
                const isActive = activeIdx === index;
                
                // Curve stagger styling
                let indentClass = 'pr-0';
                if (index === 1 || index === 3) indentClass = 'pr-3 sm:pr-6';
                if (index === 2) indentClass = 'pr-6 sm:pr-10';

                return (
                  <Link 
                    key={orb.id} 
                    href={orb.href}
                    onClick={() => setActiveIdx(index)}
                    onMouseEnter={() => setActiveIdx(index)}
                    className={`flex items-center justify-end gap-3 sm:gap-4 group transition-all duration-300 transform ${indentClass} ${
                      isActive 
                        ? '-translate-x-2' 
                        : 'hover:-translate-x-1 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="text-right">
                      <h4 className={`transition-all duration-300 ${
                        isActive 
                          ? 'text-emerald-300 font-bold text-base sm:text-lg drop-shadow-md' 
                          : 'text-white font-medium text-sm group-hover:text-emerald-300'
                      }`}>
                        {orb.name}
                      </h4>
                      <span className={`text-[11px] sm:text-xs block transition-colors ${
                        isActive 
                          ? 'text-emerald-200 font-medium' 
                          : 'text-slate-300/80 font-normal'
                      }`}>
                        {orb.sub}
                      </span>
                    </div>

                    {/* TIGHT CIRCULAR IMAGE BADGE WITH FIXED ASPECT-SQUARE SIZE */}
                    <div className={`relative rounded-full overflow-hidden transition-all duration-300 shrink-0 aspect-square shadow-xl ${
                      isActive 
                        ? 'w-16 h-16 sm:w-20 sm:h-20 border-2 border-white ring-4 ring-emerald-400/80 shadow-emerald-500/40 scale-105' 
                        : 'w-12 h-12 sm:w-14 sm:h-14 border border-white/60 group-hover:border-white'
                    }`}>
                      <img src={orb.img} alt={orb.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* VERTICAL DOTS INDICATOR ON THE FAR RIGHT */}
            <div className="hidden sm:flex flex-col gap-2.5 ml-4 pl-3 z-20 border-l border-white/20 py-2 items-center">
              {HERO_ORBS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`transition-all duration-300 ${
                    activeIdx === index 
                      ? 'h-5 w-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/80 rounded-full'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* SEARCH / TRIP PLANNING PANEL INTEGRATED AT BOTTOM OF HERO */}
        <div className="mt-8 sm:mt-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/80 ring-1 ring-slate-900/5 text-left">
          <form action="/itinerary-planner" method="GET" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* DESTINATION FIELD */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Destination
              </label>
              <div className="relative">
                <select 
                  name="destination" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 font-medium focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all appearance-none cursor-pointer pr-8"
                >
                  <option value="all">Himachal & Uttarakhand</option>
                  <option value="manali">Manali & Solang Valley</option>
                  <option value="spiti">Spiti Valley Circuit</option>
                  <option value="rishikesh">Rishikesh & Chopta</option>
                  <option value="kasol">Kasol & Parvati Valley</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* TRAVEL SEASON / DATE FIELD */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                Travel Season / Date
              </label>
              <input 
                type="date" 
                name="travel_date" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 font-medium focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer" 
              />
            </div>

            {/* TRAVELERS FIELD */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                Travelers
              </label>
              <div className="relative">
                <select 
                  name="travelers" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 font-medium focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all appearance-none cursor-pointer pr-8"
                >
                  <option value="solo">Solo Backpacker (1)</option>
                  <option value="couple">Couple / Duo (2)</option>
                  <option value="small_group">Friends Group (3-6)</option>
                  <option value="large_group">Large Group (7+)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex items-end">
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 h-[38px]"
              >
                <span>Plan My Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
