'use client'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useForm } from  'react-hook-form';
import { postForget } from '@/app/Api/Route/route';
import { useRouter } from 'next/navigation';

const Forget = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = (data : any) => {
        postForget(data, router);
    }
    
    return(
        <div className="w-[448px] h-[300px] flex flex-col items-center shadow-xl shadow-purple-300 mt-16">
            <p className=" mb-10 mt-10  text-3xl">لطفا ایمیل خود را وارد کنید</p>
            <form className=" flex flex-col justify-center items-center text-[#8C51C7]" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="text" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] focus:outline-none pl-8' placeholder="Email"
                    {...register("email", {
                        required: { value: true, message: "وارد کردن ایمیل الزامی است" },
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "ایمیل وارد شده صحیح نمی باشد" }
                    })}
                    />
                    <span className='-mr-7 z-20'><EmailOutlinedIcon /></span>
                </div>
                <p className=" text-xs mt-2 text-red-700 z-50 mb-2">{errors.email?.message as string }</p>

                <div className='flex flex-row mt-6 justify-center w-full'>
                    <button type="submit" className='text-white bg-[#8C51C7] flex justify-center items-center w-[120px] h-[45px] rounded-md mr-2 shadow-lg shadow-[#8C51C7]' >تایید</button>
                </div>
            </form>
        </div>
    );
}
export default Forget;