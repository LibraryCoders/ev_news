import React, { useState } from 'react';
import { TrendingUpIcon, TrendingDownIcon, ArrowRightIcon, CalendarIcon, BarChart3Icon, Activity } from 'lucide-react';
import MarketChart from '../components/Markets/MarketChart';
import MarketStats from '../components/Markets/MarketStats';
const MarketsPage = () => {
  const [timeframe, setTimeframe] = useState('1D');
  const marketStats = {
    totalMarketCap: '857.2B',
    volume24h: '42.1B',
    dominance: {
      Tesla: '28.4%',
      BYD: '15.2%',
      Volkswagen: '12.8%'
    }
  };
  const topMovers = [{
    name: 'Rivian (RIVN)',
    price: '18.76',
    change: '+12.4%',
    isUp: true
  }, {
    name: 'Lucid (LCID)',
    price: '5.63',
    change: '-8.2%',
    isUp: false
  }, {
    name: 'NIO (NIO)',
    price: '8.92',
    change: '+5.7%',
    isUp: true
  }, {
    name: 'Ford (F)',
    price: '12.34',
    change: '-3.1%',
    isUp: false
  }, {
    name: 'GM (GM)',
    price: '32.45',
    change: '+2.8%',
    isUp: true
  }];
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          EV Market{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Analysis
          </span>
        </h1>
        <p className="text-xl text-blue-200">
          Comprehensive market data and real-time stock performance
        </p>
      </div>
      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <div className="backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Market Overview
                </h2>
                <p className="text-blue-300 text-sm">Updated just now</p>
              </div>
              <div className="flex items-center space-x-2">
                {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map(period => <button key={period} onClick={() => setTimeframe(period)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${timeframe === period ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-900/40'}`}>
                    {period}
                  </button>)}
              </div>
            </div>
            <MarketChart timeframe={timeframe} />
          </div>
        </div>
        <div className="space-y-6">
          <MarketStats stats={marketStats} />
          <div className="backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Top Movers</h3>
            <div className="space-y-4">
              {topMovers.map((stock, index) => <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                  <div>
                    <div className="font-medium text-white">{stock.name}</div>
                    <div className="text-sm text-blue-300">${stock.price}</div>
                  </div>
                  <div className={`flex items-center ${stock.isUp ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.isUp ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                    <span>{stock.change}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {/* Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InsightCard icon={<CalendarIcon className="h-5 w-5" />} title="Upcoming Events" content="Tesla Q4 Earnings Call, NIO Day 2024, BYD European Expansion Announcement" />
        <InsightCard icon={<BarChart3Icon className="h-5 w-5" />} title="Market Sentiment" content="Bullish trend continues as EV adoption rates exceed expectations globally" />
        <InsightCard icon={<Activity className="h-5 w-5" />} title="Volume Analysis" content="Trading volume up 24% this week, indicating strong market activity" />
      </div>
    </div>;
};
const InsightCard = ({
  icon,
  title,
  content
}) => <div className="backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-xl p-6">
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <p className="text-blue-200 mb-4">{content}</p>
    <button className="text-sm flex items-center text-blue-400 hover:text-blue-300">
      Learn more
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </button>
  </div>;
export default MarketsPage;