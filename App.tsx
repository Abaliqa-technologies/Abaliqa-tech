
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import SolutionArchitect from './components/SolutionArchitect';
import DataDashboard from './components/DataDashboard';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import GlobalNetwork from './components/GlobalNetwork';
import About from './components/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'cases' | 'network' | 'about'>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'cases':
        return <CaseStudies />;
      case 'network':
        return <GlobalNetwork />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero />
            
            <Clients />
            
            {/* Industry Focus & Data Integrity Section */}
            <section id="data" className="py-24 bg-white">
              <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-slate-100 pb-8 gap-8">
                  <div className="max-w-xl">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Operations Metrics</h4>
                     <h3 className="text-3xl font-serif font-bold italic">Global System Integrity Dashboard.</h3>
                  </div>
                  <div className="flex flex-wrap gap-12 text-center md:text-right">
                     <div>
                        <span className="block text-3xl font-light">142</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Data Center Nodes</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-light">280k</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Security Events / Sec</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-light">100%</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Audit Compliance</span>
                     </div>
                  </div>
                </div>

                <DataDashboard />
              </div>
            </section>

            <Services />
            <SolutionArchitect />

            {/* Advisory / Trust Section */}
            <section className="py-32 bg-white">
               <div className="container mx-auto px-8">
                  <div className="grid lg:grid-cols-2 gap-24 items-center">
                     <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Our Philosophy</h4>
                        <h3 className="text-5xl font-serif font-bold italic mb-10 leading-tight">Digital excellence is the only sustainable strategy.</h3>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
                           Abaliqa Technologies operates at the intersection of technical mastery and business pragmatism. We believe that infrastructure is not just a utility, but a strategic asset that defines market leadership.
                        </p>
                        <div className="space-y-8">
                           {[
                             { title: "Sovereign Control", desc: "Maintaining absolute authority over your data and infrastructure." },
                             { title: "Predictive Security", desc: "Neutralizing threats before they materialize through AI forensics." },
                             { title: "Invisible Scale", desc: "Architecture that expands seamlessly without operational friction." }
                           ].map((item, i) => (
                             <div key={i} className="flex space-x-6 border-l-2 border-slate-100 pl-8 hover:border-blue-600 transition-colors cursor-default">
                               <div className="flex-1">
                                  <h5 className="font-bold text-slate-950 mb-1">{item.title}</h5>
                                  <p className="text-sm text-slate-500">{item.desc}</p>
                               </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="bg-slate-50 aspect-[4/5] p-12 flex flex-col justify-center border border-slate-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-[120px] font-serif font-bold italic text-slate-100 select-none group-hover:text-slate-200 transition-colors">Vision</div>
                        <blockquote className="relative z-10 text-3xl font-serif font-bold italic text-slate-900 leading-snug">
                           "Infrastructure is the silent architect of progress. Our mission is to ensure that architecture is unbreakable."
                        </blockquote>
                        <cite className="relative z-10 mt-8 not-italic">
                           <span className="block font-black uppercase tracking-widest text-[10px] text-slate-400">Principal Architect</span>
                           <span className="block font-bold text-slate-950">Farhan Rafiq</span>
                        </cite>
                     </div>
                  </div>
               </div>
            </section>

            {/* Global Partnership CTA */}
            <section id="contact" className="py-40 bg-slate-950 text-white text-center">
               <div className="container mx-auto px-8">
                  <div className="max-w-4xl mx-auto">
                     <h2 className="text-5xl md:text-8xl font-serif font-bold italic mb-12 tracking-tighter">Define your legacy.</h2>
                     <p className="text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                        Partner with the world's most trusted IT advisory. Our consultants are available for global deployment and strategic board reviews.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button className="px-12 py-6 bg-white text-slate-950 font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-100 transition-all">
                           Initialize Consultation
                        </button>
                        <button 
                          onClick={() => setCurrentPage('network')}
                          className="px-12 py-6 border border-slate-800 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
                        >
                           Global Office Network
                        </button>
                     </div>
                  </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-blue-600 selection:text-white">
      <Header setPage={setCurrentPage} currentPage={currentPage} />
      <main className="animate-in fade-in duration-700">
        {renderContent()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;
