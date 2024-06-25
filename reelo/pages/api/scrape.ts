import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

type Article = {
    title: string;
    link: string;
    category: string;
    excerpt: string;
    extra: string;
    details: string;
    imageUrl: string;
};

const fetchPageData = async (page: number): Promise<Article[]> => {
    const { data } = await axios.get(`https://www.cbr.com/category/movies/news-movies/${page}/`);
    const $ = cheerio.load(data);

    const articles: Article[] = [];
    $('.display-card.article.small.active-content').each((_, element) => {
        const title = $(element).find('.display-card-title').text().trim();
        const link = $(element).find('.dc-img-link').attr('href');
        const category = $(element).find('.w-display-card-category').text().trim();
        const excerpt = $(element).find('.display-card-excerpt').text().trim();
        const extra = $(element).find('.w-display-card-extra').text().trim();
        const details = $(element).find('.w-display-card-details').text().trim();
        const imageUrl = $(element).find('.bc-img.responsive-img.img-displayCard picture img').attr('src');

        if (title && link && imageUrl) {
            articles.push({
                title,
                link: `https://www.cbr.com${link}`,
                category,
                excerpt,
                extra,
                details,
                imageUrl,
            });
        }
    });

    return articles;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const promises = Array.from({ length: 1}, (_, i) => fetchPageData(i + 1));
        const results = await Promise.all(promises);
        const articles = results.flat();

        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
}


