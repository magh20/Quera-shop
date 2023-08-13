import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-toastify";

const BaseUrl = "http://localhost:5000/api";
let token;

export async function postLogin(data: { email: string; password: string; }) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/login`, {
            email: data.email,
            password: data.password
        }, { headers: { "Content-Type": "application/json" }, }
        );
        console.log(response);
        <Link href={'/'}></Link>
    } catch (error) {
        toast.error("ایمیل یا رمز عبور اشتباه می باشد");
        console.log(error);
    }
}

export async function postRegister(data: { email: string; password: string; username: string; }) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/register`, {
            fullName: data.username,
            email: data.email,
            password: data.password,
            phoneNumber: "09222222222",
            birthDate: "1357/01/26",
            nationalId:"6745556256",
            profile: "image.png"
            
        }, { headers: { "Content-Type": "application/json" } }
        )
        .then(function (response) {
            token = response.data.token;
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