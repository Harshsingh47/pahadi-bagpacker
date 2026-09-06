'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Calendar, Users, DollarSign, Compass, Mountain, Car, 
  Send, Phone, User, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Check,
  MessageSquare, Clock
} from 'lucide-react';

const HP_AREAS = [
  { id: 'Manali & Solang Valley', name: 'Kullu & Manali Valley', desc: 'Old Manali cafes, Hadimba, Solang, Sethan igloo village, Atal Tunnel Sissu', icon: '🏔️' },
  { id: 'Spiti Valley Cold Desert', name: 'Spiti Cold Desert & Lahaul', desc: 'Kaza, Key Monastery, Chandratal Crescent Lake, Hikkim, Langza', icon: '🌵' },
  { id: 'Kasol & Parvati Valley', name: 'Parvati Valley & Tosh', desc: 'Kasol, Tosh, Chalal, Kheerganga hot springs, Manikaran Sahib', icon: '🌲' },
  { id: 'Kinnaur & Kalpa Circuit', name: 'Kinnaur & Kalpa Circuit', desc: 'Kalpa, Sangla Valley, Chitkul (Last Village), Kinnaur Kailash views', icon: '🍎' },
  { id: 'Bir Billing & Dharamshala', name: 'Kangra Valley & Bir Billing', desc: 'Bir Billing paragliding, McLeodganj, Dharamshala, Tibetan monasteries', icon: '🪂' },
  { id: 'Shimla & Tirthan Valley', name: 'Shimla & Tirthan Valley', desc: 'Shimla Mall Road, Jibhi, Shoja, Jalori Pass, Great Himalayan National Park', icon: '🪵' }
];

const UK_AREAS = [
  { id: 'Rishikesh & Haridwar', name: 'Rishikesh & Haridwar Valley', desc: 'Ganga Aarti, White Water Rafting, Beatles Ashram, Shivpuri beach camps', icon: '🌊' },
  { id: 'Chopta & Tungnath Peak', name: 'Garhwal Meadows & Chopta', desc: 'Chopta, Tungnath (highest Shiva temple), Chandrashila 4000m peak, Deoriatal', icon: '🏔️' },
  { id: 'Auli & Joshimath', name: 'Auli & Joshimath Circuit', desc: 'Auli ski slopes, ropeway, Joshimath, Gateway to Badrinath', icon: '⛷️' },
  { id: 'Valley of Flowers', name: 'Valley of Flowers & Hemkund', desc: 'UNESCO Valley of Flowers trek, Hemkund Sahib holy lake', icon: '🌸' },
  { id: 'Kumaon Lakes (Nainital)', name: 'Kumaon Lakes & Peaks', desc: 'Nainital, Mukteshwar, Ranikhet, Almora, Binsar wildlife sanctuary', icon: '🏞️' },
  { id: 'Char Dham Circuit', name: 'Char Dham Sacred Route', desc: 'Kedarnath, Badrinath, Gangotri, Yamunotri holy shrines', icon: '🕉️' }
];

