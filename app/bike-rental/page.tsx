'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Search,
  Settings,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  FileText,
  Clock,
  Compass,
  Navigation,
  Check,
  Wrench,
  Shield,
  Zap,
  Award,
  Info
} from 'lucide-react';

interface Bike {
  id: string;
  name: string;
  category: 'Adventure Tourers' | 'Scramblers & Classics' | 'Premium ADV';
  engine: string;
  power: string;
  mileage: string;
  suspension: string;
  dailyPrice: string;
  deposit: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export default function BikeRentalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pickupDepot, setPickupDepot] = useState<string>('Manali Basecamp Depot');
  const [returnDepot, setReturnDepot] = useState<string>('Same as Pickup');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');

  const bikes: Bike[] = [
    {
      id: 'himalayan-450',
      name: 'Royal Enfield Himalayan 450',
      category: 'Adventure Tourers',
      engine: '452cc Liquid-Cooled Sherpa',
      power: '40.0 BHP | 40 Nm',
      mileage: '28 km/l',
      suspension: '200mm Long Travel (Showa)',
      dailyPrice: '₹1,800',
      deposit: '₹5,000',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
      tag: 'Most Popular for High Passes',
      description: 'The ultimate modern Himalayan tourer. Features the liquid-cooled Sherpa 450 engine, TFT Tripper navigation with Google Maps, and long travel suspension.',
      features: ['452cc Liquid Cooled Sherpa', 'TFT Tripper Screen with Maps', 'Switchable Rear ABS', 'Ride-by-Wire Throttle'],
      recommendedFor: 'Spiti Valley Circuit, Manali-Leh Highway, Chandratal & Kunzum Pass',
    },
    {
      id: 'scram-411',
      name: 'Royal Enfield Scram 411',
      category: 'Scramblers & Classics',
      engine: '411cc Air-Cooled LS',
      power: '24.3 BHP | 32 Nm',
      mileage: '32 km/l',
      suspension: '190mm Front Travel',
      dailyPrice: '₹1,400',
      deposit: '₹4,000',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
      tag: 'Agile Valley Explorer',
      description: 'Agile scrambler with a 19-inch front wheel built for smooth cornering along Kullu, Parvati, and Tirthan valley roads.',
      features: ['19-inch Front Wheel', 'Dual-Channel ABS', 'Plush Single Seat', 'High Ground Clearance'],
      recommendedFor: 'Kasol, Tosh, Tirthan Valley, Shimla & Local Sightseeing',
    },
    {
      id: 'bmw-g310-gs',
      name: 'BMW G 310 GS Adventure',
      category: 'Premium ADV',
      engine: '313cc Liquid-Cooled Single',
      power: '34.0 BHP | 28 Nm',
      mileage: '30 km/l',
      suspension: '180mm USD Front Forks',
      dailyPrice: '₹2,400',
      deposit: '₹8,000',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
      tag: 'Flagship Tourer',
      description: 'Refined German adventure tourer with upside-down front forks, lightweight lattice frame, and high-revving highway performance.',
      features: ['German Engineering', 'USD Gold Front Forks', 'Ride-by-Wire', 'Cast Aluminum Wheels'],
      recommendedFor: 'Solan-Shimla-Manali Highway Cruising & Garhwali Passes',
    },
    {
      id: 'classic-350',
      name: 'Royal Enfield Classic 350 Reborn',
      category: 'Scramblers & Classics',
      engine: '349cc J-Series Air-Oil Cooled',
      power: '20.2 BHP | 27 Nm',
      mileage: '35 km/l',
      suspension: 'Telescopic Front 41mm',
      dailyPrice: '₹1,200',
      deposit: '₹3,000',
      image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=80',
      tag: 'Classic Heritage',
      description: 'Iconic thump with plush dual seating and counterbalanced smooth engine for relaxed valley cruising.',
      features: ['Smooth J-Series Engine', 'Dual-Channel ABS', 'Plush Twin Seat', 'Vintage Styling'],
      recommendedFor: 'Relaxed Valley Touring, Solan, Shimla, Manali & Rishikesh',
    },
    {
      id: 'ktm-390-adv',
      name: 'KTM 390 Adventure SW',
      category: 'Premium ADV',
      engine: '373cc DOHC Liquid Cooled',
      power: '43.0 BHP | 37 Nm',
      mileage: '25 km/l',
      suspension: 'WP APEX Adjustable',
      dailyPrice: '₹2,600',
      deposit: '₹8,000',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
      tag: 'High Performance ADV',
      description: 'High-octane ADV equipped with spoked wheels, cornering ABS, traction control, and quickshifter for aggressive riders.',
      features: ['43 BHP DOHC Engine', 'Spoked Wheels', 'Cornering ABS & Traction Control', 'Quickshifter Plus'],
      recommendedFor: 'Experienced Riders, High Mountain Passes & Fast Circuits',
    },
    {
      id: 'hunter-350',
      name: 'Royal Enfield Hunter 350',
      category: 'Scramblers & Classics',
      engine: '349cc J-Series',
      power: '20.2 BHP | 27 Nm',
      mileage: '36 km/l',
      suspension: 'Dual Shock Rear',
      dailyPrice: '₹1,100',
      deposit: '₹3,000',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
      tag: 'Nimble City & Valley',
      description: 'Lightweight 181kg roadster with a low seat height (790mm), perfect for shorter riders and nimble valley twisties.',
      features: ['Lightweight 181kg', 'Low 790mm Seat Height', 'Sharp Steering Geometry', 'Digital-Analog Meter'],
      recommendedFor: 'Beginners, Shorter Riders, Local Sightseeing & Short Valley Trips',
    },
  ];

  const filteredBikes = bikes.filter((b) => {
    if (selectedCategory !== 'All' && b.category !== selectedCategory) return false;
    if (categoryFilter !== 'All' && b.category !== categoryFilter) return false;
    return true;
  });

  const complimentaryGear = [
    {
      icon: Shield,
      title: 'Free Dual Helmets',
      desc: 'ISI / DOT certified full-face helmets provided for both rider and pillion with sanitary balaclavas.',
    },
    {
      icon: Wrench,
      title: 'Luggage Racks & Mounts',
      desc: 'Heavy-duty rear luggage carrier racks and side pannier stays installed on all adventure motorcycles.',
    },
    {
      icon: Zap,
      title: 'USB Mobile Mount',
      desc: 'Vibration-dampened mobile phone holder with fast USB charging port for live map navigation.',
    },
    {
      icon: Award,
      title: 'Emergency Tool Kit',
      desc: 'Includes spare tube, clutch cable, spark plug, chain lube, and basic repair tools for remote trails.',
    },
  ];

  const ridingRoutes = [
    {
      name: 'Manali to Leh-Ladakh Highway',
      distance: '475 km',
      terrain: 'Rohtang, Baralacha La, Tanglang La Passes',
      bestBike: 'Himalayan 450 / BMW G 310 GS',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Spiti Valley Motorbike Circuit',
      distance: '750 km',
      terrain: 'Shimla → Kalpa → Kaza → Kunzum → Manali',
      bestBike: 'Himalayan 450 / KTM 390 ADV',
      img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Rishikesh to Chopta & Tungnath Ridge',
      distance: '210 km',
      terrain: 'Alaknanda River Gorge & Alpine Meadows',
      bestBike: 'Scram 411 / Classic 350',
      img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Kasol, Tosh & Parvati Valley Loop',
      distance: '90 km',
      terrain: 'Pine Forests & River Stream Curves',
      bestBike: 'Hunter 350 / Scram 411',
      img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const rentalGuidelines = [
    {
      title: 'Required Documents',
      desc: 'Original valid Two-Wheeler Driving License (min 1 year old) + Aadhaar Card or Passport copy.',
    },
    {
      title: 'Rider Eligibility',
      desc: 'Minimum age of 20 years. Primary rider must present physical original license at motorcycle handover.',
    },
    {
      title: 'Security Deposit',
      desc: '₹3,000 - ₹8,000 refundable security deposit via UPI/Card. 100% refunded within 24 hours of bike return.',
    },
    {
      title: 'Fuel Policy',
      desc: 'Same-to-same fuel level handover. You receive the motorcycle with fuel and return at the same level.',
    },
    {
      title: 'Pickup & Drop-off Depots',
      desc: 'Old Manali Basecamp, Rishikesh Tapovan Depot, Solan HQ Office, and Shimla Central Hub.',
    },
    {
      title: 'Cancellation Policy',
      desc: '100% free cancellation up to 48 hours prior to pickup date. Zero rescheduling penalty.',
    },
  ];

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen pt-24 pb-20 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. CINEMATIC MOTORCYCLE HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2200&q=90"
            alt="Himalayan Motorcycle Expedition"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>PREMIUM HIMALAYAN MOTORCYCLE RENTALS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading mb-6">
              RIDE THE HIGH PASSES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                ON TWO WHEELS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-8">
              Rent mountain-tested Royal Enfield Himalayan 450s, Scram 411s, Classic 350s, and BMW GS tourers. Serviced by certified mechanics, equipped with riding gear, luggage carriers, and 24/7 mountain backup.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#fleet"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-full transition-all shadow-lg hover:shadow-emerald-600/30 inline-flex items-center gap-2"
              >
                <span>EXPLORE FLEET</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20inquire%20about%20renting%20a%20motorcycle."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full backdrop-blur-md border border-white/25 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>PLAN A RIDE</span>
              </a>
            </div>

            {/* Hero Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mechanic Serviced</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Helmets & Racks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Manali & Rishikesh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Pass Backup</span>
              </div>
            </div>
          </div>

          {/* Right Floating Glassmorphic Search Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/40 shadow-2xl text-slate-900">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-heading leading-none">Find Your Bike</h3>
                    <span className="text-[11px] text-slate-500">Instant verification & depot pickup</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  HP & UK Depots
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const targetSection = document.getElementById('fleet');
                  if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="space-y-4"
              >
                {/* Pickup Depot */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Depot
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={pickupDepot}
                      onChange={(e) => setPickupDepot(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Manali Basecamp Depot">Old Manali Basecamp Depot</option>
                      <option value="Rishikesh Tapovan Depot">Rishikesh Tapovan Depot</option>
                      <option value="Solan Head Office">Solan Registered Head Office</option>
                      <option value="Shimla Central Hub">Shimla Central Hub</option>
                      <option value="Chandigarh Delivery">Chandigarh Transit Depot</option>
                    </select>
                  </div>
                </div>

                {/* Return Depot */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Return Depot
                  </label>
                  <div className="relative">
                    <Navigation className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={returnDepot}
                      onChange={(e) => setReturnDepot(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Same as Pickup">Same as Pickup Depot</option>
                      <option value="Manali Basecamp">Old Manali Basecamp</option>
                      <option value="Rishikesh Tapovan">Rishikesh Tapovan</option>
                      <option value="Solan Head Office">Solan Head Office</option>
                    </select>
                  </div>
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Category Preference */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Motorcycle Category
                  </label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => {
                      setCategoryFilter(e.target.value);
                      setSelectedCategory(e.target.value);
                    }}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="All">All Motorcycles (Himalayan 450, BMW, Classics)</option>
                    <option value="Adventure Tourers">Adventure Tourers (Himalayan 450)</option>
                    <option value="Scramblers & Classics">Scramblers & Classics (Scram, Classic 350, Hunter)</option>
                    <option value="Premium ADV">Premium ADV (BMW G 310 GS, KTM 390 ADV)</option>
                  </select>
                </div>

                {/* Submit Search Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-700/20 flex items-center justify-center gap-2 mt-2"
                >
                  <Search className="w-4 h-4" />
                  <span>SEARCH AVAILABLE BIKES</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MOTORCYCLE FLEET COLLECTION & INTERACTIVE FILTERS */}
      <section id="fleet" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-1">
              THE HIMALAYAN MOTORCYCLE FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Select Your Mountain Ride
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Royal Enfield Himalayan 450s, BMW GS tourers, and scramblers prepped for high passes.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Adventure Tourers', 'Scramblers & Classics', 'Premium ADV'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCategoryFilter(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Bike Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-900 text-xs font-bold rounded-full border border-emerald-200/80 shadow-sm">
                      {bike.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-semibold rounded-full">
                      {bike.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">{bike.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-5">{bike.description}</p>

                  {/* Spec Pills */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Settings className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[10px] font-semibold text-slate-800 block truncate">{bike.engine}</span>
                    </div>

                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Zap className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[10px] font-semibold text-slate-800 block truncate">{bike.power}</span>
                    </div>

                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Compass className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[10px] font-semibold text-slate-800 block truncate">{bike.mileage}</span>
                    </div>
                  </div>

                  {/* Recommended Terrain */}
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6 flex items-start gap-2">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-700">Best for:</strong> {bike.recommendedFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Daily Rent</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-slate-900 font-heading">{bike.dailyPrice}</span>
                    <span className="text-xs text-slate-500">/ day</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Deposit: {bike.deposit}</span>
                </div>

                <a
                  href={`https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(
                    bike.name
                  )}%20motorcycle.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>RENT BIKE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED BIKE EDITORIAL SHOWCASE */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFBFB] rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>FLAGSHIP MOUNTAIN MOTORCYCLE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                Royal Enfield Himalayan 450
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Engineered specifically for high-altitude Himalayan passes. Features Royal Enfield&apos;s liquid-cooled Sherpa 450 engine, 40 BHP power, 200mm long-travel suspension, and full TFT Google Maps navigation.
              </p>

              {/* Key Tech Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Liquid Cooled Engine</span>
                  <strong className="text-xl text-slate-900 font-heading block">452 cc | 40 BHP</strong>
                  <span className="text-[11px] text-slate-500">Sherpa 450 DOHC Engine</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Suspension Travel</span>
                  <strong className="text-xl text-emerald-700 font-heading block">200 mm Travel</strong>
                  <span className="text-[11px] text-slate-500">Showa upside-down front forks</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Ground Clearance</span>
                  <strong className="text-xl text-slate-900 font-heading block">230 mm</strong>
                  <span className="text-[11px] text-slate-500">Easily clears rocks & ruts</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Navigation & ABS</span>
                  <strong className="text-xl text-slate-900 font-heading block">TFT Tripper Screen</strong>
                  <span className="text-[11px] text-slate-500">Switchable Rear ABS mode</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20rent%20the%20Himalayan%20450."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>BOOK HIMALAYAN 450</span>
                </a>

                <span className="text-xs font-mono text-slate-500">From ₹1,800 / day</span>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85"
                alt="Royal Enfield Himalayan 450"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl text-white text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block">Spiti & Ladakh Pass Certified</span>
                  <span className="text-slate-300 text-[11px]">Mechanic serviced & luggage racks installed</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-600 font-bold text-[10px] rounded-md">Regd. Permit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIMENTARY GEAR & ACCESSORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">INCLUDED ACCESSORIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Rider Gear & Equipment Included
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every rental includes essential safety gear and luggage mounts for high-pass riding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complimentaryGear.map((gear) => {
            const IconComponent = gear.icon;
            return (
              <div key={gear.title} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{gear.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{gear.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ICONIC MOUNTAIN RIDING ROUTES */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">RECOMMENDED CIRCUITS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Iconic Himalayan Motorcycle Routes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore the finest two-wheeler road trips across Himachal Pradesh & Uttarakhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ridingRoutes.map((route) => (
              <div
                key={route.name}
                className="bg-[#FAFBFB] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={route.img}
                      alt={route.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 text-emerald-300 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                      {route.distance}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 font-heading mb-1">{route.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">{route.terrain}</p>

                    <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
                      <strong className="text-slate-900">Recommended Bike:</strong> {route.bestBike}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY RENT BIKES WITH US */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">THE PAHADI COMMITMENT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Why Motorcyclists Choose Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We provide fully prepped, reliable motorcycles backed by native ground support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Mechanic Serviced Fleet</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every motorcycle undergoes a multi-point inspection, oil check, brake calibration, and fresh tire inspection after every ride.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">100% Transparent Deposits</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              No hidden damage claim traps. Security deposits (₹3,000 - ₹8,000) refunded within 24 hours of bike return.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Multiple Basecamp Depots</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Pick up at Old Manali Basecamp, Rishikesh Tapovan, Solan HQ, or Shimla. Flexible inter-depot drop-offs available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">24/7 Mountain Backup</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Real-time ground support from our Solan HQ for pass weather updates, breakdown towing, and spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* 7. RENTAL GUIDELINES & DOCUMENT DESK */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">RENTAL TERMS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Rental Guidelines & Policy Desk
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Essential requirements for renting a motorcycle with Pahadi Bagpackers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalGuidelines.map((guideline) => (
              <div key={guideline.title} className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-base font-bold text-slate-900 font-heading">{guideline.title}</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{guideline.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL EDITORIAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            TWO-WHEELER HIMALAYAN EXPEDITIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 max-w-3xl mx-auto leading-tight">
            READY TO THROTTLE INTO THE HIMALAYAS?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Choose your Royal Enfield or BMW motorcycle and conquer the mountain passes. Direct quotes from our Manali, Rishikesh & Solan depots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20rent%20a%20motorcycle%20for%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>BOOK ON WHATSAPP</span>
            </a>

            <a
              href="tel:01792-359853"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4.5 h-4.5 text-emerald-300" />
              <span>CALL BIKING DESK: 01792-359853</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center gap-6">
            <span>Regd. No.: 241224/48355</span>
            <span>•</span>
            <span>Solan Head Office: 233 Bhaktora Colony, Solan (HP)</span>
            <span>•</span>
            <span>Email: pahadibagpackers77@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
