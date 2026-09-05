'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">HIMALAYAN RESERVATION WIZARD</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">BOOK YOUR ADVENTURE</h1>
        <p className="text-slate-400 text-base max-w-2xl mx-auto mt-3">
          Fill out your trip details below to receive instant confirmation and direct local Pahadi coordinator support.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {!submitted ? (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="e.g. Vikramaditya Singh" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Phone / WhatsApp *</label>
                  <input type="tel" required placeholder="+91 98160 XXXXX" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Select Service</label>
                  <select className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none">
                    <option value="trek">Alpine Trek Expedition</option>
                    <option value="taxi">Taxi & Airport Transfer</option>
                    <option value="car">Self-Drive Car Rental</option>
                    <option value="bike">Motorbike Rental</option>
                    <option value="custom">Custom Itinerary Tour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Travel Date</label>
                  <input type="date" required className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1.5">Number of Travelers</label>
                  <input type="number" defaultValue={2} min={1} max={25} className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1.5">Additional Notes or Special Requirements</label>
                <textarea rows={3} placeholder="Mention any gear rental needs, pick-up points or dietary preferences..." className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider text-sm rounded-xl shadow-xl">
                Submit Booking Enquiry &rarr;
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-slate-900 border border-emerald-500/50 p-10 rounded-3xl text-center space-y-6 animate-fade-in shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl font-bold flex items-center justify-center mx-auto border border-emerald-500">
              ✓
            </div>
            <h2 className="text-3xl font-extrabold text-white uppercase font-heading">ENQUIRY SUBMITTED SUCCESSFULLY!</h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Thank you for choosing Pahadi Bagpackers. Your reference ID is <strong className="text-emerald-400 font-mono">#PB-2026-8942</strong>. Our local basecamp coordinator will call/WhatsApp you shortly with your customized invoice.
            </p>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-4">
              <Link href="/" className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold text-xs uppercase rounded-xl">Back to Home</Link>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 text-white font-bold text-xs uppercase rounded-xl">Contact Basecamp</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
