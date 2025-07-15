
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Wallet from './components/Wallet';
import Profile, { Theme } from './components/Profile';
import CreateEntryButton from './components/CreateEntryButton';
import CreateEntryScreen from './components/CreateEntryScreen';
import AuthScreen from './components/AuthScreen';
import Entries from './components/Entries';

export type Currency = 'NGN' | 'USDT';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('Market');
  const [isCreateScreenOpen, setIsCreateScreenOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark');
  const [currency, setCurrency] = useState<Currency>('NGN');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#191E24]';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-gray-50';
    }
  }, [theme]);

  const renderContent = () => {
    switch (activePage) {
      case 'Market':
        return <MainContent />;
      case 'Entries':
        return <Entries setActivePage={setActivePage} />;
      case 'Wallet':
        return <Wallet currency={currency} setCurrency={setCurrency} />;
      case 'Profile':
        return <Profile theme={theme} setTheme={setTheme} currency={currency} setCurrency={setCurrency} />;
      default:
        return <MainContent />;
    }
  };

  if (!isAuthenticated) {
    return <AuthScreen onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="text-gray-800 dark:text-gray-200 min-h-screen">
      <Header isSidebarExpanded={isSidebarExpanded} />
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <main className={`pt-16 pb-20 md:pb-0 transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'md:pl-64' : 'md:pl-24'}`}>
        {renderContent()}
      </main>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'Market' && !isCreateScreenOpen && <CreateEntryButton onClick={() => setIsCreateScreenOpen(true)} />}
      
      {isCreateScreenOpen && <CreateEntryScreen onClose={() => setIsCreateScreenOpen(false)} />}
    </div>
  );
};

export default App;