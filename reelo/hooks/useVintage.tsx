// // useVintageList.ts
// import useSWR from 'swr';
// import fetcher from "@/lib/fetcher";
//
// const useVintageList = () => {
//     const { data , error , isLoading } = useSWR('/api/vintage', fetcher, {
//         revalidateIfStale: false,
//         revalidateOnFocus: false,
//         revalidateOnReconnect: false
//     });
//
//     return {
//         data,
//         error,
//         isLoading
//     }
// };
//
// export default useVintageList;



// hooks/useVintageList.ts
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useVintageList = () => {
    const { data, error, isLoading } = useSWR('/api/vintage', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        error,
        isLoading
    };
};

export default useVintageList;

