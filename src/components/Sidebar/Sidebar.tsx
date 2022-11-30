import React from 'react'

import { MdDashboard, MdOutlinePeopleAlt } from 'react-icons/md'
import { BsFillFileEarmarkBarGraphFill, BsPersonSquare, BsQuestionCircleFill, BsChevronLeft } from 'react-icons/bs'
import { FaIdCardAlt } from 'react-icons/fa'

// import {BsPlus, BsQuestion, } from 'react-icons/bs'


const Sidebar = () => {
    return (
        <div className='w-[85px] hidden flex-col items-center text-center fixed bg-grey
        sm:flex'>

            <div className='h-[85px] w-full flex justify-center items-center cursor-pointer'>
                <div className='border-2 border-green-light h-[50px] w-[50px] rounded-md flex justify-center items-center'>
                    <BsChevronLeft className='w-[25px] h-[25px] text-green-dark' />
                </div>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <MdDashboard className='text-white w-[29px] h-[29px]' />
                </div>
                <p className=' text-sm font-semibold'>Dashboard</p>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <BsFillFileEarmarkBarGraphFill className='text-white w-[29px] h-[29px]' />
                </div>
                <p className='text-sm font-semibold'>Assesments</p>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <MdOutlinePeopleAlt className='text-white w-[29px] h-[29px]' />
                </div>
                <p className='text-sm font-semibold'>Customer</p>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <FaIdCardAlt className='text-white w-[29px] h-[29px]' />
                </div>
                <p className='text-sm font-semibold'>Assessor</p>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <BsPersonSquare className='text-white w-[29px] h-[29px]' />
                </div>
                <p className='text-sm font-semibold'>QA Review</p>
            </div>

            <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'>
                <div className='w-[70px] h-[50px] bg-green-light rounded-md flex justify-center items-center hover:bg-green-dark '>
                    <BsQuestionCircleFill className='text-white w-[29px] h-[29px]' />
                </div>
                <p className='text-sm font-semibold'>FAQ</p>
            </div>
        </div>
    )
}

export default Sidebar