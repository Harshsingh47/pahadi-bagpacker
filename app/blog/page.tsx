import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    { slug: 'spiti-road-trip-checklist', title: 'The Ultimate Spiti Valley Road Trip Checklist', category: 'Spiti Road Trip', date: 'September 2, 2026', read: '6 min read', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80', desc: 'Essential guide on fuel planning, Rohtang & Atal permits, AMS altitude sickness precautions, and vehicle prep.' },
    { slug: 'trekking-packing-list', title: 'What to Pack for a High Altitude Himalayan Trek', category: 'Trekking Tips', date: 'August 28, 2026', read: '4 min read', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', desc: 'Complete gear packing list covering layer systems, waterproof boots, sleeping bags, and medical kits.' },
    { slug: 'offbeat-cafes-manali-rishikesh', title: 'Top 7 Offbeat Backpacker Cafes in Rishikesh & Old Manali', category: 'Uttarakhand Guide', date: 'August 15, 2026', read: '5 min read', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', desc: 'Discover cozy riverside cafes, wood-fired pizzas, and live acoustic Pahadi music spots loved by locals.' }
  ];

  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">HIMALAYAN STORIES & GUIDES</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading">TRAVEL STORIES & TIPS</h1>
          <p className="text-slate-500 text-base mt-3">
            Trekking advice, high-altitude pass permits, Spiti road trip guides, and backpacker safety tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <div key={a.slug} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold rounded-lg border border-emerald-200">{a.category}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 font-mono block mb-1">{a.date} • {a.read}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{a.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{a.desc}</p>
                </div>
                <Link href={`/blog/${a.slug}`} className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-white">
                  <span>Read Article</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
