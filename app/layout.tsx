import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pahadi Bagpackers | Himalayan Trekking, Travel & Backpacking Adventures',
  description: 'Discover Himachal Pradesh and Uttarakhand through alpine treks, road trips, vehicle rentals, and custom backpacker itineraries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F8FAF9] text-slate-900 antialiased selection:bg-emerald-600 selection:text-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
