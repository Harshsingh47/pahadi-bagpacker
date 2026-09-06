'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, Calendar, Mountain, MapPin, Car, ShieldCheck, HeartHandshake, 
  Utensils, CheckCircle2, ArrowRight, Navigation, Crosshair, Sparkles, 
  Clock, Thermometer, Bus, Plane, Coffee, Home, Route, Check, Star, Wind
} from 'lucide-react';

interface Attraction {
  title: string;
  desc: string;
  icon: string;
  tag: string;
}

interface DayPlan {
  day: string;
  title: string;
  desc: string;
}

interface DestinationData {
  slug: string;
  name: string;
  subtitle: string;
  state: string;
  altitude: string;
  bestTime: string;
  idealDuration: string;
  temp: string;
  nearestHub: string;
  heroImg: string;
  overview: string;
  attractions: Attraction[];
  treks: { name: string; duration: string; diff: string; link: string }[];
  howToReach: { mode: string; detail: string }[];
  foodAndStay: { title: string; desc: string; icon: string }[];
  itinerary: DayPlan[];
}

const DESTINATIONS: Record<string, DestinationData> = {
  'manali': {
    slug: 'manali',
    name: 'Manali',
    subtitle: 'THE CROWN JEWEL OF KULLU VALLEY',
    state: 'Himachal Pradesh',
    altitude: '2,050 meters (6,725 ft)',
    bestTime: 'March - June (Greenery) / Oct - Feb (Snow)',
    idealDuration: '3 to 5 Days',
    temp: '-5°C to 24°C',
    nearestHub: 'Bhuntar Airport (50 km) / Chandigarh (290 km)',
    heroImg: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80',
    overview: 'Nestled on the banks of the Beas River, Manali is India’s premier Himalayan adventure hub. From the laid-back cafes of Old Manali to high-altitude pass crossings like Rohtang & Atal Tunnel into Lahaul, Manali offers the perfect mix of backpacker culture, pine forest trails, and thrill sports.',
    attractions: [
      { title: 'Old Manali Culture Walk', desc: 'Cobblestone alleyways, traditional wooden Pahadi houses, vibrant cafes, and the ancient Manu Temple.', icon: '🏔️', tag: 'Culture & Cafes' },
      { title: 'Solang Valley & Atal Tunnel', desc: 'Drive through the iconic 9.02 km Atal Tunnel to Sissu Waterfall, or enjoy paragliding and zorbing in Solang.', icon: '🚗', tag: 'Road Trip' },
      { title: 'Hadimba & Jogini Waterfalls Trek', desc: 'Short pine forest trek leading to the cascading Jogini Waterfalls with panoramic views of the Beas Valley.', icon: '🥾', tag: 'Day Trek' },
      { title: 'Sethan Village (Igloo & Stargazing)', desc: 'Offbeat Buddhist hamlet at 2,700m famous for winter igloo stays, bouldering, and unobstructed Milky Way views.', icon: '⛺', tag: 'Offbeat Village' }
    ],
    treks: [
      { name: 'Hampta Pass Trek', duration: '5 Days', diff: 'Moderate', link: '/treks/hampta-pass' },
      { name: 'Beas Kund Trek', duration: '3 Days', diff: 'Beginner', link: '/treks/beas-kund' },
      { name: 'Bhrigu Lake Alpine Trek', duration: '4 Days', diff: 'Moderate', link: '/treks/bhrigu-lake' }
    ],
    howToReach: [
      { mode: 'Overnight Volvo Bus', detail: 'Daily AC Volvo buses from ISBT Kashmiri Gate Delhi (12-14 hrs) and Chandigarh (8-9 hrs).' },
      { mode: 'Private Taxi / Cab', detail: 'Direct pickup from Delhi NCR, Chandigarh Airport, or Kalka Railway Station.' },
      { mode: 'Flight Access', detail: 'Fly into Bhuntar Airport (Kullu), located 50 km from Manali town.' }
    ],
    foodAndStay: [
      { title: 'Local Pahadi Dishes', desc: 'Must try local Siddu with ghee, fresh Beas trout fish, Himalayan honey, and authentic Thukpa.', icon: '🍲' },
      { title: 'Stay Vibe', desc: 'Backpacker hostels in Old Manali, luxury riverside resorts in Aleo, and apple orchard homestays in Vashisht.', icon: '🏡' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Manali → Old Manali Cafe Hopping', desc: 'Check into your stay, stroll through Hadimba Temple and Old Manali street markets, relax by the Beas river.' },
      { day: 'Day 02', title: 'Solang Valley Adventure & Atal Tunnel Sissu Drive', desc: 'Morning paragliding in Solang Valley. Drive across Atal Tunnel to Sissu waterfall in Lahaul Valley.' },
      { day: 'Day 03', title: 'Jogini Waterfall Trek & Vashisht Sulphur Hot Springs', desc: 'Scenic morning hike through pine forests to Jogini Falls. Dip in natural sulphur hot springs in Vashisht.' },
      { day: 'Day 04', title: 'Sethan Village Sunset & Campfire Stargazing', desc: 'Ascend to Sethan Igloo Village for panoramic valley views and evening bonfire.' },
      { day: 'Day 05', title: 'Mall Road Shopping → Departure', desc: 'Buy local Kullu shawls and organic honey before catching evening return bus.' }
    ]
  },

  'spiti-valley': {
    slug: 'spiti-valley',
    name: 'Spiti Valley',
    subtitle: 'THE MIDDLE LAND BETWEEN INDIA AND TIBET',
    state: 'Himachal Pradesh',
    altitude: '3,800 meters (12,500 ft)',
    bestTime: 'May - October (Overland Access)',
    idealDuration: '6 to 9 Days',
    temp: '-20°C to 15°C',
    nearestHub: 'Shimla (415 km) / Manali (200 km)',
    heroImg: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=2000&q=80',
    overview: 'Spiti Valley is a high-altitude cold mountain desert characterized by stark lunar landscapes, thousand-year-old Tibetan monasteries perched on cliffs, turquoise alpine lakes like Chandratal, and the highest inhabited villages in the world.',
    attractions: [
      { title: 'Key Monastery (Ki Gompa)', desc: 'Iconic 1,000-year-old Tibetan Buddhist monastery resting atop a conical hill at 4,166m.', icon: '🛕', tag: 'Spiritual Heritage' },
      { title: 'Chandratal (Crescent Moon Lake)', desc: 'Pristine high-altitude lake at 4,300m reflecting snow peaks and changing colors throughout the day.', icon: '🌊', tag: 'High Alpine Lake' },
      { title: 'Hikkim Highest Post Office', desc: 'Send a handwritten postcard to loved ones from the highest functioning post office on Earth (4,400m).', icon: '📬', tag: 'World Record' },
      { title: 'Langza Fossil Village', desc: 'Search for prehistoric marine fossils in a high-altitude village overlooked by a huge Buddha statue.', icon: '🗿', tag: 'History & Fossils' }
    ],
    treks: [
      { name: 'Pin Parvati Pass Trek', duration: '11 Days', diff: 'Challenging', link: '/treks' },
      { name: 'Chandratal Lake Circuit Trek', duration: '3 Days', diff: 'Moderate', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Shimla-Kaza Circuit Drive', detail: 'Gradual acclimatization route via Kinnaur, Kalpa, Nako, and Tabo (Recommended).' },
      { mode: 'Manali-Kaza Route via Kunzum Pass', detail: 'Shorter rugged high-pass route opening from June to October (Thar 4x4 or SUV required).' }
    ],
    foodAndStay: [
      { title: 'Spitian Cuisine', desc: 'Savor warm Butter Tea (Gur Gur Chai), Seabuckthorn tea, Spitian Tingmo bread, and Chhang.', icon: '🍵' },
      { title: 'Homestay Experience', desc: 'Stay in solar-heated traditional Mud Homestays with native Spitian families in Kaza and Kibber.', icon: '🏕️' }
    ],
    itinerary: [
      { day: 'Day 01-02', title: 'Shimla to Kalpa via Kinnaur Valley', desc: 'Drive alongside Sutlej river, view Kinnaur Kailash peak.' },
      { day: 'Day 03-04', title: 'Kalpa to Kaza via Nako Lake & Tabo Monastery', desc: 'Visit 996 AD Tabo Monastery, Dhankar cliff fort, and enter Kaza town.' },
      { day: 'Day 05', title: 'Kaza Local: Hikkim, Komic & Langza Buddha Statue', desc: 'Visit highest post office, highest motorable village (Komic), and fossil hunting.' },
      { day: 'Day 06', title: 'Kaza to Key Monastery & Kibber → Chandratal Lake Camp', desc: 'Explore Key Monastery, cross Chicham Bridge (highest bridge), camp near Chandratal.' },
      { day: 'Day 07', title: 'Chandratal → Atal Tunnel → Manali Departure', desc: 'Cross Batal, Rohtang/Atal Tunnel, descend into lush Manali.' }
    ]
  },

  'kasol': {
    slug: 'kasol',
    name: 'Kasol & Parvati Valley',
    subtitle: 'MINI ISRAEL OF THE HIMALAYAS',
    state: 'Himachal Pradesh',
    altitude: '1,580 meters (5,180 ft)',
    bestTime: 'All Year Round',
    idealDuration: '3 to 5 Days',
    temp: '2°C to 28°C',
    nearestHub: 'Bhuntar Airport (31 km) / Chandigarh (275 km)',
    heroImg: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=2000&q=80',
    overview: 'Kasol is a magical hamlet tucked in the pine-scented Parvati Valley. Famous for its bohemian cafe culture, gushing turquoise Parvati river, Israeli delicacies, and gateway access to offbeat mountain villages like Tosh, Chalal, and Kheerganga.',
    attractions: [
      { title: 'Tosh Village & Waterfall Walk', desc: 'Quaint wooden village offering magnificent views of Tosh Glacier and snow-capped peaks.', icon: '🏔️', tag: 'Alpine Village' },
      { title: 'Kheerganga Hot Water Springs Trek', desc: '12 km forest trek culminating in natural hot sulphur springs amidst snow mountain vistas.', icon: '♨️', tag: 'Hot Springs Trek' },
      { title: 'Manikaran Sahib Gurudwara', desc: 'Sacred Sikh shrine with natural boiling hot springs where food is cooked in hot water pits.', icon: '🕉️', tag: 'Spiritual Shrine' },
      { title: 'Chalal Riverside Pine Trail', desc: 'Peaceful 30-minute footbridge trail through tall pine woods following the Parvati river.', icon: '🌲', tag: 'Riverside Walk' }
    ],
    treks: [
      { name: 'Kheerganga Trek', duration: '2 Days', diff: 'Beginner', link: '/treks' },
      { name: 'Sar Pass Trek', duration: '5 Days', diff: 'Moderate', link: '/treks' },
      { name: 'Grahan Village Trek', duration: '2 Days', diff: 'Beginner', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Volvo Bus to Bhuntar', detail: 'Take Delhi/Chandigarh Volvo bus, get off at Bhuntar circle, transfer to local taxi or bus to Kasol (30 km).' },
      { mode: 'Direct Private Cab', detail: 'Seamless taxi cab booking directly to Kasol, Tosh, or Manikaran.' }
    ],
    foodAndStay: [
      { title: 'Israeli & Alpine Delicacies', desc: 'Falafel platter, Shakshuka, Nutella Crepes, and fresh river trout fish.', icon: '🧆' },
      { title: 'Stay Vibe', desc: 'Riverside camps in Chalal, cozy backpacker hostels in Kasol, and wooden homestays in Tosh.', icon: '⛺' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Kasol Arrival → Chalal Riverside Trail & Cafe Hopping', desc: 'Check in, walk across the suspension bridge to Chalal, enjoy Israeli dinner.' },
      { day: 'Day 02', title: 'Drive to Tosh → Waterfall Hike', desc: 'Scenic 20 km drive up Parvati valley to Tosh. Explore local cafes and waterfall.' },
      { day: 'Day 03', title: 'Trek to Kheerganga Base Camp', desc: '12 km trek through pine forests and waterfalls to Kheerganga summit.' },
      { day: 'Day 04', title: 'Kheerganga Hot Spring Dip → Manikaran Visit → Departure', desc: 'Morning dip in hot springs, descend to Manikaran Sahib, return journey.' }
    ]
  },

  'rishikesh': {
    slug: 'rishikesh',
    name: 'Rishikesh',
    subtitle: 'YOGA & ADVENTURE CAPITAL OF INDIA',
    state: 'Uttarakhand',
    altitude: '340 meters (1,120 ft)',
    bestTime: 'September to May',
    idealDuration: '2 to 4 Days',
    temp: '8°C to 35°C',
    nearestHub: 'Jolly Grant Dehradun Airport (20 km) / Haridwar Station (25 km)',
    heroImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80',
    overview: 'Rishikesh is the vibrant gateway to the Garhwal Himalayas where the holy Ganges river flows out of the mountains. Renowned globally for white-water rafting, bungee jumping, riverside camping, Beatles ashram, and spiritual Ganga Aarti.',
    attractions: [
      { title: 'White Water Rafting & Cliff Jumping', desc: 'Tackle Grade III & IV rapids (Golf Course, Roller Coaster) from Shivpuri down to Laxman Jhula.', icon: '🌊', tag: 'Thrill Sport' },
      { title: 'Triveni Ghat Evening Ganga Aarti', desc: 'Soul-stirring evening ritual with floating oil lamps, Vedic chants, and brass bells along the Ganges.', icon: '🛕', tag: 'Spiritual Ceremony' },
      { title: 'The Beatles Ashram (Chaurasi Kutia)', desc: 'Historic ashram where The Beatles stayed in 1968, filled with graffiti art and meditation domes.', icon: '🎨', tag: 'Art & History' },
      { title: 'Highest Bungee Jump (83m / 107m)', desc: 'Experience India’s highest fixed platform bungee jump operated by certified jumpmasters.', icon: '🪂', tag: 'Extreme Adventure' }
    ],
    treks: [
      { name: 'Neer Garh Waterfall Hike', duration: '1 Day', diff: 'Beginner', link: '/treks' },
      { name: 'Kunjapuri Temple Sunrise Trek', duration: '1 Day', diff: 'Beginner', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Train to Haridwar / Rishikesh', detail: 'Vande Bharat Express from New Delhi to Haridwar (4.5 hrs) + 30 min cab ride.' },
      { mode: 'Direct Highway Cab / Bus', detail: '6-hour drive from Delhi via Dehradun Expressway.' }
    ],
    foodAndStay: [
      { title: 'Organic Cafe Dining', desc: 'Ayurvedic thalis, vegan smoothies, Woodfired Pizzas, and Chotiwala thali.', icon: '🥗' },
      { title: 'Stay Vibe', desc: 'Riverside luxury camps in Shivpuri, wellness yoga retreats, and boutique hostels in Tapovan.', icon: '🧘' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Rishikesh → Tapovan Cafes & Beatles Ashram', desc: 'Check in, visit Ram Jhula & Laxman Jhula, explore Beatles Ashram art.' },
      { day: 'Day 02', title: '16 km White Water Rafting & Shivpuri Beach Camping', desc: 'Morning rafting adventure, evening bonfire and acoustic music at beach camp.' },
      { day: 'Day 03', title: 'Kunjapuri Sunrise Trek → Ganga Aarti → Departure', desc: 'Early morning sunrise view of Himalayan snow peaks, evening Ganga Aarti at Triveni Ghat.' }
    ]
  },

  'chopta': {
    slug: 'chopta',
    name: 'Chopta & Tungnath',
    subtitle: 'MINI SWITZERLAND OF INDIA',
    state: 'Uttarakhand',
    altitude: '2,680 meters to 4,000 meters',
    bestTime: 'March - June / Oct - Dec',
    idealDuration: '3 to 4 Days',
    temp: '-5°C to 20°C',
    nearestHub: 'Dehradun Airport (225 km) / Haridwar Station (230 km)',
    heroImg: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=2000&q=80',
    overview: 'Chopta is an unspoiled alpine meadow in the Kedarnath Wildlife Sanctuary. It serves as the base camp for the trek to Tungnath—the world’s highest Shiva temple at 3,680m—and the Chandrashila summit (4,000m) offering 360-degree views of Nanda Devi, Trishul, and Chaukhamba peaks.',
    attractions: [
      { title: 'Tungnath Shiva Temple (3,680m)', desc: '1,000-year-old ancient stone temple, highest Panch Kedar shrine nestled amidst alpine ridges.', icon: '🛕', tag: 'World Highest Shiva Temple' },
      { title: 'Chandrashila Summit (4,000m)', desc: 'Summit point offering breathtaking views of major Himalayan peaks including Nanda Devi.', icon: '🏔️', tag: '4,000m Peak Summit' },
      { title: 'Deoriatal Alpine Reflection Lake', desc: 'Pristine lake surrounded by dense rhododendron forests reflecting the Chaukhamba massifs.', icon: '🌊', tag: 'Reflection Lake' },
      { title: 'Chopta Bugyals (Alpine Meadows)', desc: 'Lush green undulating meadows in spring transform into a snow sports haven in winter.', icon: '🏕️', tag: 'Green Meadows' }
    ],
    treks: [
      { name: 'Chopta Chandrashila Trek', duration: '3 Days', diff: 'Beginner-Moderate', link: '/treks/chopta-chandrashila' },
      { name: 'Deoriatal to Chopta Trek', duration: '2 Days', diff: 'Beginner', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Cab from Haridwar/Rishikesh', detail: '7-8 hour mountain scenic drive along Alaknanda river via Devprayag and Rudraprayag.' },
      { mode: 'Self-Drive SUV Rental', detail: 'Drive Thar 4x4 or Scorpio N through Mandakini and Alaknanda river valleys.' }
    ],
    foodAndStay: [
      { title: 'Garhwali Pahadi Food', desc: 'Sample Chainsoo, Gahat ki Dal, Jhangora kheer, and wild Linguda vegetable.', icon: '🍲' },
      { title: 'Stay Vibe', desc: 'Eco-camps in Chopta meadows, Sari village homestays, and Swiss tents.', icon: '⛺' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Rishikesh to Sari Village Base Camp', desc: 'Drive past Alaknanda & Bhagirathi Sangam at Devprayag. Stay in Sari village.' },
      { day: 'Day 02', title: 'Trek to Deoriatal Lake → Drive to Chopta Meadows', desc: 'Morning 3 km uphill trek to Deoriatal. Afternoon drive to Chopta camp.' },
      { day: 'Day 03', title: 'Chopta → Tungnath Temple → Chandrashila Summit Trek', desc: '5 km summit trek to 4,000m Chandrashila peak. Descend to Chopta.' },
      { day: 'Day 04', title: 'Return Drive to Haridwar / Rishikesh Departure', desc: 'Scenic return journey along Garhwal river valleys.' }
    ]
  },

  'bir-billing': {
    slug: 'bir-billing',
    name: 'Bir Billing',
    subtitle: 'WORLD’S #2 PARAGLIDING CAPITAL',
    state: 'Himachal Pradesh',
    altitude: 'Bir: 1,525m | Billing: 2,400m',
    bestTime: 'October - December / March - June',
    idealDuration: '2 to 3 Days',
    temp: '5°C to 26°C',
    nearestHub: 'Gaggal Kangra Airport (67 km) / Pathankot Railway Station (140 km)',
    heroImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
    overview: 'Bir Billing is world-renowned as the paragliding capital of Asia. Billing serves as the high-altitude takeoff site at 2,400m while Bir is the gentle landing ground surrounded by Tibetan monasteries, organic tea gardens, and sunset cafes.',
    attractions: [
      { title: 'Tandem Paragliding Flight (Billing to Bir)', desc: 'Glide 15-30 minutes through thermals with experienced pilot from 2,400m down to Bir landing ground.', icon: '🪂', tag: 'World Class Paragliding' },
      { title: 'Chokling & Palpung Sherabling Monasteries', desc: 'Serene Tibetan Buddhist monasteries featuring intricate stupas and monk chant sessions.', icon: '🛕', tag: 'Tibetan Heritage' },
      { title: 'Bir Tea Garden Sunset Walk & Cycling', desc: 'Rent mountain bikes and ride through lush tea plantations as the sun sets over Kangra Valley.', icon: '🚲', tag: 'Cycling & Sunset' },
      { title: 'Toy Train Ride (Kangra Valley Railway)', desc: 'Heritage narrow-gauge toy train ride past pine forests and mountain bridges.', icon: '🚂', tag: 'Heritage Ride' }
    ],
    treks: [
      { name: 'Rajgundha Valley Trek', duration: '2 Days', diff: 'Beginner', link: '/treks' },
      { name: 'Hanuman Garh Hike', duration: '1 Day', diff: 'Beginner', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Direct Bus from Delhi', detail: 'Overnight HRTC / Private Volvo buses from Delhi ISBT direct to Bir Road / Chougan.' },
      { mode: 'Cab from Dharamshala', detail: '2 hour scenic cab drive from McLeodganj / Dharamshala (65 km).' }
    ],
    foodAndStay: [
      { title: 'Cafe Culture', desc: 'Tibetan Laphing, Momos, Clay Oven Pizza, Kombucha, and Tibetan Bakery cakes.', icon: '🥟' },
      { title: 'Stay Vibe', desc: 'Backpacker hostels in Chougan, boutique glamping tents, and eco-homestays.', icon: '🏕️' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Bir → Monastery Walk & Sunset Cafe Hopping', desc: 'Check in, visit Chokling Monastery, rent bicycles for tea garden sunset.' },
      { day: 'Day 02', title: 'Drive to Billing → Paragliding Flight → Landing Ground', desc: 'Morning drive to Billing launchpad. Tandem paragliding flight over Kangra valley.' },
      { day: 'Day 03', title: 'Rajgundha Valley Hike → Departure', desc: 'Short morning forest walk, sample local Tibetan Laphing before departure.' }
    ]
  }
};

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const rawSlug = params.slug ? params.slug.toLowerCase() : 'manali';
  
  // Lookup specific destination data, or fallback gracefully with dynamic layout
  const dest: DestinationData = DESTINATIONS[rawSlug] || {
    slug: rawSlug,
    name: rawSlug.replace(/-/g, ' ').toUpperCase(),
    subtitle: 'EXPLORE THE MAJESTIC HIMALAYAN WILDERNESS',
    state: 'Himachal / Uttarakhand',
    altitude: '2,200 meters',
    bestTime: 'March - June & October - February',
    idealDuration: '3 to 5 Days',
    temp: '0°C to 22°C',
    nearestHub: 'Chandigarh / Dehradun',
    heroImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80',
    overview: `Explore ${rawSlug.replace(/-/g, ' ')} with Pahadi Bagpackers. Experience alpine mountain views, serene pine valleys, ancient local heritage, and thrilling adventure options.`,
    attractions: [
      { title: 'Scenic Valley Sightseeing', desc: 'Panoramic mountain viewpoints, alpine rivers, and pine forest trails.', icon: '🏔️', tag: 'Sightseeing' },
      { title: 'Local Culture & Cuisine Walk', desc: 'Authentic Pahadi villages, traditional wooden architecture, and regional food.', icon: '🏡', tag: 'Culture' }
    ],
    treks: [
      { name: 'Alpine Ridge Trek', duration: '3 Days', diff: 'Moderate', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Private Taxi / Cab', detail: 'Direct cab pickup from major airports and railway stations.' },
      { mode: 'Volvo Bus Service', detail: 'Regular overnight buses from Delhi and Chandigarh.' }
    ],
    foodAndStay: [
      { title: 'Local Pahadi Food', desc: 'Fresh regional dishes, hot herbal teas, and local bread.', icon: '🍲' },
      { title: 'Riverside Stays', desc: 'Cozy homestays, hostels, and luxury mountain resorts.', icon: '🏕️' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival & Local Acclimatization Walk', desc: 'Check in, explore local markets and riverside trails.' },
      { day: 'Day 02', title: 'Valley Sightseeing & Adventure Activity', desc: 'Full day sightseeing of top attractions and mountain passes.' },
      { day: 'Day 03', title: 'Souvenir Shopping & Departure', desc: 'Collect local handicrafts and catch return transport.' }
    ]
  };

  return (
    <div className="bg-[#F8FAF9] min-h-screen text-slate-900 font-sans">
      
      {/* HERO SECTION — CARTOGRAPHIC EXPEDITION CANVAS (EXTENDS TO TOP 0 UNDER HEADER) */}
      <section className="relative bg-[#09111E] text-white pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-slate-800 shadow-2xl">
        {/* SVG Elevation Contour Lines & Vector Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-dest" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-dest)" />
            <path d="M-100,200 Q300,50 700,250 T1500,100 T2100,400" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="6,6" />
            <path d="M-200,450 Q400,200 900,480 T1700,300" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx="85%" cy="35%" r="220" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
            <circle cx="85%" cy="35%" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </svg>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* BREADCRUMB NAV */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-emerald-400 transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">{dest.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT EXPEDITION DETAILS */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 bg-emerald-600/90 text-white text-[11px] font-mono font-bold uppercase rounded-full tracking-wider shadow-md backdrop-blur-sm border border-emerald-400/30">
                  📌 {dest.state}
                </span>
                <span className="px-3.5 py-1 bg-slate-800/80 backdrop-blur-md text-emerald-300 text-[11px] font-mono font-semibold rounded-full border border-slate-700/80 flex items-center gap-1.5">
                  <Crosshair className="w-3.5 h-3.5 text-emerald-400" /> {dest.altitude}
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                  {dest.subtitle}
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase font-heading tracking-tight leading-none drop-shadow-lg">
                  {dest.name}
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {dest.overview}
              </p>

              {/* HERO METRICS TICKER GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800/90 p-3 rounded-2xl backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-0.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Best Season
                  </span>
                  <span className="text-xs font-bold text-white block truncate">{dest.bestTime}</span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/90 p-3 rounded-2xl backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Ideal Stay
                  </span>
                  <span className="text-xs font-bold text-white block truncate">{dest.idealDuration}</span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/90 p-3 rounded-2xl backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-0.5 flex items-center gap-1">
                    <Thermometer className="w-3 h-3" /> Weather
                  </span>
                  <span className="text-xs font-bold text-white block truncate">{dest.temp}</span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/90 p-3 rounded-2xl backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Nearest Hub
                  </span>
                  <span className="text-xs font-bold text-white block truncate">{dest.nearestHub}</span>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link 
                  href={`/itinerary-planner?destination=${dest.slug}`}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-emerald-900/50 flex items-center gap-2"
                >
                  Plan Custom {dest.name} Trip <Sparkles className="w-4 h-4" />
                </Link>
                <Link 
                  href={`/taxi?destination=${dest.slug}`}
                  className="px-5 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700 flex items-center gap-2"
                >
                  🚕 Book Cab <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* RIGHT POLAROID HERO IMAGE CARD */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 group">
                <img 
                  src={dest.heroImg} 
                  alt={dest.name} 
                  className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111E] via-transparent to-black/20"></div>

                {/* TOP RIGHT CORNER EMBLEM */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-[11px] font-mono font-bold text-emerald-300 flex items-center gap-1.5 shadow-lg">
                  <Navigation className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  HIMALAYAN DESTINATION
                </div>

                {/* BOTTOM FLOATING INFO BADGE */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center justify-between gap-4 shadow-xl">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">EXPEDITION BASECAMP</span>
                    <span className="text-sm font-extrabold text-white uppercase">{dest.name} Region</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-600 text-white font-mono text-xs font-bold rounded-lg shrink-0">
                    Verified Route
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN LAYOUT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* OVERVIEW */}
            <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading flex items-center gap-2">
                <Compass className="w-6 h-6 text-emerald-600" /> About {dest.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {dest.overview}
              </p>

              <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-2xl flex items-start gap-3 mt-4">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                  <strong>Pahadi Local Insight:</strong> Always carry light layers even in summer months. Mountain weather changes quickly, and local mountain guides will ensure smooth travel across high-altitude passes.
                </p>
              </div>
            </section>

            {/* KEY ATTRACTIONS */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-emerald-600" /> Key Attractions & Must-Do Experiences
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.attractions.map((att, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-2xl">{att.icon}</span>
                        <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {att.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">{att.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{att.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* RECOMMENDED TREKS NEARBY */}
            {dest.treks && dest.treks.length > 0 && (
              <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading flex items-center gap-2">
                  🥾 Recommended Treks Around {dest.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {dest.treks.map((t, idx) => (
                    <Link key={idx} href={t.link} className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-all block group">
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">{t.name}</h4>
                      <div className="text-[11px] text-slate-500 space-y-0.5">
                        <p>⏱️ Duration: <strong>{t.duration}</strong></p>
                        <p>💪 Grade: <strong>{t.diff}</strong></p>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                        Trek Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* HOW TO REACH */}
            <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading flex items-center gap-2">
                <Car className="w-6 h-6 text-emerald-600" /> How to Reach {dest.name}
              </h2>
              <div className="space-y-4">
                {dest.howToReach.map((h, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{h.mode}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{h.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* LOCAL FOOD & STAY VIBE */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dest.foodAndStay.map((fs, idx) => (
                <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm space-y-3">
                  <span className="text-3xl block">{fs.icon}</span>
                  <h3 className="font-bold text-slate-900 text-lg">{fs.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{fs.desc}</p>
                </div>
              ))}
            </section>

            {/* SAMPLE DAY-BY-DAY ITINERARY */}
            <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading">
                  🗺️ Sample {dest.name} Itinerary
                </h2>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {dest.idealDuration} Express Plan
                </span>
              </div>

              <div className="space-y-4">
                {dest.itinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-emerald-500/40 last:border-l-0 last:pb-0">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                      0{idx + 1}
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl">
                      <span className="text-xs font-mono font-bold text-emerald-800 uppercase">{step.day}</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT STICKY ACTION SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* BOOKING / PLANNER CARD */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xl sticky top-28 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block">PAHADI LOCAL PLANNING</span>
                <h3 className="text-2xl font-extrabold text-slate-900 uppercase font-heading mt-1">Plan Your {dest.name} Trip</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Customized itineraries including private cab transfers, verified homestays, and local trek guides.
                </p>
              </div>

              <div className="space-y-3 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Hidden Agent Commissions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Native Pahadi Drivers & Guides</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Riverside Homestays</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <Link 
                  href={`/itinerary-planner?destination=${dest.slug}`}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Generate {dest.name} Itinerary ✨
                </Link>

                <Link 
                  href={`/taxi?destination=${dest.slug}`}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-300 flex items-center justify-center gap-2"
                >
                  🚕 Book Cab to {dest.name}
                </Link>

                <Link 
                  href={`/car-rental`}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-300 flex items-center justify-center gap-2"
                >
                  🚙 Rent Self-Drive SUV / Thar
                </Link>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center">
                <span className="text-[11px] text-emerald-800 font-semibold block">Need Immediate Assistance?</span>
                <Link href="/contact" className="text-emerald-700 font-bold text-xs hover:underline mt-1 inline-block">
                  💬 Chat with Pahadi Travel Expert &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
