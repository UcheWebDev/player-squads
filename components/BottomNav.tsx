
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface BottomNavProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#191E24] border-t border-gray-200 dark:border-gray-700 z-10 md:hidden">
      <nav className="max-w-4xl mx-auto px-4 flex justify-around items-center h-20">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`relative flex flex-col items-center justify-center space-y-1 h-16 w-20 rounded-lg transition-colors duration-200 ${
              activePage === item.name 
                ? 'bg-gray-100 dark:bg-[#2A313C] text-[#A4F5C3]' 
                : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A313C] hover:text-gray-800 dark:hover:text-white'
            }`}
          >
            {activePage === item.name && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#A4F5C3] rounded-b-full"></span>
            )}
            {item.icon}
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;