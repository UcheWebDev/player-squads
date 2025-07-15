
import React from 'react';
import { SuccessCheckIcon } from './Icons';

interface EntrySuccessScreenProps {
    totalEntry: number;
    potentialWinnings: number;
    onContinue: () => void;
}

const EntrySuccessScreen: React.FC<EntrySuccessScreenProps> = ({ totalEntry, potentialWinnings, onContinue }) => {
    return (
        <div className="fixed inset-0 bg-black/30 dark:bg-[#191E24]/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
            <div className="bg-white dark:bg-[#2A313C] rounded-2xl w-full max-w-md p-8 text-center flex flex-col items-center space-y-6">
                <SuccessCheckIcon className="w-24 h-24" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Entry Placed!</h2>
                <p className="text-gray-600 dark:text-gray-300">Your selections have been successfully submitted. Good luck!</p>
                
                <div className="w-full bg-gray-100 dark:bg-[#1F2937] p-4 rounded-xl space-y-3 text-left">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">Total Entry</span>
                        <span className="text-gray-900 dark:text-white font-bold text-lg">${totalEntry.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">Potential Winnings</span>
                        <span className="text-[#A4F5C3] font-bold text-lg">${potentialWinnings.toFixed(2)}</span>
                    </div>
                </div>

                <button 
                    onClick={onContinue}
                    className="w-full bg-[#A4F5C3] text-gray-900 font-bold py-3.5 rounded-lg hover:bg-[#8ee9ae] transition-colors"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default EntrySuccessScreen;