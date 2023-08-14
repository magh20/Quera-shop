'use client'

import Image from "next/image"
import logo from '../../public/assets/QueraLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const Topbar=()=>{
const token=useSelector((state:RootState)=> state.token.token)
return (
    <nav dir="rtl" className=" px-[110px] py-[30px] bg-white w-full justify-between top-0 flex  flex-row">

        <section className=" flex flex-row items-center  ">
             {/* Navbar Quera Logo and options */}
            <Image className="ml-[31px] cursor-pointer"  src={logo} alt="Quera Logo" width={90} height={90} />
            <div className=" ml-[21px] text-[20px] cursor-pointer"><p>خانه</p></div>
            <div className=" ml-[21px] flex flex-row items-end text-[20px] cursor-pointer"><p>دوره ها</p><KeyboardArrowDownOutlinedIcon className=" !text-[20px]"/></div>
            <div className=" ml-[21px] text-[20px] flex flex-row items-end  cursor-pointer"><p>خدمات</p><KeyboardArrowDownOutlinedIcon className=" !text-[20px]"/></div>
            <div className=" ml-[21px] text-[20px] cursor-pointer"><p>تماس با ما</p></div>
            <div className=" ml-[21px] text-[20px] cursor-pointer"><p>درباره ما</p></div>
            <div className=" ml-[21px] text-[20px] cursor-pointer"><p>همکاری با ما</p></div>
           

        </section>
        <section className=" flex flex-row items-center gap-[25px] flex-grow-0">
            {/* Login and search buttons */}
                <div className="  w-[47px] h-[43px] cursor-pointer  rounded bg-white  flex justify-center items-center shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]"><SearchIcon className=" scale-x-[-1] !text-[35px] text-[#8C51C7]"/></div>
                {token ? <Link href={'/DashboardPanel/maindash'} >
                    <button className=" bg-[#8C51C7] h-[43px] rounded px-[8px] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]  flex flex-row items-center text-white">
                        <PersonOutlineOutlinedIcon/>
                        <p>
                        حساب کاربری
                        </p>
                        </button>
                        </Link>:<Link href={'/Auth/Login'} >
                    <button className=" bg-[#8C51C7] h-[43px] rounded px-[8px] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]  flex flex-row items-center text-white">
                        <PersonOutlineOutlinedIcon/>
                        <p>
                            ورود و ثبت نام
                        </p>
                        </button>
                        </Link>}
            </section>
    </nav>
)
}