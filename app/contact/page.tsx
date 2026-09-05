'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">GET IN TOUCH WITH PAHADI TEAM</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">LET'S PLAN YOUR ADVENTURE</h1>
        <p className="text-slate-400 text-base max-w-2xl mx-auto mt-3">
          Reach out directly to our Old Manali & Rishikesh basecamp travel teams for quick trip quotes, trek bookings, or vehicle inquiries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FORM */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 uppercase font-heading">Send Us an Enquiry</h3>
          {submitted ? (
            <div className="bg-emerald-950/70 border border-emerald-500/50 p-6 rounded-2xl text-emerald-100 text-center">
              <h4 className="font-bold text-lg mb-2">Enquiry Sent Successfully!</h4>
              <p className="text-xs text-slate-300">Our Pahadi coordinator will call/WhatsApp you within 30 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Your Full Name *</label>
                  <input type="text" required placeholder="e.g. Rahul Sharma" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
                <div>
                  <label className="block text-slate-400 uppercase font-bold mb-1">Phone Number (WhatsApp) *</label>
                  <input type="tel" required placeholder="+91 98160 XXXXX" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 uppercase font-bold mb-1">Trip Details & Message</label>
                <textarea rows={4} placeholder="Tell us about your dates, number of travelers, and destination preferences..." className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white outline-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg">
                Send Trip Enquiry &rarr;
              </button>
            </form>
          )}
        </div>

        {/* BASECAMPS */}
        <div className="space-y-6 text-xs">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h4 className="font-bold text-white text-lg mb-4">Direct Contact Shortcuts</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919816012345" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2">
                💬 WhatsApp Us Instant
              </a>
              <a href="tel:+919816012345" className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-2">
                📞 Call +91 98160 12345
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
            <span className="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 font-bold">HIMACHAL BASECAMP</span>
            <h4 className="font-bold text-white text-base">Old Manali Basecamp</h4>
            <p className="text-slate-400">Near Club House Road, Old Manali, Himachal Pradesh 175131</p>
            <p className="text-slate-300">📞 Phone: +91 98160 12345 / +91 88942 67890</p>
            <p className="text-slate-300">✉️ Email: manali@pahadibagpackers.com</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
            <span className="text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 font-bold">UTTARAKHAND BASECAMP</span>
            <h4 className="font-bold text-white text-base">Rishikesh Basecamp</h4>
            <p className="text-slate-400">Tapovan High Bank, Badrinath Road, Rishikesh, Uttarakhand 249192</p>
            <p className="text-slate-300">📞 Phone: +91 98160 54321</p>
            <p className="text-slate-300">✉️ Email: rishikesh@pahadibagpackers.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
