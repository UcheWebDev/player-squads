
import React from 'react';
import { PlusIcon } from './Icons';

interface CreateEntryButtonProps {
    onClick: () => void;
}

const CreateEntryButton: React.FC<CreateEntryButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-30 flex items-center justify-center w-16 h-16 bg-[#A4F5C3] rounded-full shadow-lg hover:bg-[#8ee9ae] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#A4F5C3]/50"
            aria-label="Create new entry"
        >
            <PlusIcon />
        </button>
    );
};

export default CreateEntryButton;
