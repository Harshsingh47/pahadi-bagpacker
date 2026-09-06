'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      if (window.scrollY > 30) {
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
      <header className="bg-slate-100 border-b border-slate-200 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-700 font-medium">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 98160 12345 / +91 88942 67890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-600" /> info@pahadibagpackers.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-600" /> Basecamps: Old Manali & Rishikesh</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="font-semibold text-emerald-700">Trusted Himalayan Local Experts</span>
            <span className="text-slate-300">|</span>
            <Link href="/faq" className="hover:text-emerald-700 transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-emerald-700 transition-colors">Contact</Link>
          </div>
        </div>
      </header>

      {/* MAIN STICKY NAVBAR */}
      <nav className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-nav rounded-2xl border border-slate-200/80 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg shadow-slate-900/5">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center group py-1">
              <img src="/assets/logo-transparent.png" alt="Pahadi Bagpackers Logo" className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/" className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${pathname === '/' ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100'}`}>
                Home
              </Link>
              
              {/* DESTINATIONS MEGA MENU */}
              <div className="relative group" onMouseEnter={() => setDestDropdownOpen(true)} onMouseLeave={() => setDestDropdownOpen(false)}>
                <button className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 flex items-center gap-1 transition-all">
                  Destinations <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {destDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[480px] z-50">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <h5 className="font-bold text-xs text-emerald-800 uppercase tracking-wider">Himachal Pradesh</h5>
                          </div>
                          <div className="space-y-1 text-xs text-slate-700 font-medium">
                            <Link href="/destinations/manali" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 transition-colors">Manali Valley</Link>
                            <Link href="/destinations/spiti-valley" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 transition-colors">Spiti Valley Offbeat</Link>
                            <Link href="/destinations/kasol" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 transition-colors">Kasol & Parvati Valley</Link>
                            <Link href="/destinations" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 transition-colors">Shimla & Kinnaur</Link>
                            <Link href="/destinations/bir-billing" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 transition-colors">Bir Billing & Tirthan</Link>
                          </div>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                            <h5 className="font-bold text-xs text-amber-800 uppercase tracking-wider">Uttarakhand</h5>
                          </div>
                          <div className="space-y-1 text-xs text-slate-700 font-medium">
                            <Link href="/destinations/rishikesh" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors">Rishikesh Adventure</Link>
                            <Link href="/destinations/chopta" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors">Chopta & Tungnath</Link>
                            <Link href="/destinations" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors">Auli Snow Slopes</Link>
                            <Link href="/destinations" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors">Valley of Flowers</Link>
                            <Link href="/destinations" onClick={() => setDestDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors">Kedarnath Trail</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* TREKS MEGA MENU */}
              <div className="relative group" onMouseEnter={() => setTreksDropdownOpen(true)} onMouseLeave={() => setTreksDropdownOpen(false)}>
                <button className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 flex items-center gap-1 transition-all">
                  Treks <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>
                {treksDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[420px] z-50">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 animate-fade-in">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <h5 className="font-bold text-slate-500 uppercase tracking-wider mb-2 text-[11px]">By Level</h5>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 font-medium transition-colors">🌱 Easy Treks</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 font-medium transition-colors">🌲 Moderate Passes</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 font-medium transition-colors">🏔️ High Altitude</Link>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-500 uppercase tracking-wider mb-2 text-[11px]">Featured Trails</h5>
                          <Link href="/treks/hampta-pass" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 text-emerald-800 font-bold transition-colors">Hampta Pass Trek</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 font-medium transition-colors">Kedarkantha Trek</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2 rounded hover:bg-emerald-100 hover:text-emerald-900 font-medium transition-colors">Har Ki Dun Trek</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/taxi" className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-all">Taxi</Link>
              <Link href="/car-rental" className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-all">Car Rental</Link>
              <Link href="/bike-rental" className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-all">Bike Rental</Link>
              <Link href="/itinerary-planner" className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-all">Itineraries</Link>
              <Link href="/about" className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-all">About</Link>
            </div>

            {/* RIGHT CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <Link href="/itinerary-planner" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all">
                <span>Plan Your Trip</span> &rarr;
              </Link>
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200">
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
          <div className="relative ml-auto w-full max-w-xs bg-white text-slate-900 border-l border-slate-200 h-full p-6 overflow-y-auto flex flex-col justify-between z-10 animate-fade-in shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <Link href="/" className="inline-block py-1">
                  <img src="/assets/logo-transparent.png" alt="Pahadi Bagpackers Logo" className="h-10 w-auto object-contain" />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-6 space-y-3 font-semibold text-sm">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-emerald-700 font-bold">Home</Link>
                <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Destinations</Link>
                <Link href="/treks" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Treks & Trails</Link>
                <Link href="/taxi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Taxi & Transfers</Link>
                <Link href="/car-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Car Rental</Link>
                <Link href="/bike-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Bike Rental</Link>
                <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Itinerary Planner</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">About Us</Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Travel Stories</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-700">Contact & Basecamp</Link>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200">
              <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="w-full block text-center py-3 rounded-xl bg-emerald-600 text-white font-bold uppercase tracking-wider text-xs shadow-lg">
                Plan Your Himalayan Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
