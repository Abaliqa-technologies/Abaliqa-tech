import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const cases = [
  {
    client: "Journal Club",
    title: "End-to-End Scientific Knowledge Mesh",
    category: "Academic Engineering",
    year: "2024",
    description: "A comprehensive web-based platform engineered to host, start, and organize journal club complete life cycles. This application centralizes critical reading and appraisal tools into a seamless scientific workflow.",
    metric: "Global Research Hub",
    url: "https://www.journalclub.net"
  },
  {
    client: "EBM Central",
    title: "Certified Medical Evidence Training",
    category: "Healthcare Infrastructure",
    year: "2024",
    description: "A digital initiative designed to educate healthcare professionals on practicing evidence-based medicine through web-based curriculum and live conference knowledge courses with certified training modules.",
    metric: "Certified EBM Practice",
    url: "https://apps.apple.com/at/app/ebm-central/id6505065520?l=en-GB"
  },
  {
    client: "DocWatch",
    title: "Advanced Remote Patient Monitoring (RPM)",
    category: "Health Systems",
    year: "2024",
    description: "A state-of-the-art RPM ecosystem designed to enhance healthcare outcomes by streamlining doctor-patient communication through real-time health tracking and proactive care models from the comfort of home.",
    metric: "Real-time Proactive Care",
    url: "#"
  },
  {
    client: "Clinical Pearls",
    title: "Reflective Medical Education Platform",
    category: "Medical Informatics",
    year: "2023",
    description: "A comprehensive clinical knowledge resource and management platform for clinicians. Features integrated point-of-care query capturing, critical appraisal tools, and CME activity organization.",
    metric: "CME Integrated Data",
    url: "https://apps.apple.com/in/app/clinical-pearl/id1614000903"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 md:mb-6 animate-fade-up">Archive of Excellence</h4>
          <h1 className="text-5xl md:text-8xl font-serif font-bold italic mb-6 md:mb-8 leading-tight tracking-tighter animate-fade-up">Technical Dossiers.</h1>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A selection of high-stakes engagements where Abaliqa Technologies re-engineered the limits of scientific and medical informatics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {cases.map((project, i) => (
            <div 
              key={i} 
              className="group relative bg-white border border-transparent border-t-slate-100 p-6 md:p-12 lg:p-16 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.01] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] hover:border-slate-100 hover:z-10 rounded-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-slate-50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-1/2 -translate-y-1/2 rotate-45"></div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] md:text-[9px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-4 group-hover:tracking-[0.5em] transition-all duration-700">Project 0{i+1} // {project.category}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6 md:mb-8 leading-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-700">{project.client}</h2>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between border-b border-slate-50 pb-3 group-hover:border-slate-100 transition-colors">
                      <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Temporal Frame</span>
                      <span className="text-xs font-mono font-bold text-slate-950">{project.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-50 pb-3 group-hover:border-slate-100 transition-colors">
                      <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Core Function</span>
                      <span className="text-xs font-bold text-blue-600 uppercase">{project.metric}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-8">
                  <h3 className="text-xl md:text-3xl font-serif font-bold mb-6 md:mb-8 text-slate-900 leading-snug">{project.title}</h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed mb-10 md:mb-12 max-w-2xl group-hover:text-slate-700 transition-colors duration-700">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center space-x-5 px-8 md:px-10 py-4 md:py-5 bg-slate-950 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-95"
                    >
                      <span>Examine Platform</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex items-center space-x-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Request Full Audit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 md:mt-32 flex justify-center px-4">
          <button className="w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 border border-slate-100 text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] hover:bg-slate-50 hover:text-slate-950 hover:border-slate-900 transition-all duration-500 active:scale-95">
            View Full Repository History
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;