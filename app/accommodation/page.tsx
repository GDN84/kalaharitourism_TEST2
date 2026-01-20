import React from "react";
import { MapPin, Zap, ArrowRight, Home, Bed, Info, Star } from 'lucide-react';

/**
 * PREVIEW NOTE:
 * These Mock components simulate your actual components (Header, Hero, etc.)
 * so you can see the layout fix in this preview. 
 * * THE FIX:
 * 1. Changed Announcement Bar to 'relative' so it pushes the Header down.
 * 2. Ensured Header 'sticky' works correctly below the bar.
 */

const MockHeader = () => (
  <header className="bg-white border-b border-gray-100 p-4 sticky top-0 z-40 shadow-sm">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">
          <MapPin size={18} />
        </div>
        <span className="font-bold text-gray-900 tracking-tight uppercase text-sm">Orange River Kalahari</span>
      </div>
      
      {/* Navigation Buttons - Now guaranteed visible */}
      <nav className="flex gap-4 md:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <a href="#" className="text-orange-600 border-b-2 border-orange-600 pb-1">Accommodation</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Restaurants</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Experiences</a>
      </nav>
    </div>
  </header>
);

const MockHero = () => (
  <section className="bg-stone-50 py-16 px-6 text-center border-b border-gray-200">
    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 tracking-tight">Stay Along the Orange River</h1>
    <p className="text-gray-600 max-w-2xl mx-auto italic font-light">Discover the finest guest houses and lodges in the Green Kalahari region.</p>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* ANNOUNCEMENT BAR 
          Positioned 'relative' so it naturally sits above the Header 
          without covering the navigation links.
      */}
      <div style={{
        background: '#EA580C',
        color: 'white',
        textAlign: 'center',
        padding: '10px 15px',
        fontWeight: '700',
        position: 'relative', 
        zIndex: '50',
        fontFamily: 'sans-serif',
        fontSize: '13px',
        lineHeight: '1.4',
        letterSpacing: '0.3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <Zap size={14} fill="currentColor" />
        <span>FOUNDING PARTNER SPECIAL: 90 Days Free Exposure!</span>
      </div>

      {/* The Header now sits perfectly below the announcement bar */}
      <MockHeader />
      
      <MockHero />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-2xl md:text-3xl font-serif text-gray-800 font-light tracking-wide mb-8">
             Find Your Perfect Stay
           </h2>
           <div className="bg-stone-50 rounded-3xl p-16 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400">
             <Bed size={48} className="mb-4 opacity-20" />
             <p className="font-medium">Property Search & Featured Listings Section</p>
           </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-6 mt-12 text-center">
        <p className="text-gray-400 text-sm">© 2026 Orange River Kalahari Tourism</p>
      </footer>
    </div>
  )
}
