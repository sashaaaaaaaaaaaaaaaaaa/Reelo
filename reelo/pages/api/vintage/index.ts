// // pages/api/vintage.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import prismadb from '@/lib/prismadb';
// import serverAuth from '@/lib/serverAuth';
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'GET') {
//         return res.status(405).end(); // Method Not Allowed
//     }
//
//     try {
//         await serverAuth(req);
//
//         const vintageMovies = await prismadb.vintage.findMany();
//         return res.status(200).json(vintageMovies);
//     } catch (error) {
//         console.error('Error fetching vintage movies:', error);
//         return res.status(400).end();
//     }
// }


// pages/api/vintage.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        await serverAuth(req);

        const vintageMovies = await prismadb.vintage.findMany();
        return res.status(200).json(vintageMovies);
    } catch (error) {
        console.error('Error fetching vintage movies:', error);
        return res.status(400).end();
    }
}



