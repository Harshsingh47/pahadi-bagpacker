'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface DayPlan {
  day: string;
  title: string;
  desc: string;
  accent: string;
}

export default function ItineraryPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  const [submitted, setSubmitted] = useState(false);

  const [config, setConfig] = useState({
    destination: 'himachal',
    travelDate: '',
    durationDays: '5',
    travelers: 'couple',
    budget: 'budget',
    styles: ['backpacking'],
    activities: ['trekking'],
    transport: 'taxi'
  });

  const [result, setResult] = useState<{ title: string; cost: string; days: DayPlan[] } | null>(null);

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let title = "5-Day Himachal Adventure Explorer";
    let estCost = "₹12,500 - ₹16,000 per person";
    let days: DayPlan[] = [
      {
        day: "DAY 01",
        title: "Arrival in Manali → Check-in & Old Manali Culture Walk",
        desc: "Reach Manali via overnight HRTC Volvo or private taxi. Check into backpacker hostel or riverside homestay. Afternoon stroll through Old Manali cafes, Hadimba Temple, and Manu Temple trail.",
        accent: "Check-in & Acclimatization"
      },
      {
        day: "DAY 02",
        title: "Solang Valley Adventure & Sethan Valley Sunset Camp",
        desc: "Drive to Solang Valley for paragliding or ziplining. Continue up to Sethan Village (an offbeat Buddhist igloo village at 2,700m). Enjoy evening campfire and stargazing.",
        accent: "Adventure & High Altitude"
      },
      {
        day: "DAY 03",
        title: "Day Trek to Jogini Waterfall & Vashisht Hot Springs",
        desc: "Trek through pine forests and apple orchards from Vashisht to Jogini Waterfall. Take a refreshing dip in natural sulphur hot springs in Vashisht.",
        accent: "Forest Trail & Waterfall Trek"
      },
      {
        day: "DAY 04",
        title: "Scenic Drive across Atal Tunnel → Sissu, Lahaul Valley",
        desc: "Traverse the iconic 9.02 km Atal Tunnel into Lahaul Valley. Explore Sissu Waterfall, Palchan bridge, and breathtaking snow peaks.",
        accent: "Road Trip & Tunnel Passage"
      },
      {
        day: "DAY 05",
        title: "Local Souvenir Shopping → Departure to Delhi/Chandigarh",
        desc: "Explore Mall Road for local Pahadi shawls, honey, and handmade handicrafts. Evening overnight bus departure with unforgettable Himalayan memories.",
        accent: "Departure & Memories"
      }
    ];

    if (config.destination === 'uttarakhand') {
      title = "5-Day Uttarakhand Mountain & River Trail (Rishikesh - Chopta)";
      estCost = "₹11,000 - ₹14,500 per person";
      days = [
        {
          day: "DAY 01",
          title: "Rishikesh Arrival → Ganga Aarti & Riverside Camping",
          desc: "Reach Rishikesh, check into luxury riverside camp in Shivpuri. Attend the mesmerising evening Ganga Aarti at Parmarth Niketan.",
          accent: "Spiritual & Riverside Camp"
        },
        {
          day: "DAY 02",
          title: "White Water Rafting & Cliff Jumping → Drive to Sari Village",
          desc: "Morning 16km Grade-III white water rafting down the Ganges. Post lunch, scenic drive along Alaknanda river to Sari village base camp.",
          accent: "Rafting & Alpine Drive"
        },
        {
          day: "DAY 03",
          title: "Trek to Deoriatal Lake → Chopta Meadows",
          desc: "3km morning trek to pristine Deoriatal Lake reflecting Chaukhamba peaks. Afternoon drive to Chopta ('Mini Switzerland of India').",
          accent: "Alpine Lake Trek"
        },
        {
          day: "DAY 04",
          title: "Chopta to Tungnath (Highest Shiva Temple) & Chandrashila Peak (4,000m)",
          desc: "Early morning trek to 1,000-year-old Tungnath Temple and summit Chandrashila for 360° views of Nanda Devi, Trishul, and Kedar peaks.",
          accent: "Summit Trek & Temple"
        },
        {
          day: "DAY 05",
          title: "Return Drive to Haridwar/Dehradun → Departure",
          desc: "Descend from Chopta, stopping at Devprayag (Sangam of Alaknanda and Bhagirathi). Return to Haridwar station for departure.",
          accent: "River Sangam & Departure"
        }
      ];
    }

    setResult({ title, cost: estCost, days });
    setSubmitted(true);
  };

  return (
    <div>
      {/* PROGRESS BAR */}
      {!submitted && (
        <div className="mt-8 max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono font-semibold mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>Instant Custom Generator</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300">
            <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
        </div>
      )}

      {!submitted ? (
        <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit}>

            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 01</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Your Primary Region</h3>
                  <p className="text-xs text-slate-500">Where do you want to explore on this journey?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setConfig({ ...config, destination: 'himachal' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'himachal' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🏔️</span>
                    <h4 className="font-bold text-slate-900 text-base">Himachal Pradesh</h4>
                    <p className="text-xs text-slate-500 mt-1">Manali, Spiti Valley, Kasol, Shimla, Bir, Chitkul.</p>
                  </div>

                  <div 
                    onClick={() => setConfig({ ...config, destination: 'uttarakhand' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'uttarakhand' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🌊</span>
                    <h4 className="font-bold text-slate-900 text-base">Uttarakhand</h4>
                    <p className="text-xs text-slate-500 mt-1">Rishikesh, Chopta, Auli, Kedarnath, Valley of Flowers.</p>
                  </div>

                  <div 
                    onClick={() => setConfig({ ...config, destination: 'both' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'both' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🏕️</span>
                    <h4 className="font-bold text-slate-900 text-base">Grand Combo (Both)</h4>
                    <p className="text-xs text-slate-500 mt-1">Extended multi-week cross-state Himalayan road trip.</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 02</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Travel Dates & Duration</h3>
                  <p className="text-xs text-slate-500">How many days do you have for this adventure?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1.5">Start Date</label>
                    <input 
                      type="date"
                      value={config.travelDate}
                      onChange={(e) => setConfig({ ...config, travelDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1.5">Duration (Days)</label>
                    <select 
                      value={config.durationDays}
                      onChange={(e) => setConfig({ ...config, durationDays: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    >
                      <option value="3">3 Days (Weekend Escape)</option>
                      <option value="5">5 Days (Popular Explorer)</option>
                      <option value="7">7 Days (Full Circuit)</option>
                      <option value="10">10+ Days (Extended Expedition)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 03</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Who is Travelling?</h3>
                  <p className="text-xs text-slate-500">Select your group composition.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['solo', 'couple', 'friends', 'family'].map((type) => (
                    <div 
                      key={type}
                      onClick={() => setConfig({ ...config, travelers: type })}
                      className={`p-4 rounded-xl border cursor-pointer text-center transition-all ${config.travelers === type ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                    >
                      <span className="text-2xl block mb-1">
                        {type === 'solo' ? '🎒' : type === 'couple' ? '👩‍❤️‍👨' : type === 'friends' ? '👥' : '👨‍👩‍👧‍👦'}
                      </span>
                      <h5 className="font-bold text-slate-900 text-xs capitalize">{type}</h5>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 04</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Budget Tier</h3>
                  <p className="text-xs text-slate-500">Choose your preferred comfort level.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setConfig({ ...config, budget: 'budget' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.budget === 'budget' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h4 className="font-bold text-emerald-700 text-base">Backpacker Budget</h4>
                    <p className="text-xs text-slate-500 mt-1">Hostels, homestays, Volvo buses & shared cabs (~₹1,500 - ₹2,500/day)</p>
                  </div>
                  <div 
                    onClick={() => setConfig({ ...config, budget: 'standard' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.budget === 'standard' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h4 className="font-bold text-slate-900 text-base">Comfort Standard</h4>
                    <p className="text-xs text-slate-500 mt-1">3-star hotels, riverside camps & private cabs (~₹3,500 - ₹5,000/day)</p>
                  </div>
                  <div 
                    onClick={() => setConfig({ ...config, budget: 'premium' })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.budget === 'premium' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h4 className="font-bold text-amber-700 text-base">Premium Adventure</h4>
                    <p className="text-xs text-slate-500 mt-1">Luxury mountain resorts, 4x4 Thar rental (~₹7,000+/day)</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 05</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Travel Style</h3>
                  <p className="text-xs text-slate-500">Select preferred vibes.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['backpacking', 'adventure', 'roadtrip', 'spiritual'].map((style) => (
                    <div 
                      key={style}
                      onClick={() => {
                        const newStyles = config.styles.includes(style) 
                          ? config.styles.filter(s => s !== style)
                          : [...config.styles, style];
                        setConfig({ ...config, styles: newStyles });
                      }}
                      className={`p-3 rounded-xl border cursor-pointer text-xs font-bold text-center transition-all ${config.styles.includes(style) ? 'border-emerald-600 bg-emerald-50/70 text-emerald-800' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100/80'}`}
                    >
                      {style === 'backpacking' ? '🎒 Backpacking' : style === 'adventure' ? '🏕️ Adventure' : style === 'roadtrip' ? '🚗 Road Trip' : '🕉️ Spiritual'}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 6 */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 06</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Preferred Activities</h3>
                  <p className="text-xs text-slate-500">What do you want to experience?</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['trekking', 'camping', 'rafting', 'sightseeing'].map((act) => (
                    <div 
                      key={act}
                      onClick={() => {
                        const newAct = config.activities.includes(act)
                          ? config.activities.filter(a => a !== act)
                          : [...config.activities, act];
                        setConfig({ ...config, activities: newAct });
                      }}
                      className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${config.activities.includes(act) ? 'border-emerald-600 bg-emerald-50/70 text-emerald-800 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100/80'}`}
                    >
                      {act === 'trekking' ? '🥾 Alpine Trekking' : act === 'camping' ? '⛺ Stargazing & Camping' : act === 'rafting' ? '🌊 River Rafting' : '📷 Sightseeing'}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 7 */}
            {currentStep === 7 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 07</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Transportation Preference</h3>
                  <p className="text-xs text-slate-500">How would you like to travel between destinations?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setConfig({ ...config, transport: 'taxi' })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${config.transport === 'taxi' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h5 className="font-bold text-slate-900 text-sm">🚕 Private Taxi Cab</h5>
                    <p className="text-xs text-slate-500 mt-1">Pahadi driver included.</p>
                  </div>
                  <div 
                    onClick={() => setConfig({ ...config, transport: 'self_car' })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${config.transport === 'self_car' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h5 className="font-bold text-slate-900 text-sm">🚙 Self-Drive SUV</h5>
                    <p className="text-xs text-slate-500 mt-1">Thar 4x4 or Scorpio N.</p>
                  </div>
                  <div 
                    onClick={() => setConfig({ ...config, transport: 'bike' })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${config.transport === 'bike' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <h5 className="font-bold text-slate-900 text-sm">🏍️ Motorbike Rental</h5>
                    <p className="text-xs text-slate-500 mt-1">RE Himalayan 450.</p>
                  </div>
                </div>
              </div>
            )}

            {/* NAV BUTTONS */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
              {currentStep > 1 && (
                <button type="button" onClick={handlePrev} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-300 transition-all">
                  &larr; Previous Step
                </button>
              )}
              <div className="ml-auto">
                {currentStep < totalSteps ? (
                  <button type="button" onClick={handleNext} className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all">
                    Next Step &rarr;
                  </button>
                ) : (
                  <button type="submit" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all">
                    Generate Custom Itinerary ✨
                  </button>
                )}
              </div>
            </div>

          </form>
        </div>
      ) : (
        /* RESULT CONTAINER */
        result && (
          <div className="bg-white border border-emerald-300 p-6 sm:p-10 rounded-3xl shadow-xl space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">YOUR CUSTOMIZED ITINERARY</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 uppercase font-heading">{result.title}</h2>
              </div>
              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 sm:text-right">
                <span className="text-[10px] text-slate-500 font-semibold uppercase block">Estimated Total Cost</span>
                <strong className="text-emerald-700 text-base font-bold">{result.cost}</strong>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {result.days.map((d, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10 pb-8 border-l-2 border-emerald-400 last:border-l-0">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center text-emerald-700 font-bold text-xs shadow-sm">
                    0{idx + 1}
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-emerald-400 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">{d.accent}</span>
                      <span className="text-xs text-slate-500 font-mono font-semibold">{d.day}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{d.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold rounded-xl border border-slate-300 transition-all">
                &larr; Modify Trip Options
              </button>
              <Link href="/booking?plan=custom" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all">
                Send This Plan for Booking &rarr;
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}
