/*"use client"

import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';
import { AIOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import React, { useEffect, useState } from 'react';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';


 function UsageTrack() {

const {user}=useUser();
const [totalUsage, setTotalUsage]=useState<number>();

 useEffect(()=>{
    user&&GetData();
 },[user])
}

const GetData =async()=> {
   const result:HISTORY[]=await db.select().from(AIOutput)
     .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
    //.where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

   GetTotalUsage(result);
}

 const GetTotalUsage=(result:HISTORY[])=>{
    let total:number= 0;
     result.forEach(element => {
        total=total+Number(element.aiResponse?.length)
    });

    setTotalUsage(total)
    console.log(total);

 }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
             <h2 className='font-medium'>Credits</h2>
             <div className='h-2 bg-[#99981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                 style={{
                    width:
                }}
                >
                </div>
             </div>
             <h2 className='text-sm'>{total}/10,000 Credits used</h2>
        </div>
        <Button variant={'secondary'} className="w-full my-3">Upgrade</Button>
    </div>
  )
}

export default UsageTrack; */

"use client";
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContent';

 function UsageTrack() {

   const {user} =useUser();
   const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
   const {UserSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
   const [maxWords,setMaxWords]=useState(1000)
   const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);

   useEffect(()=>{
     user&&GetData();
     user&&IsUserSubscribe();
   },[user]) ;

   useEffect(()=>{
         GetData();
   },[updateCreditUsage&&user])

  const GetData=async()=>{
      {/* @its-ignore */}
   const result:HISTORY[]=await db.select().from(AIOutput)
   .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

      GetTotalUsage(result)

  }

  const IsUserSubscribe=async()=>{
    const result=await db.select().from(UserSubscription)
    .where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress));

    if(result)
    {
      setUserSubscription(true);
      setMaxWords(1000000);
    }
  }

   const GetTotalUsage=(result:HISTORY[])=>{
      let total:number=0;
      result.forEach(element => {
           total=total+Number(element.aiResponse?.length)
      });
      setTotalUsage(total)
      console.log(total);
   }   

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>  
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full'>
          <div className='h-2 bg-white rounded-full'
            style={{
               width:(totalUsage/maxWords)*100+"%"
            }}
          >  
          </div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credits used</h2>
      </div>
      <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack