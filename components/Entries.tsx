
import React, { useState, useMemo } from 'react';
import { PLAYER_DATA } from '../constants';
import { CloseIcon, ArrowUpIcon, ArrowDownIcon, EmptySlipIcon, TrophyIcon, XCircleIcon } from './Icons';
import { Player } from '../types';
import EntrySuccessScreen from './EntrySuccessScreen';
import EntryResultScreen, { FinishedEntry } from './EntryResultScreen';

interface EntriesProps {
    setActivePage: (page: string) => void;
}

interface SelectedEntry {
    player: Player;
    prediction: 'More' | 'Less';
    amount: number;
}

// Mock data for display
const initialEntries: SelectedEntry[] = [
    {
        player: PLAYER_DATA[0],
        prediction: 'More',
        amount: 25,
    },
    {
        player: PLAYER_DATA[4],
        prediction: 'Less',
        amount: 50,
    },
     {
        player: PLAYER_DATA[2],
        prediction: 'More',
        amount: 10,
    },
];

const MOCK_FINISHED_ENTRIES: FinishedEntry[] = [
    {
        id: 1,
        status: 'WON',
        date: 'Jul 10, 2024',
        entryAmount: 10,
        payout: 55.50,
        picks: [
            { player: PLAYER_DATA[0], prediction: 'More', statLine: 2.0, finalStat: 3, isCorrect: true, statType: 'Shots' },
            { player: PLAYER_DATA[1], prediction: 'Less', statLine: 2.5, finalStat: 1, isCorrect: true, statType: 'Shots' },
            { player: PLAYER_DATA[3], prediction: 'More', statLine: 3.5, finalStat: 4, isCorrect: true, statType: 'Shots' },
        ],
    },
    {
        id: 2,
        status: 'LOST',
        date: 'Jul 09, 2024',
        entryAmount: 20,
        payout: 0.00,
        picks: [
            { player: PLAYER_DATA[4], prediction: 'More', statLine: 4.5, finalStat: 2, isCorrect: false, statType: 'Shots on Target' },
            { player: PLAYER_DATA[2], prediction: 'Less', statLine: 2.5, finalStat: 3, isCorrect: false, statType: 'Shots' },
        ],
    },
    {
        id: 3,
        status: 'WON',
        date: 'Jul 08, 2024',
        entryAmount: 5,
        payout: 12.50,
        picks: [
            { player: PLAYER_DATA[1], prediction: 'Less', statLine: 2.5, finalStat: 2, isCorrect: true, statType: 'Shots' },
            { player: PLAYER_DATA[4], prediction: 'Less', statLine: 4.5, finalStat: 4, isCorrect: true, statType: 'Shots on Target' },
        ],
    },
];

