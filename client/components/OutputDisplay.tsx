import React from 'react';
import { Code } from 'lucide-react';

interface OutputDisplayProps {
  generation: string;
  error?: string;
}

export default function OutputDisplay({ generation, error }: OutputDisplayProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 bg-slate-900/50 border-b border-slate-700">
        <Code className="w-5 h-5 text-green-400" />
        <h2 className="text-lg font-semibold text-white">Generated Code</h2>
      </div>
      
      <div className="p-6">
        {error ? (
          <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-300">
            {error}
          </div>
        ) : generation ? (
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap leading-relaxed">
            {generation}
          </pre>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Your generated code will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}