
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 min-h-[95vh] flex flex-col justify-center overflow-hidden bg-white">
      
      {/* Refined Technical Visualization - "In place of this" */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-[40vw] h-[70vh] -z-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 400 400" className="w-full h-full text-blue-600/10">
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
          
          {/* Fluid Technical Shapes */}
          <path 
            d="M 50 100 Q 150 50 250 100 T 350 150" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="animate-[pathMove_8s_ease-in-out_infinite]"
          />
          <path 
            d="M 20 250 Q 120 200 220 250 T 380 300" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="animate-[pathMove_12s_ease-in-out_infinite_reverse]"
          />
          
          {/* Abstract Nodes */}
          <circle cx="150" cy="50" r="3" className="fill-blue-600/20 animate-pulse" />
          <circle cx="250" cy="100" r="2" className="fill-blue-600/10 animate-pulse delay-700" />
          <circle cx="350" cy="150" r="4" className="fill-blue-600/30 animate-pulse delay-1000" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Subtitle with adjusted tracking */}
          <div className="flex items-center space-x-8 mb-20 md:mb-28">
            <div className="h-[2px] w-20 bg-blue-600"></div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-slate-400">
              Principal IT Advisory & Sovereign Engineering
            </span>
          </div>

          {/* Main Title - Matches screenshot typography precisely */}
          <div className="mb-24 md:mb-32">
            <h1 className="text-7xl sm:text-8xl md:text-[11rem] font-serif font-bold italic text-slate-950 leading-[0.85] tracking-[-0.04em]">
              Scale <br className="md:hidden" />
              without <br />
              <span className="text-blue-600 inline-flex items-center">
                compromise
                <span className="inline-block w-4 h-4 rounded-full bg-slate-100 ml-6 translate-y-2"></span>
              </span>
              <span className="text-slate-200">.</span>
            </h1>
          </div>

          {/* Bottom Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-40 items-end pt-20 border-t border-slate-50">
            <div className="max-w-lg">
              <p className="text-2xl md:text-3xl text-slate-400 leading-relaxed font-light italic">
                Architecting the digital foundations for the world's most resilient industry leaders. A-Z technical mastery from the physical layer to autonomous AI.
              </p>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="text-left md:text-right">
                <div className="flex flex-col">
                  <span className="block text-6xl md:text-8xl font-light text-slate-950 tracking-tighter mb-4">14.2B+</span>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                      Secured Hourly
                    </span>
                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                      Transactions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pathMove {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
