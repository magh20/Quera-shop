import { setToken, setUserData } from '@/redux/features/action';
import axios from 'axios';

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
            dispach(setUserData(response.data.result.studentModel));
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
        const response = await axios.post(`${BaseUrl}/resetPassword/:${token.toString()}`, {
            password: data.password,
        }, { headers: { "Content-Type": "application/json" } }
        ).then(function (response) {
            router.replace("/Auth/Login");
        });
    } catch (error) {
        console.log(error);
    }
}
export async function UpdateStudent(data:{fullName:string,email:string,phone:string,birthDate:string,national:string,profile:string},id:string,token:string,dispach:any){
    await axios.put(`${BaseUrl}/student/${id}`,{
        fullName:data.fullName,
        email:data.email,
        phoneNumber:data.phone,
        birthDate:data.birthDate,
        nationalId:data.national,
        profile:data.profile
    },{headers:{ 'x-auth-token' : token}})
    .then((response)=>{
        
      dispach(setUserData(response.data.result))
    })
    .catch((error)=>{
        console.log(error)
    })
}