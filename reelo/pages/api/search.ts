import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth'; // Importing custom server authentication logic

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // handles the API request.

    if (req.method !== 'GET') {

        return res.status(405).end();
    }

    try {
        await serverAuth(req);

        const { q } = req.query; // Extract the query parameter 'q' from the request query string

        // Search movies based on the title containing the search query
        const movies = await prisma.movie.findMany({
            where: {
                title: {
                    contains: q as string, // Perform a case-insensitive search on the title field
                    mode: 'insensitive', // Specify that the search should be case-insensitive
                },
            },
            take: 10, // Limit the number of results to 10
        });

        return res.status(200).json(movies);
    } catch (error) {
        console.error('Error searching movies:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
