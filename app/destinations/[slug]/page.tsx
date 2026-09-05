import React from 'react';
import Link from 'next/link';

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'manali';
  const name = slug.replace('-', ' ').toUpperCase();

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* HERO */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-800">
          <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80" alt={name} className="w-full h-80 sm:h-96 object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">HIMALAYAN DESTINATION GUIDE</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-1 uppercase font-heading">{name} VALLEY</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-2xl font-bold text-white uppercase font-heading">Overview</h2>
            <p>
              Nestled in the high Himalayas, {name} is renowned for pristine pine forests, alpine rivers, and gateway access to high passes.
            </p>

            <h2 className="text-2xl font-bold text-white uppercase font-heading">Top Sights & Experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white mb-1">🌲 Old Town Culture Walk</h4>
                <p className="text-xs text-slate-400">Wooden architecture, local Pahadi cafes, and pine forests.</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white mb-1">⛷️ Solang Adventure Sports</h4>
                <p className="text-xs text-slate-400">Paragliding, skiing, zorbing & ropeway views.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Plan Your {name} Trip</h3>
              <p className="text-xs text-slate-400 mb-6">Customized 3-day to 7-day itineraries including cab transfers, homestays, and guided treks.</p>
              <Link href="/itinerary-planner" className="w-full block text-center py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
                Build Itinerary &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
