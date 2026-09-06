import React from 'react';
import ItineraryPlanner from '@/components/ItineraryPlanner';

export default function ItineraryPlannerPage() {
  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">SMART HIMALAYAN TRIP BUILDER</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading">PLAN YOUR TRIP</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto mt-3">
          Tell us what you want from your trip and build a customized journey around your time, budget and interests.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <ItineraryPlanner />
      </div>
    </div>
  );
}
