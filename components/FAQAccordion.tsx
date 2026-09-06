'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState<string | null>('q1');

  const faqs: FAQItem[] = [
    {
      id: 'q1',
      category: 'treks',
      question: 'What fitness level is required for beginner Himalayan treks like Hampta Pass or Kedarkantha?',
      answer: 'For beginner treks like Kedarkantha or Beas Kund, basic physical fitness is required (ability to jog 3-4 km in 30 minutes). For Hampta Pass, since it crosses 14,000 feet, we recommend starting cardio exercises 2-3 weeks prior to your trek.'
    },
    {
      id: 'q2',
      category: 'rentals',
      question: 'What documents are needed to rent a self-drive car or bike in Manali/Rishikesh?',
      answer: 'You need a valid Original Indian Driving License (or International Driving Permit for foreign nationals), Aadhaar Card or Passport for ID verification, and a refundable security deposit (₹5,000 for bikes, ₹10,000 for Thar 4x4).'
    },
    {
      id: 'q3',
      category: 'taxi',
      question: 'Are toll taxes, driver charges, and state taxes included in your taxi quotes?',
      answer: 'Yes! All cab fare estimates generated on our website include fuel, toll tax, state entry permit taxes, and driver night charges. There are zero surprise surcharges.'
    },
    {
      id: 'q4',
      category: 'payments',
      question: 'What is your cancellation and booking deposit policy?',
      answer: 'We accept a 25% advance to confirm your trek, rental, or cab booking. Cancellations made 15 days prior receive a 100% refund or travel voucher valid for 1 year.'
    }
  ];

  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div>
      {/* CATEGORY BUTTONS */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${activeCategory === 'all' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>All FAQs</button>
        <button onClick={() => setActiveCategory('treks')} className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === 'treks' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>Trekking & Safety</button>
        <button onClick={() => setActiveCategory('rentals')} className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === 'rentals' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>Car & Bike Rental</button>
        <button onClick={() => setActiveCategory('taxi')} className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === 'taxi' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>Taxi & Transfers</button>
        <button onClick={() => setActiveCategory('payments')} className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === 'payments' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>Payments & Refund</button>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-slate-300">
              <button 
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full p-5 text-left font-bold text-slate-900 text-base flex items-center justify-between hover:text-emerald-700 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="p-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60 animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
