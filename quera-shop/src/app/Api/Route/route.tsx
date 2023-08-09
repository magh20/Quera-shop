import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-toastify";

const BaseUrl = "http://localhost:3000/api";

export async function postLogin(data: { email: any; password: any; }) {
    try {
        const response = await axios.post(`${BaseUrl}/api/auth/login`, {
            email: data.email,
            password: data.password
        }, { headers: { "Content-Type": "application/json" } }
        );
        console.log(response);
        <Link href={'/'}></Link>
    } catch (error) {
        toast.error("ایمیل یا رمز عبور اشتباه می باشد");
    }
}

export async function postRegister(data: { email: string; password: string; username: string; }) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/register`, {
            email: data.email,
            password: data.password,
            fullName: data.username,
            
        }, { headers: { "Content-Type": "application/json" } }
        )
        .then(function (response) {
            <Link href={'../Auth/Login'}></Link>
        });
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

export async function postForget (data : { email : string}) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/forgetpassword`, {

        }, { headers: { "Content-Type": "application/json" } }
        ).then(function (response) {
            <Link href={'../Auth/Reset'}></Link>
        });
    } catch (error) {
        console.log(error);
    }
}

export async function postReset (data : { password : string}) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/resetPassword/:token`, {

        }, { headers: { "Content-Type": "application/json" } }
        ).then(function (response) {
            <Link href={'../Auth/Login'}></Link>
        });
    } catch (error) {
        console.log(error);
    }
}