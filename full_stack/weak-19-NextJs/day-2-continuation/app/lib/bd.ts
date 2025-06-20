import { PrismaClient } from "../generated/prisma";
const prismaClientSignleton=()=>{
    return new PrismaClient
}

//@ts-ignore
const prisma = globalThis.prisma ?? prismaClientSignleton()

export default prisma
//@ts-ignore
if(process.env.DATABASE_URL !== 'production') globalThis.prisma = prisma 