import React, { FC, useState } from 'react'
import logo from '../assets/logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'


const Header: FC = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <header className='bg-white px-5'>
            <div className='h-[85px] flex items-center justify-between
    md:h-[100px] 
    '>
                <img src={logo} alt="logo"
                    className='h-[50px]
        md:h-[64px]'
                />

                <div className='w-[500px] m-auto hidden border border-green-dark items-center p-2 rounded-full
                md:flex'>
                    <input type='text' placeholder='Search'
                        className='w-full outline-none border-none px-2'
                    />
                    <FiSearch className='bg-green-dark h-[25px] w-[25px] text-white p-1 rounded-full' />
                </div>

                <div onClick={(): void => {
                    setShowMenu(!showMenu)
                }}>
                    {
                        showMenu ?
                            <AiOutlineClose className='w-[35px] h-[35px]  cursor-pointer text-green-dark
                        md:hidden'/>
                            :
                            <AiOutlineMenu className='w-[35px] h-[35px]  cursor-pointer text-green-dark
                        md:hidden'/>
                    }
                </div>
            </div>
            {
                showMenu &&
                <div className='md:hidden'>
                    <div className='w-[300px] m-auto flex border border-green-dark items-center p-1 rounded-full'>
                        <input type='text' placeholder='Search'
                            className='w-full outline-none border-none px-2 h-[20px]'
                        />
                        <FiSearch className='bg-green-dark h-[20px] w-[20px] text-white p-1 rounded-full' />
                    </div>
                </div>
            }
        </header>
    )
}

export default Header