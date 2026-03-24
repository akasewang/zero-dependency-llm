import React from 'react';
import { Github, Terminal, Binary } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative border-b border-slate-800 bg-slate-950 py-12 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <Binary className="w-3 h-3" />
              <span>v1.0.4-stable // architecture: transformer_scratch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Zero-Dep <span className="text-slate-500 italic">LLM</span>
            </h1>
            <p className="text-lg text-slate-400 font-mono leading-relaxed">
              &gt; A transformer model implemented in pure Python. <br/>
              &gt; No PyTorch. No TensorFlow. Just linear algebra and calculus.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/akasewang/zero-dependency-llm" 
               className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold hover:bg-emerald-400 transition-all rounded-sm shadow-[4px_4px_0px_0px_rgba(52,211,153,1)]">
              <Github className="w-5 h-5" />
              SOURCE_CODE
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}