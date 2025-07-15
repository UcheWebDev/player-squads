import React, { useState, useEffect } from 'react';
import { PLAYER_DATA, FILTER_TABS } from '../constants';
import PlayerCard from './PlayerCard';
import { SearchIcon, FilterIcon } from './Icons';
import PromotionalSlider from './PromotionalSlider';
import { PromotionalSliderSkeleton, FilterTabsSkeleton, PlayerCardSkeleton } from './Skeletons';

const FilterTabs: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => (
    <div className="overflow-x-auto whitespace-nowrap py-4 -mx-4 px-4 scrollbar-hide">
      <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-semibold transition-colors duration-200 relative ${
              activeTab === tab
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A4F5C3] rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );


const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FILTER_TABS[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const SearchAndFilterBar = () => (
     <div className="flex items-center space-x-2 mt-2">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search for a player or team"
            className="w-full bg-white dark:bg-[#2A313C] border border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
          />
        </div>
        <button className="p-3 bg-white dark:bg-[#2A313C] border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white">
          <FilterIcon />
        </button>
        <button className="px-6 py-3 bg-white dark:bg-[#2A313C] border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white font-semibold">
          Load Code
        </button>
      </div>
  );

  if (loading) {
      return (
         <div className="max-w-4xl mx-auto px-4 space-y-6">
            <SearchAndFilterBar />
            <PromotionalSliderSkeleton />
            <FilterTabsSkeleton />
            <div className="space-y-3">
                {[...Array(3)].map((_, i) => <PlayerCardSkeleton key={i} />)}
            </div>
         </div>
      )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <SearchAndFilterBar />
      
      <PromotionalSlider />

      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="space-y-3">
        {PLAYER_DATA.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;