
import React, { useState } from 'react';
import { 
    UserCircleIcon, 
    BellIcon, 
    QuestionMarkCircleIcon, 
    LogoutIcon, 
    ChevronLeftIcon, 
    MailIcon, 
    PhoneIcon, 
    BookOpenIcon, 
    ChevronRightIcon,
    PenIcon,
    SunIcon,
    MoonIcon,
    WalletIcon
} from './Icons';
import { Currency } from '../App';

export type Theme = 'light' | 'dark';

interface ProfileProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    currency: Currency;
    setCurrency: (currency: Currency) => void;
}

const AccountSettingsScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState('John Doe');
    const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
    
    // Store original values to be able to cancel
    const [originalFullName, setOriginalFullName] = useState('John Doe');
    const [originalPhoneNumber, setOriginalPhoneNumber] = useState('+1 (555) 123-4567');

    const handleEdit = () => {
        setOriginalFullName(fullName);
        setOriginalPhoneNumber(phoneNumber);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFullName(originalFullName);
        setPhoneNumber(originalPhoneNumber);
        setIsEditing(false);
    };
    
    const handleSave = () => {
        // Here you would typically make an API call to save data
        console.log('Saving data:', { fullName, phoneNumber });
        setIsEditing(false);
    };

    return (
        <div className="animate-fade-in">
            <div className="relative flex justify-center items-center mb-8">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
                {!isEditing && (
                    <button onClick={handleEdit} className="absolute right-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <PenIcon className="h-5 w-5" />
                    </button>
                )}
            </div>
            
            <div className="bg-white dark:bg-[#2A313C] rounded-xl divide-y divide-gray-200 dark:divide-gray-700">
                <div className="p-4 flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white">Full Name</span>
                    {isEditing ? (
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-auto max-w-[60%] bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-1.5 px-3 text-gray-900 dark:text-white text-right placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#A4F5C3]/50"
                            aria-label="Full Name"
                        />
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400">{fullName}</span>
                    )}
                </div>
                <div className="p-4 flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white">Email Address</span>
                    <span className="text-gray-500 dark:text-gray-400">john.doe@example.com</span>
                </div>
                <div className="p-4 flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white">Phone Number</span>
                    {isEditing ? (
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-auto max-w-[60%] bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-1.5 px-3 text-gray-900 dark:text-white text-right placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#A4F5C3]/50"
                            aria-label="Phone Number"
                        />
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400">{phoneNumber}</span>
                    )}
                </div>
            </div>

            {isEditing && (
                <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                     <button 
                        onClick={handleCancel}
                        className="w-full sm:w-1/2 bg-gray-200 dark:bg-[#374151] text-gray-800 dark:text-white font-bold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                     >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSave}
                        className="w-full sm:w-1/2 bg-[#A4F5C3] text-gray-900 font-bold py-3 rounded-lg hover:bg-[#8ee9ae] transition-colors"
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
};

const HelpSupportScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const supportOptions = [
        { icon: <MailIcon />, label: 'Email Support', value: 'support@squads.app' },
        { icon: <PhoneIcon />, label: 'Phone Support', value: '+1-800-SQUADS-HELP' },
    ];
    
    const quickLinks = [
        { icon: <QuestionMarkCircleIcon />, label: 'Frequently Asked Questions' },
        { icon: <BookOpenIcon />, label: 'How to Play Guide' },
    ];

    return (
        <div className="animate-fade-in">
             <div className="relative flex justify-center items-center mb-8">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
            </div>
            
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">Contact Us</h2>
                    <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4 space-y-4">
                        {supportOptions.map(option => (
                             <div key={option.label} className="flex items-center justify-between">
                                 <div className="flex items-center space-x-4">
                                     <div className="text-gray-500 dark:text-gray-400">{option.icon}</div>
                                     <span className="text-gray-900 dark:text-white">{option.label}</span>
                                 </div>
                                 <span className="text-[#A4F5C3] font-semibold">{option.value}</span>
                             </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">Quick Links</h2>
                    <div className="bg-white dark:bg-[#2A313C] rounded-xl divide-y divide-gray-200 dark:divide-gray-700">
                         {quickLinks.map(link => (
                             <button key={link.label} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors first:rounded-t-xl last:rounded-b-xl">
                                <div className="flex items-center space-x-4">
                                     <div className="text-gray-500 dark:text-gray-400">{link.icon}</div>
                                     <span className="text-gray-900 dark:text-white">{link.label}</span>
                                 </div>
                                 <div className="text-gray-400 dark:text-gray-500">
                                    <ChevronRightIcon />
                                 </div>
                             </button>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface PreferencesScreenProps {
    onBack: () => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    currency: Currency;
    setCurrency: (currency: Currency) => void;
}


const PreferencesScreen: React.FC<PreferencesScreenProps> = ({ onBack, theme, setTheme, currency, setCurrency }) => {
    return (
        <div className="animate-fade-in">
            <div className="relative flex justify-center items-center mb-8">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Preferences</h1>
            </div>
            
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">Appearance</h2>
                    <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4">
                        <div className="flex items-center justify-between">
                             <div className="flex items-center space-x-4">
                                <div className="text-gray-600 dark:text-gray-400">
                                    {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                                </div>
                                <span className="text-gray-900 dark:text-white font-medium">Theme</span>
                            </div>
                            <div className="flex space-x-1 bg-gray-200 dark:bg-[#1F2937] p-1 rounded-lg">
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`w-24 py-1.5 text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 ${
                                        theme === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:bg-gray-300/50'
                                    }`}
                                >
                                    <SunIcon className="w-5 h-5" />
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`w-24 py-1.5 text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 ${
                                        theme === 'dark' ? 'bg-[#37475a] dark:bg-[#2A313C] text-white shadow-sm' : 'text-gray-400 hover:text-white/10'
                                    }`}
                                >
                                    <MoonIcon className="w-5 h-5" />
                                    Dark
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">Currency</h2>
                    <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4">
                        <div className="flex items-center justify-between">
                             <div className="flex items-center space-x-4">
                                <div className="text-gray-600 dark:text-gray-400">
                                    <WalletIcon />
                                </div>
                                <span className="text-gray-900 dark:text-white font-medium">Default Currency</span>
                            </div>
                            <div className="flex space-x-1 bg-gray-200 dark:bg-[#1F2937] p-1 rounded-lg">
                                <button
                                    onClick={() => setCurrency('NGN')}
                                    className={`w-24 py-1.5 text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 ${
                                        currency === 'NGN' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'
                                    }`}
                                >
                                    NGN (₦)
                                </button>
                                <button
                                    onClick={() => setCurrency('USDT')}
                                    className={`w-24 py-1.5 text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 ${
                                        currency === 'USDT' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'
                                    }`}
                                >
                                    USDT ($)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const ProfileOption: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void; }> = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="flex items-center w-full space-x-4 p-4 bg-white dark:bg-[#2A313C] rounded-lg hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors">
        <div className="text-gray-500 dark:text-gray-400">
            {icon}
        </div>
        <span className="text-gray-900 dark:text-white font-semibold">{label}</span>
    </button>
);


const Profile: React.FC<ProfileProps> = ({ theme, setTheme, currency, setCurrency }) => {
    const [view, setView] = useState<'main' | 'account' | 'help' | 'preferences'>('main');

    const MainProfileScreen = () => (
        <div className="animate-fade-in space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
            
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <img src="https://picsum.photos/id/1005/200/200" alt="User Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-[#A4F5C3]" />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                    <p className="text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                </div>
            </div>

            <div className="space-y-3">
                <ProfileOption icon={<UserCircleIcon />} label="Account Settings" onClick={() => setView('account')} />
                <ProfileOption icon={<BellIcon />} label="Preferences" onClick={() => setView('preferences')} />
                <ProfileOption icon={<QuestionMarkCircleIcon />} label="Help & Support" onClick={() => setView('help')} />
                <ProfileOption icon={<LogoutIcon />} label="Log Out" />
            </div>
        </div>
    );

    const renderContent = () => {
        switch(view) {
            case 'account':
                return <AccountSettingsScreen onBack={() => setView('main')} />;
            case 'help':
                return <HelpSupportScreen onBack={() => setView('main')} />;
            case 'preferences':
                return <PreferencesScreen onBack={() => setView('main')} theme={theme} setTheme={setTheme} currency={currency} setCurrency={setCurrency} />;
            case 'main':
            default:
                return <MainProfileScreen />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {renderContent()}
        </div>
    );
};

export default Profile;