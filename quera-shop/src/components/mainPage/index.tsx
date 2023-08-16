'use client'
import Image from "next/image"
import MainPic from '../../../public/assets/mainpagePic.png'
import article from '../../../public/assets/articlePic.png'
import SearchIcon from '@mui/icons-material/Search';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import WestIcon from '@mui/icons-material/West';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image_1 from '../../../public/assets/courseSample1.png'
import image_2 from '../../../public/assets/courseSample2.png'
import Valid_1 from '../../../public/assets/SiteValid1.png'
import Valid_2 from '../../../public/assets/SiteValid2.png'
import telegram from '../../../public/assets/telegram.png'
import instagram from '../../../public/assets/instagram.png'
import twitter from '../../../public/assets/twitter.png'
import { useDraggable } from "react-use-draggable-scroll";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type courses=
  {
    id:number,
    name:string,
    teacher:string,
    price?:number,
    image?:string,
    view?:number,
    des?:string
  }


export const MainPage=()=>{
  const token=useSelector((state:RootState)=>state.token.token)
    const ref=useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const {events}=useDraggable(ref)
    const courses:courses[]=[{id:1,name:'آموزش بوت استرپ 4',teacher:'سالار امیر عظیمی نیلی',price:1200000,image:'image_1'},{id:2,name:'آموزش گوگل تگ منیجر',teacher:'سالار امیر عظیمی نیلی',price:0,image:'image_1'},
    {id:3,name:'آموزش بوت استرپ 4',teacher:'سالار امیر عظیمی نیلی',price:1200000,image:'image_1'},{id:4,name:'آموزش گوگل تگ منیجر',teacher:'سالار امیر عظیمی نیلی',price:0,image:'image_1'},
    {id:5,name:'آموزش بوت استرپ 4',teacher:'سالار امیر عظیمی نیلی',price:1200000,image:'image_1'},{id:6,name:'آموزش گوگل تگ منیجر',teacher:'سالار امیر عظیمی نیلی',price:0,image:'image_1'}]
    const articles:courses[]=[{id:1,name:'معرفی 5 وبسایت آموزش برنامه نویسی بطور کاملا رایگان',teacher:'سالار امیر عظیمی نیلی',view:150
  ,des:'در این بلاگ به معرفی چند وبسایت آموزش برنامه نویسی میپردازیم که این وب سایت ها کاملا رایگان است! شما میتوانید با مراجعه به این وب سایت ها، برنامه نویسی و طراحی سایت را بطور کاملا رایگان بیاموزید. البته این وب سایت ها به زبان انگلیسی هستند که میتوانید با ابزار های مترجم، آنها را به راحتی ...'
},{id:2,name:'معرفی 5 وبسایت آموزش برنامه نویسی بطور کاملا رایگان',teacher:'سالار امیر عظیمی نیلی',view:150
,des:'در این بلاگ به معرفی چند وبسایت آموزش برنامه نویسی میپردازیم که این وب سایت ها کاملا رایگان است! شما میتوانید با مراجعه به این وب سایت ها، برنامه نویسی و طراحی سایت را بطور کاملا رایگان بیاموزید. البته این وب سایت ها به زبان انگلیسی هستند که میتوانید با ابزار های مترجم، آنها را به راحتی ...'
},{id:3,name:'معرفی 5 وبسایت آموزش برنامه نویسی بطور کاملا رایگان',teacher:'سالار امیر عظیمی نیلی',view:150
,des:'در این بلاگ به معرفی چند وبسایت آموزش برنامه نویسی میپردازیم که این وب سایت ها کاملا رایگان است! شما میتوانید با مراجعه به این وب سایت ها، برنامه نویسی و طراحی سایت را بطور کاملا رایگان بیاموزید. البته این وب سایت ها به زبان انگلیسی هستند که میتوانید با ابزار های مترجم، آنها را به راحتی ...'
},{id:4,name:'معرفی 5 وبسایت آموزش برنامه نویسی بطور کاملا رایگان',teacher:'سالار امیر عظیمی نیلی',view:150
,des:'در این بلاگ به معرفی چند وبسایت آموزش برنامه نویسی میپردازیم که این وب سایت ها کاملا رایگان است! شما میتوانید با مراجعه به این وب سایت ها، برنامه نویسی و طراحی سایت را بطور کاملا رایگان بیاموزید. البته این وب سایت ها به زبان انگلیسی هستند که میتوانید با ابزار های مترجم، آنها را به راحتی ...'
},{id:5,name:'معرفی 5 وبسایت آموزش برنامه نویسی بطور کاملا رایگان',teacher:'سالار امیر عظیمی نیلی',view:150
,des:'در این بلاگ به معرفی چند وبسایت آموزش برنامه نویسی میپردازیم که این وب سایت ها کاملا رایگان است! شما میتوانید با مراجعه به این وب سایت ها، برنامه نویسی و طراحی سایت را بطور کاملا رایگان بیاموزید. البته این وب سایت ها به زبان انگلیسی هستند که میتوانید با ابزار های مترجم، آنها را به راحتی ...'
}]

    return (
    
      <article  dir="rtl">
        <section className="px-[90px]">
            {/* Entire Page */}
          <section className=" flex flex-row items-center gap-3 ">
            {/* site description at top */}
            <div className=" flex flex-col justify-center items-center gap-4">
              <span className=" flex flex-col justify-start">
                <h1 className=" text-[45px]">کوئرا</h1>
                <p className=" text-[22px]">
                  جایی که آینده شما در اینجا ساخته میشود
                  <br />
                  تو این روزا که با اومدن کرونا دنیا نشون داده که چقدر کسب کار
                  اینترنتی میتونه مهم باشه ،بهترین فرصته که توهم یاد بگیری که
                  کسب کارتو راه بندازی یا یاد بگیری که چجوری کسب کار دیگران
                  بسازی و کسب درامد کنی.با دوره های آکادمی سالید لرن در کمترین
                  زمان ممکن وبسایت خود را به بهترین شکل ممکن طراحی و بالا بیارید
                  و فروش میلیونی خود در فضای اینترنت را شروع کنید..
                </p>
              </span>
              <div className=" flex pl-[15px] flex-row h-12 w-full rounded-full shadow-[0_0_6px_1px_rgba(0,0,0,0.2)] items-center">
                <input
                  type="text"
                  className="w-full h-12 rounded-full px-2 pr-5 outline-none"
                  placeholder="دنبال چی میگردی ؟"
                />
                <SearchIcon className=" !text-[30px] text-[#8C51C7] scale-x-[-1]" />
              </div>
            </div>
            <Image
              className=" flex-grow  xl:h-[394px] w-[100%]"
              src={MainPic}
              alt="MainPic"
            />
          </section>
          <section className=" flex flex-row justify-around mt-[46px]">
            <section className=" flex flex-col gap-1 items-center">
              <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                <SupportAgentIcon className=" text-white !text-[100px]" />
              </div>
              <p>پشتیبانی 24 ساعته</p>
            </section>
            <section className=" flex flex-col gap-1 items-center">
              <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                <RedeemIcon className=" text-white !text-[100px]" />
              </div>
              <p>تخفیف روزانه</p>
            </section>
            <section className=" flex flex-col gap-1 items-center">
              <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                <PaymentsOutlinedIcon className=" text-white !text-[100px]" />
              </div>
              <p>خرید اقساطی</p>
            </section>
          </section>
          <section className=" mt-[60px] flex flex-col gap-2 justify-center items-center">
            {/* courses */}
            <h3 className=" py-1 flex flex-col gap-2 text-[30px]">
              جدید ترین دوره ها
              <span className=" h-[6px] w-full rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
            <section
              ref={ref}
              {...events}
              className=" mt-4 py-2 flex gap-[26px] no-scrollbar flex-row overflow-x-scroll px-2 max-w-full  flex-shrink-0"
            >
              {courses.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-white flex flex-col flex-shrink-0 rounded-xl shadow-[0_1px_6px_2px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src={image_1}
                      width={400}
                      height={180}
                      alt="CourseImg"
                    />
                    <span className=" pr-3 flex mt-2 flex-col gap-[8px] justify-start px-1 border-b-[2px] pb-5 border-b-[#DBDADA]">
                      <h4>{item.name}</h4>
                      <span className=" flex flex-row items-center gap-2">
                        <PersonIcon className=" text-gray-500" />
                        <small className=" text-[12px]">{item.teacher}</small>
                      </span>
                      <span className=" flex flex-row ite gap-1">
                        <p className=" text-[12px]">امتیاز:</p>
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                      </span>
                      <span className=" flex gap-[12px] flex-row items-center">
                        <AccessTimeIcon className=" !text-[#00B3E9] !text-[18px]" />
                        <p className="text-[#00B3E9] mb-1 text-[13px]">02:01:21</p>
                      </span>
                    </span>
                    <span className=" pr-3 flex flex-row px-2 py-3 justify-between">
                      <span className=" flex text-[#00B3E9] gap-1 flex-row items-center">
                        {item.price == 0 ? (
                          <p>رایگان</p>
                        ) : (
                          <>
                            {item.price}
                            <p className=" text-[#00B3E9]">تومان</p>
                          </>
                        )}
                      </span>
                      <span>
                        <WestIcon className=" cursor-pointer text-[#8C51C7]" />
                      </span>
                    </span>
                  </div>
                );
              })}
            </section>
           
          </section>
          <section className=" flex flex-col gap-8 justify-between mt-[35px] items-center">
                {/* solid learn courses */}
            <div className=" flex flex-row justify-between w-full">
                <span className=" w-[112px]"></span>
                <h3 className=" py-1 flex flex-col gap-2 text-[30px]">
            آخرین دوره های سالید لرن
              <span className=" h-[6px]  rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
            <span className=" flex flex-row gap-2 cursor-pointer items-center"><p>همه دوره ها</p><WestIcon className=" text-[#8C51C7]"/></span>
            </div>
            <div className=" grid grid-cols-4  gap-[40px] ">
            {courses.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className=" flex bg-white flex-col flex-shrink-0 rounded-xl shadow-[0_1px_6px_2px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src={image_1}
                      width={310}
                      height={250}
                      className=" min-w-[310px] min-h-[200px] "
                      alt="CourseImg"
                    />
                    <span className=" flex mt-2 flex-col gap-[8px] pr-3  justify-start px-1 border-b-[2px] pb-5 border-b-[#DBDADA]">
                      <h4>{item.name}</h4>
                      <span className="  flex flex-row items-center gap-2">
                        <PersonIcon className=" text-gray-500" />
                        <small className=" text-[12px]">{item.teacher}</small>
                      </span>
                      <span className="  flex flex-row ite gap-1">
                        <p className=" text-[12px]">امتیاز:</p>
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                        <StarIcon className=" text-yellow-400 !text-[18px] " />
                      </span>
                      <span className=" flex gap-[12px] flex-row items-center">
                        <AccessTimeIcon className=" !text-[#00B3E9] !text-[18px]" />
                        <p className="text-[#00B3E9] text-[13px]">02:01:21</p>
                      </span>
                    </span>
                    <span className=" pr-3  flex flex-row px-2 py-5 justify-between">
                      <span className="  flex text-[#00B3E9] gap-1 flex-row items-center">
                        {item.price == 0 ? (
                          <p>رایگان</p>
                        ) : (
                          <>
                            {item.price}
                            <p className=" text-[#00B3E9]">تومان</p>
                          </>
                        )}
                      </span>
                      <span>
                        <WestIcon className=" cursor-pointer text-[#8C51C7]" />
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
            </section>
            <section className=" flex flex-col gap-[45px] mt-[30px] items-center mb-24 ">
               {/* Articles section */}
            <div className=" flex flex-row justify-between w-full">
                <span className=" w-[112px]"></span>
                <h3 className=" py-1 flex flex-col gap-2 text-[30px]">
                همه مقالات
              <span className=" h-[6px]  rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
            <span className=" flex flex-row gap-2 cursor-pointer items-center"><p>
            همه مقالات
              </p><WestIcon className=" text-[#8C51C7]"/></span>
            </div>
             
              <div className=" grid grid-cols-3 gap-8 ">
                {
                  articles.map((item:any)=>{
                      return (
                      <div key={item.id} className=" min-w-0 min-h-[318px] relative pb-3 bg-white flex flex-col max-w-[440px] justify-center rounded-xl shadow-[0_1px_6px_2px_rgba(0,0,0,0.2)] " > 
                           <Image src={article} alt="articlePic" className=" min-w-[441px] overflow-hidden min-h-0" width={440} height={230}/>
                           <button className=" w-10 h-10 flex justify-center items-center absolute rounded-full shadow-[0_0px_4px_1px_#8C51C7] top-[190px] left-6  bg-[#8C51C7]"><ArrowBackIosNewIcon className=" !text-[22px] text-white"/></button>
                           <div className=" flex flex-col justify-center items-center">
                           <span className=" font-semibold mt-4 mb-2">
                         {item.name}
                           </span>
                           <span className=" flex flex-row w-[95%] mb-[12px] border-b-[3px] py-2 border-b-[#DBDADA] justify-between">
                             <span className=" flex flex-row gap-0.5  items-center"><PersonIcon className=" text-[#8C51C7] drop-shadow-[0_0px_1.5px_#8C51C7]" />
                             <small className="text-[#6E6E6E]">
                              {item.teacher}
                             </small>
                             
                             </span>
                             <span className=" flex flex-row gap-1 items-center"><RemoveRedEyeIcon className=" text-[#8C51C7] drop-shadow-[0_0px_1px_#8C51C7]"/><small className="text-[#6E6E6E]">{item.view}</small></span>
                           </span>
                           <span className=" px-3 text-[13px] flex justify-center">
                           {item.des}
                           </span>
                           </div>
                      </div>
                      )
                  })
                }

              </div>
            </section>
        </section>
        <footer className=" flex flex-col justify-center items-center w-full h-[300px] bg-[#353338]  ">
          <section className=" flex flex-row justify-between w-full pl-[30px] pr-[90px] items-center">
            <div className=" flex flex-col text-white w-[300px] items-start">
            <h3 className=" py-1 flex flex-col gap-1">
            درباره کوئرا
              <span className=" h-[3px]  rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
               <p className=" text-sm">
               کوئرا یک اکادمی آنلاین برنامه نویسی تشکیل شده از با تجربه ترین برنامه نویسان ایران است.ما در اینجا سعی میکنیم جدیدترین تکنولوژی های روز دنیا را با شما به اشتراک بگذاریم
               </p>
            </div>
            <div className=" text-white flex flex-col items-start">
            <h3 className=" py-1 flex flex-col gap-1">
            دسترسی سریع
              <span className=" h-[3px]  rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
             <span className=" grid grid-cols-2 gap-x-10 text-[12px] gap-y-[6px]">
              <p onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} className=" text-[#8C51C7] cursor-pointer">صفحه اصلی</p>
              {token ? <Link href={'/DashboardPanel/maindash'} >
                    
                        <p>
                        حساب کاربری
                        </p>
                        </Link>:<Link href={'/Auth/Login'} >
                        <p>
                            ورود و ثبت نام
                        </p>
                        
                        </Link>}
              <p className=" cursor-pointer">
              دوره ها
              </p>
              <p className=" cursor-pointer">
              تماس با ما
              </p>
              <p className=" cursor-pointer">
              مقالات
                </p>
                <p className=" cursor-pointer">
                درباره ما
                </p>
                <p className=" cursor-pointer">
                خدمات
                </p>
            </span>
            </div>
            <div className=" flex flex-row items-center gap-1">
           
             <Image src={Valid_1} alt="validIcon" className=" flex-grow-0 flex-shrink-0 h-[110px]" width={120} height={80}/>
             <Image src={Valid_2} alt="validIcon" className=" flex-grow-0 flex-shrink-0" width={130} height={80}/>
            </div>
            <div className=" my-4 rounded-md pt-1 pb-4 px-4 flex flex-col items-center justify-center bg-white">
            <h3 className=" py-1 flex flex-col gap-1 mb-1">
            درخواست مشاوره رایگان
              <span className=" h-[3px]  rounded-full shadow-[0_1px_5px_1px_#8C51C7]  bg-[#8C51C7]"></span>
            </h3>
            <span className=" flex flex-col gap-2 justify-center">
               <input type="text" placeholder="نام" className=" px-2 py-0.5 rounded outline-none border border-[#9A9A9A]" />
               <input type="text" placeholder="شماره موبایل" className=" px-2 py-0.5 rounded outline-none border border-[#9A9A9A]" />
               <textarea placeholder="توضیحات" className=" px-2 py-0.5 resize-none rounded outline-none border border-[#9A9A9A]" />
               <button className=" bg-[#8C51C7] h-[30px] rounded px-[8px] shadow-[0_0_7px_1px_#8C51C7] justify-center  flex flex-row items-center text-white">
                        <p>
                        ثبت
                        </p>
                        </button>
            </span>
           
            </div>

          </section>
          <section className=" w-full h-full items-center flex flex-row px-[90px] text-white text-sm justify-between  bg-[#3E3D40]">
            <p>تمامی حقوق برای سایت محفوظ می باشد.</p>
            <span className=" flex flex-row ml-2 gap-2 items-center">
              <Image src={twitter} className=" cursor-pointer" alt="twitter" width={25} height={25}/>
              <Image src={telegram} className=" cursor-pointer" alt="telegram" width={25} height={25}/>
              <Image src={instagram} className=" cursor-pointer" alt="instagram" width={25} height={25}/>
            </span>
          </section>

        </footer>
      </article>
    );
}