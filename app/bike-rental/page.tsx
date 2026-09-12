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
  Info,
  X
} from 'lucide-react';

interface Bike {
  id: string;
  name: string;
  category: 'Off-Roading Bikes' | 'Cruisers' | 'Classics & Roadsters';
  engine: string;
  power: string;
  mileage: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export default function BikeRentalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Query Form State
  const [selectedBikeId, setSelectedBikeId] = useState<string>('himalayan');
  const [numberOfDays, setNumberOfDays] = useState<string>('3');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  // Inquiry Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalBike, setModalBike] = useState<Bike | null>(null);

  const bikes: Bike[] = [
    {
      id: 'himalayan',
      name: 'Royal Enfield Himalayan',
      category: 'Off-Roading Bikes',
      engine: '452cc Liquid-Cooled Sherpa',
      power: '40.0 BHP | 40 Nm',
      mileage: '28 km/l',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
      tag: 'Off-Road & High Mountain Passes',
      description: 'Engineered for extreme high-altitude terrain, off-road river crossings, and rough Himalayan pass trails.',
      features: ['Liquid-Cooled Sherpa Engine', '200mm Long Travel Suspension', 'Switchable Rear ABS', 'High Ground Clearance'],
      recommendedFor: 'Spiti Valley Circuit, Manali-Leh Highway, Chandratal & Rugged Mountain Trails',
    },
    {
      id: 'meteor-350',
      name: 'Royal Enfield Meteor 350',
      category: 'Cruisers',
      engine: '349cc J-Series Air-Oil Cooled',
      power: '20.2 BHP | 27 Nm',
      mileage: '35 km/l',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
      tag: 'Highway Cruiser',
      description: 'Ultimate relaxed highway cruiser with forward footpegs, plush seating, and smooth long-distance touring ergonomics.',
      features: ['Relaxed Forward Footpegs', 'Dual-Channel ABS', 'Tripper Navigation Pod', 'Plush Cruiser Seating'],
      recommendedFor: 'Long Highway Rides, Chandigarh-Shimla-Manali Expressway & Garhwal Circuit',
    },
    {
      id: 'classic-350',
      name: 'Royal Enfield Classic 350',
      category: 'Classics & Roadsters',
      engine: '349cc J-Series Smooth Engine',
      power: '20.2 BHP | 27 Nm',
      mileage: '35 km/l',
      image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=80',
      tag: 'Heritage & Comfort',
      description: 'Iconic thump with plush seating, refined engine counterbalancers, and smooth, effortless valley touring.',
      features: ['Smooth Counterbalanced J-Engine', 'Dual-Channel ABS', 'Plush Twin Seating', 'Vintage Aesthetic'],
      recommendedFor: 'Relaxed Valley Touring, Solan, Shimla, Manali & Rishikesh Explorations',
    },
    {
      id: 'hunter-350',
      name: 'Royal Enfield Hunter 350',
      category: 'Classics & Roadsters',
      engine: '349cc J-Series Roadster',
      power: '20.2 BHP | 27 Nm',
      mileage: '36 km/l',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
      tag: 'Agile & Lightweight',
      description: 'Compact 181kg roadster with low seat height (790mm), perfect for nimble mountain twisties and short valley runs.',
      features: ['Lightweight 181kg Chassis', 'Low 790mm Seat Height', 'Sharp Steering Geometry', 'Digital-Analog Display'],
      recommendedFor: 'Beginners, Shorter Riders, Local Sightseeing, Parvati Valley & Tirthan',
    },
  ];

  const filteredBikes = bikes.filter((b) => {
    if (selectedCategory !== 'All' && b.category !== selectedCategory) return false;
    return true;
  });

