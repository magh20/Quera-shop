import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

 const Maindash = () => {
  return (
    // Main page of Dashboard
    <article className=" flex flex-col pt-[17px] justify-start w-full h-full items-center">
      <p className=" text-5xl text-[#616161] mb-[69px]">داشبورد</p>
      <section className=" grid  gap-x-[50px] gap-y-[38px] mb-[49px] grid-cols-2 grid-rows-3">
        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]   px-[38px] text-white rounded-md ">
          <span className=" flex flex-row items-center justify-center">
            <CastForEducationIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">سه دوره خریداری شده</p>
          </span>
        </div>
        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  px-[38px] py-[14px] text-white rounded-md text-3xl">
          <span className=" flex flex-row items-center justify-center">
            <ShoppingCartOutlinedIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">سبد خرید خالیست</p>
          </span>
        </div>

        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  px-[38px] py-[14px] text-white rounded-md text-3xl">
        <span className=" flex flex-row items-center justify-center">
            <AccountBalanceWalletOutlinedIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">ریال در کیف پول</p>
          </span>
        </div>
        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  px-[38px] py-[14px] text-white rounded-md text-3xl">
        <span className=" flex flex-row items-center justify-center">
            <CastForEducationIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">دوره موجود در سایت</p>
          </span>
        </div>

        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  px-[38px] py-[14px] text-white rounded-md text-3xl">
        <span className=" flex flex-row items-center justify-center">
            <ShoppingCartOutlinedIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">در انتظار پرداخت</p>
          </span>
        </div>
        <div className=" flex justify-center items-center cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  px-[38px] py-[14px] text-white rounded-md text-3xl">
        <span className=" flex flex-row items-center justify-center">
            <HeadsetMicIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">تیکت پاسخ داده شده</p>
          </span>
        </div>
      </section>
      <section className="text-3xl px-[91px]  cursor-pointer bg-gradient-to-br from-[#8B50C7] via-[#8866D2] to-[#876CD5]  py-[12px] text-white rounded-md">
      <span className=" flex flex-row items-center justify-center">
            <AccountCircleOutlinedIcon className=" !text-5xl" />
            <p className=" text-3xl pb-2.5">حساب کاربری</p>
          </span>
      </section>
    </article>
  );
};
export default Maindash