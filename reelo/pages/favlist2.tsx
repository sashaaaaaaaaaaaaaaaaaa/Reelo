import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { RiHeartAddFill, RiHeartAdd2Line } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/router";

// Example movie data
const movies = [
    {
        id: 1,
        title: "House on Haunted Hill",
        thumbnaulUrl: "https://i.pinimg.com/736x/d7/c0/2c/d7c02c85b5db38498c92d48e5090149c.jpg",
        genre: "Horror",
        duration: "75 minutes",
        videoUrl: "https://reelo-423717.web.app/House%20on%20Haunted%20Hill%20-%201959%20-%201080p%20-%20Vincent%20Price%20-%20full%20movie%20in%20HD.mp4"
    },
];

const VintagePage: React.FC = () => {
    const router = useRouter();
    const [likedMovies, setLikedMovies] = useState<number[]>([]); // State to track liked movie IDs

    const toggleLike = (id: number) => {
        if (likedMovies.includes(id)) {
            setLikedMovies(likedMovies.filter(movieId => movieId !== id)); // Remove from liked movies
        } else {
            setLikedMovies([...likedMovies, id]); // Add to liked movies
        }
    };

    const playVideo = (videoUrl: string) => {
        // Directly play the video in a new tab or modal
        window.open(videoUrl, '_blank');
    };

    return (
        <div>
            <Navbar />
            <div className="text-center mt-4">
                <h1 className="text-black text-4xl">.</h1>
            </div>
            <div className="grid ml-28 mt-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {movies.map(movie => (
                    !likedMovies.includes(movie.id) && ( // Render only if not liked
                        <div key={movie.id} className="group bg-gradient-to-r from-blue-600 to-black relative h-[25vw] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                            <img
                                className="cursor-pointer object-cover transition-opacity duration-500 w-full h-[25vw] group-hover:opacity-80"
                                src={movie.thumbnaulUrl}
                                alt="Poster"
                                onClick={() => playVideo(movie.videoUrl)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4">
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="cursor-pointer w-10 h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
                                        onClick={() => playVideo(movie.videoUrl)}
                                    >
                                        <FaPlay size={20} className="text-white mr-1 ml-1" />
                                    </div>
                                    <div
                                        className="cursor-pointer w-10 h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
                                        onClick={() => toggleLike(movie.id)}
                                    >
                                        {likedMovies.includes(movie.id) ? (
                                            <RiHeartAdd2Line size={25} className="text-white ml-1" />
                                        ) : (
                                            <RiHeartAddFill size={25} className="text-white" />
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-white text-lg font-bold">{movie.title}</p>
                                    <p className="text-blue-400 font-semibold mt-2 text-xs">{movie.genre}</p>
                                    <p className="text-white text-sm">{movie.duration}</p>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default VintagePage;