const SelectedEntryCard: React.FC<{ 
    entry: SelectedEntry;
    onRemove: () => void;
    onAmountChange: (amount: number) => void;
}> = ({ entry, onRemove, onAmountChange }) => {
    const { player, prediction, amount } = entry;
    
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = Number(e.target.value);
        if (newAmount >= 0) {
            onAmountChange(newAmount);
        }
    };
    
    return (
        <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4 flex flex-col space-y-4 relative hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors">
            <button onClick={onRemove} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors z-10 p-1">
                <CloseIcon className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-3">
                <img
                    src={player.imageUrl}
                    alt={player.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                />
                <div>
                    <h3 className="text-md font-bold text-gray-900 dark:text-white">{player.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{player.match}</p>
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-[#1F2937] rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                     <div className={`p-1 rounded-full ${prediction === 'More' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {prediction === 'More' ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        <span className="uppercase">{prediction}</span> than {player.stat.toFixed(1)} {player.statType}
                    </p>
                </div>
            </div>
            
            <div>
                 <label htmlFor={`amount-${player.id}`} className="text-xs font-medium text-gray-500 dark:text-gray-400">Entry Amount</label>
                 <div className="relative mt-1">
                     <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 font-semibold">$</span>
                     <input
                        type="number"
                        id={`amount-${player.id}`}
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-700 rounded-lg py-2.5 pl-7 pr-4 text-gray-900 dark:text-white font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                     />
                 </div>
            </div>
        </div>
    );
};


const FinishedEntryCard: React.FC<{
    entry: FinishedEntry;
    onClick: () => void;
}> = ({ entry, onClick }) => {
    const isWin = entry.status === 'WON';
    return (
        <button onClick={onClick} className="w-full text-left bg-white dark:bg-[#2A313C] rounded-xl p-4 flex flex-col space-y-3 hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{entry.picks.length} Picks</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{entry.date}</p>
                </div>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-bold ${isWin ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isWin ? <TrophyIcon className="w-4 h-4" /> : <XCircleIcon className="w-4 h-4" />}
                    <span>{entry.status}</span>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Entry</p>
                    <p className="font-semibold text-gray-900 dark:text-white">${entry.entryAmount.toFixed(2)}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Payout</p>
                    <p className={`font-semibold ${isWin ? 'text-[#A4F5C3]' : 'text-gray-900 dark:text-white'}`}>${entry.payout.toFixed(2)}</p>
                </div>
            </div>
        </button>
    );
};


const Entries: React.FC<EntriesProps> = ({ setActivePage }) => {
    const [entries, setEntries] = useState<SelectedEntry[]>(initialEntries);
    const [view, setView] = useState<'slip' | 'success'>('slip');
    const [activeTab, setActiveTab] = useState<'Open' | 'Finished'>('Open');
    const [selectedFinishedEntry, setSelectedFinishedEntry] = useState<FinishedEntry | null>(null);
    
    const handleRemoveEntry = (player_id: number) => {
        setEntries(prev => prev.filter(entry => entry.player.id !== player_id));
    };

    const handleAmountChange = (player_id: number, newAmount: number) => {
        setEntries(prev => prev.map(entry => 
            entry.player.id === player_id ? { ...entry, amount: newAmount } : entry
        ));
    };

    const totalEntry = useMemo(() => {
        return entries.reduce((sum, entry) => sum + entry.amount, 0);
    }, [entries]);

    const potentialWinnings = useMemo(() => {
        if (entries.length === 0) return 0;
        const multiplier = 1 + (entries.length * 1.5);
        return totalEntry * multiplier;
    }, [totalEntry, entries]);

    const handlePlaceEntry = () => {
        if (entries.length > 0 && totalEntry > 0) {
            setView('success');
        }
    };
    
    const handleContinue = () => {
        setEntries([]);
        setView('slip');
        setActivePage('Market');
    };
    
    return (
        <>
            {view === 'success' && (
                <EntrySuccessScreen 
                    totalEntry={totalEntry}
                    potentialWinnings={potentialWinnings}
                    onContinue={handleContinue}
                />
            )}
            
            {selectedFinishedEntry && (
                <EntryResultScreen 
                    entry={selectedFinishedEntry}
                    onClose={() => setSelectedFinishedEntry(null)}
                />
            )}

            <div className="max-w-4xl mx-auto px-4 space-y-8 py-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Selections</h1>
                
                 <div className="flex space-x-1 bg-gray-200 dark:bg-[#1F2937] p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab('Open')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Open' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
                    >
                        Open
                    </button>
                    <button
                        onClick={() => setActiveTab('Finished')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Finished' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
                    >
                        Finished
                    </button>
                 </div>

                {activeTab === 'Open' && (
                    <>
                        {entries.length > 0 ? (
                            <div className="space-y-4">
                                {entries.map((entry) => (
                                    <SelectedEntryCard 
                                        key={entry.player.id} 
                                        entry={entry}
                                        onRemove={() => handleRemoveEntry(entry.player.id)}
                                        onAmountChange={(amount) => handleAmountChange(entry.player.id, amount)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-100 dark:bg-[#2A313C] rounded-lg flex flex-col items-center justify-center">
                                <EmptySlipIcon />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Your Bet Slip is Empty</h3>
                                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Go to the Market to make your first selection.</p>
                            </div>
                        )}
                        
                        {entries.length > 0 && (
                            <div className="sticky bottom-24 md:bottom-4 bg-white/80 dark:bg-[#1F2937]/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-4 rounded-xl space-y-4 shadow-lg">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">Total Entry</span>
                                    <span className="text-gray-900 dark:text-white font-bold text-lg">${totalEntry.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">Potential Winnings</span>
                                    <span className="text-[#A4F5C3] font-bold text-lg">${potentialWinnings.toFixed(2)}</span>
                                </div>
                                <button 
                                    onClick={handlePlaceEntry}
                                    className="w-full bg-[#A4F5C3] text-gray-900 font-bold py-3.5 rounded-lg hover:bg-[#8ee9ae] transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed"
                                    disabled={totalEntry === 0}
                                >
                                    Place Entry
                                </button>
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'Finished' && (
                    <div className="space-y-4">
                        {MOCK_FINISHED_ENTRIES.length > 0 ? (
                            MOCK_FINISHED_ENTRIES.map(entry => (
                                <FinishedEntryCard 
                                    key={entry.id}
                                    entry={entry}
                                    onClick={() => setSelectedFinishedEntry(entry)}
                                />
                            ))
                        ) : (
                            <div className="text-center py-20 bg-gray-100 dark:bg-[#2A313C] rounded-lg flex flex-col items-center justify-center">
                                <EmptySlipIcon />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">No Finished Entries</h3>
                                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Your completed entries will appear here.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Entries;