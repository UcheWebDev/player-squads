
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { SquadsLogo, ChevronDoubleLeftIcon } from './Icons';

const SidebarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1197 2.66699L2.66699 10.1197V21.8797L10.1197 29.3327L21.8797 29.3327L29.3327 21.8797V10.1197L21.8797 2.66699H10.1197Z" fill="#A4F5C3"/>
        <path d="M21.3333 16L17.3333 12V14.6667H12V17.3333H17.3333V20L21.3333 16Z" fill="#191E24"/>
        <path d="M10.6673 16L14.6673 20V17.3333H20.0007V14.6667H14.6673V12L10.6673 16Z" fill="#191E24"/>
    </svg>
);


interface SidebarProps {
    activePage: string;
    setActivePage: (page: string) => void;
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isExpanded, setIsExpanded }) => {
  return (
    <aside className={`hidden md:flex flex-col h-screen fixed top-0 left-0 bg-white dark:bg-[#191E24] border-r border-gray-200 dark:border-gray-700 z-20 transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-24'}`}>
        <div className={`h-16 flex items-center border-b border-gray-200 dark:border-gray-700 shrink-0 ${isExpanded ? 'px-4' : 'justify-center'}`}>
            {isExpanded ? <SquadsLogo /> : <SidebarIcon />}
        </div>

        <nav className="flex-grow flex flex-col p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
                <button
                    key={item.name}
                    onClick={() => setActivePage(item.name)}
                    className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 group relative ${
                        activePage === item.name ? 'bg-gray-100 dark:bg-[#2A313C] text-[#A4F5C3]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A313C] hover:text-gray-900 dark:hover:text-white'
                    } ${!isExpanded && 'justify-center'}`}
                    aria-label={item.name}
                >
                    {item.icon}
                    {isExpanded && <span className="ml-4 font-semibold">{item.name}</span>}
                    {activePage === item.name && (
                       <span className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#A4F5C3] rounded-r-full"></span>
                    )}
                    {!isExpanded && (
                        <span className="absolute left-full ml-4 w-auto min-w-max p-2 px-3 text-xs font-bold text-white bg-gray-900 rounded-md shadow-lg
                                          opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                            {item.name}
                        </span>
                    )}
                </button>
            ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 group relative text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A313C] hover:text-gray-900 dark:hover:text-white ${!isExpanded && 'justify-center'}`}
                aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            >
                <ChevronDoubleLeftIcon className={`w-6 h-6 transition-transform duration-300 ${!isExpanded && 'rotate-180'}`} />
                {isExpanded && <span className="ml-4 font-semibold">Collapse</span>}
            </button>
        </div>
    </aside>
  );
};

export default Sidebar;