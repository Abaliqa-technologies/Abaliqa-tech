
import React from 'react';
import { Shield, Zap, Database, Globe } from 'lucide-react';

const regions = [
  { name: "North America", nodes: 42, latency: "8ms", capacity: "4.2 PB/s" },
  { name: "European Union", nodes: 56, latency: "12ms", capacity: "3.8 PB/s" },
  { name: "Asia Pacific", nodes: 38, latency: "22ms", capacity: "2.1 PB/s" },
  { name: "Middle East", nodes: 14, latency: "18ms", capacity: "1.4 PB/s" },
];

const GlobalNetwork: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-slate-950 text-white min-h-screen">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-32">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Infrastructure Hub</h4>
            <h1 className="text-6xl md:text-8xl font-serif font-bold italic leading-[0.9] tracking-tighter mb-12">
              Sovereign <br />Global Mesh.
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed">
              Our network operates on private dark fiber and proprietary satellite uplinks, ensuring that client data never touches the public internet without three layers of encapsulation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <Globe className="w-8 h-8 text-blue-500 mb-6" />
                <span className="block text-4xl font-light mb-2">142</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Tier-IV Data Nodes</span>
             </div>
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <Shield className="w-8 h-8 text-emerald-500 mb-6" />
                <span className="block text-4xl font-light mb-2">100%</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Encrypted Backplane</span>
             </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-4 text-[10px] font-black uppercase tracking-widest text-slate-600 pb-4 border-b border-white/5 px-8">
             <span>Regional Cluster</span>
             <span>Node Density</span>
             <span>Backbone Latency</span>
             <span className="text-right">Aggregate Throughput</span>
          </div>
          {regions.map((region, i) => (
            <div key={i} className="grid grid-cols-4 items-center py-10 px-8 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default">
               <span className="text-2xl font-serif font-bold italic">{region.name}</span>
               <span className="text-sm font-mono text-slate-400">{region.nodes} Sovereign Units</span>
               <span className="text-sm font-bold text-blue-500">{region.latency}</span>
               <span className="text-right text-sm font-bold">{region.capacity}</span>
            </div>
          ))}
        </div>

        <div className="mt-40 grid md:grid-cols-3 gap-16">
           <div className="space-y-6">
              <Zap className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Quantum Points of Presence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Dedicated hardware acceleration for quantum-resistant traffic routing at every major exchange point globally.</p>
           </div>
           <div className="space-y-6">
              <Database className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Immutable Storage Shards</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Data is fragmented and distributed across three separate geopolitical zones to ensure absolute survivability and compliance.</p>
           </div>
           <div className="space-y-6">
              <Globe className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Orbital Sync</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Low-earth orbit satellite backup links active for 100% of our nodes, providing failsafe connectivity in catastrophic scenarios.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
