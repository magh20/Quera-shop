'use client'
import { UpdateStudent } from '@/app/Api/Route/route'
import { RootState } from '@/redux/store'
import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

 const Myaccount=()=>{
    const userdata=useSelector((state:RootState)=> state.token.userData)
    const token = useSelector((state:RootState)=> state.token.token)
    const dispach=useDispatch()
    const [editPhone,setEditPhone]=useState(false)
    const [phone,setPhone]=useState(()=> userdata.phoneNumber ? userdata.phoneNumber :'')
    const [shownphone,setshownPhone]=useState(()=> userdata.phoneNumber ? userdata.phoneNumber :'')
    const [phoneError,setPhoneError]=useState('')
    const [address,setAddress]=useState('')
    const [showAddress,setShown]=useState('')
    const [editaddress,setEditaddress]=useState(false)
    
   
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues:{
        name: userdata.fullName.split(' ')[0] ? userdata.fullName.split(' ')[0]: '',
        lastname:userdata.fullName.split(' ')[1] ? userdata.fullName.split(' ')[1]:'',
        email:userdata.email ? userdata.email:''
    }});

    const onSubmit=(data:any)=>{
        if(!editPhone){
            const fullname:any=data.lastname.trim() != '' ? `${data.name} ${data.lastname}`:data.name
            UpdateStudent({fullName:fullname,email:data.email,phone:phone,birthDate:userdata.birthDate,national:userdata.nationalId,profile:userdata.profile} ,userdata._id, token,dispach)
        }
 
    }

    const phonenumber=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        const arr=shownphone.match(/[0-9]/) ?? []
        if (e.key == 'Enter' && shownphone.length==11 && arr.length >0){
            setEditPhone(false),
        setPhone(shownphone)
        setPhoneError('')
        }
        else if(e.key == "Escape"){
            setEditPhone(false)
            setshownPhone(phone)
            setPhoneError('')
        }
        else if(e.key == 'Enter' && shownphone.length != 11 || arr.length == 0){
           setPhoneError('شماره وارد شده صحیح نمی باشد')
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
             <section className=" grid justify-center items-start  gap-x-[90px] gap-y-[20px] mb-[49px] grid-cols-2 grid-rows-3">
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="name">نام</label>
                    <input {...register('name',{required:{value:true,message:'وارد کردن نام الزامی است'}})} id="name" className="h-[55px] focus:bg-white w-[350px] text-[23px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                    <small className=' text-red-600 text-sm'>{errors.name?.message as string}</small>
                
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="lastname">نام خانوادگی</label>
                    <input {...register('lastname')} id="lastname" className="h-[55px] focus:bg-white w-[350px] text-[23px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="number">شماره</label>
                    <span  style={{backgroundColor: editPhone ? 'white':undefined}} className="h-[55px] w-[350px] text-[23px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onBlur={()=>{setEditPhone(false)}} value={shownphone} onChange={(e)=>setshownPhone(e.target.value)} onKeyUp={phonenumber} style={{backgroundColor: editPhone ? 'white':undefined}} id="number" disabled={!editPhone ? true:false} className='h-[53px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
                       { !editPhone && <p onClick={()=>setEditPhone(true)} className=' cursor-pointer text-[21px] opacity-40 text-[#616161]'>Edit</p>}
                        </span>
                        <small className=' text-red-600'>{phoneError}</small>
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="email">ایمیل</label>
                    <input {...register('email',{
                        required: { value: true, message: "وارد کردن ایمیل الزامی است" },
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "ایمیل وارد شده صحیح نمی باشد" }
                    })}  id="email" className="h-[55px] focus:bg-white w-[350px] text-[23px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="role">نقش شما</label>
                    <input defaultValue={userdata.role == 'student' ? 'دانش آموز':'مدرس'} disabled id="role" className="h-[55px] focus:bg-white w-[350px] text-[23px] outline-none border-[0.5px] bg-[#F7F7F7] rounded-md px-1  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]" type="text" />
                </div>
                <div className=" flex flex-col justify-center gap-[15px] items-start">
                    <label className="text-[20px]" htmlFor="address">آدرس</label>
                    <span style={{backgroundColor: editaddress ? 'white':undefined}} className="h-[55px] w-[350px] text-[23px] gap-1 outline-none border-[0.5px] bg-[#F7F7F7] rounded-md  flex flex-row items-center  shadow-[2px_2px_8px_1px_rgba(0,0,0,0.2)]">
                        <input onBlur={()=>{setEditaddress(false)}} value={showAddress} onChange={(e)=>setShown(e.target.value)}  onKeyUp={addresschange} style={{backgroundColor: editaddress ? 'white':undefined}} id="address" disabled={!editaddress ? true:false} className='h-[53px] w-[300px] outline-none bg-[#F7F7F7] px-1 rounded-md'  type="phone" />
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