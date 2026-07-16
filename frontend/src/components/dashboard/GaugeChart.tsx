import React from 'react';

export default function GaugeChart() {
  return (
    <div className="lg:col-span-4 flex items-center justify-center relative min-h-[300px]">
       <div className="relative w-64 h-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[40px] border-black/10 border-b-transparent border-r-transparent transform -rotate-45"></div>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[40px] border-[#005840] border-b-transparent border-r-transparent transform rotate-[45deg] transition-all duration-1000 ease-out"></div>
          
          <div className="absolute bottom-0 left-1/2 w-4 h-24 bg-black origin-bottom transform -translate-x-1/2 rotate-[35deg] rounded-t-full shadow-md z-10"></div>
          <div className="absolute bottom-[-8px] left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 z-20"></div>
       </div>
       
       <svg className="absolute -bottom-10 -right-10 w-96 h-96 opacity-20 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#ffffff" strokeWidth="8" d="M 0,100 C 50,150 150,50 200,100" />
       </svg>
    </div>
  );
}
