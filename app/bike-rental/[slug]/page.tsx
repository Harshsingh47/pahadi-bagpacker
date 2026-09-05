import React from 'react';
import Link from 'next/link';

export default function BikeDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'himalayan-450';
  const name = slug.replace('-', ' ').toUpperCase();

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full text-xs font-bold">Liquid Cooled 450cc</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 uppercase font-heading">{name}</h1>
            <p className="text-slate-300 text-base max-w-2xl mt-2">
              Built in the Himalayas for the Himalayas. 40 bhp liquid-cooled engine with Showa suspension.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-right shrink-0">
            <span className="text-xs text-slate-400 block uppercase">Daily Rental Price</span>
            <div className="text-3xl font-extrabold text-emerald-400">₹1,800 <span className="text-xs text-slate-400">/ day</span></div>
            <span className="text-[11px] text-slate-400">Security Deposit: ₹5,000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-800 h-96">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80" alt={name} className="w-full h-full object-cover" />
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-xs">
              <h3 className="font-bold text-white text-base">Book {name}</h3>
              <Link href={`/booking?bike=${slug}`} className="w-full block text-center py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase rounded-xl shadow-lg">
                Book Bike Now &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
