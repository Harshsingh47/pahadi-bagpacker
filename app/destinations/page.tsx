'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, MapPin, Calendar, Compass, ArrowUpRight, 
  Sparkles, Mountain, Waves, Trees, Snowflake, Star, 
  CheckCircle2, ArrowRight, ShieldCheck, Navigation, Crosshair, Sun, Palmtree, Building
} from 'lucide-react';

interface DestinationItem {
  slug: string;
  name: string;
  subtitle: string;
  region: 'himachal' | 'uttarakhand' | 'ladakh' | 'west' | 'south';
  state: string;
  altitude: string;
  bestTime: string;
  idealDuration: string;
  rating: string;
  reviews: string;
  tag: string;
  highAltitude: boolean;
  img: string;
  highlights: string[];
  desc: string;
}

const ALL_DESTINATIONS: DestinationItem[] = [
  {
    slug: 'spiti-valley',
    name: 'Spiti Valley Expedition',
    subtitle: 'THE MIDDLE LAND TRANS-HIMALAYAN CIRCUIT',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '3,800 meters',
    bestTime: 'May - October',
    idealDuration: '7 to 9 Days',
    rating: '4.96',
    reviews: '220+',
    tag: 'Cold Desert Expedition',
    highAltitude: true,
    img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    highlights: ['Key Monastery 4,166m', 'Chandratal Lake 4,300m', 'Hikkim Highest Post Office', 'Chicham Bridge & Pin Valley'],
    desc: 'Stark high-altitude trans-Himalayan expedition across ancient thousand-year cliffside monasteries, turquoise glacial lakes, and world-record high villages.'
  },
  {
    slug: 'leh-ladakh',
    name: 'Leh & Ladakh Circuit',
    subtitle: 'THE HIGH-ALTITUDE MOUNTAIN KINGDOM',
    region: 'ladakh',
    state: 'Ladakh',
    altitude: '3,500 meters',
    bestTime: 'May - September',
    idealDuration: '7 to 10 Days',
    rating: '4.98',
    reviews: '390+',
    tag: 'High Pass Circuit',
    highAltitude: true,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    highlights: ['Pangong Tso Lake', 'Nubra Valley Sand Dunes', 'Khardung La Pass 5,359m', 'Shanti Stupa & Thiksey'],
    desc: 'Perched high in the Trans-Himalayas, Leh offers turquoise high-altitude lakes, world high motorable passes, double-humped camels, and serene monasteries.'
  },
  {
    slug: 'goa',
    name: 'Goa Coastal & Heritage Tour',
    subtitle: 'SUN-DRENCHED BEACHES, LATIN QUARTERS & FORTS',
    region: 'west',
    state: 'Goa',
    altitude: 'Sea Level',
    bestTime: 'October - May',
    idealDuration: '4 to 6 Days',
    rating: '4.92',
    reviews: '380+',
    tag: 'Beaches & Heritage',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Baga & Palolem Beaches', 'Fontainhas Latin Quarter Walk', 'Aguada & Chapora Forts', 'Dudhsagar Waterfalls & Spice Plantations'],
    desc: 'Golden sand beaches, historic Portuguese churches, vibrant beach shacks, water sports adventures, and lush spice plantations along the Arabian Sea.'
  },
  {
    slug: 'kerala',
    name: 'Kerala Backwaters & Tea Valleys',
    subtitle: 'GOD’S OWN COUNTRY & TROPICAL HAVENS',
    region: 'south',
    state: 'Kerala',
    altitude: 'Sea Level to 1,600m',
    bestTime: 'September - March',
    idealDuration: '5 to 8 Days',
    rating: '4.97',
    reviews: '520+',
    tag: 'Backwaters & Tea Hills',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    highlights: ['Alleppey Houseboat Cruise', 'Munnar Tea Estate Slopes', 'Wayanad Wildlife Sanctuary', 'Varkala Cliffside Ocean View'],
    desc: 'Tranquil palm-fringed backwater houseboats, mist-covered Munnar tea hills, Ayurvedic wellness retreats, and golden cliffside ocean beaches.'
  },
  {
    slug: 'mumbai',
    name: 'Mumbai City & Coastal Tour',
    subtitle: 'CITY OF DREAMS, COLONIAL HERITAGE & SEA BREEZE',
    region: 'west',
    state: 'Maharashtra',
    altitude: 'Sea Level',
    bestTime: 'October - March',
    idealDuration: '2 to 4 Days',
    rating: '4.89',
    reviews: '410+',
    tag: 'Metropolis & Coast',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Gateway of India & Taj Mahal Palace', 'Marine Drive Sunset Promenade', 'Elephanta Caves Island Boat Trip', 'Colonial Art & Food Walk'],
    desc: 'India’s buzzing coastal metropolis blending Victorian heritage architecture, seaside promenades, Bollywood glamour, and iconic street food culture.'
  },
  {
    slug: 'gujarat',
    name: 'Gujarat Great Rann & Cultural Circuit',
    subtitle: 'WHITE SALT DESERT, LIONS & ANCIENT TEMPLES',
    region: 'west',
    state: 'Gujarat',
    altitude: '15 meters',
    bestTime: 'November - March',
    idealDuration: '5 to 7 Days',
    rating: '4.94',
    reviews: '290+',
    tag: 'Salt Desert & Wildlife',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    highlights: ['Rann of Kutch White Salt Desert', 'Gir Asiatic Lion Safari', 'Somnath & Dwarka Coastal Shrines', 'Statue of Unity & Handicrafts'],
    desc: 'Stunning white salt desert during Rann Utsav, sanctuary of Asiatic Lions in Gir, sacred coastal temples of Dwarka & Somnath, and rich handicraft traditions.'
  },
  {
    slug: 'manali',
    name: 'Manali & Solang Valley',
    subtitle: 'THE CROWN JEWEL OF KULLU VALLEY',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '2,050 meters',
    bestTime: 'March - June / Oct - Feb',
    idealDuration: '3 to 5 Days',
    rating: '4.90',
    reviews: '240+',
    tag: 'Alpine & Snow',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    highlights: ['Old Manali Cafes', 'Atal Tunnel Sissu', 'Solang Paragliding', 'Jogini Falls'],
    desc: 'Nestled on the Beas riverbanks, Manali offers the ultimate mix of backpacker cafe culture, pine forest trails, and high-pass gateways.'
  },
  {
    slug: 'kasol',
    name: 'Kasol & Parvati Valley',
    subtitle: 'MINI ISRAEL OF THE HIMALAYAS',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '1,580 meters',
    bestTime: 'All Year Round',
    idealDuration: '3 to 5 Days',
    rating: '4.85',
    reviews: '310+',
    tag: 'Backpacker Hub',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80',
    highlights: ['Tosh Village Hike', 'Kheerganga Hot Springs', 'Chalal Pine Trail', 'Israeli Dining'],
    desc: 'Pine-scented mountain haven famous for bohemian cafes, gushing Parvati river, and gateway access to Tosh & Kheerganga trails.'
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh & Ganga Valley',
    subtitle: 'YOGA & ADVENTURE CAPITAL OF INDIA',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    altitude: '340 meters',
    bestTime: 'September - May',
    idealDuration: '2 to 4 Days',
    rating: '4.92',
    reviews: '420+',
    tag: 'Rafting & Yoga',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    highlights: ['Grade IV White-Water Rafting', 'Triveni Ganga Aarti', 'Beatles Ashram', 'Bungee Jump'],
    desc: 'The sacred river city where the emerald Ganges leaves the Himalayas. Famous for rafting, beach camps, yoga retreats, and Ganga Aarti.'
  },
  {
    slug: 'chopta',
    name: 'Chopta & Tungnath',
    subtitle: 'MINI SWITZERLAND OF INDIA',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    altitude: '2,680 meters',
    bestTime: 'March - June / Oct - Dec',
    idealDuration: '3 to 4 Days',
    rating: '4.91',
    reviews: '160+',
    tag: 'Mini Switzerland',
    highAltitude: true,
    img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Tungnath Highest Temple', 'Chandrashila 4,000m Peak', 'Deoriatal Lake', 'Chopta Bugyal'],
    desc: 'Unspoiled velvet alpine meadows serving as basecamp for the world’s highest Shiva temple and Chandrashila 360-degree peak views.'
  },
  {
    slug: 'kinnaur-kalpa',
    name: 'Kinnaur & Kalpa Valley',
    subtitle: 'LAND OF GODS & APPLE ORCHARDS',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '2,960 meters',
    bestTime: 'April - October',
    idealDuration: '4 to 6 Days',
    rating: '4.91',
    reviews: '130+',
    tag: 'High Pass & Orchards',
    highAltitude: true,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['Kinnaur Kailash Peak', 'Chitkul Last Village', 'Sangla Valley', 'Suicide Point Kalpa'],
    desc: 'Breathtaking apple orchard valley nestled beneath the sacred Kinnaur Kailash massifs and gateway to the last village Chitkul.'
  },
  {
    slug: 'mussoorie-landour',
    name: 'Mussoorie & Landour',
    subtitle: 'QUEEN OF THE HILLS & COLONIAL CHARM',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    altitude: '2,005 meters',
    bestTime: 'September - June',
    idealDuration: '2 to 3 Days',
    rating: '4.86',
    reviews: '290+',
    tag: 'Heritage & Views',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    highlights: ['Landour Bakehouse', 'Kempty Falls', 'Lal Tibba Viewpoint', 'George Everest Peak'],
    desc: 'Historic British-era hill station with cobblestone lanes in Landour, panoramic Doon valley sunset views, and heritage bakeries.'
  },
  {
    slug: 'bir-billing',
    name: 'Bir Billing',
    subtitle: 'WORLD’S #2 PARAGLIDING CAPITAL',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '1,525 meters',
    bestTime: 'October - Dec / Mar - Jun',
    idealDuration: '2 to 3 Days',
    rating: '4.90',
    reviews: '190+',
    tag: 'Paragliding',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80',
    highlights: ['2,400m Tandem Paragliding', 'Chokling Stupa', 'Tea Garden Cycling', 'Rajgundha Hike'],
    desc: 'Soar through thermals from Asia’s highest takeoff point down over green tea plantations, Tibetan monasteries, and sunset cafes.'
  },
  {
    slug: 'jibhi-tirthan',
    name: 'Jibhi & Tirthan Valley',
    subtitle: 'UNTOUCHED BANJAR VALLEY WILDERNESS',
    region: 'himachal',
    state: 'Himachal Pradesh',
    altitude: '1,600 meters',
    bestTime: 'March - November',
    idealDuration: '3 to 5 Days',
    rating: '4.93',
    reviews: '145+',
    tag: 'Offbeat Valley',
    highAltitude: false,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['Jibhi Waterfall Bridge', 'Jalori Pass & Serolsar Lake', 'Chehni Kothi Tower', 'Trout Angling'],
    desc: 'Quaint wooden homestays alongside crystal streams, lush pine forests, and UNESCO World Heritage Tirthan national park.'
  },
  {
    slug: 'auli-joshimath',
    name: 'Auli & Joshimath',
    subtitle: 'INDIA’S PREMIER ALPINE SKI RESORT',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    altitude: '2,800 meters',
    bestTime: 'Dec - March (Ski) / April - June',
    idealDuration: '3 to 4 Days',
    rating: '4.94',
    reviews: '270+',
    tag: 'Ski Resort & Cable Car',
    highAltitude: true,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    highlights: ['Auli Ski Slopes', 'Joshimath Cable Car', 'Nanda Devi Views', 'Gorson Bugyal'],
    desc: 'Panoramic ski slopes surrounded by 7,000m Himalayan giants including Nanda Devi, Kamet, and Dunagiri.'
  }
];

