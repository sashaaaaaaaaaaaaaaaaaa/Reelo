import userSWR from 'swr'
import fetcher from "@/lib/fetcher";
//fetch and display data

const useBillBoard = () =>{
    const { data , error , isLoading } = userSWR('/api/random' , fetcher,{
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
export default useBillBoard;