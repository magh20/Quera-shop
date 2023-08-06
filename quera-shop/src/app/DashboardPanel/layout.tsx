"use client";
import Image from "next/image";
import profile from "../../../public/assets/profile.png";
import { useState } from "react";
import { type } from "os";
import SpaceDashboardSharpIcon from "@mui/icons-material/SpaceDashboardSharp";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from "next/link";

type Dashprops = {
  name: string;
  children : React.ReactNode
};
 const Dashboard = ({ name ,children}: Dashprops) => {
  const [showcourses, setShow] = useState(false);
  return (
    <article
      dir="rtl"
      className=" text-[26px] flex gap-5 flex-row items-center justify-center w-screen h-screen"
    >
      <section className=" h-[722px] flex flex-col gap-[58px]  text-white justify-start pt-[25px] items-center  w-[363px] shadow-lg rounded-lg bg-gradient-to-br from-[#8C51C7] to-[#876CD5]">
        <div className="flex gap-[40px] flex-col justify-center items-center">
          <Image src={profile} width={150} alt="profile-pic" />
          <span>{name}</span>
        </div>
        <div className="flex flex-col gap-[20px] items-start  w-full">
          <span className="mr-[53px] gap-1 flex flex-row items-center">
            <SpaceDashboardSharpIcon className=" text-4xl" />
            <Link href={'maindash'}><p className=" cursor-pointer box-border pb-1.5">داشبورد</p></Link>
          </span>
          <span className="flex flex-col w-full">
            <div className=" flex flex-row justify-between items-center pl-[34px] w-full">
              <span className=" flex flex-row gap-1 mr-[53px] items-center">
                <OndemandVideoIcon className=" text-4xl" />
                <p
                  onClick={() => setShow(!showcourses)}
                  className=" cursor-pointer pb-2"
                >
                  دوره ها
                </p>
              </span>
              <KeyboardArrowDownIcon style={showcourses ?undefined:{rotate:'-180deg'}} className=" transition-all text-4xl" />
            </div>
            <span
              style={{
                width: !showcourses ? 0 : undefined,
                height: !showcourses ? 0 : undefined,
                marginTop: !showcourses ? 0 : undefined,
                visibility: !showcourses ? "hidden" : "visible",
              }}
              className="flex flex-col transition-all gap-3 mt-[25px] pr-[40px]"
            >
              {showcourses && (
                <>
                  <Link href={'mycourses'}><small className=" text-[20px] cursor-pointer">
                    دوره های من
                  </small></Link>
                  <small className=" text-[20px] cursor-pointer">
                    خرید دوره
                  </small>
                </>
              )}
            </span>
          </span>
          <span className="mr-[53px] gap-1 flex flex-row items-center">
            <AccountCircleOutlinedIcon className=" text-4xl" />
            <Link href={'myaccount'}><p className=" cursor-pointer box-border pb-1.5">حساب کاربری</p></Link>
          </span>
        </div>
      </section>
      <section className=" h-[722px] w-[1092px] rounded-lg shadow-[0_0_20px_1px_rgba(0,0,0,0.2)]">
        {children}
      </section>
    </article>
  );
};
export default Dashboard