// Quick Location Pins
const MAP_PINS = [
  { name: 'Spiti Expedition', query: 'spiti', alt: '3,800m' },
  { name: 'Leh Ladakh', query: 'leh', alt: '3,500m' },
  { name: 'Goa', query: 'goa', alt: 'Sea Level' },
  { name: 'Kerala', query: 'kerala', alt: 'Backwaters' },
  { name: 'Mumbai', query: 'mumbai', alt: 'Coastal' },
  { name: 'Gujarat', query: 'gujarat', alt: 'Rann Salt' },
  { name: 'Manali', query: 'manali', alt: '2,050m' },
  { name: 'Rishikesh', query: 'rishikesh', alt: '340m' },
];

// Featured Map Pin Cards with real photos
const FEATURED_MAP_CARDS = [
  {
    name: 'Spiti Expedition',
    query: 'spiti',
    alt: '3,800m',
    region: 'Himachal',
    img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=300&q=80',
    slug: 'spiti-valley',
    badge: 'Key Monastery & Lakes'
  },
  {
    name: 'Leh Ladakh',
    query: 'leh',
    alt: '3,500m',
    region: 'Ladakh',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80',
    slug: 'leh-ladakh',
    badge: 'Pangong Tso & Passes'
  },
  {
    name: 'Goa Coast',
    query: 'goa',
    alt: 'Sea Level',
    region: 'West India',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300&q=80',
    slug: 'goa',
    badge: 'Beaches & Forts'
  },
  {
    name: 'Kerala Backwaters',
    query: 'kerala',
    alt: 'Tea Hills',
    region: 'South India',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=300&q=80',
    slug: 'kerala',
    badge: 'Houseboats & Tea Hills'
  }
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'himachal' | 'uttarakhand' | 'ladakh' | 'west' | 'south' | 'highAltitude'>('all');

  const filteredDestinations = ALL_DESTINATIONS.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      item.name.toLowerCase().includes(query) ||
      item.state.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.highlights.some(h => h.toLowerCase().includes(query));

    if (!matchesSearch) return false;

    if (activeFilter === 'himachal') return item.region === 'himachal';
    if (activeFilter === 'uttarakhand') return item.region === 'uttarakhand';
    if (activeFilter === 'ladakh') return item.region === 'ladakh';
    if (activeFilter === 'west') return item.region === 'west';
    if (activeFilter === 'south') return item.region === 'south';
    if (activeFilter === 'highAltitude') return item.highAltitude;
    return true;
  });

  return (
    <div className="pb-24 bg-[#F8FAF9] min-h-screen text-slate-900">
      
      {/* 🗺️ EXPEDITION CARTOGRAPHY HERO SECTION */}
      <div className="relative bg-[#F8FAF9] text-slate-900 pt-32 sm:pt-38 lg:pt-40 pb-16 sm:pb-24 overflow-hidden mb-12 border-b border-slate-200/90 shadow-sm">
        
        {/* RICH STYLIZED TOPOGRAPHIC CARTOGRAPHY BACKGROUND CANVAS */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-100/60 via-[#F8FAF9] to-slate-100"></div>

          {/* TOPOGRAPHIC MAP CONTOURS */}
          <svg className="w-full h-full opacity-35" viewBox="0 0 1440 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cartoGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#059669" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.3" />
                <circle cx="50" cy="50" r="1.5" fill="#059669" opacity="0.4" />
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#cartoGrid)" />

            <g fill="none" stroke="#059669" opacity="0.5">
              <path d="M -100 180 C 250 80, 450 320, 850 140 C 1100 50, 1300 240, 1600 120" strokeWidth="1.2" />
              <path d="M -100 220 C 250 120, 450 360, 850 180 C 1100 90, 1300 280, 1600 160" strokeWidth="0.8" opacity="0.7" />
              <path d="M -100 260 C 250 160, 450 400, 850 220 C 1100 130, 1300 320, 1600 200" strokeWidth="0.6" opacity="0.5" />
            </g>

            <path 
              d="M 180 520 Q 420 280 720 340 T 1280 200" 
              fill="none" 
              stroke="#D97706" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              opacity="0.7"
            />
          </svg>
        </div>

        {/* GPS COORDINATES */}
        <div className="absolute top-28 left-6 text-[10px] font-mono text-slate-500 tracking-widest pointer-events-none hidden sm:flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/90 border border-slate-200 text-emerald-800 font-bold shadow-sm">
            <Compass className="w-3 h-3 text-emerald-600" /> INDIA EXPLORER MAP
          </span>
          <span>GOA • MUMBAI • GUJARAT • KERALA • LEH-LADAKH • SPITI</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT COLUMN — DISCOVERY HEADLINE & SEARCH */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* EXPLORATION BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-900 text-xs font-medium shadow-md backdrop-blur-md">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm">
                  <Compass className="w-3.5 h-3.5" /> ALL INDIA TOURS
                </span>
                <span className="text-emerald-800 font-mono text-[11px] font-semibold flex items-center gap-1.5 px-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  Curated Destinations & Circuits
                </span>
              </div>

              {/* MAIN HEADING */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight uppercase font-heading">
                DISCOVER YOUR NEXT <span className="text-emerald-700">TOUR & ESCAPE</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-medium">
                From high-altitude cold deserts of Spiti & Leh-Ladakh to golden beaches of Goa, backwaters of Kerala, heritage of Gujarat, and coastal vibing of Mumbai.
              </p>

              {/* SEARCH BAR */}
              <div className="pt-1 max-w-xl">
                <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl border border-slate-200/90 ring-1 ring-emerald-500/10">
                  <Search className="w-5 h-5 text-emerald-600 ml-3.5 shrink-0 pointer-events-none" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Goa, Mumbai, Kerala, Gujarat, Leh, Spiti, Manali..."
                    className="w-full bg-transparent border-0 outline-none px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  {searchQuery ? (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-3.5 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl mr-1 transition-colors"
                    >
                      Clear
                    </button>
                  ) : (
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 mr-1 shrink-0">
                      <Crosshair className="w-3.5 h-3.5 text-emerald-600" /> Active Search
                    </span>
                  )}
                </div>
              </div>

              {/* QUICK DESTINATION SELECTOR CHIPS */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider font-bold">
                    Featured Destinations:
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  {MAP_PINS.map((pin) => {
                    const isSelected = searchQuery.toLowerCase() === pin.query.toLowerCase();
                    return (
                      <button
                        key={pin.name}
                        onClick={() => setSearchQuery(isSelected ? '' : pin.query)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 shadow-sm border ${
                          isSelected 
                            ? 'bg-emerald-600 text-white font-bold border-emerald-500 ring-2 ring-emerald-400/40 scale-105' 
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-emerald-400'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-600'}`}></span>
                        <span>{pin.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — POLAROID CARDS */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 min-h-[380px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-md">
                {FEATURED_MAP_CARDS.map((card, idx) => {
                  const isSelected = searchQuery.toLowerCase() === card.query.toLowerCase();
                  return (
                    <div
                      key={card.name}
                      onClick={() => setSearchQuery(isSelected ? '' : card.query)}
                      className={`cursor-pointer rounded-2xl p-2.5 bg-white border transition-all duration-300 backdrop-blur-xl shadow-xl group hover:-translate-y-1.5 ${
                        isSelected 
                          ? 'border-emerald-600 ring-2 ring-emerald-500/40 bg-emerald-50/30 scale-105' 
                          : 'border-slate-200/90 hover:border-emerald-500/60 hover:shadow-2xl'
                      } ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                    >
                      <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                        <img 
                          src={card.img} 
                          alt={card.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-mono font-bold rounded-md border border-slate-200 shadow-sm">
                          {card.region}
                        </div>
                      </div>

                      <div className="px-1 space-y-0.5 text-left">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-700 block font-bold">
                          {card.badge}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                          {card.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 2. MAIN CONTAINER WITH FILTER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* REGION FILTER TABS */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 mb-8 border-b border-slate-200/80">
          
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: 'all', label: 'All Tours', icon: Compass, count: ALL_DESTINATIONS.length },
              { id: 'himachal', label: 'Himachal & Spiti', icon: Trees, count: ALL_DESTINATIONS.filter(d => d.region === 'himachal').length },
              { id: 'ladakh', label: 'Leh & Ladakh', icon: Snowflake, count: ALL_DESTINATIONS.filter(d => d.region === 'ladakh').length },
              { id: 'uttarakhand', label: 'Uttarakhand', icon: Waves, count: ALL_DESTINATIONS.filter(d => d.region === 'uttarakhand').length },
              { id: 'west', label: 'Goa, Mumbai & Gujarat', icon: Sun, count: ALL_DESTINATIONS.filter(d => d.region === 'west').length },
              { id: 'south', label: 'Kerala & South', icon: Palmtree, count: ALL_DESTINATIONS.filter(d => d.region === 'south').length },
              { id: 'highAltitude', label: 'High Pass Circuits', icon: Mountain, count: ALL_DESTINATIONS.filter(d => d.highAltitude).length }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 hover:text-slate-900 shadow-xs'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong>{filteredDestinations.length}</strong> of <strong>{ALL_DESTINATIONS.length}</strong> tour circuits
          </div>

        </div>

        {/* 3. DESTINATIONS GRID */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredDestinations.map((item) => (
              <div 
                key={item.slug}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden group hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  {/* TOP BADGES */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-lg backdrop-blur-md shadow-sm bg-emerald-600/90 text-white border border-emerald-400/40">
                      {item.state}
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-emerald-300 text-[10px] font-mono font-bold rounded-lg shadow-sm flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-emerald-400" /> {item.altitude}
                    </span>
                  </div>

                  {/* RATING FLOATING BADGE */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1 px-2.5 py-0.5 bg-slate-950/85 backdrop-blur-md rounded-full text-amber-400 font-bold text-[11px] border border-white/10 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-white font-bold">{item.rating}</span>
                    <span className="text-slate-400 text-[9px]">({item.reviews})</span>
                  </div>

                  {/* TAG BADGE */}
                  <div className="absolute bottom-2.5 right-3 px-2.5 py-0.5 bg-emerald-600 text-white font-bold text-[9px] uppercase tracking-wider rounded-full shadow-sm">
                    {item.tag}
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-700 block mb-0.5">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* ATTRACTIONS HIGHLIGHT PILLS */}
                    <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-slate-100">
                      {item.highlights.slice(0, 3).map((h, idx) => (
                        <span key={idx} className="text-[9px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          • {h}
                        </span>
                      ))}
                    </div>

                    {/* METADATA INLINE GRID */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] bg-slate-50 border border-slate-200/70 rounded-xl p-2 text-slate-700">
                      <div className="truncate">
                        <span className="text-slate-400 text-[10px] block font-medium">🗓️ Best Season</span>
                        <strong className="text-slate-900 font-bold text-xs truncate block">{item.bestTime}</strong>
                      </div>
                      <div className="truncate">
                        <span className="text-slate-400 text-[10px] block font-medium">⏱️ Ideal Stay</span>
                        <strong className="text-slate-900 font-bold text-xs truncate block">{item.idealDuration}</strong>
                      </div>
                    </div>
                  </div>

                  {/* ACTION FOOTER BUTTON */}
                  <div className="pt-1">
                    <Link
                      href={`/destinations/${item.slug}`}
                      className="w-full py-2.5 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <span>View Tour Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white transition-colors" />
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="bg-white border border-slate-200/80 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
              🔍
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">No Tours Found</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We couldn't find any tours matching "<strong>{searchQuery}</strong>". Try clearing your search or switching region tabs.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
