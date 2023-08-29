// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import { setUserData,setToken } from "redux/features/action"
var baseurl='http://localhost:5000/api'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
export const register=async(user,email,pass,phone,id,role,seterror,router)=>{
  
    await axios.post(`${baseurl}/auth/employee/register`,{
      "fullName": user,
    "email": email,
    "password": pass,
    "phoneNumber": phone,
    "birthDate": "1357/01/26",
    "nationalId":id,
    "address":"iranfgfdg",
    "role":role,
    "profile": "image.png"
    })
    .then((res)=>{
      console.log(res)
      seterror([res.data.message[0].message,res.data.message[0].eventId])
      router.replace('dashboard')

    })
    .catch((error)=>{
      console.log(error)
      error.response && error.response.data.message[0].eventId != 400 ? seterror([error.response.data.message[0].message,error.response.data.message[0].message.eventId]):seterror(['پسورد وارد شده ضعیف است',400])
    })
}
export const login=async(email,pass,dispatch,router,seterror)=>{
  await axios.post(`${baseurl}/auth/employee/login`,{
    email:email,
    password:pass
  })
  .then((res)=>{
    seterror([res.data.message[0].message,res.data.message[0].eventId])
    console.log(res.data)
    dispatch(setToken(res.data.result.jwtToken))
    dispatch(setUserData(res.data.result.employeeModel))
    router.replace('dashboard')
  
    

    
  })
  .catch((error)=>{
   
   error.response && seterror([error.response.data.message.message[0].message,error.response.data.message.message[0].eventId])
  })
}
