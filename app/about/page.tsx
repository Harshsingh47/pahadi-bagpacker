'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GovtCertificateModal from '@/components/GovtCertificateModal';
import {
  Sparkles,
  Compass,
  Mountain,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Heart,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Car,
  Bike,
  Calendar,
  Globe,
  FileText,
  Clock,
  Navigation,
  XCircle,
  Activity,
  ExternalLink
} from 'lucide-react';

export default function AboutPage() {
  const [certModalOpen, setCertModalOpen] = useState(false);
  // Replacement 1: The Pahadi Difference Comparison Data
  const pahadiDifference = [
    {
      title: 'Direct Native Guidance',
      standard: 'Resold through third-party agents with 25-40% hidden middleman markups.',
      pahadi: 'Direct booking with our Solan Head Office and local basecamps. Zero agent commission.',
    },
    {
      title: 'Safety & High-Altitude Preparedness',
      standard: 'Basic camping gear and outsourced drivers unfamiliar with high-pass snow conditions.',
      pahadi: 'IMF/ABVIMAS certified guides, pulse oximeters, oxygen canisters, and mountain-tested 4x4 vehicles.',
    },
    {
      title: 'Real-Time Mountain Flexibility',
      standard: 'Rigid fixed itineraries that break during sudden weather shifts or road closures.',
      pahadi: 'Dynamic rerouting supported by real-time ground updates across our HP & UK ground network.',
    },
    {
      title: 'Authentic Local Hospitality',
      standard: 'Crowded commercial tourist hotels and generic mass-catering buffets.',
      pahadi: 'Handpicked mountain homestays, fresh Pahadi meals, and quiet eco-campsites.',
    },
  ];

  // Replacement 2: Safety & Expedition Standards Data
  const safetyStandards = [
    {
      icon: Activity,
      title: 'Acclimatization & Altitude Protocols',
      description:
        'Every high-altitude trek and Spiti expedition features scientifically designed gain-loss elevation profiles to prevent altitude sickness (AMS).',
    },
    {
      icon: ShieldCheck,
      title: 'Emergency Medical Readiness',
      description:
        'Our trek leaders carry Wilderness First Aid (WFA) certification, portable oxygen cylinders, pulse oximeters, and medical-grade first aid kits.',
    },
    {
      icon: Car,
      title: 'Mountain-Tested Commercial Fleet',
      description:
        'All cabs and 4x4 Thar rentals carry commercial state permits, regular mechanical inspections, snow chains, and seasoned high-altitude drivers.',
    },
    {
      icon: Clock,
      title: 'Live Weather & Road Tracking',
      description:
        'Our Solan operations desk monitors real-time weather forecasts, BRO road statuses, and landslide advisories 24 hours a day.',
    },
  ];

  const whyChooseUsPillars = [
    {
      icon: Users,
      title: '100% Native Pahadi Team',
      description:
        'Every trek leader, driver, and coordinator was raised in these mountains. We know secret viewpoints, weather patterns, and safe routes better than any outsider.',
    },
    {
      icon: CheckCircle2,
      title: 'Zero Middleman Markup',
      description:
        'Direct quotes straight from our Solan office and local basecamps. No hidden travel agent commissions or inflated tourist surcharges.',
    },
    {
      icon: ShieldCheck,
      title: 'Govt Registered & Certified',
      description:
        'Himachal Tourism Registered (Regd. No. 241224/48355) and Uttarakhand Approved. Commercial taxi permits, all-India passes, and certified first-responder guides.',
    },
    {
      icon: Clock,
      title: '24/7 Ground Assistance',
      description:
        'Real-time ground support across all major transit hubs—Solan, Shimla, Chandigarh, Manali, Rishikesh, Dehradun, and Kaza.',
    },
  ];

  const servicesHub = [
    {
      icon: Mountain,
      title: 'High-Altitude Treks',
      description: '18+ beginner to alpine pass crossings across HP & UK with certified IMF guides.',
      link: '/treks',
      cta: 'Explore All Treks',
    },
    {
      icon: Car,
      title: 'Himalayan Taxi Network',
      description: 'Sightseeing cabs, 4x4 Spiti cabs, and airport transfers with verified drivers.',
      link: '/taxi',
      cta: 'Book Cabs',
    },
    {
      icon: Navigation,
      title: 'Car & Thar Rentals',
      description: 'Mountain-ready 4x4 SUV rentals and self-drive cars for rugged mountain terrain.',
      link: '/car-rental',
      cta: 'View Cars',
    },
    {
      icon: Bike,
      title: 'Mountain Bike Rentals',
      description: 'Royal Enfield Himalayan 450, Scram 411 & bikes in Manali and Rishikesh.',
      link: '/bike-rental',
      cta: 'Rent Bikes',
    },
    {
      icon: Globe,
      title: 'Curated Destinations',
      description: 'Custom travel plans across Manali, Spiti, Kasol, Rishikesh, Chopta, and Mussoorie.',
      link: '/destinations',
      cta: 'Explore Hubs',
    },
    {
      icon: Calendar,
      title: 'Custom Itineraries',
      description: 'Tailor-made itineraries for families, backpackers, solo travelers, and corporate teams.',
      link: '/contact',
      cta: 'Plan Custom Trip',
    },
  ];

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen pt-28 pb-20 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Native Himalayan Travel Pioneers</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-heading mb-6">
            WE BELONG TO THESE MOUNTAINS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600">
              WE SHOW YOU THEIR HEART.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Founded in Solan and rooted across the pine forests of Manali and holy waters of Rishikesh, Pahadi Bagpackers is a registered native travel collective dedicated to transparent, authentic, and safe Himalayan journeys.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto text-left">
            <div className="border-r border-slate-100 pr-4 last:border-0">
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">15,000+</span>
              <span className="text-xs text-slate-500 font-medium">Travelers Guided</span>
            </div>
            <div className="border-r border-slate-100 pr-4 last:border-0">
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-700 font-heading">100%</span>
              <span className="text-xs text-slate-500 font-medium">Native Pahadi Crew</span>
            </div>
            <div className="border-r border-slate-100 pr-4 last:border-0">
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">18+</span>
              <span className="text-xs text-slate-500 font-medium">Certified Alpine Treks</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-700 font-heading">₹0</span>
              <span className="text-xs text-slate-500 font-medium">Agent Middleman Fee</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl relative group">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
            alt="Himalayan Valley & Pines"
            className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-1 block">Solan • Manali • Rishikesh • Kaza</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">Empowering Mountain Communities Through Conscious Travel</h3>
              <p className="text-slate-200 text-xs sm:text-sm mt-2 font-normal line-clamp-2">
                From high-pass expedition gear to commercial taxi fleets, we keep revenue directly inside remote Himalayan villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PAHADI DIFFERENCE (COMPARISON GRID) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/70">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">THE PAHADI DIFFERENCE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Why Direct Native Booking Matters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Compare standard online travel portals with Pahadi Bagpackers&apos; direct native mountain collective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pahadiDifference.map((diff) => (
            <div key={diff.title} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-heading border-b border-slate-100 pb-3">
                {diff.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-0.5">
                      Standard Commercial Resellers
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed">{diff.standard}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-0.5">
                      Pahadi Bagpackers Native Collective
                    </span>
                    <p className="text-emerald-800 text-xs leading-relaxed font-medium">{diff.pahadi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US PILLARS */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">OUR PILLARS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Travelers Trust Pahadi Bagpackers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We combine deep local mountain expertise with professional ground reliability and government-backed safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES HUB */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">WHAT WE DO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Our Complete Himalayan Travel Hub
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From high-altitude trek expeditions to commercial cabs and bike rentals, explore our services designed for mountain adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesHub.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-50 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{service.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. HIMALAYAN SAFETY & EXPEDITION STANDARDS */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">SAFETY FIRST</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Uncompromised Mountain Safety Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              High-altitude passes and rugged Himalayan roads require discipline, certified medical gear, and experienced local leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyStandards.map((std) => {
              const IconComponent = std.icon;
              return (
                <div
                  key={std.title}
                  className="bg-[#FAFBFB] p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex items-start gap-5 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">{std.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{std.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TRUST & CERTIFICATIONS */}
      <section className="py-14 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-1">
                GOVERNMENT APPROVED & LICENSED
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading">Registered Himalayan Operator</h2>
              <p className="text-emerald-100/80 text-xs sm:text-sm mt-2 leading-relaxed">
                Pahadi Bagpackers operates with complete legal compliance, state commercial permits, and certified high-altitude safety equipment.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-emerald-300" />
                  <span className="font-bold text-sm">Himachal Tourism License</span>
                </div>
                <p className="text-emerald-100 text-xs mb-2">
                  Official Registration No: <strong className="text-white font-mono">241224/48355</strong>. Permanent Regd: <strong className="text-white font-mono">DTO-SLN-5-477/2025</strong>. Registered Head Office: Solan (HP).
                </p>
                <button
                  onClick={() => setCertModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
                >
                  <span>View & Validate Govt Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span className="font-bold text-sm">IMF Certified Trek Leaders</span>
                </div>
                <p className="text-emerald-100 text-xs">
                  All trek leaders hold Advanced Mountaineering Certification (ABVIMAS / NIM) and Wilderness First Aid credentials.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-5 h-5 text-emerald-300" />
                  <span className="font-bold text-sm">100% Commercial Fleet Permits</span>
                </div>
                <p className="text-emerald-100 text-xs">
                  Yellow-plate commercial taxis and self-drive vehicles with yellow pass state permits across HP, UK, Punjab & Delhi.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-emerald-300" />
                  <span className="font-bold text-sm">Zero Hidden Fees Contract</span>
                </div>
                <p className="text-emerald-100 text-xs">
                  Written price confirmation before travel for cab toll taxes, driver night charges, and trek permits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAVEL PHILOSOPHY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              <span>Eco-Travel & Conservation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-6 leading-tight">
              &ldquo;Take Only Memories. Leave Only Footprints.&rdquo;
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              We believe that true adventure leaves mountain passes cleaner than we found them. On all our treks across Himachal and Uttarakhand, Pahadi Bagpackers enforces a strict zero-single-use-plastic policy and mandatory waste pack-back protocols.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              By choosing Pahadi Bagpackers, you directly support local homestay owners, village mule porters, and native guides—ensuring tourism revenue builds sustainable Himalayan livelihoods.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="bg-[#FAFBFB] p-4 rounded-xl border border-slate-200">
                <span className="text-emerald-700 font-bold block mb-1">🌲 Eco-Camp Promise</span>
                <span className="text-slate-500 font-normal">Biodegradable camp waste & eco pit toilets on all high pass camps.</span>
              </div>
              <div className="bg-[#FAFBFB] p-4 rounded-xl border border-slate-200">
                <span className="text-emerald-700 font-bold block mb-1">🏡 Native Homestays</span>
                <span className="text-slate-500 font-normal">Authentic Himachali & Garhwali village meals cooked with local ingredients.</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
              alt="Himalayan Eco Camping"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 8. STRONG FINAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background light blob */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            READY FOR YOUR HIMALAYAN EXPEDITION?
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 max-w-3xl mx-auto leading-tight">
            Where Will the Mountains Take You?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you need a custom family trip itinerary, a mountain taxi quote, a self-drive Thar, or a high-altitude pass crossing—our native Solan basecamp team is ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20would%20like%20to%20plan%20a%20trip%20to%20Himachal%2FUttarakhand."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:01792-359853"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Call Office: 01792-359853</span>
            </a>

            <Link
              href="/treks"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Explore Treks</span>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => setCertModalOpen(true)}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>Regd. No.: 241224/48355</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </button>
            <span>•</span>
            <span>Solan Head Office: 233 Bhaktora Colony, Solan (HP)</span>
            <span>•</span>
            <span>Email: pahadibagpackers77@gmail.com</span>
          </div>
        </div>
      </section>

      {/* Govt Certificate Verification Modal */}
      <GovtCertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
      />
    </div>
  );
}
