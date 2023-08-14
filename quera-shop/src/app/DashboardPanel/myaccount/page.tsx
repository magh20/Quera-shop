'use client'
import { RootState } from '@/redux/store'
import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

 const Myaccount=()=>{
    const userdata=useSelector((state:RootState)=> state.token.userData)
    const [editPhone,setEditPhone]=useState(false)
    const [phone,setPhone]=useState(()=> userdata.phoneNumber ? userdata.phoneNumber :'')
    const [shownphone,setshownPhone]=useState(()=> userdata.phoneNumber ? userdata.phoneNumber :'')
    const [address,setAddress]=useState('')
    const [showAddress,setShown]=useState('')
    const [editaddress,setEditaddress]=useState(false)
    
   
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues:{
        name: userdata.fullName.split(' ')[0] ? userdata.fullName.split(' ')[0]: '',
        lastname:userdata.fullName.split(' ')[1] ? userdata.fullName.split(' ')[1]:'',
        email:userdata.email ? userdata.email:''
    }});

    const onSubmit=(data:{})=>{
 console.log(data)
    }

    const phonenumber=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        const arr=shownphone.match(/[0-9]/) ?? []
        if (e.key == 'Enter' && shownphone.length==11 && arr.length >0){
            setEditPhone(false),
        setPhone(shownphone)
        }
        else if(e.key == "Escape"){
            setEditPhone(false)
            setshownPhone(phone)
        }
        

    }
    const addresschange=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key == 'Enter'&& showAddress.trim()!= ''){
            setEditaddress(false)
            setAddress(showAddress)
        }
        else if(e.key == 'Escape'){
            setEditaddress(false)
            setShown(address)
        }
     
    }
    
   return( 
   <article className=" flex flex-col pt-[17px] justify-start w-full h-full items-center">
            <p className=" text-5xl mb-[69px]">حساب کاربری</p>
            <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e)=> e.key == 'Enter' &&e.preventDefault()} className="flex flex-col justify-center items-center">
             <section className=" grid  gap-x-[90px] gap-y-[38px] mb-[49px] grid-cols-2 grid-rows-3">
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="name">نام</label>
                    <input {...register('name',{required:true})} id="name" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="lastname">نام خانوادگی</label>
                    <input {...register('lastname',{required:true})} id="lastname" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="number">شماره</label>
                    <span  style={{backgroundColor: editPhone ? 'white':undefined}} className="h-[63px] w-[350px] text-[27px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onBlur={()=>{setEditPhone(false)}} value={shownphone} onChange={(e)=>setshownPhone(e.target.value)} onKeyUp={phonenumber} style={{backgroundColor: editPhone ? 'white':undefined}} id="number" disabled={!editPhone ? true:false} className='h-[61px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
                       { !editPhone && <p onClick={()=>setEditPhone(true)} className=' cursor-pointer text-[21px] opacity-40 text-[#616161]'>Edit</p>}
                        </span>
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="email">ایمیل</label>
                    <input {...register('email',{required:true})}  id="email" className="h-[63px] focus:bg-white w-[350px] text-[27px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="role">نقش شما</label>
                    <input defaultValue={userdata.role == 'student' ? 'دانش آموز':'مدرس'} disabled id="role" className="h-[63px] focus:bg-white w-[350px] text-[29px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[29px]" htmlFor="address">آدرس</label>
                    <span style={{backgroundColor: editaddress ? 'white':undefined}} className="h-[63px] w-[350px] text-[27px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onBlur={()=>{setEditaddress(false)}} value={showAddress} onChange={(e)=>setShown(e.target.value)}  onKeyUp={addresschange} style={{backgroundColor: editaddress ? 'white':undefined}} id="address" disabled={!editaddress ? true:false} className='h-[61px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
                        { !editaddress && <p onClick={()=>setEditaddress(true)} className=' cursor-pointer text-[21px] opacity-40 text-[#616161]'>Edit</p>}
                        </span>
                </div>
    
             </section>
             <section className=" w-[217px] flex items-center justify-center cursor-pointer bg-[#8C51C7] py-[12px] text-white rounded-md">
                <button type="submit" className=" text-[28px]">ثبت تغییرات</button>
             </section>
             </form>
        </article>
        )
}
export default Myaccount