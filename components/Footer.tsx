
import React from 'react';

interface FooterProps {
  setPage: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-white py-32 border-t border-slate-100">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
             <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setPage('home')}>
              <div className="w-8 h-8 bg-slate-950 flex items-center justify-center font-black text-white">A</div>
              <span className="text-sm font-black tracking-[0.3em] text-slate-950 uppercase">Abaliqa<span className="text-blue-600">.</span>Technologies</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Global Principal IT Advisory. Providing world-class infrastructure, defense, and cognitive engineering for sovereign entities and global industry leaders.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-950 mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><button onClick={() => setPage('about')} className="hover:text-blue-600 transition-colors">Our Approach</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Infrastructure Index</button></li>
              <li><button onClick={() => setPage('network')} className="hover:text-blue-600 transition-colors">Global Metrics</button></li>
              <li><button onClick={() => setPage('home')} className="hover:text-blue-600 transition-colors">AI Diagnostics</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-950 mb-8">Primary Solutions</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Digital Transformation</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Enterprise Architecture</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Sovereign Strategy</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">M&A Tech Diligence</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-950 mb-8">Defense & Intelligence</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Zero Trust Mesh</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Managed SOC 24/7</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Quantum Defense</button></li>
              <li><button onClick={() => setPage('cases')} className="hover:text-blue-600 transition-colors">Cognitive AI Labs</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
          <p>© 2024 Abaliqa Technologies Global Group. All rights reserved.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-slate-950 transition-colors">Legal Disclosure</a>
            <a href="#" className="hover:text-slate-950 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-slate-950 transition-colors">ESG Commitment</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
