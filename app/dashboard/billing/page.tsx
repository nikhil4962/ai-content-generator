"use client"
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import axio from'axios'
import { Loader2Icon } from 'lucide-react';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function billing() {

  const [loading,setLoading]=useState(false);
  const {user}=useUser();
  const {UserSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
  const CreateSubscription=()=>{
    setLoading(true)
    axio.post('/api/create-subscription',{})
    .then(resp=>{
        console.log(resp.data);
        OnPayment(resp.data.id)
    },(error)=>{
      setLoading(false);
    })
  }

     const OnPayment=(subId:string)=>{
         const options={
          "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          "subscription_id":subId,
          "name":'Tubeguruji AI',
          description:'Monthly subscription',
          handler:async(resp:any)=>{
            console.log(resp);
            setLoading(false);
            if(resp)
            {
              SaveSubscription(resp?.razorpay_payment_id)
            }
          }
         }
         
          //@ts-ignore
         const rzp=new window.Razorpay(options);
         rzp.open();
     }

        const SaveSubscription=async(paymentId:string)=>{
          const result=await db.insert(UserSubscription)
          .values({
            email:user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName,
            active:true,
            paymentId:paymentId,
            joinDate:moment().format('DD/MM/yyyy')
          });
          console.log(result);
          if(result)
          {
            window.location.reload();
          }
        }

  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"></div>
      <h2 className='text-center font-bold text-3xl my-3'>Upgrade with Monthly subscription</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:group-[]:"></div>

      <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"></div>
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Free 
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-lg font-bold text-gray-900 sm:text"></strong>

            <span className="text-3xl font-medium text-gray-700">/monthly</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          <svg 
          xmlns="http://www.w3.org./2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
            </svg>

            <span className="text-gray-700"> 10,000 Words/Month</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
          xmlns="http://www.w3.org./2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="currentColor"
          className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
          </svg>

          <span className="text-gray-700">50 + Content Template</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
          xmlns="http://www.w3.org./2000/svg"
          fill="none"
          viewBox=" 0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
          </svg>

          <span className="text-gray-700">50+ Content Templates</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
          xmlns="http://www.w3.org./2000/svg"
          fill="none"
          viewBox=" 0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
          </svg>

          <span className="text-gray-700"> Unlimited Download & Copy the content </span>
        </li>
      </ul>

      <a
       href="#"
       className="mt-8 block rounded-full
        border border-indigo-600
        px-12 py-3 text-center text-sm font-medium bg-gray-500 text-wrap
        hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:outline-dashed"
        >
          Currently Active plan
        </a>
       
        <div className="rounded-2xl bg-white border border-gray-200 p-3"></div>
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900">
             Monthly  
             <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-wrap"></strong>

            <span className="text-sm font-medium text-gray-700">/monthly</span>
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-1">
            <svg
             xmlns="http://www.w3.org./2000/svg"
             fill="none"
             viewBox=" 0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             className="size-5 text-indigo-700"
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
             </svg>

             <span className="text-gray-700"> 1,00,000 Words/Month </span>
          </li>

          <li className="flex items-center gap-1">
            <svg
            xmlns="http://www.w3.org./2000/svg"
            fill="none"
            viewBox=" 0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
            </svg>

            <span className="text-gray-700"> 50+ Template Access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg 
             xmlns="http://www.w3.org./2000/svg"
             fill="none"
             viewBox=" 0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             className="size-5 text-indigo-700"
             >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
             </svg>

             <span className="text-gray-700">50+ Template Access </span>
          </li>

          <li className="flex items-center gap-1">
            <svg 
             xmlns="http://www.w3.org./2000/svg"
             fill="none"
             viewBox=" 0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             className="size-5 text-indigo-700"
             >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5"></path>
             </svg>

             <span className="text-gray-700"> 1 Year of History  </span>
          </li>
        </ul>

        <button
        disabled={loading}
         onClick={()=>CreateSubscription()}
         className="mt-8 w-full rounded-full text-center flex gap-2 border border-indigo-600
         bg-white px-12 py-3  text-sm font-medium text-indigo-700"
         >
          {loading&&<Loader2Icon className='animate-spin'/>}
          {UserSubscription?'Active Plan': 'Get Started'}
         </button>
    </div>
     
  )
}

export default billing