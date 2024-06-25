import userSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (id:string | undefined) =>{
    const { data , error , isLoading } = userSWR(id ?`/api/movies/${id}` : null , fetcher,{
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
export default useMovie;