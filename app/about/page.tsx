import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">OUR STORY & VISION</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading leading-tight">
          BORN IN THE MOUNTAINS.<br />
          <span className="text-emerald-700">BUILT FOR ADVENTURE.</span>
        </h1>
        <p className="text-slate-600 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Pahadi Bagpackers was founded by Himalayan mountain enthusiasts who grew up walking the pine trails of Old Manali and Rishikesh.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase font-heading">OUR MISSION</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Our goal is simple: to help travelers, backpackers, and families experience the authentic beauty of Himachal Pradesh and Uttarakhand without artificial agent commissions or tourist trap fluff.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Whether guiding high-altitude pass crossings like Hampta or Pin Parvati, providing mountain-ready 4x4 Thar vehicles, or estimating cab fares with zero hidden surcharges — we stand for absolute transparency and genuine local Pahadi hospitality.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80">
              <span className="text-emerald-700 text-lg block mb-1">🌲</span>
              <strong className="text-slate-900 block">Eco-Travel Principles</strong>
              <span className="text-slate-500 text-[11px]">Strict Leave-No-Trace camping policy on all Himalayan trails.</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80">
              <span className="text-emerald-700 text-lg block mb-1">🏔️</span>
              <strong className="text-slate-900 block">Local Guides Only</strong>
              <span className="text-slate-500 text-[11px]">100% of our trek leaders and drivers are native Himalayan residents.</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80" alt="Pahadi Team" className="w-full h-[450px] object-cover" />
        </div>
      </div>
    </div>
  );
}
