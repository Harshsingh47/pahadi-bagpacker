'use client';

import React from 'react';

export default function CountUpStats() {
  const stats = [
    {
      target: '50+',
      label: 'Destinations Covered',
      sub: 'Himachal & Uttarakhand',
      icon: '🗺️'
    },
    {
      target: '30+',
      label: 'Featured Alpine Treks',
      sub: 'Guided Backpacker Trails',
      icon: '🏔️'
    },
    {
      target: '1,000+',
      label: 'Happy Backpackers',
      sub: '5-Star Rated Trips',
      icon: '🎒'
    },
    {
      target: '5+ Yrs',
      label: 'Mountain Experience',
      sub: 'Manali & Rishikesh Basecamps',
      icon: '⛰️'
    }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{s.icon}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform"></span>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                {s.target}
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-2 font-heading">
                {s.label}
              </h4>
              <p className="text-xs text-slate-400 mt-1 font-light">
                {s.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
