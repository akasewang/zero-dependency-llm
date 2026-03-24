import React from 'react';
import { Activity, Info } from 'lucide-react';

interface HeatMapProps {
  heatmapData: number[][];
  tokens: string[];
  loading: boolean;
}

export default function HeatMap({ heatmapData, tokens, loading }: HeatMapProps) {
  if (loading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center border border-slate-800 bg-slate-950">
        <Activity className="w-6 h-6 text-emerald-500 animate-pulse mb-2" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          CALCULATING_WEIGHTS...
        </span>
      </div>
    );
  }

  if (!heatmapData || heatmapData.length === 0) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-emerald-500 tracking-tighter">
            Attention Map :: {tokens.length} Rows x {tokens.length} Columns
          </span>
        </div>
      </div>

      <div className="p-8 overflow-auto max-h-[600px] custom-scrollbar">
        <div className="relative inline-block border-l border-t border-slate-800">
          
          <div className="flex ml-24">
            {tokens.map((token, i) => (
              <div 
                key={`col-${i}`} 
                className="w-10 h-24 relative border-r border-slate-900 flex items-end justify-center pb-2 bg-slate-900/30"
              >
                <span className="text-[10px] font-bold text-slate-400 [writing-mode:vertical-lr] rotate-180 uppercase tracking-tighter">
                  {token}
                </span>
              </div>
            ))}
          </div>

          {heatmapData.map((row, i) => (
            <div key={`row-${i}`} className="flex group/row">
              <div className="w-24 h-10 flex items-center justify-end pr-4 bg-slate-900/50 border-b border-slate-900 shrink-0">
                <span className="text-[10px] font-bold text-slate-300 truncate uppercase">
                  {tokens[i]}
                </span>
              </div>

              <div className="flex">
                {row.map((weight, j) => (
                  <div
                    key={`cell-${i}-${j}`}
                    className="w-10 h-10 border-r border-b border-slate-900/50 relative group/cell"
                    style={{
                      backgroundColor: weight > 0.01 
                        ? `rgba(16, 185, 129, ${Math.min(weight * 2, 1)})` 
                        : 'transparent',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cell:opacity-100 bg-black/80 transition-opacity z-20 pointer-events-none">
                      <span className="text-[8px] text-emerald-400 font-bold">
                        {(weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-slate-800 bg-black flex justify-between items-center text-[9px] text-slate-500 uppercase tracking-widest">
        <div className="flex gap-4">
          <span>Row: Output_Token</span>
          <span>Col: Input_Token</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Intensity_Scale</span>
          <div className="w-20 h-1.5 bg-gradient-to-r from-transparent to-emerald-500 border border-slate-800" />
        </div>
      </div>
    </div>
  );
}