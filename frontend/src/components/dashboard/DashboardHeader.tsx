import React from 'react';

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-16 relative z-10">
      <div className="flex items-center gap-4">
        <img src="/samsung-logo-blue.png" alt="Samsung" className="h-4 md:h-10 object-contain" />
        <div className="h-6 w-px bg-[#1428A0]/20 mx-0"></div>
        <span className="font-logo font-bold text-3xl md:text-3xl tracking-wide text-[#005800]">Zenith</span>
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" alt="Emily Park" />
          </div>
          <span className="font-semibold text-sm">Emily Park</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      
      <div className="hidden md:flex gap-3">
        <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Aura</button>
        <button className="karma-pill hover:bg-white transition text-black">Metrics</button>
        <button className="karma-pill hover:bg-white transition text-black">Coach</button>
      </div>
    </header>
  );
}
