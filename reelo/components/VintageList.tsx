// components/VintageList.tsx
import React from 'react';
import { isEmpty } from 'lodash';
import VintageCard from '@/components/VintageCard';

interface VintageListProps {
    data: Record<string, any>[];
    title: string;
}

const VintageList: React.FC<VintageListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="px-5  md:px-12 lg:m-10 mx-auto">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mt-20">
                    Popular Vintage Picks: Timeless Classics You Shouldn't Miss
                </p>
                <p className="text-white text-md mt-5 mb-16">Choose something to watch and add to your watch List</p>
                <div className="grid grid-cols-5 gap-4">
                    {data.map((vintage) => (
                        <VintageCard key={vintage.id} data={vintage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VintageList;


