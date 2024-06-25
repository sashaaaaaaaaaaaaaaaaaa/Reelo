import {PrismaClient} from "@prisma/client";

declare global {
    namespace globalThis {
        var prismadb : PrismaClient
    }
}
//Global Scope: Refers to variables, functions, or types that are accessible from anywhere in the application without being explicitly imported.
//
// global.d.ts: A TypeScript declaration file where you extend the global scope by defining types, interfaces, or variables that should be available globally throughout your project.