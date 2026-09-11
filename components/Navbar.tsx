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
      <header className="bg-slate-950 border-b border-slate-800 text-slate-300 text-[11px] py-2 px-6 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 font-mono">
            <a href="tel:+917018800958" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" /> +91 70188 00958
            </a>
            <a href="mailto:pahadibagpackers77@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3 h-3 text-emerald-400" /> pahadibagpackers77@gmail.com
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-emerald-400" /> Head Office: Solan (HP)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono font-bold text-[10px]">
              📜 Regd. No.: 241224/48355
            </span>
            <span className="text-slate-700">|</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </header>

      {/* MAIN FLOATING GLASS PILL NAVBAR */}
      <nav className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-nav rounded-full border border-white/90 bg-white/90 backdrop-blur-xl px-5 sm:px-7 py-2 flex items-center justify-between shadow-xl shadow-slate-900/5 hover:border-emerald-500/30 transition-all duration-300">
            
            {/* BRAND LOGO */}
            <Link href="/" className="flex items-center group py-1">
              <img
                src="/assets/logo-transparent.png"
                alt="Pahadi Bagpackers Logo"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* DESKTOP NAV PILL LINKS */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                Home
              </Link>
              
              {/* DESTINATIONS MEGA MENU DROPDOWN */}
              <div
                className="relative group"
                onMouseEnter={() => setDestDropdownOpen(true)}
                onMouseLeave={() => setDestDropdownOpen(false)}
              >
                <button className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 ${
                  pathname.startsWith('/destinations')
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}>
                  <span>Destinations</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {destDropdownOpen && (
                  <div className="absolute top-full left-0 pt-3 w-[620px] z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-2xl p-5 animate-fade-in space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-cursive text-emerald-700 text-lg">All India Tours & Basecamps</span>
                        <Link href="/destinations" onClick={() => setDestDropdownOpen(false)} className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 uppercase tracking-wider">
                          View All Destinations →
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-200/60">
                          <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-emerald-200/60">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <h5 className="font-extrabold text-[11px] text-emerald-900 uppercase tracking-wider">Himachal & Spiti</h5>
                          </div>
                          <div className="space-y-0.5 text-xs text-slate-700 font-medium">
                            <Link href="/destinations/spiti-valley" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">🏜️ Spiti Expedition</Link>
                            <Link href="/destinations/manali" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">🏔️ Manali & Solang</Link>
                            <Link href="/destinations/kasol" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">🌲 Kasol & Parvati</Link>
                          </div>
                        </div>

                        <div className="bg-teal-50/50 p-3 rounded-2xl border border-teal-200/60">
                          <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-teal-200/60">
                            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                            <h5 className="font-extrabold text-[11px] text-teal-900 uppercase tracking-wider">Ladakh & UK</h5>
                          </div>
                          <div className="space-y-0.5 text-xs text-slate-700 font-medium">
                            <Link href="/destinations/leh-ladakh" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-teal-600 hover:text-white transition-all">🏔️ Leh & Ladakh</Link>
                            <Link href="/destinations/rishikesh" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-teal-600 hover:text-white transition-all">🌊 Rishikesh Ganga</Link>
                            <Link href="/destinations/chopta" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-teal-600 hover:text-white transition-all">🕉️ Chopta Tungnath</Link>
                          </div>
                        </div>

                        <div className="bg-amber-50/50 p-3 rounded-2xl border border-amber-200/60">
                          <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-amber-200/60">
                            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                            <h5 className="font-extrabold text-[11px] text-amber-900 uppercase tracking-wider">India Tours</h5>
                          </div>
                          <div className="space-y-0.5 text-xs text-slate-700 font-medium">
                            <Link href="/destinations/goa" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-amber-600 hover:text-white transition-all">🏖️ Goa Beaches</Link>
                            <Link href="/destinations/kerala" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-amber-600 hover:text-white transition-all">🌴 Kerala Backwaters</Link>
                            <Link href="/destinations/mumbai" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-amber-600 hover:text-white transition-all">🏙️ Mumbai City</Link>
                            <Link href="/destinations/gujarat" onClick={() => setDestDropdownOpen(false)} className="block py-1 px-2 rounded-xl hover:bg-amber-600 hover:text-white transition-all">🏜️ Gujarat Rann</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* TREKS MEGA MENU DROPDOWN */}
              <div
                className="relative group"
                onMouseEnter={() => setTreksDropdownOpen(true)}
                onMouseLeave={() => setTreksDropdownOpen(false)}
              >
                <button className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 ${
                  pathname.startsWith('/treks')
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}>
                  <span>Treks</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {treksDropdownOpen && (
                  <div className="absolute top-full left-0 pt-3 w-[440px] z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-2xl p-5 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <h5 className="font-extrabold text-slate-400 uppercase tracking-wider mb-2.5 text-[10px] font-mono">BY DIFFICULTY</h5>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-100 hover:text-emerald-900 font-bold transition-all">🌱 Easy Weekend Treks</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-100 hover:text-emerald-900 font-bold transition-all">🌲 Moderate Alpine Passes</Link>
                          <Link href="/treks" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-100 hover:text-emerald-900 font-bold transition-all">🏔️ High Altitude Summits</Link>
                        </div>
                        <div>
                          <h5 className="font-extrabold text-slate-400 uppercase tracking-wider mb-2.5 text-[10px] font-mono">FEATURED TRAILS</h5>
                          <Link href="/treks/hampta-pass" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-600 text-slate-800 hover:text-white font-bold transition-all">Hampta Pass Crossover</Link>
                          <Link href="/treks/kedarkantha" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-600 text-slate-800 hover:text-white font-bold transition-all">Kedarkantha Snow Summit</Link>
                          <Link href="/treks/har-ki-dun" onClick={() => setTreksDropdownOpen(false)} className="block py-1.5 px-2.5 rounded-xl hover:bg-emerald-600 text-slate-800 hover:text-white font-bold transition-all">Har Ki Dun Valley Trek</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/taxi"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/taxi'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                Taxi
              </Link>
              
              <Link
                href="/car-rental"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/car-rental'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                Car Rental
              </Link>

              <Link
                href="/bike-rental"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/bike-rental'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                Bike Rental
              </Link>

              <Link
                href="/itinerary-planner"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/itinerary-planner'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                Itineraries
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === '/about'
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                }`}
              >
                About
              </Link>
            </div>

            {/* RIGHT ACTION BUTTON & MOBILE MENU TOGGLE */}
            <div className="flex items-center gap-3">
              <Link
                href="/itinerary-planner"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all duration-300"
              >
                <span>Plan Your Trip</span>
                <span className="font-mono text-sm">↗</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
          <div className="relative ml-auto w-full max-w-xs bg-white text-slate-900 border-l border-slate-200 h-full p-6 overflow-y-auto flex flex-col justify-between z-10 animate-fade-in shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <Link href="/" className="inline-block py-1">
                  <img src="/assets/logo-transparent.png" alt="Pahadi Bagpackers Logo" className="h-10 w-auto object-contain" />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-2 font-bold text-xs uppercase tracking-wider">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full bg-emerald-50 text-emerald-800">Home</Link>
                <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Destinations</Link>
                <Link href="/treks" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Treks & Trails</Link>
                <Link href="/taxi" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Taxi & Transfers</Link>
                <Link href="/car-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Car Rental</Link>
                <Link href="/bike-rental" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Bike Rental</Link>
                <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Itinerary Planner</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">About Us</Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Travel Stories</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-full hover:bg-slate-100 text-slate-700">Contact & Basecamp</Link>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Link href="/itinerary-planner" onClick={() => setMobileMenuOpen(false)} className="w-full block text-center py-3.5 rounded-full bg-emerald-600 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-emerald-600/30">
                Plan Your Himalayan Trip ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
