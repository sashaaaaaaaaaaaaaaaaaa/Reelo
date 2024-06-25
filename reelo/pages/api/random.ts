// import {NextApiRequest, NextApiResponse} from "next";
// import prismadb from "@/lib/prismadb";
// import serverAuth from "@/lib/serverAuth";
//
// export default async function handler(req: NextApiRequest , res:NextApiResponse){
//     if (req.method !== 'GET'){
//         return res.status(405).end();
//     }
//     try {
//         await serverAuth(req);
//
//         const movieCount = await prismadb.movie.count();
//         const randomIndex = Math.floor(Math.random() * movieCount);
//         const randomMovies = await prismadb.movie.findMany({
//             take: 1,
//             skip: randomIndex
//         });
//
//         return res.status(200).json(randomMovies[0]);
//     }catch (error){
//         console.log(error);
//         return res.status(400).end();
//     }
// }


//The handler function an API route handler for Next.js It handles incoming HTTP requests to a specific API endpoint and provides appropriate responses.
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest , res: NextApiResponse) {
    if (req.method !== 'GET'){
        return res.status(405).end();
    }
    try {
        await serverAuth(req);

        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * 8) + 1;
        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return res.status(200).json(randomMovies[0]);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}
