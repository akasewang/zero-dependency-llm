import React from 'react';
import { Sliders, Play, Loader2, Cpu } from 'lucide-react';

interface ControlPanelProps {
  prompt: string;
  setPrompt: (val: string) => void;
  temperature: number;
  setTemperature: (val: number) => void;
  length: number;
  setLength: (val: number) => void;
  heatMap: boolean;
  setHeatMap: (val: boolean) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function ControlPanel({
  prompt, setPrompt, temperature, setTemperature, length, setLength,
  heatMap, setHeatMap, onSubmit, loading
}: ControlPanelProps) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-none p-0 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Inference_Engine</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>
      </div>
      
      <div className="p-6 space-y-8">
        <div>
          <label className="text-[10px] font-bold text-slate-500 uppercase mb-3 block">Input_Sequence</label>
          <textarea
            rows={4}
            className="w-full p-4 bg-black border border-slate-800 rounded-sm text-emerald-500 font-mono text-sm focus:border-emerald-500 outline-none transition-all placeholder-slate-700"
            placeholder=">>> type your code prompt here..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter text-emerald-300">Temp: {temperature}</label>
            </div>
            <input
              type="range" min="0.1" max="2" step="0.1"
              value={temperature}
              onChange={e => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-slate-800 appearance-none"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-[10px] font-bold text-slate-500 uppercase text-emerald-300">Tokens: {length}</label>
            </div>
            <input
              type="range" min="10" max="250" step="10"
              value={length}
              onChange={e => setLength(parseInt(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-slate-800 appearance-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-2 border-t border-slate-900">
           <input
            type="checkbox"
            id="heatmap"
            checked={heatMap}
            onChange={e => setHeatMap(e.target.checked)}
            className="sr-only peer"
          />
          <label htmlFor="heatmap" className="relative w-10 h-5 bg-slate-800 rounded-full peer-checked:bg-emerald-600 transition-colors cursor-pointer after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:w-3 after:h-3 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></label>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Visualize Attention</span>
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || !prompt.trim()}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-black font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 fill-current" />}
          {loading ? "Processing..." : "Execute_Generation"}
        </button>
      </div>
    </div>
  );
}