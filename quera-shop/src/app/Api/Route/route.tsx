import { setToken } from '@/redux/features/action';
import axios from 'axios';
import Link from 'next/link';

const BaseUrl = "http://localhost:5000/api";

export async function postLogin(data: { email: string; password: string; }, router : any, dispach: any) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/login`, {
            email: data.email,
            password: data.password
        }, { headers: { "Content-Type": "application/json" }, }
        )
        .then(function(response){
            dispach(setToken(response.data.result.jwtToken));
            router.replace("/");
            console.log(response);
        })
    } catch (error) {
        console.log(error);
    }
}

export async function postRegister(data: { email: string; password: string; username: string; nationalId: number }, router : any) {
    try {
        const response = await axios.post(`${BaseUrl}/auth/register`, {
            fullName: data.username,
            email: data.email,
            password: data.password,
            phoneNumber: "09222222222",
            birthDate: "1357/01/26",
            nationalId: data.nationalId,
            profile: "image.png"
            
        }, { headers: { "Content-Type": "application/json" } }
        )
        .then(function (response) {
            router.replace("/Auth/Login");
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function postForget (data : { email : string}, router : any) {
    try {
        const response = await axios.post(`${BaseUrl}/forgetpassword`, {
            email: data.email,
        }, { headers: { "Content-Type": "application/json" } }
        ).then(function (response) {
            router.replace("/Auth/Reset");
            console.log(response)
        });
    } catch (error) {
        console.log(error);
    }
}

export async function postReset (data : { password : string}, router : any, token : string) {
    try {
        const response = await axios.post(`${BaseUrl}/resetPassword/:${token}`, {
            password: data.password,
        }, { headers: { "Content-Type": "application/json" } }
        ).then(function (response) {
            router.replace("/Auth/Login");
        });
    } catch (error) {
        console.log(error);
    }
}