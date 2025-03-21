import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUpIcon, TrendingDownIcon, ExternalLinkIcon, LockIcon } from 'lucide-react';
import NewsCard from '../components/HomePage/NewsCard';
import CurrencyGraph from '../components/HomePage/CurrencyGraph';
const HomePage = () => {
  const [isPremium] = useState(false);
  // Mock news data
  const articles = [{
    id: 1,
    title: 'Tesla Unveils Revolutionary Battery Technology',
    description: 'New battery technology promises 500 miles of range and 10-year lifespan, setting new industry standards.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    date: 'Today'
  }, {
    id: 2,
    title: 'Rivian Expands Production Capacity',
    description: 'Electric truck maker doubles factory output to meet surging demand for R1T and R1S models.',
    image: 'https://www.electrive.com/media/2024/03/rivian-r2-2024-09-min.jpg.webp',
    date: 'Yesterday'
  }, {
    id: 3,
    title: 'New EU Regulations on EV Charging Standards',
    description: 'European Union announces standardization requirements for all public charging stations by 2025.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
    date: '2 days ago'
  }, {
    id: 4,
    title: 'Solid-State Batteries: The Next Frontier',
    description: 'Researchers achieve breakthrough in solid-state battery technology, promising safer and more efficient EVs.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    date: '3 days ago'
  }, {
    id: 5,
    title: "China's EV Market Continues Explosive Growth",
    description: 'Chinese electric vehicle sales surge 150% year-over-year, dominating global EV market share.',
    image: 'https://images.unsplash.com/photo-1605515298946-d067fbec867a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    date: '4 days ago'
  }, {
    id: 6,
    title: 'Legacy Automakers Accelerate EV Transitions',
    description: "Premium subscribers can view this exclusive analysis on traditional manufacturers' electric strategies.",
    image: 'https://ceoworld.biz/wp-content/uploads/2025/01/electric-vehicle.jpg',
    date: '5 days ago',
    premium: true
  }];
  // Filter articles based on premium status
  const visibleArticles = isPremium ? articles : articles.filter(article => !article.premium).slice(0, 5);
  const hasLockedContent = articles.length > visibleArticles.length;
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="relative z-20 py-16 px-8 md:py-24 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Electric Mobility
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Stay ahead with the latest news, trends, and innovations in the
            electric vehicle industry.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/categories" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-600/30">
              Browse Categories
            </Link>
            <Link to="/subscription" className="px-6 py-3 rounded-lg bg-transparent border border-blue-400 hover:bg-blue-900/30 text-blue-300 font-medium transition-all duration-300">
              Get Premium
            </Link>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Latest News</h2>
            <div className="flex items-center">
              <span className="text-blue-400 text-sm mr-2">
                {isPremium ? 'Premium Access' : 'Free Access'}
              </span>
              <div className={`w-3 h-3 rounded-full ${isPremium ? 'bg-green-400' : 'bg-blue-400'} relative`}>
                <span className="absolute inset-0 rounded-full animate-ping bg-green-400/75"></span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleArticles.map(article => <NewsCard key={article.id} article={article} />)}
          </div>
          {hasLockedContent && <div className="mt-8 p-6 rounded-xl border border-blue-800/50 bg-gradient-to-b from-blue-900/20 to-indigo-900/20 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4 relative">
                <LockIcon className="h-6 w-6 text-blue-400" />
                <div className="absolute inset-0 rounded-full blur-md bg-blue-400/20"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Content Locked
              </h3>
              <p className="text-blue-200 mb-4">
                Upgrade to premium to access 20 more articles and exclusive
                insights.
              </p>
              <Link to="/subscription" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-700/30">
                Upgrade Now
              </Link>
            </div>}
        </div>
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <div className="rounded-xl border border-blue-800/50 bg-[#0c1018] p-6 mb-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Market Trends</h3>
                <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                  LIVE
                </span>
              </div>
              <CurrencyGraph />
              <div className="mt-4 space-y-3">
                <MarketItem name="Tesla (TSLA)" value="$245.32" change="+2.4%" isUp={true} />
                <MarketItem name="Rivian (RIVN)" value="$18.76" change="-0.8%" isUp={false} />
                <MarketItem name="Lucid (LCID)" value="$5.63" change="+1.2%" isUp={true} />
              </div>
              <div className="mt-4 pt-4 border-t border-blue-800/30">
                <Link to="/markets" className="text-sm flex items-center text-blue-400 hover:text-blue-300">
                  <span>View full market data</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5 ml-1" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-blue-800/50 bg-[#0c1018] p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
              <p className="text-blue-200 text-sm mb-4">
                Get the latest EV news delivered to your inbox daily.
              </p>
              <form className="space-y-3">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2.5 rounded-lg bg-blue-900/30 border border-blue-800/50 text-blue-100 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const MarketItem = ({
  name,
  value,
  change,
  isUp
}) => <div className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
    <span className="text-gray-200">{name}</span>
    <div className="flex items-center">
      <span className="text-white font-medium mr-2">{value}</span>
      <div className={`flex items-center ${isUp ? 'text-green-400' : 'text-red-400'}`}>
        {isUp ? <TrendingUpIcon className="h-3.5 w-3.5 mr-1" /> : <TrendingDownIcon className="h-3.5 w-3.5 mr-1" />}
        <span className="text-sm">{change}</span>
      </div>
    </div>
  </div>;
export default HomePage;
