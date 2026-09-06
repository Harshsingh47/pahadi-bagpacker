'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 relative overflow-hidden text-xs border-t border-slate-800">
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block bg-white px-5 py-3 rounded-2xl border border-emerald-500/30 shadow-xl hover:scale-105 transition-transform">
              <img src="/assets/logo-transparent.png" alt="Pahadi Bagpackers Logo" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>
            
            <p className="font-cursive text-emerald-400 text-xl font-normal tracking-wide">
              Your Adventure, Our Expertise
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-light">
              Premier Himalayan travel platform providing authentic alpine trekking expeditions, self-drive 4x4 rentals, outstation taxi transfers, and customized backpacker itineraries across Himachal Pradesh and Uttarakhand.
            </p>

            {/* QUICK SOCIAL PILLS */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://wa.me/919816012345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-300 hover:text-white font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>💬</span> WhatsApp Us
              </a>
              <a
                href="tel:+919816012345"
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>📞</span> +91 98160 12345
              </a>
            </div>
          </div>

          {/* COLUMN 2: POPULAR DESTINATIONS */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
              <span>DESTINATIONS</span>
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs font-light">
              <li><Link href="/destinations/manali" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Manali & Solang Valley</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Spiti Valley Cold Desert</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Kasol & Parvati Valley</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Bir Billing Paragliding</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Rishikesh Ganga Valley</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Kedarkantha Snow Summit</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Chopta & Tungnath</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
              <span>TRAVEL SERVICES</span>
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs font-light">
              <li><Link href="/taxi" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Outstation Taxi & Airport Transfers</Link></li>
              <li><Link href="/car-rental" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Self-Drive SUV & Thar Rentals</Link></li>
              <li><Link href="/bike-rental" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Royal Enfield Bike Rentals</Link></li>
              <li><Link href="/itinerary-planner" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> 7-Step Itinerary Wizard</Link></li>
              <li><Link href="/treks" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Guided Alpine Treks & Passes</Link></li>
              <li><Link href="/booking" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>›</span> Custom Group Expedition Booking</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: BASECAMPS & CONTACT */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
              <span>BASECAMP HUBS</span>
            </h4>

            <div className="space-y-3 text-slate-400 text-xs font-light">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block font-mono">🌲 HIMACHAL BASECAMP</span>
                <p className="text-white font-medium">Old Manali Basecamp</p>
                <p className="text-[11px]">Near Club House Road, Himachal Pradesh 175131</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block font-mono">🌊 UTTARAKHAND BASECAMP</span>
                <p className="text-white font-medium">Rishikesh Basecamp</p>
                <p className="text-[11px]">Tapovan High Bank, Rishikesh 249192</p>
              </div>

              <div className="pt-1 text-[11px]">
                <p className="text-slate-300 font-semibold">✉️ Email: <span className="text-emerald-400 font-normal">basecamp@pahadibagpackers.com</span></p>
                <p className="text-slate-300 font-semibold">🕒 Support: <span className="text-slate-400 font-normal">24/7 Backpacker Emergency Support</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Pahadi Bagpackers Pvt. Ltd. All rights reserved.</p>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono">
              🌲 Himachal Govt Registered
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-400 border border-teal-800 text-[10px] font-mono">
              🕉️ Uttarakhand Certified
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">Backpacker Safety</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
