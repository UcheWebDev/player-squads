
import React from 'react';
import { CloseIcon, TrophyIcon, XCircleIcon, ArrowUpIcon, ArrowDownIcon } from './Icons';
import { Player } from '../types';

interface FinishedPick {
  player: Player;
  prediction: 'More' | 'Less';
  statLine: number;
  finalStat: number;
  isCorrect: boolean;
  statType: string;
}

export interface FinishedEntry {
  id: number;
  status: 'WON' | 'LOST';
  picks: FinishedPick[];
  date: string;
  entryAmount: number;
  payout: number;
}

interface EntryResultScreenProps {
  entry: FinishedEntry;
  onClose: () => void;
}

const ResultPickCard: React.FC<{ pick: FinishedPick }> = ({ pick }) => {
    const { player, prediction, statLine, finalStat, isCorrect } = pick;
    const resultColor = isCorrect ? 'text-green-400 border-green-500/50' : 'text-red-400 border-red-500/50';
    
    return (
        <div className="bg-gray-100 dark:bg-[#1F2937] p-3 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img src={player.imageUrl} alt={player.name} className="w-10 h-10 rounded-full object-cover"/>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{player.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                           {prediction} {statLine} {pick.statType}
                        </p>
                    </div>
                </div>
                 <div className={`text-sm font-semibold border-2 rounded-full px-3 py-1 ${resultColor}`}>
                     Final: {finalStat}
                 </div>
            </div>
        </div>
    );
};

const EntryResultScreen: React.FC<EntryResultScreenProps> = ({ entry, onClose }) => {
    const isWin = entry.status === 'WON';
    
    return (
        <div className="fixed inset-0 bg-black/30 dark:bg-[#191E24]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-[#2A313C] w-full max-w-md rounded-2xl flex flex-col max-h-[90vh] shadow-2xl">
                {/* Header */}
                <div className="relative p-6 text-center border-b border-gray-200 dark:border-gray-700">
                     <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors p-1 z-10">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${isWin ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {isWin 
                            ? <TrophyIcon className="w-10 h-10 text-green-400" /> 
                            : <XCircleIcon className="w-10 h-10 text-red-400" />
                        }
                    </div>
                    <h2 className={`text-3xl font-bold mt-4 ${isWin ? 'text-green-400' : 'text-red-400'}`}>
                        {isWin ? 'You Won!' : 'You Lost'}
                    </h2>
                </div>

                {/* Content */}
                <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                    <div className="bg-gray-100 dark:bg-[#1F2937] p-4 rounded-xl flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Entry Amount</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">${entry.entryAmount.toFixed(2)}</p>
                        </div>
                         <div className="text-right">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Total Payout</p>
                            <p className={`text-lg font-bold ${isWin ? 'text-[#A4F5C3]' : 'text-gray-900 dark:text-white'}`}>${entry.payout.toFixed(2)}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-3">Your Picks</h3>
                        <div className="space-y-2">
                           {entry.picks.map((pick, index) => (
                               <ResultPickCard key={index} pick={pick} />
                           ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2A313C] rounded-b-2xl">
                    <button 
                        onClick={onClose}
                        className="w-full bg-[#A4F5C3] text-gray-900 font-bold py-3 rounded-lg hover:bg-[#8ee9ae] transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EntryResultScreen;