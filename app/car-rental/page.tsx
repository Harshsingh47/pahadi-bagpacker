import React from 'react';
import Link from 'next/link';

export default function CarRentalPage() {
  const cars = [
    { slug: 'thar-4x4', name: 'Mahindra Thar 4x4', cat: '4x4 SUV', price: '₹4,500', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', desc: 'Hard Top 4x4 Convertible • Manual / Auto Petrol/Diesel' },
    { slug: 'scorpio-n', name: 'Mahindra Scorpio N 4XPLOR', cat: '7-Seater 4x4', price: '₹5,200', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80', desc: 'Full-size luxury 7-seater SUV with terrain response modes.' },
    { slug: 'creta-sx', name: 'Hyundai Creta SX', cat: 'Urban SUV', price: '₹3,500', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80', desc: 'Smooth automatic transmission for highway and valley cruising.' }
  ];

  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">SELF-DRIVE CAR RENTALS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading">CHOOSE YOUR RIDE</h1>
          <p className="text-slate-500 text-base mt-3">
            Explore Himachal & Uttarakhand on your own terms with mountain-tested SUVs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((c) => (
            <div key={c.slug} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">{c.cat}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{c.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{c.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Daily Rate</span>
                    <span className="text-xl font-extrabold text-emerald-700">{c.price}</span> <span className="text-xs text-slate-500">/ day</span>
                  </div>
                  <Link href={`/car-rental/${c.slug}`} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl">
                    View Car &rarr;
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
