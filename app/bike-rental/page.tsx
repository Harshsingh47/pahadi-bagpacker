import React from 'react';
import Link from 'next/link';

export default function BikeRentalPage() {
  const bikes = [
    { slug: 'himalayan-450', name: 'Royal Enfield Himalayan 450', spec: '452cc Liquid Cooled', price: '₹1,800', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80', desc: '40 bhp • Ride-by-Wire • TFT Navigation • Long Travel Suspension' },
    { slug: 'scram-411', name: 'Royal Enfield Scram 411', spec: '411cc Scrambler', price: '₹1,400', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80', desc: 'Agile urban scrambler built for mountain twists and valley bends.' },
    { slug: 'bmw-g310-gs', name: 'BMW G 310 GS Adventure', spec: 'Premium Tourer', price: '₹2,400', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80', desc: 'Refined German engineering for high-speed highway & mountain passes.' }
  ];

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">MOTORCYCLE EXPEDITIONS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">RIDE INTO THE MOUNTAINS</h1>
          <p className="text-slate-400 text-base mt-3">
            Royal Enfield Himalayan 450s, Scrams, and BMW tourers equipped for high-altitude passes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((b) => (
            <div key={b.slug} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-950 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-800">{b.spec}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{b.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{b.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Daily Rent</span>
                    <span className="text-xl font-extrabold text-emerald-400">{b.price}</span> <span className="text-xs text-slate-400">/ day</span>
                  </div>
                  <Link href={`/bike-rental/${b.slug}`} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl">
                    View Bike &rarr;
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
