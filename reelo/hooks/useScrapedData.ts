import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useScrapedData = () => {
    const { data, error } = useSWR('/api/scrape', fetcher);

    return {
        data,
        error,
        isLoading: !error && !data,
    };
};

export default useScrapedData;

