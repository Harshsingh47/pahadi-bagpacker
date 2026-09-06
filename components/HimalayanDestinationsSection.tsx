'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Destination {
  slug: string;
  name: string;
  region: 'himachal' | 'uttarakhand';
  altitude: string;
  rating: string;
  reviews: string;
  duration: string;
  price: string;
  tag: string;
  highAltitude: boolean;
  image: string;
  description: string;
  slugUrl: string;
}

export default function HimalayanDestinationsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'himachal' | 'uttarakhand' | 'highAltitude'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const destinations: Destination[] = [
    {
      slug: 'manali',
      name: 'Manali & Solang Valley',
      region: 'himachal',
      altitude: '2,050 m',
      rating: '4.9',
      reviews: '240+',
      duration: '3-5 Days',
      price: '₹4,999',
      tag: 'Alpine & Snow',
      highAltitude: false,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      description: 'Gateway to Solang adventure sports, Rohtang Pass glaciers & vibrant Old Manali cafes.',
      slugUrl: '/destinations/manali'
    },
    {
      slug: 'spiti-valley',
      name: 'Spiti Valley',
      region: 'himachal',
      altitude: '3,800 m',
      rating: '4.95',
      reviews: '180+',
      duration: '7-9 Days',
      price: '₹12,500',
      tag: 'Cold Desert',
      highAltitude: true,
      image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
      description: 'Surreal high-altitude desert, 1,000-year-old Key Monastery & turquoise Chandratal Lake.',
      slugUrl: '/destinations'
    },
    {
      slug: 'kasol-parvati',
      name: 'Kasol & Parvati Valley',
      region: 'himachal',
      altitude: '1,580 m',
      rating: '4.85',
      reviews: '310+',
      duration: '3-4 Days',
      price: '₹3,999',
      tag: 'Backpacker Hub',
      highAltitude: false,
      image: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80',
      description: 'Pine-forested riverside escape, Tosh village trails & natural Kheerganga hot springs.',
      slugUrl: '/destinations'
    },
    {
      slug: 'bir-billing',
      name: 'Bir Billing',
      region: 'himachal',
      altitude: '1,525 m',
      rating: '4.9',
      reviews: '190+',
      duration: '2-3 Days',
      price: '₹4,499',
      tag: 'Paragliding Capital',
      highAltitude: false,
      image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80',
      description: "Soar over lush tea gardens at Asia's highest paragliding takeoff point & peaceful monasteries.",
      slugUrl: '/destinations'
    },
    {
      slug: 'rishikesh',
      name: 'Rishikesh & Ganga Valley',
      region: 'uttarakhand',
      altitude: '340 m',
      rating: '4.92',
      reviews: '420+',
      duration: '2-4 Days',
      price: '₹2,999',
      tag: 'Rafting & Yoga',
      highAltitude: false,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      description: 'Thrill white-water rafting on the emerald Ganges, cliff jumping & iconic evening Ganga Aarti.',
      slugUrl: '/destinations'
    },
    {
      slug: 'kedarkantha',
      name: 'Kedarkantha Summit',
      region: 'uttarakhand',
      altitude: '3,810 m',
      rating: '4.96',
      reviews: '350+',
      duration: '5 Days',
      price: '₹7,200',
      tag: 'Snow Trek',
      highAltitude: true,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      description: 'Premier winter snow summit trek through dense pine clearings in Govind National Park.',
      slugUrl: '/destinations'
    },
    {
      slug: 'chopta-tungnath',
      name: 'Chopta & Tungnath',
      region: 'uttarakhand',
      altitude: '2,680 m',
      rating: '4.91',
      reviews: '160+',
      duration: '3-4 Days',
      price: '₹5,499',
      tag: 'Mini Switzerland',
      highAltitude: true,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      description: 'Velvet Bugyal meadows leading up to the world highest Shiva temple at Tungnath & Chandrashila.',
      slugUrl: '/destinations'
    },
    {
      slug: 'dharamshala',
      name: 'Dharamshala & McLeodganj',
      region: 'himachal',
      altitude: '1,457 m',
      rating: '4.88',
      reviews: '210+',
      duration: '3-4 Days',
      price: '₹4,200',
      tag: 'Tibetan Heritage',
      highAltitude: false,
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      description: 'Serene abode of His Holiness Dalai Lama, cedar forest trails & popular Triund ridge trek.',
      slugUrl: '/destinations'
    }
  ];

  const filteredDestinations = destinations.filter((item) => {
    if (activeFilter === 'himachal') return item.region === 'himachal';
    if (activeFilter === 'uttarakhand') return item.region === 'uttarakhand';
    if (activeFilter === 'highAltitude') return item.highAltitude;
    return true;
  });

  const N = filteredDestinations.length;
  // Triplicated display list for perpetual 360-degree infinite loop
  const displayList = N > 0 ? [...filteredDestinations, ...filteredDestinations, ...filteredDestinations] : [];

  // Start in the middle copy (index N)
  const [currentIndex, setCurrentIndex] = useState(N);

  // Reset index to middle copy on filter change
  useEffect(() => {
    setEnableTransition(false);
    setCurrentIndex(N);
  }, [activeFilter, N]);

  // Seamless loop reset when crossing boundaries
  useEffect(() => {
    if (N === 0) return;

    if (currentIndex >= 2 * N) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(currentIndex - N);
      }, 700);
      return () => clearTimeout(timer);
    }

    if (currentIndex < N) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(currentIndex + N);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, N]);

  // Smooth auto-scroll timer every 3.5 seconds
  useEffect(() => {
    if (isPaused || N === 0) return;

    const interval = setInterval(() => {
      setEnableTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, N]);

  const handlePrev = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Card dimensions for calculation: 340px width + 28px gap = 368px step
  const cardWidth = 340;
  const gap = 28;
  const step = cardWidth + gap;

  return (
    <section className="py-16 bg-[#F8FAF9] relative overflow-hidden w-full">
      {/* DECORATIVE AMBIENT BACKGROUND GLOWS MATCHING HERO THEME */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* HEADER & FILTER TABS (FULL SCREEN WIDTH) */}
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* SECTION HEADER MATCHING HERO SECTION TYPOGRAPHY & BADGE STYLING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            {/* HERO-STYLE CAPSULE BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-sm mb-3">
              <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px] tracking-wider uppercase">Handcrafted</span>
              <span>Himalayan Escapes & Basecamps</span>
            </div>

            {/* CURSIVE ELEGANT DISPLAY HEADING MATCHING HERO TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cursive text-slate-900 font-normal leading-tight tracking-wide">
              Explore Beyond the Ordinary
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mt-2 leading-relaxed">
              From iconic alpine mountain towns to high-altitude cold deserts, compare handpicked destinations and make every Pahadi journey count.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span>View All 16 Destinations</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>

        {/* HERO-STYLED PILL FILTER TABS */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-b border-slate-200/80">
          {[
            { id: 'all', label: '🏔️ All Escapes', count: destinations.length },
            { id: 'himachal', label: '🌲 Himachal Pradesh', count: destinations.filter((d) => d.region === 'himachal').length },
            { id: 'uttarakhand', label: '🌊 Uttarakhand', count: destinations.filter((d) => d.region === 'uttarakhand').length },
            { id: 'highAltitude', label: '❄️ High Altitude (>2,500m)', count: destinations.filter((d) => d.highAltitude).length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 scale-105 ring-2 ring-emerald-400/50'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 hover:text-slate-900 shadow-sm'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                  activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* FULL SCREEN EDGE-TO-EDGE SPOTLIGHT CAROUSEL TRACK */}
      <div
        className="w-full relative py-6 overflow-hidden z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* FLOATING LEFT SIDE ARROW */}
        <button
          onClick={handlePrev}
          aria-label="Previous destination"
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/95 text-slate-900 hover:bg-emerald-600 hover:text-white border border-slate-200/90 shadow-2xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center font-black text-2xl hover:scale-110 group cursor-pointer"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">‹</span>
        </button>

        {/* FLOATING RIGHT SIDE ARROW */}
        <button
          onClick={handleNext}
          aria-label="Next destination"
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/95 text-slate-900 hover:bg-emerald-600 hover:text-white border border-slate-200/90 shadow-2xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center font-black text-2xl hover:scale-110 group cursor-pointer"
        >
          <span className="group-hover:translate-x-0.5 transition-transform">›</span>
        </button>

        {/* FULL SCREEN SILKY SLIDING TRACK */}
        <div
          className={`flex items-center gap-7 py-6 ${
            enableTransition ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''
          }`}
          style={{
            transform: `translateX(calc(50vw - ${currentIndex * step + cardWidth / 2}px))`
          }}
        >
          {displayList.map((item, index) => {
            const isCenter = currentIndex === index;

            return (
              <div
                key={`${item.slug}-${index}`}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentIndex(index);
                }}
                className={`w-[340px] flex-shrink-0 bg-white overflow-hidden cursor-pointer flex flex-col justify-between ${
                  enableTransition ? 'transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''
                } ${
                  isCenter
                    ? 'scale-105 lg:scale-110 z-20 opacity-100 border-2 border-emerald-500 ring-4 ring-emerald-500/30 shadow-[0_30px_70px_-15px_rgba(5,150,105,0.35)] rounded-[2.5rem]'
                    : 'scale-95 z-10 opacity-70 hover:opacity-100 border border-slate-200/90 shadow-lg rounded-[2.2rem]'
                }`}
              >
                {/* IMAGE CONTAINER WITH RICH GRADIENT OVERLAY */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover ${
                      enableTransition ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''
                    } ${isCenter ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>

                  {/* TOP BADGES */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full backdrop-blur-md shadow-md ${
                      isCenter
                        ? 'bg-emerald-600 text-white border border-emerald-400'
                        : 'bg-white/90 text-[#047857] border border-white/50'
                    }`}>
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-white text-[11px] font-mono font-bold rounded-full shadow-md flex items-center gap-1">
                      <span>📍</span> {item.altitude}
                    </span>
                  </div>

                  {/* RATING FLOATING BADGE */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 px-3 py-1 bg-slate-900/85 backdrop-blur-md rounded-full text-amber-400 font-bold text-xs border border-white/10 shadow-sm">
                    <span>★</span>
                    <span className="text-white font-semibold">{item.rating}</span>
                    <span className="text-slate-400 text-[10px]">({item.reviews})</span>
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-[11px] uppercase tracking-wider font-bold text-emerald-700">
                      <div className="flex items-center gap-2">
                        <span>{item.region === 'himachal' ? 'Himachal Pradesh' : 'Uttarakhand'}</span>
                        <span>•</span>
                        <span className="text-slate-400 font-normal">{item.duration}</span>
                      </div>
                      {isCenter && (
                        <span className="text-[10px] text-emerald-600 font-mono font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          ★ Highlighted
                        </span>
                      )}
                    </div>
                    <h3 className={`font-bold transition-colors duration-300 ${
                      isCenter ? 'text-2xl font-black text-slate-900' : 'text-xl text-slate-800'
                    }`}>
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* FOOTER ACTION BUTTON */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={item.slugUrl}
                      className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                        isCenter
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-600/30'
                          : 'bg-slate-900 hover:bg-emerald-600 text-white'
                      }`}
                    >
                      <span>Explore Destination</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform font-mono">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
