import React from 'react';
import { DollarSignIcon, BarChart2Icon, PieChartIcon } from 'lucide-react';
interface MarketStatsProps {
  stats: {
    totalMarketCap: string;
    volume24h: string;
    dominance: {
      Tesla: string;
      BYD: string;
      Volkswagen: string;
    };
  };
}
const MarketStats = ({
  stats
}: MarketStatsProps) => {
  return <div className="backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Market Statistics</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400">
            <DollarSignIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-blue-300">Total Market Cap</div>
            <div className="text-xl font-bold text-white">
              ${stats.totalMarketCap}
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400">
            <BarChart2Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-blue-300">24h Volume</div>
            <div className="text-xl font-bold text-white">
              ${stats.volume24h}
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400">
            <PieChartIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-blue-300">Market Dominance</div>
            <div className="space-y-1 mt-1">
              <div className="flex justify-between">
                <span className="text-blue-200">Tesla</span>
                <span className="text-white font-medium">
                  {stats.dominance.Tesla}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">BYD</span>
                <span className="text-white font-medium">
                  {stats.dominance.BYD}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Volkswagen</span>
                <span className="text-white font-medium">
                  {stats.dominance.Volkswagen}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default MarketStats;