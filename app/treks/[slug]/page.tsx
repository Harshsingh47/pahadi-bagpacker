import React from 'react';
import Link from 'next/link';

export default function TrekDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'hampta-pass';
  const name = slug.replace('-', ' ').toUpperCase();

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full text-xs font-bold">Moderate Crossover Trek</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 uppercase font-heading">{name} TREK</h1>
            <p className="text-slate-300 text-base max-w-2xl mt-2">
              Experience the thrilling contrast between lush pine forests and high mountain passes.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-right shrink-0">
            <span className="text-xs text-slate-400 block uppercase">Starting Price per Trekker</span>
            <div className="text-3xl font-extrabold text-emerald-400">₹8,499</div>
            <span className="text-[11px] text-slate-400">Includes Meals, Camping Gear & Guide</span>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase font-heading">Day-by-Day Timeline</h2>
            
            <div className="space-y-4 relative pl-6 border-l-2 border-emerald-500/40 ml-4">
              <div className="relative pl-6">
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xs">01</div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs text-emerald-400 font-mono font-bold block mb-1">DAY 01 • ACCLIMATIZATION</span>
                  <h4 className="text-lg font-bold text-white mb-2">Drive to Jobra → Trek to Chika Basecamp (9,800 ft)</h4>
                  <p className="text-xs text-slate-300">Trek along Rani Nallah through pine, maple, and birch forests.</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xs">02</div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs text-emerald-400 font-mono font-bold block mb-1">DAY 02 • SUMMIT PASS DAY</span>
                  <h4 className="text-lg font-bold text-white mb-2">Chika to Balu Ka Ghera → Hampta Pass Summit (14,065 ft)</h4>
                  <p className="text-xs text-slate-300">Climb up to the pass top with 360-degree views of Indrasan and Deo Tibba peaks.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl sticky top-28">
              <h3 className="font-bold text-white text-lg mb-4">Book {name} Trek</h3>
              <Link href={`/booking?trek=${slug}`} className="w-full block text-center py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase rounded-xl shadow-lg">
                Proceed to Booking &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
