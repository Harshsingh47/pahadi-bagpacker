import React from 'react';
import Link from 'next/link';

export default function DestinationsPage() {
  const destinations = [
    { slug: 'manali', name: 'Manali', state: 'Himachal', desc: 'Solang Valley, Old Manali, Rohtang Pass, Jogini Falls.', time: 'Mar - Jun / Oct - Feb', stay: '3 - 5 Days', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80' },
    { slug: 'spiti-valley', name: 'Spiti Valley', state: 'Himachal', desc: 'Kaza, Key Monastery, Chandratal, Hikkim, Langza.', time: 'May - Oct', stay: '6 - 9 Days', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80' },
    { slug: 'kasol', name: 'Kasol & Parvati', state: 'Himachal', desc: 'Tosh, Chalal, Grahan, Kheerganga hot springs.', time: 'All Year Round', stay: '3 - 5 Days', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80' },
    { slug: 'rishikesh', name: 'Rishikesh', state: 'Uttarakhand', desc: 'Laxman Jhula, Rafting, Triveni Ghat, Beatles Ashram.', time: 'Sep - May', stay: '2 - 4 Days', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
    { slug: 'chopta', name: 'Chopta & Tungnath', state: 'Uttarakhand', desc: 'Deoriatal, Tungnath Temple, Chandrashila Summit.', time: 'Mar - Jun / Oct - Dec', stay: '3 - 4 Days', img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80' },
    { slug: 'bir-billing', name: 'Bir Billing', state: 'Himachal', desc: 'Paragliding take-off site, Chokling Monastery, Tea gardens.', time: 'Oct - Dec / Mar - Jun', stay: '2 - 3 Days', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="pt-36 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold">DISCOVER THE HIMALAYAS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 uppercase font-heading">DESTINATIONS DIRECTORY</h1>
          <p className="text-slate-400 text-base mt-3">
            Explore serene valleys, alpine high passes, and sacred rivers across Himachal Pradesh and Uttarakhand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <div key={d.slug} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-52">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-mono rounded-lg border ${d.state === 'Himachal' ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-amber-950 text-amber-300 border-amber-800'}`}>
                  {d.state}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{d.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{d.desc}</p>
                  <div className="space-y-1 text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p>🗓️ <strong>Best Time:</strong> {d.time}</p>
                    <p>⏱️ <strong>Ideal Stay:</strong> {d.stay}</p>
                  </div>
                </div>
                <Link href={`/destinations/${d.slug}`} className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400 hover:text-white">
                  <span>Explore {d.name} Details</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
