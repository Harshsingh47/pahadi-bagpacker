import React from 'react';
import TaxiCalculator from '@/components/TaxiCalculator';

export default function TaxiPage() {
  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">HIMALAYAN TRANSIT SERVICES</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">TAXI & TRANSFERS</h1>
        <p className="text-slate-400 text-base max-w-2xl mx-auto mt-3 mb-12">
          Reliable private cabs, airport transfers, and group Tempo Travellers with experienced Pahadi drivers.
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <TaxiCalculator />
        </div>
      </div>
    </div>
  );
}
