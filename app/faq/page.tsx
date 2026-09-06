import React from 'react';
import FAQAccordion from '@/components/FAQAccordion';

export default function FAQPage() {
  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">GOT QUESTIONS? WE HAVE ANSWERS</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto mt-3">
          Everything you need to know about Himalayan trekking safety, vehicle rentals, taxi fares, permits, and cancellation policies.
        </p>
      </div>

      <FAQAccordion />
    </div>
  );
}
