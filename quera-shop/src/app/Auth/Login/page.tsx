'use client'
import { useForm } from  'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from "next/link";
import { postLogin } from '@/app/Api/Route/route';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().required("وارد کردن ایمیل الزامی است").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "ایمیل وارد شده صحیح نمی باشد"),
        password: yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("وارد کردن رمز عبور الزامی است")
    });
      
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema),});
    const router = useRouter();
    const dispach = useDispatch<AppDispatch>();

    function onSubmit(data: any) {
        return postLogin(data, router, dispach);
    }

    return(
        <div className="w-[448px] h-[486px] flex flex-col items-center shadow-xl shadow-purple-300">
            <p className=" mb-14 mt-6 text-6xl">ورود</p>
            <form className=" flex flex-col justify-center items-center text-[#8C51C7]" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] focus:outline-none pl-8' placeholder="Email"
                    {...register("email",)}
                    />
                    <span className='-mr-7 z-20'><EmailOutlinedIcon /></span>
                </div>
                <p className=" text-xs mt-2 text-red-700 z-50 mb-2">{errors.email?.message as string }</p>

                <div className='flex flex-row-reverse items-baseline'>
                    <input type="password" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] focus:outline-none pl-8' placeholder="Password"
                    {...register("password",)}
                    />
                    <span className='-mr-7 z-20'><LockOutlinedIcon /></span>
                </div>
                <p className=" text-xs mt-2 text-red-700 z-50 mb-2">{errors.password?.message as string }</p>

                <div className='flex flex-row-reverse justify-start w-full'>
                    <input type="checkbox"/>
                    <p className='text-black mr-2'>من را به خاطر بسپار</p>
                </div>
                <div className="flex flex-row  items-center mt-4 w-full justify-end">
                    <Link href={'Forget'}><button className=" text-sm font-semibold text-[#8C51C7] flex-none order-2 flex-grow-0 ">رمز عبور را فراموش کرده‌ای؟</button></Link>
                </div>
                <div className='flex flex-row mt-10 justify-center w-full'>
                    <button type="submit" className='text-white bg-[#8C51C7] flex justify-center items-center w-[120px] h-[45px] rounded-md mr-2 shadow-lg shadow-[#8C51C7]' >ورود</button>
                    <Link href={'Register'}><button className=' flex justify-center items-center w-[120px] h-[45px] rounded-md' >ثبت نام</button></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;