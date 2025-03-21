import React from 'react';
import { ArrowRightIcon, LockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface NewsCardProps {
  article: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    premium?: boolean;
  };
}
const NewsCard = ({
  article
}: NewsCardProps) => {
  return <div className="group relative rounded-xl overflow-hidden border border-blue-800/30 bg-gradient-to-b from-blue-900/20 to-[#0c1018] backdrop-blur-sm h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {article.premium && <div className="absolute top-3 right-3 flex items-center space-x-1 bg-blue-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-blue-300 font-medium">
            <LockIcon className="h-3 w-3" />
            <span>PREMIUM</span>
          </div>}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="text-xs text-blue-400 mb-2">{article.date}</div>
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-3 mb-4">
            {article.description}
          </p>
        </div>
        <Link to={article.premium ? '/subscription' : `/article/${article.id}`} className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
          {article.premium ? 'Unlock Article' : 'Read More'}
          <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </div>;
};
export default NewsCard;