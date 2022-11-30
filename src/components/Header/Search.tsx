import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {
    display:string
}

const Search = ({display}:Props) => {
    return (
        <div className={`m-auto ${display} border-2 border-green-dark items-center p-1 rounded-full`}>
            <input type='text' placeholder='Search'
                className='w-full outline-none border-none px-2 h-[20px]'
            />
            <FiSearch className='bg-green-dark h-[20px] w-[20px] text-white p-1 rounded-full' />
        </div>
    )
}

export default Search