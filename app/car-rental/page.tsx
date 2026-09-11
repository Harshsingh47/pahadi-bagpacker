'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Car,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Search,
  Users,
  Fuel,
  Settings,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  FileText,
  Clock,
  Compass,
  HelpCircle,
  Check,
  Navigation,
  CheckCircle
} from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  category: '4x4 Adventure' | 'Premium SUV' | '7-Seater' | 'Compact SUV';
  seats: string;
  transmission: 'Manual' | 'Automatic' | 'Manual / Auto';
  fuel: 'Diesel' | 'Petrol';
  dailyPrice: string;
  deposit: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export default function CarRentalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pickupLocation, setPickupLocation] = useState<string>('Solan HQ (HP)');
  const [returnLocation, setReturnLocation] = useState<string>('Same as Pickup');
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState<string>('All');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');

  const vehicles: Vehicle[] = [
    {
      id: 'thar-4x4',
      name: 'Mahindra Thar LX 4x4 (Hard Top)',
      category: '4x4 Adventure',
      seats: '4 Seats',
      transmission: 'Manual / Auto',
      fuel: 'Diesel',
      dailyPrice: '₹4,500',
      deposit: '₹10,000',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
      tag: 'Most Popular for Spiti',
      description: 'The undisputed king of Himalayan passes. Features 4WD Low Gear, 226mm ground clearance, and hardtop weather isolation.',
      features: ['4x4 Low/High Transfer Case', '226mm Ground Clearance', 'Tough Terrain Tires', 'Touchscreen Infotainment'],
      recommendedFor: 'Spiti Valley, Chandratal, Kunzum Pass & Off-Road Trails',
    },
    {
      id: 'fortuner-4x4',
      name: 'Toyota Fortuner Legender 4x4',
      category: 'Premium SUV',
      seats: '7 Seats',
      transmission: 'Automatic',
      fuel: 'Diesel',
      dailyPrice: '₹7,500',
      deposit: '₹15,000',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
      tag: 'Flagship Luxury',
      description: 'Full-size flagship luxury 4x4 SUV with leather interior, downhill assist control, and supreme highway power.',
      features: ['Full-Time 4WD', 'Ventilated Leather Seats', 'JBL Sound System', 'Downhill Assist Control'],
      recommendedFor: 'VVIP Highway Cruising, Kinnaur Circuit & Luxury Group Expeditions',
    },
    {
      id: 'scorpio-n',
      name: 'Mahindra Scorpio N 4XPLOR',
      category: '7-Seater',
      seats: '7 Seats',
      transmission: 'Manual / Auto',
      fuel: 'Diesel',
      dailyPrice: '₹5,200',
      deposit: '₹10,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
      tag: 'Best for Group Trips',
      description: 'Modern 3-row luxury SUV with 4XPLOR terrain response modes (Snow, Mud, Sand) for spacious mountain road trips.',
      features: ['4XPLOR Terrain Modes', '3-Row Seating', 'Sunroof & Climate Control', 'High Torque Diesel Engine'],
      recommendedFor: 'Large Families, Shimla-Manali-Leh Circuits & Group Travel',
    },
    {
      id: 'xuv700-awd',
      name: 'Mahindra XUV700 AX7 AWD',
      category: 'Premium SUV',
      seats: '7 Seats',
      transmission: 'Automatic',
      fuel: 'Diesel',
      dailyPrice: '₹5,800',
      deposit: '₹12,000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80',
      tag: 'Family Comfort',
      description: 'Intelligent All-Wheel Drive SUV featuring a panoramic skyroof, ADAS safety radar, and plush dual-tone cabin.',
      features: ['Intelligent AWD', 'Panoramic Skyroof', 'Dual 10.25-inch Screens', 'ADAS Safety Tech'],
      recommendedFor: 'Solan, Shimla, Rishikesh & Smooth Valley Highway Trips',
    },
    {
      id: 'creta-sx',
      name: 'Hyundai Creta SX (O) Automatic',
      category: 'Compact SUV',
      seats: '5 Seats',
      transmission: 'Automatic',
      fuel: 'Petrol',
      dailyPrice: '₹3,500',
      deposit: '₹8,000',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
      tag: 'Valley Highway Cruising',
      description: 'Smooth automatic city & highway SUV with panoramic sunroof, Bose audio, and high fuel mileage for valley tours.',
      features: ['Automatic Transmission', 'Bose Premium Audio', 'High Fuel Mileage', 'Wireless Phone Charger'],
      recommendedFor: 'Solan, Shimla, Chandigarh Pickups & Local Sightseeing',
    },
    {
      id: 'jimny-4x4',
      name: 'Maruti Suzuki Jimny Alpha 4x4',
      category: '4x4 Adventure',
      seats: '4 Seats',
      transmission: 'Automatic',
      fuel: 'Petrol',
      dailyPrice: '₹3,800',
      deposit: '₹8,000',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80',
      tag: 'Agile Trail Specialist',
      description: 'Compact 5-door ladder-frame 4x4 designed for narrow Himalayan village roads and high-pass rocky tracks.',
      features: ['ALLGRIP PRO 4WD', 'Ladder Frame Chassis', 'Compact Narrow Width', 'Hill Descent Control'],
      recommendedFor: 'Solo Backpackers, Couples, Kasol, Parvati Valley & Remote Passes',
    },
  ];

  const filteredVehicles = vehicles.filter((v) => {
    if (selectedCategory !== 'All' && v.category !== selectedCategory) return false;
    if (vehicleTypeFilter !== 'All' && v.category !== vehicleTypeFilter) return false;
    return true;
  });

  const destinations = [
    {
      name: 'Spiti Valley Circuit',
      terrain: 'High-Altitude Cold Desert & Pass Crossings',
      recommended: 'Mahindra Thar 4x4 / Scorpio N 4XPLOR',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Manali & Solang Valley',
      terrain: 'Pine Forests & Atal Tunnel Highways',
      recommended: 'Creta Automatic / Thar 4x4',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Kasol & Parvati Valley',
      terrain: 'Narrow Valley Roads & Riverside Trails',
      recommended: 'Jimny 4x4 / Creta SUV',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Kinnaur & Kalpa',
      terrain: 'Cliff Roads & Apple Orchard Valleys',
      recommended: 'Fortuner 4x4 / Scorpio N',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Shimla & Narkanda Ridge',
      terrain: 'Cedar Forests & Scenic Mountain Highways',
      recommended: 'XUV700 / Creta SX',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Uttarakhand Circuit (Rishikesh/Chopta)',
      terrain: 'Ganges Riversides & Alpine Ridge Drives',
      recommended: 'Fortuner Legender / Thar 4x4',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const rentalPolicies = [
    {
      title: 'Required Documents',
      desc: 'Valid Indian Driving License (min 2 years old) or International Driving Permit (IDP) + Aadhaar Card / Passport copy.',
    },
    {
      title: 'Driving Requirements',
      desc: 'Minimum age of 21 years. Primary driver must be present at vehicle pick-up for physical document verification.',
    },
    {
      title: 'Security Deposit',
      desc: '₹8,000 - ₹15,000 refundable security deposit via UPI/Card. 100% refunded within 24 hours of vehicle return.',
    },
    {
      title: 'Fuel Policy',
      desc: 'Same-to-same fuel level handover. You receive the SUV with a full/partial tank and return it at the same level.',
    },
    {
      title: 'Pickup & Return',
      desc: 'Free pickup at Solan Head Office. Delivery available to Chandigarh Airport, Shimla, Manali & Rishikesh basecamps.',
    },
    {
      title: 'Cancellation Policy',
      desc: '100% free cancellation up to 48 hours prior to pickup date. Flexible date rescheduling with zero penalty.',
    },
  ];

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen pt-24 pb-20 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. CINEMATIC AUTOMOTIVE HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2200&q=90"
            alt="Scenic Himalayan SUV Driving"
            className="w-full h-full object-cover object-center"
          />
          {/* Light Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>PREMIUM HIMALAYAN CAR RENTALS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading mb-6">
              DRIVE YOUR OWN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                HIMALAYAN ADVENTURE
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-8">
              Explore Himachal Pradesh and Uttarakhand with mountain-tested 4x4 Thar SUVs, luxury 7-seaters, and automatic cruisers. Zero agent middleman fees, 100% verified commercial permits, and 24/7 ground assistance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#vehicles"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-full transition-all shadow-lg hover:shadow-emerald-600/30 inline-flex items-center gap-2"
              >
                <Car className="w-4 h-4" />
                <span>EXPLORE VEHICLES</span>
              </a>

              <a
                href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20inquire%20about%20a%20self-drive%20car%20rental."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full backdrop-blur-md border border-white/25 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>PLAN YOUR JOURNEY</span>
              </a>
            </div>

            {/* Hero Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mountain-Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Flexible Rentals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Solan & Manali Depots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Ground Help</span>
              </div>
            </div>
          </div>

          {/* Right Floating Glassmorphic Rental Search Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/40 shadow-2xl text-slate-900">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-heading leading-none">Find Your Ride</h3>
                    <span className="text-[11px] text-slate-500">Instant verification & direct booking</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  HP & UK Hubs
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const targetSection = document.getElementById('vehicles');
                  if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="space-y-4"
              >
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Hub Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Solan HQ (HP)">Solan Registered Head Office</option>
                      <option value="Chandigarh Airport">Chandigarh Airport (IXC) Delivery</option>
                      <option value="Manali Basecamp">Old Manali Basecamp Depot</option>
                      <option value="Rishikesh Basecamp">Rishikesh Garhwal Depot</option>
                      <option value="Dehradun Airport">Dehradun Airport (DED) Pickup</option>
                      <option value="Shimla City">Shimla Central Depot</option>
                    </select>
                  </div>
                </div>

                {/* Return Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Return Hub Location
                  </label>
                  <div className="relative">
                    <Navigation className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={returnLocation}
                      onChange={(e) => setReturnLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Same as Pickup">Same as Pickup Location</option>
                      <option value="Solan HQ">Solan Head Office</option>
                      <option value="Chandigarh Airport">Chandigarh Airport</option>
                      <option value="Manali Basecamp">Old Manali Basecamp</option>
                      <option value="Rishikesh Basecamp">Rishikesh Depot</option>
                    </select>
                  </div>
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Pickup Date
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
                      Return Date
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

                {/* Vehicle Type Filter */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Category Preference
                  </label>
                  <select
                    value={vehicleTypeFilter}
                    onChange={(e) => {
                      setVehicleTypeFilter(e.target.value);
                      setSelectedCategory(e.target.value);
                    }}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="All">All Categories (4x4, SUVs, 7-Seaters)</option>
                    <option value="4x4 Adventure">4x4 Adventure (Thar, Jimny)</option>
                    <option value="Premium SUV">Premium SUV (Fortuner, XUV700)</option>
                    <option value="7-Seater">7-Seater (Scorpio N, Fortuner)</option>
                    <option value="Compact SUV">Compact SUV (Creta)</option>
                  </select>
                </div>

                {/* Submit Search Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-700/20 flex items-center justify-center gap-2 mt-2"
                >
                  <Search className="w-4 h-4" />
                  <span>SEARCH AVAILABLE CARS</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VEHICLE COLLECTION & INTERACTIVE FILTERS */}
      <section id="vehicles" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-1">
              THE HIMALAYAN FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Select Your Mountain Vehicle
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Mountain-tested 4x4s, full-size 7-seaters, and comfortable automatic SUVs.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', '4x4 Adventure', 'Premium SUV', '7-Seater', 'Compact SUV'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVehicleTypeFilter(cat);
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

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-900 text-xs font-bold rounded-full border border-emerald-200/80 shadow-sm">
                      {car.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-semibold rounded-full">
                      {car.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">{car.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-5">{car.description}</p>

                  {/* Spec Pills */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Users className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[11px] font-semibold text-slate-800 block">{car.seats}</span>
                    </div>

                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Settings className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[11px] font-semibold text-slate-800 block">{car.transmission}</span>
                    </div>

                    <div className="bg-[#FAFBFB] p-2.5 rounded-xl border border-slate-200/70 text-center">
                      <Fuel className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                      <span className="text-[11px] font-semibold text-slate-800 block">{car.fuel}</span>
                    </div>
                  </div>

                  {/* Recommended Terrain */}
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6 flex items-start gap-2">
                    <Compass className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-700">Best for:</strong> {car.recommendedFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Daily Rate</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-slate-900 font-heading">{car.dailyPrice}</span>
                    <span className="text-xs text-slate-500">/ day</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Deposit: {car.deposit}</span>
                </div>

                <a
                  href={`https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(
                    car.name
                  )}%20for%20a%20self-drive%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED VEHICLE EDITORIAL SHOWCASE */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFBFB] rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>FEATURED EXPEDITION VEHICLE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
                Mahindra Thar LX 4x4 Hard Top
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Engineered for the most challenging Himalayan corridors. Built to conquer high-altitude passes, rocky Spiti river crossings, and snow tracks with absolute confidence.
              </p>

              {/* Key Tech Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Ground Clearance</span>
                  <strong className="text-xl text-slate-900 font-heading block">226 mm</strong>
                  <span className="text-[11px] text-slate-500">Overcomes deep ruts & rocks</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">4WD System</span>
                  <strong className="text-xl text-emerald-700 font-heading block">Shift-on-Fly 4H/4L</strong>
                  <span className="text-[11px] text-slate-500">Low gear torque for steep inclines</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Wading Capability</span>
                  <strong className="text-xl text-slate-900 font-heading block">650 mm</strong>
                  <span className="text-[11px] text-slate-500">Safe for river stream crossings</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase font-mono mb-1">Cabin Protection</span>
                  <strong className="text-xl text-slate-900 font-heading block">Hard Top Insulated</strong>
                  <span className="text-[11px] text-slate-500">Cold-weather thermal isolation</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20rent%20the%20Mahindra%20Thar%204x4."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>BOOK THIS 4X4 VEHICLE</span>
                </a>

                <span className="text-xs font-mono text-slate-500">From ₹4,500 / day</span>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85"
                alt="Mahindra Thar 4x4"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl text-white text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block">Spiti & Chandratal Ready</span>
                  <span className="text-slate-300 text-[11px]">Mechanically inspected & high-altitude prepped</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-600 font-bold text-[10px] rounded-md">Regd. Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHERE CAN YOU GO? (SCENIC ROUTES & DESTINATIONS) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">SCENIC ROUTES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Where Can You Drive?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Self-drive options crafted for Himachal Pradesh and Uttarakhand&apos;s finest mountain highways and valley routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white font-heading">
                    {dest.name}
                  </h3>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1 uppercase tracking-wider">
                    Terrain & Atmosphere
                  </span>
                  <p className="text-slate-800 text-xs font-medium mb-4">{dest.terrain}</p>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs">
                    <Car className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-slate-600 text-[11px]">
                      <strong className="text-slate-900">Recommended SUV:</strong> {dest.recommended}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY RENT WITH US */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">WHY CHOOSE US</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Self-Drive Built For Mountain Reliability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We eliminate hidden charges and agent commissions to deliver pure mountain driving freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Mountain-Tested Vehicles</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Multi-point mechanical checks before every rental. Fresh deep-tread tires and snow chains provided on high passes.
              </p>
            </div>

            <div className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Transparent Pricing</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No hidden agent surcharges. Clear security deposit terms refunded within 24 hours of vehicle return.
              </p>
            </div>

            <div className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Flexible Pickups</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Pick up at Solan Head Office or get delivery at Chandigarh Airport, Shimla, Old Manali, or Rishikesh depots.
              </p>
            </div>

            <div className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800 mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">24/7 Local Assistance</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Real-time ground assistance from our Solan HQ for road status, BRO advisories, and breakdown support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (4-STEP VISUAL JOURNEY) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">SIMPLE BOOKING</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Get behind the wheel in 4 straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-4">
              01
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Choose Your Car</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Select from our 4x4 Thar, Fortuner, Scorpio N, XUV700, Creta, or Jimny based on your group size & destination terrain.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-4">
              02
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Select Dates & Locations</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Choose your pickup hub (Solan HQ, Chandigarh Airport, Manali, Rishikesh) and rental duration dates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-4">
              03
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Fast Verification</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Upload your valid Indian Driving License and Aadhaar/Passport copy for instant document clearance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-4">
              04
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Start Your Journey</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Receive your inspected vehicle key, complete a quick physical walkthrough, and drive into the mountains!
            </p>
          </div>
        </div>
      </section>

      {/* 7. RENTAL INFORMATION & POLICY DESK */}
      <section className="py-16 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">RENTAL POLICIES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Rental Information & Guidelines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Clear rules ensuring safety, compliance, and peace of mind on Himalayan roads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalPolicies.map((pol) => (
              <div key={pol.title} className="bg-[#FAFBFB] p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-base font-bold text-slate-900 font-heading">{pol.title}</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pol.desc}</p>
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
            SELF-DRIVE HIMALAYAN EXPEDITIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 max-w-3xl mx-auto leading-tight">
            READY TO TAKE THE WHEEL?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Choose your vehicle and explore Himachal Pradesh and Uttarakhand on your own terms. Direct quotes from our Solan Head Office.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917018800958?text=Hello%20Pahadi%20Bagpackers%2C%20I%20want%20to%20book%20a%20self-drive%20car."
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
              <span>CALL OFFICE: 01792-359853</span>
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
