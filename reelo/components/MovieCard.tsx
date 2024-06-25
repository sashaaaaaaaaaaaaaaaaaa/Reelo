import React from "react";
import { FaPlay } from "react-icons/fa6";
import FavoriteButton from "@/components/favoriteButton";
import {useRouter} from "next/router";
import useInfoModal from "@/hooks/useInfoModal";
import {GoChevronDown} from "react-icons/go";


interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter();
    const {openModal} = useInfoModal();
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
                        onClick={() => {
                            openModal(data?.id)
                        }}
                        className={"cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 lg:columns-2 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"}>
                        <GoChevronDown size={20} className={"text-white"}/>

                    </div>
                    <FavoriteButton movieId={data?.id}/>
                </div>
                <div className="mt-4">
                    <p className="text-white text-lg font-bold sm:text-base md:text-lg lg:text-lg xl:text-xl whitespace-normal hidden sm:block">{data.title}</p>
                    <p className="text-blue-400 font-semibold mt-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg whitespace-normal hidden sm:block">New <span
                        className="text-white">2024</span></p>
                    <div className="flex flex-row mt-2 space-x-1 hidden sm:flex">
                        <p className="text-white text-sm whitespace-normal ">{data.duration}</p>
                        <p className="text-white text-sm whitespace-normal">{data.genre}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieCard;

