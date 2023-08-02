export const Maindash=()=>{
    return (
        <article className=" flex flex-col pt-[17px] justify-start w-full h-full items-center">
            <p className=" text-5xl mb-[69px]">داشبورد</p>
             <section className=" grid  gap-x-[90px] gap-y-[38px] mb-[49px] grid-cols-2 grid-rows-3">
                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">دوره خریداری شده</div>
                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">سبد خرید خالیست</div>

                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">ریال در کیف پول</div>
                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">دوره موجود در سایت</div>

                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">در انتظار پرداخت</div>
                <div className=" flex justify-center items-center cursor-pointer bg-[#8C51C7] px-[38px] py-[14px] text-white rounded-md text-3xl">تیکت پاسخ داده شده</div>
             </section>
             <section className="text-3xl px-[91px]  cursor-pointer bg-[#8C51C7] py-[12px] text-white rounded-md">
                <p className=" ">حساب کاربری</p>
             </section>
        </article>
    )
}