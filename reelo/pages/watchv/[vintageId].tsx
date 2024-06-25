import React from "react";
import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
import useVinatgeMovies from "@/hooks/useVinatgeMovies";

const Watch = () => {
    const router = useRouter();
    const {vintageId} = router.query
    const {data} = useVinatgeMovies(vintageId as string)
    return (


        <div className={"h-screen w-screen bg-black text-white"}>

            <nav className={"fixed w-full p-4 z-10 flex flex-row item-center gap-8 bg-opacity-70"}>

                <IoMdArrowRoundBack onClick={() => router.push('/Vintage')} size={30} className={"mt-1 text-white cursor-pointer"}/>

                <p className={"text-white text-1xl md:text-3xl font-bold"}>
                    <span className={"font-light mr-2 md:mt-4"}>
                        Watching :
                    </span>

                    {data?.title}

                </p>

            </nav>
            <video autoPlay controls className={"h-full w-full"} src={data?.videoUrl}></video>

        </div>
    );
};

export default Watch;
