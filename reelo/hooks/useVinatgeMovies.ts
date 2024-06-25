import userSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVintageMovies = (id:string | undefined) =>{
    const { data , error , isLoading } = userSWR(id ?`/api/vintage/${id}` : null , fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return{
        data,
        error,
        isLoading
    }
}
export default useVintageMovies;



// // hooks/useVintageMovies.ts
// import { useState } from "react";
// import useSWR from "swr";
//
// interface VintageMovie {
//     id: string;
//     title: string;
//     genre: string;
//     duration: number;
// }
//
// const useVintageMovies = (filters: { genres?: string[] } = {}) => {
//     const { data, error } = useSWR<VintageMovie[]>(`/api/vintage`, { revalidateOnFocus: false });
//
//     const filteredData = data?.filter((movie) => {
//         if (filters.genres && movie.genre && !filters.genres.includes(movie.genre)) {
//             return false;
//         }
//         return true;
//     });
//
//     return {
//         movies: filteredData,
//         isLoading: !data && !error,
//         error,
//     };
// };
//
// export default useVintageMovies;
