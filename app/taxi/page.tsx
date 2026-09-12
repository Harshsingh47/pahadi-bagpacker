'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Car, MapPin, Calendar, Users, ShieldCheck, Clock, Navigation, CheckCircle2, 
  ArrowRight, Sparkles, PhoneCall, HelpCircle, ChevronRight, Check, Route, Star, Zap,
  Compass, HeartHandshake, Shield, MessageCircle
} from 'lucide-react';

interface RouteOption {
  key: string;
  start: string;
  end: string;
  distance: number;
  time: string;
  img: string;
}

const POPULAR_ROUTES: RouteOption[] = [
  { key: 'delhi-manali', start: 'Delhi', end: 'Manali', distance: 530, time: '11 to 12 Hours', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80' },
  { key: 'chandigarh-manali', start: 'Chandigarh', end: 'Manali', distance: 290, time: '7 to 8 Hours', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80' },
  { key: 'delhi-shimla', start: 'Delhi', end: 'Shimla', distance: 340, time: '7 to 8 Hours', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { key: 'manali-kasol', start: 'Manali', end: 'Kasol & Parvati', distance: 75, time: '2.5 Hours', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80' },
  { key: 'manali-rohtang', start: 'Manali', end: 'Rohtang / Atal Tunnel', distance: 90, time: '3.5 Hrs (Roundtrip)', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80' },
  { key: 'manali-spiti', start: 'Manali', end: 'Spiti Circuit (Kaza)', distance: 200, time: '8 to 9 Hours', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80' },
  { key: 'dehradun-rishikesh', start: 'Dehradun Airport', end: 'Rishikesh', distance: 22, time: '45 Mins', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
  { key: 'delhi-rishikesh', start: 'Delhi', end: 'Rishikesh', distance: 240, time: '5 to 6 Hours', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }
];

const VEHICLES = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    models: 'Innova Crysta 7-Seater (Reclining Captain Seats)',
    seats: '6 to 7 Members',
    luggage: '4-5 Large Bags + Roof Carrier',
    idealFor: 'Luxury Family Travel, Senior Citizens & VIP Outstation Highway Trips',
    tag: 'MOST POPULAR 🌟',
    img: '/images/taxis/innova-crysta.jpg',
    features: ['Reclining Captain Bucket Seats', 'Rear Cabin Climate Control', 'Ultra-Smooth Highway Ride', 'Heavy Roof Luggage Carrier']
  },
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    models: 'Maruti Suzuki Swift Dzire Executive Sedan',
    seats: '4 Members',
    luggage: '2-3 Medium Bags',
    idealFor: 'Couples, Small Families & Delhi-Shimla / Dehradun Airport Transfers',
    tag: 'EXECUTIVE SEDAN',
    img: '/images/taxis/swift-dzire.png',
    features: ['4 Passenger Capacity', 'Dual AC & Heating', 'Clean Plush Interior', 'Fastag Enabled']
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller (12, 17, 21 Seater)',
    models: 'Force Tempo Traveller (12 / 17 / 21 Seater Options)',
    seats: '12, 17, or 21 Members',
    luggage: '8 to 15 Large Bags',
    idealFor: 'Large Groups, Backpacker Teams, Corporate Trips & Family Reunions',
    tag: 'GROUP TRAVEL (12/17/21 BEDS)',
    img: '/images/taxis/tempo-traveller.png',
    features: ['12, 17 & 21 Seater Available', '1X1 Pushback Recliner Seats', 'Stereo Music System', 'Heavy Duty Roof Carrier']
  },
  {
    id: 'force-urbania',
    name: 'Force Urbania',
    models: 'Force Urbania Ultra-Luxury Executive Van',
    seats: '10 to 17 Members',
    luggage: '10 Large Bags + Rear Storage',
    idealFor: 'Ultra-Luxury Group Expeditions, Executive VIP Delegations & Long-Distance Mountain Pass Cruising',
    tag: 'ULTRA-LUXURY VAN',
    img: '/images/taxis/force-urbania.png',
    features: ['Independent Coil Suspension', 'Individual AC Vents & USB Ports', 'Panoramic Tinted Windows', 'Plush Leatherette Seats']
  }
];

const VEHICLE_FACILITIES = [
  {
    icon: '❄️',
    title: 'Dual AC & Cabin Heater',
    desc: 'Dual climate control for summer highways and high-power cabin heating for sub-zero winter passes.',
    badge: 'All-Weather'
  },
  {
    icon: '🔌',
    title: 'Fast Charging Outlets',
    desc: 'Multiple 12V USB and Type-C fast-charging ports so your devices stay charged.',
    badge: 'In-Cabin Power'
  },
  {
    icon: '🎵',
    title: 'Bluetooth Sound System',
    desc: 'Touchscreen audio player with Bluetooth connectivity for your playlists.',
    badge: 'Audio'
  },
  {
    icon: '💧',
    title: 'Complimentary Water & Tissues',
    desc: 'Fresh packaged mineral water bottles and tissues provided on outstation trips.',
    badge: 'Complimentary'
  },
  {
    icon: '🛞',
    title: 'Snow Chains & Roof Carrier',
    desc: 'Heavy-duty roof luggage carrier and snow tire chains for mountain passes.',
    badge: 'Mountain Equipped'
  },
  {
    icon: '🩹',
    title: 'First-Aid Kit & Oxygen',
    desc: 'Emergency medical first-aid kit and portable oxygen cylinder for high altitudes.',
    badge: 'Emergency Ready'
  },
  {
    icon: '👨‍✈️',
    title: 'Certified Native Driver',
    desc: 'Friendly Pahadi drivers with 10+ years experience navigating mountain passes.',
    badge: '10+ Yrs Exp.'
  },
  {
    icon: '📡',
    title: 'GPS Live Location & 24/7 Basecamp',
    desc: 'Real-time GPS location tracking with 24/7 Pahadi basecamp coordinator support.',
    badge: 'GPS Monitored'
  }
];

const SERVICES = [
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Flight-tracked pickup from Delhi IGI, Chandigarh, Dehradun Jolly Grant & Bhuntar Kullu Airports.',
    badge: 'Flight Tracking'
  },
  {
    icon: '🚆',
    title: 'Railway Station Pickup',
    desc: 'Transfers from Haridwar, Kalka, Chandigarh, Pathankot & New Delhi stations.',
    badge: 'Zero Wait Fee'
  },
  {
    icon: '🏔️',
    title: 'Intercity Mountain Cabs',
    desc: 'Doorstep pickup cab service connecting Delhi NCR with Manali, Shimla, Kasol & Rishikesh.',
    badge: 'Doorstep Pickup'
  },
  {
    icon: '🚙',
    title: 'High Altitude Expeditions',
    desc: 'Specialized tourist vehicles and experienced Pahadi drivers for Rohtang Pass, Spiti & Leh.',
    badge: 'Permits Included'
  },
  {
    icon: '🏞️',
    title: 'Local Sightseeing Tours',
    desc: 'Full-day customized local sightseeing tours in Manali, Shimla, Mussoorie & Rishikesh.',
    badge: 'Flexible Hours'
  },
  {
    icon: '🏨',
    title: 'Hotel & Resort Transfers',
    desc: 'Direct transfers to luxury resorts, riverside camps, and traditional mountain homestays.',
    badge: 'All Stays Covered'
  }
];

const TRUST_REASONS = [
  {
    icon: ShieldCheck,
    title: 'Experienced Mountain Drivers',
    desc: 'Native Pahadi drivers with 10+ years experience navigating steep inclines and winter snow.'
  },
  {
    icon: HeartHandshake,
    title: 'Direct Basecamp Quote',
    desc: 'Get your custom quote directly from local Pahadi coordinators with zero middleman markup.'
  },
  {
    icon: Car,
    title: 'Well-Maintained Cabs',
    desc: 'Commercial tourist permit vehicles equipped with AC, GPS tracking, and safety inspections.'
  },
  {
    icon: Clock,
    title: '24/7 Basecamp Assistance',
    desc: 'Dedicated local travel manager monitoring your journey from departure until safe arrival.'
  }
];

export default function TaxiPage() {
  const [routeKey, setRouteKey] = useState('delhi-manali');
  const [vehicleType, setVehicleType] = useState('innova-crysta');
  const [travelDate, setTravelDate] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState('4 Members');
  const [pickupLocation, setPickupLocation] = useState('Delhi');
  const [dropoffLocation, setDropoffLocation] = useState('Manali');
  
  const [rideRequest, setRideRequest] = useState<{
    start: string;
    end: string;
    distance: number;
    time: string;
    vehicleName: string;
    date: string;
    members: string;
    isSedanWarning?: boolean;
  } | null>({
    start: 'Delhi',
    end: 'Manali',
    distance: 530,
    time: '11 to 12 Hours',
    vehicleName: 'Toyota Innova Crysta',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    members: '4 Members'
  });

  const handleSubmitRequest = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const routeData = POPULAR_ROUTES.find(r => r.key === routeKey) || {
      key: 'custom',
      start: pickupLocation || 'Delhi',
      end: dropoffLocation || 'Manali',
      distance: 350,
      time: '7 to 8 Hours',
      img: ''
    };

    const isSedan = vehicleType === 'swift-dzire';
    const isRuggedRoute = routeKey === 'manali-spiti' || routeKey === 'manali-leh';
    const vehicleObj = VEHICLES.find(v => v.id === vehicleType);

    setRideRequest({
      start: routeData.start,
      end: routeData.end,
      distance: routeData.distance,
      time: routeData.time,
      vehicleName: vehicleObj?.name || 'Toyota Innova Crysta',
      date: travelDate,
      members: passengers,
      isSedanWarning: isSedan && isRuggedRoute
    });

    const element = document.getElementById('request-details-module');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectRouteCard = (route: RouteOption) => {
    setRouteKey(route.key);
    setPickupLocation(route.start);
    setDropoffLocation(route.end);
    const vehicleObj = VEHICLES.find(v => v.id === vehicleType);

    setRideRequest({
      start: route.start,
      end: route.end,
      distance: route.distance,
      time: route.time,
      vehicleName: vehicleObj?.name || 'Toyota Innova Crysta',
      date: travelDate,
      members: passengers,
      isSedanWarning: vehicleType === 'swift-dzire' && (route.key === 'manali-spiti' || route.key === 'manali-leh')
    });

    const element = document.getElementById('request-details-module');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectVehicleCard = (vId: string) => {
    setVehicleType(vId);
    const routeData = POPULAR_ROUTES.find(r => r.key === routeKey) || POPULAR_ROUTES[0];
    const vehicleObj = VEHICLES.find(v => v.id === vId);

    setRideRequest({
      start: routeData.start,
      end: routeData.end,
      distance: routeData.distance,
      time: routeData.time,
      vehicleName: vehicleObj?.name || 'Toyota Innova Crysta',
      date: travelDate,
      members: passengers,
      isSedanWarning: vId === 'swift-dzire' && (routeKey === 'manali-spiti' || routeKey === 'manali-leh')
    });
  };

  const getWhatsAppBookingUrl = () => {
    if (!rideRequest) return '#';
    const text = encodeURIComponent(
      `Hello Pahadi Bagpackers! 🚕 I want to get the cab price & book a ride:\n\n` +
      `🟢 *Pickup Location:* ${rideRequest.start}\n` +
      `📍 *Dropoff Location:* ${rideRequest.end}\n` +
      `📅 *Travel Date:* ${rideRequest.date}\n` +
      `👥 *Total Members:* ${rideRequest.members}\n` +
      `🚘 *Selected Vehicle:* ${rideRequest.vehicleName}\n\n` +
      `Please provide the best price and driver availability.`
    );
    return `https://wa.me/917018800958?text=${text}`;
  };

  return (
    <div className="bg-[#FAFBFB] min-h-screen text-slate-900 font-sans">
      
      {/* 🏞️ BRIGHT SCENIC LIGHT THEME HERO SECTION — FULL HEIGHT */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[85vh] pt-28 sm:pt-36 pb-16 sm:pb-20 flex items-center overflow-hidden border-b border-slate-200/80 bg-slate-900/10">
        
        {/* CUSTOM ULTRA-REALISTIC HIMALAYAN TAXI ROAD BACKDROP */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/himalayan_taxi_hero.jpg" 
            alt="Modern SUV Taxi driving on scenic Himalayan winding mountain road" 
            className="w-full h-full object-cover object-center scale-100 contrast-[1.05] brightness-[1.02]" 
          />
          {/* Elegant Scrim Overlay — Provides high contrast behind left text while preserving full right mountain visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent lg:from-slate-950/85 lg:via-slate-950/45 lg:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40"></div>
        </div>

        {/* HERO INNER CONTENT CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT COLUMN — HIGH CONTRAST VIBRANT TYPOGRAPHY */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-xs font-extrabold tracking-wide shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>PREMIUM HIMALAYAN TAXI SERVICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight drop-shadow-lg">
                Reliable Outstation <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 drop-shadow">
                  Cabs & Route Rides
                </span>
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm max-w-lg leading-relaxed font-medium drop-shadow-md">
                Doorstep pickup from Delhi NCR, Chandigarh & Dehradun to Manali, Shimla, Kasol, Rishikesh & Spiti Valley. Book Toyota Innova Crysta, Swift Dzire, Tempo Traveller (12/17/21 Seater), and Force Urbania!
              </p>

              {/* HIGH CONTRAST FLOATING BADGES */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="px-3 py-1.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-md">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct Admin Quote</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>10+ Yrs Native Drivers</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-md">
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Basecamp Support</span>
                </div>
              </div>

              {/* QUICK ROUTE CHIPS */}
              <div className="pt-2">
                <span className="text-xs text-slate-200 font-extrabold block mb-2 drop-shadow-sm">Popular Circuits:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Delhi ➔ Manali', key: 'delhi-manali' },
                    { label: 'Chandigarh ➔ Manali', key: 'chandigarh-manali' },
                    { label: 'Dehradun ➔ Rishikesh', key: 'dehradun-rishikesh' },
                    { label: 'Manali ➔ Spiti', key: 'manali-spiti' }
                  ].map((chip) => (
                    <button
                      key={chip.key}
                      onClick={() => {
                        setRouteKey(chip.key);
                        const r = POPULAR_ROUTES.find(item => item.key === chip.key);
                        if (r) {
                          setPickupLocation(r.start);
                          setDropoffLocation(r.end);
                        }
                      }}
                      className={`text-xs px-3 py-1 rounded-lg border transition-all ${
                        routeKey === chip.key 
                          ? 'bg-emerald-500 text-white border-emerald-400 font-bold shadow-md' 
                          : 'bg-slate-950/40 hover:bg-white/25 text-slate-100 border-white/20 font-semibold backdrop-blur-md'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — PREMIUM CAB BOOKING WIDGET */}
            <div className="lg:col-span-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/90 text-left">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest block mb-0.5">
                      INSTANT CAB PRICE REQUEST
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Plan Your Cab Ride
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg shadow-inner">
                    🚕
                  </div>
                </div>

                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  
                  {/* ROUTE SELECTOR */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-600 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Select Onboard & Drop Off Route</span>
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        8 Circuits
                      </span>
                    </label>
                    <select 
                      value={routeKey}
                      onChange={(e) => {
                        setRouteKey(e.target.value);
                        const r = POPULAR_ROUTES.find(item => item.key === e.target.value);
                        if (r) {
                          setPickupLocation(r.start);
                          setDropoffLocation(r.end);
                        }
                      }}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer shadow-sm"
                    >
                      {POPULAR_ROUTES.map(r => (
                        <option key={r.key} value={r.key}>
                          {r.start} ➔ {r.end} ({r.distance} km • {r.time})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* VEHICLE & DATE GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Vehicle Type</span>
                      </label>
                      <select 
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer shadow-sm"
                      >
                        <option value="innova-crysta">Toyota Innova Crysta (6-7 Seats)</option>
                        <option value="swift-dzire">Swift Dzire (4 Seats)</option>
                        <option value="tempo-traveller">Tempo Traveller (12, 17, 21 Seater)</option>
                        <option value="force-urbania">Force Urbania (Luxury Executive Van)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Travel Date</span>
                      </label>
                      <input 
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer shadow-sm"
                      />
                    </div>
                  </div>

                  {/* MEMBERS & ACTION BUTTON */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Passengers</span>
                      </label>
                      <select 
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all cursor-pointer shadow-sm"
                      >
                        <option value="1-3 Members">1 to 3 Members</option>
                        <option value="4-6 Members">4 to 6 Members</option>
                        <option value="7-11 Members">7 to 11 Members</option>
                        <option value="12-21 Members">12 to 21 Members</option>
                      </select>
                    </div>

                    <div className="flex items-end">
                      <button 
                        type="submit"
                        className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <span>CONFIRM DETAILS</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-1 font-semibold">
                    🔒 Free quote request • Direct WhatsApp admin connection
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 🛣️ COMPACT RIDE REQUEST DETAILS MODULE */}
      <section id="request-details-module" className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-30 mb-12">
        {rideRequest && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-lg space-y-4">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                  TRIP DETAILS READY TO SHARE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Your Taxi Request Summary
                </h2>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                Direct WhatsApp Quote
              </div>
            </div>

            {rideRequest.isSedanWarning ? (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 space-y-2 text-left">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span>⚠️ Vehicle Terrain Recommendation:</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Sedans are not recommended for high-altitude rugged terrain on <strong>{rideRequest.start} → {rideRequest.end}</strong> due to steep mountain passes. Please select <strong>Toyota Innova Crysta</strong>, <strong>Tempo Traveller</strong>, or <strong>Force Urbania</strong>.
                </p>
                <button 
                  onClick={() => handleSelectVehicleCard('innova-crysta')}
                  className="px-4 py-1.5 bg-amber-600 text-white font-bold text-[11px] uppercase rounded-lg hover:bg-amber-700"
                >
                  Switch to Innova Crysta
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
                
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-4">
                  <div className="flex items-center justify-between relative py-2">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        🟢
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">Pickup</span>
                      <span className="text-sm font-extrabold text-slate-900">{rideRequest.start}</span>
                    </div>

                    <div className="flex-1 mx-3 relative flex items-center justify-center">
                      <div className="w-full border-t-2 border-dashed border-emerald-400"></div>
                      <div className="absolute bg-white border border-slate-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-700 shadow-sm flex items-center gap-1">
                        <Route className="w-3 h-3 text-emerald-600" />
                        {rideRequest.distance} KM • {rideRequest.time}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        📍
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">Dropoff</span>
                      <span className="text-sm font-extrabold text-slate-900">{rideRequest.end}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">Date</span>
                      <span className="font-bold text-slate-900">{rideRequest.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">Members</span>
                      <span className="font-bold text-slate-900">{rideRequest.members}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">Vehicle</span>
                      <span className="font-bold text-emerald-700 truncate block">{rideRequest.vehicleName}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-slate-950 text-white rounded-xl p-5 space-y-4 shadow-md">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-widest block">
                      GET PRICE FROM ADMIN
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Send Request to Admin
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Click below to send your route, members & vehicle preference to our Pahadi Basecamp Admin on WhatsApp for instant price quote.
                    </p>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>SEND TO ADMIN ON WHATSAPP 📲</span>
                  </a>
                </div>

              </div>
            )}

          </div>
        )}
      </section>

      {/* 🚙 SECTION: TYPES OF VEHICLES WE OFFER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 space-y-12">
        
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
              PAHADI FLEET CATEGORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Types of Vehicles We Offer
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select your preferred vehicle category and request custom pricing directly from admin.
            </p>
          </div>

          {/* VEHICLES GRID — 4 VEHICLES ONLY WITH CLEAN STUDIO CONTAINERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEHICLES.map((v) => {
              return (
                <div 
                  key={v.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div className="relative h-52 bg-white flex items-center justify-center p-3 border-b border-slate-100 overflow-hidden">
                    <img 
                      src={v.img} 
                      alt={v.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-300 font-bold border border-white/20">
                      {v.tag}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-3 text-left flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">{v.name}</h3>
                      <p className="text-[11px] text-slate-500 font-medium">{v.models}</p>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
                        <strong>Ideal Suits:</strong> {v.idealFor}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {v.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{v.seats}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{v.luggage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-slate-100">
                    <button
                      onClick={() => handleSelectVehicleCard(v.id)}
                      className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>SELECT & GET QUOTE</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 🌟 SUB-SECTION 2: FACILITIES OFFERED */}
        <div className="pt-10 border-t border-slate-200/80 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
              IN-CABIN COMFORT & SAFETY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Facilities Offered in Our Vehicles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VEHICLE_FACILITIES.map((fac, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 text-left space-y-2 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{fac.icon}</span>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-mono font-bold rounded border border-emerald-200">
                      {fac.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{fac.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{fac.desc}</p>
                </div>

                <div className="pt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Standard in All Cabs</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 📍 POPULAR HIMALAYAN ROUTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
            FEATURED TRANSIT CIRCUITS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Popular Himalayan Routes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POPULAR_ROUTES.map((route) => (
            <div 
              key={route.key}
              onClick={() => handleSelectRouteCard(route)}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={route.img} 
                  alt={`${route.start} to ${route.end}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[9px] font-mono uppercase font-bold text-emerald-300 block">
                    {route.distance} KM • {route.time}
                  </span>
                  <h4 className="text-base font-extrabold uppercase">
                    {route.start} → {route.end}
                  </h4>
                </div>
              </div>

              <div className="p-3 bg-slate-50 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-emerald-700">
                <span>Request Fare Quote</span>
                <span className="text-slate-800 group-hover:text-emerald-600 flex items-center gap-1">
                  Select Route &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ✈️ AIRPORT & TRANSFER SERVICES */}
      <section className="bg-white border-y border-slate-200 py-12 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
              SPECIALIZED LOGISTICS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Airport & Transfer Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <div 
                key={idx}
                className="bg-[#FAFBFB] border border-slate-200/90 rounded-xl p-5 text-left space-y-3 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-semibold rounded-full">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🛡️ TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-10 shadow-xl text-left">
          <div className="max-w-xl mb-8 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              PAHADI TRAVEL GUARANTEE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Why Book Your Mountain Ride With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_REASONS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="space-y-2 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ❓ FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16 text-left space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
            NEED CLARIFICATION?
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm">How do I get the price for my taxi booking?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">Simply select your pickup point, dropoff destination, travel date, number of members, and vehicle type (Innova Crysta, Swift Dzire, Tempo Traveller 12/17/21 Seater, or Urbania). Click "Send to Admin on WhatsApp", and our basecamp coordinator will immediately calculate and send you the exact guaranteed price.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm">What happens if my flight or train is delayed?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">Our drivers track your flight/train number in real time. We do not charge wait-penalty fees for flight or train delays at Delhi, Chandigarh, Haridwar, or Dehradun airports and stations.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm">Are your drivers trained for high-altitude passes like Rohtang Pass, Spiti or Leh?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">Absolutely. All our drivers are native Pahadi local drivers with over 10+ years of mountain pass driving experience, trained specifically for snow conditions and steep water crossings.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
