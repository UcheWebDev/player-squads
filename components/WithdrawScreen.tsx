
import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon } from './Icons';
import { Currency } from '../App';

interface WithdrawScreenProps {
    currency: Currency;
    onBack: () => void;
}

const NGN_BALANCE = '550,250.75';
const USDT_BALANCE = '1,250.75';


const WithdrawScreen: React.FC<WithdrawScreenProps> = ({ currency, onBack }) => {
    const [amount, setAmount] = useState('');
    // NGN state
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    // USDT state
    const [usdtAddress, setUsdtAddress] = useState('');

    const handleWithdraw = () => {
        if (!amount || parseFloat(amount) <= 0) return;
        
        if (currency === 'NGN' && (!bankName || !accountNumber)) return;
        if (currency === 'USDT' && !usdtAddress) return;

        console.log('Withdrawal requested:', { currency, amount, bankName, accountNumber, usdtAddress });
        // Here you would typically make an API call.
        // On success, you might show a success message and navigate back.
        onBack();
    };

    const isButtonDisabled = !amount || parseFloat(amount) <= 0 || (currency === 'NGN' && (!bankName || !accountNumber)) || (currency === 'USDT' && !usdtAddress);
    
    const fee = currency === 'NGN' ? 50.00 : 1.00;
    const amountToReceive = amount ? Math.max(0, parseFloat(amount) - fee).toFixed(2) : '0.00';


    const NGNInfo = () => (
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-3 text-sm">
            <li>You can only withdraw into a bank account that has the same name as your Squads account name.</li>
            <li>A withdrawal fee of <strong>₦{fee.toFixed(2)}</strong> will be applied to each transaction.</li>
            <li>Withdrawals are usually processed within <strong>5-10 minutes</strong>.</li>
        </ul>
    );

    const USDTInfo = () => (
         <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-3 text-sm">
            <li>Please double-check the wallet address. Withdrawals to incorrect addresses are irreversible.</li>
            <li>Ensure the address is on the <strong>TRC20 network</strong>. Sending to a different network may result in a permanent loss of funds.</li>
            <li>A network fee of <strong>${fee.toFixed(2)} USDT</strong> will be deducted from the withdrawal amount.</li>
        </ul>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 space-y-8 py-8 animate-fade-in">
            <div className="relative flex justify-center items-center h-8 mb-4">
                <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-gray-100 dark:bg-[#2A313C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <ChevronLeftIcon />
                </button>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Withdraw {currency === 'NGN' ? 'Naira (NGN)' : 'USDT'}
                </h2>
                
                <div className="bg-white dark:bg-[#2A313C] p-6 rounded-xl space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">
                               {currency === 'NGN' ? `₦${NGN_BALANCE}` : `$${USDT_BALANCE}`}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end space-x-1 text-sm text-gray-500 dark:text-gray-400">
                                <span>Withdrawable balance</span>
                                <div className="relative group cursor-pointer">
                                    <QuestionMarkCircleIcon className="h-5 w-5" />
                                    <div className="absolute bottom-full mb-2 w-60 bg-gray-800 border border-gray-600 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 -translate-x-1/2 left-1/2">
                                        This amount is not from your withdrawable balance. Withdrawable balance is earned from winnings, not deposits.
                                        <div className="w-3 h-3 bg-gray-800 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="font-semibold text-lime-400">NO</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <label htmlFor="amount" className="text-sm font-medium text-gray-600 dark:text-gray-300">Amount to Withdraw</label>
                            <div className="relative mt-1">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">{currency === 'NGN' ? '₦' : '$'}</span>
                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-8 pr-4 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                                />
                            </div>
                        </div>
                        {currency === 'NGN' && (
                            <>
                                <div>
                                    <label htmlFor="bank-name" className="text-sm font-medium text-gray-600 dark:text-gray-300">Bank Name</label>
                                    <input
                                        type="text"
                                        id="bank-name"
                                        placeholder="e.g. Providus Bank"
                                        value={bankName}
                                        onChange={(e) => setBankName(e.target.value)}
                                        className="w-full mt-1 bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="account-number" className="text-sm font-medium text-gray-600 dark:text-gray-300">Account Number</label>
                                    <input
                                        type="text"
                                        maxLength={10}
                                        id="account-number"
                                        placeholder="10-digit account number"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        className="w-full mt-1 bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                                    />
                                </div>
                            </>
                        )}
                        {currency === 'USDT' && (
                            <div>
                                <label htmlFor="usdt-address" className="text-sm font-medium text-gray-600 dark:text-gray-300">Recipient's USDT Address (TRC20)</label>
                                <input
                                    type="text"
                                    id="usdt-address"
                                    placeholder="Enter USDT wallet address"
                                    value={usdtAddress}
                                    onChange={(e) => setUsdtAddress(e.target.value)}
                                    className="w-full mt-1 bg-gray-100 dark:bg-[#1F2937] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A4F5C3]/50"
                                />
                            </div>
                        )}
                    </div>
                     {amount && parseFloat(amount) > 0 && (
                        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm">
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                                <span>Withdrawal Commission</span>
                                <span>{currency === 'NGN' ? `₦${fee.toFixed(2)}` : `$${fee.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                                <span>Est. Confirmation time</span>
                                <span>{currency === 'NGN' ? '5-10 minutes' : '2-5 minutes'}</span>
                            </div>
                            <div className="flex justify-between items-center font-bold text-gray-900 dark:text-white text-base pt-2">
                                <span>You will receive</span>
                                <span>{currency === 'NGN' ? `₦${amountToReceive}` : `$${amountToReceive}`}</span>
                            </div>
                        </div>
                    )}
                </div>


                <div className="bg-white dark:bg-[#2A313C] p-6 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Important Information.</h3>
                    {currency === 'NGN' ? <NGNInfo /> : <USDTInfo />}
                </div>
                
                <button 
                    onClick={handleWithdraw} 
                    className="w-full bg-[#A4F5C3] text-gray-900 font-bold py-3.5 rounded-lg hover:bg-[#8ee9ae] transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed"
                    disabled={isButtonDisabled}
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default WithdrawScreen;
