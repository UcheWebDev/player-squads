import React, { useState } from 'react';
import { PROMO_CARDS_DATA } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface PromoCardProps {
  card: typeof PROMO_CARDS_DATA[0];
}

const PromoCard: React.FC<PromoCardProps> = ({ card }) => (
    <div className={`w-full bg-gradient-to-br ${card.gradient} rounded-xl p-6 flex justify-between items-center overflow-hidden`}>
        <div className="max-w-[calc(100%-120px)] sm:max-w-[calc(100%-150px)]">
            <h2 className={`text-2xl font-bold ${card.titleColor}`}>{card.title}</h2>
            <p className={`${card.descriptionColor} mt-1`}>{card.description}</p>
        </div>
        <div className="hidden sm:block flex-shrink-0">
            {card.illustration}
        </div>
    </div>
);


const PromotionalSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? PROMO_CARDS_DATA.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === PROMO_CARDS_DATA.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="relative w-full group">
            <div className="w-full overflow-hidden rounded-xl">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {PROMO_CARDS_DATA.map((card) => (
                         <div key={card.id} className="w-full flex-shrink-0">
                           <PromoCard card={card} />
                         </div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <button onClick={prevSlide} aria-label="Previous slide" className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/30 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                <ChevronLeftIcon />
            </button>
            {/* Right Arrow */}
            <button onClick={nextSlide} aria-label="Next slide" className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/30 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                <ChevronRightIcon />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {PROMO_CARDS_DATA.map((_, slideIndex) => (
                    <button key={slideIndex} onClick={() => goToSlide(slideIndex)} aria-label={`Go to slide ${slideIndex + 1}`} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white'}`}></button>
                ))}
            </div>
        </div>
    )
};

export default PromotionalSlider;