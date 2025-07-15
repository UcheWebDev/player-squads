import React from 'react';
import { Player } from './types';
import { MarketIcon, EntriesIcon, WalletIcon, ProfileIcon, PhoneIllustration, PlayerSearchIllustration, EntriesChartIllustration } from './components/Icons';

export const FILTER_TABS: string[] = [
  'Shots',
  'Saves',
  'Passing Attempts',
  'Goals + Assists',
  'Tackles',
  'Shots On Target',
  'Dribble Attempts',
];

export const PLAYER_DATA: Player[] = [
  {
    id: 1,
    name: 'Emil Forsberg',
    team: 'New York Red Bulls',
    position: 'Midfielder',
    match: 'vs. Philadelphia Union',
    matchTime: '13th Jul, 12:30 AM',
    stat: 2.0,
    statType: 'Shots',
    imageUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    id: 2,
    name: 'Luis Suárez',
    team: 'Club Internacional de Fútbol Miami',
    position: 'Forward',
    match: 'vs. Nashville SC',
    matchTime: '13th Jul, 12:45 AM',
    stat: 2.5,
    statType: 'Shots',
    imageUrl: 'https://picsum.photos/id/1025/100/100',
  },
  {
    id: 3,
    name: 'Sam Surridge',
    team: 'Nashville SC',
    position: 'Forward',
    match: 'vs. Club Internacional de Fút...',
    matchTime: '13th Jul, 12:45 AM',
    stat: 2.5,
    statType: 'Shots',
    imageUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    id: 4,
    name: 'Hany Mukhtar',
    team: 'Nashville SC',
    position: 'Forward',
    match: 'vs. Club Internacional de Fút...',
    matchTime: '13th Jul, 12:45 AM',
    stat: 3.5,
    statType: 'Shots',
    imageUrl: 'https://picsum.photos/id/1013/100/100',
  },
   {
    id: 5,
    name: 'Lionel Messi',
    team: 'Club Internacional de Fútbol Miami',
    position: 'Forward',
    match: 'vs. Nashville SC',
    matchTime: '13th Jul, 12:45 AM',
    stat: 4.5,
    statType: 'Shots on Target',
    imageUrl: 'https://picsum.photos/id/1014/100/100',
  },
];

export const NAV_ITEMS = [
    { name: 'Market', icon: <MarketIcon /> },
    { name: 'Entries', icon: <EntriesIcon /> },
    { name: 'Wallet', icon: <WalletIcon /> },
    { name: 'Profile', icon: <ProfileIcon /> },
];

export const PROMO_CARDS_DATA = [
  {
    id: 1,
    title: 'How To Play on Squads.',
    description: 'Read articles and watch videos on all you need to know about the game.',
    illustration: <PhoneIllustration />,
    gradient: 'from-[#A4F5C3] to-[#5FE994]',
    titleColor: 'text-gray-800',
    descriptionColor: 'text-gray-700',
  },
  {
    id: 2,
    title: 'Discover New Players.',
    description: 'Search and filter to find the perfect additions to your fantasy squad.',
    illustration: <PlayerSearchIllustration />,
    gradient: 'from-[#87CEEB] to-[#4682B4]',
    titleColor: 'text-white',
    descriptionColor: 'text-sky-100',
  },
  {
    id: 3,
    title: 'Track Your Entries.',
    description: 'Follow your live entries and see your potential winnings in real-time.',
    illustration: <EntriesChartIllustration />,
    gradient: 'from-[#FFD54F] to-[#FF8C00]',
    titleColor: 'text-orange-900',
    descriptionColor: 'text-orange-900/80',
  },
];