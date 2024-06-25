import {PrismaClient} from '@prisma/client'

const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') global.prismadb = client;
export default client;

//handle hot reloading of PrismaClient save to global file avoiding repeated initializations.