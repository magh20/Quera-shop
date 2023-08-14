import Image from "next/image"
import MainPic from '../../../public/assets/mainpagePic.png'
import SearchIcon from '@mui/icons-material/Search';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

export const MainPage=()=>{
    return (
        <article dir="rtl">
            <section>
                <section className=" flex flex-row items-center gap-3 px-[90px]">
                   
                    <div className=" flex flex-col justify-center items-center gap-4">
                       <span className=" flex flex-col justify-start">
                        <h1 className=" text-[45px]">کوئرا</h1><p className=" text-[22px]">
                        جایی که آینده شما در اینجا ساخته میشود
                        <br/>
تو این روزا که با اومدن کرونا دنیا نشون داده که چقدر کسب کار اینترنتی میتونه مهم باشه ،بهترین فرصته که توهم یاد بگیری که کسب کارتو راه بندازی یا یاد بگیری که چجوری کسب کار دیگران بسازی و کسب درامد کنی.با دوره های آکادمی سالید لرن در کمترین زمان ممکن وبسایت خود را به بهترین شکل ممکن طراحی و بالا بیارید و فروش میلیونی خود در فضای اینترنت را شروع کنید..

                        </p>
                       </span>
                       <div className=" flex pl-[15px] flex-row h-12 w-full rounded-full shadow-[0_0_6px_1px_rgba(0,0,0,0.2)] items-center"><input type="text" className="w-full h-12 rounded-full px-2 outline-none" placeholder="دنبال چی میگردی ؟" /><SearchIcon className=" !text-[30px] text-[#8C51C7] scale-x-[-1]"/></div>
                    </div>
                    <Image width={700} height={394} src={MainPic} alt="MainPic" />
                </section>
                <section className=" flex flex-row justify-around mt-[46px]">
                    <section className=" flex flex-col gap-1 items-center">
                        <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                            <SupportAgentIcon className=" text-white !text-[100px]"/>
                    
                    </div>
                    <p>
                        پشتیبانی 24 ساعته
                    </p>
                    </section>
                    <section className=" flex flex-col gap-1 items-center">
                        <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                            <RedeemIcon className=" text-white !text-[100px]"/>
                    
                    </div>
                    <p>
                    تخفیف روزانه
                    </p>
                    </section>
                    <section className=" flex flex-col gap-1 items-center">
                        <div className=" bg-[#8C51C7] shadow-[0_0_6px_1px_#8C51C7] rounded p-0 w-[110px] h-[110px] flex justify-center items-center">
                            <PaymentsOutlinedIcon className=" text-white !text-[100px]"/>
                    
                    </div>
                    <p>
                    خرید اقساطی
                    </p>
                    </section>
                </section>

            </section>
        </article>
    )
}