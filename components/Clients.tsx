import React from 'react';
import { ExternalLink } from 'lucide-react';

const clients = [
  { 
    name: "KVPDA", 
    sub: "Petroleum Infrastructure Core", 
    type: "Energy",
    symbol: "KP",
    url: "https://kvpda.com"
  },
  { 
    name: "Boost+ Ai", 
    sub: "Cognitive Acceleration Labs", 
    type: "AI & ML", 
    domain: "boostplusai.com",
    logo: "https://logo.clearbit.com/boostplusai.com",
    url: "https://www.boostplusai.com"
  },
  { 
    name: "Journal Club", 
    sub: "Research Lifecycle Orchestration", 
    type: "Academic Tech", 
    domain: "journalclub.net",
    logo: "https://logo.clearbit.com/journalclub.net",
    url: "https://www.journalclub.net"
  },
  { 
    name: "EBM Central", 
    sub: "Evidence-Based Medical Training", 
    type: "Healthcare Ed",
    symbol: "EB",
    url: "https://apps.apple.com/at/app/ebm-central/id6505065520?l=en-GB"
  },
  { 
    name: "Clinical Pearl", 
    sub: "Point-of-Care Intelligence", 
    type: "Medical Informatics",
    symbol: "CP",
    url: "https://apps.apple.com/in/app/clinical-pearl/id1614000903"
  },
  { 
    name: "DocWatch", 
    sub: "Remote Patient Monitoring (RPM)", 
    type: "Health Systems",
    symbol: "DW",
    url: "#" 
  }
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:20 gap-8 md:gap-10">
          <div className="max-w-lg text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-6">Strategic Alliances</h4>
            <h3 className="text-3xl md:text-4xl font-serif font-bold italic text-slate-950">Trusted by Global Industry Pioneers.</h3>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-100 mx-16"></div>
          <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em]">Partner Ledger / FY2024</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px bg-slate-100 border border-slate-100 shadow-2xl shadow-slate-200/50">
          {clients.map((client, i) => (
            <a 
              key={i} 
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-10 md:p-14 flex flex-col items-center justify-center text-center group transition-all duration-700 hover:z-10 hover:shadow-2xl hover:scale-[1.02] relative min-h-[220px] block"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-600" />
              </div>

              <div className="mb-8 flex items-center justify-center h-16 w-full">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-12 w-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-4xl font-serif font-bold text-slate-200 group-hover:text-blue-600 transition-all duration-500 italic">${client.name[0]}</span>`;
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-serif font-bold text-slate-200 group-hover:text-blue-600 transition-colors duration-500 tracking-tighter italic">
                      {client.symbol || client.name[0]}
                    </span>
                    <div className="w-8 h-0.5 bg-slate-100 mt-2 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
                  </div>
                )}
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <span className="block text-[11px] font-bold text-slate-950 mb-1">{client.name}</span>
                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">{client.type}</span>
                <span className="block text-[10px] font-bold text-slate-400 italic">{client.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;