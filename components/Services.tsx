import React, { useState } from 'react';
import { Layers, Globe, Zap, Cpu, Lock, Terminal, X, ArrowRight, Shield, Activity, Info, Tag, BarChart3, Clock } from 'lucide-react';

interface ServiceItem {
  name: string;
  code: string;
  description: string;
  tags: string[];
  complexity: 'Standard' | 'Critical' | 'Extreme';
  leadTime: string;
}

interface ServiceCategory {
  category: string;
  icon: React.ReactNode;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    category: "Strategic Advisory",
    icon: <Globe className="w-5 h-5" />,
    services: [
      { 
        name: "A-Z Digital Transformation", 
        code: "S01", 
        description: "Comprehensive roadmap orchestration for enterprise-wide digital evolution. We align legacy systems with future-state architecture through a phased, zero-disruption transition model designed for global stability.", 
        tags: ["Transformation", "Enterprise", "Roadmap"],
        complexity: "Extreme",
        leadTime: "6-18 Months"
      },
      { 
        name: "IT Governance & Compliance", 
        code: "S02", 
        description: "Framework development for sovereign technical compliance, risk management, and regulatory adherence. We ensure your digital assets meet the most stringent international data laws and industry-specific mandates.", 
        tags: ["Governance", "Risk", "Sovereign"],
        complexity: "Critical",
        leadTime: "3-6 Months"
      },
      { 
        name: "Enterprise Architecture", 
        code: "S03", 
        description: "Blueprinting resilient, scalable, and modular system landscapes. Our architects design for high-availability, multi-region operations that can withstand catastrophic node failures without service degradation.", 
        tags: ["Architecture", "Scalability", "Resilience"],
        complexity: "Extreme",
        leadTime: "4-12 Months"
      },
      { 
        name: "M&A Technical Diligence", 
        code: "S04", 
        description: "Critical technical audits and risk assessments for mergers and acquisitions. We provide transparency into technical debt, security posture, and the actual capability of target technical assets.", 
        tags: ["M&A", "Audit", "Due Diligence"],
        complexity: "Standard",
        leadTime: "2-4 Weeks"
      }
    ]
  },
  {
    category: "Cyber Defense",
    icon: <Lock className="w-5 h-5" />,
    services: [
      { 
        name: "Zero Trust Mesh Systems", 
        code: "C01", 
        description: "Implementing identity-centric security perimeters that assume no trust. Every request is verified, regardless of location or network segment, using micro-segmentation and continuous authentication.", 
        tags: ["Zero Trust", "Identity", "Network"],
        complexity: "Extreme",
        leadTime: "3-9 Months"
      },
      { 
        name: "Managed SOC 24/7/365", 
        code: "C02", 
        description: "Elite security operations centers providing continuous monitoring and automated threat hunting. Our responders neutralize adversarial activities within seconds of detection through global node visibility.", 
        tags: ["SOC", "Monitoring", "24/7"],
        complexity: "Critical",
        leadTime: "Ongoing"
      },
      { 
        name: "Quantum-Resistant Crypto", 
        code: "C07", 
        description: "Future-proofing data encryption against emerging quantum decryption capabilities. We implement post-quantum cryptographic standards to ensure data longevity and long-term sovereign privacy.", 
        tags: ["Quantum", "Encryption", "Cryptography"],
        complexity: "Extreme",
        leadTime: "6-12 Months"
      }
    ]
  },
  {
    category: "Cognitive Intelligence",
    icon: <Cpu className="w-5 h-5" />,
    services: [
      { 
        name: "Generative AI Training", 
        code: "A01", 
        description: "Bespoke fine-tuning of large language models on proprietary enterprise data. We create specialized domain experts within your organization while maintaining absolute data privacy and sovereign control.", 
        tags: ["GenAI", "LLM", "Training"],
        complexity: "Extreme",
        leadTime: "4-8 Months"
      },
      { 
        name: "Predictive Behavior Models", 
        code: "A02", 
        description: "Advanced machine learning algorithms that forecast market shifts and system failures. Our models provide high-precision foresight to mitigate operational risk and optimize high-value decision making.", 
        tags: ["ML", "Predictive", "Data Science"],
        complexity: "Critical",
        leadTime: "3-6 Months"
      }
    ]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const handleContactSales = () => {
    closeServiceModal();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <section id="capabilities" className="py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-8 flex items-center">
            <span className="w-16 h-px bg-blue-600 mr-6"></span>
            Comprehensive Service Registry
          </h2>
          <h3 className="text-6xl md:text-8xl font-serif font-bold italic text-slate-950 mb-12 leading-none tracking-tighter">
            A-Z Domain <br />Mastery.
          </h3>
          <p className="text-2xl text-slate-500 leading-relaxed font-light max-w-2xl italic">
            "We do not provide standard IT solutions; we engineer the competitive advantages of tomorrow through high-stakes technical mastery."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-20">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="group">
              <h4 className="text-2xl font-serif font-bold italic mb-12 flex justify-between items-end text-slate-950 border-b border-slate-950 pb-6">
                <div className="flex items-center space-x-5">
                  <span className="text-blue-600 group-hover:scale-110 transition-transform duration-500">
                    {cat.icon}
                  </span>
                  <span>{cat.category}</span>
                </div>
                <span className="text-[10px] font-black text-slate-300 font-sans uppercase tracking-[0.2em]">Tier 0{i+1}</span>
              </h4>
              <div className="space-y-4">
                {cat.services.map((service, j) => (
                  <button 
                    key={j} 
                    onClick={() => openServiceModal(service)}
                    className="w-full flex justify-between items-center group/item cursor-pointer border-b border-slate-50 pb-4 hover:border-blue-600 transition-all text-left"
                  >
                    <span className="text-[14px] font-bold text-slate-400 group-hover/item:text-slate-950 group-hover/item:pl-4 transition-all duration-300">
                      {service.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-200 group-hover/item:text-blue-600 font-black">{service.code}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
            <div 
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-500" 
              onClick={closeServiceModal}
            ></div>
            
            <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-out border border-slate-200">
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Briefing Detail */}
                <div className="flex-1 p-10 md:p-16 overflow-y-auto max-h-[85vh]">
                  <div className="flex justify-between items-start mb-12">
                    <div className="flex-1 mr-8">
                      <span className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-[0.4em] block mb-2">Technical Dossier // ID: {selectedService.code}</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-slate-950 leading-tight">{selectedService.name}</h2>
                    </div>
                    <button 
                      onClick={closeServiceModal}
                      className="p-2 hover:bg-slate-50 transition-colors rounded-full shrink-0 group"
                    >
                      <X className="w-6 h-6 text-slate-400 group-hover:text-slate-950 transition-colors" />
                    </button>
                  </div>
                  
                  <div className="space-y-10 mb-16">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 block mb-4">Strategic Summary</span>
                      <p className="text-xl text-slate-600 font-light leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>
                    
                    <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-6">Execution Meta</span>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                            <span className="text-slate-400 font-bold uppercase tracking-widest">Complexity</span>
                            <span className={`font-black ${selectedService.complexity === 'Extreme' ? 'text-red-500' : 'text-slate-950'}`}>
                              {selectedService.complexity.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                            <span className="text-slate-400 font-bold uppercase tracking-widest">Lead Window</span>
                            <span className="font-black text-slate-950">{selectedService.leadTime}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400 font-bold uppercase tracking-widest">Priority Tier</span>
                            <span className="font-black text-blue-600">P0-ACTIVE</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-6">Service Tags</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Core Principles</span>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3 text-xs font-bold text-slate-900">
                            <Shield className="w-3.5 h-3.5 text-blue-600" />
                            <span>System Resilience</span>
                          </li>
                          <li className="flex items-center space-x-3 text-xs font-bold text-slate-900">
                            <Activity className="w-3.5 h-3.5 text-blue-600" />
                            <span>Global Performance</span>
                          </li>
                          <li className="flex items-center space-x-3 text-xs font-bold text-slate-900">
                            <Info className="w-3.5 h-3.5 text-blue-600" />
                            <span>Data Sovereignty</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Historical ROI</span>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-light text-slate-950">18.4%</span>
                          <span className="text-[10px] font-black text-emerald-600">↑ AVG</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 block mt-2">Operational Efficiency Gains</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 px-10 py-5 bg-slate-950 text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-blue-600 flex items-center justify-center group active:scale-95">
                        <span>Initialize Technical Request</span>
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="flex-1 px-10 py-5 border border-slate-200 text-slate-950 font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-slate-50 active:scale-95">
                        Download Whitepaper
                      </button>
                    </div>
                    <button 
                      onClick={handleContactSales}
                      className="w-full px-10 py-5 border border-blue-600 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 active:scale-95"
                    >
                      <Zap className="w-3 h-3" />
                      <span>Connect with Principal Consultant</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Telemetry / Status Panel */}
                <div className="hidden md:flex w-80 bg-slate-50 border-l border-slate-100 p-12 flex-col justify-between">
                  <div className="space-y-16">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Audit</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 overflow-hidden">
                        <div className="w-[100%] h-full bg-emerald-500"></div>
                      </div>
                      <div className="flex justify-between mt-3">
                        <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Certified</span>
                        <span className="text-[9px] font-mono text-slate-400">ISO 27001 / SOC 2</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Load</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 overflow-hidden">
                        <div className="w-[72%] h-full bg-blue-600"></div>
                      </div>
                      <div className="flex justify-between mt-3">
                        <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Engaged</span>
                        <span className="text-[9px] font-mono text-slate-400">72.4% ALLOCATION</span>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 block">Regional Coverage</span>
                      <div className="space-y-2">
                        {['AMER', 'EMEA', 'APAC'].map(region => (
                          <div key={region} className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-950">{region}</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="opacity-[0.15] select-none text-right">
                    <span className="text-[72px] font-serif font-black italic leading-none block -mb-4">AB</span>
                    <span className="text-[9px] font-black tracking-[0.5em] uppercase block">ABALIQA PRINCIPAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;