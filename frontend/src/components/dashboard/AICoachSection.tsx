import React from 'react';

export default function AICoachSection() {
  return (
    <section className="px-8 py-16 md:px-16 text-white max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-display text-4xl font-bold">Aura AI Coach</h2>
        <span className="text-gray-400 font-semibold cursor-pointer hover:text-white transition">View All Data →</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-gray-800 hover:border-[#D1F843] transition-colors group">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6 group-hover:bg-[#D1F843] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="font-display text-2xl font-bold mb-4">Circadian Sync</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your heart rate peaked on Tuesday because sleep was only 5.5h. Engage wind-down mode 30 mins earlier tonight.
          </p>
        </div>

        <div className="bg-[#D1F843] rounded-[2rem] p-8 text-black flex flex-col justify-between transform hover:-translate-y-2 transition-transform">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold">Habit Stack</h3>
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Quest</span>
            </div>
            <p className="font-medium text-sm leading-relaxed mb-6">
              You sit for 3 hours straight after lunch. Stack a 5-minute walk immediately after your 2 PM coffee to lower afternoon stress.
            </p>
          </div>
          <button className="bg-black text-white w-full py-4 rounded-xl font-bold hover:bg-opacity-80 transition">
            Accept Quest
          </button>
        </div>

        <div className="bg-[#005840] rounded-[2rem] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold mb-4">Verified Baseline</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              WHO guidelines suggest 150 active minutes. You are currently at 112 mins. A 40-minute walk this weekend hits your goal.
            </p>
          </div>
          <svg className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
