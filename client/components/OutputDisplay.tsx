import React from 'react';
import { Terminal } from 'lucide-react';

interface OutputDisplayProps {
  generation: string;
  error?: string;
}

export default function OutputDisplay({ generation, error }: OutputDisplayProps) {
  return (
    <div className="bg-black border border-slate-800 rounded-sm shadow-2xl h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
        <Terminal className="w-4 h-4 text-slate-400" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Console_Output</span>
      </div>
      
      <div className="p-6 font-mono text-sm relative flex-grow overflow-auto min-h-[300px]">
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]"></div>
        
        {error ? (
          <div className="text-red-500 px-2 border-l-2 border-red-500">
            [ERROR] {error}
          </div>
        ) : generation ? (
          <div className="animate-in fade-in duration-500">
            <span className="text-emerald-500 mr-2">$</span>
            <span className="text-slate-200 whitespace-pre-wrap">{generation}</span>
            <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse align-middle"></span>
          </div>
        ) : (
          <div className="text-slate-700 italic">
             // Awaiting sequence input...
          </div>
        )}
      </div>
    </div>
  );
}