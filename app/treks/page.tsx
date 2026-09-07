'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, MapPin, Calendar, ShieldCheck, Mountain, Search, Sparkles, 
  ArrowRight, Filter, PhoneCall, CheckCircle2, ChevronRight, MessageCircle, Clock 
} from 'lucide-react';
import { TREKS, Trek } from '@/data/treks';

export default function TreksPage() {
  const [selectedState, setSelectedState] = useState<'All' | 'Himachal' | 'Uttarakhand'>('All');
  const [selectedDiff, setSelectedDiff] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered treks logic
  const filteredTreks = useMemo(() => {
    return TREKS.filter((t) => {
      // State Filter
      if (selectedState !== 'All' && t.state !== selectedState) return false;
      
      // Difficulty Filter
      if (selectedDiff !== 'All') {
        if (selectedDiff === 'Easy' && t.difficulty !== 'Easy') return false;
        if (selectedDiff === 'Moderate' && t.difficulty !== 'Moderate') return false;
        if (selectedDiff === 'Summit' && t.difficulty !== 'Challenging' && t.difficulty !== 'Extreme') return false;
      }
      
      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = t.name.toLowerCase().includes(q);
        const matchRegion = t.region.toLowerCase().includes(q);
        const matchState = t.state.toLowerCase().includes(q);
        const matchHighlights = t.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchName && !matchRegion && !matchState && !matchHighlights) return false;
      }

      return true;
    });
  }, [selectedState, selectedDiff, searchQuery]);

  const himachalTreks = useMemo(() => filteredTreks.filter(t => t.state === 'Himachal'), [filteredTreks]);
  const uttarakhandTreks = useMemo(() => filteredTreks.filter(t => t.state === 'Uttarakhand'), [filteredTreks]);

  const getWhatsAppUrl = (trekName: string) => {
    const text = encodeURIComponent(`Hello Pahadi Bagpackers! 🏔️ I am interested in booking the *${trekName}*. Please share available batch dates and details.`);
    return `https://wa.me/917018800958?text=${text}`;
  };

  return (
    <div className="bg-[#FAFBFB] min-h-screen text-slate-900 font-sans">
      
      {/* 🏞️ HERO BANNER */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/80 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80" 
            alt="Himalayan Mountain Treks Banner" 
            className="w-full h-full object-cover object-center brightness-75 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFB] via-transparent to-slate-950/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>HIMALAYAN ALPINE EXPEDITIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Discover Guided <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                Treks & Alpine Passes
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed font-normal drop-shadow">
              Explore 18+ handcrafted alpine trails across Himachal Pradesh & Uttarakhand. Certified Pahadi mountaineering leaders, 4-season gear, safety oxygen support, and transparent local pricing.
            </p>

            {/* QUICK STAT BADGES */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                <Mountain className="w-4 h-4 text-emerald-400" />
                <span>18+ Himalayan Trails</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified Native Guides</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Booking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔍 FILTER & SEARCH BAR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-30 mb-12">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200/90 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* SEARCH INPUT */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by trek name, region (e.g. Manali, Spiti, Chopta, Sankri)..."
                className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              />
            </div>

            {/* STATE TABS */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setSelectedState('All')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedState === 'All'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                All Regions
              </button>
              <button
                onClick={() => setSelectedState('Himachal')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedState === 'Himachal'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>🌲 Himachal</span>
              </button>
              <button
                onClick={() => setSelectedState('Uttarakhand')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedState === 'Uttarakhand'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>🕉️ Uttarakhand</span>
              </button>
            </div>

            {/* DIFFICULTY TABS */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {[
                { label: 'All Trails', val: 'All' },
                { label: '🌱 Easy Weekend', val: 'Easy' },
                { label: '🌲 Moderate', val: 'Moderate' },
                { label: '🏔️ High Summit', val: 'Summit' }
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setSelectedDiff(item.val)}
                  className={`text-xs px-3 py-1.5 rounded-xl border font-semibold transition-all whitespace-nowrap ${
                    selectedDiff === item.val
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-medium text-slate-500">
            <span>Showing <strong className="text-slate-900">{filteredTreks.length}</strong> Himalayan Treks</span>
            {(selectedState !== 'All' || selectedDiff !== 'All' || searchQuery !== '') && (
              <button 
                onClick={() => { setSelectedState('All'); setSelectedDiff('All'); setSearchQuery(''); }}
                className="text-emerald-700 hover:underline font-bold"
              >
                Reset Filters ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 🌲 HIMACHAL PRADESH TREKS CATALOG */}
      {(selectedState === 'All' || selectedState === 'Himachal') && himachalTreks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                ALPINE TRAILS & PASSES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>🌲 Himachal Pradesh Treks</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                  {himachalTreks.length} Trails
                </span>
              </h2>
            </div>
            <span className="hidden sm:block text-xs text-slate-500 font-medium">Manali • Parvati • Spiti • Kinnaur</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {himachalTreks.map((t) => (
              <TrekCard key={t.slug} trek={t} getWhatsAppUrl={getWhatsAppUrl} />
            ))}
          </div>

        </section>
      )}

      {/* 🕉️ UTTARAKHAND TREKS CATALOG */}
      {(selectedState === 'All' || selectedState === 'Uttarakhand') && uttarakhandTreks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
                GARHWAL & KUMAON SUMMITS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>🕉️ Uttarakhand Treks</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full font-bold">
                  {uttarakhandTreks.length} Trails
                </span>
              </h2>
            </div>
            <span className="hidden sm:block text-xs text-slate-500 font-medium">Sankri • Chopta • Chamoli • Mussoorie</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {uttarakhandTreks.map((t) => (
              <TrekCard key={t.slug} trek={t} getWhatsAppUrl={getWhatsAppUrl} />
            ))}
          </div>

        </section>
      )}

      {/* NO RESULTS FALLBACK */}
      {filteredTreks.length === 0 && (
        <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-3xl text-center space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl mx-auto">
            🔍
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Treks Match Your Search</h3>
          <p className="text-xs text-slate-500">
            We couldn't find any treks matching "{searchQuery}". Try searching for popular regions like "Manali", "Spiti", "Kedarkantha", or reset filters.
          </p>
          <button 
            onClick={() => { setSelectedState('All'); setSelectedDiff('All'); setSearchQuery(''); }}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* 🛡️ PAHADI SAFETY & TRUST ACCORDION BANNER */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🧗</div>
              <h4 className="font-extrabold text-sm text-slate-900">Certified Mountaineers</h4>
              <p className="text-xs text-slate-600">All trek leaders hold NIM / ABVIMAS A-grade certification with 8+ years alpine experience.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🏕️</div>
              <h4 className="font-extrabold text-sm text-slate-900">4-Season Expedition Gear</h4>
              <p className="text-xs text-slate-600">Heavy-duty dome tents, -10°C rated sleeping bags, microspikes, and gaiters provided.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🩺</div>
              <h4 className="font-extrabold text-sm text-slate-900">Medical Safety First</h4>
              <p className="text-xs text-slate-600">Portable medical oxygen cylinders, first-aid kits, and daily oxymeter/pulse checks included.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🍲</div>
              <h4 className="font-extrabold text-sm text-slate-900">Fresh Nutritious Food</h4>
              <p className="text-xs text-slate-600">Hot, freshly cooked vegetarian meals prepared daily by our local high-altitude cooks.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// 🎴 TREK CARD COMPONENT
function TrekCard({ trek, getWhatsAppUrl }: { trek: Trek; getWhatsAppUrl: (name: string) => string }) {
  return (
    <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] max-w-sm bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group">
      
      {/* CARD IMAGE & BADGES */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={trek.img} 
          alt={trek.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono border backdrop-blur-md ${
            trek.state === 'Himachal' 
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' 
              : 'bg-teal-950/80 text-teal-300 border-teal-500/30'
          }`}>
            {trek.state === 'Himachal' ? '🌲 Himachal' : '🕉️ Uttarakhand'}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-slate-950/80 text-slate-200 border border-white/20 backdrop-blur-md">
            {trek.difficulty}
          </span>
        </div>

        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium drop-shadow">
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>{trek.altitude}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{trek.duration}</span>
          </span>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-4 sm:p-5 text-left flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
            📍 {trek.region}
          </span>
          <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
            {trek.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal pt-1">
            {trek.overview}
          </p>
        </div>

        {/* HIGHLIGHT CHIPS */}
        <div className="space-y-1 pt-1 border-t border-slate-100">
          {trek.highlights.slice(0, 2).map((h, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium truncate">
              <span className="text-emerald-600 font-bold text-xs">✓</span>
              <span className="truncate">{h}</span>
            </div>
          ))}
        </div>

        {/* PRICE & BUTTON FOOTER */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-700 block">Price Quote</span>
            <span className="text-xs font-extrabold text-slate-800">WhatsApp Direct</span>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href={getWhatsAppUrl(trek.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link 
              href={`/treks/${trek.slug}`} 
              className="px-3.5 py-2 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all shadow flex items-center gap-1"
            >
              <span>View Trail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
