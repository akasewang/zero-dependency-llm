import React from 'react';
import HeatMap from '@/components/HeatMap';

interface HeatmapDisplayProps {
  heatmapData: number[][];
  tokens: string[];
  loading: boolean;
}

export default function HeatmapDisplay({ heatmapData, tokens, loading }: HeatmapDisplayProps) {
  return (
    <div className="w-full">
      <HeatMap 
        heatmapData={heatmapData} 
        tokens={tokens} 
        loading={loading} 
      />
    </div>
  );
}