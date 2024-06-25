// pages/api/imdb.ts
import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

interface Movie {
    title: string;
    year: string;
    duration: string;
    image: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await axios.get('https://www.imdb.com/list/ls000637358/');
        const $ = cheerio.load(response.data);
        const moviesData: Movie[] = [];

        $('.ipc-metadata-list-summary-item').each((_index, element) => {
            const title = $(element).find('.ipc-lockup-overlay__screen.ipc-title__text.sc-b189961a-8.kLaxqf.dli-title-metadata-item').text();
            const year = $(element).find('.ipc-metadata-list-summary-item .sc-b189961a-8.kLaxqf.dli-title-metadata-item').eq(0).text().trim();
            const duration = $(element).find('.ipc-metadata-list-summary-item .sc-b189961a-8.kLaxqf.dli-title-metadata-item').eq(1).text().trim();
            const image = $(element).find('.ipc-metadata-list-summary-item .ipc-image-media-ratio--poster-27x40').attr('src') || '';
            moviesData.push({ title, year, duration, image });
        });

        console.log('Movies data:', moviesData);

        res.status(200).json({ movies: moviesData });
    } catch (error: any) {
        console.error('Error:', error.message);
        console.error('Response data:', error.response?.data);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