  const handleSendInquiry = (bikeNameOverride?: string) => {
    const bikeObj = bikes.find((b) => b.id === selectedBikeId);
    const bikeName = bikeNameOverride || bikeObj?.name || 'Motorcycle';

    let message = `Hello Pahadi Bagpackers, I would like to inquire about renting a motorcycle:\n\n`;
    message += `🏍️ *Bike:* ${bikeName}\n`;
    message += `📅 *Duration:* ${numberOfDays} Days\n`;
    if (pickupDate) message += `📆 *Start Date:* ${pickupDate}\n`;
    if (userName) message += `👤 *Rider Name:* ${userName}\n`;
    if (userPhone) message += `📞 *Contact Number:* ${userPhone}\n`;
    message += `\nPlease share availability and rental details.`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/917018800958?text=${encodedMsg}`, '_blank');
  };

  const openBikeModal = (bike: Bike) => {
    setModalBike(bike);
    setSelectedBikeId(bike.id);
    setIsModalOpen(true);
  };

  const complimentaryGear = [
    {
      icon: Shield,
      title: 'Free Dual Helmets',
      desc: 'ISI / DOT certified full-face helmets provided for both rider and pillion.',
    },
    {
      icon: Wrench,
      title: 'Luggage Racks & Mounts',
      desc: 'Heavy-duty rear luggage carrier racks installed on off-roading and touring bikes.',
    },
    {
      icon: Zap,
      title: 'USB Mobile Holder',
      desc: 'Vibration-dampened mobile phone holder with USB charging port for live map navigation.',
    },
    {
      icon: Award,
      title: 'Emergency Tool Kit',
      desc: 'Includes spare tube, clutch cable, spark plug, chain lube, and basic repair tools.',
    },
  ];

  const ridingRoutes = [
    {
      name: 'Manali to Leh-Ladakh Highway',
      distance: '475 km',
      terrain: 'Rohtang, Baralacha La, Tanglang La Passes',
      bestBike: 'Royal Enfield Himalayan (Off-Roading)',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Spiti Valley Motorbike Circuit',
      distance: '750 km',
      terrain: 'Shimla → Kalpa → Kaza → Kunzum → Manali',
      bestBike: 'Royal Enfield Himalayan',
      img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Chandigarh to Shimla & Manali Highway',
      distance: '310 km',
      terrain: 'Smooth Mountain Highways & Scenic Curves',
      bestBike: 'Meteor 350 / Classic 350',
      img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Kasol, Tosh & Parvati Valley Loop',
      distance: '90 km',
      terrain: 'Pine Forests & River Stream Curves',
      bestBike: 'Hunter 350 / Classic 350',
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
      desc: 'Minimum age of 20 years. Primary rider must present physical original license at handover.',
    },
    {
      title: 'Direct Admin Quote',
      desc: 'No hidden fees. Select your bike and days to get an instant tailored quote directly from our admin team.',
    },
    {
      title: 'Fuel Policy',
      desc: 'Same-to-same fuel level handover. You receive the motorcycle with fuel and return at the same level.',
    },
    {
      title: 'Pickup Depots Available',
      desc: 'Old Manali Basecamp, Rishikesh Tapovan Depot, Solan HQ Office, and Shimla Central Hub.',
    },
    {
      title: 'Flexible Rescheduling',
      desc: 'Free date changes up to 48 hours prior to pickup date. Instant WhatsApp assistance.',
    },
  ];

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen pt-24 pb-20 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. HERO SECTION WITH DIRECT BIKE + DAYS QUERY FORM */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2200&q=90"
            alt="Himalayan Motorcycle Expedition"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>TWO WHEELER & OFF-ROADING BIKES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading mb-6">
              RIDE THE HIMALAYAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                OFF-ROAD & CRUISERS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-8">
              Select your motorcycle — Royal Enfield Himalayan, Meteor 350 Cruiser, Classic 350, or Hunter 350. Choose your rental duration and send your inquiry directly to our admin.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#fleet"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-full transition-all shadow-lg hover:shadow-emerald-600/30 inline-flex items-center gap-2"
              >
                <span>VIEW BIKES</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20inquire%20about%20renting%20a%20motorcycle."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full backdrop-blur-md border border-white/25 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>CHAT WITH ADMIN</span>
              </a>
            </div>

            {/* Hero Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Off-Roading & Cruisers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Helmets & Racks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Manali, Solan & Shimla</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Admin Quote</span>
              </div>
            </div>
          </div>

          {/* Right Floating Glassmorphic Query Form */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/40 shadow-2xl text-slate-900">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-heading leading-none">Select Bike & Duration</h3>
                    <span className="text-[11px] text-slate-500">Instant query sent to owner / admin</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  HP & UK Depots
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendInquiry();
                }}
                className="space-y-4"
              >
                {/* Select Bike */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Motorcycle *
                  </label>
                  <select
                    value={selectedBikeId}
                    onChange={(e) => setSelectedBikeId(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="himalayan">Royal Enfield Himalayan (Off-Roading Bike)</option>
                    <option value="meteor-350">Royal Enfield Meteor 350 (Cruiser Bike)</option>
                    <option value="classic-350">Royal Enfield Classic 350</option>
                    <option value="hunter-350">Royal Enfield Hunter 350</option>
                  </select>
                </div>

                {/* Select Number of Days */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Rental Days *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={numberOfDays}
                      onChange={(e) => setNumberOfDays(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="1">1 Day (Local Valley Riding)</option>
                      <option value="2">2 Days</option>
                      <option value="3">3 Days (Popular Short Trip)</option>
                      <option value="4">4 Days</option>
                      <option value="5">5 Days (High Pass Circuit)</option>
                      <option value="7">7 Days (Full Expedition)</option>
                      <option value="10">10+ Days (Spiti / Leh Expedition)</option>
                    </select>
                  </div>
                </div>

                {/* Dates & Contact Row */}
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
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                    />
                  </div>
                </div>

                {/* Submit Query Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-700/20 flex items-center justify-center gap-2 mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>SEND QUERY TO ADMIN</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MOTORCYCLE FLEET GRID */}
      <section id="fleet" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-1">
              TWO WHEELER & OFF ROAD FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Select Your Riding Machine
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              High-performance Royal Enfield motorcycles for off-roading, highway cruising, and mountain pass touring.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Off-Roading Bikes', 'Cruisers', 'Classics & Roadsters'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

        {/* 4 Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Bike Image Container */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-900 text-[11px] font-bold rounded-full border border-emerald-200/80 shadow-sm">
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
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">{bike.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{bike.description}</p>

                  {/* Spec Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-[#FAFBFB] p-2 rounded-xl border border-slate-200/70 text-center">
                      <Settings className="w-3.5 h-3.5 text-emerald-700 mx-auto mb-0.5" />
                      <span className="text-[10px] font-semibold text-slate-800 block truncate">{bike.engine}</span>
                    </div>

                    <div className="bg-[#FAFBFB] p-2 rounded-xl border border-slate-200/70 text-center">
                      <Zap className="w-3.5 h-3.5 text-emerald-700 mx-auto mb-0.5" />
                      <span className="text-[10px] font-semibold text-slate-800 block truncate">{bike.power}</span>
                    </div>
                  </div>

                  {/* Features checklist */}
                  <ul className="space-y-1.5 mb-4">
                    {bike.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Recommended Terrain */}
                  <div className="text-[10px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-start gap-1.5 mb-4">
                    <Navigation className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-700">Best for:</strong> {bike.recommendedFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer - NO PRICE, DIRECT INQUIRY BUTTON */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-auto pt-4">
                <button
                  onClick={() => openBikeModal(bike)}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>SELECT DAYS & INQUIRE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED OFF-ROADER: HIMALAYAN SHOWCASE */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFBFB] rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>PREMIER OFF-ROADING MOTORCYCLE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                Royal Enfield Himalayan
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Designed exclusively for off-roading through water crossings, rocky trails, and high altitude Himalayan mountain passes. Serviced and tuned by certified mechanics before every expedition.
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
                  <span className="text-[11px] text-slate-500">Long-travel off-road forks</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Ground Clearance</span>
                  <strong className="text-xl text-slate-900 font-heading block">230 mm</strong>
                  <span className="text-[11px] text-slate-500">Conquers boulder trails & ruts</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Off-Road Setup</span>
                  <strong className="text-xl text-slate-900 font-heading block">Switchable ABS</strong>
                  <span className="text-[11px] text-slate-500">Rear wheel off-road sliding mode</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const himalayanObj = bikes.find((b) => b.id === 'himalayan');
                    if (himalayanObj) openBikeModal(himalayanObj);
                  }}
                  className="px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>INQUIRE FOR HIMALAYAN</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85"
                alt="Royal Enfield Himalayan Off-roading"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl text-white text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block">Spiti & Ladakh Off-Road Ready</span>
                  <span className="text-slate-300 text-[11px]">Includes luggage racks & emergency tool kit</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-600 font-bold text-[10px] rounded-md">Regd. Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIMENTARY GEAR & ACCESSORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">INCLUDED WITH ALL BIKES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Rider Safety & Gear Kit
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Essential riding accessories provided with every motorcycle rental.
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

      {/* 5. ICONIC RIDING ROUTES */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">POPULAR CIRCUITS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Iconic Himalayan Biking Routes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore the best two-wheeler routes across Himachal Pradesh & Uttarakhand.
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
                      <strong className="text-slate-900">Best Machine:</strong> {route.bestBike}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RENTAL GUIDELINES */}
      <section className="py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">RENTAL POLICY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Rental Guidelines & Document Desk
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Simple procedures to pick up your bike and start your trip.
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

      {/* 7. FINAL EDITORIAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            TWO WHEELER & OFF-ROADING EXPEDITIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 max-w-3xl mx-auto leading-tight">
            WHERE WILL THE MOUNTAINS TAKE YOU?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Select your Royal Enfield Himalayan, Meteor 350, Classic 350, or Hunter 350. Direct customized quotes from our Manali, Rishikesh & Solan depots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20rent%20a%20motorcycle%20for%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>SEND INQUIRY ON WHATSAPP</span>
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
            <span>Solan Head Office: H. No. 223 Bhaktora Colony, Solan (HP)</span>
            <span>•</span>
            <span>Email: pahadibagpackers77@gmail.com</span>
          </div>
        </div>
      </section>

      {/* 8. INQUIRY MODAL (SELECT BIKE & NUMBER OF DAYS) */}
      {isModalOpen && modalBike && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">{modalBike.name}</h3>
                <span className="text-xs text-emerald-700 font-medium">{modalBike.category}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-6">
              Select the number of days and details for your inquiry. This will generate a direct pre-filled message for our admin team.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Number of Days *
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days (Popular Choice)</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days (Full Expedition)</option>
                    <option value="10">10+ Days (Spiti / Leh Expedition)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  handleSendInquiry(modalBike.name);
                  setIsModalOpen(false);
                }}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>SEND INQUIRY TO ADMIN ON WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
