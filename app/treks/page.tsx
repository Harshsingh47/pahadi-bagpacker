import React from 'react';
import Link from 'next/link';

export default function TreksPage() {
  const treks = [
    { slug: 'hampta-pass', name: 'Hampta Pass Trek', state: 'Himachal', diff: 'Moderate', alt: '14,065 ft', days: '5 Days', price: '₹8,499', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', desc: 'Dramatic crossover trek from lush Kullu Valley to desolate Lahaul & Chandratal Lake.' },
    { slug: 'kedarkantha', name: 'Kedarkantha Winter Trek', state: 'Uttarakhand', diff: 'Easy - Moderate', alt: '12,500 ft', days: '5 Days', price: '₹7,200', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', desc: "India's premier winter snow summit trek through Govind National Park." },
    { slug: 'beas-kund', name: 'Beas Kund Glacier Trek', state: 'Himachal', diff: 'Easy', alt: '12,775 ft', days: '3 Days', price: '₹4,999', img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80', desc: 'Short weekend trek to the glacial lake origin of River Beas.' },
    { slug: 'har-ki-dun', name: 'Har Ki Dun Valley Trek', state: 'Uttarakhand', diff: 'Moderate', alt: '11,800 ft', days: '7 Days', price: '₹9,800', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', desc: 'Cradle of Shiva valley, ancient 3,000-year-old wooden villages.' }
  ];

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">HIMALAYAN ALPINE TRAILS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">FIND YOUR TRAIL</h1>
          <p className="text-slate-400 text-base mt-3">
            Guided expeditions and backpacker trails across Himachal Pradesh and Uttarakhand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((t) => (
            <div key={t.slug} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-56">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-950/90 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-800">
                  {t.state} • {t.diff}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-slate-200 text-xs font-mono rounded-lg">{t.alt}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{t.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Starting Price</span>
                    <span className="text-lg font-extrabold text-emerald-400">{t.price}</span>
                  </div>
                  <Link href={`/treks/${t.slug}`} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
                    View Trail &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
