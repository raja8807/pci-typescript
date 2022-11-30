import React from 'react'

type Customer = {
    id: string
    name: string
    projects: number
    person: string
    location: string
    status: string
}

interface Props{
    customer : Customer
}

const CustomerCard = ({customer}:Props) => {
    return (
        <div className='w-full flex shadow-md p-5 h-[263px] border-2 border-grey rounded-xl my-6 mx-4
        
        md:w-[450px]'>
            <div className=' w-1/5 h-full'>
                <div className='w-[70px] h-[70px] rounded-full border shadow-md'>

                </div>
            </div>
            <div className='w-4/5 h-full '>
                <h2 className='text-green-dark text-2xl font-bold mb-2'>{customer.name}</h2>
                <p>ID : <span>{customer.id}</span></p>
                <div className='w-4/5  flex flex-wrap justify-between mt-[75px]'>
                    <button className='min-w-1/3 px-9  text-white font-bold bg-green-light rounded-full'><small>Manage</small></button>
                    <button className='min-w-1/3 px-6 text-green-light font-bold border-2 border-green-light rounded-full'><small>Quick View</small></button>

                    <button className='min-w-full mt-4 bg-green-dark text-white font-bold rounded-full'><small>Create Assessmet</small></button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard