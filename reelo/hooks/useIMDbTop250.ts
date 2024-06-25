// hooks/useIMDbTop250.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export interface Movie {
    title: string;
    year: string;
    duration: string;
    image: string;
}

const useIMDbTop250 = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://www.imdb.com/chart/top/');
                const $ = cheerio.load(response.data);
                const moviesData: Movie[] = [];

                $('tbody.lister-list tr').each((_index, element) => {
                    const title = $(element).find('.titleColumn a').text();
                    const year = $(element).find('.sc-b189961a-8.kLaxqf.cli-title-metadata-item').first().text().trim();
                    const duration = $(element).find('.sc-b189961a-8.kLaxqf.cli-title-metadata-item').eq(1).text().trim();
                    const image = $(element).find('.ipc-media.ipc-media--poster-27x40.ipc-image-media-ratio--poster-27x40.ipc-media--base.ipc-media--poster-m.ipc-poster__poster-image.ipc-media__img.ipc-title__text').attr('src') || '';
                    moviesData.push({ title, year, duration, image });
                });

                setMovies(moviesData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchMovies();

        // Cleanup function
        return () => {
            // cleanup code
        };
    }, []);

    return { movies, loading, error };
};

export default useIMDbTop250;
