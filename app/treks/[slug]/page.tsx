import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Compass, MapPin, Calendar, Clock, ShieldCheck, CheckCircle2, ArrowRight, 
  MessageCircle, Sparkles, AlertCircle, Mountain, User, ChevronRight, PhoneCall 
} from 'lucide-react';
import { TREKS, Trek } from '@/data/treks';

export function generateStaticParams() {
  return TREKS.map((t) => ({
    slug: t.slug
  }));
}

export default function TrekDetailPage({ params }: { params: { slug: string } }) {
  const trek = TREKS.find((t) => t.slug === params.slug) || TREKS[0];

  if (!trek) {
    notFound();
  }

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Pahadi Bagpackers! 🏔️ I want to request the price & batch availability for *${trek.name}* (${trek.state}):\n\n` +
      `📍 *Starting Point:* ${trek.startingPoint}\n` +
      `⏱️ *Duration:* ${trek.duration}\n` +
      `🏔️ *Max Altitude:* ${trek.altitude}\n\n` +
      `Please provide the best package price and batch availability.`
    );
    return `https://wa.me/917018800958?text=${text}`;
  };

  return (
    <div className="bg-[#FAFBFB] min-h-screen text-slate-900 font-sans">
      
      {/* 🏞️ SINGLE TREK HERO SECTION */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/80 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={trek.img} 
            alt={trek.name} 
            className="w-full h-full object-cover object-center brightness-75 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFB] via-transparent to-slate-950/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-left">
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link href="/treks" className="text-xs text-slate-300 hover:text-white transition-colors">
              Treks &rarr;
            </Link>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
              {trek.state === 'Himachal' ? '🌲 Himachal Pradesh' : '🕉️ Uttarakhand'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-slate-800 text-slate-200 border border-slate-700">
              {trek.difficulty} Grade
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {trek.name}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed font-normal drop-shadow">
            {trek.overview}
          </p>

          {/* QUICK STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white">
              <span className="text-[10px] text-slate-300 font-bold uppercase block">Max Altitude</span>
              <span className="text-sm sm:text-base font-extrabold text-emerald-400">{trek.altitude}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white">
              <span className="text-[10px] text-slate-300 font-bold uppercase block">Duration</span>
              <span className="text-sm sm:text-base font-extrabold text-white">{trek.duration}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white">
              <span className="text-[10px] text-slate-300 font-bold uppercase block">Starting Base</span>
              <span className="text-sm sm:text-base font-extrabold text-white">{trek.startingPoint}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white">
              <span className="text-[10px] text-slate-300 font-bold uppercase block">Best Season</span>
              <span className="text-sm sm:text-base font-extrabold text-teal-300">{trek.bestSeason}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 📄 MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* HIGHLIGHTS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4 text-left">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Expedition Highlights</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {trek.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DAY-BY-DAY ITINERARY TIMELINE */}
            {trek.itinerary && trek.itinerary.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-6 text-left">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                    DAY-BY-DAY ROUTE MAP
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Detailed Trek Itinerary
                  </h2>
                </div>

                <div className="space-y-6 relative pl-6 border-l-2 border-emerald-500/40 ml-4 pt-2">
                  {trek.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-6">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center text-emerald-700 font-extrabold text-xs shadow-sm">
                        0{day.day}
                      </div>
                      <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                          <h3 className="text-base font-extrabold text-slate-900">
                            {day.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700">
                            {day.altitude && <span className="bg-emerald-100 px-2 py-0.5 rounded">🏔️ {day.altitude}</span>}
                            {day.distance && <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded">🚶 {day.distance}</span>}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                          {day.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INCLUSIONS & EXCLUSIONS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4 text-left">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>What's Included in Package</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {trek.inclusions.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR — BOOKING WIDGET */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-6 sticky top-28 text-left">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">Trek Package Quote</span>
                <div className="text-xl font-extrabold text-slate-900 mt-1">Get Guaranteed Price</div>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  Includes Tents, Meals, Mountaineering Leader & Permits
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-emerald-600/25 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Batches on WhatsApp</span>
                </a>

                <Link
                  href={`/booking?trek=${trek.slug}`}
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Online Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Need Basecamp Support?</span>
                </div>
                <p className="text-[11px]">
                  Call our Pahadi expedition manager directly at <a href="tel:+917018800958" className="font-bold text-emerald-700 hover:underline">+91 70188 00958</a> or <a href="tel:01792359853" className="font-bold text-slate-800 hover:underline">01792-359853</a>.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
