'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, Calendar, Mountain, MapPin, Car, ShieldCheck, HeartHandshake, 
  Utensils, CheckCircle2, ArrowRight, Navigation, Crosshair, Sparkles, 
  Clock, Thermometer, Bus, Plane, Coffee, Home, Route, Check, Star, Wind, Grid
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

interface GalleryPhoto {
  title: string;
  img: string;
  tag: string;
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
  gallery: GalleryPhoto[];
  circuit?: string[];
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
    heroImg: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Solang Valley Paragliding & Snow Peaks', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80', tag: '🪂 Solang Valley' },
      { title: 'Old Manali Cobblestone Cafes & Vibe', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '☕ Old Manali' },
      { title: 'Atal Tunnel Sissu Waterfall Drive', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '🚗 Atal Tunnel' },
      { title: 'Jogini Waterfalls & Beas River Pine Trail', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🥾 Jogini Waterfalls' }
    ],
    circuit: ['Basecamp', 'Old Manali', 'Solang Valley', 'Atal Tunnel'],
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
    heroImg: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Key Monastery Ki Gompa (4,166m)', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80', tag: '🛕 Key Monastery' },
      { title: 'Chandratal Crescent Moon Lake', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', tag: '🌊 Chandratal Lake' },
      { title: 'Hikkim Highest Post Office (4,400m)', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '📬 Hikkim Post' },
      { title: 'Langza Fossil Village & Buddha Statue', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80', tag: '🗿 Langza Fossils' }
    ],
    circuit: ['Shimla/Kalpa', 'Kaza Town', 'Key Monastery', 'Chandratal Lake'],
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
    heroImg: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Parvati River Gushing Stream', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80', tag: '🌊 Parvati River' },
      { title: 'Tosh Village & Glacier View', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', tag: '🏔️ Tosh Village' },
      { title: 'Kheerganga Hot Springs Summit', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', tag: '♨️ Hot Springs' },
      { title: 'Chalal Riverside Pine Trail', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '🌲 Chalal Trail' }
    ],
    circuit: ['Kasol Market', 'Chalal Village', 'Tosh Valley', 'Kheerganga Peak'],
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
    heroImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Ganges White Water Rafting', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', tag: '🌊 Rafting Thrill' },
      { title: 'The Beatles Ashram Graffiti Art', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', tag: '🎨 Beatles Ashram' },
      { title: 'Triveni Ghat Ganga Aarti', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '🛕 Ganga Aarti' },
      { title: 'Shivpuri Riverside Beach Camping', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80', tag: '⛺ Beach Camps' }
    ],
    circuit: ['Tapovan Base', 'Laxman Jhula', 'Shivpuri Rapid', 'Triveni Ghat'],
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
    heroImg: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Tungnath Highest Shiva Temple (3,680m)', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80', tag: '🛕 Tungnath Temple' },
      { title: 'Chandrashila 4,000m Summit View', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', tag: '🏔️ 4,000m Peak' },
      { title: 'Deoriatal Alpine Reflection Lake', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🌊 Deoriatal Lake' },
      { title: 'Chopta Bugyal Alpine Meadows', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', tag: '🏕️ Alpine Meadows' }
    ],
    circuit: ['Sari Basecamp', 'Deoriatal Lake', 'Chopta Meadows', 'Tungnath Peak'],
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
    heroImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Billing Launchpad Paragliding Flight', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', tag: '🪂 Paragliding' },
      { title: 'Chokling Monastery Stupa', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80', tag: '🛕 Tibetan Stupa' },
      { title: 'Bir Tea Garden Sunset Cycling', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '🚲 Tea Gardens' },
      { title: 'Rajgundha Valley Forest Hike', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🥾 Rajgundha Trail' }
    ],
    circuit: ['Bir Chougan', 'Tea Gardens', 'Billing Takeoff', 'Landing Ground'],
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
  },

  'goa': {
    slug: 'goa',
    name: 'Goa',
    subtitle: 'SUN-DRENCHED BEACHES, LATIN QUARTERS & FORTS',
    state: 'Goa',
    altitude: 'Sea Level',
    bestTime: 'October to May',
    idealDuration: '4 to 6 Days',
    temp: '20°C to 33°C',
    nearestHub: 'Dabolim Airport (GOI) / Mopa Airport (GOX) / Madgaon Station',
    heroImg: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Baga & Calangute Beach Sunset', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', tag: '🏖️ Golden Beaches' },
      { title: 'Fontainhas Panjim Latin Quarter', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', tag: '🏛️ Latin Quarter' },
      { title: 'Aguada Fort & Sea View', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', tag: '🏰 Heritage Forts' },
      { title: 'Dudhsagar Waterfall Jeep Safari', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🌊 Dudhsagar Falls' }
    ],
    circuit: ['Panjim', 'Baga/Anjuna', 'Old Goa', 'South Goa Beaches'],
    overview: 'Goa is India’s premier coastal state along the Arabian Sea. Renowned for palm-fringed golden beaches, 400-year-old Portuguese heritage churches, vibrant beach shacks, water sports, spice plantations, and laid-back coastal living.',
    attractions: [
      { title: 'North Goa Beach Hopping & Watersports', desc: 'Parasailing, jet skiing, and beach shacks across Baga, Anjuna, Vagator, and Arambol.', icon: '🏖️', tag: 'Beach & Sports' },
      { title: 'Fontainhas & Old Goa Churches', desc: 'Walk through Panjim’s colorful Latin Quarter and UNESCO-listed Basilica of Bom Jesus.', icon: '🏛️', tag: 'Heritage Walk' },
      { title: 'Dudhsagar Waterfalls & Spice Plantation', desc: 'Jeep safari into Bhagwan Mahavir Wildlife Sanctuary to four-tiered cascading waterfalls.', icon: '🌊', tag: 'Nature Safari' },
      { title: 'South Goa Quiet Beaches', desc: 'Pristine, peaceful white sand beaches of Palolem, Agonda, and Butterfly Beach.', icon: '🌴', tag: 'Serene Coast' }
    ],
    treks: [
      { name: 'Dudhsagar Railway Trail Hike', duration: '1 Day', diff: 'Beginner', link: '/destinations/goa' }
    ],
    howToReach: [
      { mode: 'Direct Flight', detail: 'Daily direct flights to Dabolim (GOI) or Manohar Mopa Airport (GOX) from all major Indian cities.' },
      { mode: 'Train Access', detail: 'Express trains to Madgaon (MAO) or Thivim (THVM) station.' }
    ],
    foodAndStay: [
      { title: 'Coastal Goan Cuisine', desc: 'Goan Fish Curry Rice, Pork Vindaloo, Prawn Balchão, Bebinca dessert, and fresh Feni.', icon: '🍲' },
      { title: 'Stay Vibe', desc: 'Beachfront wooden huts in Palolem, heritage boutique villas in Assagao, and luxury resorts in Cavelossim.', icon: '🏡' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Goa → Panjim Latin Quarter & Sunset Cruise', desc: 'Check in, stroll through Fontainhas, enjoy Mandovi river sunset cruise.' },
      { day: 'Day 02', title: 'North Goa Beaches & Fort Aguada', desc: 'Visit historic Fort Aguada, watersports at Baga, evening sunset at Vagator beach.' },
      { day: 'Day 03', title: 'Dudhsagar Waterfalls & Spice Plantation Tour', desc: 'Off-road 4x4 safari to Dudhsagar Falls, traditional Goan spice farm lunch.' },
      { day: 'Day 04', title: 'South Goa Palolem & Agonda Beach Escape', desc: 'Explore pristine South Goa beaches, kayak in Palolem backwaters, sea-view dinner.' },
      { day: 'Day 05', title: 'Old Goa Churches & Departure', desc: 'Visit Basilica of Bom Jesus and Se Cathedral before airport transfer.' }
    ]
  },

  'mumbai': {
    slug: 'mumbai',
    name: 'Mumbai',
    subtitle: 'CITY OF DREAMS & COASTAL METROPOLIS',
    state: 'Maharashtra',
    altitude: 'Sea Level',
    bestTime: 'October to March',
    idealDuration: '2 to 4 Days',
    temp: '18°C to 34°C',
    nearestHub: 'Chhatrapati Shivaji Maharaj International Airport (BOM) / CSMT Station',
    heroImg: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Gateway of India & Taj Palace', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80', tag: '🏛️ Gateway of India' },
      { title: 'Marine Drive Queen’s Necklace Sunset', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', tag: '🌊 Marine Drive' },
      { title: 'Elephanta Caves Island Boat Trip', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '🗿 Elephanta Caves' },
      { title: 'Colonial Fort & Kala Ghoda Art Walk', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '🎨 Kala Ghoda' }
    ],
    circuit: ['Colaba', 'Marine Drive', 'Bandra', 'Juhu Beach'],
    overview: 'Mumbai is India’s financial and entertainment capital on the Arabian Sea coast. A fast-paced metropolis blending Victorian Gothic architecture, seaside promenades, Bollywood film culture, vibrant street markets, and famous coastal dining.',
    attractions: [
      { title: 'Gateway of India & Taj Mahal Palace', desc: 'Iconic 1924 basalt arch overlooking Mumbai harbour alongside the heritage Taj Palace hotel.', icon: '🏛️', tag: 'Iconic Landmark' },
      { title: 'Marine Drive & Chowpatty Sunset', desc: '3.6 km C-shaped coastal boulevard known as Queen’s Necklace with sea views and street snacks.', icon: '🌊', tag: 'Coastal Promenade' },
      { title: 'Elephanta Caves Island Ferry', desc: 'Scenic 1-hour ferry ride to UNESCO 5th-century rock-cut cave temples dedicated to Lord Shiva.', icon: '🗿', tag: 'UNESCO Heritage' },
      { title: 'Bandra Sea Link & Bandstand Walk', desc: 'Drive across the engineering marvel Cable-Stayed Sea Link to Bandra’s trendy cafes and Bollywood stars’ houses.', icon: '🌉', tag: 'Modern Mumbai' }
    ],
    treks: [
      { name: 'Sanjay Gandhi National Park & Kanheri Caves Trail', duration: '1 Day', diff: 'Beginner', link: '/destinations/mumbai' }
    ],
    howToReach: [
      { mode: 'Flight Access', detail: 'Chhatrapati Shivaji Maharaj International Airport (BOM) connected globally.' },
      { mode: 'Train Connections', detail: 'Major stations at CSMT, Mumbai Central, Dadar, and Bandra Terminus.' }
    ],
    foodAndStay: [
      { title: 'Mumbai Street Food & Seafood', desc: 'Must try Vada Pav, Pav Bhaji, Bombay Sandwich, Iranian Cafe Keema Pav, and Bombil Fry.', icon: '🍔' },
      { title: 'Stay Vibe', desc: 'Sea-view heritage hotels in Colaba & Marine Drive, boutique stays in Bandra West, and business luxury in BKC.', icon: '🏨' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Colaba Heritage Walk & Gateway Ferry', desc: 'Visit Gateway of India, Taj Hotel, Kala Ghoda art precinct, and evening at Marine Drive.' },
      { day: 'Day 02', title: 'Elephanta Caves Excursion & Bandra Sunset', desc: 'Morning ferry to Elephanta island. Afternoon drive via Sea Link to Bandra fort and cafes.' },
      { day: 'Day 03', title: 'CSMT Station, Crawford Market & Departure', desc: 'Tour UNESCO CSMT station, shop at spice markets before airport transfer.' }
    ]
  },

  'gujarat': {
    slug: 'gujarat',
    name: 'Gujarat',
    subtitle: 'WHITE SALT DESERT, LIONS & ANCIENT TEMPLES',
    state: 'Gujarat',
    altitude: '15 meters to 1,100 meters',
    bestTime: 'November to March (Rann Utsav)',
    idealDuration: '5 to 7 Days',
    temp: '12°C to 30°C',
    nearestHub: 'Ahmedabad Airport (AMD) / Rajkot Airport / Bhuj Airport',
    heroImg: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Great Rann of Kutch White Salt Desert', img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80', tag: '🏜️ White Rann' },
      { title: 'Gir National Park Asiatic Lion Safari', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80', tag: '🦁 Asiatic Lions' },
      { title: 'Statue of Unity (182m World Highest)', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '🗿 Statue of Unity' },
      { title: 'Somnath & Dwarka Coastal Shrines', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🛕 Sacred Shrines' }
    ],
    circuit: ['Ahmedabad', 'Statue of Unity', 'Gir National Park', 'Bhuj & Rann of Kutch'],
    overview: 'Gujarat offers a magnificent tapestry of diverse landscapes—from the glittering white salt desert of the Great Rann of Kutch to the only home of Asiatic Lions in Gir, the world’s tallest statue (Statue of Unity), and sacred coastal pilgrimage sites like Dwarka & Somnath.',
    attractions: [
      { title: 'Great Rann of Kutch (White Salt Desert)', desc: 'Endless expanse of pure white salt desert that comes alive with folk music and crafts during Rann Utsav.', icon: '🏜️', tag: 'Salt Desert' },
      { title: 'Gir National Park Lion Safari', desc: 'Open-jeep wildlife safari through dry deciduous forests to spot wild Asiatic Lions in their natural habitat.', icon: '🦁', tag: 'Wildlife Safari' },
      { title: 'Statue of Unity (182 meters)', desc: 'The world’s tallest monument overlooking the Narmada River with high-speed elevators and viewing gallery.', icon: '🗿', tag: 'World Record Monument' },
      { title: 'Dwarkadhish & Somnath Temples', desc: 'Ancient coastal temples overlooking the Arabian Sea steeped in mythological and spiritual heritage.', icon: '🛕', tag: 'Coastal Pilgrimage' }
    ],
    treks: [
      { name: 'Girnar Hill 10,000 Steps Trail', duration: '1 Day', diff: 'Moderate-Challenging', link: '/destinations/gujarat' }
    ],
    howToReach: [
      { mode: 'Flight Access', detail: 'Fly into Ahmedabad (AMD) or Bhuj (BHJ) with daily flights from major metros.' },
      { mode: 'Express Trains', detail: 'Superfast trains to Ahmedabad, Rajkot, Surat, and Dwarka.' }
    ],
    foodAndStay: [
      { title: 'Gujarati Thali & Sweets', desc: 'Authentic 30-item Kathiyawadi & Gujarati Thali, Dhokla, Khandvi, Fafda Jalebi, and Undhiyu.', icon: '🍲' },
      { title: 'Stay Vibe', desc: 'Bhunga mud tent resorts in Kutch, jungle lodges in Gir, and riverview hotels near Statue of Unity.', icon: '⛺' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Ahmedabad → Sabarmati Ashram & Adalaj Stepwell', desc: 'Visit Gandhi Ashram, heritage stepwell, and night market at Law Garden.' },
      { day: 'Day 02', title: 'Drive to Statue of Unity (Kevadia)', desc: 'Explore 182m Statue of Unity, laser light show, and Narmada river valley.' },
      { day: 'Day 03-04', title: 'Kevadia to Gir National Park → Lion Safari', desc: 'Jeep safari into Gir forest for Asiatic Lions, visit Somnath temple on the coast.' },
      { day: 'Day 05-06', title: 'Drive to Bhuj & Tent City Rann of Kutch', desc: 'Check into Rann Utsav tent city, watch sunset over the white salt desert, handicraft shopping.' },
      { day: 'Day 07', title: 'Kala Dungar (Black Hill) → Bhuj Airport Departure', desc: 'View panoramic salt desert from Kala Dungar before return flight.' }
    ]
  },

  'kerala': {
    slug: 'kerala',
    name: 'Kerala',
    subtitle: 'GOD’S OWN COUNTRY & BACKWATER PARADISE',
    state: 'Kerala',
    altitude: 'Sea Level to 1,600 meters',
    bestTime: 'September to March',
    idealDuration: '5 to 8 Days',
    temp: '18°C to 32°C',
    nearestHub: 'Cochin International Airport (COK) / Trivandrum (TRV) / Calicut (CCJ)',
    heroImg: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Alleppey Backwater Houseboat Cruise', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80', tag: '🛶 Houseboat Cruise' },
      { title: 'Munnar Tea Estate Rolling Hills', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '🍃 Munnar Tea Hills' },
      { title: 'Varkala Cliff Beach & Arabian Sea', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', tag: '🌊 Varkala Cliff' },
      { title: 'Fort Kochi Chinese Fishing Nets', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', tag: '🎣 Fort Kochi' }
    ],
    circuit: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Varkala'],
    overview: 'Kerala is a tropical paradise along India’s southwestern Malabar Coast. World-famous for palm-fringed backwater canals sailed by traditional houseboats, rolling tea garden hills in Munnar, spice plantations, wild elephant sanctuaries, and cliffside ocean beaches.',
    attractions: [
      { title: 'Alleppey Backwaters & Kettuvallam Cruise', desc: 'Overnight luxury houseboat cruise through serene palm-shaded canals, paddy fields, and lagoons.', icon: '🛶', tag: 'Backwater Houseboat' },
      { title: 'Munnar Tea Gardens & Eravikulam', desc: 'Misty green tea estates, Mattupetty dam, and endangered Nilgiri Tahr mountain goat sanctuary.', icon: '🍃', tag: 'Tea Plantation' },
      { title: 'Thekkady Spice Plantation & Periyar Wildlife', desc: 'Guided spice garden tour (cardamom, pepper, cinnamon) and boat safari in Periyar tiger reserve.', icon: '🐘', tag: 'Spice & Wildlife' },
      { title: 'Varkala Cliff & Fort Kochi Heritage', desc: 'Red cliffside beach with bohemian cafes, sunset views, and colonial Fort Kochi fishing nets.', icon: '🌊', tag: 'Cliff Beach' }
    ],
    treks: [
      { name: 'Meesapulimala Peak Trek (2,640m)', duration: '1 Day', diff: 'Moderate', link: '/destinations/kerala' },
      { name: 'Chembra Peak Heart Lake Trek', duration: '1 Day', diff: 'Beginner-Moderate', link: '/destinations/kerala' }
    ],
    howToReach: [
      { mode: 'Flight Access', detail: 'Direct flights to Cochin International Airport (COK) or Trivandrum (TRV).' },
      { mode: 'Train Access', detail: 'Superfast trains to Ernakulam (ERS), Alappuzha (ALLP), or Trivandrum (TVC).' }
    ],
    foodAndStay: [
      { title: 'Authentic Kerala Cuisine', desc: 'Sadya served on banana leaf, Karimeen Pollichathu, Appam with Stew, Kerala Parotta & Beef fry.', icon: '🥥' },
      { title: 'Stay Vibe', desc: 'Traditional wooden Kettuvallam houseboats, tea estate bungalows, and Ayurvedic beach resorts.', icon: '🏡' }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Arrival in Kochi → Fort Kochi Art & Sunset Nets', desc: 'Check in, explore Chinese fishing nets, Mattancherry palace, and Kathakali dance show.' },
      { day: 'Day 02-03', title: 'Kochi to Munnar Tea Gardens', desc: 'Drive through Cheeyappara waterfalls to Munnar. Visit tea factory, Mattupetty dam & Echo point.' },
      { day: 'Day 04', title: 'Munnar to Thekkady Spice Plantation', desc: 'Explore cardamom & pepper plantations, boat safari in Periyar lake.' },
      { day: 'Day 05-06', title: 'Thekkady to Alleppey Houseboat → Varkala Cliff', desc: 'Overnight luxury houseboat cruise in Alleppey backwaters. Drive to Varkala cliff beach.' },
      { day: 'Day 07', title: 'Varkala Sunset → Departure', desc: 'Ayurvedic massage, cliff cafe breakfast, airport transfer.' }
    ]
  },

  'leh-ladakh': {
    slug: 'leh-ladakh',
    name: 'Leh & Ladakh',
    subtitle: 'THE HIGH-ALTITUDE MOUNTAIN KINGDOM',
    state: 'Ladakh',
    altitude: '3,500 meters (11,500 ft)',
    bestTime: 'May to September',
    idealDuration: '7 to 10 Days',
    temp: '-15°C to 20°C',
    nearestHub: 'Kushok Bakula Rimpoche Airport Leh (IXL)',
    heroImg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Pangong Tso Blue Lake (4,250m)', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', tag: '🌊 Pangong Lake' },
      { title: 'Nubra Valley Hunder Sand Dunes', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80', tag: '🐫 Nubra Valley' },
      { title: 'Khardung La Pass (5,359m)', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', tag: '🏔️ Khardung La' },
      { title: 'Thiksey & Diskit Monasteries', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80', tag: '🛕 Monasteries' }
    ],
    circuit: ['Leh Town', 'Sham Valley', 'Nubra Valley', 'Pangong Tso'],
    overview: 'Leh-Ladakh is a high-altitude desert kingdom surrounded by the Himalayan and Karakoram mountain ranges. Famous for its deep turquoise high-altitude lakes like Pangong & Tso Moriri, motorable passes over 17,500 ft, cold desert sand dunes with double-humped Bactrian camels, and majestic cliffside monasteries.',
    attractions: [
      { title: 'Pangong Tso High-Altitude Lake', desc: '134 km long turquoise brackish lake changing shades from azure blue to deep green, extending into Tibet.', icon: '🌊', tag: 'Alpine Lake' },
      { title: 'Nubra Valley & Hunder Sand Dunes', desc: 'Cold desert valley across Khardung La featuring white sand dunes and double-humped Bactrian camel rides.', icon: '🐫', tag: 'Desert Dunes' },
      { title: 'Khardung La & Chang La Passes', desc: 'Traverse legendary motorable mountain passes above 17,500 ft with panoramic glacier vistas.', icon: '🏔️', tag: 'High Passes' },
      { title: 'Thiksey, Hemis & Diskit Monasteries', desc: 'Multi-tiered 15th-century Tibetan monasteries housing giant Maitreya Buddha statues and ancient thangkas.', icon: '🛕', tag: 'Monastic Heritage' }
    ],
    treks: [
      { name: 'Markha Valley Trek', duration: '6 Days', diff: 'Moderate-Challenging', link: '/treks' },
      { name: 'Chadar Frozen Zanskar River Trek', duration: '8 Days', diff: 'Challenging', link: '/treks' }
    ],
    howToReach: [
      { mode: 'Direct Flight to Leh', detail: 'Daily morning flights into Kushok Bakula Rimpoche Airport Leh (IXL) from Delhi/Mumbai.' },
      { mode: 'Manali-Leh / Srinagar-Leh Highway', detail: 'Epic 2-day overland road trip crossing high passes (open June to September).' }
    ],
    foodAndStay: [
      { title: 'Ladakhi Cuisine', desc: 'Sample Skyu pasta, Thukpa, Mokmoks (momos), Butter Tea (Gur Gur), and Apricot juice.', icon: '🍵' },
      { title: 'Stay Vibe', desc: 'Boutique heritage hotels in Leh, luxury dome glamping at Pangong Lake, and desert camps in Hunder.', icon: '⛺' }
    ],
    itinerary: [
      { day: 'Day 01-02', title: 'Arrival in Leh → Rest & Acclimatization → Shanti Stupa', desc: 'Mandatory 36-hour rest for high altitude, evening walk to Shanti Stupa & Leh Palace.' },
      { day: 'Day 03', title: 'Leh Local: Magnetic Hill, Sangam & Hall of Fame', desc: 'Visit Indus-Zanskar river confluence, Gurudwara Pathar Sahib, and Magnetic Hill.' },
      { day: 'Day 04', title: 'Leh to Nubra Valley via Khardung La (5,359m)', desc: 'Cross Khardung La pass, reach Hunder sand dunes for Bactrian camel ride.' },
      { day: 'Day 05', title: 'Nubra Valley to Pangong Tso via Shyok River', desc: 'Drive alongside Shyok river, reach Pangong Tso lake for sunset camping.' },
      { day: 'Day 06', title: 'Pangong Tso → Chang La Pass → Leh Return', desc: 'Watch sunrise over Pangong lake, return to Leh town via Chang La pass.' },
      { day: 'Day 07', title: 'Leh Airport Departure', desc: 'Transfer to Leh airport for return flight.' }
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
    heroImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=80',
    gallery: [
      { title: 'Alpine Valley View', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', tag: '🏔️ Valley View' },
      { title: 'Pahadi Village & Culture', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', tag: '🏡 Local Vibe' },
      { title: 'High Mountain Pass Crossing', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', tag: '🚗 Pass Crossing' },
      { title: 'Pine Forest & Waterfall Trail', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80', tag: '🥾 Forest Trail' }
    ],
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
    <div className="bg-[#FAFBFB] min-h-screen text-slate-900 font-sans">
      
      {/* 🏞️ FULL-SCREEN MULTI-PHOTO ATTRACTION COLLAGE HERO SECTION (100% FULL BLEED EDGE-TO-EDGE) */}
      <section className="relative w-full min-h-[90vh] lg:min-h-[92vh] pt-28 sm:pt-36 pb-10 flex flex-col justify-between overflow-hidden mb-12 border-b border-slate-200">
        
        {/* FULL SCREEN MULTI-PHOTO COLLAGE GRID CANVAS (COVERS 100% VIEWPORT WIDTH AND HEIGHT) */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-4 gap-1 bg-slate-950 z-0">
          
          {/* COLLAGE CELL 1 — MAIN FEATURED ATTRACTION */}
          <div className="relative col-span-2 row-span-2 overflow-hidden group/cell">
            <img 
              src={dest.gallery?.[0]?.img || dest.heroImg} 
              alt={dest.gallery?.[0]?.title || dest.name}
              className="w-full h-full object-cover object-center group-hover/cell:scale-105 transition-transform duration-700 brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              {dest.gallery?.[0]?.tag || '🪂 Solang Valley'}
            </div>
          </div>

          {/* COLLAGE CELL 2 — OLD MANALI CAFES & VILLAGE */}
          <div className="relative overflow-hidden group/cell">
            <img 
              src={dest.gallery?.[1]?.img || 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80'} 
              alt={dest.gallery?.[1]?.title || 'Old Manali'}
              className="w-full h-full object-cover object-center group-hover/cell:scale-105 transition-transform duration-700 brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
              {dest.gallery?.[1]?.tag || '☕ Old Manali'}
            </div>
          </div>

          {/* COLLAGE CELL 3 — ATAL TUNNEL & SISSU WATERFALL */}
          <div className="relative overflow-hidden group/cell">
            <img 
              src={dest.gallery?.[2]?.img || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'} 
              alt={dest.gallery?.[2]?.title || 'Atal Tunnel'}
              className="w-full h-full object-cover object-center group-hover/cell:scale-105 transition-transform duration-700 brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
              {dest.gallery?.[2]?.tag || '🚗 Atal Tunnel'}
            </div>
          </div>

          {/* COLLAGE CELL 4 — JOGINI WATERFALLS & BEAS RIVER TRAIL */}
          <div className="relative col-span-2 md:col-span-2 overflow-hidden group/cell">
            <img 
              src={dest.gallery?.[3]?.img || 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80'} 
              alt={dest.gallery?.[3]?.title || 'Jogini Falls'}
              className="w-full h-full object-cover object-center group-hover/cell:scale-105 transition-transform duration-700 brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
              {dest.gallery?.[3]?.tag || '🥾 Waterfalls & Forest'}
            </div>
          </div>

        </div>

        {/* GRADIENT OVERLAYS FOR HIGH CONTRAST & ELEGANT FULL-BLEED BLEND */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none z-10"></div>

        {/* INNER CONTENT CONTAINER (CENTERED WITHIN 100% FULL BLEED HERO) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-between gap-8">
          
          {/* TOP BREADCRUMB & EMBLEM BAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            
            {/* MINIMAL BREADCRUMB */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
              <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/destinations" className="hover:text-emerald-300 transition-colors">Destinations</Link>
              <span>/</span>
              <span className="text-emerald-400 font-semibold">{dest.name}</span>
            </div>

            {/* LOCATION & MULTI-PHOTO COLLAGE BADGE */}
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md border border-emerald-400/30 flex items-center gap-1.5">
                📍 {dest.state.toUpperCase()} • {dest.altitude}
              </span>
              <span className="px-3.5 py-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 hidden sm:flex items-center gap-1.5">
                <Grid className="w-3.5 h-3.5 text-emerald-300" /> Attraction Gallery
              </span>
            </div>

          </div>

          {/* HERO DESTINATION TITLE & METRICS OVERLAY */}
          <div className="space-y-3 my-auto pt-6 pb-2">
            
            <div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 uppercase tracking-widest block mb-2 drop-shadow-sm">
                {dest.subtitle}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                {dest.name}
              </h1>
            </div>

            {/* INLINE DESTINATION FACTS TICKER BAR */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm font-medium text-white/90">
              <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-md">
                🗓️ Best Season: <span className="text-white font-semibold">{dest.bestTime}</span>
              </span>
              <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-md">
                ⏱️ Ideal Stay: <span className="text-white font-semibold">{dest.idealDuration}</span>
              </span>
              <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-md">
                🌡️ Weather: <span className="text-white font-semibold">{dest.temp}</span>
              </span>
              <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 hidden md:flex items-center gap-2 shadow-md">
                🚉 Transit: <span className="text-white font-semibold">{dest.nearestHub}</span>
              </span>
            </div>

          </div>

          {/* HERO ACTION BAR & EXPEDITION ROUTE TRAIL (FLOATING GLASSMorphism BAR) */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link 
                href={`/itinerary-planner?destination=${dest.slug}`}
                className="flex-1 sm:flex-initial px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                Plan Your {dest.name} Trip ✨
              </Link>
              <Link 
                href={`#why-visit-${dest.slug}`}
                className="flex-1 sm:flex-initial px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-300 flex items-center justify-center gap-2"
              >
                Explore Experiences 🌿
              </Link>
            </div>

            {/* SUBTLE EXPEDITION ROUTE TRAIL */}
            <div className="text-xs font-sans text-slate-600 flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              <Route className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold text-slate-700 shrink-0">Circuit Trail:</span>
              {(dest.circuit || ['Basecamp', `${dest.name} Town`, 'Sightseeing', 'Top Viewpoint']).map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className={idx === arr.length - 1 
                    ? "bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md border border-emerald-200 shrink-0" 
                    : "bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-semibold shrink-0"}>
                    {step}
                  </span>
                  {idx < arr.length - 1 && <span className="text-slate-400 font-bold">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* 📖 EDITORIAL SECTION: "WHY VISIT MANALI?" STORYTELLING GUIDE */}
      <section id={`why-visit-${dest.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              PAHADI TRAVEL GUIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase font-heading">
              Why Visit {dest.name}?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed max-w-3xl">
              {dest.overview}
            </p>
          </div>

          {/* 4 FEATURED EDITORIAL EXPERIENCE CARDS WITH IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {dest.gallery.map((g, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-emerald-500 hover:shadow-md transition-all group">
                <div className="h-36 overflow-hidden relative">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-black/60 backdrop-blur-md text-emerald-300 font-mono text-[10px] font-bold rounded-full border border-emerald-400/30">
                    {g.tag}
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">{g.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {idx === 0 && 'High altitude paragliding, snow slopes, and Atal tunnel gateway.'}
                    {idx === 1 && 'Cobblestone lanes, wooden cafes, Manu Temple & river acoustic music.'}
                    {idx === 2 && 'Traverse 9.02 km tunnel into Lahaul valley & Sissu waterfall.'}
                    {idx === 3 && 'Pine-scented forest trail leading to Jogini falls & sulphur hot springs.'}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MAIN CONTENT LAYOUT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* KEY ATTRACTIONS */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase font-heading flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-emerald-600" /> Key Attractions & Must-Do Experiences
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.attractions.map((att, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group">
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
              <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
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
            <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
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
                <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-xs space-y-3">
                  <span className="text-3xl block">{fs.icon}</span>
                  <h3 className="font-bold text-slate-900 text-lg">{fs.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{fs.desc}</p>
                </div>
              ))}
            </section>

            {/* SAMPLE DAY-BY-DAY ITINERARY */}
            <section className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
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
