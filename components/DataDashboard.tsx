import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';

const performanceData = [
  { name: '00:00', load: 400, latency: 12, security: 98 },
  { name: '04:00', load: 300, latency: 10, security: 99 },
  { name: '08:00', load: 900, latency: 22, security: 97 },
  { name: '12:00', load: 1200, latency: 25, security: 99 },
  { name: '16:00', load: 1100, latency: 20, security: 98 },
  { name: '20:00', load: 800, latency: 15, security: 100 },
  { name: '23:59', load: 500, latency: 13, security: 99 },
];

const DataDashboard: React.FC = () => {
  const [chartFontSize, setChartFontSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartFontSize(8);
      } else if (window.innerWidth < 1024) {
        setChartFontSize(9);
      } else {
        setChartFontSize(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-slate-50 border border-slate-200 p-6 md:p-12 my-8 md:my-12">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12 gap-8 md:gap-10">
        <div className="max-w-md w-full">
          <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">Network Telemetry</h4>
          <h3 className="text-xl md:text-2xl font-serif font-bold italic text-slate-900 leading-tight">
            Real-Time Infrastructure Integrity & Predictive Defense
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 w-full lg:w-auto">
          <div className="text-left lg:text-center border-b sm:border-b-0 pb-4 sm:pb-0 border-slate-200">
            <span className="block text-2xl font-light">4.2<span className="text-[10px] font-bold text-slate-400 ml-1">PB/S</span></span>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-500">Global Throughput</span>
          </div>
          <div className="text-left lg:text-center sm:border-l border-slate-200 sm:pl-12 border-b sm:border-b-0 pb-4 sm:pb-0 border-slate-200">
            <span className="block text-2xl font-light">0.001<span className="text-[10px] font-bold text-slate-400 ml-1">%</span></span>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-500">System Error Rate</span>
          </div>
          <div className="text-left lg:text-center sm:border-l border-slate-200 sm:pl-12">
            <span className="block text-2xl font-light text-emerald-600">99.8<span className="text-[10px] font-bold text-slate-400 ml-1">%</span></span>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-500">Security Integrity</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Load Chart */}
        <div className="h-[220px] sm:h-[260px] md:h-[280px] w-full bg-white p-4 sm:p-6 border border-slate-200">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Request Load</p>
            <span className="text-[8px] font-mono text-slate-300 font-bold">V.24.4</span>
          </div>
          <div className="h-40 sm:h-48 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#020617" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#020617" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  fontSize={chartFontSize} 
                  axisLine={false} 
                  tickLine={false} 
                  minTickGap={20}
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontSize: '10px', fontWeight: 'bold' }}
                  cursor={{ stroke: '#020617', strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="load" 
                  stroke="#020617" 
                  fillOpacity={1} 
                  fill="url(#colorLoad)" 
                  strokeWidth={2} 
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latency Chart */}
        <div className="h-[220px] sm:h-[260px] md:h-[280px] w-full bg-white p-4 sm:p-6 border border-slate-200">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Latency (ms)</p>
            <span className="text-[8px] font-mono text-slate-300 font-bold">P99 TARGET</span>
          </div>
          <div className="h-40 sm:h-48 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  fontSize={chartFontSize} 
                  axisLine={false} 
                  tickLine={false} 
                  minTickGap={20}
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontSize: '10px', fontWeight: 'bold' }}
                />
                <Bar 
                  dataKey="latency" 
                  fill="#2563eb" 
                  barSize={10} 
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Security Chart */}
        <div className="h-[220px] sm:h-[260px] md:h-[280px] w-full bg-white p-4 sm:p-6 border border-slate-200 md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mitigation Index</p>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[8px] font-bold text-emerald-600 uppercase">Live</span>
            </div>
          </div>
          <div className="h-40 sm:h-48 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  fontSize={chartFontSize} 
                  axisLine={false} 
                  tickLine={false} 
                  minTickGap={20}
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis domain={[90, 100]} hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontSize: '10px', fontWeight: 'bold' }}
                />
                <Line 
                  type="stepAfter" 
                  dataKey="security" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  dot={{ fill: '#10b981', r: 3 }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;