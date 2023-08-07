'use client'
import { useForm } from  'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from "next/link";
import { postLogin } from '@/app/Api/Route/page';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data: any) {
        return postLogin(data);
    }
    
    return(
        <div className="w-[448px] h-[486px] flex flex-col items-center shadow-xl shadow-purple-300">
            <p className=" mb-14 mt-8 text-6xl">ورود</p>
            <form className=" flex flex-col justify-center items-center text-[#8C51C7]">
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-4 focus:outline-none pl-8' placeholder="Email"
                    {...register("email", {
                        required: { value: true, message: "وارد کردن ایمیل الزامی است" },
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "ایمیل وارد شده صحیح نمی باشد" }
                    })}
                    />
                    <span className='-mr-7 z-20'><EmailOutlinedIcon /></span>
                    <p className=" text-xxs mt-1 font-dana text-red-700 z-50">{errors.email?.message as any}</p>
                </div>
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="password" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-4 focus:outline-none pl-8' placeholder="Password"
                    {...register("password", { required: { value: true, message: "وارد کردن رمز عبور الزامی است" } })}
                    />
                    <span className='-mr-7 z-20'><LockOutlinedIcon /></span>
                </div>
                <div className='flex flex-row-reverse justify-start w-full'>
                    <input type="checkbox"/>
                    <p className='text-black mr-2'>من را به خاطر بسپار</p>
                </div>
                <div className="flex flex-row  items-center mt-6 w-full justify-end">
                    <Link href={'Forget'}><button className=" text-sm font-semibold text-[#8C51C7] flex-none order-2 flex-grow-0 ">رمز عبور را فراموش کرده‌ای؟</button></Link>
                </div>
                <div className='flex flex-row mt-8 justify-center w-full'>
                    <button type="submit" className='text-white bg-[#8C51C7] flex justify-center items-center w-[120px] h-[45px] rounded-md mr-2 shadow-lg shadow-[#8C51C7]' onSubmit={handleSubmit(onSubmit)}>ورود</button>
                    <Link href={'Register'}><button className=' flex justify-center items-center w-[120px] h-[45px] rounded-md' >ثبت نام</button></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;