export default function ItineraryPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  const [submitted, setSubmitted] = useState(false);

  const [config, setConfig] = useState({
    destination: 'himachal', // 'himachal' | 'uttarakhand' | 'both'
    selectedAreas: ['Manali & Solang Valley', 'Kasol & Parvati Valley'] as string[],
    travelDate: '',
    durationDays: '5',
    travelers: 'couple',
    groupMembersCount: '2',
    userName: '',
    userPhone: '',
    pickupCity: '',
    specialNotes: '',
    budget: 'budget',
    styles: ['backpacking'],
    activities: ['trekking'],
    transport: 'taxi'
  });

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleArea = (areaName: string) => {
    if (config.selectedAreas.includes(areaName)) {
      setConfig({ ...config, selectedAreas: config.selectedAreas.filter(a => a !== areaName) });
    } else {
      setConfig({ ...config, selectedAreas: [...config.selectedAreas, areaName] });
    }
  };

  const sendToWhatsApp = () => {
    const adminPhone = "919816012345";
    
    const message = `🏔️ *NEW TRIP ITINERARY REQUEST - PAHADI BAGPACKERS* 🏔️

👤 *GUEST CONTACT DETAILS:*
• *Name:* ${config.userName || 'Guest (Not Specified)'}
• *Phone / WhatsApp:* ${config.userPhone || 'Not Provided'}
• *Total Members:* ${config.groupMembersCount} Member(s) (${config.travelers})
• *Pickup City:* ${config.pickupCity || 'Delhi / Nearby'}

🗺️ *TRIP PREFERENCES:*
• *Region:* ${config.destination === 'himachal' ? 'Himachal Pradesh' : config.destination === 'uttarakhand' ? 'Uttarakhand' : 'Grand Combo (Both HP & UK)'}
• *Selected Areas:* ${config.selectedAreas.length > 0 ? config.selectedAreas.join(', ') : 'All Popular Circuits'}
• *Travel Date:* ${config.travelDate || 'Flexible / To be decided'}
• *Duration:* ${config.durationDays} Days
• *Budget Tier:* ${config.budget.toUpperCase()}
• *Travel Vibe:* ${config.styles.join(', ')}
• *Activities:* ${config.activities.join(', ')}
• *Transport Mode:* ${config.transport.toUpperCase()}
${config.specialNotes ? `• *Special Notes:* ${config.specialNotes}` : ''}

---------------------------------
📌 *Please send customized itinerary & best price quote to this guest on WhatsApp!*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${adminPhone}?text=${encoded}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    sendToWhatsApp();
  };

  return (
    <div>
      {/* PROGRESS BAR */}
      {!submitted && (
        <div className="mt-8 max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono font-semibold mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span className="text-emerald-700 font-bold">Custom Trip Request Form</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300">
            <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
        </div>
      )}

      {!submitted ? (
        <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit}>

            {/* STEP 1: SELECT PRIMARY REGION */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 01</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Your Primary Region</h3>
                  <p className="text-xs text-slate-500">Which state or circuit do you want to explore on this trip?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => {
                      setConfig({ 
                        ...config, 
                        destination: 'himachal',
                        selectedAreas: ['Manali & Solang Valley', 'Kasol & Parvati Valley']
                      });
                    }}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'himachal' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🏔️</span>
                    <h4 className="font-bold text-slate-900 text-base">Himachal Pradesh</h4>
                    <p className="text-xs text-slate-500 mt-1">Manali, Spiti Valley, Kasol, Shimla, Bir Billing, Chitkul.</p>
                  </div>

                  <div 
                    onClick={() => {
                      setConfig({ 
                        ...config, 
                        destination: 'uttarakhand',
                        selectedAreas: ['Rishikesh & Haridwar', 'Chopta & Tungnath Peak']
                      });
                    }}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'uttarakhand' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🌊</span>
                    <h4 className="font-bold text-slate-900 text-base">Uttarakhand</h4>
                    <p className="text-xs text-slate-500 mt-1">Rishikesh, Chopta, Auli, Valley of Flowers, Kedarnath.</p>
                  </div>

                  <div 
                    onClick={() => {
                      setConfig({ 
                        ...config, 
                        destination: 'both',
                        selectedAreas: ['Manali & Solang Valley', 'Rishikesh & Haridwar', 'Chopta & Tungnath Peak']
                      });
                    }}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${config.destination === 'both' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                  >
                    <span className="text-2xl mb-2 block">🏕️</span>
                    <h4 className="font-bold text-slate-900 text-base">Grand Combo (Both States)</h4>
                    <p className="text-xs text-slate-500 mt-1">Extended multi-week cross-state Himalayan road trip.</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT SPECIFIC SUB-REGIONS / AREAS */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 02</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Areas You Want to Visit</h3>
                  <p className="text-xs text-slate-500">Choose the specific valleys, circuits, or destinations you are interested in exploring (select all that apply).</p>
                </div>

                {/* HIMACHAL AREAS */}
                {(config.destination === 'himachal' || config.destination === 'both') && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 uppercase font-mono bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-300">
                        🏔️ Himachal Pradesh Circuits
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {HP_AREAS.map((area) => {
                        const isSelected = config.selectedAreas.includes(area.id);
                        return (
                          <div 
                            key={area.id}
                            onClick={() => toggleArea(area.id)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${isSelected ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                          >
                            <span className="text-2xl shrink-0 mt-0.5">{area.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-bold text-slate-900 text-sm">{area.name}</h4>
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'}`}>
                                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{area.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* UTTARAKHAND AREAS */}
                {(config.destination === 'uttarakhand' || config.destination === 'both') && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 uppercase font-mono bg-sky-100 text-sky-900 px-3 py-1 rounded-full border border-sky-300">
                        🌊 Uttarakhand Circuits
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {UK_AREAS.map((area) => {
                        const isSelected = config.selectedAreas.includes(area.id);
                        return (
                          <div 
                            key={area.id}
                            onClick={() => toggleArea(area.id)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${isSelected ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                          >
                            <span className="text-2xl shrink-0 mt-0.5">{area.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-bold text-slate-900 text-sm">{area.name}</h4>
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'}`}>
                                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{area.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: DATES & DURATION */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 03</span>
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
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1.5">Duration (Days)</label>
                    <select 
                      value={config.durationDays}
                      onChange={(e) => setConfig({ ...config, durationDays: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600 font-medium"
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

            {/* STEP 4: GROUP COMPOSITION & MEMBERS */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 04</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Who is Travelling?</h3>
                  <p className="text-xs text-slate-500">Select your group composition and total member count.</p>
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

                <div className="pt-2">
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-1.5">Total Number of Travelers / Members</label>
                  <input 
                    type="number"
                    min="1"
                    max="50"
                    value={config.groupMembersCount}
                    onChange={(e) => setConfig({ ...config, groupMembersCount: e.target.value })}
                    placeholder="e.g. 2, 4, 8 adults..."
                    className="w-full sm:w-1/2 bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                  />
                </div>
              </div>
            )}

            {/* STEP 5: BUDGET TIER */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 05</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Select Budget Tier</h3>
                  <p className="text-xs text-slate-500">Choose your preferred stay and comfort level.</p>
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

            {/* STEP 6: TRAVEL STYLE */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 06</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Travel Style & Vibes</h3>
                  <p className="text-xs text-slate-500">Select preferred experience styles.</p>
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
                      className={`p-3.5 rounded-xl border cursor-pointer text-xs font-bold text-center transition-all ${config.styles.includes(style) ? 'border-emerald-600 bg-emerald-50/70 text-emerald-800' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100/80'}`}
                    >
                      {style === 'backpacking' ? '🎒 Backpacking' : style === 'adventure' ? '🏕️ Adventure' : style === 'roadtrip' ? '🚗 Road Trip' : '🕉️ Spiritual'}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 7: ACTIVITIES & TRANSPORT */}
            {currentStep === 7 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 07</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Preferred Activities & Transport</h3>
                  <p className="text-xs text-slate-500">What activities and transit mode do you prefer?</p>
                </div>
                
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-2">Activities (Select Multiple)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

                <div className="pt-2">
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-2">Transit Mode</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div 
                      onClick={() => setConfig({ ...config, transport: 'taxi' })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${config.transport === 'taxi' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                    >
                      <h5 className="font-bold text-slate-900 text-xs">🚕 Private Taxi Cab</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Pahadi driver included.</p>
                    </div>
                    <div 
                      onClick={() => setConfig({ ...config, transport: 'self_car' })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${config.transport === 'self_car' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                    >
                      <h5 className="font-bold text-slate-900 text-xs">🚙 Self-Drive SUV</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Thar 4x4 or Scorpio N.</p>
                    </div>
                    <div 
                      onClick={() => setConfig({ ...config, transport: 'bike' })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${config.transport === 'bike' ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'}`}
                    >
                      <h5 className="font-bold text-slate-900 text-xs">🏍️ Motorbike Rental</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">RE Himalayan 450.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 8: USER CONTACT INFO */}
            {currentStep === 8 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <span className="text-xs text-emerald-700 font-mono font-bold uppercase tracking-wider">STEP 08</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Your Contact & Pickup Details</h3>
                  <p className="text-xs text-slate-500">Provide your contact details so our Pahadi travel expert can craft and send your customized itinerary directly to your WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-600" /> Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Vikram Singh"
                      value={config.userName}
                      onChange={(e) => setConfig({ ...config, userName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone / WhatsApp Number *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={config.userPhone}
                      onChange={(e) => setConfig({ ...config, userPhone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Pickup City / Location
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. Delhi NCR, Chandigarh, Dehradun..."
                      value={config.pickupCity}
                      onChange={(e) => setConfig({ ...config, pickupCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-emerald-600" /> Group Members
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. 2 Adults, 1 Child"
                      value={config.groupMembersCount}
                      onChange={(e) => setConfig({ ...config, groupMembersCount: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-700 mb-1.5">Special Notes or Requests (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. Prefer vegetarian food, need riverside stays, interested in igloo camping..."
                    value={config.specialNotes}
                    onChange={(e) => setConfig({ ...config, specialNotes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 p-3.5 rounded-xl text-slate-900 outline-none text-sm focus:border-emerald-600 resize-none"
                  ></textarea>
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
                  <button type="button" onClick={handleNext} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all">
                    Next Step &rarr;
                  </button>
                ) : (
                  <button type="submit" className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2">
                    Submit Request to Pahadi Admin ✨
                  </button>
                )}
              </div>
            </div>

          </form>
        </div>
      ) : (
        /* SUCCESS CONFIRMATION SCREEN */
        <div className="bg-white border border-emerald-200 p-8 sm:p-12 rounded-3xl shadow-xl space-y-8 animate-fade-in max-w-3xl mx-auto text-center">
          
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              TRIP REQUEST SUBMITTED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading uppercase">
              Thank You, {config.userName || 'Explorer'}!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-lg mx-auto leading-relaxed">
              Your trip details have been sent directly to our Pahadi Travel Experts. We are preparing a personalized day-by-day itinerary and custom price quote for you!
            </p>
          </div>

          {/* SUMMARY CARD OF SUBMITTED DETAILS */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-left space-y-3">
            <h4 className="font-bold text-slate-900 text-xs font-mono uppercase border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>📋 Your Trip Request Summary</span>
              <span className="text-emerald-700 font-bold">Status: Pending Admin Dispatch</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
              <p><strong>Primary State:</strong> {config.destination === 'himachal' ? 'Himachal Pradesh' : config.destination === 'uttarakhand' ? 'Uttarakhand' : 'Grand Combo (Both HP & UK)'}</p>
              <p><strong>Travel Date & Duration:</strong> {config.travelDate || 'Flexible'} ({config.durationDays} Days)</p>
              <p><strong>Selected Areas:</strong> {config.selectedAreas.length > 0 ? config.selectedAreas.join(', ') : 'All Sightseeing'}</p>
              <p><strong>Group Members:</strong> {config.groupMembersCount} Person(s) ({config.travelers})</p>
              <p><strong>Contact Phone:</strong> {config.userPhone || 'Not provided'}</p>
              <p><strong>Pickup City:</strong> {config.pickupCity || 'Delhi / Local'}</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono">
              <Clock className="w-4 h-4 text-emerald-600" /> WhatsApp Delivery Expected Shortly
            </div>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Our Pahadi expert will share your customized itinerary & best rate directly to your WhatsApp (<strong className="text-slate-900">{config.userPhone || 'your provided number'}</strong>).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button 
              onClick={sendToWhatsApp}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Open WhatsApp with Admin Now &rarr;
            </button>
            <button 
              onClick={() => setSubmitted(false)} 
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold rounded-xl border border-slate-300 transition-all"
            >
              Submit Another Trip Plan
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
