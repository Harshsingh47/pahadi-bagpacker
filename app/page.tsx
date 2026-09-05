import React from 'react';
import Link from 'next/link';
import CountUpStats from '@/components/CountUpStats';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" alt="Himalayan Mountains Pahadi Bagpackers" className="w-full h-full object-cover object-center brightness-65 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            HIMALAYAN TREKS • ROAD TRIPS • RENTALS • LOCAL PLANNING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase font-heading leading-tight">
            EXPLORE THE HIMALAYAS.<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">YOUR WAY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Discover Himachal Pradesh and Uttarakhand through alpine treks, scenic road trips, self-drive vehicles, and thoughtfully planned backpacker journeys.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/itinerary-planner" className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-105">
              Plan Your Trip &rarr;
            </Link>
            <Link href="/treks" className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-sm border border-slate-700 backdrop-blur-md transition-all">
              Explore Treks
            </Link>
          </div>

          {/* SEARCH / TRIP PLANNING PANEL */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 max-w-4xl mx-auto text-left">
            <form action="/itinerary-planner" method="GET" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">Destination</label>
                <select name="destination" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-emerald-500 outline-none">
                  <option value="all">Himachal & Uttarakhand</option>
                  <option value="manali">Manali & Solang Valley</option>
                  <option value="spiti">Spiti Valley Circuit</option>
                  <option value="rishikesh">Rishikesh & Chopta</option>
                  <option value="kasol">Kasol & Parvati Valley</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">Travel Season / Date</label>
                <input type="date" name="travel_date" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">Travelers</label>
                <select name="travelers" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-emerald-500 outline-none">
                  <option value="solo">Solo Backpacker (1)</option>
                  <option value="couple">Couple / Duo (2)</option>
                  <option value="small_group">Friends Group (3-6)</option>
                  <option value="large_group">Large Group (7+)</option>
                </select>
              </div>
              <div className="flex items-end">
                <button type="submit" className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md">
                  Plan My Trip
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">HIMALAYAN ESCAPES</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 uppercase font-heading">EXPLORE THE HIMALAYAS</h2>
              <p className="text-slate-400 text-base mt-2 max-w-xl">
                From iconic mountain towns to remote valleys, high-altitude landscapes and peaceful Himalayan escapes.
              </p>
            </div>
            <Link href="/destinations" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm uppercase tracking-wider">
              View All Destinations &rarr;
            </Link>
          </div>

          {/* HIMACHAL */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-8 rounded-full bg-emerald-500"></div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">HIMACHAL PRADESH</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80" alt="Manali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[11px] font-mono text-emerald-400 rounded-lg">2,050 m</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Manali</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Gateway to Solang, Rohtang Pass, and Old Manali backpacker vibe.</p>
                  </div>
                  <Link href="/destinations/manali" className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-white">
                    <span>Explore Manali</span> &rarr;
                  </Link>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80" alt="Spiti" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[11px] font-mono text-emerald-400 rounded-lg">3,800 m</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Spiti Valley</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Cold desert mountain realm, ancient monasteries & Chandratal Lake.</p>
                  </div>
                  <Link href="/destinations" className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-white">
                    <span>Explore Spiti</span> &rarr;
                  </Link>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80" alt="Kasol" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[11px] font-mono text-emerald-400 rounded-lg">1,580 m</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Kasol & Parvati</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">Riverside village, Tosh, Manikaran & Kheerganga hot springs.</p>
                  </div>
                  <Link href="/destinations" className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-white">
                    <span>Explore Kasol</span> &rarr;
                  </Link>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Bir" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-[11px] font-mono text-emerald-400 rounded-lg">1,525 m</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Bir Billing</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">World's #2 paragliding capital & Tibetan monasteries.</p>
                  </div>
                  <Link href="/destinations" className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-white">
                    <span>Explore Bir</span> &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* STATS COMPONENT */}
          <CountUpStats />

        </div>
      </section>

      {/* HOME — FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 relative border-t border-emerald-800/40 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 uppercase font-heading">
            READY TO PLAN YOUR HIMALAYAN ADVENTURE?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us where you want to go, how long you have, and what kind of experience you're looking for. Our local Pahadi travel experts will craft your customized itinerary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/itinerary-planner" className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider text-sm shadow-2xl transition-all">
              Plan My Trip Now &rarr;
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-sm border border-slate-700 transition-all">
              Talk to Us on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
