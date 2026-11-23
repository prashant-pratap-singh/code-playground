"use server"
import { currentUser } from "@/features/auth/actions";
import { db } from "@/lib/db"
import { Templates } from "@prisma/client";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";

export const createPlayground = async (data:{
    title: string;
    template:Templates;
    description?: string;
    userId:string;

})=>{
    const {title,template,description,userId} = data;
    const user= await currentUser();
        try {
        const playground = await db.playground.create({
            data:{
                title,
                description,
                template,
                userId:user?.id!
            }
        });
        return playground;
    }
    catch (error) {
        console.log(error)
        return null;
    }   
}

export const getAllPlaygroundForUser = async ()=>{
    const user = await currentUser();
    try {
        const playground = await db.playground.findMany({
            where:{ 
                userId:user?.id!
            },
            include:{
                user:true,
                Starmark:{
                    where:{
                        userId:user?.id!
                    },
                    select:{
                        isMarked:true
                    }
                }
            }
        })
        return playground;
    } catch (error) {
        console.log(error)
        return null;
    }   
}

export const duplicatePlayground = async (id:string)=>{
   
    try {
        const originalPlayground = await db.playground.findUnique({
            where:{id},

        })
        if(!originalPlayground){
            throw new Error("Playground not found");
        }   

        const duplicatedPlayground = await db.playground.create({
            data:{
                title:`${originalPlayground.title} (Copy)`,
                description:originalPlayground.description,
                template:originalPlayground.template,
                userId:originalPlayground.userId
            }
        })
        revalidatePath("/dashboard");
        return duplicatedPlayground;
    } catch (error) {
        console.log(error)
        return null;
    }   
}

