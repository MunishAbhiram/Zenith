import React from 'react';

export default function MetricsGrid() {
  return (
    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
      
      <div className="karma-card col-span-2 md:col-span-1">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <span className="text-xl">👟</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-6">Daily Steps</h3>
        <div className="flex justify-between items-end">
          <div className="text-3xl font-display font-bold">6,450</div>
          <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Good</div>
        </div>
      </div>

      <div className="karma-card col-span-2 md:col-span-1">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <span className="text-xl">🌙</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-6">Sleep</h3>
        <div className="flex justify-between items-end">
          <div className="text-3xl font-display font-bold">7.1<span className="text-lg">h</span></div>
          <div className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Avg</div>
        </div>
      </div>

      <div className="karma-card col-span-2">
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-xl">❤️</span>
          </div>
          <div className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">High Impact</div>
        </div>
        <h3 className="font-bold text-gray-800 mb-2">Peak Stress Score</h3>
        <p className="text-sm text-gray-500 mb-6">Tuesday recorded highest levels.</p>
        <div className="text-4xl font-display font-bold text-red-500">78</div>
      </div>

    </div>
  );
}
