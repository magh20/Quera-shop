'use client'
import { useForm } from  'react-hook-form';

const Login = () => {
    const { handleSubmit } = useForm();
    
    return(
        <div className="w-[448px] h-[486px] flex flex-col ">
            <p>ورود</p>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="checkbox" />
                <button type="submit">ورود</button>
                <button>ثبت نام</button>
            </form>
        </div>
    );
}

export default Login;