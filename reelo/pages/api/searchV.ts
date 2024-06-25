import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';
import useInfoModal from "@/hooks/useInfoModal";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        await serverAuth(req); // Authentication logic

        const { q } = req.query; // Query parameter for search query


        const vintage = await prisma.vintage.findMany({
            where: {
                title: {
                    contains: q as string, // Case-insensitive search
                    mode: 'insensitive',
                },
            },
            take: 10, // Limiting to 10 results for demonstration
        });

        return res.status(200).json(vintage);
    } catch (error) {
        console.error('Error searching movies:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
