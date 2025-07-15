
import React, { useState } from 'react';
import { ChevronLeftIcon, CopyIcon, QrCodePlaceholder } from './Icons';
import { Currency } from '../App';

interface DepositScreenProps {
    currency: Currency;
    onBack: () => void;
}

const NGN_ACCOUNT_DETAILS = {
    bankName: 'Providus Bank',
    accountName: 'Squads Fantasy Inc.',
    accountNumber: '9991234567'
};

const USDT_WALLET_DETAILS = {
    address: '0x1234ABCD5678EFGH9101IJKL1112MNOP1314QRST',
    network: 'TRC20'
};

const DepositScreen: React.FC<DepositScreenProps> = ({ currency, onBack }) => {
    const [copiedValue, setCopiedValue] = useState<string | null>(null);

    const handleCopy = (text: string, identifier: string) => {
        navigator.clipboard.writeText(text);
        setCopiedValue(identifier);
        setTimeout(() => setCopiedValue(null), 2000);
    };

    const NGNContent = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Deposit Naira (NGN)</h2>
            <div className="bg-white dark:bg-[#2A313C] p-6 rounded-xl space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">To fund your wallet, make a bank transfer to the account details below.</p>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">Bank Name</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{NGN_ACCOUNT_DETAILS.bankName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">Account Name</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{NGN_ACCOUNT_DETAILS.accountName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">Account Number</span>
                        <div className="flex items-center space-x-2">
                             <span className="text-gray-900 dark:text-white font-semibold">{NGN_ACCOUNT_DETAILS.accountNumber}</span>
                             <button onClick={() => handleCopy(NGN_ACCOUNT_DETAILS.accountNumber, 'accountNumber')} className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
                                {copiedValue === 'accountNumber' ? <span className="text-xs text-[#A4F5C3]">Copied!</span> : <CopyIcon className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="text-center text-xs text-yellow-700 dark:text-gray-500 p-4 bg-yellow-400/10 dark:bg-yellow-500/10 rounded-lg">
                Your wallet will be credited automatically once the transfer is confirmed. This might take a few minutes.
            </div>
        </div>
    );

    const USDTContent = () => (
        <div className="space-y-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Deposit USDT</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">Scan the QR code or copy the address below to deposit USDT.</p>
            
            <QrCodePlaceholder className="w-48 h-48"/>

            <div className="w-full bg-white dark:bg-[#2A313C] p-4 rounded-xl space-y-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">USDT Wallet Address</label>
                <div className="flex items-center justify-between space-x-2 bg-gray-100 dark:bg-[#1F2937] p-3 rounded-lg">
                    <p className="text-gray-900 dark:text-white text-sm break-all font-mono">{USDT_WALLET_DETAILS.address}</p>
                    <button onClick={() => handleCopy(USDT_WALLET_DETAILS.address, 'usdtAddress')} className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition flex-shrink-0">
                        {copiedValue === 'usdtAddress' ? <span className="text-xs text-[#A4F5C3]">Copied!</span> : <CopyIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
            
             <div className="text-center text-xs text-red-700 dark:text-gray-500 p-4 bg-red-400/10 dark:bg-red-500/10 rounded-lg">
                <p className="font-bold text-red-600 dark:text-red-400">Important</p>
                Only send <span className="font-semibold text-gray-800 dark:text-white">USDT</span> on the <span className="font-semibold text-gray-800 dark:text-white">{USDT_WALLET_DETAILS.network}</span> network to this address. Sending any other asset will result in a permanent loss of funds.
            </div>
        </div>
    );


    return (
        <div className="max-w-4xl mx-auto px-4 space-y-8 py-8 animate-fade-in">
            <div className="relative flex justify-center items-center">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon />
                </button>
            </div>
            {currency === 'NGN' ? <NGNContent /> : <USDTContent />}
        </div>
    );
};

export default DepositScreen;