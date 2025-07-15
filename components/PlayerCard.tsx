
import React from 'react';
import { Player } from '../types';
import { ArrowUpIcon, ArrowDownIcon, SwapIcon } from './Icons';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <img
          src={player.imageUrl}
          alt={player.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{player.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {player.team} - {player.position}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {player.match} on <span className="text-gray-600 dark:text-gray-300">{player.matchTime}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="bg-gray-100 dark:bg-[#222831] rounded-lg p-2 flex flex-col items-center justify-center w-24 h-24">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{player.stat.toFixed(1)}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">{player.statType}</p>
          <div className="mt-2 bg-[#A4F5C3]/20 text-[#A4F5C3] rounded-md p-1">
             <SwapIcon />
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <button className="flex items-center justify-center space-x-2 w-28 py-2.5 bg-gray-200 dark:bg-[#374151] rounded-md text-gray-800 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
            <span>More</span>
            <ArrowUpIcon />
          </button>
          <button className="flex items-center justify-center space-x-2 w-28 py-2.5 bg-gray-200 dark:bg-[#374151] rounded-md text-gray-800 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
            <span>Less</span>
            <ArrowDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;