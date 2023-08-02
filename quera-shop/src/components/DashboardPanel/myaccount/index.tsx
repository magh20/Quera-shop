'use client'
import {useState} from 'react'

export const Myaccount=()=>{
    const [editPhone,setEditPhone]=useState(false)
    const [editaddress,setEditaddress]=useState(false)
   return( <article className=" flex flex-col pt-[17px] justify-start w-full h-full items-center">
            <p className=" text-5xl mb-[69px]">حساب کاربری</p>
            <form onKeyDown={(e)=> e.key == 'Enter' &&e.preventDefault()} className="flex flex-col justify-center items-center">
             <section className=" grid  gap-x-[90px] gap-y-[38px] mb-[49px] grid-cols-2 grid-rows-3">
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="name">نام</label>
                    <input id="name" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="lastname">نام خانوادگی</label>
                    <input id="lastname" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="number">شماره</label>
                    <span style={{backgroundColor: editPhone ? 'white':undefined}} className="h-[63px] w-[350px] text-[27px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onKeyUp={(e)=>e.key == 'Enter' && setEditPhone(false)} style={{backgroundColor: editPhone ? 'white':undefined}} id="number" disabled={!editPhone ? true:false} className='h-[61px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
                       { !editPhone && <p onClick={()=>setEditPhone(true)} className=' cursor-pointer text-[21px] opacity-40 text-[#616161]'>Edit</p>}
                        </span>
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="email">ایمیل</label>
                    <input id="email" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="role">نقش شما</label>
                    <input id="role" className="h-[63px] focus:bg-white w-[350px] text-[29px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="address">آدرس</label>
                    <span style={{backgroundColor: editaddress ? 'white':undefined}} className="h-[63px] w-[350px] text-[27px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onKeyUp={(e)=>e.key == 'Enter' && setEditaddress(false)} style={{backgroundColor: editaddress ? 'white':undefined}} id="address" disabled={!editaddress ? true:false} className='h-[61px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
                        { !editaddress && <p onClick={()=>setEditaddress(true)} className=' cursor-pointer text-[21px] opacity-40 text-[#616161]'>Edit</p>}
                        </span>
                </div>
    
             </section>
             <section className=" w-[217px] flex items-center justify-center cursor-pointer bg-[#8C51C7] py-[12px] text-white rounded-md">
                <button type="submit" className=" text-[28px]">ثبت تغییرات</button>
             </section>
             </form>
        </article>
        )
}