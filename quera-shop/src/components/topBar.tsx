'use client'

import Image from "next/image"
import logo from '../../public/assets/QueraLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Topbar=()=>{
return (
    <nav dir="rtl" className=" px-[110px] py-[30px] bg-white w-full justify-between top-0 flex  flex-row">
        <section className=" flex flex-row items-center  ">
            <Image className="ml-[31px]" src={logo} alt="Quera Logo" width={90} height={90} />
            <div className=" ml-[21px] text-[20px]"><p>خانه</p></div>
            <div className=" ml-[21px] text-[20px]"><p>دوره ها</p></div>
            <div className=" ml-[21px] text-[20px]"><p>خدمات</p></div>
            <div className=" ml-[21px] text-[20px]"><p>تماس با ما</p></div>
            <div className=" ml-[21px] text-[20px]"><p>درباره ما</p></div>
            <div className=" ml-[21px] text-[20px]"><p>همکاری با ما</p></div>
           

        </section>
        <section className=" flex flex-row items-center gap-[25px] flex-grow-0">
                <div className="  w-[47px] h-[43px] cursor-pointer  rounded bg-white  flex justify-center items-center shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]"><SearchIcon className=" scale-x-[-1] !text-[35px] text-[#8C51C7]"/></div>
                <button className=" bg-[#8C51C7] h-[43px] rounded px-[8px] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]  flex flex-row items-center text-white"><PersonOutlineOutlinedIcon/><p>ورود و ثبت نام</p></button>
            </section>
    </nav>
)
}