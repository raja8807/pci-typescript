import React, { FC, useState } from 'react'
import logo from '../assets/logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import Search from './Search'




const Header: FC = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <header className='bg-white px-5 sticky top-0 z-10 border-b-2 border-b-grey'>
            <div className='h-[85px] flex items-center justify-between
    md:h-[100px] 
    '>
                <img src={logo} alt="logo"
                    className='h-[50px]
        md:h-[64px]'
                />
                
                <Search display={'w-[500px] hidden md:flex'} />


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
                   
                    <Search display={'w-3/4 flex'} />
                </div>
            }
        </header>
    )
}

export default Header