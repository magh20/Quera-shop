'use client'
import Image from 'next/image'
import profile from '../../../../public/assets/profile.png'
import {useState} from 'react'
import { type } from 'os'

import { Myaccount } from '../myaccount'

type Dashprops={
    name:string
}
export const Dashboard=({name}:Dashprops)=>{
    const [showcourses,setShow]=useState(false)
    return (
        <article dir="rtl" className=" flex gap-5 flex-row items-center justify-center w-screen h-screen">
            <section className=" h-[722px] flex flex-col gap-[58px]  text-white justify-start pt-[25px] items-center  w-[363px] shadow-lg rounded-lg bg-[#8C51C7]">
        <div className='flex gap-[40px] flex-col justify-center items-center'>
          <Image src={profile} width={150} alt='profile-pic'/>
          <span>{name}</span>
        </div>
        <div className='flex flex-col gap-[35px] items-start  w-full'>
          <span className='mr-[50px]'>
<p className=' cursor-pointer'>داشبورد</p>
          </span>
          <span className='flex flex-col'>
            <p onClick={()=> setShow(!showcourses)} className='mr-[50px] cursor-pointer'>دوره ها</p>
             <span style={{width:!showcourses ? 0:undefined,height:!showcourses ?0:undefined,marginTop:!showcourses ? 0:undefined,visibility:!showcourses ? 'hidden':'visible'}} className='flex flex-col transition-all gap-3 mt-[25px] pr-[34px]'>
              { showcourses && <><small className=' cursor-pointer'>دوره های من</small> 
               <small className=' cursor-pointer'>خرید دوره</small></>}
             </span>
            </span>
            <span className='mr-[50px] cursor-pointer'>
            حساب کاربری
            </span>
        </div>
            </section>
            <section className=" h-[722px] w-[1092px] rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]">
            <Myaccount/>
            </section>
        </article>
    )
}