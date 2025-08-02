"use client"
import React, { useState } from 'react';
import { getGenerationStream } from "@/lib/model";
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import ControlPanel from '@/components/ControlPanel';
import OutputDisplay from '@/components/OutputDisplay';
import HeatmapDisplay from '@/components/HeatmapDisplay';

export default function Home() {
  const [generation, setGeneration] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [heatMap, setHeatMap] = useState<boolean>(false);
  const [length, setLength] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [heatmapData, setHeatmapData] = useState<number[][]>([[]]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);

  const handleData = (chunk: string) => {
    const cleaned = chunk.replace(/\\n/g, '\n');
    setGeneration(prev => `${prev}${cleaned}`);
  };

  const handleHeatMap = (data: number[][]) => {
    setHeatmapData(data);
  };

  const handleCompletion = () => {
    setDataLoading(false);
  };

  const handleError = (error: Error) => {
    console.error('Stream failed:', error);
    setError('Generation failed. Please try again.');
    setDataLoading(false);
  };

  const handleSubmit = async () => {
    if (loading || !prompt.trim()) return;

    setLoading(true);
    setError(undefined);
    setGeneration('');
    setHeatmapData([[]]);

    try {
      setDataLoading(true);
      getGenerationStream(
        { prompt, temperature, length },
        handleData,
        handleHeatMap,
        handleCompletion,
        handleError
      );
    } catch (err) {
      console.error('Failed to get generation:', err);
      setError('Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Stats />
      
      <main className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ControlPanel
            prompt={prompt}
            setPrompt={setPrompt}
            temperature={temperature}
            setTemperature={setTemperature}
            length={length}
            setLength={setLength}
            heatMap={heatMap}
            setHeatMap={setHeatMap}
            onSubmit={handleSubmit}
            loading={loading}
          />
          <OutputDisplay generation={generation} error={error} />
        </div>
        
        {heatMap && (
          <HeatmapDisplay
            heatmapData={heatmapData}
            tokens={generation.split('')}
            loading={dataLoading}
          />
        )}
      </main>
    </div>
  );
}