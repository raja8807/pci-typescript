import React, { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'

import AppContext from '../context/AppContext'

import { MdDashboard, MdOutlinePeopleAlt } from 'react-icons/md'
import { BsFillFileEarmarkBarGraphFill, BsPersonSquare, BsQuestionCircleFill, BsChevronLeft } from 'react-icons/bs'
import { FaIdCardAlt } from 'react-icons/fa'

interface Props {
    showSideBar: boolean
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ showSideBar, setShowSideBar }: Props) => {

    const navigateTo = useNavigate()

    const currentPage = useContext(AppContext).currentPage
    const setCurrentPage = useContext(AppContext).setCurrentPage

    return (
        <div className='z-40'>
            <div className={`sidebar pt-[85px] ${showSideBar ? 'w-[85px]' : 'w-0'} overflow-x-hidden flex flex-col items-center text-center fixed bg-grey h-screen overflow-y-scroll
        md:w-[85px]`}>
                <div className='my-3 h-[85px] w-full flex justify-center items-center cursor-pointer'>
                    <div className='border-2 border-green-light h-[50px] w-[50px] rounded-md flex justify-center items-center'>
                        <BsChevronLeft className='w-[25px] h-[25px] text-green-dark' />
                    </div>
                </div>

                <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('dashboard')
                    setShowSideBar(false)
                    navigateTo('/')

                }}>
                    <div className={`w-[70px] h-[50px] rounded-md flex justify-center items-center hover:bg-green-dark 
                    ${currentPage == 'dashboard' ? 'bg-green-dark' : 'bg-green-light'}`}>
                        <MdDashboard className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className=' text-sm font-semibold'>Dashboard</p>
                </div>

                <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('assesments')
                    setShowSideBar(false)
                    navigateTo('/assesments')
                }}>
                    <div className={`w-[70px] h-[50px] rounded-md flex justify-center items-center hover:bg-green-dark 
                    ${currentPage == 'assesments' ? 'bg-green-dark' : 'bg-green-light'}`}>
                        <BsFillFileEarmarkBarGraphFill className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className='text-sm font-semibold'>Assesments</p>
                </div>

                <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('customer')
                    setShowSideBar(false)
                    navigateTo('/manage-customer')

                }}>
                    <div className={`w-[70px] h-[50px] rounded-md flex justify-center items-center hover:bg-green-dark 
                    ${currentPage == 'customer' ? 'bg-green-dark' : 'bg-green-light'}`}>
                        <MdOutlinePeopleAlt className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className='text-sm font-semibold'>Customer</p>
                </div>

                <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('assessor')
                    setShowSideBar(false)
                }}>
                    <div className={`w-[70px] h-[50px] rounded-md flex justify-center items-center hover:bg-green-dark 
                    ${currentPage == 'assessor' ? 'bg-green-dark' : 'bg-green-light'}`}>
                        <FaIdCardAlt className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className='text-sm font-semibold'>Assessor</p>
                </div>

                <div className='mb-3 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('qareview')
                    setShowSideBar(false)
                }}>
                    <div className={`w-[70px] h-[50px] rounded-md flex justify-center items-center hover:bg-green-dark 
                    ${currentPage == 'qareview' ? 'bg-green-dark' : 'bg-green-light'}`}>
                        <BsPersonSquare className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className='text-sm font-semibold'>QA Review</p>
                </div>

                <div className='mb-8 text-green-light  hover:text-green-dark cursor-pointer'
                onClick={():void=>{
                    setCurrentPage('faq')
                    setShowSideBar(false)
                }}>
                    <div className={`w-[70px] h-[50px] ${currentPage=='faq'?'bg-green-dark':'bg-green-light'} rounded-md flex justify-center items-center hover:bg-green-dark `}>
                        <BsQuestionCircleFill className='text-white w-[29px] h-[29px]' />
                    </div>
                    <p className='text-sm font-semibold'>FAQ</p>
                </div>


            </div>

            <div className={`cursor-pointer fixed top-1/2 ${showSideBar ? 'left-[90px]' : 'left-0'}  py-2 rounded-xl z-50
            hover:bg-green-light hover:opacity-50
            md:hidden`}
                onClick={(): void => {
                    setShowSideBar(!showSideBar)
                }}>
                <BsChevronLeft className={`${showSideBar ? 'rotate-0' : 'rotate-180'} h-[25px] w-[25px] text-green-dark`} />
            </div>
        </div>
    )
}

export default Sidebar