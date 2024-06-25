import React from 'react';
import { useRouter } from "next/router";
import { FaPlay } from "react-icons/fa";

interface PlayButtonVintageProps {
    vintageId: number; // Change vintageId type to number
}

const PlayButtonVintage3: React.FC<PlayButtonVintageProps> = ({ vintageId }) => {
    const router = useRouter();

    const playVideo = () => {
        // Navigate to Watch page with the specific vintageId
        router.push(`/watchv/${vintageId}`);
    };

    return (
        <button
            onClick={playVideo}
            className="bg-white rounded-full py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
        >
            <FaPlay size={20} className="text-blue-600 mr-1" />
            Play
        </button>
    );
};

export default PlayButtonVintage3;
