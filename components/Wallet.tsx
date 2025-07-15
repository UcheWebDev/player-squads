
import React, { useState } from 'react';
import { DepositIcon, WithdrawIcon, TransactionUpIcon, TransactionDownIcon, BubbleBackground } from './Icons';
import DepositScreen from './DepositScreen';
import WithdrawScreen from './WithdrawScreen';
import { Currency } from '../App';

interface WalletProps {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
}

const TransactionHistoryItem = ({ type, description, date, amount, status, symbol }) => (
    <div className="flex items-center justify-between bg-white dark:bg-[#2A313C] p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#343d4b] transition-colors">
        <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${type === 'deposit' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {type === 'deposit' ? <TransactionUpIcon className="text-green-400" /> : <TransactionDownIcon className="text-red-400" />}
            </div>
            <div>
                <p className="font-semibold text-gray-900 dark:text-white">{description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`font-bold ${type === 'deposit' ? 'text-green-400' : 'text-gray-800 dark:text-white'}`}>{type === 'deposit' ? '+' : '-'}{symbol}{amount}</p>
            <p className={`text-xs font-semibold uppercase ${status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>
        </div>
    </div>
);

const Wallet: React.FC<WalletProps> = ({ currency, setCurrency }) => {
    const [view, setView] = useState<'main' | 'deposit' | 'withdraw'>('main');

    const walletData = {
        NGN: {
            balance: '550,250.75',
            symbol: '₦',
            transactions: [
                { type: 'deposit', description: 'Deposit from Card', date: 'Jul 12, 2024', amount: '100,000.00', status: 'Completed' },
                { type: 'withdrawal', description: 'Entry Fee: Daily Soccer', date: 'Jul 11, 2024', amount: '25,000.00', status: 'Completed' },
                { type: 'withdrawal', description: 'Withdrawal to Bank', date: 'Jul 8, 2024', amount: '200,000.00', status: 'Pending' },
                { type: 'deposit', description: 'Promotional Credit', date: 'Jul 9, 2024', amount: '10,000.00', status: 'Completed' },
            ]
        },
        USDT: {
            balance: '1,250.75',
            symbol: '$',
            transactions: [
                { type: 'deposit', description: 'Deposit from Binance', date: 'Jul 10, 2024', amount: '500.00', status: 'Completed' },
                { type: 'withdrawal', description: 'Entry Fee: Weekly NBA', date: 'Jul 9, 2024', amount: '50.00', status: 'Completed' },
                { type: 'withdrawal', description: 'Withdrawal to Wallet', date: 'Jul 7, 2024', amount: '300.00', status: 'Completed' },
                { type: 'deposit', description: 'P2P Purchase', date: 'Jul 5, 2024', amount: '150.00', status: 'Completed' },
            ]
        }
    };

    const currentWallet = walletData[currency];

    if (view === 'deposit') {
        return <DepositScreen currency={currency} onBack={() => setView('main')} />;
    }
    
    if (view === 'withdraw') {
        return <WithdrawScreen currency={currency} onBack={() => setView('main')} />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 space-y-8 py-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wallet</h1>
                <div className="flex space-x-1 bg-gray-200 dark:bg-[#1F2937] p-1 rounded-lg">
                    <button
                        onClick={() => setCurrency('NGN')}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${currency === 'NGN' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
                    >
                        Naira (₦)
                    </button>
                    <button
                        onClick={() => setCurrency('USDT')}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${currency === 'USDT' ? 'bg-white dark:bg-[#2A313C] text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
                    >
                        USDT ($)
                    </button>
                </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-[#A4F5C3] to-[#5FE994] rounded-3xl p-6 text-gray-900 shadow-xl">
                <BubbleBackground />
                {/* This overlay creates the dark vignette effect */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_rgba(25,30,36,0.3)]"></div>
                <div className="relative z-10">
                    <p className="text-sm font-medium opacity-80">Current Balance</p>
                    <p className="text-4xl font-bold mt-1">{currentWallet.symbol}{currentWallet.balance}</p>
                    <div className="flex space-x-4 mt-6">
                        <button onClick={() => setView('deposit')} className="flex-1 flex items-center justify-center space-x-2 bg-white/30 hover:bg-white/40 transition-colors py-3 rounded-xl font-semibold backdrop-blur-sm border border-white/20">
                            <DepositIcon />
                            <span>Deposit</span>
                        </button>
                        <button onClick={() => setView('withdraw')} className="flex-1 flex items-center justify-center space-x-2 bg-black/20 text-white hover:bg-black/30 transition-colors py-3 rounded-xl font-semibold backdrop-blur-sm border border-black/20">
                            <WithdrawIcon />
                            <span>Withdraw</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Transaction History</h2>
                <div className="space-y-3">
                    {currentWallet.transactions.map((tx, index) => (
                        <TransactionHistoryItem key={index} {...tx} symbol={currentWallet.symbol} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wallet;