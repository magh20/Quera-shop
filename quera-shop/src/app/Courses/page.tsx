'use client'
import { useState } from "react";

import Image from "next/image"
import course from '../../../public/assets/course.png'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

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

    return (
        <div className='w-full'>
            <div className='flex flex-col bg-white justify-center items-center '>
                <div className='flex flex-row items-center justify-center'>
                    <h1 className=' text-[52px] font-normal mr-8'>دوره های اموزشی</h1>
                    <Image src={course} className=" cursor-pointer" alt="course" />
                </div>
                <span className=" h-[4px] w-[500px] rounded-full bg-[#8C51C7] mt-7"></span>
            </div>
            <div className='bg-red-300 flex flex-row-reverse mt-[70px] mx-[80px]'>
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
                                <p className='text-[25px]'>همه</p>
                            </span>
                            <span
                                className={`rounded w-[60px] h-[50px] flex items-center justify-center cursor-pointer ${isFreeSelected ? "text-white bg-[#8C51C7]" : "text-[#616161]"
                                    }`}
                                onClick={handleFreeClick}
                            >
                                <p className='text-[25px]'>رایگان</p>
                            </span>
                            <span
                                className={`rounded w-[60px] h-[50px] flex items-center justify-center cursor-pointer ${isPaidSelected ? "text-white bg-[#8C51C7]" : "text-[#616161]"
                                    }`}
                                onClick={handlePaidClick}
                            >
                                <p className='text-[25px]'>پولی</p>
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
                <div className='bg-pink-400 w-[100px] h-[100px]'></div>
            </div>
        </div>
    );
}

export default courses;