"use client"
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('Emily Park');
  const [password, setPassword] = useState('••••••••');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftBannerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(leftBannerRef.current, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    tl.fromTo('.gsap-reveal', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
      "-=0.6" 
    );
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        router.push('/dashboard');
      }
    });

    tl.to([leftBannerRef.current, rightContentRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0.1
    }, 0);

    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.8,
      ease: 'expo.inOut'
    }, 0.2);

    tl.fromTo(text1Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.6);
    tl.to(text1Ref.current, { y: -30, opacity: 0, duration: 0.4, ease: 'power2.in' }, "+=0.6");

    tl.fromTo(text2Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, "-=0.1");
    tl.to(text2Ref.current, { y: -30, opacity: 0, duration: 0.4, ease: 'power2.in' }, "+=0.6");

    tl.fromTo(text3Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, "-=0.1");
    tl.to(text3Ref.current, { y: -30, opacity: 0, duration: 0.4, ease: 'power2.in' }, "+=0.5");
    
  };

  return (
    <main ref={containerRef} className="h-screen bg-[#F2F1EC] p-3 flex flex-col md:flex-row gap-3 relative overflow-hidden font-sans box-border">
      
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#005840] z-50 flex items-center justify-center origin-bottom"
        style={{ transform: 'scaleY(0)' }}
      >
        <div className="relative flex items-center justify-center w-full h-full text-center">
          <h1 ref={text1Ref} className="absolute text-white text-5xl md:text-7xl font-display font-bold opacity-0 whitespace-nowrap">
            Welcome, {username.split(' ')[0]}.
          </h1>
          <h1 ref={text2Ref} className="absolute text-[#D1F843] text-4xl md:text-6xl font-display font-bold opacity-0 whitespace-nowrap">
            Energy Score: <span className="text-white">87</span>
          </h1>
          <h1 ref={text3Ref} className="absolute text-white text-3xl md:text-5xl font-display font-bold opacity-0 whitespace-nowrap">
            Syncing predictive protocols...
          </h1>
        </div>
      </div>
      <div 
        ref={leftBannerRef}
        className="w-full md:w-1/2 h-full bg-[#005840] rounded-[2rem] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden hidden md:flex shadow-2xl shadow-[#005840]/20 z-10"
      >
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-[#D1F843] blur-[140px] rounded-full opacity-40 mix-blend-overlay"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500 blur-[120px] rounded-full opacity-30 mix-blend-overlay"></div>
        
        <div className="flex items-center z-10">
          <img src="/samsung-logo-blue.png" alt="Samsung" className="h-6 md:h-8 object-contain brightness-0 invert" />
          <div className="h-8 w-px bg-white/20 mx-5 md:mx-6"></div>
          <span className="font-logo font-bold text-3xl md:text-4xl tracking-normal text-white mt-1">Zenith🍃</span>
        </div>
        
        <div className="relative z-10 mt-auto pt-24">
          <p className="font-sans text-white/80 font-bold mb-4 uppercase tracking-widest text-sm">Zenith Clinical Hub</p>
          <h2 className="text-white text-4xl lg:text-[3.25rem] font-bold font-display leading-[1.05] tracking-tight max-w-xl">
            Access your physiological metrics and predictive protocols.
          </h2>
        </div>
      </div>

      <div ref={rightContentRef} className="w-full md:w-1/2 h-full flex flex-col justify-center z-10 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="w-full max-w-[480px] mx-auto">
          <div className="gsap-reveal text-[#005840] text-5xl font-display font-bold leading-none mb-8">*</div>
          <h1 className="gsap-reveal text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4 tracking-tight">Sign in to Zenith</h1>
          <p className="gsap-reveal font-sans text-gray-500 mb-10 text-base font-medium leading-relaxed max-w-md">
            Access your tasks, clinical notes, and health insights anytime, anywhere - and keep everything flowing in one place.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="gsap-reveal">
              <label className="block font-sans text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Patient ID</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full font-sans bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#005840]/20 focus:border-[#005840] transition-all font-semibold shadow-sm text-lg"
                required
              />
            </div>

            <div className="gsap-reveal">
              <label className="block font-sans text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Passkey</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full font-sans bg-white border border-gray-200 text-gray-900 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#005840]/20 focus:border-[#005840] transition-all font-semibold tracking-widest shadow-sm text-lg"
                  required
                />
                <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="gsap-reveal w-full font-sans bg-[#005840] text-white font-bold text-lg rounded-2xl py-5 mt-4 hover:bg-[#004834] transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-[#005840]/30"
            >
              {isAuthenticating ? 'Authenticating...' : 'Access Dashboard'}
            </button>

            <div className="gsap-reveal flex items-center my-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 font-sans text-xs text-gray-400 font-bold uppercase tracking-wider">or authenticate via</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="gsap-reveal flex gap-4">
              <button type="button" className="flex-1 py-4 bg-white rounded-2xl border border-gray-200 font-sans font-bold text-base text-gray-700 hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-3">
                <span className="text-[#1428A0] font-black text-lg">S</span> Health
              </button>
              <button type="button" className="flex-1 py-4 bg-white rounded-2xl border border-gray-200 font-sans font-bold text-base text-gray-700 hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-3">
                <span className="text-gray-900 font-black text-lg">G</span> Ring
              </button>
            </div>
            
            <p className="gsap-reveal font-sans text-sm font-medium text-gray-500 mt-8 text-center">
              Don't have a profile? <a href="#" className="text-[#005840] hover:underline font-bold">Contact Admin</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
