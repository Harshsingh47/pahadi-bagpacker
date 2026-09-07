'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-36 pb-24 bg-[#F8FAF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-emerald-700 font-semibold">GET IN TOUCH WITH PAHADI TEAM</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-2 uppercase font-heading">LET'S PLAN YOUR ADVENTURE</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto mt-3">
          Reach out directly to our Old Manali & Rishikesh basecamp travel teams for quick trip quotes, trek bookings, or vehicle inquiries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FORM */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase font-heading">Send Us an Enquiry</h3>
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-500/50 p-6 rounded-2xl text-emerald-900 text-center">
              <h4 className="font-bold text-lg mb-2 text-emerald-900">Enquiry Sent Successfully!</h4>
              <p className="text-xs text-slate-700">Our Pahadi coordinator will call/WhatsApp you within 30 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1">Your Full Name *</label>
                  <input type="text" required placeholder="e.g. Rahul Sharma" className="w-full bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-slate-900 outline-none" />
                </div>
                <div>
                  <label className="block text-slate-500 uppercase font-bold mb-1">Phone Number (WhatsApp) *</label>
                  <input type="tel" required placeholder="+91 98160 XXXXX" className="w-full bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-slate-900 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-slate-500 uppercase font-bold mb-1">Trip Details & Message</label>
                <textarea rows={4} placeholder="Tell us about your dates, number of travelers, and destination preferences..." className="w-full bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-slate-900 outline-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg">
                Send Trip Enquiry &rarr;
              </button>
            </form>
          )}
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="space-y-6 text-xs">
          <div className="bg-white border border-slate-200/80 p-6 rounded-2xl">
            <h4 className="font-bold text-slate-900 text-lg mb-4">Direct Contact Shortcuts</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/917018800958" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow">
                💬 WhatsApp Us Instant
              </a>
              <a href="tel:+917018800958" className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl flex items-center gap-2">
                📞 Call +91 70188 00958
              </a>
              <a href="tel:01792359853" className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl flex items-center gap-2">
                ☎️ Off.: 01792-359853
              </a>
            </div>
          </div>

          <div className="bg-white border border-emerald-500/30 p-6 rounded-2xl space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">REGISTERED HEAD OFFICE</span>
              <span className="text-[11px] font-mono text-emerald-700 font-bold">Regd. No.: 241224/48355</span>
            </div>
            <h4 className="font-bold text-slate-900 text-base">Pahadi Bagpackers Head Office</h4>
            <p className="text-slate-600 font-medium">233 Bhaktora Colony, Hospital Road, Solan, Distt. Solan (HP) - 173212</p>
            <div className="pt-2 text-slate-700 space-y-1 font-medium">
              <p>📱 <strong>Mobile / WhatsApp:</strong> +91 70188 00958</p>
              <p>☎️ <strong>Office Landline:</strong> 01792-359853</p>
              <p>✉️ <strong>Email:</strong> pahadibagpackers77@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold uppercase">Himachal Basecamp</span>
              <h5 className="font-bold text-slate-900 text-sm">Old Manali Basecamp</h5>
              <p className="text-slate-500 text-[11px]">Near Club House Road, Old Manali, HP 175131</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold uppercase">Uttarakhand Basecamp</span>
              <h5 className="font-bold text-slate-900 text-sm">Rishikesh Basecamp</h5>
              <p className="text-slate-500 text-[11px]">Tapovan High Bank, Rishikesh, UK 249192</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
