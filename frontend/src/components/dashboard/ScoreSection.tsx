import React from 'react';

export default function ScoreSection() {
  return (
    <div className="lg:col-span-4 flex flex-col justify-center">
      <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
        Zenith<br/>Dashboard
      </h1>
      <div className="mb-2 text-sm font-bold opacity-80">+15 pts</div>
      <div className="font-display text-8xl md:text-9xl font-black tracking-tighter leading-none mb-4">
        85
      </div>
      <div className="font-medium text-sm max-w-[200px] opacity-90">
        Excellent. Checked Daily via Galaxy Watch.
      </div>
      
      <div className="mt-12 bg-white rounded-3xl p-6 inline-block w-max shadow-lg">
        <div className="text-gray-500 font-semibold text-sm mb-1">Weekly Goal</div>
        <div className="font-display text-3xl font-bold flex items-center gap-2">
          100 <span className="text-sm font-medium text-gray-400 mt-1">/100</span>
        </div>
      </div>
    </div>
  );
}
