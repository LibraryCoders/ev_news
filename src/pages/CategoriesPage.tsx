import React from 'react';
import { Link } from 'react-router-dom';
import { CarIcon, BatteryChargingIcon, FactoryIcon, LineChartIcon, GlobeIcon, CpuIcon, ArrowRightIcon, LockIcon } from 'lucide-react';
import NewsCard from '../components/HomePage/NewsCard';
const CategoriesPage = () => {
  const categories = [{
    id: 'vehicles',
    name: 'Electric Vehicles',
    icon: <CarIcon className="h-5 w-5" />,
    description: 'Latest updates on electric cars, trucks, and motorcycles',
    articles: [{
      id: 1,
      title: 'BMW Unveils New Electric SUV Lineup',
      description: 'German automaker announces three new electric SUV models for 2024.',
      image: 'https://images.unsplash.com/photo-1607892378625-46c332bb147b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'Today'
    }, {
      id: 2,
      title: 'Electric Trucks Market Analysis',
      description: 'In-depth look at the growing electric truck segment.',
      image: 'https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'Yesterday',
      premium: true
    }]
  }, {
    id: 'battery',
    name: 'Battery Technology',
    icon: <BatteryChargingIcon className="h-5 w-5" />,
    description: 'Breakthroughs in battery development and energy storage',
    articles: [{
      id: 3,
      title: 'New Solid-State Battery Breakthrough',
      description: 'Scientists achieve major milestone in solid-state battery development.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '2 days ago'
    }]
  }, {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: <FactoryIcon className="h-5 w-5" />,
    description: 'Production updates and factory developments',
    articles: [{
      id: 4,
      title: 'Gigafactory Expansion Plans',
      description: 'Major EV manufacturers announce new factory locations.',
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2082&q=80',
      date: '3 days ago'
    }]
  }, {
    id: 'market',
    name: 'Market Analysis',
    icon: <LineChartIcon className="h-5 w-5" />,
    description: 'Financial insights and market trends',
    articles: [{
      id: 5,
      title: 'Q3 EV Market Report',
      description: 'Comprehensive analysis of global EV market performance.',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '4 days ago',
      premium: true
    }]
  }, {
    id: 'global',
    name: 'Global Policy',
    icon: <GlobeIcon className="h-5 w-5" />,
    description: 'Regulatory updates and government initiatives',
    articles: [{
      id: 6,
      title: 'EU Announces New EV Incentives',
      description: 'European Union reveals enhanced EV adoption programs.',
      image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '5 days ago'
    }]
  }, {
    id: 'tech',
    name: 'Technology',
    icon: <CpuIcon className="h-5 w-5" />,
    description: 'Software updates and technological innovations',
    articles: [{
      id: 7,
      title: 'Next-Gen EV Operating Systems',
      description: 'Revolutionary software platforms for electric vehicles.',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '6 days ago',
      premium: true
    }]
  }];
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Explore EV News{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Categories
          </span>
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Dive deep into specific areas of electric vehicle news and innovations
        </p>
      </div>
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map(category => <div key={category.id} className="group relative backdrop-blur-xl bg-[#0c1018]/80 border border-blue-800/50 rounded-xl p-6 hover:bg-blue-900/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>
            <p className="text-blue-200 mb-4">{category.description}</p>
            <Link to={`/category/${category.id}`} className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              View articles
              <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>)}
      </div>
      {/* Latest Articles by Category */}
      {categories.map(category => <div key={category.id} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-blue-900/50 text-blue-400">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>
            <Link to={`/category/${category.id}`} className="text-sm flex items-center text-blue-400 hover:text-blue-300">
              View all
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.articles.map(article => <NewsCard key={article.id} article={article} />)}
          </div>
        </div>)}
    </div>;
};
export default CategoriesPage;