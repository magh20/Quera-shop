'use client'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useState } from "react"

const Mycourses=()=>{
    const [courses,setCourses]=useState([{id:1, pic:'picture',name:'React',code:'2310',date:'1400/5/10',teacher:'علی شفیعی',status:'در حال انتشار'},{id:2, pic:'picture',name:'React',code:'2310',date:'1400/5/10',teacher:'علی شفیعی',status:'در حال انتشار'}])
    return (
            <article className=" relative flex flex-col pt-[17px]  w-full h-full items-center">
            <p className=" text-5xl mb-[69px]">دوره های  من</p>
            <section className=" flex flex-col gap-4 items-center">
                <div className=" text-[17px] flex flex-row gap-[97px]">
                    <span  className=" min-w-[75px] text-center ">عکس محصول</span>
                    <span  className=" min-w-[75px] text-center ">نام محصول</span>
                    <span  className=" min-w-[75px] text-center ">کد محصول</span>
                    <span  className=" min-w-[75px] text-center ">تاریخ</span>
                    <span className=" min-w-[75px] text-center ">مدرس</span>
                    <span  className=" min-w-[75px] text-center ">وضعیت</span>
                </div>
             <div className=" flex flex-col justify-center items-center gap-[25px]">
                {courses.map((item)=>{
                    return (
                        <span key={item.id} className="flex rounded-lg gap-[82px] min-w-[940px] text-[17px] flex-row bg-[#F7F7F7] pr-[45px] pl-[22px] min-h-[60px] items-center border border-[#D6D6D6]">
                         <span className="min-w-[75px] text-center">{item.pic}</span>
                         <span className="min-w-[75px] text-end">{item.name}</span> 
                         <span className="min-w-[100px] text-end">{item.code}</span>
                         <span className="min-w-[75px] text-center mr-[40px]">{item.date}</span>   
                         <span className="min-w-[75px] text-center ">{item.teacher}</span>   
                         <span className="min-w-[75px] text-center">{item.status}</span>   
                        </span>
                    )
                })}
             </div>
            </section>
            <div className=' flex flex-row gap-1 text-[17px] items-center absolute bottom-1'>
                <div className=' bg-[#F7F7F7] rounded-lg  cursor-pointer border border-[#D6D6D6] flex justify-center items-center w-[45px] text-[#616161] h-[42px]'><ArrowForwardIosIcon/></div>
                <div className=' from-[#8B50C7] rounded-lg cursor-pointer  via-[#8866D2] to-[#876CD5] bg-gradient-to-br text-white  border border-[#D6D6D6] flex justify-center items-center w-[45px] h-[42px]'>1</div>
                <div className=' bg-[#F7F7F7] rounded-lg cursor-pointer  border border-[#D6D6D6] flex justify-center items-center w-[45px] h-[42px]'>2</div>
                <div className=' bg-[#F7F7F7] rounded-lg  cursor-pointer border border-[#D6D6D6] flex justify-center items-center w-[45px] text-[#616161] h-[42px]'><ArrowBackIosNewIcon/></div>
            </div>
        </article>
    )
}
export default Mycourses