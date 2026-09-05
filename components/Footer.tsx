import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src="/assets/logo-dark-mode.png" alt="Pahadi Bagpackers Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              YOUR ADVENTURE, OUR EXPERTISE. Premier Himalayan trekking, self-drive rentals, outstation taxis, and authentic backpacker travel planning across Himachal Pradesh and Uttarakhand.
            </p>
            <div className="text-slate-300 space-y-1 font-mono text-[11px]">
              <p>📍 Old Manali Basecamp: Near Club House Road, Himachal Pradesh 175131</p>
              <p>📍 Rishikesh Basecamp: Tapovan High Bank, Uttarakhand 249192</p>
              <p>📞 Phone: +91 98160 12345 / +91 88942 67890</p>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">EXPLORE</h4>
            <ul className="space-y-2.5">
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors">Himachal Pradesh</Link></li>
              <li><Link href="/destinations" className="hover:text-emerald-400 transition-colors">Uttarakhand</Link></li>
              <li><Link href="/treks" className="hover:text-emerald-400 transition-colors">Alpine Treks & Passes</Link></li>
              <li><Link href="/bike-rental" className="hover:text-emerald-400 transition-colors">Scenic Road Trips</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Travel Stories & Guides</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">SERVICES</h4>
            <ul className="space-y-2.5">
              <li><Link href="/taxi" className="hover:text-emerald-400 transition-colors">Taxi & Transfers</Link></li>
              <li><Link href="/car-rental" className="hover:text-emerald-400 transition-colors">Car Rental (Self-Drive)</Link></li>
              <li><Link href="/bike-rental" className="hover:text-emerald-400 transition-colors">Bike Rental (Motorcycles)</Link></li>
              <li><Link href="/itinerary-planner" className="hover:text-emerald-400 transition-colors">Itinerary Planning</Link></li>
              <li><Link href="/treks" className="hover:text-emerald-400 transition-colors">Trek Planning & Guides</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">COMPANY</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
              <li><Link href="/booking" className="hover:text-emerald-400 transition-colors">Enquiry & Booking</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Pahadi Bagpackers Pvt. Ltd. All rights reserved.</p>
          <p>Crafted for Modern Himalayan Backpackers & Adventurers.</p>
        </div>
      </div>
    </footer>
  );
}
