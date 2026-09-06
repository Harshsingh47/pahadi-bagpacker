'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowUpRight, Sparkles, Mountain, Car, Bike, Home } from 'lucide-react';

export default function AdventureCategoriesSection() {
  const categories = [
    {
      title: 'Alpine Treks & Passes',
      tag: 'High Altitude Expeditions',
      count: '14 Active Trails',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      link: '/treks',
      badge: 'Trek Expeditions',
      icon: Mountain
    },
    {
      title: 'Self-Drive Cars & Bikes',
      tag: 'Himalayan 450 & Thar 4x4',
      count: '25+ Rental Vehicles',
      img: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80',
      link: '/bike-rental',
      badge: 'Motorcycles & SUVs',
      icon: Bike
    },
    {
      title: 'Outstation Taxis & Transfers',
      tag: 'Chandigarh, Manali, Rishikesh',
      count: '24/7 Basecamp Fleet',
      img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      link: '/taxi',
      badge: 'Direct Transfers',
      icon: Car
    },
    {
      title: 'Offbeat Homestays & Camps',
      tag: 'Riverside Tents & Hostels',
      count: '40+ Verified Stays',
      img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80',
      link: '/destinations',
      badge: 'Backpacker Stays',
      icon: Home
    }
  ];

  return (
    <section className="py-16 bg-[#F8FAF9] w-full">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs mb-3">
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Explore
              </span>
              <span>Find Your Travel Style</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Browse Expeditions by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700">Category</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mt-2 leading-relaxed font-normal">
              Whether you want to summit high-altitude alpine passes, rent a 4x4 Thar, or book a private outstation taxi, we have you covered.
            </p>
          </div>

          <Link
            href="/itinerary-planner"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>Plan Custom Trip</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            
            return (
              <Link
                key={idx}
                href={c.link}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden group hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[380px]"
              >
                {/* IMAGE WRAPPER */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {c.badge}
                  </span>
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-slate-100 text-[11px] font-semibold rounded-full border border-slate-700/60 shadow-md">
                    {c.count}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 block mb-1.5">
                      {c.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {c.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                    <span>Explore Category</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
