import React, { useState } from 'react'

import { MdDashboard, MdOutlinePeopleAlt } from 'react-icons/md'
import { BsFillFileEarmarkBarGraphFill, BsPersonSquare, BsQuestionCircleFill, BsChevronLeft } from 'react-icons/bs'
import { FaIdCardAlt } from 'react-icons/fa'

// import {BsPlus, BsQuestion, } from 'react-icons/bs'


const Sidebar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='z-10'>
            <div className={`w-[85px] ${show ? 'flex' : 'hidden'} flex-col items-center text-center fixed bg-grey
        md:flex`}>

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

            <div className={`cursor-pointer fixed top-1/2 left-${show ? '[90px]' : '0'}  py-2 rounded-xl opacity-25 
            hover:bg-green-light hover:opacity-50
            md:hidden`}
                onClick={(): void => {
                    setShow(!show)
                }}>
                <BsChevronLeft className={`rotate-${show ? '0' : '180'} h-[25px] w-[25px] text-green-dark`} />
            </div>
        </div>
    )
}

export default Sidebar