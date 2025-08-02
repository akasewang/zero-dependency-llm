import React from 'react';
import { Brain, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="relative px-6 py-16 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
              <Brain className="w-12 h-12 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Zero Dependency LLM
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Experience a transformer model built entirely from scratch - no PyTorch, no TensorFlow, just pure Python mathematics
          </p>
          <a
            href="https://github.com/akasewang/zero-dependency-llm"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-200 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}