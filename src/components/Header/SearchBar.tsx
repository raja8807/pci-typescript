import React, { FC } from 'react'
import { FiSearch } from 'react-icons/fi'



const SearchBar: FC = () => {
    return (
        <div className='w-[500px] m-auto border border-green-dark items-center p-2 rounded-full'>
            <input type='text' placeholder='Search'
                className='w-full outline-none border-none px-2'
            />
            <FiSearch className='bg-green-dark h-[25px] w-[25px] text-white p-1 rounded-full' />
        </div>
    )
}


export default SearchBar