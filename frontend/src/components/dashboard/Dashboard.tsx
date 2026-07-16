import React from 'react';
import DashboardHeader from './DashboardHeader';
import ScoreSection from './ScoreSection';
import GaugeChart from './GaugeChart';
import MetricsGrid from './MetricsGrid';
import AICoachSection from './AICoachSection';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#000000] font-sans selection:bg-[#D1F843] selection:text-black">
      <section className="bg-[#41D58C] rounded-b-[3rem] px-8 py-10 md:px-16 md:py-12 relative overflow-hidden">
        <DashboardHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <ScoreSection />
          <GaugeChart />
          <MetricsGrid />
        </div>
      </section>
      <AICoachSection />
    </main>
  );
}
