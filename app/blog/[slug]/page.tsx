import React from 'react';
import Link from 'next/link';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'spiti-road-trip-checklist';

  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 mb-3">
          <Link href="/blog" className="hover:underline">Travel Stories</Link> &rarr; <span className="text-white">Spiti Valley Guide</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 uppercase font-heading leading-tight">
          THE ULTIMATE SPITI VALLEY ROAD TRIP CHECKLIST (2026 EDITION)
        </h1>
        
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>By Ramesh Thakur (Pahadi Lead Navigator)</span>
          <span>•</span>
          <span>September 2, 2026</span>
          <span>•</span>
          <span>6 Min Read</span>
        </div>

        <img src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80" alt="Spiti Valley" className="w-full h-96 object-cover rounded-3xl border border-slate-200/80" />

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <p className="text-base text-white font-medium">
            Traveling through Spiti Valley is unlike any other road trip in India. Dubbed the "Middle Land" between Tibet and India, Spiti is a cold desert high altitude realm where roads test both machine and rider endurance.
          </p>

          <h3 className="text-xl font-bold text-slate-900 uppercase font-heading">1. Vehicle Preparation & Ground Clearance</h3>
          <p>
            Whether driving a self-drive SUV like a Thar 4x4 or riding a Royal Enfield Himalayan 450, high ground clearance is mandatory. Water crossings (nallahs) like Malling Nallah and Batal water streams demand careful clutch control and momentum.
          </p>

          <h3 className="text-xl font-bold text-slate-900 uppercase font-heading">2. Acclimatization & AMS Precautions</h3>
          <p>
            Kaza sits at 3,800m (12,500 ft). Spend at least one night in Kalpa or Narkanda when entering via Shimla, or one night in Manali when taking the Atal Tunnel route. Carry Diamox, stay hydrated with warm water, and avoid rapid elevation gain.
          </p>

          <div className="p-6 bg-white border border-emerald-500/40 rounded-2xl">
            <h4 className="font-bold text-emerald-700 text-base mb-2">Want to Experience Spiti with Local Experts?</h4>
            <p className="text-xs text-slate-600 mb-4">Book our guided 7-Day Spiti Circuit SUV trip or rent a self-drive Thar 4x4 with full permit assistance.</p>
            <Link href="/itinerary-planner?dest=spiti" className="inline-block px-6 py-2.5 bg-emerald-500 text-slate-950 font-bold text-xs uppercase rounded-xl">Plan Spiti Trip &rarr;</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
