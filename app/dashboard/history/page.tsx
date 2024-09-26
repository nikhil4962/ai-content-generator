import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateListSection";

export interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt:string
}
async function History() {
    const user=await currentUser();

    {/* @ts-ignore */}
    const HistoryList:HISTORY[]=await db.select().from(AIOutput)
    .where(eq(AIOutput?.createdAt,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

    const GetTemplateName=(slug:string)=>{

        const template:TEMPLATE|any=Templates?.find((item)=>item)
        return template;
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-2xl'>History</h2>
            <p className='tetx-gray-500'>Search your previously geen</p>
        </div>
    )
}