"use client"
import { useForm } from "react-hook-form";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { postReset } from "@/app/Api/Route/route";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Reset = () => {
    const schema = yup.object().shape({
        password: yup.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد").required("وارد کردن رمز عبور الزامی است")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "رمز عبور باید شامل یک حرف کوچک و یک حرف بزرگ و یک علامت باشد")
    });
    const { register, handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(schema),});
    const router = useRouter();
    const token = useSelector((state: RootState) => state.token.token);

    function onSubmit(data: any) {
        postReset(data, router, token);
    }
    
    
    return(
        <div className="w-[448px] h-[300px] flex flex-col items-center shadow-xl shadow-purple-300 mt-16">
            <p className=" mb-10 mt-10  text-3xl">رمز عبور جدید خود را وارد کنید</p>
            <form className=" flex flex-col justify-center items-center text-[#8C51C7]" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row-reverse items-baseline'>
                    <input type="password" className='bg-[#F0F0F0] rounded w-[385px] h-[50px] mb-1 focus:outline-none pl-8' placeholder="Password"
                    {...register("password",)}
                    />
                    <span className='-mr-7 z-20'><LockOutlinedIcon /></span>
                </div>
                <p className=" text-xs mb-1 font-dana text-red-700 z-50">{errors.password?.message as any}</p>

                <div className='flex flex-row mt-6 justify-center w-full'>
                    <button type="submit" className='text-white bg-[#8C51C7] flex justify-center items-center w-[120px] h-[45px] rounded-md mr-2 shadow-lg shadow-[#8C51C7]' >تایید</button>
                </div>
            </form>
        </div>
    );
}
export default Reset;