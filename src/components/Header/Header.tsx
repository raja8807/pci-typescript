import React, { FC, useState } from 'react'
import logo from '../assets/logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Search from './Search'

interface Props {
    showHeader: boolean
    setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}


const Header = ({ showHeader, setShowHeader }: Props) => {

    // const [showHeader, setShowHeader] = useState<boolean>(false)

    return (
        <header className='bg-white w-screen px-5 fixed top-0 z-50 border-b-2 border-b-grey'>
            <div className='h-[85px] flex items-center justify-between'>
                <img src={logo} alt="logo"
                    className='h-[50px]'
                />

                <Search display={'w-[500px] hidden md:flex'} />


                <div onClick={(): void => {
                    setShowHeader(!showHeader)
                }}>
                    {
                        showHeader ?
                            <AiOutlineClose className='w-[35px] h-[35px]  cursor-pointer text-green-dark
                        md:hidden'/>
                            :
                            <AiOutlineMenu className='w-[35px] h-[35px]  cursor-pointer text-green-dark
                        md:hidden'/>
                    }

                </div>
            </div>
            <div className={`${showHeader ? "h-auto" : "h-0"} overflow-hidden
            md:hidden`}>
                <Search display={'w-3/4 flex'} />
               
            </div>
        </header>
    )
}

export default Header