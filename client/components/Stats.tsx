import React from 'react';
import { Cpu, TrendingUp, Code, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Cpu, label: "6 Transformer Blocks", value: "Multi-Head Attention" },
    { icon: TrendingUp, label: "54.9% Accuracy", value: "Next Token Prediction" },
    { icon: Code, label: "Zero Dependencies", value: "Pure Python + NumPy" },
    { icon: Zap, label: "24+ Hours", value: "Training Time" }
  ];

  return (
    <div className="bg-slate-800/50 border-y border-slate-700">
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}