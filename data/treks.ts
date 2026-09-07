export interface TrekItineraryDay {
  day: number;
  title: string;
  desc: string;
  altitude?: string;
  distance?: string;
}

export interface Trek {
  slug: string;
  name: string;
  state: 'Himachal' | 'Uttarakhand';
  region: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  category: 'Easy Weekend Treks' | 'Moderate Alpine Passes' | 'High Altitude Summits';
  altitude: string;
  altitudeFt: number;
  duration: string;
  durationDays: number;
  startingPoint: string;
  bestSeason: string;
  price: string;
  featured: boolean;
  img: string;
  overview: string;
  highlights: string[];
  itinerary: TrekItineraryDay[];
  inclusions: string[];
}

export const TREKS: Trek[] = [
  // 🌲 HIMACHAL PRADESH TREKS
  {
    slug: 'hampta-pass',
    name: 'Hampta Pass Crossover Trek',
    state: 'Himachal',
    region: 'Manali & Lahaul Valley',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '14,065 ft',
    altitudeFt: 14065,
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    startingPoint: 'Manali',
    bestSeason: 'June to October',
    price: '₹8,499',
    featured: true,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Hampta Pass is a dramatic crossover trek in Himachal Pradesh connecting the lush green Kullu Valley with the stark, arid high-altitude desert of Lahaul & Spiti. The trail finishes with a visit to the mystical crescent-shaped Chandratal Lake.',
    highlights: [
      'Dramatic landscape transformation from pine forests to cold desert',
      'Camping at riverbed campsite Balu Ka Ghera',
      '360-degree panoramic view of Deo Tibba and Indrasan peaks',
      'Drive to the turquoise Chandratal Lake at 14,100 ft'
    ],
    itinerary: [
      { day: 1, title: 'Drive from Manali to Jobra → Trek to Chika', desc: 'Short 45-min drive to Jobra, then a 2-hour gentle uphill walk through birch and maple forests to Chika campsite (9,800 ft).', altitude: '9,800 ft', distance: '3 km' },
      { day: 2, title: 'Chika to Balu Ka Ghera', desc: 'Trek along the roaring Rani Nallah stream with river crossings to the sandy riverbed of Balu Ka Ghera (11,900 ft).', altitude: '11,900 ft', distance: '8 km' },
      { day: 3, title: 'Balu Ka Ghera to Shea Goru via Hampta Pass Summit', desc: 'Challenging steep climb up to Hampta Pass (14,065 ft) offering breathtaking views, followed by a descent into Shea Goru in Lahaul Valley.', altitude: '14,065 ft', distance: '10 km' },
      { day: 4, title: 'Shea Goru to Chatru → Excursion to Chandratal Lake', desc: 'Descend to Chatru roadhead, check in to camps, then take an afternoon jeep ride to Chandratal Lake (14,100 ft).', altitude: '14,100 ft', distance: '7 km + Jeep Drive' },
      { day: 5, title: 'Drive from Chatru to Manali via Atal Tunnel', desc: 'Scenic morning drive back to Manali through Rohtang Pass / Atal Tunnel. Trek concludes by 3:00 PM.', altitude: '6,700 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Certified Pahadi Trek Leader & Support Staff',
      'All Meals on Trek (Vegetarian & Egg options)',
      'High-altitude 4-Season Tents & Warm Sleeping Bags',
      'Forest Permits & Camping Charges',
      'First Aid Kit with Portable Oxygen Cylinder',
      'Jeep Transport Chatru to Chandratal & Back to Manali'
    ]
  },
  {
    slug: 'beas-kund',
    name: 'Beas Kund Glacial Lake Trek',
    state: 'Himachal',
    region: 'Solang Valley, Manali',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '12,775 ft',
    altitudeFt: 12775,
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    startingPoint: 'Solang Valley (Manali)',
    bestSeason: 'May to October',
    price: '₹4,999',
    featured: false,
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80',
    overview: 'Beas Kund is the pristine alpine glacial lake where River Beas originates. Located near Solang Valley, it is one of the most accessible short weekend treks offering up-close views of Hanuman Tibba, Friendship Peak, and Ladakhi Peak.',
    highlights: [
      'Short 3-day trek ideal for beginners, families, and weekenders',
      'Up-close views of 6,000m peaks like Hanuman Tibba & Friendship Peak',
      'Emerald glacial lake origin point of Rishi Vashisht & River Beas',
      'Camping in scenic lush green meadows of Bakarthach'
    ],
    itinerary: [
      { day: 1, title: 'Manali to Solang Valley → Trek to Dhundi / Bakarthach', desc: 'Drive to Solang Valley base and trek alongside Beas River to Bakarthach alpine meadow (10,800 ft).', altitude: '10,800 ft', distance: '8 km' },
      { day: 2, title: 'Bakarthach to Beas Kund Lake & Back to Bakarthach', desc: 'Climb over boulder moraines to reach the serene blue waters of Beas Kund (12,775 ft) surrounded by towering glaciers.', altitude: '12,775 ft', distance: '6 km' },
      { day: 3, title: 'Bakarthach to Dhundi → Drive Back to Manali', desc: 'Easy descent back to Solang Valley roadhead and drive back to Manali town by afternoon.', altitude: '6,700 ft', distance: '8 km' }
    ],
    inclusions: [
      'Professional Mountaineering Guide',
      'Trekking Tents, Sleeping Bags & Foam Mattresses',
      'Nutritious Vegetarian Meals',
      'Solang to Dhundi Pick & Drop',
      'Forest & Local Sanctuary Permits'
    ]
  },
  {
    slug: 'bhrigu-lake',
    name: 'Bhrigu Lake High Alpine Meadow Trek',
    state: 'Himachal',
    region: 'Gulaba, Manali',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '14,100 ft',
    altitudeFt: 14100,
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    startingPoint: 'Gulaba (Manali)',
    bestSeason: 'May to October',
    price: '₹5,499',
    featured: false,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    overview: 'Bhrigu Lake is legendary for its vast, rolling high-altitude meadows that change colors with the seasons. Sacred to Maharishi Bhrigu, this lake stays frozen or crystal blue set against snowy Himalayan ridge views.',
    highlights: [
      'Walk on endless alpine grass meadows reminiscent of Switzerland',
      'Reach 14,000+ ft altitude in just 3 days',
      'Views of Seven Sisters Peaks, Deo Tibba, and Pir Panjal range',
      'Sacred glacial lake that never completely freezes over'
    ],
    itinerary: [
      { day: 1, title: 'Drive Manali to Gulaba → Trek to Rola Kholi', desc: 'Scenic drive to Gulaba on Rohtang road, then trek through oak and cedar forests to Rola Kholi camp (12,500 ft).', altitude: '12,500 ft', distance: '6 km' },
      { day: 2, title: 'Rola Kholi to Bhrigu Lake Summit & Back', desc: 'Steep climb across high alpine ridge line to reach Bhrigu Lake (14,100 ft), returning to Rola Kholi.', altitude: '14,100 ft', distance: '10 km' },
      { day: 3, title: 'Rola Kholi to Gulaba → Drive Back to Manali', desc: 'Gentle descent through Gulaba meadows and drive back to Manali by 2:00 PM.', altitude: '6,700 ft', distance: '6 km' }
    ],
    inclusions: [
      'Experienced Pahadi Expedition Leader',
      'Camping Equipment & Warm Sleeping Bags',
      'All Freshly Prepared Meals',
      'Manali to Gulaba Transport'
    ]
  },
  {
    slug: 'kheerganga',
    name: 'Kheerganga Hot Springs & Tosh Trail',
    state: 'Himachal',
    region: 'Parvati Valley, Kasol',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '9,700 ft',
    altitudeFt: 9700,
    duration: '2 Days / 1 Night',
    durationDays: 2,
    startingPoint: 'Barshaini (Kasol)',
    bestSeason: 'All Year Round',
    price: '₹2,499',
    featured: false,
    img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80',
    overview: 'Kheerganga is Parvati Valley’s most famous weekend trail. Passing by waterfalls, pine woods, and native Pahadi villages, the trail culminates at natural thermal hot water springs atop the mountain.',
    highlights: [
      'Natural natural thermal hot water springs bath with snow peak views',
      'Pass by Rudranag Waterfall and ancient wooden villages',
      'Ideal weekend getaway from Delhi / Chandigarh',
      'Vibrant backpacker cafe culture in Parvati Valley'
    ],
    itinerary: [
      { day: 1, title: 'Barshaini to Kheerganga Summit via Rudranag', desc: 'Trek along Parvati River through oak forests, crossing Rudranag temple and waterfall to reach Kheerganga (9,700 ft). Dip in natural hot springs.', altitude: '9,700 ft', distance: '12 km' },
      { day: 2, title: 'Kheerganga to Barshaini → Side Trip to Tosh Village', desc: 'Descend back to Barshaini and visit the scenic wooden mountain village of Tosh before evening departure.', altitude: '7,800 ft', distance: '12 km' }
    ],
    inclusions: [
      'Local Guide & Group Coordinator',
      'Dome Tent Accommodation & Dinner/Breakfast',
      'Hot Spring Access & Forest Permits'
    ]
  },
  {
    slug: 'pin-parvati-pass',
    name: 'Pin Parvati Pass Expedition',
    state: 'Himachal',
    region: 'Parvati Valley to Spiti',
    difficulty: 'Extreme',
    category: 'High Altitude Summits',
    altitude: '17,450 ft',
    altitudeFt: 17450,
    duration: '11 Days / 10 Nights',
    durationDays: 11,
    startingPoint: 'Bhuntar / Kasol',
    bestSeason: 'July to September',
    price: '₹28,500',
    featured: true,
    img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
    overview: 'Pin Parvati Pass is one of India’s most formidable high-altitude crossover expeditions. It connects the lush monsoon rainforests of Parvati Valley with the high cold desert of Spiti Valley over massive crevassed glaciers.',
    highlights: [
      'Cross the challenging 17,450 ft glacier pass connecting Kullu and Spiti',
      'Traverse high altitude alpine meadows of Mantalai Lake',
      'Experience wild river crossings and massive snow bridges',
      'Conclude in the ancient Buddhist monastery village of Kaza (Spiti)'
    ],
    itinerary: [
      { day: 1, title: 'Drive Bhuntar to Barsheni → Trek to Kalga', desc: 'Assembly at Bhuntar, drive to Barsheni and short walk to Kalga village.', altitude: '7,500 ft', distance: '3 km' },
      { day: 2, title: 'Kalga to Kheerganga to Tunda Bhuj', desc: 'Trek through pine wilderness past Kheerganga to Tunda Bhuj campsite.', altitude: '10,500 ft', distance: '14 km' },
      { day: 3, title: 'Tunda Bhuj to Thakur Kuan', desc: 'Challenging terrain with cliff trails and pull-trolley river crossings.', altitude: '11,800 ft', distance: '11 km' },
      { day: 4, title: 'Thakur Kuan to Mantalai Lake', desc: 'Ascend to the sacred source of Parvati River at Mantalai Lake (13,400 ft).', altitude: '13,400 ft', distance: '12 km' },
      { day: 5, title: 'Mantalai to Parvati Base Camp', desc: 'Climb steep boulder fields onto glacier moraine to Parvati Base Camp.', altitude: '16,000 ft', distance: '9 km' },
      { day: 6, title: 'Parvati Base Camp to Pin Pass Summit to Pin Base Camp', desc: 'Early morning climb across glacier crevasses to Pin Parvati Pass (17,450 ft) and descend into Spiti Valley.', altitude: '17,450 ft', distance: '12 km' },
      { day: 7, title: 'Pin Base Camp to Wichkurung to Mudh Village', desc: 'Walk down Pin Valley national park to the first roadhead at Mudh Village.', altitude: '12,500 ft', distance: '15 km' },
      { day: 8, title: 'Drive Mudh to Kaza (Spiti Valley)', desc: 'Rest day and drive to Kaza, visiting Key Monastery and Kibber village.', altitude: '12,000 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Expert High-Altitude Expedition Leader & HAP Porters',
      'Ropes, Harnesses, Crampons & Ice Axes',
      'All Camping Equipment, High-Calorie Meals & Oxygen Sets',
      'Spiti Valley Permits & Kaza Return Transport'
    ]
  },
  {
    slug: 'pin-bhaba-pass',
    name: 'Pin Bhaba Pass Crossover Trek',
    state: 'Himachal',
    region: 'Kinnaur to Spiti',
    difficulty: 'Challenging',
    category: 'Moderate Alpine Passes',
    altitude: '16,105 ft',
    altitudeFt: 16105,
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    startingPoint: 'Shimla / Kafnu',
    bestSeason: 'July to September',
    price: '₹15,800',
    featured: false,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    overview: 'Pin Bhaba Pass is considered one of the safest yet most stunning crossover treks in Himachal. Moving from the lush green forests of Bhaba Valley in Kinnaur to the vibrant pink and maroon soil of Pin Valley in Spiti.',
    highlights: [
      'Contrast between deep Kinnaur pine forests and stark Spiti desert',
      'Spectacular views of Phuparash peaks and Pin Glacier',
      'Camp at Karah pasture surrounded by alpine streams',
      'Finish at the picturesque Mudh village in Spiti'
    ],
    itinerary: [
      { day: 1, title: 'Drive Shimla to Kafnu Village', desc: 'Scenic drive through Narkanda and Wangtoo along Sutlej River to Kafnu (7,800 ft).', altitude: '7,800 ft', distance: 'Drive' },
      { day: 2, title: 'Kafnu to Mulling Campsite', desc: 'Trek along Bhaba River through dense pine and oak forest to Mulling meadow.', altitude: '10,600 ft', distance: '11 km' },
      { day: 3, title: 'Mulling to Karah Pasture', desc: 'Ascend past waterfalls and river crossings to the lush Karah meadows.', altitude: '11,650 ft', distance: '6 km' },
      { day: 4, title: 'Karah to Phutsirang (Bhaba High Base Camp)', desc: 'Short climb to high altitude base camp Phutsirang (13,500 ft) surrounded by glaciers.', altitude: '13,500 ft', distance: '5 km' },
      { day: 5, title: 'Phutsirang to Pin Bhaba Pass Summit to Mangrungse', desc: 'Cross steep snow slope to Pin Bhaba Pass (16,105 ft) with views of Spiti peaks.', altitude: '16,105 ft', distance: '12 km' },
      { day: 6, title: 'Mangrungse to Mudh Village → Drive to Kaza', desc: 'Descent to Mudh village in Spiti and drive to Kaza town.', altitude: '12,000 ft', distance: '9 km' }
    ],
    inclusions: [
      'Certified Alpine Guides & Porters',
      '4-Season Dome Tents, Sleeping Bags & Crampons',
      'All Meals & Energy Drinks',
      'Kafnu Pick Up & Kaza Drop'
    ]
  },
  {
    slug: 'triund-snowline',
    name: 'Triund & Snowline Ridge Trek',
    state: 'Himachal',
    region: 'Dharamshala & McLeod Ganj',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '10,760 ft',
    altitudeFt: 10760,
    duration: '2 Days / 1 Night',
    durationDays: 2,
    startingPoint: 'McLeod Ganj (Dharamshala)',
    bestSeason: 'All Year Round',
    price: '₹1,999',
    featured: false,
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    overview: 'Triund is the jewel of Dharamshala. Situated on a ridge underneath the snow-capped Dhauladhar range, it offers unmatched panoramic views of Kangra Valley on one side and Moon Peak glacier on the other.',
    highlights: [
      'Panoramic sunset & sunrise views over Kangra Valley',
      'Close-up view of Dhauladhar snow wall',
      'Beginner-friendly 4-5 hour hike from Bhagsu / Dharamkot',
      'Extendable hike up to Snowline Cafe and Laka Glacier'
    ],
    itinerary: [
      { day: 1, title: 'McLeod Ganj to Triund Ridge Summit', desc: 'Trek from Dharamkot / Gallu Devi temple through oak forests to Triund Top (9,350 ft). Sunset & bonfire camping.', altitude: '9,350 ft', distance: '7 km' },
      { day: 2, title: 'Triund to Snowline Cafe → Descend to McLeod Ganj', desc: 'Morning walk up to Snowline Cafe (10,760 ft) near Laka Glacier, then descend back to Dharamkot.', altitude: '10,760 ft', distance: '9 km' }
    ],
    inclusions: [
      'Pahadi Trekking Guide',
      'Triund Ridge Camping & Dome Tents',
      'Dinner, Breakfast & Morning Tea'
    ]
  },
  {
    slug: 'deo-tibba-basecamp',
    name: 'Deo Tibba Glacial Base Camp Trek',
    state: 'Himachal',
    region: 'Manali & Jagatsukh',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '14,800 ft',
    altitudeFt: 14800,
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPoint: 'Jagatsukh (Manali)',
    bestSeason: 'June to October',
    price: '₹11,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
    overview: 'Deo Tibba Base Camp trek takes you to Chhota Chandratal, a emerald blue high-altitude glacial lake lying at the foot of Mount Deo Tibba (6,001m) and Mount Indrasan in the Pir Panjal mountain range.',
    highlights: [
      'Camp at Chhota Chandratal emerald lake beneath Deo Tibba peak',
      'Wild flower pastures of Seri meadow',
      'Climb through pristine spruce and fir alpine forests',
      'Ideal for photographers & alpine trail enthusiasts'
    ],
    itinerary: [
      { day: 1, title: 'Drive Manali to Jagatsukh → Trek to Khanol to Chikka', desc: 'Drive to Khanol village and trek along Jagatsukh Nallah to Chikka campsite.', altitude: '10,200 ft', distance: '7 km' },
      { day: 2, title: 'Chikka to Seri Alpine Meadow', desc: 'Ascend out of forest zone into the vast flat carpet meadow of Seri (12,800 ft).', altitude: '12,800 ft', distance: '6 km' },
      { day: 3, title: 'Seri to Tentu Pass / Deo Tibba Base (Chhota Chandratal)', desc: 'Climb over boulder moraines to reach Chhota Chandratal lake at the foot of Deo Tibba glacier.', altitude: '14,800 ft', distance: '7 km' },
      { day: 4, title: 'Exploration around Deo Tibba Glacier → Back to Seri', desc: 'Morning photography around glacier and lake, descending back to Seri.', altitude: '12,800 ft', distance: '7 km' },
      { day: 5, title: 'Seri to Chikka to Khanol → Drive Back to Manali', desc: 'Descent to Khanol roadhead and drive back to Manali by evening.', altitude: '6,700 ft', distance: '13 km' }
    ],
    inclusions: [
      'Certified Senior Mountain Guide & Porters',
      'All Meals, Snacks & High-Altitude Camping Gear',
      'Jagatsukh Pick & Drop Transport'
    ]
  },
  {
    slug: 'sar-pass',
    name: 'Sar Pass Alpine Ridge Trek',
    state: 'Himachal',
    region: 'Parvati Valley, Kasol',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '13,800 ft',
    altitudeFt: 13800,
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    startingPoint: 'Kasol',
    bestSeason: 'May to October',
    price: '₹7,999',
    featured: false,
    img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
    overview: 'Sar Pass (where "Sar" means a high mountain lake) is one of Himachal’s most thrilling pass treks. Passing through rhododendron forests, lush bugyals, snow glissading slopes, and traditional Himachali villages.',
    highlights: [
      'Thrilling snow slide descent from Sar Pass top',
      'Picturesque campsites like Grahan, Min Thach, and Nagaru',
      'Cultural walkthrough of the secluded 200-year-old Grahan Village',
      'Pass through dense rhododendron and fir pine forests'
    ],
    itinerary: [
      { day: 1, title: 'Kasol to Grahan Village', desc: 'Trek from Kasol along Grahan Nallah to the traditional wooden village of Grahan (7,700 ft).', altitude: '7,700 ft', distance: '10 km' },
      { day: 2, title: 'Grahan to Min Thach', desc: 'Climb through rhododendron forests to Min Thach alpine meadow.', altitude: '10,700 ft', distance: '7 km' },
      { day: 3, title: 'Min Thach to Nagaru High Camp', desc: 'Steep climb over ridge lines to Nagaru campsite (12,500 ft) overlooking Parvati valley.', altitude: '12,500 ft', distance: '6 km' },
      { day: 4, title: 'Nagaru to Sar Pass Summit to Biskeri Thach', desc: 'Early morning snow climb to Sar Pass (13,800 ft), thrilling snow glissade down to Biskeri Thach.', altitude: '13,800 ft', distance: '14 km' },
      { day: 5, title: 'Biskeri Thach to Barshaini → Drive Back to Kasol', desc: 'Descent through Pulga village to Barshaini and return to Kasol.', altitude: '5,200 ft', distance: '10 km' }
    ],
    inclusions: [
      'Experienced Trek Leader & Support Staff',
      'Alpine Tents, Sleeping Bags & Safety Gear',
      'Nutritious Hot Meals on All Days'
    ]
  },

  // 🕉️ UTTARAKHAND TREKS
  {
    slug: 'kedarkantha',
    name: 'Kedarkantha Snow Summit Trek',
    state: 'Uttarakhand',
    region: 'Sankri, Govind National Park',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '12,500 ft',
    altitudeFt: 12500,
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    startingPoint: 'Dehradun / Sankri',
    bestSeason: 'December to April (Snow) / Oct-Nov',
    price: '₹7,200',
    featured: true,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    overview: 'Kedarkantha is India’s undisputed #1 winter snow summit trek. Located in Govind Pashu Vihar National Park, it offers a 360-degree summit view of Swargarohini, Black Peak, and Bandarpoonch over deep snow fields.',
    highlights: [
      'Summit 12,500 ft snow peak with 360-degree Himalayan views',
      'Camp beside Juda Ka Talab frozen high mountain lake',
      'Dense pine, oak, and maple forest trails covered in winter snow',
      'Iconic Trishul-marked Lord Shiva summit shrine'
    ],
    itinerary: [
      { day: 1, title: 'Drive Dehradun to Sankri Village', desc: '10-hour drive along Yamuna & Tons rivers to Sankri village basecamp (6,400 ft).', altitude: '6,400 ft', distance: '200 km Drive' },
      { day: 2, title: 'Sankri to Juda Ka Talab', desc: 'Trek through pine and maple trees to the frozen lake campsite of Juda Ka Talab (9,100 ft).', altitude: '9,100 ft', distance: '4 km' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Base Camp', desc: 'Climb through open snow meadows to Kedarkantha Base Camp (11,250 ft).', altitude: '11,250 ft', distance: '4 km' },
      { day: 4, title: 'Kedarkantha Base to Summit (12,500 ft) to Hargaon', desc: '4:00 AM summit push for sunrise over Swargarohini, descending to Hargaon camp.', altitude: '12,500 ft', distance: '6 km' },
      { day: 5, title: 'Hargaon to Sankri → Drive back to Dehradun', desc: 'Descend to Sankri and board vehicle for evening drop at Dehradun railway station.', altitude: '2,200 ft', distance: '4 km + Drive' }
    ],
    inclusions: [
      'Dehradun to Sankri Pickup & Drop in Tempo / Bolero',
      'Certified Uttarakhand Trek Leader & Microspikes/Gaiters',
      'High Altitude 4-Season Tents, Sleeping Bags & Meals',
      'Govind National Park Permit & Camping Fee'
    ]
  },
  {
    slug: 'har-ki-dun',
    name: 'Har Ki Dun Valley of Gods Trek',
    state: 'Uttarakhand',
    region: 'Sankri, Tons River Valley',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '11,800 ft',
    altitudeFt: 11800,
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    startingPoint: 'Dehradun / Sankri',
    bestSeason: 'March to June & Sept to Dec',
    price: '₹9,800',
    featured: true,
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    overview: 'Har Ki Dun ("Cradle of Lord Shiva") is a legendary cradle-shaped valley in the Garhwal Himalayas. Rich in ancient mythology, it takes you through 3,000-year-old wooden architecture villages like Osla and Gangad under Mount Swargarohini.',
    highlights: [
      'Walk through 3,000-year-old wooden architecture villages (Osla)',
      'Close-up views of Jaundhar Glacier and Swargarohini I, II, III peaks',
      'Ancient route walked by Pandavas on their ascent to heaven',
      'Rich Himalayan flora, alpine meadows & pine wilderness'
    ],
    itinerary: [
      { day: 1, title: 'Drive Dehradun to Sankri', desc: 'Scenic drive along Yamuna valley to Sankri basecamp.', altitude: '6,400 ft', distance: 'Drive' },
      { day: 2, title: 'Sankri to Taluka Drive → Trek to Pauni Garaat', desc: 'Drive to Taluka roadhead and trek along Supin river to Pauni Garaat.', altitude: '8,200 ft', distance: '10 km' },
      { day: 3, title: 'Pauni Garaat to Kalkattiyadhar', desc: 'Trek past the ancient village of Osla to Kalkattiyadhar meadow (9,800 ft).', altitude: '9,800 ft', distance: '7 km' },
      { day: 4, title: 'Kalkattiyadhar to Har Ki Dun Valley & Back', desc: 'Trek to the cradle valley of Har Ki Dun (11,800 ft) right beneath Swargarohini peak, returning to Kalkattiyadhar.', altitude: '11,800 ft', distance: '10 km' },
      { day: 5, title: 'Kalkattiyadhar to Pauni Garaat', desc: 'Leisurly descent exploring local wood-carved temples.', altitude: '8,200 ft', distance: '7 km' },
      { day: 6, title: 'Pauni Garaat to Taluka → Drive to Sankri', desc: 'Trek back to Taluka and drive to Sankri for celebration dinner.', altitude: '6,400 ft', distance: '10 km' },
      { day: 7, title: 'Drive Sankri to Dehradun', desc: 'Return drive arriving at Dehradun by 6:00 PM.', altitude: '2,200 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Dehradun Transport Pick & Drop',
      'Expert Garhwali Guides & Cooks',
      'All Meals, Tents & Homestay Accommodation in Sankri',
      'Govind National Park Entry & Wildlife Permits'
    ]
  },
  {
    slug: 'chopta-chandrashila',
    name: 'Chopta Chandrashila & Tungnath Temple Trek',
    state: 'Uttarakhand',
    region: 'Rudraprayag, Garhwal',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '13,000 ft',
    altitudeFt: 13000,
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    startingPoint: 'Rishikesh / Chopta',
    bestSeason: 'All Year Round',
    price: '₹5,200',
    featured: false,
    img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80',
    overview: 'Chopta, known as the "Mini Switzerland of India", leads up to Tungnath—the highest Shiva temple in the world (12,070 ft)—and onward to Chandrashila Peak (13,000 ft) for a 360-degree view of Nanda Devi, Chaukhamba, and Trishul peaks.',
    highlights: [
      'Visit Tungnath Temple — Highest Lord Shiva shrine in the world',
      'Reach Chandrashila Summit (13,000 ft) with 360° Himalayan vista',
      'Camp in the scenic alpine meadows (Bugyal) of Chopta',
      'Includes visit to Deoriatal Lake with reflections of Chaukhamba'
    ],
    itinerary: [
      { day: 1, title: 'Drive Rishikesh to Sari → Trek to Deoriatal Lake', desc: 'Drive along Alaknanda River to Sari village, then 2 km walk to Deoriatal Lake campsite (7,800 ft).', altitude: '7,800 ft', distance: '2 km + Drive' },
      { day: 2, title: 'Deoriatal to Chopta → Trek to Tungnath & Chandrashila Peak', desc: 'Drive to Chopta roadhead, trek up to Tungnath Temple (12,070 ft) and Chandrashila Peak (13,000 ft), returning to Chopta camp.', altitude: '13,000 ft', distance: '8 km' },
      { day: 3, title: 'Chopta to Rishikesh via Devprayag Sangam', desc: 'Morning breakfast and drive back to Rishikesh, stopping at Devprayag holy confluence.', altitude: '1,100 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Rishikesh to Chopta Pick & Drop',
      'Swiss Cottage Tents / Camping with Hot Meals',
      'Guide & Temple Entry Permits'
    ]
  },
  {
    slug: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund Sahib Trek',
    state: 'Uttarakhand',
    region: 'Govindghat, Chamoli',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '14,400 ft',
    altitudeFt: 14400,
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPoint: 'Rishikesh / Govindghat',
    bestSeason: 'July to September (Bloom Season)',
    price: '₹9,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    overview: 'A UNESCO World Heritage site, Valley of Flowers comes alive in monsoon with over 500 species of wild alpine flowers including Blue Poppy and Brahma Kamal. Combined with the holy high-altitude lake of Hemkund Sahib.',
    highlights: [
      'UNESCO World Heritage National Park blooming with 500+ flower species',
      'Spot rare flowers like Brahma Kamal, Blue Poppy & Cobra Lily',
      'Visit Hemkund Sahib — Highest Sikh pilgrimage shrine at 14,400 ft',
      'Trek alongside Pushpawati river and glacial waterfalls'
    ],
    itinerary: [
      { day: 1, title: 'Drive Rishikesh to Govindghat / Poolna', desc: '10-hour drive along Panch Prayag confluences to Govindghat (6,000 ft).', altitude: '6,000 ft', distance: 'Drive' },
      { day: 2, title: 'Poolna to Ghangaria Basecamp', desc: 'Trek along Bhyundar Ganga river through lush woods to Ghangaria village (9,800 ft).', altitude: '9,800 ft', distance: '10 km' },
      { day: 3, title: 'Ghangaria to Valley of Flowers National Park & Back', desc: 'Full day exploration inside Valley of Flowers (11,500 ft) amid carpets of wild blossoms.', altitude: '11,500 ft', distance: '8 km' },
      { day: 4, title: 'Ghangaria to Hemkund Sahib Holy Lake & Back', desc: 'Steep climb up to Hemkund Sahib shrine and glacial lake at 14,400 ft.', altitude: '14,400 ft', distance: '12 km' },
      { day: 5, title: 'Ghangaria to Poolna → Drive to Joshimath', desc: 'Descend to Poolna and drive to Joshimath for night stay.', altitude: '6,200 ft', distance: '10 km' },
      { day: 6, title: 'Drive Joshimath to Rishikesh', desc: 'Scenic return drive arriving at Rishikesh by evening.', altitude: '1,100 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Rishikesh Transport Pick & Drop',
      'Ghangaria Hotel / Guest House Stay with Hot Meals',
      'UNESCO National Park Entry Fee & Certified Guide'
    ]
  },
  {
    slug: 'roopkund',
    name: 'Roopkund Mystery Glacial Lake Expedition',
    state: 'Uttarakhand',
    region: 'Lohajung, Chamoli',
    difficulty: 'Challenging',
    category: 'High Altitude Summits',
    altitude: '15,750 ft',
    altitudeFt: 15750,
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    startingPoint: 'Kathgodam / Lohajung',
    bestSeason: 'May-June & Sept-Oct',
    price: '₹14,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Roopkund is Uttarakhand’s iconic high-altitude glacial lake famed for human skeletal remains dating back to the 9th century. The trail traverses two of India’s largest alpine meadows: Ali Bugyal and Bedni Bugyal.',
    highlights: [
      'Visit the mysterious 15,750 ft skeleton lake beneath Mount Trishul',
      'Traverse twin alpine bugyals of Ali and Bedni',
      'Views of Mount Trishul (7,120m) and Mount Nanda Ghunti',
      'Camp at Bhagwabasa surrounded by snow cliffs'
    ],
    itinerary: [
      { day: 1, title: 'Drive Kathgodam to Lohajung Basecamp', desc: 'Drive through Kumaon hills via Almora and Kausani to Lohajung (7,700 ft).', altitude: '7,700 ft', distance: 'Drive' },
      { day: 2, title: 'Lohajung to Didna Village', desc: 'Trek down to Neel Ganga river and climb to Didna mountain village.', altitude: '8,500 ft', distance: '8 km' },
      { day: 3, title: 'Didna to Ali Bugyal to Bedni Bugyal', desc: 'Climb through oak forest to the endless green pastures of Ali & Bedni Bugyal.', altitude: '11,500 ft', distance: '10 km' },
      { day: 4, title: 'Bedni Bugyal to Ghora Lotani to Patar Nachauni', desc: 'Ridge walk with Trishul peak dominating the skyline.', altitude: '12,800 ft', distance: '7 km' },
      { day: 5, title: 'Patar Nachauni to Bhagwabasa High Base', desc: 'Ascend past Kalu Vinayak temple to snow-covered Bhagwabasa camp.', altitude: '14,100 ft', distance: '5 km' },
      { day: 6, title: 'Bhagwabasa to Roopkund Lake (15,750 ft) to Bedni', desc: 'Early morning summit climb to Roopkund glacial lake, returning to Bedni Bugyal.', altitude: '15,750 ft', distance: '12 km' },
      { day: 7, title: 'Bedni Bugyal to Wan Village → Drive to Lohajung', desc: 'Descend through Neel Ganga to Wan village and drive to Lohajung.', altitude: '7,700 ft', distance: '10 km' },
      { day: 8, title: 'Drive Lohajung to Kathgodam', desc: 'Return drive to Kathgodam railway station.', altitude: '1,700 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Kathgodam Pick & Drop Transport',
      'Expert Alpine Guides & High Altitude Support Staff',
      'All Meals, Tents, Microspikes & Permits'
    ]
  },
  {
    slug: 'brahmatal',
    name: 'Brahmatal Winter Snow Ridge Trek',
    state: 'Uttarakhand',
    region: 'Lohajung, Chamoli',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '12,250 ft',
    altitudeFt: 12250,
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPoint: 'Kathgodam / Lohajung',
    bestSeason: 'December to April (Snow Season)',
    price: '₹8,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    overview: 'Brahmatal is one of India’s finest winter snow ridge treks. Walking past Bekaltal frozen lake up to Brahmatal ridge offers unmatched front-row views of Mount Trishul and Mount Nanda Ghunti.',
    highlights: [
      'Front-row view of Trishul & Nanda Ghunti snow massifs',
      'Camp beside frozen alpine lakes of Bekaltal and Brahmatal',
      'Snow-covered oak and rhododendron forest trails',
      'Exhilarating ridge walk with deep valley views on both sides'
    ],
    itinerary: [
      { day: 1, title: 'Drive Kathgodam to Lohajung', desc: 'Drive through Kumaon hills to Lohajung basecamp (7,700 ft).', altitude: '7,700 ft', distance: 'Drive' },
      { day: 2, title: 'Lohajung to Bekaltal Lake', desc: 'Trek through Mandoli village and oak woods to Bekaltal lake (9,885 ft).', altitude: '9,885 ft', distance: '6 km' },
      { day: 3, title: 'Bekaltal to Brahmatal Campsite', desc: 'Ascend out of tree line onto snow ridge line to reach Brahmatal camp (10,440 ft).', altitude: '10,440 ft', distance: '7 km' },
      { day: 4, title: 'Brahmatal Camp to Brahmatal Top Summit (12,250 ft) to Khabekhal', desc: 'Summit push for sunrise views of Trishul peak, descending to Khabekhal.', altitude: '12,250 ft', distance: '7 km' },
      { day: 5, title: 'Khabekhal to Lohajung', desc: 'Descend through Wan forest path back to Lohajung.', altitude: '7,700 ft', distance: '8 km' },
      { day: 6, title: 'Drive Lohajung to Kathgodam', desc: 'Return drive arriving Kathgodam by evening.', altitude: '1,700 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Kathgodam Pick & Drop',
      'Trek Leader, Microspikes & Gaiters',
      'High Quality Camping Tents & Fresh Hot Meals'
    ]
  },
  {
    slug: 'kuari-pass',
    name: 'Kuari Pass Lord Curzon Trail',
    state: 'Uttarakhand',
    region: 'Joshimath, Chamoli',
    difficulty: 'Moderate',
    category: 'Moderate Alpine Passes',
    altitude: '12,516 ft',
    altitudeFt: 12516,
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPoint: 'Rishikesh / Joshimath',
    bestSeason: 'November to June',
    price: '₹9,200',
    featured: false,
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80',
    overview: 'Kuari Pass ("Doorway") was pioneered by Lord Curzon in 1905. It provides the single grandest view of Mount Nanda Devi (7,816m)—India’s second highest peak—alongside Kamet, Dronagiri, and Bethartoli.',
    highlights: [
      'Unrivaled views of Mount Nanda Devi (7,816m) summit pyramid',
      'Camp at Gorson Bugyal high alpine vast grasslands',
      'Walk through ancient oak and rhododendron wilderness',
      'Includes optional visit to Auli Ski Resort'
    ],
    itinerary: [
      { day: 1, title: 'Drive Rishikesh to Joshimath', desc: 'Drive along Alaknanda River to Joshimath base town (6,150 ft).', altitude: '6,150 ft', distance: 'Drive' },
      { day: 2, title: 'Drive Joshimath to Dhak → Trek to Gulling Top', desc: 'Short drive to Dhak village, trekking past Tugasi to Gulling camp (9,600 ft).', altitude: '9,600 ft', distance: '6 km' },
      { day: 3, title: 'Gulling Top to Tali Forest Camp', desc: 'Trek through dense ancient oak forests to Tali campsite (11,000 ft).', altitude: '11,000 ft', distance: '5 km' },
      { day: 4, title: 'Tali Camp to Kuari Pass Summit (12,516 ft) & Back via Gorson Bugyal', desc: 'Climb to Kuari Pass for 360° view of Nanda Devi, returning via Gorson Bugyal.', altitude: '12,516 ft', distance: '12 km' },
      { day: 5, title: 'Tali to Auli Ski Resort → Drive to Joshimath', desc: 'Descend through Gorson Bugyal to Auli cable car station and drive to Joshimath.', altitude: '6,150 ft', distance: '8 km' },
      { day: 6, title: 'Drive Joshimath to Rishikesh', desc: 'Return drive arriving Rishikesh by 6:00 PM.', altitude: '1,100 ft', distance: 'Drive' }
    ],
    inclusions: [
      'Rishikesh Transport Pick & Drop',
      'Joshimath Hotel Stay & Tali Camping Equipment',
      'Certified Guides & Forest Entry Fees'
    ]
  },
  {
    slug: 'nag-tibba',
    name: 'Nag Tibba Weekend Serpent Summit Trek',
    state: 'Uttarakhand',
    region: 'Mussoorie & Pantwari',
    difficulty: 'Easy',
    category: 'Easy Weekend Treks',
    altitude: '9,915 ft',
    altitudeFt: 9915,
    duration: '2 Days / 1 Night',
    durationDays: 2,
    startingPoint: 'Dehradun / Pantwari',
    bestSeason: 'All Year Round',
    price: '₹2,199',
    featured: false,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    overview: 'Nag Tibba ("Serpent’s Peak") is the highest peak in the lesser Himalayan region of Garhwal near Mussoorie. Easily doable over a weekend, it offers views of Gangotri group of peaks and Kedarnath peak.',
    highlights: [
      'Quickest 2-day summit trek near Mussoorie & Dehradun',
      '360° views of Swargarohini, Bandarpoonch, Gangotri & Kedarnath',
      'Camp at Nag Tibba base surrounded by oak woods',
      'Ideal for first-time hikers & weekenders'
    ],
    itinerary: [
      { day: 1, title: 'Drive Dehradun to Pantwari → Trek to Nag Tibba Base Camp', desc: '3-hour drive to Pantwari village, trekking 5 km up to Nag Tibba Base Camp (8,500 ft). Sunset & bonfire.', altitude: '8,500 ft', distance: '5 km' },
      { day: 2, title: 'Base Camp to Nag Tibba Summit (9,915 ft) → Descend to Pantwari → Drive Dehradun', desc: 'Early morning summit climb, descending via Nag Devta temple back to Pantwari and return drive to Dehradun.', altitude: '9,915 ft', distance: '8 km' }
    ],
    inclusions: [
      'Dehradun to Pantwari Transport',
      'Base Camp Tents, Sleeping Bags & Dinner/Breakfast',
      'Local Pahadi Trek Leader'
    ]
  },
  {
    slug: 'bali-pass',
    name: 'Bali Pass High Altitude Expedition',
    state: 'Uttarakhand',
    region: 'Yamunotri & Sankri',
    difficulty: 'Challenging',
    category: 'High Altitude Summits',
    altitude: '16,207 ft',
    altitudeFt: 16207,
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    startingPoint: 'Dehradun / Sankri',
    bestSeason: 'May-June & Sept-Oct',
    price: '₹17,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
    overview: 'Bali Pass is a high mountain crossover connecting the Har Ki Dun valley with the sacred Yamunotri valley. Crossing over a knife-edge snow ridge at 16,207 ft, it offers panoramic views of Bandarpoonch and Kalanag.',
    highlights: [
      'Thrilling knife-edge ridge crossover at 16,207 ft',
      'Pristine Ruinsara high alpine lake camping',
      'Panoramic views of Mount Bandarpoonch (6,316m) & Black Peak',
      'Concludes at Yamunotri holy shrine & hot water springs'
    ],
    itinerary: [
      { day: 1, title: 'Drive Dehradun to Sankri Basecamp', desc: 'Drive to Sankri village (6,400 ft).', altitude: '6,400 ft', distance: 'Drive' },
      { day: 2, title: 'Sankri to Taluka Drive → Trek to Seema', desc: 'Trek along Supin river to Seema village.', altitude: '8,400 ft', distance: '12 km' },
      { day: 3, title: 'Seema to Ruinsara Tal Lake', desc: 'Ascend into Ruinsara valley to camp at sacred Ruinsara Lake (11,800 ft).', altitude: '11,800 ft', distance: '13 km' },
      { day: 4, title: 'Ruinsara Tal to Thanga / Kyarkoti Base Camp', desc: 'Rest and short acclimatization walk to Bali Pass base camp (13,400 ft).', altitude: '13,400 ft', distance: '4 km' },
      { day: 5, title: 'Base Camp to High Camp (Advance Base Camp)', desc: 'Climb steep glacier ridge to Advance Base Camp (15,100 ft).', altitude: '15,100 ft', distance: '5 km' },
      { day: 6, title: 'High Camp to Bali Pass Summit (16,207 ft) to Damini', desc: 'Cross steep snow ridge of Bali Pass (16,207 ft) with rope belays, descending to Damini camp.', altitude: '16,207 ft', distance: '9 km' },
      { day: 7, title: 'Damini to Yamunotri Shrine → Trek to Janki Chatti → Drive to Dehradun', desc: 'Descend to Yamunotri temple, soak in hot springs, trek to Janki Chatti and drive back.', altitude: '2,200 ft', distance: '10 km' }
    ],
    inclusions: [
      'Expert Alpine Expedition Leader & Technical Support Crew',
      'Safety Ropes, Harnesses, Crampons & Gaiters',
      'All Camping Equipment & High-Calorie Meals',
      'Dehradun Pick & Drop'
    ]
  }
];
