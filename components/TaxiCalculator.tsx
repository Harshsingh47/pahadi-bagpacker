'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface RouteData {
  distance: number;
  sedan: number;
  suv: number;
  tempo: number;
}

export default function TaxiCalculator() {
  const [routeKey, setRouteKey] = useState('delhi-manali');
  const [vehicleType, setVehicleType] = useState('suv');
  const [result, setResult] = useState<{ price: number; distance: number } | null>(null);

  const routes: Record<string, RouteData> = {
    'delhi-manali': { distance: 530, sedan: 9500, suv: 14500, tempo: 22000 },
    'chandigarh-shimla': { distance: 112, sedan: 3200, suv: 4800, tempo: 7500 },
    'delhi-rishikesh': { distance: 240, sedan: 4200, suv: 6500, tempo: 9800 },
    'dehradun-mussoorie': { distance: 35, sedan: 1800, suv: 2800, tempo: 4200 },
    'delhi-dharamshala': { distance: 480, sedan: 8800, suv: 13500, tempo: 19500 },
    'manali-leh': { distance: 428, sedan: 0, suv: 22000, tempo: 34000 },
    'manali-spiti': { distance: 200, sedan: 0, suv: 16000, tempo: 26000 }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const data = routes[routeKey] || { distance: 350, sedan: 6500, suv: 9800, tempo: 15500 };
    const price = data[vehicleType as keyof RouteData] || data.suv;
    setResult({ price, distance: data.distance });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 text-left shadow-xl">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Instant Mountain Taxi Fare Estimator</h3>
      <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-slate-500 uppercase font-bold mb-1.5">Select Route</label>
          <select 
            value={routeKey}
            onChange={(e) => setRouteKey(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-slate-900 text-xs outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="delhi-manali">Delhi → Manali (530 km)</option>
            <option value="chandigarh-shimla">Chandigarh → Shimla (112 km)</option>
            <option value="delhi-rishikesh">Delhi → Rishikesh (240 km)</option>
            <option value="dehradun-mussoorie">Dehradun → Mussoorie (35 km)</option>
            <option value="delhi-dharamshala">Delhi → Dharamshala (480 km)</option>
            <option value="manali-leh">Manali → Leh Overland (428 km)</option>
            <option value="manali-spiti">Manali → Spiti Circuit (200 km)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-500 uppercase font-bold mb-1.5">Vehicle Category</label>
          <select 
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-slate-900 text-xs outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="sedan">Sedan (Dzire / Etios - 4 Seats)</option>
            <option value="suv">SUV (Innova / Ertiga / Thar - 6-7 Seats)</option>
            <option value="tempo">Tempo Traveller (12-17 Seats)</option>
          </select>
        </div>

        <div className="flex items-end">
          <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md">
            Calculate Fare
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6">
          {result.price === 0 ? (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm">
              ⚠️ <strong>Route Note:</strong> Sedan is not recommended for rugged Leh/Spiti routes. Please select SUV (Thar / Scorpio) or Tempo Traveller.
            </div>
          ) : (
            <div className="bg-emerald-50/80 border border-emerald-200 p-5 rounded-2xl text-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-emerald-800 font-bold">Estimated One-Way Fare</span>
                <div className="text-3xl font-extrabold text-emerald-700 mt-1">₹{result.price.toLocaleString()}</div>
                <p className="text-xs text-slate-600 mt-1">Includes Toll Tax, Driver Charges, Fuel & State Taxes. No hidden fees.</p>
              </div>
              <Link href={`/booking?service=taxi&route=${routeKey}&vehicle=${vehicleType}`} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all text-xs uppercase tracking-wider shrink-0">
                Book This Ride &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
