
import React, { useState } from 'react';
import { SquadsLogo, GoogleIcon, ChevronLeftIcon } from './Icons';

interface AuthScreenProps {
    onLoginSuccess: () => void;
}

const TermsScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="w-full max-w-2xl text-left animate-fade-in bg-white dark:bg-[#1F2937] p-6 rounded-2xl h-full max-h-[90vh] flex flex-col shadow-2xl">
        <div className="relative flex justify-center items-center mb-6 flex-shrink-0">
            <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <ChevronLeftIcon />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        </div>
        <div className="text-gray-600 dark:text-gray-300 overflow-y-auto flex-grow pr-2 space-y-4 text-sm">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1. Introduction</h2>
                <p>Welcome to Squads! These terms and conditions outline the rules and regulations for the use of Squads' Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use Squads if you do not agree to take all of the terms and conditions stated on this page.</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">2. Intellectual Property Rights</h2>
                <p>Other than the content you own, under these Terms, Squads and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">3. Restrictions</h2>
                <p>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website.</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">4. Your Content</h2>
                <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Squads a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">5. No warranties</h2>
                <p>This Website is provided “as is,” with all faults, and Squads express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">6. Limitation of liability</h2>
                <p>In no event shall Squads, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Squads, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            </div>
        </div>
    </div>
);

const PrivacyPolicyScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="w-full max-w-2xl text-left animate-fade-in bg-white dark:bg-[#1F2937] p-6 rounded-2xl h-full max-h-[90vh] flex flex-col shadow-2xl">
        <div className="relative flex justify-center items-center mb-6 flex-shrink-0">
            <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <ChevronLeftIcon />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>
        <div className="text-gray-600 dark:text-gray-300 overflow-y-auto flex-grow pr-2 space-y-4 text-sm">
             <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1. Information We Collect</h2>
                <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address.</p>
            </div>
             <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">2. How We Use Collected Information</h2>
                <p>Squads may collect and use Users personal information for the following purposes: To run and operate our Site; To improve customer service; To personalize user experience; To send periodic emails.</p>
            </div>
             <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">3. How We Protect Your Information</h2>
                <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
            </div>
             <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">4. Sharing Your Personal Information</h2>
                <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
            </div>
             <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">5. Your Acceptance of These Terms</h2>
                <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
            </div>
        </div>
    </div>
);


const AuthScreen: React.FC<AuthScreenProps> = ({ onLoginSuccess }) => {
    const [view, setView] = useState<'main' | 'terms' | 'privacy'>('main');

    const MainLoginView = () => (
         <div className="w-full max-w-sm text-center animate-fade-in">
            <div className="flex justify-center mb-8">
                <SquadsLogo />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to PlayerGuru</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-10">Your daily fantasy sports companion.</p>

            <button
                onClick={onLoginSuccess}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-md border border-gray-200 dark:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-white/30"
            >
                <GoogleIcon className="w-6 h-6" />
                <span>Login with Google</span>
            </button>
            
            <p className="text-xs text-gray-500 mt-8">
                By continuing, you agree to Our' <button onClick={() => setView('terms')} className="underline hover:text-gray-800 dark:hover:text-gray-300">Terms of Service</button> and <button onClick={() => setView('privacy')} className="underline hover:text-gray-800 dark:hover:text-gray-300">Privacy Policy</button>.
            </p>
        </div>
    );

    const renderContent = () => {
        switch(view) {
            case 'terms':
                return <TermsScreen onBack={() => setView('main')} />;
            case 'privacy':
                return <PrivacyPolicyScreen onBack={() => setView('main')} />;
            default:
                return <MainLoginView />;
        }
    }

    return (
        <div className="bg-gray-50 dark:bg-[#191E24] text-gray-800 dark:text-gray-200 min-h-screen flex flex-col items-center justify-center p-4">
            {renderContent()}
        </div>
    );
};

export default AuthScreen;