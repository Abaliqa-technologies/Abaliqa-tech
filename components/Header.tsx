
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Globe, Lock, Cloud, Menu, X, ArrowRight
} from 'lucide-react';

interface HeaderProps {
  setPage: (page: 'home' | 'cases' | 'network' | 'about') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const serviceCategories = [
    {
      title: "Strategic Advisory",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      links: [
        { name: "A-Z Transformation", desc: "End-to-end digital evolution" },
        { name: "Technical Audit", desc: "M&A due diligence" },
        { name: "Governance", desc: "Sovereign compliance" }
      ]
    },
    {
      title: "Defense Labs",
      icon: <Lock className="w-5 h-5 text-slate-900" />,
      links: [
        { name: "Zero Trust", desc: "Identity-centric security" },
        { name: "Managed SOC", desc: "24/7 Threat mitigation" },
        { name: "Quantum-Safe", desc: "Next-gen encryption" }
      ]
    },
    {
      title: "Global Systems",
      icon: <Cloud className="w-5 h-5 text-blue-500" />,
      links: [
        { name: "Cloud Fabric", desc: "Multi-region AWS/Azure" },
        { name: "Edge Mesh", desc: "Low-latency compute" },
        { name: "Dark Fiber", desc: "Private backbone connectivity" }
      ]
    }
  ];

  const handlePageTransition = (page: 'home' | 'cases' | 'network' | 'about') => {
    setPage(page);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Page Dimming Overlay for Mega Menu */}
      <div 
        className={`fixed inset-0 bg-slate-950/20 backdrop-blur-[2px] z-[105] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isMegaMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled || isMobileMenuOpen || isMegaMenuOpen
            ? 'py-4 md:py-6 bg-white border-b border-slate-100 shadow-sm' 
            : 'py-10 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo */}
            <div 
              className="flex items-center space-x-3 shrink-0 cursor-pointer group"
              onClick={() => handlePageTransition('home')}
            >
              <div className="w-9 h-9 bg-slate-950 flex items-center justify-center font-black text-white text-xl transition-all group-hover:bg-blue-600">A</div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-black tracking-[0.4em] text-slate-950 uppercase leading-none">
                  Abaliqa<span className="text-blue-600">.</span>
                </span>
                <span className="text-[7px] md:text-[8px] font-bold tracking-[0.45em] text-slate-400 uppercase mt-1">Technologies</span>
              </div>
            </div>
            
            {/* Main Navigation - Breakpoint xl (1280px) */}
            <nav className="hidden xl:flex items-center space-x-14 text-[10px] font-black uppercase tracking-[0.4em]">
              <button 
                onClick={() => handlePageTransition('cases')}
                className={`hover-underline-animation transition-colors ${currentPage === 'cases' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
              >
                Archive
              </button>
              
              <div 
                className="relative group py-2 flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <span className={`transition-colors duration-300 ${isMegaMenuOpen ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}>Capabilities</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMegaMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                
                {/* Mega Menu Overlay */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[940px] mt-4 bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.15)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden p-14 grid grid-cols-3 gap-14 ${
                    isMegaMenuOpen 
                      ? 'opacity-100 scale-100 translate-y-0 visible' 
                      : 'opacity-0 scale-[0.98] -translate-y-2 invisible pointer-events-none'
                  }`}
                >
                  {serviceCategories.map((cat, i) => (
                    <div key={i} className={`space-y-10 transition-all duration-700 delay-[${i * 100}ms] ${isMegaMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className="flex items-center space-x-4 text-slate-950 border-b border-slate-50 pb-4">
                        {cat.icon}
                        <span className="font-black text-[12px] tracking-[0.2em]">{cat.title}</span>
                      </div>
                      <div className="space-y-6">
                        {cat.links.map((link, j) => (
                          <div key={j} className="group/item cursor-pointer pl-2 hover:pl-4 transition-all duration-300">
                            <span className="block text-[14px] font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors mb-1">{link.name}</span>
                            <span className="block text-[9px] font-medium text-slate-400 uppercase tracking-tight">{link.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handlePageTransition('network')}
                className={`hover-underline-animation transition-colors ${currentPage === 'network' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
              >
                Network
              </button>
              <button 
                onClick={() => handlePageTransition('about')}
                className={`hover-underline-animation transition-colors ${currentPage === 'about' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
              >
                The Standard
              </button>
            </nav>

            {/* Action Area */}
            <div className="flex items-center space-x-4 md:space-x-10">
              <button className="hidden lg:flex px-9 py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95 whitespace-nowrap">
                Secure Proposal
              </button>
              
              {/* Toggle Button - Explicitly styled for visibility */}
              <button 
                className={`xl:hidden flex items-center space-x-3 p-2 transition-all duration-300 ${isMobileMenuOpen ? 'text-blue-600' : 'text-slate-950'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline-block">
                  {isMobileMenuOpen ? "Exit" : "Menu"}
                </span>
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 animate-in zoom-in duration-300" />
                  ) : (
                    <Menu className="w-6 h-6 animate-in zoom-in duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[100] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 flex flex-col h-full overflow-y-auto">
            <div className="space-y-8 md:space-y-12 mb-16 md:mb-20">
              {[
                { id: 'home', name: 'Identity' },
                { id: 'cases', name: 'Capabilities' },
                { id: 'network', name: 'Global Hub' },
                { id: 'about', name: 'The Standard' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handlePageTransition(link.id as any)}
                  className="block text-4xl sm:text-5xl md:text-7xl font-serif font-bold italic text-slate-900 hover:text-blue-600 transition-all text-left tracking-tighter hover:pl-4"
                >
                  {link.name}.
                </button>
              ))}
            </div>
            
            <div className="mt-auto border-t border-slate-100 pt-10 md:pt-12 space-y-8 md:space-y-10">
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                 <div>
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Primary Core</span>
                   <span className="text-xs font-bold text-slate-900">London, Dubai, Zurich</span>
                 </div>
                 <div>
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Connectivity</span>
                   <span className="text-xs font-bold text-emerald-600">Encrypted / 99.999%</span>
                 </div>
              </div>
              <button className="w-full py-6 md:py-7 bg-slate-950 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all active:scale-[0.98]">
                 Request Board Access
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
