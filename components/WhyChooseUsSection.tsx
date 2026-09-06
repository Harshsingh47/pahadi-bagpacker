'use client';

import React from 'react';
import Link from 'next/link';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: '🏔️',
      badge: 'Local Basecamps',
      title: 'Native Pahadi Guides',
      desc: 'Led by local mountain experts born and raised in Old Manali & Rishikesh with deep alpine knowledge.'
    },
    {
      icon: '🛡️',
      badge: 'Safety First',
      title: 'Certified Expedition Gear',
      desc: 'High-altitude sub-zero tents, oxygen cylinders, medical first-aid & trained emergency responders.'
    },
    {
      icon: '💰',
      badge: 'Best Value',
      title: 'Zero Middleman Pricing',
      desc: 'Direct basecamp reservations without agency commission markups or hidden booking charges.'
    },
    {
      icon: '🏕️',
      badge: 'Authentic Vibe',
      title: 'Offbeat Stays & Camps',
      desc: 'Handpicked riverside campsites, authentic wooden Pahadi homestays & vibrant backpacker hostels.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-slate-800 w-full">
      {/* AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-xs font-semibold shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>The Pahadi Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cursive text-white font-normal leading-tight tracking-wide">
            Why Travel With Pahadi Bagpackers?
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2 font-light">
            We don't just book trips—we craft authentic, safe, and unforgettable Himalayan experiences.
          </p>
        </div>

        {/* 4 FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-7 rounded-3xl hover:border-emerald-500/60 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold rounded-full uppercase tracking-wider">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mt-2 font-light">
                  {f.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                <span>Explore Promise</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
