import React from 'react';
import { Cpu, Activity, Database, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: "LAYERS", value: "6 Transformer Blocks", sub: "MHA + FeedForward" },
    { label: "PRECISION", value: "54.9% Acc", sub: "Top-1 Token Pred" },
    { label: "ENGINE", value: "Pure NumPy", sub: "Manual Backprop" },
    { label: "UPTIME", value: "24h Training", sub: "Loss: 2.14" }
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800">
          {stats.map((stat, i) => (
            <div key={i} className="px-6 py-2 group">
              <div className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] mb-1">{stat.label}</div>
              <div className="text-lg font-mono text-white group-hover:text-emerald-400 transition-colors">{stat.value}</div>
              <div className="text-xs text-slate-500 font-mono">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}