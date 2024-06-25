import React, {useCallback} from "react";
import useBillBoard from "@/hooks/useBillBoard";
import { RiInformationLine } from "react-icons/ri";
import { RiHeartAdd2Line } from "react-icons/ri";
import useInfoModal from "@/hooks/useInfoModal";


const Billboard = () => {
    const {data} = useBillBoard();
    const {openModal} = useInfoModal();
    const handleOpenModal = useCallback(() =>{
        openModal(data?.id)
    },[openModal,data?.id])
    return(
        <div className={"relative h-[56.25vw] mt-0.5"}>
            <video className={"w-full  h-[56.25vw] object-cover brightness-[70%] "}
                   autoPlay loop muted poster={data?.thumbnailUrl} src={data?.videoUrl}></video>

            <div className={"absolute top-[30%] md:top-[40%] ml-4 md:ml-16"}>


                <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold w-full md:w-1/2 lg:w-1/2 mt-2 md:mt-0 lg:mt-0 drop-shadow-xl">
                    {data?.title}
                </p>


                <p className={"text-white text-[8px] md:text-lg mt-4 md:mt8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl"}>{data?.description}</p>


                <div className={"flex flex-row items-center md-3 md:mt-4 gap-3"}>
                    {/*<PlayButton movieId={data?.id}/>*/}
                    <button
                        className="bg-white text-black rounded-full py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-70 cursor-pointer transition mt-2 md:mt-0"
                    >
                        <RiHeartAdd2Line size={20} className="mr-2"/>Add</button>
                    <button onClick={handleOpenModal}
                        className="bg-white text-white bg-opacity-30 rounded-full py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-20 cursor-pointer transition mt-2 md:mt-0 md:ml-2"
                    >
                        <RiInformationLine size={24} className="mr-2"/>
                        See More
                    </button>


                </div>
            </div>
        </div>
    )
}
export default Billboard;