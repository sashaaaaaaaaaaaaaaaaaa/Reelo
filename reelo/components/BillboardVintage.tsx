import React from "react";
import useBillBoard from "@/hooks/useBillBoard";

const Billboard = () => {
    const { data } = useBillBoard();
    const videoUrl = "https://reelo-423717.web.app/LEclisse.mp4"
    return (
        <div className="relative mt-0.5 bg-gradient-to-b from-gray-900 to-gray-600">
            <video
                className="w-full object-cover brightness-[70%]"
                autoPlay
                loop
                muted
                poster={data?.thumbnailUrl}
                src={videoUrl}
            ></video>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute top-2/3 left-14 transform -translate-y-1/2 text-left text-white drop-shadow-lg">
                <h1 className=" xl:text-6xl  md:text-4xl text-balance font-serif font-bold mx-2 md:mx-4 lg:mx-6">

                    <span className="block">Discover Classic Cinema: </span>
                    <span className="block">Stream Timeless Public Domain Movies </span>
                    <span className="block"></span>
                </h1>
                <p className="text-sm md:text-base lg:text-lg hidden xl:block mx-2 md:mx-4 lg:mx-6 mt-4 md:mt-8">
                    Step back in time with an exclusive collection of public domain classics. Explore comprehensive details about each film, including cast lists, plot summaries, and intriguing production anecdotes. Stream these timeless treasures directly and immerse yourself in the magic of vintage cinema.
                </p>
            </div>
        </div>
    );
};

export default Billboard;







