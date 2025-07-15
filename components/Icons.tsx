
import React from 'react';

export const SquadsLogo = () => (
    <div className="flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1197 2.66699L2.66699 10.1197V21.8797L10.1197 29.3327L21.8797 29.3327L29.3327 21.8797V10.1197L21.8797 2.66699H10.1197Z" fill="#A4F5C3"/>
            <path d="M21.3333 16L17.3333 12V14.6667H12V17.3333H17.3333V20L21.3333 16Z" fill="#191E24"/>
            <path d="M10.6673 16L14.6673 20V17.3333H20.0007V14.6667H14.6673V12L10.6673 16Z" fill="#191E24"/>
        </svg>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">PlayerGuru</span>
        <span className="bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white text-xs font-semibold px-2 py-1 rounded-md">Beta</span>
    </div>
);

export const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V9.328a2.25 2.25 0 00-.659-1.591l-5.172-5.172a2.25 2.25 0 00-1.591-.659H9.328a2.25 2.25 0 00-1.591.659L2.565 7.737a2.25 2.25 0 00-.659 1.591v4.936a2.25 2.25 0 00.659 1.591l5.172 5.172a2.25 2.25 0 001.591.659h4.936a2.25 2.25 0 001.591-.659l5.172-5.172A2.25 2.25 0 0021 12z" />
    </svg>
);

export const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);


export const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v2m0-2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m6-14v6m0-6a2 2 0 100 4m0-4a2 2 0 110 4m0 4v6m0-6a2 2 0 100 4m0-4a2 2 0 110 4" />
  </svg>
);


export const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

export const ArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 12L3 8m4 8l4-4m-8 8h10m4-12v12m0-12l4 4m-4-4l-4 4" />
    </svg>
);

export const PhoneIllustration = () => (
    <div className="relative w-24 h-36">
        <div className="absolute -right-2 top-4 w-24 h-36 bg-[#191E24]/30 rounded-2xl transform -rotate-12"></div>
        <div className="absolute right-0 top-0 w-24 h-36 bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center p-2">
            <div className="w-8 h-1 bg-gray-600/50 rounded-full mt-1"></div>
            <div className="mt-4 w-full flex flex-col gap-2">
                <div className="flex justify-between items-center bg-[#A4F5C3]/50 p-2 rounded-lg">
                    <span className="text-sm font-bold text-green-900">More</span>
                    <ArrowUpIcon/>
                </div>
                 <div className="flex justify-between items-center bg-[#191E24]/30 p-2 rounded-lg">
                    <span className="text-sm font-bold text-white">Less</span>
                    <ArrowDownIcon/>
                </div>
            </div>
        </div>
    </div>
);

export const MarketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const EntriesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

export const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);

export const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

export const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export const ChevronDoubleLeftIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
    </svg>
);

export const PlayerSearchIllustration = () => (
    <div className="relative w-24 h-36 flex items-center justify-center">
       <div className="absolute w-28 h-28 bg-white/20 rounded-full"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a6 6 0 016 6H2a6 6 0 016-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5L19 16m-2.5-2.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
        </svg>
    </div>
);

export const EntriesChartIllustration = () => (
    <div className="relative w-24 h-36 flex items-center justify-center">
        <div className="absolute w-28 h-28 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full"></div>
        <div className="relative flex items-end gap-2 h-20">
            <div className="w-4 h-1/2 bg-orange-900/80 rounded-t-sm"></div>
            <div className="w-4 h-full bg-orange-900/80 rounded-t-sm"></div>
            <div className="w-4 h-3/4 bg-orange-900/80 rounded-t-sm"></div>
        </div>
    </div>
);

export const DepositIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

export const WithdrawIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
);

export const TransactionUpIcon = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0L7 10m5-5l5 5" />
    </svg>
);

export const TransactionDownIcon = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-5-5m5 5l5-5" />
    </svg>
);

export const UserCircleIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const BellIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export const QuestionMarkCircleIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LogoutIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

export const CopyIcon = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const QrCodePlaceholder = ({ className = "w-48 h-48" }) => (
    <div className={`p-4 bg-gray-200 dark:bg-[#2A313C] rounded-lg ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="100" height="100" rx="4" className="fill-gray-100 dark:fill-[#1F2937]"/>
            <rect x="15" y="15" width="25" height="25" rx="4" className="fill-gray-800 dark:fill-white"/>
            <rect x="20" y="20" width="15" height="15" rx="2" className="fill-gray-100 dark:fill-[#1F2937]"/>
            <rect x="60" y="15" width="25" height="25" rx="4" className="fill-gray-800 dark:fill-white"/>
            <rect x="65" y="20" width="15" height="15" rx="2" className="fill-gray-100 dark:fill-[#1F2937]"/>
            <rect x="15" y="60" width="25" height="25" rx="4" className="fill-gray-800 dark:fill-white"/>
            <rect x="20" y="65" width="15" height="15" rx="2" className="fill-gray-100 dark:fill-[#1F2937]"/>
            <path d="M60 60h5v5h-5z M65 65h5v5h-5z M60 70h5v5h-5z M65 75h5v5h-5z M60 80h5v5h-5z M70 60h5v5h-5z M75 65h5v5h-5z M70 70h5v5h-5z M75 75h5v5h-5z M70 80h5v5h-5z M80 60h5v5h-5z M85 65h5v5h-5z M80 70h5v5h-5z M85 75h5v5h-5z M80 80h5v5h-5z" className="fill-gray-800 dark:fill-white"/>
        </svg>
    </div>
);

export const BubbleBackground = () => (
    <svg className="absolute inset-0 w-full h-full mix-blend-soft-light opacity-70" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
            <filter id="bubble-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            </filter>
        </defs>
        <g filter="url(#bubble-blur)">
            <circle cx="20%" cy="30%" r="90" fill="white" />
            <circle cx="80%" cy="70%" r="130" fill="white" />
            <circle cx="5%" cy="85%" r="70" fill="white" />
            <circle cx="95%" cy="15%" r="80" fill="white" />
        </g>
    </svg>
);

export const MailIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PhoneIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const PenIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);

export const BookOpenIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

export const CloseIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const SuccessCheckIcon = ({ className = "w-24 h-24" }) => (
    <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="48" cy="48" r="48" fill="url(#paint0_linear_success)"/>
        <path d="M29 48.4286L41.8571 61L67 36" stroke="#191E24" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
            <linearGradient id="paint0_linear_success" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A4F5C3"/>
                <stop offset="1" stopColor="#5FE994"/>
            </linearGradient>
        </defs>
    </svg>
);

export const EmptySlipIcon = ({ className = "w-24 h-24 text-gray-400 dark:text-gray-600" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const GoogleIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.485 11.54C34.643 7.936 29.645 6 24 6C12.955 6 4 14.955 4 26s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039L38.485 11.54C34.643 7.936 29.645 6 24 6C16.318 6 9.656 9.736 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 46c5.94 0 11.219-1.807 15.18-4.814l-6.357-4.938C30.607 37.266 27.536 38 24 38c-5.22 0-9.613-3.108-11.384-7.468l-6.726 4.937C9.094 42.43 15.903 46 24 46z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.447-2.292 4.487-4.244 5.996l6.357 4.938C42.863 36.317 44 31.424 44 26c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
);

export const TrophyIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 010-13.5h9a9.75 9.75 0 010 13.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V15m-1.5-9h3" />
    </svg>
);

export const XCircleIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SunIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);