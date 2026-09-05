'use client';

import React from 'react';

export default function CountUpStats() {
  const stats = [
    { target: '50+', label: 'Destinations Covered' },
    { target: '30+', label: 'Featured Alpine Treks' },
    { target: '1000+', label: 'Happy Backpackers' },
    { target: '5+ Yrs', label: 'Mountain Experience' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
      {stats.map((s, idx) => (
        <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-heading">{s.target}</div>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-2 block">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
