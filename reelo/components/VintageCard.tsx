import React from 'react';
import {FaPlay} from "react-icons/fa6";
import FavoriteButton from "@/components/favoriteButton";
import {useRouter} from "next/router";
import {GoChevronDown} from "react-icons/go";
import useInfoModal2 from "@/hooks/useInfoModal2";

interface VintageCardProps {
    data: Record<string, any>;
}

const VintageCard: React.FC<VintageCardProps> = ({ data }) => {
    const router = useRouter();
    const {openModal} = useInfoModal2();
    return (

        <div
            className="group bg-gradient-to-r from-blue-600 to-black relative h-[25vw] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <img
                className="cursor-pointer object-cover transition-opacity duration-500 w-full h-[25vw] group-hover:opacity-80"
                src={data.thumbnaulUrl}
                alt="Poster"
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4">
                <div className="flex items-center space-x-4">
                    <div
                        className="cursor-pointer w-10 h-10 border-2 border-white rounded-full flex justify-center items-center transition-transform transform hover:scale-110"
                        onClick={() => router.push(`/watchv/${data?.id}`)}>
                        <FaPlay size={20} className="text-white"/>
                    </div>
                    <FavoriteButton movieId={data?.id}/>
                    <div
                        onClick={() => {
                            openModal(data?.id)
                        }}
                        className={"cursor-pointer ml-auto group item w-10 h-10 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"}>
                        <GoChevronDown size={20} className={"text-white"}/>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-white text-lg font-bold">{data.title}</p>
                    <p className="text-blue-400 font-semibold mt-2">Vintage <span className="text-white">1920´s</span>
                    </p>
                    <div className="flex flex-row mt-2 items-center space-x-4">
                        <p className="text-white text-sm">{data.duration}</p>
                        <p className="text-white text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VintageCard;
