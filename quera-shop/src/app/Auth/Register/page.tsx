"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { postRegister } from "@/app/Api/Route/route";
import { useRouter } from "next/navigation";


const Register = () => {
    const { register, handleSubmit,formState: { errors }} = useForm();
    const router = useRouter();


    function onSubmit(data: any) {
        postRegister(data, router);
    }
    
    return(
        <div className="w-[448px] h-[560px] flex flex-col items-center shadow-xl shadow-purple-300">
            <p className=" mb-10 mt-6 text-6xl">ثبت نام</p>
            <form className=" flex flex-col justify-center items-center text-[#8C51C7]"  onSubmit={handleSubmit(onSubmit)}>
                {/* username */}
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-1 focus:outline-none pl-8' placeholder="Username"
                    {...register("username", { required: {value: true, message: "وارد کردن نام کاربری الزامی است", },
                        pattern: {value: /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\sa-zA-Z]+$/,
                            message: "نام کاربری وارد شده صحیح نمی باشد",
                        },
                    })}
                    />
                    <span className='-mr-7 z-20'><PersonOutlineOutlinedIcon /></span>
                </div>
                <p className=" text-xs mb-1 font-dana text-red-700 z-50">{errors.username?.message as any}</p>

                {/* email */}
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-1 focus:outline-none pl-8' placeholder="Email"
                    {...register("email", {
                        required: { value: true, message: "وارد کردن ایمیل الزامی است" },
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "ایمیل وارد شده صحیح نمی باشد" }
                    })}
                    />
                    <span className='-mr-7 z-20'><EmailOutlinedIcon /></span>
                </div>
                <p className=" text-xs mb-1 font-dana text-red-700 z-50">{errors.email?.message as any}</p>

                {/* password */}
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="password" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-1 focus:outline-none pl-8' placeholder="Password"
                    {...register("password", { required: { value: true, message: "وارد کردن رمز عبور الزامی است", },
                        minLength: { value: 8, message: " رمز عبور باید حداقل ۸ کاراکتر باشد ", },
                    })}
                    />
                    <span className='-mr-7 z-20'><LockOutlinedIcon /></span>
                </div>
                <p className=" text-xs mb-1 font-dana text-red-700 z-50">{errors.password?.message as any}</p>

                {/* national id */}
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-1 focus:outline-none pl-8' placeholder="National Id"
                    {...register("nationalId", { required: { value: true, message: "وارد کردن کد ملی الزامی است" ,},
                    pattern: {value: /^[0-9]+/i, message: "کد ملی فقط شامل عدد میباشد"},
                    minLength: { value: 10, message: " کد ملی باید حداقل 10 کاراکتر باشد ", },})}
                    />
                    <span className='-mr-7 z-20'><AssignmentIndOutlinedIcon /></span>
                </div>
                <p className=" text-xs mb-1 font-dana text-red-700 z-50">{errors.nationalId?.message as any}</p>

                {/* checkbox */}
                <div className='flex flex-row-reverse justify-start w-full '>
                    <input type="checkbox"
                    {...register("check", { required: { value: true, message: "لطفا ابتدا قوانین و مقررات را مطالعه فرمایید", },})}
                    />
                    <p className='text-black mr-2'>قوانین و مقررات را میپذیرم</p>
                </div>
                <p className="text-xs mt-1 font-dana text-red-700">{errors.check?.message as any}</p>

                <div className='flex flex-row mt-8 justify-center w-full'>
                    <button type="submit" className='text-white bg-[#8C51C7] flex justify-center items-center w-[120px] h-[45px] rounded-md mr-2 shadow-lg shadow-[#8C51C7]'>ثبت نام</button>
                    <Link href={'Login'}><button className=' flex justify-center items-center w-[120px] h-[45px] rounded-md' >ورود</button></Link>
                </div>
            </form>
        </div>
    );
}
export default Register;