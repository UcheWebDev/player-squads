import React from 'react';

const SkeletonBase = ({ className = '' }) => (
    <div className={`bg-gray-200 dark:bg-gray-700/50 rounded-lg animate-pulse ${className}`}></div>
);

export const PromotionalSliderSkeleton: React.FC = () => (
    <div className="w-full h-[168px] bg-gray-100 dark:bg-[#2A313C] rounded-xl p-6 flex justify-between items-center overflow-hidden">
        <div className="w-full space-y-4">
            <SkeletonBase className="h-8 w-3/4" />
            <SkeletonBase className="h-4 w-1/2" />
            <SkeletonBase className="h-4 w-5/6" />
        </div>
        <div className="hidden sm:block flex-shrink-0">
            <div className="relative w-24 h-36 flex items-center justify-center">
                 <SkeletonBase className="w-24 h-36" />
            </div>
        </div>
    </div>
);

export const FilterTabsSkeleton: React.FC = () => (
    <div className="overflow-x-auto whitespace-nowrap py-4 -mx-4 px-4 scrollbar-hide">
      <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700">
        {[...Array(6)].map((_, i) => (
             <div key={i} className="pb-3">
                <SkeletonBase className="h-5 w-24" />
            </div>
        ))}
      </div>
    </div>
);


export const PlayerCardSkeleton: React.FC = () => (
    <div className="bg-white dark:bg-[#2A313C] rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 w-full">
        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700/50 animate-pulse flex-shrink-0"></div>
        <div className="space-y-2 flex-grow">
          <SkeletonBase className="h-5 w-1/2" />
          <SkeletonBase className="h-4 w-3/4" />
          <SkeletonBase className="h-4 w-2/3" />
        </div>
      </div>

      <div className="flex items-center space-x-2 ml-4">
         <SkeletonBase className="w-24 h-24 hidden sm:block" />
        <div className="flex flex-col space-y-1.5">
           <SkeletonBase className="w-28 h-10" />
           <SkeletonBase className="w-28 h-10" />
        </div>
      </div>
    </div>
);