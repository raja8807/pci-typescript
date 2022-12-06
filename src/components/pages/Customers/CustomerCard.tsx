import React, { useState } from 'react'

import { AiFillCaretDown, AiFillStar } from 'react-icons/ai'


import logo from '../../assets/custLogo.png'

type Customer = {
    id: string
    name: string
    projects: number
    person: string
    location: string
    status: string
}

interface Props {
    customer: Customer
    addToFav: (customerName: string) => void
}

const CustomerCard = ({ customer, addToFav }: Props) => {

    const [checked, setChecked] = useState<boolean>(false)
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [addedToFav, setAddedToFav] = useState<boolean>(false)

    function check(): void {
        setChecked(!checked)
        setShowOptions(false)
    }

    // function addToFav(): void {
    //     setChecked(!checked)
    // }
    return (
        <div className={`relative w-full flex shadow-md p-5 border-2 border-grey rounded-xl my-6 
        ${checked && 'bg-grey'}
        md:w-auto`}>

            <div className='flex absolute right-5 gap-1'>

                {/* <div className='sm:hidden'>
                    <AiFillCaretDown className='mr-0 ml-auto cursor-pointer'
                        onClick={(): void => {
                            setShowOptions(!showOptions)
                        }}
                    />
                    {
                        showOptions &&
                        <div className='cursor-pointer bg-grey shadow-lg rounded-md border border-green-light'>
                            <p className='px-4 border-b-2 hover:bg-green-light rounded-t-md'
                                onClick={() => {
                                    check()
                                }}>Check</p>
                            <p className='px-4 hover:bg-green-light rounded-b-md'>Add To Favourites</p>
                        </div>
                    }
                </div> */}

                <div className='cursor-pointer p-[2px] h-[18px] w-[18px] rounded-full border-2 border-green-light
                sm:h-[22px] sm:w-[22px]'
                    onClick={(): void => {
                        check()
                    }}>
                    {
                        checked &&
                        <div className='h-full w-full rounded-full bg-green-light'>

                        </div>
                    }
                </div>

                <AiFillStar className={`cursor-pointer h-[20px] w-[20px] 
                sm:h-[24px] sm:w-[24px] 
                ${addedToFav ? 'text-green-light' : 'text-gray-300'}`}
                    onClick={(): void => {
                        
                        if(!addedToFav){
                            addToFav(customer.name)
                        }else{
                            addToFav(customer.name)
                        }
                        setAddedToFav(!addedToFav)
                    }} />

            </div>



            <div className=' w-1/5 h-full'>
                <div className='w-full rounded-full border shadow-md'>
                    <img src={logo} className='w-full h-auto' />
                </div>
            </div>

            <div className='w-3/5 h-full ml-4'>
                <h2 className='text-green-dark text-2xl font-bold mb-2'>{customer.name}</h2>

                <p>ID : <span>{customer.id}</span></p>

                <div className='grid grid-cols-2 gap-x-4 gap-y-1  text-white text-sm font-semibold
sm:grid-cols-4'>

                    <div className='h-[24px] bg-green-light rounded-full flex items-center'>
                        <div className='h-[20px] w-[20px] rounded-full bg-white ml-[2px]'>
                        </div>
                        <small className='m-auto'>{customer.projects}</small>
                    </div>

                    <div className='h-[24px] bg-green-light rounded-full flex items-center'>
                        <div className='h-[20px] w-[20px] rounded-full bg-white ml-[2px]'>
                        </div>
                        <small className='m-auto'>{customer.person}</small>
                    </div>

                    <div className='h-[24px] bg-green-light rounded-full flex items-center'>
                        <div className='h-[20px] w-[20px] rounded-full bg-white ml-[2px]'>
                        </div>
                        <small className='m-auto'>{customer.location}</small>
                    </div>

                    <div className='h-[24px] bg-green-light rounded-full flex items-center'>
                        <div className='h-[20px] w-[20px] rounded-full bg-white ml-[2px]'>
                        </div>
                        <small className='m-auto'>{customer.status}</small>
                    </div>


                </div>

                <small className='text-xs
                sm:text-sm'>ROC due date : 04-28-2023</small>

                <div className='customer-button-area text-sm
                sm:text-base'>
                    <button className='text-white bg-green-light font-bold rounded-full'><small>Quick View</small></button>
                    <button className='text-green-light font-bold border-2 border-green-light rounded-full'><small>Quick View</small></button>

                    <button className='full-btn bg-green-dark text-white font-bold rounded-full'><small>Create Assessmet</small></button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard