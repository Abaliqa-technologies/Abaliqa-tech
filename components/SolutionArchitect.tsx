import React, { useState } from 'react';
import { BrainCircuit, Loader2, Send, CheckCircle2, FileText, ChevronRight, AlertCircle } from 'lucide-react';
import { getSolutionAdvice } from '../services/geminiService';
import { AdvisorResponse } from '../types';

const MIN_CHARS = 25;

const SolutionArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AdvisorResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const charCount = prompt.trim().length;
  const isTooShort = charCount > 0 && charCount < MIN_CHARS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (charCount < MIN_CHARS) {
      setError(`Consultation requires more detail. Minimum ${MIN_CHARS} characters.`);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const advice = await getSolutionAdvice(prompt);
      setResult(advice);
      setPrompt('');
    } catch (err: any) {
      setError(err.message || 'Consultation interrupted.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-20 md:py-40 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white border border-slate-200 overflow-hidden rounded-sm">
          {/* Diagnostic Input */}
          <div className="lg:w-[400px] xl:w-[450px] p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center space-x-4 mb-10 md:mb-16">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center font-black text-white text-sm tracking-widest">AI</div>
                <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Architect Core v8.4</h3>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6 md:mb-8 leading-[0.9] tracking-tighter">Diagnostic Consultation.</h2>
              <p className="text-slate-500 text-sm md:text-base mb-10 md:mb-16 leading-relaxed font-light italic">
                Describe your complex technical challenge. Our AI Principal Architect will formulate a high-fidelity execution roadmap.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="relative group">
                  <textarea
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Input enterprise brief (e.g., 'Architecting a multi-region zero-trust network for a fintech node...')"
                    className={`w-full h-48 md:h-56 bg-slate-50 border ${isTooShort ? 'border-amber-200 bg-amber-50/20' : 'border-slate-200'} p-6 md:p-8 text-slate-900 text-sm focus:outline-none focus:ring-1 ${isTooShort ? 'focus:ring-amber-400' : 'focus:ring-blue-600'} transition-all placeholder:text-slate-300 resize-none font-medium leading-relaxed`}
                  />
                  <div className="absolute top-0 right-0 p-4">
                     <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-blue-600 animate-pulse' : 'bg-slate-200'}`}></div>
                  </div>
                  
                  {/* Validation Feedback */}
                  <div className="flex justify-between items-center mt-2 px-1">
                    <div className="flex items-center">
                      {isTooShort && (
                        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1.5" />
                          Need {MIN_CHARS - charCount} more characters
                        </span>
                      )}
                      {error && !isTooShort && (
                        <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1.5" />
                          {error}
                        </span>
                      )}
                    </div>
                    <span className={`text-[9px] font-mono font-bold ${isTooShort ? 'text-amber-500' : charCount >= MIN_CHARS ? 'text-emerald-500' : 'text-slate-300'}`}>
                      {charCount} / {MIN_CHARS}
                    </span>
                  </div>
                </div>

                <button
                  disabled={loading || charCount < MIN_CHARS}
                  className={`w-full py-5 md:py-6 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-300 flex items-center justify-center group active:scale-[0.98] ${
                    loading || charCount < MIN_CHARS 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : 'bg-slate-950 hover:bg-blue-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-900/10'
                  }`}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                      <span>Initialize Synthesis</span>
                      <ChevronRight className={`w-4 h-4 ml-3 transition-transform ${charCount >= MIN_CHARS ? 'group-hover:translate-x-1' : ''}`} />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="mt-12 md:mt-16 pt-8 md:pt-16 border-t border-slate-100">
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Processor: Gemini 3 Flash Hybrid</span>
            </div>
          </div>

          {/* Solution Output */}
          <div className="flex-1 p-8 md:p-12 lg:p-20 min-h-[500px] lg:min-h-[800px] flex flex-col bg-[#fcfcfc]">
            {!result && !loading ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-[0.05]">
                <FileText className="w-20 md:w-32 h-20 md:h-32 mb-8 md:mb-10 stroke-[0.5px]" />
                <p className="text-slate-900 font-serif font-bold text-2xl md:text-4xl italic tracking-tighter">System Idle / Awaiting Pulse</p>
              </div>
            ) : loading ? (
              <div className="flex-1 flex flex-col items-center justify-center py-20">
                <div className="w-16 md:w-20 h-16 md:h-20 border-[1px] border-slate-200 border-t-blue-600 rounded-full animate-spin mb-10 md:mb-12"></div>
                <div className="text-center px-4">
                   <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 animate-pulse">Synchronizing Architecture Repositories</p>
                   <p className="text-[8px] md:text-[9px] font-bold text-slate-400 mt-4 uppercase tracking-[0.3em]">Parsing Technical Complexity...</p>
                </div>
              </div>
            ) : result && (
              <div className="animate-in fade-in duration-1000">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-10 md:mb-20 border-b border-slate-100 pb-8 md:pb-12 gap-6">
                  <div>
                    <h4 className="text-2xl md:text-4xl font-serif font-bold italic mb-3">Technical Response Brief</h4>
                    <div className="flex flex-wrap items-center gap-3">
                       <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Secure Channel</span>
                       <span className="hidden sm:block w-4 h-px bg-slate-200"></span>
                       <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-1">Generated</p>
                    <p className="text-xs md:text-sm font-mono font-bold text-slate-950">{new Date().toLocaleTimeString()}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
                   <div className="lg:col-span-7 space-y-12 md:space-y-16">
                      <div>
                        <h5 className="text-[10px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.5em] mb-8 md:mb-10">Strategic Analysis</h5>
                        <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-light first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 md:first-letter:mr-5 first-letter:mt-1 md:first-letter:mt-2 first-letter:text-blue-600">
                          {result.analysis}
                        </p>
                      </div>
                   </div>

                   <div className="lg:col-span-5">
                      <div className="bg-white p-6 md:p-10 border border-slate-200 space-y-10 md:space-y-12 shadow-sm">
                         <div>
                            <h5 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 md:mb-8 border-b border-slate-100 pb-3">Phased Roadmap</h5>
                            <div className="space-y-6 md:space-y-8">
                              {result.roadmap.map((step, idx) => (
                                <div key={idx} className="flex space-x-4 md:space-x-5 group">
                                  <span className="text-[9px] md:text-[10px] font-mono font-black text-blue-600 mt-1">P0{idx+1}</span>
                                  <span className="text-sm md:text-[15px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">{step}</span>
                                </div>
                              ))}
                            </div>
                         </div>

                         <div>
                            <h5 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 md:mb-8 border-b border-slate-100 pb-3">Capability Allocation</h5>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {result.recommendedServices.map(service => (
                                <span key={service} className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 text-[9px] md:text-[10px] font-black uppercase tracking-tight text-slate-600 hover:bg-slate-950 hover:text-white transition-colors cursor-default">
                                  {service}
                                </span>
                              ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="mt-16 md:mt-24 pt-10 md:pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                  <div className="flex items-center space-x-3 text-[10px] md:text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Feasibility: High (94.2%)</span>
                  </div>
                  <button className="w-full md:w-auto flex items-center justify-center space-x-5 px-10 md:px-12 py-4 md:py-5 bg-slate-950 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] group hover:bg-blue-600 transition-all active:scale-95">
                    <span>Export Strategic Dossier</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionArchitect;