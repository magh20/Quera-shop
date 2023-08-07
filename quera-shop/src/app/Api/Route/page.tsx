import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-toastify";

export async function GET() {
    
}

export async function postLogin(data: { email: any; password: any; }) {
    try {
        const response = await axios.post(`${process.env.BaseUrl}/auth/login`, {
            emailOrUsername: data.email,
            password: data.password
        }, { headers: { "Content-Type": "application/json" } }
        );
        <Link href={'/'} ></Link>
    } catch (error) {
        toast.error("ایمیل یا رمز عبور اشتباه می باشد");
    }
}

export async function postRegister(data: { email: any; password: any; }) {
    try {
        const response = await axios.post(`${process.env.BaseUrl}/auth/register`, {
            emailOrUsername: data.email,
            password: data.password
        }, { headers: { "Content-Type": "application/json" } }
        )
        .then(function (response) {
            <Link href={'../Auth/Login'}></Link>
        });
    } catch (error) {
        console.log(error);
    }
}