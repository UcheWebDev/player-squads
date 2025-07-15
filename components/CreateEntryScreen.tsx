
import React, { useState } from 'react';
import { CloseIcon, SearchIcon } from './Icons';
import { FILTER_TABS } from '../constants';

interface CreateEntryScreenProps {
    onClose: () => void;
}

const UPCOMING_EVENTS = [
    { id: 1, teamA: 'NY Red Bulls', teamB: 'Philadelphia', time: 'Jul 13, 12:30 AM' },
    { id: 2, teamA: 'Nashville SC', teamB: 'Inter Miami', time: 'Jul 13, 12:45 AM' },
    { id: 3, teamA: 'LA Galaxy', teamB: 'LAFC', time: 'Jul 13, 03:00 AM' },
    { id: 4, teamA: 'Atlanta United', teamB: 'Orlando City', time: 'Jul 14, 11:00 PM' },
];

const CreateEntryScreen: React.FC<CreateEntryScreenProps> = ({ onClose }) => {
    const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

    return (
        <div className="fixed inset-0 bg-black/30 dark:bg-[#191E24]/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in p-4 md:p-0">
            <div className="bg-white dark:bg-[#1F2937] w-full h-full md:max-w-2xl md:h-auto md:max-h-[90vh] md:rounded-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Entry</h2>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A313C] hover:text-gray-800 dark:hover:text-white transition-colors">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                    {/* Search Bar */}
                    <div>
                        <label htmlFor="player-search" className="text-sm font-medium text-gray-600 dark:text-gray-300">Search Player</label>
                        <div className="flex items-center space-x-2 mt-1">
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon />
                                </div>
                                <input
                                    type="text"
                                    id="player-search"
                                    placeholder="Search for a player by name..."
                                    className="w-full bg-gray-100 dark:bg-[#2A313C] border border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                                />
                            </div>
                            <button className="bg-gray-200 hover:bg-gray-300 dark:bg-[#374151] dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Upcoming Events</h3>
                        <div className="space-y-2">
                            {UPCOMING_EVENTS.map(event => (
                                <div key={event.id} className="bg-gray-100 dark:bg-[#2A313C] p-3 rounded-lg flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-1 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-semibold">{event.teamA} vs {event.teamB}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{event.time}</p>
                                        </div>
                                    </div>
                                    <button className="text-xs font-semibold bg-gray-200 hover:bg-gray-300 dark:bg-[#374151] dark:hover:bg-gray-600 text-gray-800 dark:text-white py-1 px-3 rounded-md transition-colors">Select</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Choose Metric */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Choose Metric</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {FILTER_TABS.map(metric => (
                                <button
                                    key={metric}
                                    onClick={() => setSelectedMetric(metric)}
                                    className={`p-3 text-center text-sm font-semibold rounded-lg transition-colors ${
                                        selectedMetric === metric
                                            ? 'bg-[#A4F5C3] text-gray-900'
                                            : 'bg-gray-100 dark:bg-[#2A313C] text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#343d4b]'
                                    }`}
                                >
                                    {metric}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 bg-white dark:bg-[#1F2937] md:rounded-b-2xl">
                    <button
                        className="w-full bg-[#A4F5C3] text-gray-900 font-bold py-3.5 rounded-lg hover:bg-[#8ee9ae] transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                        Save Entry
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEntryScreen;