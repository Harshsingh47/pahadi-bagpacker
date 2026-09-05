'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [treksDropdownOpen, setTreksDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP ANNOUNCEMENT HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 98160 12345 / +91 88942 67890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-400" /> info@pahadibagpackers.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Basecamps: Old Manali & Rishikesh</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Trusted Himalayan Local Experts</span>
            <span className="text-slate-700">|</span>
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
        </div>
      </header>

      {/* MAIN STICKY NAVBAR */}
      <nav className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-900/30 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-nav rounded-2xl border border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center group py-1">
              <img src="/assets/logo-dark-mode.png" alt="Pahadi Bagpackers Logo" className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/" className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${pathname === '/' ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}>
                Home
              </Link>
              
              {/* DESTINATIONS MEGA MENU */}
              <div className="relative" onMouseEnter={() => setDestDropdownOpen(true)} onMouseLeave={() => setDestDropdownOpen(false)}>
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 flex items-center gap-1 transition-all">
                  Destinations <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {destDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-800">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <h5 className="font-bold text-xs text-emerald-400 uppercase tracking-wider">Himachal Pradesh</h5>
                        </div>
                        <div className="space-y-1 text-xs text-slate-300">
                          <Link href="/destinations/manali" className="block py-1 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Manali Valley</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Spiti Valley Offbeat</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Kasol & Parvati Valley</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Shimla & Kinnaur</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Bir Billing & Tirthan</Link>
                        </div>
                      </div>
                      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-slate-800">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <h5 className="font-bold text-xs text-amber-400 uppercase tracking-wider">Uttarakhand</h5>
                        </div>
                        <div className="space-y-1 text-xs text-slate-300">
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-amber-950 hover:text-amber-300">Rishikesh Adventure</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-amber-950 hover:text-amber-300">Chopta & Tungnath</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-amber-950 hover:text-amber-300">Auli Snow Slopes</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-amber-950 hover:text-amber-300">Valley of Flowers</Link>
                          <Link href="/destinations" className="block py-1 px-2 rounded hover:bg-amber-950 hover:text-amber-300">Kedarnath Trail</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* TREKS MEGA MENU */}
              <div className="relative" onMouseEnter={() => setTreksDropdownOpen(true)} onMouseLeave={() => setTreksDropdownOpen(false)}>
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 flex items-center gap-1 transition-all">
                  Treks <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {treksDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[420px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-fade-in">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <h5 className="font-bold text-slate-400 uppercase tracking-wider mb-2 text-[11px]">By Level</h5>
                        <Link href="/treks" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">🌱 Easy Treks</Link>
                        <Link href="/treks" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">🌲 Moderate Passes</Link>
                        <Link href="/treks" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">🏔️ High Altitude</Link>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-400 uppercase tracking-wider mb-2 text-[11px]">Featured Trails</h5>
                        <Link href="/treks/hampta-pass" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300 font-semibold text-emerald-400">Hampta Pass Trek</Link>
                        <Link href="/treks" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Kedarkantha Trek</Link>
                        <Link href="/treks" className="block py-1.5 px-2 rounded hover:bg-emerald-950 hover:text-emerald-300">Har Ki Dun Trek</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/taxi" className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">Taxi</Link>
              <Link href="/car-rental" className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">Car Rental</Link>
              <Link href="/bike-rental" className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">Bike Rental</Link>
              <Link href="/itinerary-planner" className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">Itineraries</Link>
              <Link href="/about" className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">About</Link>
            </div>

            {/* RIGHT CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <Link href="/itinerary-planner" className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all">
                <span>Plan Your Trip</span> &rarr;
              </Link>
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700">
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          <div className="relative ml-auto w-full max-w-xs bg-slate-900 border-l border-slate-800 h-full p-6 overflow-y-auto flex flex-col justify-between z-10 animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <Link href="/" className="inline-block py-1">
                  <img src="/assets/logo-dark-mode.png" alt="Pahadi Bagpackers Logo" className="h-10 w-auto object-contain" />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-6 space-y-3">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-emerald-400 font-bold">Home</Link>
                <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Destinations</Link>
                <Link href="/treks" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Treks & Trails</Link>
                <Link href="/taxi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Taxi & Transfers</Link>
                <Link href="/car-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Car Rental</Link>
                <Link href="/bike-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Bike Rental</Link>
                <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Itinerary Planner</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">About Us</Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Travel Stories</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-emerald-400">Contact & Basecamp</Link>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800">
              <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="w-full block text-center py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg">
                Plan Your Himalayan Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
