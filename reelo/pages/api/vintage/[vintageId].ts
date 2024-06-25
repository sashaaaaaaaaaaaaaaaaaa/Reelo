import {NextApiRequest,NextApiResponse} from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import vintageId from "@/pages/watchv/[vintageId]";
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method !== 'GET'){
        return res.status(405).end()
    }
    try {
        await serverAuth(req)
        const {vintageId} = req.query
        if (typeof vintageId !== 'string'){
            throw new Error('Invalid ID')
        }
        if (!vintageId){
            throw new Error('Invalid vinatge Id')
        }

        const vintage = await prismadb.vintage.findUnique({
            where:{
                id : vintageId
            }
        })
        if (!vintage){
            throw new Error('Invalid Id')
        }

        return res.status(200).json(vintage)
    }catch (error){
        console.log(error)
        return res.status(400).end();
    }
}