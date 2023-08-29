'use client'
import { useState } from "react";

import Image from "next/image"
import course from '../../../public/assets/course.png'
import angle from '../../../public/assets/angle-left.png'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import WestIcon from '@mui/icons-material/West';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image_1 from '../../../public/assets/courseSample1.png'
import image_2 from '../../../public/assets/courseSample2.png'

type allCourses =
    {
        id: number,
        name: string,
        teacher: string,
        price?: number,
        image?: string,
        view?: number,
        des?: string
    }


const courses = () => {

    const [isFreeSelected, setIsFreeSelected] = useState(false);
    const [isPaidSelected, setIsPaidSelected] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(true);

    const handleFreeClick = () => {
        setIsAllSelected(false);
        setIsFreeSelected(true);
        setIsPaidSelected(false);
    };

    const handlePaidClick = () => {
        setIsAllSelected(false);
        setIsFreeSelected(false);
        setIsPaidSelected(true);
    };

    const handleAllClick = () => {
        setIsAllSelected(true);
        setIsFreeSelected(false);
        setIsPaidSelected(false);
    };

    const allCourses: allCourses[] = [{ id: 1, name: 'آموزش بوت استرپ 4', teacher: 'سالار امیر عظیمی نیلی', price: 1200000, image: 'image_1' }, { id: 2, name: 'آموزش گوگل تگ منیجر', teacher: 'سالار امیر عظیمی نیلی', price: 0, image: 'image_2' },
    { id: 3, name: 'آموزش بوت استرپ 4', teacher: 'سالار امیر عظیمی نیلی', price: 1200000, image: 'image_1' }, { id: 4, name: 'آموزش گوگل تگ منیجر', teacher: 'سالار امیر عظیمی نیلی', price: 0, image: 'image_2' },
    { id: 5, name: 'آموزش بوت استرپ 4', teacher: 'سالار امیر عظیمی نیلی', price: 1200000, image: 'image_1' }, { id: 6, name: 'آموزش گوگل تگ منیجر', teacher: 'سالار امیر عظیمی نیلی', price: 0, image: 'image_2' }]


    return (
        <div className='w-full'>
            <div className='flex flex-col bg-white justify-center items-center '>
                <div className='flex flex-row items-center justify-center'>
                    <h1 className=' text-[52px] font-normal mr-8'>دوره های اموزشی</h1>
                    <Image src={course} className=" cursor-pointer" alt="course" />
                </div>
                <span className=" h-[4px] w-[500px] rounded-full bg-[#8C51C7] mt-7"></span>
            </div>
            <div className='bg-white flex flex-row-reverse mt-[70px] mx-[80px] gap-9'>
                {/* filter section */}
                <div className='bg-[#F7F7F7] w-[400px] h-[1038px] p-6 border-[2px] rounded-xl shadow-lg border-slate-200' dir='rtl'>
                    <h1 className='text-[31px]'>فیلتر بر اساس قیمت</h1>

                    <div className='flex flex-col justify-start items-start mt-3'>
                        <div className='flex flex-row gap-4'>
                            <span
                                className={`rounded w-[60px] h-[50px] flex items-center justify-center cursor-pointer ${isAllSelected ? "text-white bg-[#8C51C7]" : "text-[#616161]"
                                    }`}
                                onClick={handleAllClick}
                            >
                                <p className='text-[20px]'>همه</p>
                            </span>
                            <span
                                className={`rounded w-[60px] h-[50px] flex items-center justify-center cursor-pointer ${isFreeSelected ? "text-white bg-[#8C51C7]" : "text-[#616161]"
                                    }`}
                                onClick={handleFreeClick}
                            >
                                <p className='text-[20px]'>رایگان</p>
                            </span>
                            <span
                                className={`rounded w-[60px] h-[50px] flex items-center justify-center cursor-pointer ${isPaidSelected ? "text-white bg-[#8C51C7]" : "text-[#616161]"
                                    }`}
                                onClick={handlePaidClick}
                            >
                                <p className='text-[20px]'>پولی</p>
                            </span>
                        </div>
                        <span className=" h-[4px] w-[215px] rounded-full bg-[#8C51C7] mt-2"></span>
                    </div>

                    <div className='mt-7'>
                        <h1 className='text-[31px] mb-7'> فیلتر بر اساس دسته بندی </h1>
                        <div className='flex flex-col'>
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '22px' }}>برنامه نویسی موبایل</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '22px' }}>برنامه نویسی وب</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>ASP.net</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>PHP</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>.NET CORE</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>Laravel</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>.NET MVC</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '22px' }}>برنامه نویسی ویندوز</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '22px' }}>طراحی وب</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>HTML</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>CSS</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>JAVASCRIPT</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>BootStrap</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>React</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>UIUX</Typography>
                            } />
                            <FormControlLabel control={<Checkbox sx={{ color: purple[800], '&.Mui-checked': { color: purple[800], }, }} />} label={
                                <Typography style={{ fontSize: '20px' }}>Angular</Typography>
                            } />
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full h-[100px]' dir="rtl">
                    <div className=" grid grid-cols-4  gap-[40px] ">
                        {allCourses.map((item: any) => {
                            return (
                                <div
                                    key={item.id}
                                    className=" flex bg-white flex-col flex-shrink-0 rounded-xl shadow-[0_1px_6px_2px_rgba(0,0,0,0.2)]"
                                >
                                    <Image
                                        src={image_2}

                                        className=" w-full h-full "
                                        alt="CourseImg"
                                    />
                                    <span className=" flex mt-2 flex-col gap-[8px] pr-3  justify-start px-1 border-b-[2px] pb-5 border-b-[#DBDADA]">
                                        <h4>{item.name}</h4>
                                        <span className="  flex flex-row items-center gap-2">
                                            <PersonIcon className=" text-gray-500" />
                                            <small className=" text-[12px]">{item.teacher}</small>
                                        </span>
                                        <span className="  flex flex-row ite gap-1">
                                            <p className=" text-[12px]">امتیاز:</p>
                                            <StarIcon className=" text-yellow-400 !text-[18px] " />
                                            <StarIcon className=" text-yellow-400 !text-[18px] " />
                                            <StarIcon className=" text-yellow-400 !text-[18px] " />
                                            <StarIcon className=" text-yellow-400 !text-[18px] " />
                                            <StarIcon className=" text-yellow-400 !text-[18px] " />
                                        </span>
                                        <span className=" flex gap-[12px] flex-row items-center">
                                            <AccessTimeIcon className=" !text-[#00B3E9] !text-[18px]" />
                                            <p className="text-[#00B3E9] text-[13px]">02:01:21</p>
                                        </span>
                                    </span>
                                    <span className=" pr-3  flex flex-row px-2 py-5 justify-between">
                                        <span className="  flex text-[#00B3E9] gap-1 flex-row items-center">
                                            {item.price == 0 ? (
                                                <p>رایگان</p>
                                            ) : (
                                                <>
                                                    {item.price}
                                                    <p className=" text-[#00B3E9]">تومان</p>
                                                </>
                                            )}
                                        </span>
                                        <span>
                                            <WestIcon className=" cursor-pointer text-[#8C51C7]" />
                                        </span>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center items-center mt-10 gap-3">
                        <div className="w-[50px] h-[50px] bg-[#F7F7F7] border-[1px] border-[#D6D6D6] rounded-lg flex justify-center items-center">
                            <p><Image src={angle} className="w-[10px] cursor-pointer" alt="angle"/></p>
                        </div>
                        <div className="w-[50px] h-[50px] bg-[#F7F7F7] border-[1px] border-[#D6D6D6] rounded-lg flex justify-center items-center">
                            <p>1</p>
                        </div>
                        <div className="w-[50px] h-[50px] bg-[#F7F7F7] border-[1px] border-[#D6D6D6] rounded-lg flex justify-center items-center">
                            <p><Image src={angle} className="w-[10px] rotate-180 cursor-pointer" alt="angle"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default courses;