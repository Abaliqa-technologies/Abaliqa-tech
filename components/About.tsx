import React from 'react';
import { Award, Briefcase, Users, Star, Globe, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

const partners = [
  { name: "KVPDA", desc: "Petroleum Systems Infrastructure", url: "https://kvpda.com" },
  { name: "Boost+ Ai", desc: "Cognitive Intelligence Labs", url: "https://www.boostplusai.com" },
  { name: "Journal Club", desc: "Scientific Knowledge Mesh", url: "https://www.journalclub.net" },
  { name: "DocWatch", desc: "Remote Patient Monitoring", url: "#" },
  { name: "EBM Central", desc: "Medical Practice Standard", url: "https://apps.apple.com/at/app/ebm-central/id6505065520?l=en-GB" },
  { name: "Clinical Pearl", desc: "Health Informatics Platform", url: "https://apps.apple.com/in/app/clinical-pearl/id1614000903" }
];

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Established 1998</h4>
          <h1 className="text-6xl md:text-8xl font-serif font-bold italic mb-12 tracking-tighter">The Abaliqa Standard.</h1>
          <p className="text-2xl text-slate-600 font-light leading-relaxed italic">
            "Engineering is not a service; it is a discipline. We do not build for today's convenience, but for tomorrow's survival."
          </p>
        </div>

        {/* Leadership Section */}
        <div className="grid lg:grid-cols-12 gap-24 items-start mb-48">
           <div className="lg:col-span-6 space-y-12">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">The Foundations</h3>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6 group">
                   <div className="h-64 w-full bg-slate-100 grayscale transition-all group-hover:grayscale-0 duration-700 border border-slate-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
                   </div>
                   <div>
                      <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Founder</span>
                      <h2 className="text-2xl font-serif font-bold italic">Mr. Tanveer Ahmad</h2>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Leading global strategy and enterprise relations, specializing in high-stakes digital diplomacy.
                      </p>
                   </div>
                </div>

                <div className="space-y-6 group">
                   <div className="h-64 w-full bg-slate-100 grayscale transition-all group-hover:grayscale-0 duration-700 border border-slate-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
                   </div>
                   <div>
                      <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Founder</span>
                      <h2 className="text-2xl font-serif font-bold italic">Mr. Suhaib Qari</h2>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Architect of the firm's operational resilience and principal advisor on sovereign infrastructure.
                      </p>
                   </div>
                </div>
              </div>

              <div className="bg-slate-50 p-12 border border-slate-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 text-[80px] font-serif font-bold italic text-slate-100 select-none pointer-events-none">Chief</div>
                 <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="h-40 w-40 flex-shrink-0 bg-slate-200 grayscale border border-slate-200"></div>
                    <div>
                       <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Chief Architect</span>
                       <h2 className="text-3xl font-serif font-bold italic mb-4">Farhan Rafiq</h2>
                       <p className="text-sm text-slate-600 leading-relaxed font-light">
                          Directing the core engineering labs. Farhan specializes in federated systems and zero-latency mesh architectures for the Fortune 100.
                       </p>
                       <div className="flex items-center space-x-2 mt-4">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">Principal of System Integrity</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-6 pt-12">
              <h3 className="text-3xl font-serif font-bold italic mb-12">Our Credo</h3>
              <div className="space-y-16">
                 <div className="border-l-2 border-slate-900 pl-12 py-4">
                    <h4 className="text-xl font-bold mb-4">Integrity of Systems</h4>
                    <p className="text-slate-500 leading-relaxed max-w-lg">We believe a system is only as strong as its weakest authentication point. Our architectures are Zero-Trust from the hardware layer up.</p>
                 </div>
                 <div className="border-l-2 border-slate-100 pl-12 py-4 hover:border-slate-900 transition-colors">
                    <h4 className="text-xl font-bold mb-4">Geopolitical Resiliency</h4>
                    <p className="text-slate-500 leading-relaxed max-w-lg">In an era of fragmenting internet governance, we provide the technical tools to maintain operational continuity across borders.</p>
                 </div>
                 <div className="border-l-2 border-slate-100 pl-12 py-4 hover:border-slate-900 transition-colors">
                    <h4 className="text-xl font-bold mb-4">Predictive Human-AI Synergy</h4>
                    <p className="text-slate-500 leading-relaxed max-w-lg">We do not replace human decision-making; we amplify it with high-fidelity technical intelligence.</p>
                 </div>
              </div>

              {/* Ecosystem Section */}
              <div className="mt-24 pt-12 border-t border-slate-100">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Ecosystem Partners</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                  {partners.map((partner, i) => (
                    <a 
                      key={i} 
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="block text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">{partner.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest">{partner.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
           </div>
        </div>

        <div className="bg-slate-950 p-16 md:p-24 text-white">
           <div className="grid md:grid-cols-4 gap-12 text-center">
              <div>
                 <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-6" />
                 <span className="block text-4xl font-light mb-2">25+</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Years of Service</span>
              </div>
              <div>
                 <Users className="w-8 h-8 text-blue-500 mx-auto mb-6" />
                 <span className="block text-4xl font-light mb-2">1.2k</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Principal Architects</span>
              </div>
              <div>
                 <Star className="w-8 h-8 text-blue-500 mx-auto mb-6" />
                 <span className="block text-4xl font-light mb-2">42</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Fortune 100 Partners</span>
              </div>
              <div>
                 <Globe className="w-8 h-8 text-blue-500 mx-auto mb-6" />
                 <span className="block text-4xl font-light mb-2">12</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Global Offices</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;