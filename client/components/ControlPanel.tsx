import React from 'react';
import { Settings, Play, Loader2 } from 'lucide-react';

interface ControlPanelProps {
  prompt: string;
  setPrompt: (value: string) => void;
  temperature: number;
  setTemperature: (value: number) => void;
  length: number;
  setLength: (value: number) => void;
  heatMap: boolean;
  setHeatMap: (value: boolean) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function ControlPanel({
  prompt, setPrompt, temperature, setTemperature, length, setLength,
  heatMap, setHeatMap, onSubmit, loading
}: ControlPanelProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">Generation Controls</h2>
      </div>
      
      <div className="space-y-6">
        {/* Prompt Input */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Code Prompt
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="def generate_fibonacci():"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Temperature: {temperature}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={temperature}
              onChange={e => setTemperature(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Conservative</span>
              <span>Creative</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Max Length: {length}
            </label>
            <input
              type="range"
              min="10"
              max="250"
              step="10"
              value={length}
              onChange={e => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Short</span>
              <span>Long</span>
            </div>
          </div>
        </div>

        {/* Heatmap Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="heatmap"
            checked={heatMap}
            onChange={e => setHeatMap(e.target.checked)}
            className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
          />
          <label htmlFor="heatmap" className="text-sm font-medium text-slate-300">
            Show attention heatmap
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          disabled={loading || !prompt.trim()}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Generate Code
            </>
          )}
        </button>
      </div>
    </div>
  );
}