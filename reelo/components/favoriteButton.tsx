// import axios from "axios";
// import React, {useCallback , useMemo } from "react";
// import useCurrentUser from "@/hooks/useCurrentUser";
// import useFavorites from "@/hooks/useFavorites";
// import { MdOutlineFavorite } from "react-icons/md";
// import { FaCheck } from "react-icons/fa6";
// import { MdOutlineBookmarkAdded } from "react-icons/md";
// import { MdBookmarkAdded } from "react-icons/md";
// interface FavoriteButtonProps{
//     movieId: String;
// }
//
// const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) =>{
//
//     const {mutate: mutateFavorites} = useFavorites();
//     const {data: currentUser , mutate} = useCurrentUser();
//     const isFavorite = useMemo(() =>{
//
//         const list = currentUser?.favoriteIds || [] ;
//         return list.includes(movieId)
//     },[currentUser, movieId]);
//
//     const toggleFavorites = useCallback(async () =>{
//         let response;
//         if (isFavorite){
//             response = await axios.delete('/api/favorite' , {data:{movieId}})
//         }else {
//             response = await axios.post('/api/favorite',{movieId})
//         }
//         const updatedFavoriteIds = response?.data?.favoriteIds;
//
//         mutate({
//             ...currentUser,
//             favoriteIds: updatedFavoriteIds
//         })
//         mutateFavorites();
//
//     },[movieId,isFavorite,currentUser, mutate, mutateFavorites])
//    const Icon = isFavorite ? MdOutlineBookmarkAdded : MdBookmarkAdded
//
//
//     return (
//         <div
//             onClick={toggleFavorites}
//             className={" cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300" }>
//             <Icon className={"text-white" } size={22}/>
//         </div>
//     )
// }
// export default FavoriteButton;

//
// import axios from "axios";
// import React, { useCallback, useMemo } from "react";
// import useCurrentUser from "@/hooks/useCurrentUser";
// import useFavorites from "@/hooks/useFavorites";
// import { RiHeartAdd2Line } from "react-icons/ri";
// import { RiHeartAddFill } from "react-icons/ri";
//
// interface FavoriteButtonProps {
//     movieId: string;
// }
//
// const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
//     const { mutate: mutateFavorites } = useFavorites();
//     const { data: currentUser, mutate } = useCurrentUser();
//
//     const isFavorite = useMemo(() => {
//         const list = currentUser?.favoriteIds || [];
//         return list.includes(movieId);
//     }, [currentUser, movieId]);
//
//     const toggleFavorites = useCallback(async () => {
//         try {
//             let response;
//             if (isFavorite) {
//                 console.log('Deleting favorite:', movieId);
//                 response = await axios.delete('/api/favorite', { data: { movieId } });
//             } else {
//                 console.log('Adding favorite:', movieId);
//                 response = await axios.post('/api/favorite', { movieId });
//             }
//
//             console.log('Response:', response);
//
//             const updatedFavoriteIds = response?.data?.favoriteIds;
//
//             mutate({
//                 ...currentUser,
//                 favoriteIds: updatedFavoriteIds,
//             });
//             mutateFavorites();
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 console.error('Axios error:', error.response?.data || error.message);
//             } else {
//                 console.error('Unexpected error:', error);
//             }
//         }
//     }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);
//
//
//     const Icon = isFavorite ? RiHeartAddFill :   RiHeartAdd2Line;
//
//     return (
//         <div
//             onClick={toggleFavorites}
//             className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
//         >
//             <Icon className="text-white" size={22} />
//         </div>
//     );
// };
//
// export default FavoriteButton;
//



import React, { useCallback, useMemo } from "react";
import { RiHeartAdd2Line, RiHeartAddFill } from "react-icons/ri";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const [isFavorite, setIsFavorite] = React.useState(false); // State to track favorite status

    const toggleFavorite = useCallback(() => {
        setIsFavorite(prev => !prev); // Toggle the favorite status on click
    }, []);

    const Icon = isFavorite ? RiHeartAddFill : RiHeartAdd2Line; // Icon changes based on favorite status

    return (
        <div
            onClick={toggleFavorite}
            className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
        >
            <Icon className="text-white" size={22} />
        </div>
    );
};

export default FavoriteButton;
