import React from 'react';
import { SquadsLogo, GiftIcon, PlusIcon } from './Icons';

interface HeaderProps {
  isSidebarExpanded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSidebarExpanded }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 bg-white dark:bg-[#191E24] border-t-2 border-[#A4F5C3] md:border-t-0 md:dark:border-t-2 md:border-b md:border-gray-200 md:dark:border-b-0 z-10 transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'md:left-64' : 'md:left-24'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between md:justify-end items-center h-16">
          <div className="md:hidden">
            <SquadsLogo />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <GiftIcon />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white font-semibold bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700">
              <span>NO</span>
              <div className="bg-[#A4F5C3] text-black rounded-full p-0.5">
                <PlusIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;