"use client"
import React, { FC, useState } from 'react';

interface Props {
  heatmapData: number[][]
  tokens: string[]
  loading: boolean
}

const HeatMap: FC<Props> = ({ heatmapData, tokens, loading }) => {
    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

    const formatToken = (token: string) => {
        if (token === ' ') return '␣'; // Show space as a visible character
        if (token === '\n') return '↵'; // Show newline as a visible character
        return token;
    };

    if (heatmapData.length === 1) return (<></>)

    if (loading) {
        return (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">📊</span>
                    <h2 className="text-lg font-semibold text-white">Attention Heatmap</h2>
                </div>
                <div className="flex items-center justify-center py-16">
                    <div className="h-8 w-8 border-4 border-t-transparent border-purple-400 rounded-full animate-spin" />
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 w-full overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📊</span>
                <h2 className="text-lg font-semibold text-white">Attention Heatmap</h2>
            </div>
            
            {/* --- Coordinate Display Area --- */}
            <div className="h-8 mb-4 text-center text-sm text-slate-400 font-mono flex items-center justify-center">
                {hoveredCell ? (
                <div className="bg-slate-900/70 px-3 py-1 rounded-md border border-slate-600">
                    <span className="text-blue-400 font-bold">'{formatToken(tokens[hoveredCell.row])}'</span>
                    <span className="text-slate-500"> (row {hoveredCell.row})</span>
                    <span className="text-slate-500 mx-2">→</span>
                    <span className="text-green-400 font-bold">'{formatToken(tokens[hoveredCell.col])}'</span>
                    <span className="text-slate-500"> (col {hoveredCell.col})</span>
                </div>
                ) : (
                <span>Hover over a cell to see attention details</span>
                )}
            </div>

            <div className="relative w-full aspect-square overflow-y-auto border border-slate-700 rounded-lg bg-slate-900/30">
                <table 
                className="min-w-full border-collapse"
                onMouseLeave={() => setHoveredCell(null)}
                >
                {/* Table Header (Column Tokens) */}
                <thead>
                    <tr>
                    <th className="sticky top-0 z-10 p-2 border border-slate-700 bg-slate-800 min-w-[40px]"></th>
                    {tokens.map((token, index) => (
                        <th key={`col-${index}`} className="sticky top-0 z-10 p-2 text-xs text-slate-300 border border-slate-700 bg-slate-800 min-w-[40px]">
                        {formatToken(token)}
                        </th>
                    ))}
                    </tr>
                </thead>
                
                {/* Table Body (Rows and Heatmap Cells) */}
                <tbody>
                    {heatmapData.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                        {/* Row Header (Row Token) */}
                        <th className="p-2 text-xs text-slate-300 font-bold border border-slate-700 bg-slate-800">
                        {formatToken(tokens[rowIndex])}
                        </th>
                        
                        {/* Heatmap Cells */}
                        {row.map((score, colIndex) => {
                        const alpha = Math.max(0, Math.min(1, score));
                        const backgroundColor = `rgba(168, 85, 247, ${alpha})`; // Purple theme to match

                        return (
                            <td
                            key={`cell-${rowIndex}-${colIndex}`}
                            className="relative p-0 border border-slate-700 h-10 w-10 text-center transition-all duration-200 ease-in-out hover:scale-110 hover:z-20 cursor-pointer"
                            style={{ backgroundColor }}
                            onMouseEnter={() => setHoveredCell({ row: rowIndex, col: colIndex })}
                            title={`'${formatToken(tokens[rowIndex])}' paying attention to '${formatToken(tokens[colIndex])}': ${score.toFixed(3)}`}
                            >
                            <span
                                className={`absolute inset-0 flex items-center justify-center text-xs font-mono transition-opacity duration-200 ${alpha > 0.6 ? 'text-white font-semibold' : 'text-slate-300'}`}
                            >
                                {score.toFixed(2)}
                            </span>
                            </td>
                        );
                        })}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default HeatMap